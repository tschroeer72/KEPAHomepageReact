import * as React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DrawerAppBar from "@/components/AppBar";

import App from "@/components/AppContext";
import Notification from "@/components/notifications/Notification";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        <App>
          <Notification />

          <DrawerAppBar />

          {/* Main */}
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              bgcolor: "background.default",
              mt: ["48px", "56px", "64px"],
              p: 3,
            }}
          >
            {children}
          </Box>

          {/* Footer */}
          <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
            <Typography
              variant="subtitle1"
              align="center"
              color="text.secondary"
              component="p"
            ></Typography>
            <Copyright />
          </Box>
        </App>
      </body>
    </html>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © " + new Date().getFullYear() + " Thorsten Schröer - "}
      {/*<Link color="inherit" href="https://github.com/dimader">
        Source Code auf GitHub
      </Link>{' '}*/}
    </Typography>
  );
}
