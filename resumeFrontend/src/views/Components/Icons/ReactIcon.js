import React from "react";
import { makeStyles } from "@mui/styles";
import { SvgIcon } from "@mui/material";
import { ReactComponent as ReactLogo } from "assets/icons/react.svg"
import styles from "assets/jss/material-kit-react/components/ReactIcon.js";

const useStyles = makeStyles(styles);

export default function ReactIcon() {
    const classes = useStyles();
    return <SvgIcon height="60px" width="60px" viewBox='0 0 60 60' >
        <ReactLogo fill="white" className={classes.reactlogo} height="60px" width="60px" />
    </SvgIcon>
}