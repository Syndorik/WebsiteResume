import React from "react";
import { NavLink } from "react-router-dom";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import routes from "routes.js"
// core components
import styles from "assets/jss/material-kit-react/components/headerStyle.js";
import Cookies from 'universal-cookie';
import settings from 'conf/config.js'

const cookies = new Cookies();

const useStyles = makeStyles(styles);

export default function Header(props) {
    const classes = useStyles();
    const [scrolled, setScrolled] = React.useState(false);
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
            document.body
                .getElementsByTagName("header")[0]
                .classList.remove(classes[color]);
            document.body
                .getElementsByTagName("header")[0]
                .classList.add(classes[changeColorOnScroll.color]);
        } else {
            setScrolled(false)
            document.body
                .getElementsByTagName("header")[0]
                .classList.add(classes[color]);
            document.body
                .getElementsByTagName("header")[0]
                .classList.remove(classes[changeColorOnScroll.color]);
        }
    };
    const { color, fixed, absolute } = props;
    const appBarClasses = classNames({
        [classes.appBar]: true,
        [classes[color]]: color,
        [classes.absolute]: absolute,
        [classes.fixed]: fixed
    });
    var hbutton = (path, title) => {
        var stle;

        if (cookies.get("nav") !== path) {
            stle = scrolled ? classes.linkcolorScrolled : classes.linkcolor
        } else {
            stle = scrolled ? classes.selectedLinkcolorScrolled : classes.selectedLinkColor
        }
        return <Button key={path}>
            <NavLink
                strict to={path}
                className={stle}
                activeClassName={stle}
            >
                {title}
            </NavLink>
        </Button>
    }

    const menuTitle = (path, title) => {
        let stle;

        if (cookies.get("nav") !== path) {
            stle = classes.linkcolorScrolled
        } else {
            stle = classes.selectedLinkcolorScrolled
        }

        return <MenuItem key={path}>
            <Button>
                <NavLink
                    strict to={path}
                    className={stle}
                    activeClassName={stle}
                >
                    {title}
                </NavLink>
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
        let resumeClass = scrolled ? classes.linkcolorScrolled : classes.linkcolor



        for (const route of routes) {
            if (route.insideDrawer) {
                mtitle.push(route)
                if (cookies.get("nav") === route.path) {
                    resumeClass = scrolled ? classes.selectedLinkcolorScrolled : classes.selectedLinkColor
                }
            } else {
                titles.push(route)
            }


        }

        let menuResume = <div key={"resume"}>
            <Button className={resumeClass} onClick={handleClick}>
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
        <AppBar className={appBarClasses}>
            <Toolbar className={classes.container}>
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
