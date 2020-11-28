import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header/Header.js";
import Parallax from "components/Parallax/Parallax.js";
import Grid from '@material-ui/core/Grid';
import ReactCardFlip from 'react-card-flip';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';







import styles from "assets/jss/material-kit-react/views/skills.js";


const useStyles = makeStyles(styles);


export default function ProfilePage(props) {
    const classes = useStyles();
    const { ...rest } = props;

    const FlippedCard = (name, skills) => {
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
            window.scrollTo(0, 0)
        }, []);

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
                        <Grid container>
                            <Grid item xs={2}>
                                <IconButton onClick={handleChange}> <ArrowBackIcon /> </IconButton>
                            </Grid>
                            <Grid item xs={10} style={{ padding: "12px 0px" }}>
                                <Grid container alignItems="center">
                                    {
                                        skills.map(([skill, normal]) => {
                                            return <Grid key={skill} item xs={4} style={{ textAlign: "center", padding: "7px 4px 7px 4px" }}>
                                                {normal === undefined ?
                                                    <span className={classNames(classes.fontClassic)}> {skill} </span> :
                                                    <span className={classNames(classes.fontClassic, classes.colorSkilled)}> {skill} </span>}
                                            </Grid>
                                        })
                                    }
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </ReactCardFlip>
        </Grid>
    }



    return (
        <div>
            <Header
                color="transparent"
                brand="Material Kit React"
                fixed
                changeColorOnScroll={{
                    height: 160,
                    color: "white"
                }}
                {...rest}
            />
            <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
            <div className={classNames(classes.main, classes.mainRaised)}>
                <Grid container justify="center" className={classes.contain} direction="row" spacing={3}>
                    <Grid item xs={12}>
                        <h1 className={classNames(classes.profile, classes.sideTitle, classes.addMarginh1)}><span>Skills</span></h1>
                    </Grid>
                    <Grid item xs={12}>
                        <p className={classes.fontClassicParagraph}>
                            You will find on this page a list of my skills. The skills tagged in
                            <span className={classes.colorSkilled}> orange </span> are the ones in which I am most
                            proficient.
                            </p>
                    </Grid>
                </Grid>
                <Grid container justify="center" align="center" alignItems="stretch" className={classes.contain} direction="row" spacing={3}>
                    {FlippedCard("Data Science", [
                        ["Python", true],
                        ["R"],
                        ["Spark"],
                        ["PyTorch", true],
                        ["Scikit-learn", true],
                        ["NLTK", true]
                    ])}
                    {FlippedCard("Data Engineer", [
                        ["Docker", true],
                        ["OpenStack"],
                        ["Kubernetes", true],
                        ["Gitlab CI/CD", true],
                        ["Google Cloud Platform", true],
                    ])}
                    {FlippedCard("Web Development", [
                        ["XML", true],
                        ["ReactJS", true],
                        ["Javascript", true],
                        ["CSS3", true],
                        ["PHP"],
                        ["Python-Flask", true],])}
                    {FlippedCard("Programming", [
                        ["Python", true],
                        ["Java", true],
                        ["Matlab"],
                        ["C++"]
                    ])}
                    {FlippedCard("Versioning", [
                        ["Git", true],
                        ["Github"],
                        ["Gitlab", true],

                    ])}
                    {FlippedCard("Design", [
                        ["Latex", true],
                        ["Office Pack", true]
                    ])}
                    {FlippedCard("OS", [
                        ["Linux", true],
                        ["Windows"]
                    ])}
                    {FlippedCard("Database", [
                        ["SQL", true],
                        ["mongoDB", true],
                        ["Neo4j", true],
                        ["ArangoDB"]
                    ])}
                    {FlippedCard("System Programming", [
                        ["C"],
                        ["Assembly"]
                    ])}
                </Grid>
            </div>
        </div>
    );
}
