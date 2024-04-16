"use client";

import { useState } from "react";
import setInputChange from "@/util/input-util";
import { Grid, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function Kontaktform() {
  const [mailData, setMailData] = useState<IMailData>();

  const handleChange = (event: any) => {
    event.persist();

    // Standard behandlung
    setInputChange(setMailData, event);
  };

  const GetMailBody = () => {
    console.log("GetMailBody", mailData);
    return `Name = ${mailData?.name} \n\r Telefon = ${mailData?.tel} \n\r Nachricht = ${mailData?.message}`;
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <Grid container spacing={4}>
          <Grid item md={6}>
            <TextField
              required
              id="nameField"
              name="name"
              label="Name"
              // defaultValue="Name"
              // ref={name}
              placeholder="Bitte Name eingeben"
              variant="standard"
              sx={{ width: "100%" }}
              onChange={handleChange}
            />
          </Grid>
          <Grid item md={6}>
            <TextField
              id="telField"
              name="tel"
              label="Telefon"
              // ref={tel}
              // defaultValue="Telefon"
              placeholder="Bitte Telefonnummer eingeben"
              variant="standard"
              sx={{ width: "100%" }}
              onChange={handleChange}
            />
          </Grid>
          <Grid item md={12}>
            <TextField
              required
              multiline
              id="textField"
              name="message"
              label="Nachricht"
              // ref={mess}
              // defaultValue="Nachricht"
              placeholder="Bitte Nachricht eingeben"
              variant="standard"
              minRows={4}
              sx={{ width: "100%" }}
              onChange={handleChange}
            />
          </Grid>
          <Grid item md={4}>
            <Button variant="contained">
              <a
                href={`mailto:t.schroeer@web.de?subject=Testmail%20von%20ReactJS&body=${GetMailBody()}`}
              >
                Email absenden
              </a>
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
