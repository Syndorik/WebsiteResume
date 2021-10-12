import { container } from "assets/jss/container.js";

import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";
import settings from 'conf/config.js'


const profilePageStyle = {
    container,
    contain: {
        maxWidth: "1020px",
        margin: '0 auto',
        padding: "0px 30px 0px 30px",
    },
    profile: {
        padding: "0px 20px 0px 0px",
        "& img": {
            marginTop: "20px",
            maxWidth: "160px",
            width: "100%",
            margin: "0 auto",
        }
    },
    margin: {
        margin: "12px 0px 18px 0px",
    },
    addMargin: {
        margin: "20px 0px 20px 0px"
    },
    downloadButton: {
        color: "#ffffff",
        backgroundColor: "#313131",
        whiteSpace: "nowrap",
        "&:hover": {
            backgroundColor: "#d5d5d5"

        }

    },
    ...imagesStyle,
    main: {
        background: "#FFFFFF",
        position: "relative",
        padding: "10vh 0px 8vh 0px",
        zIndex: "3",
        overflow: "auto"
    },
    mainRaised: {
        margin: window.innerWidth >= settings.mobile ? "-60px 30px 0px" : "-60px 5px 0px",
        borderRadius: "6px",
        boxShadow:
            "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },


    fonth1: {
        font: "3vh 'opensans-bold', sans-serif",
        color: "#313131",
    },
    font: {
        font: "1em 'opensans-regular', sans-serif",
        color: "#838C95",
        textAlign: "justify"
    },
    colorEmph: {
        color: "#ffffff"
    }
};

export default profilePageStyle;
