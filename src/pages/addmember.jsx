import Head from 'next/head';

import Router from 'next/router';
import React, { useState } from 'react';
import SideBar from '../components/SideBar';
import SignIn from '../components/SignIn';

const Draft = () => {
    const [user, setUser] = useState('');
    const [discordId, setDiscordId] = useState('');
    const [points, setPoints] = useState('');
    const [splits, setSplits] = useState('');
    const [osrsName, setOsrsName] = useState('');

    const submitData = async (e) => {
        e.preventDefault();
        try {
            const body = { user, discordId, osrsName, points, splits };
            await fetch('/api/members', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });
            await Router.push('/members');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <Head>
                <title>Add Member</title>
                <meta name="help" content="statistics" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col items-center justify-center h-screen p-4 pl-20 mx-auto my-auto text-white bg-main-bg">
                <div>
                    <SideBar />
                </div>
                <div>
                    <form
                        className="flex flex-col items-center justify-center h-screen p-4 mx-auto my-auto text-center text-white bg-main-bg"
                        onSubmit={submitData}
                    >
                        <h1 className="mb-2 text-3xl">Add Member</h1>
                        <div className="flex flex-col text-black">
                            <input
                                autoFocus
                                onChange={(e) => setUser(e.target.value)}
                                placeholder="Discord Name"
                                type="text"
                                value={user}
                            />
                            <input
                                autoFocus
                                onChange={(e) => setDiscordId(e.target.value)}
                                placeholder="Discord ID"
                                type="text"
                                value={discordId}
                            />
                            <input
                                autoFocus
                                onChange={(e) => setOsrsName(e.target.value)}
                                placeholder="OSRS Name"
                                type="text"
                                value={osrsName}
                            />
                            <input
                                autoFocus
                                onChange={(e) => setPoints(e.target.value)}
                                placeholder="Points"
                                type="text"
                                value={points}
                            />
                            <input
                                autoFocus
                                onChange={(e) => setSplits(e.target.value)}
                                placeholder="Splits"
                                type="text"
                                value={splits}
                            />
                            <br />
                            <input
                                disabled={!user || !discordId || !osrsName}
                                type="submit"
                                value="Add"
                            />
                        </div>
                        <a
                            className="back"
                            href="#"
                            onClick={() => Router.push('/admin')}
                        >
                            Cancel
                        </a>
                    </form>
                </div>
                <style jsx>{`
                    input[type='text'],
                    textarea {
                        width: 20rem;
                        padding: 0.5rem;
                        margin: 0.5rem 0rem;
                        border-radius: 0.25rem;
                        text-align: center;
                        border: 0.125rem solid rgba(0, 0, 0, 0.2);
                    }

                    input[type='submit'] {
                        background: #5b5b5b;
                        padding: 0.5rem;
                        width: 20rem;
                    }

                    .back {
                        margin-top: 1rem;
                    }
                `}</style>
            </main>
        </>
    );
};

export default Draft;
