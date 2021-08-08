/* eslint-disable import/prefer-default-export */
export const isObjEqual = (preObj, obj) => {
  return JSON.stringify(preObj) === JSON.stringify(obj);
};
