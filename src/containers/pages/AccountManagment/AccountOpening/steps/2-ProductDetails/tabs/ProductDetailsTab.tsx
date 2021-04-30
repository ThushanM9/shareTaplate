import { SearchOutlined } from "@ant-design/icons";
import { Input, Spin } from "antd";
import React, {
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useState
} from "react";
import { FormCardTemplate } from "../../../../../../../schemas/helpers/form-card";
import { EditableWidgetSchema_Value } from "../../../../../../../schemas/widget-schema";
import { LOLCSDK } from "../../../../../../../sdk";
import { Product } from "../../../../../../../sdk/casa-product-bca/interfaces";
import { useSDK } from "../../../../../../../utils/hooks/useSDK";
import { P } from "../../../../../../atoms/typography";
import { AccountOpeningContainerContext } from "../../../AccountOpeningContext";
import { AccountOpeningSchema } from "../../../schema";
import SelectableButton from "../components/SelectableButton";
import SubProductItem from "../components/SubProductItem";

const ProductDetailsButtons = forwardRef(
  (
    props: {
      setProduct: Function;
      setAccountType: Function;
      setSubProduct: Function;
      subProduct: string;
      product: string;
      accountType: string;
    },
    ref
  ) => {
    const { state, setState } = useContext(AccountOpeningContainerContext);
    // Schema Definition
    const currentStep = 1;
    const currentCard = 0;
    const productSchema = AccountOpeningSchema.steps![currentStep]!.cards![
      currentCard
    ];
    const [subProductId, setSubProductId] = useState("");
    const [categoryId, setCategoryId] = useState(
      state.globalFormState.casaProduct || ""
    );

    const [selectedSubProductId, setSelectedSubProductId] = useState(
      state.globalFormState.casaSubProductId || -1
    );

    // Form Data

    const {
      accountType,
      casaProduct,
      casaSubProductId,
      casaSubProductCode,
      accountProductCode,
      casaCurrency,
      casaCurrencyCode,
      casaCurrencyNumeric,
      productType,
      casaProductCategory,
      accountProductCategoryCode,
      accountSubType,
    } = state.globalFormState;

    const [formData, _setFormData] = useState({
      // accountType: "",
      // casaProduct: 0,
      // casaSubProductId: 0,
      // casaSubProductCode: "",
      // casaCurrency: "",
      // casaCurrencyCode: "",
      // casaCurrencyNumeric: "",
      accountType,
      casaProduct,
      casaSubProductId,
      casaSubProductCode,
      accountProductCode,
      casaCurrency,
      casaCurrencyCode,
      casaCurrencyNumeric,
      productType,
      casaProductCategory,
      accountProductCategoryCode,
      accountSubType,
    } as any);

    useImperativeHandle(ref, () => ({
      validateCard() {
        return [];
      },
    }));

    const setFormData = (edits: Partial<typeof formData>) =>
      _setFormData({ ...formData, ...edits });

    // Sub Product Search
    const [subProductSearchInput, setSubProductSearchInput] = useState("");

    // Data Fetching
    const { data: mainProduct, loading: isMainProductLoading } = useSDK<
      Product[]
    >(
      (SDK) => productSchema.fields[1]!.spec?.api(SDK)(formData.accountType),
      [formData.accountType],
      false,
      []
    );
    // console.log("MainProduct", mainProduct);
    const { data: subProducts, loading: isSubProductLoading } = useSDK(
      //! add id to here
      (sdk: LOLCSDK) =>
        sdk.ProductBCAService.getSubProductsByProductId(Number(categoryId)),
      // sdk.ProductBCAService.getProductSubProductByIdentification(),
      [categoryId],
      false,
      []
    );

    // Update Global Form
    useEffect(() => {
      setState({
        ...state,
        globalFormState: {
          ...state.globalFormState,
          ...(formData as any),
        },
      });
      // debugger;
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formData, setState]);

    const { data: productSubProducts } = useSDK(
      //! add id to here
      (sdk: LOLCSDK) =>
        sdk.ProductBCAService.getProductSubProductByIdentification(
          subProductId
        ).then((data: any) => {
          if (data) {
            setFormData({
              casaAccountSubTypeId: data.accountSubTypeId,
              casaAccountSubType: data.accountSubType,
              casaProductCategory: data.productCategoryId,
              accountProductCategoryCode: data.productCategory,
              casaSubProductId: selectedSubProductId,
              casaSubProductCode: subProductId,
            });
          }
        }),
      [subProductId],
      false,
      []
    );

    const visibleSubProducts = (subProducts || []).filter((subproduct) =>
      subproduct.name
        .toLowerCase()
        .includes(subProductSearchInput.toLowerCase())
    );

    useSDK(
      async (sdk: LOLCSDK) =>
        await sdk.ProductBCAService.getSubProductCommonDetailsByIdentification(
          formData.casaSubProductCode
        ).then((data) => {
          // debugger;
          setFormData({
            casaCurrency: data.currencyId!,
            casaCurrencyCode: data.currencyCode!,
            casaCurrencyNumeric: data.currencyNumeric!,
          });
        }),
      [formData.casaSubProductCode],
      false,
      []
    );

    return (
      <FormCardTemplate
        title={productSchema.title}
        description={productSchema.description || ""}
      >
        <Spin spinning={isSubProductLoading}>
          {/* Account type */}
          <P className='my-4 font-bold'>{productSchema.fields[0]!.label}</P>
          <div className='flex'>
            {productSchema.fields[0]!.values!.map(
              (item: EditableWidgetSchema_Value, index: number) => {
                return (
                  <SelectableButton
                    label={item.label}
                    onClick={() => {
                      setFormData({
                        accountType: item.value,
                      });
                    }}
                    isSelected={formData.accountType === item.value}
                  />
                );
              }
            )}
          </div>
          {/* Main Category  */}
          <div
            style={
              formData.accountType !== "SAVINGS"
                ? { display: "none" }
                : { display: "block" }
            }
          >
            <P className='my-4 font-bold'>{productSchema.fields[1]!.label}</P>
            <div className='flex flex-wrap'>
              {!isMainProductLoading ? (
                mainProduct?.map(
                  (item: any, index) =>
                    item.accountType === "SAVINGS" && (
                      <SelectableButton
                        label={item.name}
                        onClick={() => {
                          setFormData({
                            casaProduct: item.id,
                            accountProductCode: item.identification,
                            productType: item.productType,
                          });
                          setCategoryId(String(item.id));
                        }}
                        isSelected={formData.casaProduct === item.id}
                      />
                    )
                )
              ) : (
                  <p>No main products available for selected account type</p>
                )}
            </div>
          </div>
          {/* Sub Products */}
          <div
            style={
              formData.accountType === ""
                ? { display: "none" }
                : { display: "block" }
            }
          >
            <P className='my-4 font-bold'>{productSchema.fields[2]!.label}</P>
            <Input
              className='w-1/2 text-xxxs h-6 productDetailsSearch mb-4'
              placeholder='Search Product'
              prefix={<SearchOutlined className='text-gray-500' />}
              onChange={(e) => {
                setSubProductSearchInput(e.target.value);
              }}
            ></Input>
            <div className='flex flex-wrap '>
              {!isSubProductLoading ? (
                visibleSubProducts.map((item, index) => {
                  return (
                    <SubProductItem
                      // isSelected={selectedSubProductId == item.id}
                      title={item.name}
                      content={item.coreProductDetail?.productDescription}
                      isSelected={selectedSubProductId === item.id}
                      onClick={() => {
                        setSelectedSubProductId(item.id);
                        setSubProductId(item.identification);
                      }}
                    />
                  );
                })
              ) : (
                  <p>sub products loading...</p>
                )}
            </div>
          </div>
        </Spin>
      </FormCardTemplate>
    );
  }
);

export default ProductDetailsButtons;
