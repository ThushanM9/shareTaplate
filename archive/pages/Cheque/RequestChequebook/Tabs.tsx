// import { QuestionCircleOutlined } from "@ant-design/icons";
// import { Modal } from "antd";
import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router";
// import { UIStateSliceActions } from "../../../../store/modules/ui-state/ui-state.slice";
// import { iStore } from "../../../../store/store.model";
// import { NormalButton } from "../../../atoms/Button";
// import CustomerDetailsTab from "../../../organisms/customerTabs/CustomerDetailsTab/CustomerDetailsTab";
// import GuardianDetailsTab from "../../../organisms/customerTabs/GuardianDetailsTab";
// import NomineeDetailsTab from "../../../organisms/customerTabs/NomineeDetailsTab";
// import RouterDivTemplate from "../../../templates/AccountManagement/RouterDivTemplate";
// import ScrollTabTemplate from "../../../templates/AccountManagement/ScrollTabTemplate";
// import { DispatchDetails } from "./DispatchDetails";
// import Eligibility from "./Eligibility";
// import { RequestDetails } from "./RequestDetails";

export const Tabs = () => <div></div>;

// const Tabs: React.FC<{
//   selectedCustomer: string;
//   setSelectedCustomer: (customer: string | null) => void;
// }> = ({ selectedCustomer, setSelectedCustomer }) => {
//   const dispatch = useDispatch();
//   const history = useHistory();

//   const currentStep = useSelector(
//     (state: iStore) => state.uiState.steps.cheque.current
//   );

//   const handlePrevClick = () => {
//     if (currentStep === 0) {
//       setSelectedCustomer(null);
//     } else {
//       dispatch(
//         UIStateSliceActions.decrementSteps({ category: "signature", route: "" })
//       );
//     }
//   };
//   const handleNextClick = () => {
//     dispatch(
//       UIStateSliceActions.incrementSteps({ category: "signature", route: "" })
//     );
//   };
//   const handleConfirmClick = () => {
//     Modal.confirm({
//       title: "Do you want to confirm this chequebook request?",
//       icon: <QuestionCircleOutlined />,
//       content: "Chequebook request will be added to pending list",
//       onOk() {
//         history.push("/pending_requests");
//         dispatch(UIStateSliceActions.clearSteps("cheque"));
//       }
//     });
//   };
//   const handleRejectClick = () => {
//     Modal.confirm({
//       title: "Reject Chequebook for John Doe?",
//       icon: <QuestionCircleOutlined />,
//       content: "Rejected Chequebook requests will be deleted immediately",
//       onOk() {
//         history.push("/pending_requests");
//         dispatch(UIStateSliceActions.clearSteps("cheque"));
//       }
//     });
//   };
//   const handleApproveClick = () => {
//     Modal.confirm({
//       title: "Approve Chequebook for John Doe?",
//       icon: <QuestionCircleOutlined />,
//       content: "Chequebook will be approved and dispatched",
//       onOk() {
//         history.push("/pending_requests");
//         dispatch(UIStateSliceActions.clearSteps("cheque"));
//       }
//     });
//   };

//   const conditionalRender = () => {
//     if (currentStep === 0) {
//       return (
//         <>
//           <RouterDivTemplate
//             tab={["Customer Details", "Guardian Details", "Nominee Details"]}
//             content={
//               <ScrollTabTemplate
//                 tabArr={[
//                   <CustomerDetailsTab />,
//                   <GuardianDetailsTab />,
//                   <NomineeDetailsTab />
//                 ]}
//               />
//             }
//             nav={
//               <>
//                 <NormalButton
//                   type="default"
//                   className="mr-1"
//                   onClick={handlePrevClick}
//                   title="Previous"
//                 />
//                 <NormalButton onClick={handleNextClick} title="Next" />
//               </>
//             }
//           />
//         </>
//       );
//     }

//     if (currentStep === 1) {
//       return (
//         <>
//           <RouterDivTemplate
//             tab={["Chequebook Eligibility"]}
//             content={<ScrollTabTemplate tabArr={[<Eligibility />]} />}
//             nav={
//               <>
//                 <NormalButton
//                   type="default"
//                   className="mr-1"
//                   onClick={handlePrevClick}
//                   title="Previous"
//                 />
//                 <NormalButton onClick={handleNextClick} title="Next" />
//               </>
//             }
//           />
//         </>
//       );
//     }
//     if (currentStep === 2) {
//       return (
//         <>
//           <RouterDivTemplate
//             tab={["Chequebook Request Details"]}
//             content={<ScrollTabTemplate tabArr={[<RequestDetails />]} />}
//             nav={
//               <>
//                 <NormalButton
//                   type="default"
//                   className="mr-1"
//                   onClick={handlePrevClick}
//                   title="Previous"
//                 />
//                 <NormalButton onClick={handleNextClick} title="Next" />
//               </>
//             }
//           />
//         </>
//       );
//     }
//     if (currentStep === 3) {
//       return (
//         <>
//           <RouterDivTemplate
//             tab={["Dispatch Details"]}
//             content={<ScrollTabTemplate tabArr={[<DispatchDetails />]} />}
//             nav={
//               <>
//                 <NormalButton
//                   type="default"
//                   className=" mr-16"
//                   onClick={handlePrevClick}
//                   title="Previous"
//                 />
//                 <NormalButton
//                   type="default"
//                   className="mr-1"
//                   onClick={handleRejectClick}
//                   title="Reject"
//                 />
//                 <NormalButton onClick={handleApproveClick} title="Approve" />
//               </>
//             }
//           />
//         </>
//       );
//     }
//   };

//   return <div className="relative w-full h-full">{conditionalRender()}</div>;
// };

// export default Tabs;
