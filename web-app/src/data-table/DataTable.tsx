import {
  DataGrid,
  GridColDef,
  GridColumns,
  GridRowsProp,
} from "@mui/x-data-grid";
import { useEffect } from "react";

export type DataTableProps = {
  rows: GridRowsProp;
  columns: GridColDef[];
};

export const DataTable = ({ rows, columns }: DataTableProps) => {
  useEffect(() => {
    console.log("COLUMNS", columns);
    console.log("ROWS", rows);
  }, [rows, columns]);

  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid columns={columns} rows={rows} />
    </div>
  );
};
