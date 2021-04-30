import React from "react";
import BasicInput from "../../../../../../atoms/BasicInput.atom";
import InputContainer from "../../../../../../organisms/BasicAccountDetails/InputContainer";

function TransactionDetailsTab() {
  return (
    <div className="bg-white h-full relative">
      <div className="w-full flex p-10 flex-wrap">
        <InputContainer
          className="w-1/5 mb-10"
          title="Transaction ID"
          input={<BasicInput placeholder="42412424" disabled={true} />}
        />
        <InputContainer
          className="w-1/5"
          title="Transaction Date"
          input={<BasicInput placeholder="10-03-2012" disabled={true} />}
        />
        <InputContainer
          className="w-1/5"
          title="Transaction Amount "
          input={<BasicInput placeholder="4244" disabled={true} />}
        />
        <InputContainer
          className="w-1/5"
          title="Transaction ID"
          input={<BasicInput placeholder="42412424" disabled={true} />}
        />
        <InputContainer
          className="w-1/5"
          title="Charges"
          input={<BasicInput placeholder="10,000" disabled={true} />}
        />
        <InputContainer
          className="w-1/5"
          title="Tax"
          input={<BasicInput placeholder="10,000" disabled={true} />}
        />
        <InputContainer
          className="w-1/5"
          title="Created User"
          input={<BasicInput placeholder="John Doe" disabled={true} />}
        />
        <InputContainer
          className="w-1/5"
          title="Created Date and Time"
          input={<BasicInput placeholder="10-02-2020" disabled={true} />}
        />
      </div>
    </div>
  );
}

export default TransactionDetailsTab;
