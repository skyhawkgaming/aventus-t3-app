import { signIn, signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import { useState } from 'react';

import SideBar from '../components/SideBar';
import SignIn from '../components/SignIn';

export default function Admin() {
  const { data: session } = useSession();
  const [list, setList] = useState([]);

  const getMembers = async () => {
    const https = require('https');
    const agent = new https.Agent({
      rejectUnauthorized: false,
    });
    const res = await fetch('https://78.108.218.94:25837/api/members', {
      agent,
      mode: 'no-cors',
    });
    const { userInfo } = await res.json();
    setList(userInfo);
  };

  if (session) {
    return (
      <>
        <Head>
          <title>Admin Panel</title>
          <meta name="admin" content="admin-panel" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex flex-col items-center justify-center h-screen p-4 pl-20 mx-auto my-auto text-white bg-main-bg">
          <div>
            <SideBar />
          </div>
          <a href="addmember">Add Member</a>
          <br />
          <button className="mt-8" onClick={() => signOut()}>
            Sign out
          </button>
          <hr />
          <button onClick={() => getMembers()}>Get Members</button>
          {list.map((userInfo) => (
            <div key={userInfo.id}>
              <h1>{userInfo.user}</h1>
              <p>Discord ID: {userInfo.discordId}</p>
              <p>Points: {userInfo.points}</p>
              <p>Splits: {userInfo.splits}</p>
              <br />
            </div>
          ))}
          <SignIn />
        </main>
      </>
    );
  }
  return (
    <>
      <Head>
        <title>Admin Panel</title>
        <meta name="admin" content="admin-panel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center h-screen p-4 pl-20 mx-auto my-auto text-white bg-main-bg">
        <div>
          <SideBar />
        </div>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
      </main>
    </>
  );
}
