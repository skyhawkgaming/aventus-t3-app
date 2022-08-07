import React from 'react';
import SideBar from '../../components/SideBar';
import SignIn from '../../components/SignIn';

/** @param {import('next').InferGetStaticPropsType<typeof getStaticProps> } props */
function Home() {
    return (
        <div className="bg-slate-900">
            <div className="relative flex bg-main-dark-bg">
                <SideBar />
                <div
                    className="fixed right-4 bottom-4"
                    style={{ zIndex: '1000' }}
                ></div>
                <div className="w-full h-screen bg-main-bg">
                    <div>
                        <div className="text-center">
                            <h1 className="flex items-center h-screen my-auto mb-2 text-3xl font-bold text-white">
                                Howdy World
                            </h1>
                        </div>
                    </div>
                </div>
                <SignIn />
            </div>
        </div>
    );
}

export default Home;
