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
    const [members1, setMembers1] = useState([]);
    const [members2, setMembers2] = useState([]);
    const [members3, setMembers3] = useState([]);
    const [first1, setFirst1] = useState(0);
    const [rows1, setRows1] = useState(10);
    const [first2, setFirst2] = useState(0);
    const [rows2, setRows2] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageInputTooltip, setPageInputTooltip] = useState(
        "Press 'Enter' key to go to this page."
    );

    const onCustomPage1 = (event) => {
        setFirst1(event.first);
        setRows1(event.rows);
        setCurrentPage(event.page + 1);
    };

    const onCustomPage2 = (event) => {
        setFirst2(event.first);
        setRows2(event.rows);
    };

    const onPageInputKeyDown = (event, options) => {
        if (event.key === 'Enter') {
            const page = parseInt(currentPage);
            if (page < 1 || page > options.totalPages) {
                setPageInputTooltip(
                    `Value must be between 1 and ${options.totalPages}.`
                );
            } else {
                const first = currentPage ? options.rows * (page - 1) : 0;

                setFirst1(first);
                setPageInputTooltip("Press 'Enter' key to go to this page.");
            }
        }
    };

    const onPageInputChange = (event) => {
        setCurrentPage(event.target.value);
    };

    useEffect(() => {
        const membersService = new MembersService();
        membersService
            .getPost()
            .then((res) => res.json())
            .then((data) => setMembers1(data));
        membersService
            .getPost()
            .then((res) => res.json())
            .then((data) => setMembers2(data));
        membersService
            .getPost()
            .then((res) => res.json())
            .then((data) => setMembers3(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const template2 = {
        layout: 'CurrentPageReport PrevPageLink NextPageLink',
        CurrentPageReport: (options) => {
            return (
                <span
                    style={{
                        color: 'rebeccapurple',
                        userSelect: 'none',
                        width: '120px',
                        textAlign: 'center',
                    }}
                >
                    {options.first} - {options.last} of {options.totalRecords}
                </span>
            );
        },
    };

    return (
        <div className="bg-secondary-dark-bg text-light-gray">
            <DataTable
                value={members3}
                paginator
                paginatorTemplate={template2}
                first={first2}
                rows={rows2}
                onPage={onCustomPage2}
                paginatorClassName="justify-content-end"
                className="mt-6"
                responsiveLayout="scroll"
            >
                <Column
                    field="discordName"
                    header="Discord Name"
                    style={{ width: '20%' }}
                ></Column>
                <Column
                    field="discordId"
                    header="Discord Id"
                    style={{ width: '20%' }}
                ></Column>
                <Column
                    field="osrsName"
                    header="Osrs Name"
                    style={{ width: '20%' }}
                ></Column>
                <Column
                    field="splits"
                    header="Splits"
                    style={{ width: '20%' }}
                ></Column>
                <Column
                    field="points"
                    header="Points"
                    style={{ width: '20%' }}
                ></Column>
            </DataTable>
        </div>
    );
}

export default GetTableData;
