import './App.css';
import Home from './components/Home';
import { useDispatch } from 'react-redux';
import  { setData } from './redux/userSlice';
import userData from './data/MOCK_DATA.json'
import { useEffect } from 'react';
import { AppBar, Toolbar } from '@mui/material';

function App() {
  const dispatch = useDispatch();

  useEffect(()=> {
      dispatch(setData(userData));
  }, []);
  return (
    <>
      <AppBar>
        <Toolbar>User Data</Toolbar>
      </AppBar>
      <Home />
    </>
  );
}

export default App;
