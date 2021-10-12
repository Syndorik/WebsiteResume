import React from "react";
// @mui/material components
import Header from "components/Header/Header.js";
import Parallax from "components/Parallax/Parallax.js";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import InputAdornment from '@mui/material/InputAdornment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import SubjectIcon from '@mui/icons-material/Subject';
import Button from '@mui/material/Button';
import emailjs from 'emailjs-com';
import styles from "assets/jss/material-kit-react/views/contact.js";

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import settings from 'conf/config.js'
import profileP from "assets/img/profile-bg.jpg"

import { styled } from '@mui/material/styles';



const MainDiv = styled('div')({ ...styles.main, ...styles.mainRaised })
const StyledH1 = styled("h1")({
    ...styles.profile, ...styles.sideTitle, ...styles.addMarginh1
})
const PargraphFontClassic = styled("p")({
    ...styles.fontClassic
})


function AlertPerso(props) {
    return <Alert elevation={6} variant="filled" {...props} />;
}

export default function ProfilePage(props) {
    const { ...rest } = props;

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const [name, setName] = React.useState("")
    const [isName, setisName] = React.useState(false)
    const [disable, setDisable] = React.useState(false)

    const [email, setEmail] = React.useState("")
    const [isEmail, setisEmail] = React.useState(false)

    const [subject, setSubject] = React.useState("")
    const [isSubject, setisSubject] = React.useState(false)

    const [message, setMessage] = React.useState("")
    const [isMeassage, setisMeassage] = React.useState(false)

    const [open, setOpen] = React.useState(false);
    const [openError, setOpenError] = React.useState(false);
    const [openBeingSent, setOpenBeingSent] = React.useState(false);
    const [openNotworking, setOpenNotworking] = React.useState(false);

    let H1StyledResp = window.innerWidth >= settings.mobile ? styled("h1")({ ...styles.profile, ...styles.sideTitleSmall, ...styles.margin }) : styled("h1")({ ...styles.profile, ...styles.sideTitle, ...styles.margin })

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const handleAlert = () => {
        setOpen(true);
    };

    const handleAlertBeingSent = () => {
        setOpenBeingSent(true);
    };

    const handleAlertError = () => {
        setOpenError(true);
    };

    const handleNotWorking = () => {
        setOpenNotworking(true);
    };

    const handleClose = (event, reason) => {
        handleCloseBeingSent("", "")
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const handleCloseBeingSent = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenBeingSent(false);
    };

    const handleCloseError = (event, reason) => {
        handleCloseBeingSent("", "")
        if (reason === 'clickaway') {
            return;
        }

        setOpenError(false);
    };


    const handleCloseNotWorking = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenNotworking(false);
    };

    const checkNameSubj = (name, callback) => {
        if (name.length <= 1) {
            callback(true)
        } else {
            callback(false)
        }
    }



    function sendEmail(templateParams) {
        setDisable(true)
        console.log(disable)
        handleAlertBeingSent()
        emailjs.send('service_haq0uso', 'template_hi75s6c', templateParams)
            .then((result) => {
                console.log(result.text);
                handleAlert()
                setDisable(false)
            }, (error) => {
                console.log(error.text);
                handleNotWorking()
                setDisable(false)
            });
    }


    const handleClick = () => {
        checkNameSubj(name, setisName);
        checkNameSubj(message, setisMeassage);
        checkNameSubj(subject, setisSubject);
        setisEmail(!re.test(email))
        if (!isName && !isMeassage && !isEmail && !isSubject) {
            console.log("ccc")
            sendEmail(
                {
                    "from_name": name,
                    "message": message,
                    "to_name": "Alexandre",
                    "email": email,
                    "subject": subject
                }
            )
        } else {
            handleAlertError()
        }
    }

    emailjs.init("user_aG5p436ruTKxmdgkllgm9");



    return (
        <div>
            <Header
                color="transparent"
                brand="Material Kit React"
                fixed
                changeColorOnScroll={{
                    height: 140,
                    color: "white"
                }}
                {...rest}
            />
            <Parallax small filter image={profileP} />
            <MainDiv>
                <Grid container justify="center" sx={styles.contain} direction="row" spacing={3}>
                    <Grid item xs={12}>
                        <StyledH1><span>Contact</span></StyledH1>
                    </Grid>
                    <Grid item xs={12}>
                        <PargraphFontClassic>
                            You can contact me using this form or the details bellow:
                        </PargraphFontClassic>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <div>
                            <TextField
                                sx={styles.margin}
                                label="Name"
                                required
                                variant="outlined"
                                placeholder="Name"
                                style={{ "width": window.innerWidth >= settings.mobile ? "70%" : "100%" }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircleIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                error={isName}
                                onChange={(e) => { checkNameSubj(e.target.value, setisName); setName(e.target.value) }}
                            />
                        </div>
                        <div>
                            <TextField
                                sx={styles.margin}
                                label="Email"
                                required
                                variant="outlined"
                                placeholder="Email"
                                style={{ "width": window.innerWidth >= settings.mobile ? "70%" : "100%" }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AlternateEmailIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                error={isEmail}
                                onChange={(e) => { setisEmail(!re.test(e.target.value)); setEmail(e.target.value) }}
                            />
                        </div>
                        <div>
                            <TextField
                                sx={styles.margin}
                                label="Subject"
                                required
                                variant="outlined"
                                placeholder="Subject"
                                style={{ "width": window.innerWidth >= settings.mobile ? "70%" : "100%" }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SubjectIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                error={isSubject}
                                onChange={(e) => { checkNameSubj(e.target.value, setisSubject); setSubject(e.target.value) }}
                            />
                        </div>
                        <div>
                            <TextField
                                sx={{ ...styles.margin }}
                                label="Message"
                                required
                                variant="outlined"
                                multiline
                                placeholder="Message"
                                rows={10}
                                style={{ "width": "100%" }}
                                error={isMeassage}
                                onChange={(e) => { checkNameSubj(e.target.value, setisMeassage); setMessage(e.target.value) }}
                            />

                        </div>
                        <div style={{ textAlign: "end" }}>
                            <Button variant="contained" sx={styles.buttonStyle} disabled={disable} onClick={handleClick}>Send</Button>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <H1StyledResp><span>My details</span></H1StyledResp>
                        <PargraphFontClassic>Alexandre Allani</PargraphFontClassic>
                        <PargraphFontClassic>Paris, France</PargraphFontClassic>
                        <PargraphFontClassic>+33648080121</PargraphFontClassic>
                        <PargraphFontClassic>aa4719@ic.ac.uk</PargraphFontClassic>

                    </Grid>
                </Grid>
            </MainDiv>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <AlertPerso onClose={handleClose} severity="success">
                    Email sent
                </AlertPerso>
            </Snackbar>
            <Snackbar open={openBeingSent} autoHideDuration={6000} onClose={handleCloseBeingSent}>
                <AlertPerso onClose={handleCloseBeingSent} severity="info">
                    Sending email ...
                </AlertPerso>
            </Snackbar>
            <Snackbar open={openError} autoHideDuration={6000} onClose={handleCloseError}>
                <AlertPerso onClose={handleCloseError} severity="error">
                    Please complete the form
                </AlertPerso>
            </Snackbar>
            <Snackbar open={openNotworking} autoHideDuration={6000} onClose={handleCloseNotWorking}>
                <AlertPerso onClose={handleCloseNotWorking} severity="error">
                    Error happened
                </AlertPerso>
            </Snackbar>
        </div >
    );
}
