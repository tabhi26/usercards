import './App.css';
import Home from './components/Home';
import { useDispatch } from 'react-redux';
import  { getData, setData } from './redux/userSlice';
import userData from './data/MOCK_DATA.json'
import { useEffect } from 'react';
import { AppBar, Button, Toolbar } from '@mui/material';
import Team from './components/Team';
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(()=> {
      dispatch(setData(userData));
      dispatch(getData());
  }, [dispatch]);
  return (
    <>
      <AppBar>
        <Toolbar>
        User Cards
        <Button sx={{color: "white", marginLeft: "30%"}} onClick={()=> {navigate("/")}}>Home</Button>
        <Button sx={{color: "white"}} variant='text' onClick={()=> {navigate("/team")}}>Team</Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/team" element={<Team />}></Route>
      </Routes>
    </>
  );
}

export default App;
