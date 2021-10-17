import { DataGrid, GridRowsProp } from "@mui/x-data-grid";

import { ColumnDefs } from "./ColumnDefs";
import { DetailModal } from "../detail-modal/DetailModal";

import "./DataTable.css";
import { useState } from "react";

export type DataTableProps = {
  rows: GridRowsProp;
};

export type ModalData = {
  Name: string;
  BreachDate: string;
  Description: string;
};

export const DataTable = ({ rows }: DataTableProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedRow, setSelectedRow] = useState<ModalData>(
    null as unknown as ModalData
  );

  const onClose = () => {
    setShowModal(false);
  };

  const onRowClick = (e: any) => {
    setSelectedRow(e.row);
    setShowModal(true);
  };

  // @ts-ignore
  return (
    <>
      <div className="container">
        <DataGrid columns={ColumnDefs()} rows={rows} onRowClick={onRowClick} />
      </div>
      {showModal && (
        <DetailModal
          header={selectedRow?.Name}
          breachDate={selectedRow?.BreachDate}
          description={selectedRow?.Description}
          onClose={onClose}
          open={showModal}
        />
      )}
    </>
  );
};
