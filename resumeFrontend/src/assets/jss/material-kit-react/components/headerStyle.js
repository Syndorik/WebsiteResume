import {
    container,
} from "assets/jss/container.js";

const headerStyle = {
    appBar: {
        display: "flex",
        border: "0",
        borderRadius: "3px",
        padding: "0.625rem 0",
        marginBottom: "20px",
        color: "#555",
        width: "100%",
        backgroundColor: "#fff",
        boxShadow:
            "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)",
        transition: "all 150ms ease 0s",
        alignItems: "center",
        flexFlow: "row nowrap",
        justifyContent: "flex-start",
        position: "relative",
        zIndex: "unset"
    },
    absolute: {
        position: "absolute",
        zIndex: "1100"
    },
    fixed: {
        position: "fixed",
        zIndex: "1100"
    },
    container: {
        ...container,
        minHeight: "50px !important",
        flex: "1",
        alignItems: "center",
        justifyContent: "space-between",
        display: "flex",
        flexWrap: "nowrap",
        padding: "0px 15px !important"
    },
    flex: {
        flex: 1
    },
    appResponsive: {
        margin: "20px 10px"
    },
    linkcolor: {
        color: "#FFFFFF",
        "&:hover": {
            color: "#FFFFFF",
            textShadow: "0px 0px 6px rgba(255, 255, 255, 1)",
        },
        "&:focus": {
            color: "#FFFFFF"
        }
    },
    selectedLinkColor: {
        color: "#F06000 !important",
        "&:hover": {
            color: "#FFFFFF",
            textShadow: "0px 0px 6px rgba(255, 255, 255, 1)",
        },
        "&:focus": {
            color: "#FFFFFF"
        }
    },
    selectedLinkcolorScrolled: {
        color: "#F06000",
        "&:hover": {
            color: "rgba(0, 0, 0, 0.87)",
            textShadow: "0px 0px 6px rgba(0, 0, 0, 1)",
        },
        "&:focus": {
            color: "rgba(0, 0, 0, 0.87)"
        }
    },
    linkcolorScrolled: {
        color: "rgba(0, 0, 0, 0.87)",
        "&:hover": {
            color: "rgba(0, 0, 0, 0.87)",
            textShadow: "0px 0px 6px rgba(0, 0, 0, 1)",
        },
        "&:focus": {
            color: "rgba(0, 0, 0, 0.87)"
        }
    },
    transparent: {
        backgroundColor: "transparent",
        boxShadow: "none",
        paddingTop: "25px",
        color: "#FFFFFF",
        '& button': {
            color: "#FFFFFF"
        }
    },
    dark: {
        color: "#FFFFFF",
        backgroundColor: "#212121",
        boxShadow:
            "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(33, 33, 33, 0.46)"
    },
    white: {
        border: "0",
        padding: "0.625rem 0",
        marginBottom: "20px",
        color: "#555",
        backgroundColor: "#fff !important",
        boxShadow:
            "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)"
    },
};

export default headerStyle;
