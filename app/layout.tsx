"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DrawerAppBar from "@/components/AppBar";

import App from "@/components/AppContext";
import Notification from "@/components/notifications/Notification";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    React.useEffect(() => {
        var _mtm = window._mtm = window._mtm || [];
        _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
        var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
        g.async=true; g.src='{https://matomo.thorsten-schroeer.de/}'; s.parentNode?.insertBefore(g,s);
    }, [])

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
        <Link color="inherit" href="/impressum">
            Impressum
        </Link>
    </Typography>
  );
}
