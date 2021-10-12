import React from "react";
import { NavLink } from "react-router-dom";
// nodejs library to set properties for components
import PropTypes from "prop-types";
//@mui/material components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import routes from "routes.js"
// core components
import styles from "assets/jss/material-kit-react/components/headerStyle.js";
import Cookies from 'universal-cookie';
import settings from 'conf/config.js'
import styled from '@emotion/styled'

const cookies = new Cookies();


export default function Header(props) {
    const { color, fixed, absolute } = props;
    const [scrolled, setScrolled] = React.useState(false);
    const [barcolor, setbarcolor] = React.useState(color);
    React.useEffect(() => {
        if (props.changeColorOnScroll) {
            window.addEventListener("scroll", headerColorChange);
        }
        return function cleanup() {
            if (props.changeColorOnScroll) {
                window.removeEventListener("scroll", headerColorChange);
            }
        };
    });

    cookies.set("nav", window.location.pathname)

    const headerColorChange = () => {
        const { color, changeColorOnScroll } = props;
        const windowsScrollTop = window.pageYOffset;
        if (windowsScrollTop > parseInt(0.07 * window.innerHeight)) {
            setScrolled(true)
            setbarcolor("white")

        } else {
            setScrolled(false)
            setbarcolor("transparent")
        }
    };
    const fixedStyle = fixed ? styles.fixed : {}
    const absoluteStyle = absolute ? styles.absolute : {}
    const appBarClasses = { ...styles.appBar, ...styles[barcolor], ...fixedStyle, ...absoluteStyle }
    var hbutton = (path, title) => {
        var stle;

        if (cookies.get("nav") !== path) {
            stle = scrolled ? styles.linkcolorScrolled : styles.linkcolor
        } else {
            stle = scrolled ? styles.selectedLinkcolorScrolled : styles.selectedLinkColor
        }

        const NavlinkAdapted = styled(NavLink)({
            ...stle
        })
        return <Button key={path}>
            <NavlinkAdapted
                strict to={path}
            >
                {title}
            </NavlinkAdapted>
        </Button>
    }

    const menuTitle = (path, title) => {
        let stle;

        if (cookies.get("nav") !== path) {
            stle = styles.linkcolorScrolled
        } else {
            stle = styles.selectedLinkcolorScrolled
        }
        const NavlinkAdapted = styled(NavLink)({
            ...stle
        })
        return <MenuItem key={path}>
            <Button>
                <NavlinkAdapted
                    strict to={path}
                >
                    {title}
                </NavlinkAdapted>
            </Button>
        </MenuItem>


    }

    const MobileHead = (routes) => {
        let titles = []
        let mtitle = []

        const [anchorEl, setAnchorEl] = React.useState(null);
        const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
        };

        const handleClose = () => {
            setAnchorEl(null);
        };
        let resumeClass = scrolled ? styles.linkcolorScrolled : styles.linkcolor



        for (const route of routes) {
            if (route.insideDrawer) {
                mtitle.push(route)
                if (cookies.get("nav") === route.path) {
                    resumeClass = scrolled ? styles.selectedLinkcolorScrolled : styles.selectedLinkColor
                }
            } else {
                titles.push(route)
            }


        }

        let menuResume = <div key={"resume"}>
            <Button sx={resumeClass} onClick={handleClick}>
                Resume
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}

            >
                {
                    mtitle.map((arr) => {
                        return menuTitle(arr.path, arr.name)
                    })
                }
            </Menu>
        </div>

        let buttons = titles.map((arr) => {
            return hbutton(arr.path, arr.name)
        })

        buttons.splice(2, 0, menuResume)

        return buttons


    }

    let Alternative = MobileHead(routes)
    let bigScreen = routes.map((arr) => {
        return hbutton(arr.path, arr.name)
    })

    return (
        <AppBar sx={appBarClasses}>
            <Toolbar sx={styles.container}>
                {window.innerWidth >= settings.mobile ? bigScreen : Alternative}
            </Toolbar>
        </AppBar>
    );
}

Header.defaultProp = {
    color: "white"
};

Header.propTypes = {
    color: PropTypes.oneOf([
        "primary",
        "info",
        "success",
        "warning",
        "danger",
        "transparent",
        "white",
        "rose",
        "dark"
    ]),
    rightLinks: PropTypes.node,
    leftLinks: PropTypes.node,
    brand: PropTypes.string,
    fixed: PropTypes.bool,
    absolute: PropTypes.bool,
    // this will cause the sidebar to change the color from
    // props.color (see above) to changeColorOnScroll.color
    // when the window.pageYOffset is heigher or equal to
    // parseInt(0.1*window.innerHeight) and then when it is smaller than
    // parseInt(0.1*window.innerHeight) change it back to
    // props.color (see above)
    changeColorOnScroll: PropTypes.shape({
        height: PropTypes.number.isRequired,
        color: PropTypes.oneOf([
            "primary",
            "info",
            "success",
            "warning",
            "danger",
            "transparent",
            "white",
            "rose",
            "dark"
        ]).isRequired
    })
};
