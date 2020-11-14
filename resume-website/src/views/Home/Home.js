import React from "react";
// @material-ui/core components
import Parallax from "components/Parallax/Parallax.js";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';


// core components
import Header from "components/Header/Header.js";


import styles from "assets/jss/material-kit-react/views/home.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
    const classes = useStyles();
    const { ...rest } = props;
    return (
        <div>
            <Header
                color="transparent"
                brand="Material Kit React"
                fixed
                changeColorOnScroll={{
                    height: 200,
                    color: "white"
                }}
                {...rest}
            />
            <Parallax filterlight big image={require("assets/img/profile-bg.jpg")} >
                <Grid container spacing={3} alignItems="center" justify="center">
                    <Grid item xs={3} />
                    <Grid item xs={6} align="center">
                        <h1 className={classes.fonth1}>I'm Alexandre Allani.</h1>
                        <p className={classes.font}>
                            I am a <span className={classes.colorEmph}>datascientist</span> from Paris, I have
                            <span className={classes.colorEmph}> 2 masters</span> in this field including one at
                            <span className={classes.colorEmph}> Imperial College of London</span> completed with
                            first-class honours. In addition to Artificial Intelligence, I am also interested in
                            <span className={classes.colorEmph}> web development and data engineering</span>. This
                            website is an interactive version of my resume. You might also find some of my side
                            projects. Feel free to contact me if you are interested in my profile.
                        </p>
                    </Grid>
                    <Grid item xs={3} />
                </Grid>
            </Parallax>

        </div >
    );
}
