import React, { useEffect, useState } from "react";
import "./App.css";
import EmailValidator from "email-validator";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { getBreaches } from "./hibp.service";
import { DataTable } from "./data-table/DataTable";
import { GridRowData } from "@mui/x-data-grid";

function App() {
  const [account, setAccount] = useState<string>("");
  const [emailIsValid, setEmailIsValid] = useState<boolean>(false);
  const [rows, setRows] = useState<GridRowData[]>([]);

  useEffect(() => {
    setEmailIsValid(EmailValidator.validate(account));
  }, [account]);

  const getHelperText = () => {
    return emailIsValid ? "" : "Invalid Email Address";
  };

  const onGetBreachesClick = async () => {
    const breaches = await getBreaches(account);
    if(breaches?.data.length) {
      const breachesWithId = breaches?.data?.map((data, index) => ({id: index, ...data, }));
      setRows(breachesWithId);
    } else {
      setRows([]);
    }
  }

  return (
    <div className="app">
      <div>
        <TextField
          value={account}
          onChange={(e) => setAccount(e.target.value)}
          error={!emailIsValid}
          label="Email Address"
          helperText={getHelperText()}
        />
        <Button className="button" variant="contained" disabled={!emailIsValid} onClick={onGetBreachesClick}>
          Get Breaches!
        </Button>
      </div>
      <div style={{marginTop: "50px" }}>
        <DataTable rows={rows}/>
      </div>
    </div>
  );
}
// adding comment to make it build
export default App;
