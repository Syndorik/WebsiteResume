import React from "react";
// @mui/material/ components
import Parallax from "components/Parallax/Parallax.js";
import { makeStyles } from "@mui/styles";
import classNames from "classnames";


import IconButton from '@mui/material//IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import profileP from "assets/img/profile-bg.jpg";

import Grid from '@mui/material//Grid';

// core components
import Header from "components/Header/Header.js";


import styles from "assets/jss/material-kit-react/views/home.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
    const classes = useStyles();
    const { ...rest } = props;

    const LinkIcon = (urlProject, Micon) => {
        return <IconButton style={{ padding: "0px 40px" }}>
            <a rel="noopener noreferrer" className={classes.linkcolorScrolled} href={urlProject} target="_blank">
                <Micon fontSize="large" style={{ fontSize: "2em" }} />
            </a>
        </IconButton >
    }

    return (
        <div>
            <Header
                color="transparent"
                brand="Material Kit React"
                fixed
                {...rest}
            />
            <Parallax filterlight big image={profileP} >
                <div className={classNames(classes.contain)} style={{ marginTop: '40px' }}>
                    <h1 className={classes.fonth1}>I'm Someone. </h1>
                    <p className={classes.font}>
                        I am a <span className={classes.colorEmph}>datascientist</span> from Paris, I have
                        <span className={classes.colorEmph}> 2 masters</span> in this field including one at
                        <span className={classes.colorEmph}> Imperial College of London</span> completed with
                        first-class honours. In addition to Artificial Intelligence, I am also interested in
                        <span className={classes.colorEmph}> web development and data engineering</span>. This
                        website is an interactive version of my resume where you can also find some of my side
                        projects. Feel free to contact me if you are interested in my profile.
                    </p>
                    <p className={classes.font} style={{ marginTop: "30px" }}>
                        This website was developped using <span className={classes.colorEmph}>ReactJS</span>.
                        <span className={classes.colorEmph}> Github Action</span> was used for Continuous Integration and
                        <span className={classes.colorEmph}> Google Kubernetes Engine</span> was used for Continuous Deployment.
                        The application is deployed on my personnal cluster. You can find the source code of this project along
                        the deployment templates by clicking on the code icon.
                    </p>
                    <div style={{ textAlign: "center", marginTop: "30px" }}>
                        {LinkIcon("https://github.com/Syndorik/Resume", GitHubIcon)}
                        {LinkIcon("https://www.linkedin.com/in/alexandre-allani/", LinkedInIcon)}
                        {LinkIcon("https://github.com/Syndorik/WebsiteResume", CodeIcon)}
                    </div>
                </div>

            </Parallax>

        </div >
    );
}
