import React, { useEffect, useState } from 'react';
import GetCards from '../../components/GetCards';
import SideBar from '../../components/SideBar';
import SignIn from '../../components/SignIn';

function Home(post) {
    // const { data: session } = useSession()

    return (
        <div className="bg-slate-900">
            <div className="relative flex bg-main-dark-bg">
                <SideBar />
                <div
                    className="fixed right-4 bottom-4"
                    style={{ zIndex: '1000' }}
                ></div>
                <div className="w-full min-h-screen pl-20 bg-main-bg">
                    <div>
                        <div className="text-center">
                            <GetCards />
                            <SignIn />
                            <div className="text-white">
                                {JSON.stringify(post)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

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
