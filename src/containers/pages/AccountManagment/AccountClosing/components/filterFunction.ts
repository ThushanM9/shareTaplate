export const filterFunction = (key: string, data: any) => {
  // console.log(data);
  return data && data.updatedData
    ? !Object.values(data.updatedData.content).map((updatedItem: any) => {
        if (updatedItem[`${key}`] == null) {
          return true;
        } else {
          return (
            updatedItem[`${key}`] === data.accountData.AccountData[`${key}`]
          );
        }
      })[0]
    : false;
};
