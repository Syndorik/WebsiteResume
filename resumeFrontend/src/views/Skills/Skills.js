import React from "react";
// @mui/material/ components
import Header from "components/Header/Header.js";
import Parallax from "components/Parallax/Parallax.js";
import Grid from '@mui/material/Grid';
import ReactCardFlip from 'react-card-flip';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import profileP from "assets/img/profile-bg.jpg"





import styles from "assets/jss/material-kit-react/views/skills.js";


const H1Styled = styled("h1")({
    ...styles.profile, ...styles.sideTitle, ...styles.addMarginh1
})
const SpanClassic = styled("span")({
    ...styles.fontClassic
})
const SpanColor = styled("span")({
    ...styles.colorSkilled
})
const SpanClassicColored = styled("span")({
    ...styles.fontClassic,
    ...styles.colorSkilled

})
const MainDiv = styled('div')({ ...styles.main, ...styles.mainRaised })
const PargraphFontClassic = styled("p")({ ...styles.fontClassicParagraph })

export default function ProfilePage(props) {
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
                <Card sx={{ ...styles.cardStyle, ...styles.buttonHovered }} variant="outlined" onClick={handleChange} style={{ height: "100%" }}>
                    <CardContent>
                        <H1Styled style={{ textAlign: "center" }}>
                            {name}
                        </H1Styled>
                    </CardContent>
                </Card>
                <Card sx={styles.cardStyle} variant="outlined" style={{ height: "100%" }}>
                    <CardContent>
                        <Grid container sx={styles.cardContainer}>
                            <Grid item xs={2}>
                                <IconButton onClick={handleChange} sx={{ padding: "12px" }}> <ArrowBackIcon /> </IconButton>
                            </Grid>
                            <Grid item xs={10} style={{ padding: "12px 0px" }}>
                                <Grid container alignItems="center">
                                    {
                                        skills.map(([skill, normal]) => {
                                            return <Grid key={skill} item xs={4} style={{ textAlign: "center", padding: "7px 4px 7px 4px" }}>
                                                {normal === undefined ?
                                                    <SpanClassic> {skill} </SpanClassic> :
                                                    <SpanClassicColored> {skill} </SpanClassicColored>}
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
            <Parallax small filter image={profileP} />
            <MainDiv>
                <Grid container justify="center" sx={styles.contain} direction="row" spacing={3}>
                    <Grid item xs={12}>
                        <H1Styled><span>Skills</span></H1Styled>
                    </Grid>
                    <Grid item xs={12}>
                        <PargraphFontClassic>
                            You will find on this page a list of my skills. The skills tagged in
                            <SpanColor> orange </SpanColor> are the ones in which I am most
                            proficient.
                        </PargraphFontClassic>
                    </Grid>
                </Grid>
                <Grid container justifyContent="center" align="center" alignItems="stretch" sx={styles.contain} direction="row" spacing={3}>
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
            </MainDiv>
        </div>
    );
}
