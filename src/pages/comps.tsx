import { NextPage } from 'next';
import Head from 'next/head';

import SideBar from '../components/SideBar';
import SignIn from '../components/SignIn';

const Team: NextPage = props => {
  return (
    <>
      <Head>
        <title>Competitions</title>
        <meta name='help' content='statistics' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-col items-center justify-center h-screen p-4 pl-20 mx-auto my-auto bg-main-bg'>
        <div>
          <SideBar />
        </div>
        <h1 className='text-3xl text-white'>Competitions</h1>
        <SignIn />
      </main>
    </>
  )
}

export default Team
