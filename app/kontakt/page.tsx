"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Grid, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useRef } from "react";

/*export const metadata = {
  title: "Aktuelles",
  description: "Eine kurze Beschreibung der App.",
};*/

export default function Page() {
  // const name = useRef<HTMLDivElement>();
  // const tel = useRef<HTMLDivElement>();
  // const mess = useRef<HTMLDivElement>();

  return (
    <>
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Kontakt
          </Typography>

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
                  label="Name"
                  // defaultValue="Name"
                  // ref={name}
                  placeholder="Bitte Name eingeben"
                  variant="standard"
                  sx={{ width: "100%" }}
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  id="telField"
                  label="Telefon"
                  // ref={tel}
                  // defaultValue="Telefon"
                  placeholder="Bitte Telefonnummer eingeben"
                  variant="standard"
                  sx={{ width: "100%" }}
                />
              </Grid>
              <Grid item md={12}>
                <TextField
                  required
                  multiline
                  id="textField"
                  label="Nachricht"
                  // ref={mess}
                  // defaultValue="Nachricht"
                  placeholder="Bitte Nachricht eingeben"
                  variant="standard"
                  minRows={4}
                  sx={{ width: "100%" }}
                />
              </Grid>
              <Grid item md={4}>
                <Button variant="contained">
                  <a href="mailto:t.schroeer@web.de?subject={mailSubject}&body={mailBody}">
                    Email absenden
                  </a>
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}
