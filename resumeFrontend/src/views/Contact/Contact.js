import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import SubjectIcon from '@material-ui/icons/Subject';
import Button from '@material-ui/core/Button';
import emailjs from 'emailjs-com';
import styles from "assets/jss/material-kit-react/views/contact.js";
import { AddAlarm } from "@material-ui/icons";

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


const useStyles = makeStyles(styles);

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function ProfilePage(props) {
    const classes = useStyles();
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
                rightLinks={<HeaderLinks />}
                fixed
                changeColorOnScroll={{
                    height: 140,
                    color: "white"
                }}
                {...rest}
            />
            <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
            <div className={classNames(classes.main, classes.mainRaised)}>
                <Grid container justify="center" className={classes.contain} direction="row" spacing={3}>
                    <Grid item xs={12}>
                        <h1 className={classNames(classes.profile, classes.sideTitle, classes.addMarginh1)}><span>Contact</span></h1>
                    </Grid>
                    <Grid item xs={12}>
                        <p className={classes.fontClassic}>
                            You can contact me using this form or the details bellow
                            </p>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <div>
                            <TextField
                                className={classes.margin}
                                label="Name"
                                required
                                variant="outlined"
                                placeholder="Name"
                                style={{ "width": "70%" }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    ),
                                }}
                                error={isName}
                                onChange={(e) => { checkNameSubj(e.target.value, setisName); setName(e.target.value) }}
                            />
                        </div>
                        <div>
                            <TextField
                                className={classes.margin}
                                label="Email"
                                required
                                variant="outlined"
                                placeholder="Email"
                                style={{ "width": "70%" }}
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
                                className={classes.margin}
                                label="Subject"
                                required
                                variant="outlined"
                                placeholder="Subject"
                                style={{ "width": "70%" }}
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
                                className={classes.margin}
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
                            <Button variant="contained" className={classes.buttonStyle} disabled={disable} onClick={handleClick}>Send</Button>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <h1 className={classNames(classes.profile, classes.sideTitleSmall, classes.margin)}><span>My details</span></h1>
                        <p className={classes.fontClassic}>Alexandre Allani</p>
                        <p className={classes.fontClassic}>Paris, France</p>
                        <p className={classes.fontClassic}>+33648080121</p>
                        <p className={classes.fontClassic}>aa4719@ic.ac.uk</p>

                    </Grid>
                </Grid>
            </div>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Email sent
                </Alert>
            </Snackbar>
            <Snackbar open={openBeingSent} autoHideDuration={6000} onClose={handleCloseBeingSent}>
                <Alert onClose={handleCloseBeingSent} severity="info">
                    Sending email ...
                </Alert>
            </Snackbar>
            <Snackbar open={openError} autoHideDuration={6000} onClose={handleCloseError}>
                <Alert onClose={handleCloseError} severity="error">
                    Please complete the form
                </Alert>
            </Snackbar>
            <Snackbar open={openNotworking} autoHideDuration={6000} onClose={handleCloseNotWorking}>
                <Alert onClose={handleCloseNotWorking} severity="error">
                    Error happened
                </Alert>
            </Snackbar>
        </div >
    );
}
