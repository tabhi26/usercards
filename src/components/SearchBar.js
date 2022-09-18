import { TextField } from '@material-ui/core';
import { Button } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getData, setPageData  } from '../redux/userSlice';

const SearchBar = ({rocketData, onChange}) => {
    const [userName, setUserName] = useState("");
    const dispatch = useDispatch();

    const handleClick = () => {
        if (!userName) {
            dispatch(getData(1));
        }
        dispatch(setPageData(userName));
        setUserName("")
    }

    

    return (
        <div style={{margin: "100px 10px 10px 10px"}}>
        <TextField
          id="filled-search"
          label="Enter Name"
          type="search"
          variant="filled"
          value={userName}
          onChange={(e)=> {setUserName(e.target.value)}}
        />
        <Button variant="contained" onClick={handleClick}>Search</Button>
        </div>
    )
}
export default SearchBar;