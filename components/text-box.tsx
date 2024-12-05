import React, { Dispatch, SetStateAction } from "react";

const Textbox = ({
  value,
  onChange,
  id,
}: {
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
  id: string;
}) => {
  return (
    <textarea
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      rows={30}
      placeholder="Enter JSON to compare"
      className="w-full border-[1px] border-black bg-gray-100 rounded-md focus:outline-none p-2"
    ></textarea>
  );
};

export default Textbox;
