import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
    BsCalendarEventFill,
    BsFillPersonFill,
    BsPersonCheckFill,
} from 'react-icons/bs';
import { FaCoins } from 'react-icons/fa';

function GetCards() {
    const [post, setPosts] = useState([]);
    const data = [];
    useEffect(() => {
        const https = require('https');
        const agent = new https.Agent({ rejectUnauthorized: false });

        axios
            .get('https://78.108.218.94:25837/api/cards', { agent })
            .then((res) => {
                console.log(res);
                setPosts(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const dashInfo = [
        {
            icon: <BsPersonCheckFill />,
            amount: post[0],
            title: 'Total Points',
            iconColor: '#03C9D7',
            iconBg: '#E5FAFB',
            pcColor: 'red-600',
        },
        {
            icon: <FaCoins />,
            amount: post[1],
            title: 'Total Splits',
            iconColor: 'rgb(255, 244, 229)',
            iconBg: 'rgb(254, 201, 15)',
            pcColor: 'green-600',
        },
        {
            icon: <BsCalendarEventFill />,
            amount: 'Zulrah',
            title: 'Current Event',
            iconColor: 'rgb(228, 106, 118)',
            iconBg: 'rgb(255, 244, 229)',
            pcColor: 'green-600',
        },
    ];

    return (
        <div>
            <div className="flex flex-wrap justify-center lg:flex-nowrap ">
                <div className="w-full p-8 m-3 bg-center bg-cover bg-secondary-dark-bg dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl lg:w-80 pt-9">
                    <div className="flex items-center justify-between ">
                        <div>
                            <p className="font-bold text-gray-400">Members</p>
                            <p className="text-2xl text-light-gray">
                                {post[2]}
                            </p>
                        </div>
                        <button
                            type="button"
                            style={{ backgroundColor: 'bg-slate-600' }}
                            className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
                        >
                            <BsFillPersonFill />
                        </button>
                    </div>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-1 m-3">
                    {dashInfo.map((item) => (
                        <div
                            key={item.title}
                            className="p-4 bg-secondary-dark-bg h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 pt-9 rounded-2xl "
                        >
                            <button
                                type="button"
                                style={{
                                    color: item.iconColor,
                                    backgroundColor: item.iconBg,
                                }}
                                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
                            >
                                {item.icon}
                            </button>
                            <p className="mt-3">
                                <span className="text-lg font-semibold text-light-gray">
                                    {item.amount}
                                </span>
                            </p>
                            <p className="mt-1 text-sm text-gray-400">
                                {item.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default GetCards;
