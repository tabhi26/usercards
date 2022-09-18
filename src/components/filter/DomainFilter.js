import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { domainFilter } from "../../redux/userSlice";
import DropDown from "../common/DropDown";

function DomainFilter() {
  const [option, setOption] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setOption(e.target.value);
  };

  useEffect(() => {
    dispatch(domainFilter(option));
  }, [dispatch, option]);

  return (
    <div>
      <DropDown
        title="Domain"
        value={option}
        handleChange={handleChange}
        options={[
          "Sales",
          "Marketing",
          "Finance",
          "IT",
          "Management",
          "UI Designing",
          "Business Development",
        ]}
      />
    </div>
  );
}

export default DomainFilter;
