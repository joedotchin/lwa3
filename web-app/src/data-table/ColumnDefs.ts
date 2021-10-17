import { GridColDef } from "@mui/x-data-grid";

export const ColumnDefs: GridColDef[] = [
    {
        field: "Name",
        headerName: "Name"
    },
    {
        field: "Title",
        headerName: "Title"
    },
    {
        field: "Domain",
        headerName: "Domain"
    },
    {
        field: "BreachDate",
        headerName: "Breach Date"
    },
    {
        field: "AddedDate",
        headerName: "Added Date"
    },
    {
        field: "ModifiedDate",
        headerName: "Modified Date"
    },
    {
        field: "PwnCount",
        headerName: "Pwn Count"
    },
    {
        field: "Description",
        headerName: "Description"
    },
    {
         field: "DataClasses",
         headerName: "Data Classes"
    },
    {
        field: "IsVerified",
        headerName: "Verified"
    },
    {
        field: "IsFabricated",
        headerName: "Fabricated"
    },
    {
        field: "IsSensitive",
        headerName: "Sensitive"
    },
    // HIBP has removed this data.
    // {
    //     field: "isRetired",
    //     headerName: "Retired"
    // },
    {
        field: "isSpamList",
        headerName: "Spam List"
    },
    {
        field: "LogoPath",
        headerName: "Logo Path"
    },
]
