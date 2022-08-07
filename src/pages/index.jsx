import React from 'react';

import GetCards from '../components/GetCards';
import GetGrid from '../components/GetGrid';

const Home = () => {
    return (
        <div className="dark">
            <div className="relative flex dark:bg-main-dark-bg">
                <div
                    className="fixed right-4 bottom-4"
                    style={{ zIndex: '1000' }}
                ></div>
                <div className="fixed bg-white w-72 sidebar dark:bg-secondary-dark-bg "></div>
                <div className="w-full min-h-screen dark:bg-main-dark-bg bg-main-bg md:ml-72 ">
                    <div>
                        <div>
                            <GetCards />
                            <GetGrid />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
