import React, { useEffect, useState } from 'react';
import './Home.css';
import { getData } from '../redux/userSlice';
import Cards from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from '@mui/material';
import SearchBar from './SearchBar';
import DomainFilter from './filter/DomainFilter';
import GenderFilter from './filter/GenderFilter';
import AvailabilityFilter from './filter/AvailabilityFilter';

function Home() {
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const allUser = useSelector((state) => state.user.pageData);

    const handlePage = (e, value) => {
        setPage(value);
    }

    useEffect(()=> {
        dispatch(getData(page));
    },[dispatch, page]);
    return (
        <>
            <SearchBar />
            <DomainFilter />
            <GenderFilter/>
            <AvailabilityFilter />
            <div className='box'>
            {
                allUser.map((user) => {
                    return <Cards key={user.id} user={user} />
                })
            }
            </div>
            <Pagination count={50} page={page} onChange={handlePage} color="primary" />
        </>
    );
}

export default Home;