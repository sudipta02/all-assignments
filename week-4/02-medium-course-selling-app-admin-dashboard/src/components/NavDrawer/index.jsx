import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faArrowRight,
  faArrowLeft,
  faSquarePlus,
  faPenToSquare,
  faTableColumns,
} from "@fortawesome/free-solid-svg-icons";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Logo from "../../assets/logo.png";
import { Outlet, useNavigate } from "react-router-dom";
import { AppBar, Drawer, DrawerHeader } from "./components";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";

export default function NavDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const adminToken = localStorage.getItem("adminToken");
  const admin = jwtDecode(adminToken);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    toast.success("Logged out !", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigate("/");
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDrawerMenu = (index) => {
    if (index === 0) {
      navigate("/admin/about");
    }
    if (index === 1) {
      navigate("/admin/courses");
    }
    if (index === 2) {
      navigate("/admin/create-course");
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              ...(open && { display: "none" }),
            }}
          >
            <FontAwesomeIcon icon={faBars} />
          </IconButton>

          {!open && <img src={Logo} className="logo" />}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <p>{admin.username}</p>
              <button style={{ marginTop: "0" }} onClick={handleLogout}>
                Logout
              </button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <img src={Logo} className="logo" />
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <FontAwesomeIcon icon={faArrowRight} size="2xs" />
            ) : (
              <FontAwesomeIcon icon={faArrowLeft} size="2xs" color="#fff" />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {["Dashboard", "All Courses", "Create Course"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
                onClick={() => handleDrawerMenu(index)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "#fff",
                  }}
                >
                  {index === 0 && <FontAwesomeIcon icon={faTableColumns} />}
                  {index === 1 && <FontAwesomeIcon icon={faPenToSquare} />}
                  {index === 2 && <FontAwesomeIcon icon={faSquarePlus} />}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{ opacity: open ? 1 : 0, color: "#fff" }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: "#1e90ff",
          width: "100%",
          height: "100%",
        }}
      >
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
}
