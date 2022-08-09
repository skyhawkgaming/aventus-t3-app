import Head from "next/head";
import React, { useEffect, useState } from "react";

import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Ripple } from "primereact/ripple";
import { classNames } from "primereact/utils";

import { BsArrowDownLeftCircle } from "react-icons/bs";

import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

import {
  BsCalendarEventFill,
  BsFillPersonFill,
  BsPersonCheckFill,
} from "react-icons/bs";
import { FaCoins } from "react-icons/fa";
import SideBar from "../components/SideBar";
import SignIn from "../components/SignIn";

/** @param {import('next').InferGetServerSidePropsType<typeof getServerSideProps> } props */
function Dashboard({ members, cards }) {
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const onCustomPage = (event) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  const onPageInputChange = (event) => {
    setCurrentPage(event.target.value);
  };

  const template1 = {
    layout:
      "PrevPageLink PageLinks NextPageLink RowsPerPageDropdown CurrentPageReport",
    PrevPageLink: (options) => {
      return (
        <button
          type="button"
          className={options.className}
          onClick={options.onClick}
          disabled={options.disabled}
        >
          <span className="hover:text-blue-600 p-3 underline">Previous</span>
          <Ripple />
        </button>
      );
    },
    NextPageLink: (options) => {
      return (
        <button
          type="button"
          className={options.className}
          onClick={options.onClick}
          disabled={options.disabled}
        >
          <span className="hover:text-blue-600 p-3 underline disabled:cursor-not-allowed">
            Next
          </span>
          <Ripple />
        </button>
      );
    },
    PageLinks: (options) => {
      if (
        (options.view.startPage === options.page &&
          options.view.startPage !== 0) ||
        (options.view.endPage === options.page &&
          options.page + 1 !== options.totalPages)
      ) {
        const className = classNames(options.className, {
          "p-disabled cursor-not-allowed": true,
        });

        return (
          <span className={className} style={{ userSelect: "none" }}>
            ...
          </span>
        );
      }

      return (
        <button
          type="button"
          className={options.className}
          onClick={options.onClick}
        >
          {options.page + 1}
          <Ripple />
        </button>
      );
    },
  };

  const dashInfo = [
    {
      icon: <BsFillPersonFill />,
      amount: cards[2],
      title: "Members",
      iconColor: "#2b2e2c",
      iconBg: "#7aff9e",
      pcColor: "red-600",
    },
    {
      icon: <BsPersonCheckFill />,
      amount: cards[0],
      title: "Total Points",
      iconColor: "#027078",
      iconBg: "#E5FAFB",
      pcColor: "red-600",
    },
    {
      icon: <FaCoins />,
      amount: cards[1],
      title: "Total Splits",
      iconColor: "rgb(255, 244, 229)",
      iconBg: "rgb(254, 201, 15)",
      pcColor: "green-600",
    },
    {
      icon: <BsCalendarEventFill />,
      amount: "Zulrah",
      title: "Current Event",
      iconColor: "rgb(228, 106, 118)",
      iconBg: "rgb(255, 244, 229)",
      pcColor: "green-600",
    },
  ];
  // const { data: session } = useSession()

  return (
    <>
      <Head>
        <title>Aventus Dashboard</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen bg-main-bg">
        <div className="text-white">
          <div className="relative flex text-center">
            <SideBar />

            <div className="pl-20 bg-main-bg">
              <div>
                <div className="items-center flex flex-wrap">
                  {/* <div className="w-224 p-8 my-3 text-gray-200 bg-secondary-dark-bg rounded-xl">
                    <div className="flex items-center justify-between ">
                      <div>
                        <p className="pl-4 font-bold">Members</p>

                        <p className="text-2xl text-light-gray">{cards[2]}</p>
                      </div>
                      <button
                        type="button"
                        style={{
                          backgroundColor: 'bg-slate-600',
                        }}

                        className="first-letter:text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  px-4"
                      >
                        <BsFillPersonFill size="32" />
                      </button>
                    </div>
                  </div> */}
                  <div className="flex flex-wrap items-center justify-center gap-1 m-3 pr-5">
                    {dashInfo.map((item) => (
                      <div
                        key={item.title}
                        className="p-4 text-gray-200 bg-secondary-dark-bg h-44 md:w-56 pt-9 rounded-2xl mx-1 "
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

              <NextTable />
            </div>
            <SignIn />
          </div>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const https = require("https");
  const agent = new https.Agent({
    rejectUnauthorized: false,
  });
  const res = await fetch("https://78.108.218.94:25837/api/members", {
    agent,
  });

  const members = await res.json();

  const res2 = await fetch("https://78.108.218.94:25837/api/cards", {
    agent,
  });
  const cards = await res2.json();
  return {
    props: {
      members,

      cards,
    },
  };
}

export default Dashboard;
