import { Select } from "flowbite-react";

export const Filters = ({onCategoryChange}) => {
  const handleChange = (e) => {
    onCategoryChange(e.target.value);
  };
  return (
    <Select className="w-2/5" defaultValue={"All"} onChange={handleChange}>
      <option value="All">All</option>
      <option value="man">Men</option>
      <option value="woman">Women</option>
      <option value="kids">Kids</option>
    </Select>
  );
};
