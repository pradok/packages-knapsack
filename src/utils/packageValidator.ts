import { LineItem } from '../types';

export const validators = {
  MAX_WEIGHT_ITEM: 100,
  MAX_WEIGHT_PACKAGE: 100,
  MAX_VALUE_ITEM: 100,
  MAX_ITEMS_PICK: 15,
};

export const validateLine = (line: LineItem) => {
  const maxWeightPackageValid = line.maxWeight <= validators.MAX_WEIGHT_PACKAGE;

  const totalItemsValid = line.items.length <= validators.MAX_ITEMS_PICK;

  const maxWeightItemValid = line.items.every((item) => {
    return item.weight <= validators.MAX_WEIGHT_ITEM;
  });

  const maxValueValid = line.items.every((item) => {
    return item.value <= validators.MAX_VALUE_ITEM;
  });

  return (
    totalItemsValid &&
    maxValueValid &&
    maxWeightItemValid &&
    maxWeightPackageValid
  );
};
