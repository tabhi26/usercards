import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const DropDown = (props) => {
    return (
        <>
        <FormControl fullWidth sx={{margin: "10px 10px 10px 10px", maxWidth: 200}}>
        <InputLabel style={{maxWidth: 150}} id="demo-simple-select-label">{props.title}</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={props.value}
            name={props.title}
            label={props.title}
            onChange={props.handleChange}
        >
            {
                props.options.map((option) => {
                    return <MenuItem key={option} value={option}>{option}</MenuItem>
                })
            }
        </Select>
        </FormControl>
        </>
    )
}

export default DropDown;