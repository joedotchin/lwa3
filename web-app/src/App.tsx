import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import EmailValidator from "email-validator";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { getBreaches } from "./hibp.service";
import { DataTable } from "./data-table/DataTable";
import TestTable from './data-table/TestTable';
import { GridColDef, GridColumns, GridRowData, GridRowsProp } from "@mui/x-data-grid";

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
    // console.log("BREACHES", breaches);
    if(breaches?.data.length) {
      const breachesWithId = breaches?.data?.map((data, index) => ({id: index, ...data, }));
      // console.log("BREACHES WITH ID", breachesWithId);
      setRows(breachesWithId);
    } else {
      setRows([]);
    }
  }

  const columns: GridColDef[] = [
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
    {
        field: "isRetired",
        headerName: "Retired"
    },
    {
        field: "isSpamList",
        headerName: "Spam List"
    },
    {
        field: "LogoPath",
        headerName: "Logo Path"
    },
]

const myRows: GridRowsProp = [
  {
      "id": 0,
      "Name": "Adobe",
      "Title": "Adobe",
      "Domain": "adobe.com",
      "BreachDate": "2013-10-04",
      "AddedDate": "2013-12-04T00:00:00Z",
      "ModifiedDate": "2013-12-04T00:00:00Z",
      "PwnCount": 152445165,
      "Description": "In October 2013, 153 million Adobe accounts were breached with each containing an internal ID, username, email, <em>encrypted</em> password and a password hint in plain text. The password cryptography was poorly done and <a href=\"http://stricture-group.com/files/adobe-top100.txt\" target=\"_blank\" rel=\"noopener\">many were quickly resolved back to plain text</a>. The unencrypted hints also <a href=\"http://www.troyhunt.com/2013/11/adobe-credentials-and-serious.html\" target=\"_blank\" rel=\"noopener\">disclosed much about the passwords</a> adding further to the risk that hundreds of millions of Adobe customers already faced.",
      "LogoPath": "https://haveibeenpwned.com/Content/Images/PwnedLogos/Adobe.png",
      "DataClasses": [
          "Email addresses",
          "Password hints",
          "Passwords",
          "Usernames"
      ],
      "IsVerified": true,
      "IsFabricated": false,
      "IsSensitive": false,
      "IsRetired": false,
      "IsSpamList": false
  },
  {
      "id": 1,
      "Name": "AntiPublic",
      "Title": "Anti Public Combo List",
      "Domain": "",
      "BreachDate": "2016-12-16",
      "AddedDate": "2017-05-04T22:07:38Z",
      "ModifiedDate": "2017-05-04T22:07:38Z",
      "PwnCount": 457962538,
      "Description": "In December 2016, a huge list of email address and password pairs appeared in a &quot;combo list&quot; referred to as &quot;Anti Public&quot;. The list contained 458 million unique email addresses, many with multiple different passwords hacked from various online systems. The list was broadly circulated and used for &quot;credential stuffing&quot;, that is attackers employ it in an attempt to identify other online systems where the account owner had reused their password. For detailed background on this incident, read <a href=\"https://www.troyhunt.com/password-reuse-credential-stuffing-and-another-1-billion-records-in-have-i-been-pwned\" target=\"_blank\" rel=\"noopener\">Password reuse, credential stuffing and another billion records in Have I Been Pwned</a>.",
      "LogoPath": "https://haveibeenpwned.com/Content/Images/PwnedLogos/List.png",
      "DataClasses": [
          "Email addresses",
          "Passwords"
      ],
      "IsVerified": false,
      "IsFabricated": false,
      "IsSensitive": false,
      "IsRetired": false,
      "IsSpamList": false
  },
  {
      "id": 2,
      "Name": "Cit0day",
      "Title": "Cit0day",
      "Domain": "cit0day.in",
      "BreachDate": "2020-11-04",
      "AddedDate": "2020-11-19T08:07:33Z",
      "ModifiedDate": "2020-11-19T08:07:33Z",
      "PwnCount": 226883414,
      "Description": "In November 2020, <a href=\"https://www.troyhunt.com/inside-the-cit0day-breach-collection\" target=\"_blank\" rel=\"noopener\">a collection of more than 23,000 allegedly breached websites known as Cit0day were made available for download on several hacking forums</a>. The data consisted of 226M unique email address alongside password pairs, often represented as both password hashes and the cracked, plain text versions. Independent verification of the data established it contains many legitimate, previously undisclosed breaches. The data was provided to HIBP by <a href=\"https://dehashed.com/\" target=\"_blank\" rel=\"noopener\">dehashed.com</a>.",
      "LogoPath": "https://haveibeenpwned.com/Content/Images/PwnedLogos/List.png",
      "DataClasses": [
          "Email addresses",
          "Passwords"
      ],
      "IsVerified": false,
      "IsFabricated": false,
      "IsSensitive": false,
      "IsRetired": false,
      "IsSpamList": false
  },
  {
      "id": 3,
      "Name": "PDL",
      "Title": "Data Enrichment Exposure From PDL Customer",
      "Domain": "",
      "BreachDate": "2019-10-16",
      "AddedDate": "2019-11-22T20:13:04Z",
      "ModifiedDate": "2019-11-22T20:13:04Z",
      "PwnCount": 622161052,
      "Description": "In October 2019, <a href=\"https://www.troyhunt.com/data-enrichment-people-data-labs-and-another-622m-email-addresses\" target=\"_blank\" rel=\"noopener\">security researchers Vinny Troia and Bob Diachenko identified an unprotected Elasticsearch server holding 1.2 billion records of personal data</a>. The exposed data included an index indicating it was sourced from data enrichment company People Data Labs (PDL) and contained 622 million unique email addresses. The server was not owned by PDL and it's believed a customer failed to properly secure the database. Exposed information included email addresses, phone numbers, social media profiles and job history data.",
      "LogoPath": "https://haveibeenpwned.com/Content/Images/PwnedLogos/List.png",
      "DataClasses": [
          "Email addresses",
          "Employers",
          "Geographic locations",
          "Job titles",
          "Names",
          "Phone numbers",
          "Social media profiles"
      ],
      "IsVerified": true,
      "IsFabricated": false,
      "IsSensitive": false,
      "IsRetired": false,
      "IsSpamList": false
  },
  {
      "id": 4,
      "Name": "iMesh",
      "Title": "iMesh",
      "Domain": "imesh.com",
      "BreachDate": "2013-09-22",
      "AddedDate": "2016-07-02T05:42:13Z",
      "ModifiedDate": "2016-07-02T05:42:13Z",
      "PwnCount": 49467477,
      "Description": "In September 2013, the media and file sharing client known as <a href=\"http://www.ibtimes.co.uk/imesh-hack-more-51-million-user-records-former-filesharing-site-sale-dark-web-1565185\" target=\"_blank\" rel=\"noopener\">iMesh was hacked and approximately 50M accounts were exposed</a>. The data was later put up for sale on a dark market website in mid-2016 and included email and IP addresses, usernames and salted MD5 hashes.",
      "LogoPath": "https://haveibeenpwned.com/Content/Images/PwnedLogos/iMesh.png",
      "DataClasses": [
          "Email addresses",
          "IP addresses",
          "Passwords",
          "Usernames"
      ],
      "IsVerified": true,
      "IsFabricated": false,
      "IsSensitive": false,
      "IsRetired": false,
      "IsSpamList": false
  },
  {
      "id": 5,
      "Name": "ModernBusinessSolutions",
      "Title": "Modern Business Solutions",
      "Domain": "modbsolutions.com",
      "BreachDate": "2016-10-08",
      "AddedDate": "2016-10-12T09:09:11Z",
      "ModifiedDate": "2016-10-12T09:09:11Z",
      "PwnCount": 58843488,
      "Description": "In October 2016, a large Mongo DB file containing tens of millions of accounts <a href=\"https://twitter.com/0x2Taylor/status/784544208879292417\" target=\"_blank\" rel=\"noopener\">was shared publicly on Twitter</a> (the file has since been removed). The database contained over 58M unique email addresses along with IP addresses, names, home addresses, genders, job titles, dates of birth and phone numbers. The data was subsequently <a href=\"http://news.softpedia.com/news/hacker-steals-58-million-user-records-from-data-storage-provider-509190.shtml\" target=\"_blank\" rel=\"noopener\">attributed to &quot;Modern Business Solutions&quot;</a>, a company that provides data storage and database hosting solutions. They've yet to acknowledge the incident or explain how they came to be in possession of the data.",
      "LogoPath": "https://haveibeenpwned.com/Content/Images/PwnedLogos/ModernBusinessSolutions.png",
      "DataClasses": [
          "Dates of birth",
          "Email addresses",
          "Genders",
          "IP addresses",
          "Job titles",
          "Names",
          "Phone numbers",
          "Physical addresses"
      ],
      "IsVerified": true,
      "IsFabricated": false,
      "IsSensitive": false,
      "IsRetired": false,
      "IsSpamList": false
  },
  {
      "id": 6,
      "Name": "MyFitnessPal",
      "Title": "MyFitnessPal",
      "Domain": "myfitnesspal.com",
      "BreachDate": "2018-02-01",
      "AddedDate": "2019-02-21T19:28:46Z",
      "ModifiedDate": "2019-02-21T20:00:56Z",
      "PwnCount": 143606147,
      "Description": "In February 2018, the diet and exercise service <a href=\"https://content.myfitnesspal.com/security-information/FAQ.html\" target=\"_blank\" rel=\"noopener\">MyFitnessPal suffered a data breach</a>. The incident exposed 144 million unique email addresses alongside usernames, IP addresses and passwords stored as SHA-1 and bcrypt hashes (the former for earlier accounts, the latter for newer accounts). In 2019, <a href=\"https://www.theregister.co.uk/2019/02/11/620_million_hacked_accounts_dark_web/\" target=\"_blank\" rel=\"noopener\">the data appeared listed for sale on a dark web marketplace</a> (along with several other large breaches) and subsequently began circulating more broadly. The data was provided to HIBP by a source who requested it to be attributed to &quot;BenjaminBlue@exploit.im&quot;.",
      "LogoPath": "https://haveibeenpwned.com/Content/Images/PwnedLogos/MyFitnessPal.png",
      "DataClasses": [
          "Email addresses",
          "IP addresses",
          "Passwords",
          "Usernames"
      ],
      "IsVerified": true,
      "IsFabricated": false,
      "IsSensitive": false,
      "IsRetired": false,
      "IsSpamList": false
  },
  {
      "id": 7,
      "Name": "MySpace",
      "Title": "MySpace",
      "Domain": "myspace.com",
      "BreachDate": "2008-07-01",
      "AddedDate": "2016-05-31T00:12:29Z",
      "ModifiedDate": "2016-05-31T00:12:29Z",
      "PwnCount": 359420698,
      "Description": "In approximately 2008, <a href=\"http://motherboard.vice.com/read/427-million-myspace-passwords-emails-data-breach\" target=\"_blank\" rel=\"noopener\">MySpace suffered a data breach that exposed almost 360 million accounts</a>. In May 2016 the data was offered up for sale on the &quot;Real Deal&quot; dark market website and included email addresses, usernames and SHA1 hashes of the first 10 characters of the password converted to lowercase and stored without a salt. The exact breach date is unknown, but <a href=\"https://www.troyhunt.com/dating-the-ginormous-myspace-breach\" target=\"_blank\" rel=\"noopener\">analysis of the data suggests it was 8 years before being made public</a>.",
      "LogoPath": "https://haveibeenpwned.com/Content/Images/PwnedLogos/MySpace.png",
      "DataClasses": [
          "Email addresses",
          "Passwords",
          "Usernames"
      ],
      "IsVerified": true,
      "IsFabricated": false,
      "IsSensitive": false,
      "IsRetired": false,
      "IsSpamList": false
  },
  {
      "id": 8,
      "Name": "RiverCityMedia",
      "Title": "River City Media Spam List",
      "Domain": "rivercitymediaonline.com",
      "BreachDate": "2017-01-01",
      "AddedDate": "2017-03-08T23:49:53Z",
      "ModifiedDate": "2017-03-08T23:49:53Z",
      "PwnCount": 393430309,
      "Description": "In January 2017, <a href=\"https://web.archive.org/web/20170426084052/https://mackeeper.com/blog/post/339-spammergate-the-fall-of-an-empire\" target=\"_blank\" rel=\"noopener\">a massive trove of data from River City Media was found exposed online</a>. The data was found to contain almost 1.4 billion records including email and IP addresses, names and physical addresses, all of which was used as part of an enormous spam operation. Once de-duplicated, there were 393 million unique email addresses within the exposed data.",
      "LogoPath": "https://haveibeenpwned.com/Content/Images/PwnedLogos/Email.png",
      "DataClasses": [
          "Email addresses",
          "IP addresses",
          "Names",
          "Physical addresses"
      ],
      "IsVerified": true,
      "IsFabricated": false,
      "IsSensitive": false,
      "IsRetired": false,
      "IsSpamList": true
  },
  {
      "id": 9,
      "Name": "VerificationsIO",
      "Title": "Verifications.io",
      "Domain": "verifications.io",
      "BreachDate": "2019-02-25",
      "AddedDate": "2019-03-09T19:29:54Z",
      "ModifiedDate": "2019-03-09T20:49:51Z",
      "PwnCount": 763117241,
      "Description": "In February 2019, the email address validation service <a href=\"https://securitydiscovery.com/800-million-emails-leaked-online-by-email-verification-service\" target=\"_blank\" rel=\"noopener\">verifications.io suffered a data breach</a>. Discovered by <a href=\"https://twitter.com/mayhemdayone\" target=\"_blank\" rel=\"noopener\">Bob Diachenko</a> and <a href=\"https://twitter.com/vinnytroia\" target=\"_blank\" rel=\"noopener\">Vinny Troia</a>, the breach was due to the data being stored in a MongoDB instance left publicly facing without a password and resulted in 763 million unique email addresses being exposed. Many records within the data also included additional personal attributes such as names, phone numbers, IP addresses, dates of birth and genders. No passwords were included in the data. The Verifications.io website went offline during the disclosure process, although <a href=\"https://web.archive.org/web/20190227230352/https://verifications.io/\" target=\"_blank\" rel=\"noopener\">an archived copy remains viewable</a>.",
      "LogoPath": "https://haveibeenpwned.com/Content/Images/PwnedLogos/VerificationsIO.png",
      "DataClasses": [
          "Dates of birth",
          "Email addresses",
          "Employers",
          "Genders",
          "Geographic locations",
          "IP addresses",
          "Job titles",
          "Names",
          "Phone numbers",
          "Physical addresses"
      ],
      "IsVerified": true,
      "IsFabricated": false,
      "IsSensitive": false,
      "IsRetired": false,
      "IsSpamList": false
  }
]

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
        <DataTable rows={rows} columns={columns}/>
      </div>
      <div>
        <TestTable />
      </div>
    </div>
  );
}

export default App;
