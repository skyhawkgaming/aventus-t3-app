import {
    ColumnDirective,
    ColumnsDirective,
    GridComponent,
    Inject,
    Page,
    Search,
    Toolbar,
} from '@syncfusion/ej2-react-grids';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';

import { dashInfo, UsersGrid } from '../data/dummy';

function GetGrid() {
    const [post, setPosts] = useState([]);
    const data = [];
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
    const toolbarOptions = ['Search'];

    const editing = { allowDeleting: false, allowEditing: true };

    const searchOptions = {
        fields: ['osrsname', 'discordname', 'discordid'],
        ignoreCase: true,
        key: '',
        operator: 'contains',
    };
    return (
        <div>
            <div className="p-2 m-2 mt-24 bg-white md:m-10 md:p-10 dark:bg-comp-slate rounded-3xl">
                <Header category="Database" title="ProdUsers" />
                <GridComponent
                    dataSource={post}
                    width="auto"
                    allowPaging
                    allowSorting
                    pageSettings={{ pageCount: 5 }}
                    editSettings={editing}
                    toolbar={toolbarOptions}
                    searchSettings={searchOptions}
                >
                    <ColumnsDirective>
                        {UsersGrid.map((item, index) => (
                            <ColumnDirective key={index} {...item} />
                        ))}
                    </ColumnsDirective>
                    <Inject services={[Search, Page, Toolbar]} />
                </GridComponent>
            </div>
        </div>
    );
}

export default GetGrid;
