import { NextPage } from 'next';
import Head from 'next/head';

import SideBar from '../../../tusk-webapp/src/components/SideBar';
import SignIn from '../../../tusk-webapp/src/components/SignIn';

const Profile: NextPage = props => {
  return (
    <>
      <Head>
        <title>My Profile</title>
        <meta name='help' content='statistics' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-col items-center justify-center h-screen p-4 pl-20 mx-auto my-auto bg-gray-800'>
        <div>
          <SideBar />
        </div>
        <h1 className='text-3xl text-white'>Edit Profile</h1>
        <SignIn />
      </main>
    </>
  )
}

export default Profile
