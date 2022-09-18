import React from 'react';
import { useSelector } from 'react-redux';
import Cards from './Card';
import './Home.css';

function Team(props) {
    const team = useSelector((state)=> state.user.team);
    console.log("team", team);

    return (
        <div style={{marginTop: "7%"}} className='box'>
        { team.members.length &&
            team.members.map((member)=> {
                return <Cards key={member.id} user={member} />
            })
        }
        </div>
    );
}

export default Team;