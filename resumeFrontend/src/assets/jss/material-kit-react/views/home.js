import settings from 'conf/config.js'

const profilePageStyle = {
    full: {
        width: "100%",
        Height: "100%",
    },
    fonth1: {
        font: "min(4.7vw, 10vh) 'opensans-bold', sans-serif",
        color: "#ffffff",
        textShadow: "0px 1px 3px rgba(0, 0, 0, .8)"
    },
    font: {
        font: window.innerWidth >= settings.mobile ? "1.5em 'Libre Baskerville', serif" : "1em 'Libre Baskerville', serif",
        color: "#A8A8AA",
        textShadow: "0px 1px 2px rgba(0, 0, 0, .5)",
        textAlign: "justify"
    },
    colorEmph: {
        color: "#ffffff"
    },
    contain: {
        maxWidth: "1020px",
        margin: '0 auto',
        padding: "0px 15px 0px 15px",
    },
};

export default profilePageStyle;
