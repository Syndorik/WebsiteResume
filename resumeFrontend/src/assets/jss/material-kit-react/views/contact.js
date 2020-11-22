import { container, title } from "assets/jss/material-kit-react.js";

import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";
import settings from 'conf/config.js'


const profilePageStyle = {
    container,
    contain: {
        maxWidth: "1020px",
        margin: '0 auto',
        padding: window.innerWidth >= settings.mobile ? "0px 30px 0px 30px" : "0px 10px 0px 10px",
        width: "100% !important",
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
    cardStyle: {
        height: '100%',
        maxWidth: "450px",
        borderRadius: "6px",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        transition: "0.3s",
    },
    buttonHovered: {
        cursor: "pointer",

        "&:hover": {
            textDecoration: "none",
            backgroundColor: "rgba(0, 0, 0, 0.04)"
        }
    },
    colorSkilled: {
        color: "#F06000",
    },
    addMarginh1: {
        margin: "26px 0px 10px 0px"
    },
    downloadButton: {
        color: "#ffffff",
        backgroundColor: "#313131",
        whiteSpace: "nowrap"

    },
    description: {
        margin: "1.071rem auto 0",
        maxWidth: "600px",
        color: "#999",
        textAlign: "center !important"
    },
    name: {
        marginTop: "-80px"
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
    sideTitle: {
        font: "2em opensans-bold, sans-serif",
        textTransform: "uppercase",
        color: "#313131",
        letterSpacing: "1px",
        "& span": {
            borderBottom: "3px solid #11ABB0",
            paddingBottom: "6px"
        }

    },
    sideTitleSmall: {
        font: "1em opensans-bold, sans-serif",
        textTransform: "uppercase",
        color: "#313131",
        letterSpacing: "1px",
        "& span": {
            borderBottom: "3px solid #11ABB0",
            paddingBottom: "6px"
        }

    },
    buttonStyle: {
        backgroundColor: "#11ABB0",
        color: "#fff",
        font: "15px/24px 'opensans-bold', sans-serif"
    },
    title: {
        ...title,
        display: "inline-block",
        position: "relative",
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none"
    },
    socials: {
        marginTop: "0",
        width: "100%",
        transform: "none",
        left: "0",
        top: "0",
        height: "100%",
        lineHeight: "41px",
        fontSize: "20px",
        color: "#999"
    },
    navWrapper: {
        margin: "20px auto 50px auto",
        textAlign: "center"
    },
    fonth1: {
        font: "3vh 'opensans-bold', sans-serif",
        color: "#313131",
    },
    fonth3: {
        font: "25px/30px 'opensans-bold', sans-serif",
        color: "#313131",
    },
    opensansbold: {
        font: "15px/24px 'opensans-bold', sans-serif"
    },
    opensanssemibold: {
        font: "15px/24px 'opensans-semibold', sans-serif"
    },
    fontItalic: {
        fontStyle: "italic !important"
    },
    fontBold: {
        fontStyle: "bold !important"
    },

    fonttype: {
        font: "16px/24px 'Libre Baskerville', serif;"
    },
    fontClassic: {
        font: "15px/24px 'opensans-regular', sans-serif",
        textAlign: "justify"

    },
    fontClassicParagraph: {
        font: "23px/24px 'opensans-regular', sans-serif",
        textAlign: "justify"
    },
    marginP: {
        margin: "9px 0px 18px 0px",
    },
    marginSwap: {
        margin: "0px 0px 30px 0px",
        textAlign: "justify"
    },
    ul: {
        margin: "0px 0px 0px 0px"
    },
    iconbutton: {
        "&:hover": {
            backgroundColor: "#ffffff00"
        }
    },
    showmaskText: {
        padding: "0px 0px 0px 40px",
        display: "inline-block"
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
