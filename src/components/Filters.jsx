import { Select } from "flowbite-react";

export const Filters = () => {
  return (
    <Select className="w-2/5" defaultValue={"All"}>
    <option value="All">All</option>
      <option value="Men">Men</option>
      <option value="Women">Women</option>
      <option value="Kids">Kids</option>
    </Select>
  );
};
