import { Grid } from '@mantine/core';
import React from 'react';
import ContentContainer from '../../components/ContentContainer';
import SideBar from '../../components/SideBar';
import SignIn from '../../components/SignIn';

function Home() {
  return (
    <main className='flex flex-col items-center justify-center h-screen p-4 pl-20 mx-auto my-auto bg-main-bg'>
      <div>
        <SideBar />
      </div>

      <ContentContainer />
    </main>
    // <div className="bg-slate-900">
    //     <div className="relative flex bg-main-dark-bg">
    //         <SideBar />
    //         <div
    //             className="fixed right-4 bottom-4"
    //             style={{ zIndex: '1000' }}
    //         ></div>
    //         <div className="w-full h-screen bg-main-bg">
    //             <div>
    //                 <div className="text-center">
    //                     <h1 className="flex items-center h-screen my-auto mb-2 text-3xl font-bold text-white">
    //                         Howdy World
    //                     </h1>
    //                 </div>
    //             </div>
    //         </div>
    //         <SignIn />
    //     </div>
    // </div>
  );
}

export default Home;
