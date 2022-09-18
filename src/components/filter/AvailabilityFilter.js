import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { availableFilter } from "../../redux/userSlice";
import DropDown from '../common/DropDown';

function AvailabilityFilter() {
    const [option, setOption] = useState("");
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setOption(e.target.value);
    };

    useEffect(() => {
        if (option === "Yes") {
            dispatch(availableFilter(true));
        } else if (option === "No") {
            dispatch(availableFilter(false));
        }
    }, [dispatch, option]);

    return (
        <div>
            <DropDown title="Available" value={option} handleChange={handleChange} options={["Yes", "No"]}/>
        </div>
    );
}

export default AvailabilityFilter;