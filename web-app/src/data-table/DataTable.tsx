import {
  DataGrid,
  GridColDef,
  GridRowsProp,
} from "@mui/x-data-grid";

import { ColumnDefs } from "./ColumnDefs";

import './DataTable.css';

export type DataTableProps = {
  rows: GridRowsProp;
};

export const DataTable = ({ rows }: DataTableProps) => {
  return (
    // <div style={{ height: 300, width: "100%" }}>
    <div className='container'>
      <DataGrid columns={ColumnDefs} rows={rows} />
    </div>
  );
};
