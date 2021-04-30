export const columns: Array<Object> = [
  {
    title: "Customer Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Customer ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Date Of Birth",
    dataIndex: "dob",
    key: "dob",
  },
  {
    title: "Person Reference Code",
    dataIndex: "code",
    key: "code",
  },
  {
    title: "Customer Photo",
    key: "photo",
    dataIndex: "photo",
    //   render: (url: string) => (
    //     <div className="text-center">
    //       <Avatar src={url} />
    //     </div>
    //   )
  },
  {
    title: "Signatures",
    dataIndex: "sign",
    key: "sign",
  },
  {
    title: "System",
    dataIndex: "system",
    key: "system",
  },
  {
    title: "Customer Tag",
    dataIndex: "tag",
    key: "tag",
    //   render: () => <Tag color="blue">Individual</Tag>
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    //   render: (_, record) => (
    //     <Button type="link" onClick={() => setSelectedCustomer(record.name)}>
    //       Select
    //     </Button>
    //   )
  },
];
