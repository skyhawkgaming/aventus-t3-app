import { Center, Grid } from '@mantine/core';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';

import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Ripple } from 'primereact/ripple';
import { classNames } from 'primereact/utils';

import { BsArrowDownLeftCircle } from 'react-icons/bs';

import {
  BsCalendarEventFill,
  BsFillPersonFill,
  BsPersonCheckFill,
} from 'react-icons/bs';
import { FaCoins } from 'react-icons/fa';
import SideBar from '../components/SideBar';
import SignIn from '../components/SignIn';

/** @param {import('next').InferGetServerSidePropsType<typeof getServerSideProps> } props */
function Dashboard({ members, cards }) {
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageInputTooltip, setPageInputTooltip] = useState(
    "Press 'Enter' key to go to this page."
  );

  const onCustomPage = (event) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  const onPageInputChange = (event) => {
    setCurrentPage(event.target.value);
  };

  const template1 = {
    layout:
      'PrevPageLink PageLinks NextPageLink RowsPerPageDropdown CurrentPageReport',
    PrevPageLink: (options) => {
      return (
        <button
          type='button'
          className={options.className}
          onClick={options.onClick}
          disabled={options.disabled}>
          <span className='hover:text-blue-600 p-3 underline'>Previous</span>
          <Ripple />
        </button>
      );
    },
    NextPageLink: (options) => {
      return (
        <button
          type='button'
          className={options.className}
          onClick={options.onClick}
          disabled={options.disabled}>
          <span className='hover:text-blue-600 p-3 underline disabled:cursor-not-allowed'>
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
          'p-disabled cursor-not-allowed': true,
        });

        return (
          <span className={className} style={{ userSelect: 'none' }}>
            ...
          </span>
        );
      }

      return (
        <button
          type='button'
          className={options.className}
          onClick={options.onClick}>
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
      title: 'Members',
      iconColor: '#2b2e2c',
      iconBg: '#7aff9e',
      pcColor: 'red-600',
    },
    {
      icon: <BsPersonCheckFill />,
      amount: cards[0],
      title: 'Total Points',
      iconColor: '#027078',
      iconBg: '#E5FAFB',
      pcColor: 'red-600',
    },
    {
      icon: <FaCoins />,
      amount: cards[1],
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
  // const { data: session } = useSession()

  return (
    <>
      <Head>
        <title>Aventus Dashboard</title>
        <meta name='description' content='Generated by create-t3-app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <SideBar />
        <div className='pl-20'>
          <Center>
            <Grid justify='center'>
              {dashInfo.map((item) => (
                <div
                  key={item.title}
                  className='flex  text-gray-200 text-center items-center bg-secondary-dark-bg h-44 w-44 rounded-2xl mt-12 mb-4 mx-4'>
                  <Grid.Col span={12}>
                    <button
                      type='button'
                      style={{
                        color: item.iconColor,
                        backgroundColor: item.iconBg,
                      }}
                      className='text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl'>
                      {item.icon}
                    </button>
                    <p className='mt-3'>
                      <span className='text-lg font-semibold text-light-gray'>
                        {item.amount}
                      </span>
                    </p>
                    <p className='mt-1 text-sm text-gray-400'>{item.title}</p>{' '}
                  </Grid.Col>
                </div>
              ))}

              <Grid.Col sm={12} md={9} lg={9}>
                <div className='text-center text-md bg-main-dark-bg pt-4 pb-4 text-light-gray rounded-xl'>
                  {' '}
                  <Center>
                    <DataTable
                      value={members}
                      paginator
                      paginatorTemplate={template1}
                      paginatorPosition='top'
                      first={first}
                      rows={rows}
                      onPage={onCustomPage}
                      paginatorClassName=''
                      className=''
                      responsiveLayout>
                      <Column
                        field='discordName'
                        header='Discord Name'
                        style={{ width: 250 }}></Column>
                      <Column
                        field='discordId'
                        header='Discord Id'
                        style={{ width: 200 }}></Column>
                      <Column
                        field='osrsName'
                        header='Osrs Name'
                        style={{ width: 200 }}></Column>
                      <Column
                        field='splits'
                        header='Splits'
                        style={{ width: 200 }}></Column>
                      <Column
                        field='points'
                        header='Points'
                        style={{ width: 150, height: 50 }}></Column>
                    </DataTable>
                  </Center>{' '}
                </div>
              </Grid.Col>
            </Grid>
            <SignIn />
          </Center>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const https = require('https');
  const agent = new https.Agent({
    rejectUnauthorized: false,
  });
  const res = await fetch('https://78.108.218.94:25837/api/members', {
    agent,
  });

  const members = await res.json();

  const res2 = await fetch('https://78.108.218.94:25837/api/cards', {
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
