import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { GetCards, GetGrid } from '../components/GetCards';
import { dashInfo } from '../data/dummy';

const Dashboard = () => {
    return (
        <div>
            <GetCards />
            <GetGrid />
        </div>
    );
};

export default Dashboard;
