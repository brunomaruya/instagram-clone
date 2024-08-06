export const objArrFilter = (objArr, strArr) => {
  //   const objArr = [{ name: "1" }, { name: "2" }, { name: "3" }];
  //   const nameArr = ["1", "2"];
  console.log(objArr);
  console.log(strArr);

  const arr = objArr.filter((obj) => strArr.includes(obj.id));
  // console.log(arr);

  return arr;
};
