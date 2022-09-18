import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { genderFilter } from "../../redux/userSlice";
import DropDown from "../common/DropDown";

function GenderFilter() {
  const [option, setOption] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setOption(e.target.value);
  };

  useEffect(() => {
    dispatch(genderFilter(option));
  }, [dispatch, option]);
  return (
    <div>
      <DropDown
        title="Gender"
        value={option}
        handleChange={handleChange}
        options={[
          "Male",
          "Female",
          "Agender",
          "Genderqueer",
          "Bigender",
          "Polygender",
          "Non-binary",
          "Genderfluid",
        ]}
      />
    </div>
  );
}

export default GenderFilter;
