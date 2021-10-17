import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import "./DetailModal.css";

export type DetailModalProps = {
  open: boolean;
  header: string;
  breachDate: string;
  description: string;
  onClose: () => void;
};

export const DetailModal = ({
  open,
  header,
  breachDate,
  description,
  onClose,
}: DetailModalProps) => {
  // Remove html tags and &quot;s from descriptions.
  const cleanDescription = description
    .replace(/<\/?[^>]+(>|$)/g, "")
    .replace(/&quot;/g, '"');
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle className="detailModalHeader">
        {header}
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <div className="breachDate">{breachDate}</div>
        <div>{cleanDescription}</div>
      </DialogContent>
    </Dialog>
  );
};
