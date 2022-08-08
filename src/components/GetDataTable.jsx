import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Ripple } from 'primereact/ripple';
import { classNames } from 'primereact/utils';
import React, { useEffect, useState } from 'react';
import { BsArrowDownLeftCircle } from 'react-icons/bs';
import { MembersService } from './MembersService';

function GetTableData() {
  const [members, setMembers] = useState([]);
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

  useEffect(() => {
    const membersService = new MembersService();
    membersService
      .getPost()
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);

  const template1 = {
    layout:
      'PrevPageLink PageLinks NextPageLink RowsPerPageDropdown CurrentPageReport',
    PrevPageLink: (options) => {
      return (
        <button
          type='button'
          className={options.className}
          onClick={options.onClick}
          disabled={options.disabled}
        >
          <span className='p-3 underline'>Previous</span>
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
          disabled={options.disabled}
        >
          <span className='p-3 underline'>Next</span>
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
        const className = classNames(options.className, { 'p-disabled': true });

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
          onClick={options.onClick}
        >
          {options.page + 1}
          <Ripple />
        </button>
      );
    },
  };

  return (
    <div className='bg-secondary-dark-bg text-light-gray   '>
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
        responsiveLayout='scroll'
      >
        <Column
          field='discordName'
          header='Discord Name'
          style={{ width: 250 }}
        ></Column>
        <Column
          field='discordId'
          header='Discord Id'
          style={{ width: 150 }}
        ></Column>
        <Column
          field='osrsName'
          header='Osrs Name'
          style={{ width: 150 }}
        ></Column>
        <Column field='splits' header='Splits' style={{ width: 150 }}></Column>
        <Column
          field='points'
          header='Points'
          style={{ width: 150, height: 40 }}
        ></Column>
      </DataTable>
    </div>
  );
}

export default GetTableData;
