import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import Grid from '@material-ui/core/Grid';
import ReactCardFlip from 'react-card-flip';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import GitHubIcon from '@material-ui/icons/GitHub';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import styles from "assets/jss/material-kit-react/views/project.js";


const useStyles = makeStyles(styles);


export default function ProfilePage(props) {
    const classes = useStyles();
    const { ...rest } = props;

    const FlippedCard = (name, description) => {
        const [isFlipped, setIsFlipped] = React.useState(false)
        var initSize = window.innerWidth < 1020 ? 12 : 6
        const [gridSize, setGridSize] = React.useState(initSize)
        const handleChange = () => {
            setIsFlipped((prev) => !prev);
        };

        var changeGrid = () => {
            if (window.innerWidth < 1020) {
                setGridSize(12)
            } else {
                setGridSize(6)
            }
        }

        React.useEffect(() => {
            window.addEventListener("resize", changeGrid)
        });

        return <Grid item xs={gridSize}>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" containerStyle={{ height: "100%", alignItems: "center" }}>
                <Card className={classNames(classes.cardStyle, classes.buttonHovered)} variant="outlined" onClick={handleChange} style={{ height: "100%" }}>
                    <CardContent>
                        <h1 style={{ textAlign: "center" }} className={classNames(classes.profile, classes.sideTitle, classes.addMarginh1)}>
                            {name}
                        </h1>
                    </CardContent>
                </Card>
                <Card className={classes.cardStyle} variant="outlined" style={{ height: "100%" }}>
                    <CardContent>
                        <Grid container justify="center">
                            <Grid item xs={2}>
                                <IconButton onClick={handleChange}> <ArrowBackIcon /> </IconButton>
                            </Grid>
                            <Grid item xs={10} align="left" style={{ padding: "12px 0px" }}>
                                <h1 className={classNames(classes.profile, classes.smallTitle)}>
                                    {name}
                                </h1>
                                {description}
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Grid container justify="flex-end">
                            <Grid item xs={10} />
                            <Grid item xs={2} style={{ textAlign: "right" }}>
                                <IconButton><GitHubIcon fontSize="large" /> </IconButton>
                            </Grid>
                        </Grid>
                    </CardActions>
                </Card>
            </ReactCardFlip>
        </Grid>
    }
    const alignedIcons = (icon, text) => {
        return <div className={classes.font}>
            <Grid container direction="row" alignItems="baseline" spacing={2}>
                <Grid item>
                    {icon}
                </Grid>
                <Grid item>
                    {text}
                </Grid>
            </Grid>
        </div>
    }



    return (
        <div>
            <Header
                color="transparent"
                brand="Material Kit React"
                rightLinks={<HeaderLinks />}
                fixed
                changeColorOnScroll={{
                    height: 160,
                    color: "white"
                }}
                {...rest}
            />
            <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
            <div className={classNames(classes.main, classes.mainRaised)}>
                <Grid container justify="flex-start" className={classes.contain} direction="row" spacing={3}>
                    {alignedIcons(
                        <StarBorderIcon className={classes.icon} style={{ "margin": "0px 16px 0px 5px" }} />,
                        <h1 className={classNames(classes.profile, classes.sideTitle, classes.addMarginh1)}><span>Starred Projects</span></h1>
                    )}
                    <Grid item xs={12}>
                        <p className={classes.fontClassicParagraph}>
                            These two side-projects were selected because they are the most representative of my skills. This section does not include
                            my master thesis nor work project as they are described in the Background page.
                            <span className={classes.opensanssemiboldparagraph}> You can find the source-code of each project by clicking on the Github icon</span>
                        </p>
                    </Grid>
                </Grid>
                <Grid container justify="center" align="center" alignItems="stretch" className={classes.contain} direction="row" spacing={3}>
                    {FlippedCard(
                        "Age regression using brain MRI scans",
                        <div className={classes.fontClassic} style={{ paddingRight: "4px" }}>
                            <p style={{ marginTop: "20px", marginBottom: "0px" }}>
                                Volume based regression:</p>
                            <p style={{ paddingLeft: "20px" }}>
                                The purpose of this task was to first predict the volume of some areas in the brain using
                                3D scans MRI. A Unet architecture with residuals was used to do this. Then using a
                                regression model, we could use the volume to predict the age of a patient.
                                Neural Network, SVMs, Linear Regression and xgboost methods were used for this second task.
                            </p>
                            <p>
                                Another part of this project was to directly use a Unet architecture with residuals to predict
                                the age of the patient.
                            </p>
                        </div>

                    )
                    }
                    {FlippedCard("Data Engineer", "Lourrrddd bis")}
                </Grid>
            </div>
        </div>
    );
}
