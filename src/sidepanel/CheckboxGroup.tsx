import { RadioChangeEvent, Radio, Checkbox, GetProp } from "antd";
import React from "react";

type Props = {
  values: string[];
  onChange: (values: string[]) => void;
  options: { label: string; value: string }[];
};

export const CheckboxGroup = ({ values, onChange, options }: Props) => {
  const _onChange: GetProp<typeof Checkbox.Group, "onChange"> = (
    checkedValues
  ) => {
    // if (!checkedValues.length) return;
    onChange(checkedValues as string[]);
  };

  return (
    <Checkbox.Group
      options={options}
      defaultValue={values}
      onChange={_onChange}
    />
  );
};

export default CheckboxGroup;
