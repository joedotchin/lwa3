
import { Tooltip } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import Moment from 'moment';

import './ColumnDefs.css';

export const ColumnDefs = (): GridColDef[] => {
    return [
    {
        field: "Name",
        headerName: "Name",
        description: "Name",
        flex: 0.5,
    },
    {
        field: "Title",
        headerName: "Title",
        description: "Title",
        flex: 0.5
    },
    {
        field: "Domain",
        headerName: "Domain",
        description: "Domain",
        flex: 0.6
    },
    {
        field: "BreachDate",
        headerName: "Breach Date",
        type: "date",
        description: "Breach Date",
        flex: 0.35,
        renderCell: (params) => (Moment(params.value as string).format('YYYY-MM-DD')),
        cellClassName: 'dateCell'

    },
    {
        field: "AddedDate",
        headerName: "Added Date",
        type: "datetime",
        description: "Added Date",
        flex: 0.35,
        renderCell: (params) => (Moment(params.value as string).format('YYYY-MM-DD')),
        cellClassName: 'dateCell'
    },
    {
        field: "ModifiedDate",
        headerName: "Modified Date",
        type: "datetime",
        description: "Modified Date",
        flex: 0.36,
        renderCell: (params) => (Moment(params.value as string).format('YYYY-MM-DD'))
    },
    {
        field: "PwnCount",
        headerName: "Pwn Count",
        description: "Pwn Count",
        flex: 0.4,
        valueFormatter: (params) => (Number(params.value).toLocaleString()),
        cellClassName: 'pwnCount'
    },
    {
        field: "Description",
        headerName: "Description",
        description: "Description",
        flex: 0.6,
        renderCell: (value) => (<Tooltip title={value?.value as string} followCursor={true}><span>{value?.value as string}</span></Tooltip>)
    },
    {
         field: "DataClasses",
         headerName: "Data Classes",
         description: "Data Classes",
         flex: 0.5,
         renderCell: (value) => (<Tooltip title={value?.value as string} followCursor={true}><span>{value?.value as string}</span></Tooltip>)
    },
    {
        field: "IsVerified",
        headerName: "Verified",
        type: "boolean",
        description: "Verified",
        flex: 0.3
    },
    {
        field: "IsFabricated",
        headerName: "Fabricated",
        type: "boolean",
        description: "Fabricated",
        flex: 0.3
    },
    {
        field: "IsSensitive",
        headerName: "Sensitive",
        type: "boolean",
        description: "Sensitive",
        flex: 0.3
    },
    // HIBP has removed this data.
    // {
    //     field: "isRetired",
    //     headerName: "Retired"
    // },
    {
        field: "isSpamList",
        headerName: "Spam List",
        type: "boolean",
        description: "Spam List",
        flex: 0.3
    },
    {
        field: "LogoPath",
        headerName: "Logo",
        // @ts-ignore
        renderCell: (cellValue) => (<div className='logoContainer'><img src={cellValue?.value} className='logo'/></div>),
        flex: 0.3
    },
]
};
