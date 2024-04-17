"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import useThemeSwitcher from "@/components/theme/useThemeSwitcher";

import "./theme/App.css";

// Breite des Drawers in der Mobilen Ansicht.
const drawerWidth = 240;

const appName = "Kegelgruppe KEPA 1958";

/** Einträge für die Hauptnavigation. */
const items = [
  { link: "/", name: "Home", linktype: "int" },
  { link: "/aktuelles", name: "Aktuelles", linktype: "int" },
  { link: "/termine", name: "Termine", linktype: "int" },
  { link: "/kontakt", name: "Kontakt", linktype: "int" },
  /*{
    link: "https://kegelgruppe-kepa.de/kegelverwaltung",
    name: "Kegelverwaltung",
    linktype: "ext",
  },*/
    { link: "/impressum", name: "Impressum", linktype: "int" },
  // { link: "/about", name: "About" },
];

/**
 * AppBar und Drawer.
 * Je nach Breite der Ansicht wird entweder der Drawer oder die AppBar angezeigt.
 * Bei Anpassungen sollten beide berücksichtigt werden.
 */
export default function DrawerAppBar() {
  const themeService = useThemeSwitcher();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        {appName}
      </Typography>
      <Divider />
      <List>
        {items.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              component={Link}
              href={item.link}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            {appName}
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {items.map(
              (item) =>
                item.linktype === "int" ? (
                  <Button
                    component={Link}
                    href={item.link}
                    key={item.name}
                    sx={{ color: "#fff" }}
                  >
                    {item.name}
                  </Button>
                ) : (
                  <Button
                    // component={Link}
                    // href={item.link}
                    key={item.name}
                    sx={{ color: "#fff" }}
                  >
                    <a href={item.link} target="_blank">
                      {item.name}
                    </a>
                  </Button>
                ),

              /*<Button
                component={Link}
                href={item.link}
                key={item.name}
                sx={{ color: "#fff" }}
              >
                {item.name}
              </Button>*/
            )}
          </Box>
          <IconButton
            sx={{ ml: 1 }}
            onClick={() => themeService.toggleTheme()}
            color="inherit"
          >
            {themeService.getCurrentThemeName() === "dark" ? (
              <Brightness4Icon />
            ) : (
              <Brightness7Icon />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
