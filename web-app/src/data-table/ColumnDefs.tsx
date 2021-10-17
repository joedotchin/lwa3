
import { GridColDef } from "@mui/x-data-grid";
import './ColumnDefs.css';

export const ColumnDefs = (): GridColDef[] => {
    return [
    {
        field: "Name",
        headerName: "Name",
        description: "Name"
    },
    {
        field: "Title",
        headerName: "Title",
        description: "Title"
    },
    {
        field: "Domain",
        headerName: "Domain",
        description: "Domain"
    },
    {
        field: "BreachDate",
        headerName: "Breach Date",
        type: "date",
        description: "Breach Date"
    },
    {
        field: "AddedDate",
        headerName: "Added Date",
        type: "datetime",
        description: "Added Date"
    },
    {
        field: "ModifiedDate",
        headerName: "Modified Date",
        type: "datetime",
        description: "Modified Date"
    },
    {
        field: "PwnCount",
        headerName: "Pwn Count",
        description: "Pwn Count"
    },
    {
        field: "Description",
        headerName: "Description",
        description: "Description"
    },
    {
         field: "DataClasses",
         headerName: "Data Classes",
         description: "Data Classes"
    },
    {
        field: "IsVerified",
        headerName: "Verified",
        type: "boolean",
        description: "Verified"
    },
    {
        field: "IsFabricated",
        headerName: "Fabricated",
        type: "boolean",
        description: "Fabricated"
    },
    {
        field: "IsSensitive",
        headerName: "Sensitive",
        type: "boolean",
        description: "Sensitive"
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
        description: "Spam List"
    },
    {
        field: "LogoPath",
        headerName: "Logo Path",
        // @ts-ignore
        //renderCell: (cellValue) => (<div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignContent: 'center'}}><img src={cellValue?.value} style={{ height: '25px', width: '25px'}}/></div>)
        renderCell: (cellValue) => (<div className='logoContainer'><img src={cellValue?.value} className='logo'/></div>)
    },
]
};
