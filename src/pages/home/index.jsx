import axios from 'axios';
import React, { useEffect, useState } from 'react';
import GetCards from '../../components/GetCards';
import SideBar from '../../components/SideBar';
import SignIn from '../../components/SignIn';


const Home = ({ post }) => {
    const resultsPerPage = 10;
    const totalResults = post.length;

    return (

    );
};

export async function getStaticProps() {
    const res = await fetch('http://78.108.218.94:25837/api/members');
    const post = await res.json();
    return {
        props: {
            post,
        },
    };
}

export default Home;
