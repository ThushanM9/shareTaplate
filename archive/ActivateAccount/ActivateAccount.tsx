import { Button, Table, Tag } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setActiveAccountCharges } from '../../../../store/modules/SetActivateAccountChrages/setActiveAccountCharges.dispathcer';
import useGetAllPendingAccounts from '../../../../utils/hooks/ActivateAccount/useGetAllPendingAccounts';
import TabTableButtons from '../../../templates/FullTabTableTemplate/TabTableButtons';

function ActivateAccount() {
  const { data, loading } = useGetAllPendingAccounts();
  const tabName: any = useSelector(
    (state: any) => state.pendingRequest.tabState.activateAccount.name
  );
  const searchValue: string = useSelector(
    (state: any) => state.searchInvoiceValue.searchInvoiceValue
  );
  const [tableData, setTableData] = useState(data);
  const [tagColor, setTagColor] = useState('');
  console.log(searchValue);

  const columns = [
    {
      title: 'Account Name',
      dataIndex: 'name',
    },
    {
      title: 'Account Number',
      dataIndex: 'no',
    },
    {
      title: 'NIC',
      dataIndex: 'nic',
    },
    {
      title: 'Reference Code',
      dataIndex: 'code',
    },
    {
      title: 'Status',
      dataIndex: 'tag',
    },
    {
      title: 'Action',
      dataIndex: 'action',
    },
  ];

  useEffect(() => {
    switch (tabName) {
      case 'Pending':
        setTableData(data);
        setTagColor('orange');
        break;
      case 'Approved':
        setTableData([]);
        setTagColor('green');
        break;
      case 'Rejected':
        setTableData([]);
        setTagColor('red');
        break;
    }
  }, [data, tabName]);
  console.log('sfs');

  const dataT: any = !loading
    ? Object.values(tableData).map((item: any, index: number) => {
        if (searchValue !== '') {
        }
        return {
          key: index,
          name: item.casaCustomerName,
          no: item.casaCustomerId,
          nic: item.casaIdentification,
          code: item.casaSchemeCode,
          tag: (
            <Tag color={tagColor} className="transform scale-75 m-0">
              {item.specialRateStatus}
            </Tag>
          ),
          action: (
            <Button
              type="link"
              onClick={() => setActiveAccountCharges('activate')}
              className="text-xxs p-0"
            >
              <Link to={`/AnRkr/a/selected_customer/${item.casaCustomerId}`}>
                Activate
              </Link>
            </Button>
          ),
        };
      })
    : '';

  return (
    <div className="bg-white h-full p-4">
      <div className="relative  h-full flex flex-col">
        <TabTableButtons />
        <div className="pr-2 pl-2 mt-4 h-full">
          {!loading ? (
            <Table
              className="relative text-xs h-full"
              size="small"
              dataSource={dataT}
              tableLayout="auto"
              pagination={{
                position: ['bottomRight'],
                size: 'small',
                defaultCurrent: 2,
                total: 50,
              }}
              rowSelection={{
                type: 'checkbox',
              }}
            >
              {columns.map((item, index) => {
                return (
                  <Table.Column
                    className="text-xs text-left pt-1 pb-1 pl-4 pr-4 font-normal"
                    title={<span className="text-xxxs p-0">{item.title}</span>}
                    dataIndex={item.dataIndex}
                    key={index}
                    render={(text) => {
                      return <span className="text-xxxs p-0">{text}</span>;
                    }}
                  />
                );
              })}
            </Table>
          ) : (
            <p className="text-center mt-10">Loading accounts...</p>
          )}
        </div>
      </div>
      {/* <FullTabTableTemplate table={<TabTableTemplate name="activateAccount" />} /> */}
    </div>
  );
}

export default ActivateAccount;
