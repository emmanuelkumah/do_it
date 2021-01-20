import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    Button,
    IconButton,
    Drawer,
    Link,
    MenuItem,
  } from "@material-ui/core";
  import MenuIcon from "@material-ui/icons/Menu";
  import React, { useState, useEffect } from "react";
  import { Link as RouterLink } from "react-router-dom";
  
  //array of navigation items
  const navigationItemsData = [
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Features",
      href: "/features",
    },
    {
      label: "Contact",
      href: "/contact",
    },
    {
      label: "Sign Up",
      href: "/signup",
    },
    {
      label: "Log In",
      href: "/login",
    },
  ];
  
  //styling the components
  const useStyles = makeStyles(() => ({
    header: {
      backgroundColor: "#F8333C",
      width: "100vw",
      paddingRight: "79px",
      paddingLeft: "118px",
      "@media (max-width: 900px)": {
        paddingLeft: 0,
      },
    },
    logo: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: 600,
      color: "#FFFEFE",
      textAlign: "left",
    },
    menuButton: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: 700,
      size: "18px",
      marginLeft: "38px",
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
    },
    drawerContainer: {
      padding: "20px 30px",
    },
  }));
  
  export default function Header() {
    const { header, logo, menuButton, toolbar, drawerContainer } = useStyles();
  
    //set intial state
    const [state, setState] = useState({
      mobileView: false,
      drawerOpen: false,
    });
    //deconstruct the state
    const { mobileView, drawerOpen } = state;
  
    //run the effect for responsiveness
    useEffect(() => {
      const setResponsiveness = () => {
        return window.innerWidth < 900
          ? setState((prevState) => ({ ...prevState, mobileView: true }))
          : setState((prevState) => ({ ...prevState, mobileView: false }));
      };
  
      setResponsiveness();
  
      window.addEventListener("resize", () => setResponsiveness());
    }, []);
  
    //display  desktop view
    const displayDesktop = () => {
      return (
        <Toolbar className={toolbar}>
          {appLogo}
          <div>{getMenuButtons()}</div>
        </Toolbar>
      );
    };
  
    const displayMobile = () => {
      const handleDrawerOpen = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: true }));
      const handleDrawerClose = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: false }));
  
      return (
        <Toolbar>
          <IconButton
            {...{
              edge: "start",
              color: "inherit",
              "aria-label": "menu",
              "aria-haspopup": "true",
              onClick: handleDrawerOpen,
            }}
          >
            <MenuIcon />
          </IconButton>
  
          <Drawer
            {...{
              anchor: "left",
              open: drawerOpen,
              onClose: handleDrawerClose,
            }}
          >
            <div className={drawerContainer}>{getDrawerMenus()}</div>
          </Drawer>
  
          <div>{appLogo}</div>
        </Toolbar>
      );
    };
  
    //show menus on  drawer
    const getDrawerMenus = () => {
      return navigationItemsData.map(({ label, href }) => {
        return (
          <Link
            {...{
              component: RouterLink,
              to: href,
              color: "inherit",
              style: { textDecoration: "none" },
              key: label,
            }}
          >
            <MenuItem>{label}</MenuItem>
          </Link>
        );
      });
    };
  
    const appLogo = (
      <Typography variant="h6" component="h1" className={logo}>
        Do It!
      </Typography>
    );
  
    const getMenuButtons = () => {
      return navigationItemsData.map(({ label, href }) => {
        return (
          <Button
            {...{
              key: label,
              color: "inherit",
              to: href,
              component: RouterLink,
              className: menuButton,
            }}
          >
            {label}
          </Button>
        );
      });
    };
  
    return (
      <header>
        <AppBar position="static" className={header}>
          {mobileView ? displayMobile() : displayDesktop()}
        </AppBar>
      </header>
    );
  }
  