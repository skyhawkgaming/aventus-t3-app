import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  Table,
  TableHeader,
  TableCell,
  TableBody,
  TableRow,
  TableFooter,
  TableContainer,
  Badge,
  Avatar,
  Button,
  Pagination,
} from '@roketid/windmill-react-ui';

interface ITableData {
  discordName: string;
  osrsName: string;
  discordId: string;
  points: string;
  splits: string;
}

export default function Tables() {
  const [post, setPosts] = useState([
    {
      discordName: '',
      osrsName: '',
      discordId: '',
      points: '',
      splits: '',
    },
  ]);

  useEffect(() => {
    axios
      .get('http://78.108.218.94:25837/api/members')
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [pageTable1, setPageTable1] = useState(1);

  const [dataTable1, setDataTable1] = useState<ITableData[]>([]);

  const resultsPerPage = 10;
  const totalResults = post.length;

  // pagination change control
  function onPageChangeTable1(p: number) {
    setPageTable1(p);
  }

  useEffect(() => {
    setDataTable1(
      post.slice((pageTable1 - 1) * resultsPerPage, pageTable1 * resultsPerPage)
    );
  }, [pageTable1]);

  return (
    <div>
      {post.length > 5 ? (
        <TableContainer className='mb-8 bg-secondary-dark-bg'>
          <Table>
            <TableHeader>
              <tr>
                <TableCell className='text-gray-50'>User</TableCell>
                <TableCell className='text-gray-50'>Discord Id</TableCell>
                <TableCell className='text-gray-50'>Points</TableCell>
                <TableCell className='text-gray-50'>Splits</TableCell>
              </tr>
            </TableHeader>
            <TableBody>
              {dataTable1.map((user, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <div className='flex items-center text-sm'>
                      <div>
                        <p className='font-semibold text-gray-200'>
                          {user.discordName}
                        </p>
                        <p className='text-xs text-gray-400 '>
                          {user.osrsName}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className='text-sm  text-gray-400 '>
                      {' '}
                      {user.discordId}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className='text-sm  text-gray-400 '>
                      {' '}
                      {user.points}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className='text-sm  text-gray-400 '>
                      {' '}
                      {user.splits}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TableFooter>
            <Pagination
              totalResults={totalResults}
              resultsPerPage={resultsPerPage}
              onChange={onPageChangeTable1}
              label='Table navigation'
            />
          </TableFooter>
        </TableContainer>
      ) : (
        <p>loading</p>
      )}
    </div>
  );
}
