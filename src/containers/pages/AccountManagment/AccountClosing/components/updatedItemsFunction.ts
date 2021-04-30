export const updatedItemsFunction = (CurrentItems: any, data: any) => {
  return CurrentItems.filter((cItem: any) => {
    return cItem.changed === true;
  }).map((item: any) => {
    return {
      title: item.title,
      details:
        data.updatedData.content &&
        data.updatedData.content[0][`${item.keyword}`],
    };
  });
};
