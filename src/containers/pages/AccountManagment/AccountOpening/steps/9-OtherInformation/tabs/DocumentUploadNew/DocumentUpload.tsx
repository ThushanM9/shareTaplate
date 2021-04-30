import { DatePicker, Switch, Table } from "antd";
import moment from "moment";
import React, { useContext, useState } from "react";
import { FormCardTemplate } from "../../../../../../../../schemas/helpers/form-card";
import { LOLCSDK } from "../../../../../../../../sdk";
import { DocumentsResource } from "../../../../../../../../sdk/casa-account/interfaces";
import { useGetSDK, useSDK } from "../../../../../../../../utils/hooks/useSDK";
import { AccountOpeningContainerContext } from "../../../../AccountOpeningContext";
import { DocumentUploadModal } from "./DocumentUploadModal";
import { DocumentViewModal } from "./DocumentViewModal";
// const GetTypeName = () => {
//   const { data, loading } = useSDK(
//     (sdk: LOLCSDK) => {
//       return sdk.CommonService.getDocumentTypeDetailsById("1");
//     },
//     [],
//     false,
//     []
//   );

//   return !loading ? data : [];
// };

export const DocumentUpload = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [viewDocument, setViewDocument] = useState(false);
  const [checkListId, setCheckListId] = useState(-1);
  const [checkList, setChekclist] = useState<any>([]);
  const [uploadedDocumentId, setDocumentUploadedId] = useState<any>([]);
  const [documentDetails, setDocumentDetails] = useState<any>([]);
  const [selectedDoc, setSelectedDoc] = useState<number>(0);
  const [documentType, setDocumentType] = useState("");
  const [documentArray, setDocumentArray] = useState();
  const [modalData, setModalData] = useState<any>([]);
  const SDK = useGetSDK();
  let x: any = [];

  const [formData, _setFormData] = useState({
    id: 0,
    documentId: 0,
    documentName: "",
    documentStatus: "Received",
    documentType: 0,
    documentTypeDecs: "",
    mandatoryStatus: "Yes",
    // checkPoint: "KYC" | "ACCOUNT OPENING";
    // imagePath: "",
    recievedDate: "",
    status: "ACTIVE",
  });
  const setFormData = (edits: Partial<typeof formData>) =>
    _setFormData({ ...formData, ...edits });

  const { state, setState } = useContext(AccountOpeningContainerContext);

  const onView = async (record: any) => {
    setViewDocument(true);
    setDocumentType(record.documentTypeDecs);
    console.log("Record to View:", record);

    // if (!!state.globalFormState.documentDetails?.length) {
    //   for (let doc of state.globalFormState.documentDetails.filter(
    //     (item: any) => item.documentType === record.documentType
    //   )) {
    //     let x: any = [];
    //     for (const p of doc.documentList) {
    //       let sig = await SDK.DocumentUploadService.DocumentDownloadById(
    //         p.id,
    //         "customer"
    //       );
    //       x.push({
    //         url: window.URL.createObjectURL(sig),
    //         name: record.documentName,
    //         type: p.fileType,
    //       });
    //     }
    //     setModalData(x);
    //   }
    // }

    if (documentDetails.documentList) {
      let x: any = [];
      for (const p of documentDetails.documentList) {
        let sig = await SDK.DocumentUploadService.DocumentDownloadById(
          p.id,
          "customer"
        );

        x.push({
          url: window.URL.createObjectURL(sig),
          name: record.documentName,
          type: p.fileType,
        });
      }
      setModalData(x);
    }
  };

  const columns = [
    {
      title: "Document Type",
      dataIndex: "documentTypeName",
      key: "documentTypeName",
    },
    {
      title: "Document Name",
      dataIndex: "documentTypeDescription",
      key: "documentTypeDescription ",
    },
    {
      title: "Mandatory Indicator",
      dataIndex: "mandatoryIndicator",
      key: "mandatoryIndicator",
    },
    {
      title: "Collected",
      dataIndex: "status",
      key: "status",
      type: "checkbox",
      render: (text: any, record: any) => {
        return (
          <Switch
            onChange={(checked: any) => {
              console.log(checked);
              checked
                ? setFormData({ documentStatus: "Received" })
                : setFormData({ documentStatus: "Not Received" });

              console.log("CHECKLIST", checkList);

              setChekclist((prev: any) =>
                prev.map((item: any) => {
                  if (item.documentTypeName === record.documentTypeName) {
                    item.documentStatus = checked ? "Received" : "Not Received";
                    return item;
                  } else {
                    return item;
                  }
                })
              );
            }}
          />
        );
      },
    },
    {
      title: "Received Date",
      dataIndex: "recievedDate",
      key: "recievedDate",
      render: (text: any, record: any) => (
        <DatePicker
          onChange={(date, dateString) => {
            // console.log(date, dateString);
            setFormData({
              recievedDate: dateString,
              documentTypeDecs: record.desc,
              documentName: record.docName,
            });
            setChekclist((prev: any) =>
              prev.map((item: any) => {
                if (item.documentTypeName === record.documentTypeName) {
                  item.recievedDate = !!date
                    ? moment(date).format("yyyy/MM/DD")
                    : "";
                  return item;
                } else {
                  return item;
                }
              })
            );
          }}
          disabledDate={(current: any) => {
            return current > moment().endOf("day");
          }}
        ></DatePicker>
      ),
    },

    {
      title: "Actions",
      dataIndex: "address",
      key: "address",
      render: (text: any, record: any) => {
        console.log("recordddT", record);
        checkList?.map((item: any) => {});

        for (const item of checkList) {
          console.log("item@@", item);
          if (item.documentTypeName === record.documentTypeName) {
            if (
              !!item.recievedDate.length &&
              item.documentStatus!.toLowerCase() === "received"
            ) {
              return (
                <div className="flex">
                  <p
                    className="text-blue-500 mr-2 cursor-pointer"
                    onClick={() => onView(record)}
                  >
                    View
                  </p>
                  <p
                    className="text-blue-500 cursor-pointer"
                    onClick={() => {
                      setState({
                        ...state,
                        globalFormState: {
                          ...state.globalFormState,
                          // documentDetails: checkList,
                          documentDetails: [],
                        },
                      });
                      setIsVisible(true);
                      setSelectedDoc(record.documentTypeName);
                      setDocumentDetails(
                        checkList.filter((item: any) => item.id === record.id)
                      );
                    }}
                  >
                    Upload
                  </p>
                </div>
              );
            }
            return (
              <p className="text-sm text-gray-600">
                Select status and date to upload file
              </p>
            );
          } else {
            return <div />;
          }
        }
      },
    },
  ];

  // useEffect(() => {
  //   console.log("FORM", formData);
  // }, [formData]);

  //   http://132.145.228.83/casa-account/doc-check-list/AnRkr/product?accountSubType=Savings&accountType=Personal&customerSubType=1&productCategoryId=44&productCode=137

  const { payload: doc_payload } = useSDK(
    (sdk: LOLCSDK) => {
      return sdk.AccountService.getAllDocumentCheckListDetailsByRelatedProduct(
        "Savings",
        "Personal",
        String(1),
        44,
        137
        // data.AccountData.accountType,
        // data.AccountData.productType,
        // data.AccountData.accountPersonTypeId,
        // data.AccountData.productCategoryId,
        // data.AccountData.productId
      );
    },
    [],
    false,
    []
  );

  useSDK(
    (sdk: LOLCSDK) => {
      console.log("PAYLOAD", doc_payload.data);
      setCheckListId(doc_payload.data.id);
      return doc_payload.data.checkListDetail.map(async (item: any) => {
        let x = await sdk.CommonService.getDocumentTypeDetailsById(
          item.documentTypeId
        );
        console.log(item, "item from checklistDetails");

        console.log(x, "docuemnt type details");

        setChekclist((prev: any) => [
          ...prev,
          {
            ...item,
            documentList: [],
            documentStatus: "", // 'Yes' || 'No'
            // documentTypeDecs: item.documentTypeDescription,
            documentName: x.documentTypeName,
            mandatoryStatus:
              item.mandatoryIndicator?.charAt(0).toUpperCase() +
              item.mandatoryIndicator?.slice(1).toLowerCase(), //need to pass mandatoryStatus to backend
            documentTypeName: x.documentTypeName,
            documentType: x.documentTypeCode,
            // id: item.id,
            // status: false,
            recievedDate: "",
            origin: "customer",
          },
        ]);
      }) as any;
    },

    [doc_payload.data],
    doc_payload.loading,
    []
  );

  const setDocumentIdToState = (
    docId: number,
    docType: string,
    docName: string,
    size: number,
    uri: string
  ) => {
    console.log("docId :", docId, docType);
    // setState({
    //   ...state,
    //   globalFormState: {
    //     ...state.globalFormState,
    //     documentDetails: state.globalFormState.documentDetails?.map(
    //       (item: any) => {
    //         console.log("item eka:", item);
    //         if (item.documentType === selectedDoc) {
    //           item["documentList"] = [
    //             ...item.documentList,
    //             {
    //               fileDownloadUri: uri,
    //               fileName: docName,
    //               fileType: docType,
    //               id: docId,
    //               size,
    //             },
    //           ];
    //           // console.log("DOCOCO", docId);
    //           return item;
    //         } else {
    //           // console.log("DOCOCO1233", docId);
    //           return item;
    //         }
    //       }
    //     ),
    //   },
    // });
    //adding the uploaded file data to state
    setDocumentDetails((prev: any) => {
      console.log("prev :", prev);
      const i = prev.find(
        (el: any) => el.documentTypeDescription === selectedDoc
      );
      if (i) {
        let obj = { ...i };
        console.log("obj :", obj);
        obj.documentList = [
          {
            fileDownloadUri: uri,
            fileName: docName,
            fileType: docType,
            id: docId,
            size,
          },
        ];

        const arr: any = [
          ...(state.globalFormState.documentDetails as Array<
            DocumentsResource
          >),
        ];
        const newData = {
          ...checkList,
        };
        arr.push(...checkList);

        setState({
          ...state,
          globalFormState: {
            ...state.globalFormState,
            documentDetails: arr.map((el: any) => {
              if (el.documentTypeDescription === selectedDoc) {
                el.documentList = obj.documentList;
                return el;
              }
              return el;
            }),
          },
        });
        return obj;
      } else {
        console.log("no matching docType");
        return prev;
      }
    });
  };

  return (
    <>
      <DocumentUploadModal
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        setDocumentIdToState={setDocumentIdToState}
      />
      <DocumentViewModal
        viewDocument={viewDocument}
        setViewDocument={setViewDocument}
        modalData={modalData}
        setModalData={setModalData}
        docArray={x}
      />
      <FormCardTemplate title={"Document Upload"} description={""}>
        <Table
          rowKey={String(doc_payload.data.id)}
          columns={columns}
          scroll={{
            x: "max-content",
          }}
          // dataSource={!loading ? documents.checkListDetail : []}
          dataSource={checkList}
          pagination={false}
        ></Table>
      </FormCardTemplate>
    </>
  );
};

// {
//   "documentCheckListId": "string",
//   "documentList": [
//     {
//       "fileDownloadUri": "string",
//       "fileName": "string",
//       "fileType": "string",
//       "id": "string",
//       "size": "string"
//     }
//   ],
//   "documentName": "string",
//   "documentStatus": "string",
//   "documentType": "string",
//   "mandatoryStatus": "string",
//   "origin": "casaAccount",
//   "recievedDate": "string",
// }
