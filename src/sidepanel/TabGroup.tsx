import { RadioChangeEvent, Radio } from "antd";
import React from "react";

type Props = {
  value: string;
  onChange: (value: string) => void;
  options: { label: string; value: string }[];
};

export const TabGroup = ({ value, onChange, options }: Props) => {
  const _onChange = ({ target: { value } }: RadioChangeEvent) => {
    onChange(value);
  };

  return (
    <Radio.Group
      className="font-semibold"
      options={options}
      onChange={_onChange}
      value={value}
      optionType="button"
      buttonStyle="solid"
    />
  );
};

export default TabGroup;
