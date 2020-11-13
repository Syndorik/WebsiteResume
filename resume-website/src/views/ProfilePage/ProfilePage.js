import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

// @material-ui/icons
import GetAppIcon from '@material-ui/icons/GetApp';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import HomeIcon from '@material-ui/icons/Home';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

import profile from "assets/img/faces/alex.png";
import styles from "assets/jss/material-kit-react/views/profilePage.js";
import { Link } from "react-router-dom"


const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
    const classes = useStyles();
    const { ...rest } = props;
    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid
    );

    const paragraphClass = classNames(
        classes.font,

    )

    const alignedIcons = (icon, text) => {
        return <p className={classes.font}>
            <Grid container direction="row" alignItems="center" spacing={2}>
                <Grid item>
                    {icon}
                </Grid>
                <Grid item>
                    {text}
                </Grid>
            </Grid>
        </p>
    }

    return (
        <div>
            <Header
                color="transparent"
                brand="Material Kit React"
                rightLinks={<HeaderLinks />}
                fixed
                changeColorOnScroll={{
                    height: 200,
                    color: "white"
                }}
                {...rest}
            />
            <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
            <div className={classNames(classes.main, classes.mainRaised)}>
                <Grid container alignItems="center" justify="center" className={classes.contain}>
                    <Grid item xs={12} sm={4} className={classes.profile}>
                        <div >
                            <div>
                                <img src={profile} alt="..." className={imageClasses} />
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <h1 className={classes.fonth1}>About Me</h1>
                        <p className={classes.font}>
                            I am a datascientist with two masters in AI/ Machine learning: one in IMT atlantique
                            (formerly Télécom Bretagne) and one in Imperial College of London both completed with the
                            highest honours. I sepcialised in NLP with my master thesis in topic modeling: I was working
                            with the Centre of Psychedelic Reserach of Imperial and developped a new model based on
                            BERT with state of the art results. I like to discorver new methods and apply them in
                            personal projects.
                        </p>
                    </Grid>

                    <Grid item xs={12} sm={4} className={classes.profile} />
                    <Grid item xs={12} sm={8}>
                        <Grid container className={classes.addMargin}>
                            <Grid item xs={6}>
                                <h1 className={classes.fonth1}>Contact Details</h1>
                            </Grid>
                            <Grid item xs={6} align="right" className={classes.margin}>
                                <Link to="/files/resume.pdf" target="_blank" download>
                                    <Button size="large" variant="contained" startIcon={<GetAppIcon />} className={classes.downloadButton}>
                                        Download Resume
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>

                        {alignedIcons(<PermIdentityIcon />, "Alexandre Allani")}
                        {alignedIcons(<HomeIcon />, "Paris, France")}
                        {alignedIcons(<PhoneIcon />, "+33648080121")}
                        {alignedIcons(<EmailIcon />, "alexandre.allani19@imperial.ac.uk")}

                    </Grid>

                </Grid>
            </div>
        </div>
    );
}
