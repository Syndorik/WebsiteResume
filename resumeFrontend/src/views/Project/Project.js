import React from "react";
// nodejs library that concatenates classes
import { Link } from "react-router-dom"
// @mui/material/ components
import Header from "components/Header/Header.js";
import Parallax from "components/Parallax/Parallax.js";
import Grid from '@mui/material/Grid';
import ReactCardFlip from 'react-card-flip';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import profileP from "assets/img/profile-bg.jpg"

import ReactPlayer from 'react-player'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


import Grow from '@mui/material/Grow';

import GitHubIcon from '@mui/icons-material/GitHub';
import AddIcon from '@mui/icons-material/Add';
import CodeIcon from '@mui/icons-material/Code';
import RemoveIcon from '@mui/icons-material/Remove';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GetAppRoundedIcon from '@mui/icons-material/GetAppRounded';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';

import TorchIcon from "views/Components/Icons/TorchIcon.js"
import CIcon from "views/Components/Icons/CIcon.js"
import ArduinoIcon from "views/Components/Icons/ArduinoIcon.js"
import AndroidIcon from "views/Components/Icons/AndroidIcon.js"
import DockerIcon from "views/Components/Icons/DockerIcon.js"
import PythonIcon from "views/Components/Icons/PythonIcon.js"
import ReactIcon from "views/Components/Icons/ReactIcon.js"
import { styled } from '@mui/material/styles';
import { css, ClassNames } from '@emotion/react'


import styles from "assets/jss/material-kit-react/views/project.js";
import video from "assets/videos/fight.mp4"
import settings from 'conf/config.js'


const StyledA = styled("a")({
    ...styles.linkcolorScrolled
})

const StyledLink = styled(Link)({
    ...styles.linkcolorScrolled
})

const StyledH1 = styled("h1")({
    ...styles.profile, ...styles.sideTitle, ...styles.addMarginh1
})
const StyledSmallH1 = styled("h1")({
    ...styles.profile, ...styles.smallTitle
})

const BoldSpan = styled("span")({
    ...styles.opensansbold
})
const MaskedSpan = styled("span")({
    ...styles.showmaskText
})

const FontDivStyled = styled("div")({
    ...styles.font
})

const FontDivStyledClassic = styled("div")({
    ...styles.fontClassic
})

const StyledProjectH1 = styled("h1")({
    ...styles.profile, ...styles.sideTitle, ...styles.addMarginh1
})

const PargraphFontClassic = styled("p")({
    ...styles.fontClassicParagraph
})

const BoldSpanParagraph = styled("span")({
    ...styles.opensanssemiboldparagraph
})

const MainDiv = styled('div')({ ...styles.main, ...styles.mainRaised })

const UlStyled = styled("ul")({
    ...styles.ul
})

const OlStyled = styled("ol")({
    ...styles.ul
})

const VerticalTimelineStyled = styled(VerticalTimeline)({
    ...styles.verticalTimeline
})

export default function ProfilePage(props) {
    const { ...rest } = props;

    const [widthIcon, setWidthIcon] = React.useState(0)
    const ref = React.useRef(null)

    let lpad = styles.containbig.padding.split(" ")[3];
    lpad = lpad.substring(0, lpad.length - 2)


    React.useEffect(() => {
        if (window.innerWidth >= settings.mobile) {
            setWidthIcon(ref.current.clientWidth)
        }
    })

    const LinkProject = (urlProject) => {
        return <IconButton sx={{ padding: "12px" }}>
            <StyledA rel="noopener noreferrer" href={urlProject} target="_blank">
                <GitHubIcon fontSize="large" />
            </StyledA>
        </IconButton >
    }

    const LinkReport = (fileName) => {
        return <StyledLink to={"/files/".concat(fileName)} target="_blank" download>
            <IconButton sx={{ padding: "12px" }}><GetAppRoundedIcon fontSize="large" /> </IconButton>
        </StyledLink>
    }

    const FlippedCard = (name, description, urlProject, fileName, addContent) => {
        const [isFlipped, setIsFlipped] = React.useState(false)
        var initSize = window.innerWidth < 1020 ? 12 : 6
        const [gridSize, setGridSize] = React.useState(initSize)
        const handleChange = () => {
            setIsFlipped((prev) => !prev);
        };

        var changeGrid = () => {
            if (window.innerWidth < 1420) {
                setGridSize(12)
            } else {
                setGridSize(6)
            }
        }

        React.useEffect(() => {
            window.addEventListener("resize", changeGrid)
            window.scrollTo(0, 0)

        }, []);

        var linkProjectComp = urlProject !== undefined ? LinkProject(urlProject) : <NotInterestedIcon fontSize="large" />

        var linkFile = fileName !== undefined ? LinkReport(fileName) : ""

        return <Grid item xs={gridSize}>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" containerStyle={{ height: "100%", alignItems: "center" }}>
                <Card sx={{ ...styles.cardStyle, ...styles.buttonHovered }} variant="outlined" onClick={handleChange} style={{ height: "100%" }}>
                    <CardContent>
                        <StyledH1 style={{ textAlign: "center" }}>
                            {name}
                        </StyledH1>
                    </CardContent>
                </Card>
                <Card sx={styles.cardStyle} variant="outlined" style={{ height: "100%" }}>
                    <CardContent>
                        <Grid container justify="center" sx={styles.flippedContainer}>
                            <Grid item xs={2}>
                                <IconButton onClick={handleChange} sx={{ padding: "12px" }}> <ArrowBackIcon /> </IconButton>
                            </Grid>
                            <Grid item xs={10} align="left" style={{ padding: "12px 0px" }}>
                                <StyledSmallH1>
                                    {name}
                                </StyledSmallH1>
                                {description}
                            </Grid>
                            {addContent !== undefined ?
                                <Grid item xs={12} >
                                    {addContent}
                                </Grid> : ""}
                        </Grid>
                    </CardContent>

                    <CardActions>
                        <Grid container justify="flex-end" sx={styles.flippedCardAction}>
                            <Grid item xs={12} style={{ textAlign: "right" }}>
                                {linkFile}
                                {linkProjectComp}
                            </Grid>
                        </Grid>
                    </CardActions>
                </Card>
            </ReactCardFlip>
        </Grid>
    }




    const alignedIcons = (icon, text) => {
        return <FontDivStyled>
            <Grid container direction="row" alignItems="baseline" spacing={2} sx={{ "margin": "-8px" }}>
                <span ref={ref} style={{ marginRight: "10px" }}>{icon} </span> <span> {text}</span>
            </Grid>
        </FontDivStyled>
    }

    const GrowComp = (nameShow, toShow, msgShow, msgMask) => {

        const [checkedAbstract, setCheckedAbstract] = React.useState(false)
        const handleChange = () => {
            setCheckedAbstract((prev) => !prev);
        };

        return <span>
            {checkedAbstract ?
                <BoldSpan>
                    <IconButton sx={styles.iconbutton} edge='start' onClick={handleChange}>
                        <RemoveIcon />
                    </IconButton>
                    {nameShow} {msgShow}<br />
                </BoldSpan> :
                <BoldSpan>
                    <IconButton sx={styles.iconbutton} edge='start' onClick={handleChange}>
                        <AddIcon />
                    </IconButton>
                    {nameShow} {msgMask}<br />
                </BoldSpan>
            }
            <span>
                <Grow in={checkedAbstract} mountOnEnter unmountOnExit>
                    <MaskedSpan> {toShow}</MaskedSpan>
                </Grow>
            </span>
        </span>
    }

    const H3Timeline = (props) => {
        return (
            <ClassNames>
                {({ css, cx }) => {
                    const clsh3 = css(styles.timelineh3)
                    return <h3 className={cx("vertical-timeline-element-title", css(clsh3))}> {props.name}</h3>
                }}
            </ClassNames >
        );
    };

    const H4Timeline = (props) => {
        return (
            <ClassNames>
                {({ css, cx }) => {
                    const clsh4 = css(styles.timelineh4)
                    return <h4 className={cx("vertical-timeline-element-subtitle", css(clsh4))}> {props.where}</h4>
                }}
            </ClassNames >
        );
    };

    const dateCSS = css(styles.date)
    const iconCSS = css(styles.iconChange)


    const Project = (name, where, date, icon, description, white) => {
        var color = white !== undefined ? "#fff" : '#11ABB0';
        return (
            <ClassNames>
                {({ css, cx }) => {
                    return <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#11ABB0', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #11ABB0' }}
                        date={date}
                        dateClassName={cx(css(dateCSS))}
                        iconClassName={cx(css(iconCSS))}
                        iconStyle={{ background: color, color: '#fff', boxShadow: "0 0 0 4px #4f999b" }}
                        icon={icon}
                    >
                        <H3Timeline name={name} />
                        <H4Timeline where={where} />
                        {description}
                    </VerticalTimelineElement>
                }}
            </ClassNames>)
    }

    const StartWork = (name, where, date, icon, description) => {
        return (
            <ClassNames>
                {({ css, cx }) => {
                    return <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#FF6961', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #FF6961' }}
                        date={date}
                        dateClassName={cx(css(dateCSS))}
                        iconClassName={cx(css(iconCSS))}
                        iconStyle={{ background: '#FF6961', color: '#fff', boxShadow: "0 0 0 4px #cb7772" }}
                        icon={icon}
                    >
                        <H3Timeline name={name} />
                        <H4Timeline where={where} />
                        {description}
                    </VerticalTimelineElement>
                }}
            </ClassNames>)
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
                <Grid container justify="flex-start" sx={styles.containbig} direction="row" spacing={3}>
                    <Grid item xs={12} >
                        {alignedIcons(
                            <StarBorderIcon sx={styles.icon} style={{ "margin": "0px 4px 0px 16px" }} />,
                            <StyledProjectH1><span>Starred Projects</span></StyledProjectH1>
                        )}
                    </Grid>
                    <Grid item xs={12}>
                        <PargraphFontClassic
                            style={window.innerWidth >= settings.mobile ? { paddingLeft: widthIcon } : {}}>
                            These two side-projects were selected because they are the most representative of my skills. This section does not include
                            my master thesis nor work project as they are described in the Background page.
                            <BoldSpanParagraph > You can find the source-code of each
                                project by clicking on the Github icon.
                                When available, you can download the report of a project by clicking on the download icon. </BoldSpanParagraph>
                            If a "cancel" icon appears, this means that the source code is not available.
                        </PargraphFontClassic>
                    </Grid>
                </Grid>
                <Grid container justify="center" align="center" alignItems="stretch" sx={styles.containbig} direction="row" spacing={3}
                    style={window.innerWidth >= settings.mobile ? { paddingLeft: (parseInt(lpad) + widthIcon) + "px" } : {}}>

                    {FlippedCard(
                        "Age regression using MRI brain scans",
                        <FontDivStyledClassic style={{ paddingRight: "4px" }}>
                            <p style={{ marginTop: "20px", marginBottom: "0px" }}>
                                Volume based regression:</p>
                            <p style={{ paddingLeft: "20px" }}>
                                The purpose of this task was to first predict the volume of some areas in the brain using
                                3D MRI scans. A Unet architecture with residuals was used to do this. Then using a
                                regression model, we could use the volume to predict the age of a patient.
                                Neural Network, SVMs, Linear Regression and xgboost methods were used for this second task.
                            </p>
                            <p>
                                Another part of the project was to directly use a Unet architecture with residuals to predict
                                the age of the patient.
                            </p>
                        </FontDivStyledClassic>,
                        "https://github.com/Syndorik/Resume/tree/master/imperial/machine_learning_for_imaging",
                        "report_mli.pdf"

                    )
                    }
                    {FlippedCard(
                        "Pokemon-game using Ethereum blockchain",
                        <FontDivStyledClassic style={{ paddingRight: "4px" }}>
                            <p style={{ marginBottom: "1px" }}>
                                The project was about creating a Pokemon-like game where each action/state was stored on an Ethereum-like blockchain.
                            </p>
                            {GrowComp(
                                "The game has the following specificities",
                                <UlStyled>
                                    <li>Each Pokemon is uniquely identified.</li>
                                    <li>Users can sell Pokemons to another user according to a price.</li>
                                    <li>Users can sell a Pokemon in the market.</li>
                                    <li>Fighting mechanism. Each Pokemon have the following characteristics: Species, Health Points, Attack Points,
                                        Defense Points, level, and type. The fighting is based on pseudo randomness and the previous statistics.
                                        If a Pokemon wins a fight, he wins XP points. With enough XP points, the Pokemon can level up which makes
                                        him stronger in general.</li>
                                    <li>Breeding mechanism.</li>
                                    <li>Users can trade Pokemons between them.</li>
                                </UlStyled>,
                                "(click to mask)",
                                "(click to show)",
                            )}
                            <p>
                                The "backend" part of the game is done with Solidity contracts over the blockchain.
                                The "frontend" part is done in ReactJS. Videos showing the results along with the source code are available on my github.
                                You can find a sample video of a fight below, and other videos inside the video folder of the related repository.

                            </p>
                            <p>
                                The different security issues are dealt with in the related reports, especially the randomness.

                            </p>
                        </FontDivStyledClassic>,
                        "https://github.com/Syndorik/Resume/tree/master/imperial/distributed_ledgers",
                        "report_pdl.pdf",
                        GrowComp("Video",
                            < ReactPlayer url={video} controls style={{ paddingRight: "56px" }} />,
                            "(click to mask)",
                            "(click to show)")

                    )}
                </Grid>
                <Grid container justify="flex-start" sx={styles.containbig} direction="row" spacing={3}>
                    <Grid item xs={12}>

                        {alignedIcons(
                            <CodeIcon sx={styles.icon} style={{ "margin": "0px 4px 0px 16px" }} />,
                            <StyledProjectH1><span>Project Timeline</span></StyledProjectH1>
                        )}
                    </Grid>
                    <Grid item xs={12}>
                        <PargraphFontClassic
                            style={window.innerWidth >= settings.mobile ? { paddingLeft: widthIcon } : {}}>
                            This timeline shows the projects I have worked on as well as my academic and professional background.
                        </PargraphFontClassic>
                    </Grid>
                    <Grid item xs={12}>
                        <VerticalTimelineStyled>
                            {StartWork(
                                "Master Thesis at Imperial College of London",
                                "London, UK",
                                "March 2020 - September 2020",
                                <WorkIcon />,
                                <p>
                                    Started my Master Thesis specialised in NLP, topic modeling. Check out the background page for more information
                                </p>
                            )}
                            {Project(
                                "Deep Learning",
                                "Imperial College of London",
                                "January 2020 - March 2020",
                                <TorchIcon />,
                                <Grid container justify="flex-end" sx={styles.projectContainer}>
                                    <Grid item xs={12} sx={styles.fontClassic}>
                                        <p>
                                            Deep learning courseworks including works on CNNs, GANs and RNNs
                                        </p>
                                        {GrowComp("",
                                            <div>
                                                <p style={{ marginTop: "0px" }}>
                                                    Convolutional neural network : Recreated a framework for Convolutional Neural Networks
                                                    using Pytroch's simple functions (excluding the use of conv2d function...).
                                                    Tested the framework against simple examples and datasets.
                                                </p>
                                                <p>
                                                    Generative Adversarial Network : Coded Variational Auto Encoders (VAE) using Pytorch.
                                                    Used this architectures on MNIST dataset and displayed the resulting latent space using
                                                    t-SNE algorithm. Coded a Convolutional Generative Adversarial Network (GAN) using
                                                    Pytorch on CIFAR10 algorithm.
                                                </p>
                                                <p>
                                                    Recurrent Neural Network : Coded a framework for vanilla Recurrent Neural Network,
                                                    Long short-Term Memory (LSTM) unit and Gated Recurrent Unit. Compared them on a
                                                    simple audio recognition task.
                                                </p>
                                            </div>,
                                            "Mask content",
                                            "Show content"

                                        )}

                                    </Grid>

                                    <Grid item xs={12} style={{ textAlign: "right" }}>
                                        {LinkProject("https://github.com/Syndorik/Resume/tree/master/imperial/deep_learning")}
                                    </Grid>
                                </Grid>,
                                true

                            )}
                            {Project(
                                "Machine Learning for Imaging",
                                "Imperial College of London",
                                "January 2020 - March 2020",
                                <TorchIcon />,
                                <Grid container justify="flex-end" sx={styles.projectContainer}>
                                    <Grid item xs={12} sx={styles.fontClassic}>
                                        <p>
                                            Age regression using MRI brain scans
                                        </p>
                                        {GrowComp("",
                                            <div>
                                                <p style={{ marginTop: "0px" }}>
                                                    Volume based regression:<br />
                                                    The purpose of this task was to first predict the volume of some areas in the brain using 3D MRI scans.
                                                    A Unet architecture with residuals was used to do this. Then using a regression model, we could use the
                                                    volume to predict the age of a patient. Neural Network, SVMs, Linear Regression and xgboost methods were
                                                    used for this second task.
                                                </p>
                                                <p>
                                                    Another part of this project was to directly use a Unet architecture with residuals to
                                                    predict the age of the patient.
                                                </p>
                                            </div>,
                                            "Mask content",
                                            "Show content"

                                        )}

                                    </Grid>

                                    <Grid item xs={12} style={{ textAlign: "right" }}>
                                        {LinkReport("report_machin_learning_imaging.pdf")}
                                        {LinkProject("https://github.com/Syndorik/Resume/tree/master/imperial/machine_learning_for_imaging")}
                                    </Grid>
                                </Grid>,
                                true

                            )}
                            {Project(
                                "Natural Language Processing",
                                "Imperial College of London",
                                "January 2020 - March 2020",
                                <TorchIcon />,
                                <Grid container justify="flex-end" sx={styles.projectContainer}>
                                    <Grid item xs={12} sx={styles.fontClassic}>
                                        <p>
                                            Quality Prediction of a machine translation
                                        </p>
                                        {GrowComp("",
                                            <div>
                                                <p style={{ marginTop: "0px" }}>
                                                    In this project, we were given a dataset containing the following:
                                                    <UlStyled>
                                                        <li>Source sentence in English,</li>
                                                        <li>Machine Translation of the source sentence,</li>
                                                        <li>Quality of the translation evaluated by several peers. The z-score of the different evaluations is returned.</li>
                                                    </UlStyled>
                                                </p>
                                                <p>
                                                    The purpose of the project was to predict the quality of a machine translation. To do so, we used a BERT model fine-tuned with the objective of this project. Another method using bi-LSTM was used, however returning worse results.
                                                </p>
                                            </div>,
                                            "Mask content",
                                            "Show content"

                                        )}

                                    </Grid>

                                    <Grid item xs={12} style={{ textAlign: "right" }}>
                                        {LinkReport("report_nlp.pdf")}
                                        {LinkProject("https://github.com/Syndorik/Resume/tree/master/imperial/nlp")}
                                    </Grid>
                                </Grid>,
                                true

                            )}
                            {Project(
                                "Blockchain",
                                "Imperial College of London",
                                "January 2020 - March 2020",
                                <ReactIcon />,
                                <Grid container justify="flex-end" sx={styles.projectContainer}>
                                    <Grid item xs={12} sx={styles.fontClassic}>
                                        <p>
                                            Pokemon-like game using Ethereum blockchain
                                        </p>
                                        {GrowComp("",
                                            <div>
                                                <p style={{ marginTop: "0px" }}>
                                                    The project was about creating a Pokemon-like game where each action/state was stored on an Ethereum-like blockchain. The game have the following specificities:
                                                    <UlStyled>
                                                        <li>Each Pokemon is uniquely identified.</li>
                                                        <li>Users can sell Pokemons to another user according to a price.</li>
                                                        <li>Users can sell a Pokemon in the market.</li>
                                                        <li>Fighting mechanism. Each Pokemon have the following characteristics: Species, Health Points, Attack Points, Defense Points, level, and type. The fighting is based on pseudo randomness and the previous statistics. If a Pokemon wins a fight, he wins XP points. With enough XP points, the Pokemon can level up which makes him stronger in general.</li>
                                                        <li>Breeding mechanism.</li>
                                                        <li>Users can trade Pokemons between them.</li>
                                                    </UlStyled>
                                                </p>
                                                <p>
                                                    The "backend" part of the game is done with Solidity contracts over the blockchain. The "frontend" part is done in ReactJS. Videos showing the results along the source code are available on my github.
                                                </p>
                                                <p>
                                                    The different security issues are dealt with in the related reports, especially the randomness.
                                                </p>
                                            </div>,
                                            "Mask content",
                                            "Show content"

                                        )}

                                    </Grid>

                                    <Grid item xs={12} style={{ textAlign: "right" }}>
                                        {LinkReport("report_pdl.pdf")}
                                        {LinkProject("https://github.com/Syndorik/Resume/tree/master/imperial/distributed_ledgers")}
                                    </Grid>
                                </Grid>

                            )}
                            {Project(
                                "Reinforcement Learning",
                                "Imperial College of London",
                                " November 2019 -  December 2019",
                                <TorchIcon />,
                                <Grid container justify="flex-end" sx={styles.projectContainer}>
                                    <Grid item xs={12} sx={styles.fontClassic}>
                                        <p>
                                            Deep-Q learning for maze traversal
                                        </p>
                                        {GrowComp("",
                                            <div>
                                                <p style={{ marginTop: "0px" }}>
                                                    Using PyTorch, I developed a deepQ learning Neural Network with some optimization to make an agent learn the best path to take to go from point A to point B. <br />
                                                    The constraints were:
                                                    <UlStyled>
                                                        <li>10 minutes of training</li>
                                                        <li>Using only scalable methods</li>
                                                        <li>No use of Gradient Policies</li>
                                                    </UlStyled>
                                                </p>
                                                <p>
                                                    My agent was able to solve easy to medium-difficult mazes.

                                                </p>
                                            </div>,
                                            "Mask content",
                                            "Show content"

                                        )}

                                    </Grid>
                                    <Grid item xs={12} style={{ textAlign: "right" }}>
                                        {LinkReport("report_rl_deepQ_part_1.pdf")}
                                        {LinkReport("report_rl_deepQ_part_2.pdf")}
                                        {LinkProject("https://github.com/Syndorik/Resume/tree/master/imperial/reinforcement_learning/maze_traversal")}
                                    </Grid>
                                </Grid>,
                                true

                            )}
                            {Project(
                                "Machine Learning Basics",
                                "Imperial College of London",
                                " November 2019 -  December 2019",
                                <PythonIcon />,
                                <Grid container justify="flex-end" sx={styles.projectContainer}>
                                    <Grid item xs={12} sx={styles.fontClassic}>
                                        <p>
                                            Development of Neural Network framework
                                        </p>
                                        {GrowComp("",
                                            <div>
                                                <p style={{ marginTop: "0px" }}>
                                                    In this group project, I developed a Neural Network Framework. It includes:
                                                    <UlStyled>
                                                        <li>Linear layer,</li>
                                                        <li>Activation functions layer (sigmoid...),</li>
                                                        <li>Evaluation layers (Binary Cross entropy...).</li>
                                                    </UlStyled>
                                                </p>
                                                <p>
                                                    Then we used TensorFlow to solve a classification task in insurance pricing.
                                                </p>
                                                <p>
                                                    Finally using TensorFlow again, we created another insurance pricing model with real-world data. Our model was competing against models of other classmates. The purpose was to give the best pricing for each individual according to their risk. Each individual then chose automatically the lower price among those proposed. Models were then ranked according to the profit they made.
                                                </p>
                                            </div>,
                                            "Mask content",
                                            "Show content"

                                        )}

                                    </Grid>

                                    <Grid item xs={12} style={{ textAlign: "right" }}>
                                        {LinkReport("report_nn.pdf")}
                                        {LinkProject("https://github.com/Syndorik/Resume/tree/master/imperial/machine_learning_basics/neural_network")}
                                    </Grid>
                                </Grid>,
                                true

                            )}
                            {Project(
                                "Math for Machine Learning",
                                "Imperial College of London",
                                "October 2019 - December 2019",
                                <PythonIcon />,
                                <Grid container justify="flex-end" sx={styles.projectContainer}>
                                    <Grid item xs={12} sx={styles.fontClassic}>
                                        <p>
                                            Recoded and evaluated several algorithms in statistical prediction and dimensionality reduction
                                        </p>
                                        {GrowComp("",
                                            <div>
                                                <p style={{ marginTop: "0px" }}>
                                                    The algorithm implemented were:
                                                    <UlStyled>
                                                        <li>Linear Model algorithm,</li>
                                                        <li>Bayesian Model algorithm,</li>
                                                        <li>LDA,</li>
                                                        <li>PCA, KPCA,</li>
                                                        <li>SVM.</li>
                                                    </UlStyled>
                                                </p>
                                            </div>,
                                            "Mask content",
                                            "Show content"

                                        )}

                                    </Grid>

                                    <Grid item xs={12} style={{ textAlign: "right" }}>
                                        {LinkProject("https://github.com/Syndorik/Resume/tree/master/imperial/maths_for_ml")}
                                    </Grid>
                                </Grid>,
                                true

                            )}
                            {Project(
                                "Reinforcement Learning",
                                "Imperial College of London",
                                "October 2019 - November 2019",
                                <PythonIcon />,
                                <Grid container justify="flex-end" sx={styles.projectContainer}>
                                    <Grid item xs={12} sx={styles.fontClassic}>
                                        <p>
                                            Markov Decision Process in a Grid World
                                        </p>
                                        {GrowComp("",
                                            <div>
                                                <p style={{ marginTop: "0px" }}>
                                                    Understanding of Markov Decision Process and basics of Reinforcement learning in a Grid World.<br /><br />
                                                    With this project, I learned the underlying maths of Reinforcement learning and had the chance to code the main algorithms : Value Iteration, Policy Iteration, Tabular Q-learning...
                                                </p>
                                            </div>,
                                            "Mask content",
                                            "Show content"

                                        )}

                                    </Grid>

                                    <Grid item xs={12} style={{ textAlign: "right" }}>
                                        {LinkReport("report_rl_grid_world.pdf")}
                                        {LinkProject("https://github.com/Syndorik/Resume/tree/master/imperial/reinforcement_learning/gridworld")}
                                    </Grid>
                                </Grid>,
                                true

                            )}

                            {Project(
                                "Machine Learning Basics",
                                "Imperial College of London",
                                "October 2019 - November 2019",
                                <PythonIcon />,
                                <Grid container justify="flex-end" sx={styles.projectContainer}>
                                    <Grid item xs={12} sx={styles.fontClassic}>
                                        <p>
                                            Development of a Decision Tree framework
                                        </p>
                                        {GrowComp("",
                                            <div>
                                                <p style={{ marginTop: "0px" }}>
                                                    In this group project, I developed a Decision Tree framework in Python. This framework includes:
                                                    <UlStyled>
                                                        <li>Single-threaded decision tree,</li>
                                                        <li>Parallelized version of a decision,</li>
                                                        <li>Testing methods (Cross-Validation, confusion Matrix...),</li>
                                                        <li>Pruning of decision tree,</li>
                                                        <li>Graphic representation of a decision tree,</li>
                                                    </UlStyled>
                                                </p>
                                                <p>
                                                    The framework was tested on a real-life problem: to predict the localisation of a person in a flat, based on the strength of each wifi access points.
                                                </p>
                                                <p>
                                                    The framework gave the expected results.
                                                </p>
                                            </div>,
                                            "Mask content",
                                            "Show content"

                                        )}

                                    </Grid>

                                    <Grid item xs={12} style={{ textAlign: "right" }}>
                                        {LinkReport("report_decision_tree.pdf")}
                                        {LinkProject("https://github.com/Syndorik/Resume/tree/master/imperial/machine_learning_basics/decision_tree")}
                                    </Grid>
                                </Grid>,
                                true

                            )}

                            {StartWork(
                                "Graduate Student at Imperial College of London",
                                "London, UK",
                                "2019 - 2020",
                                <SchoolIcon />,
                                <p>
                                    Started my Master of Science in Artificial Intelligence/Machine learning
                                </p>
                            )}

                            {Project(
                                "Data Engineer for Sia Partners",
                                "Sia Partners",
                                "May 2019 -  October 2019",
                                <WorkIcon />,
                                <Grid container justify="flex-end" sx={styles.projectContainer}>
                                    <Grid item xs={12} sx={styles.fontClassic}>
                                        <p>
                                            Participated in the creation of the new cloud computing-based deployment system. Check out the background page for more information.
                                        </p>
                                    </Grid>
                                </Grid>

                            )}

                            {Project(
                                "Data scientist for Cleep",
                                "Sia Partners",
                                "March 2019 -  May 2019",
                                <WorkIcon />,
                                <Grid container justify="flex-end" sx={styles.projectContainer}>
                                    <Grid item xs={12} sx={styles.fontClassic}>
                                        <p>
                                            Coded a recommendation Engine from scratch. The company was a fashion-based start-up. Check out the background page for more information.
                                        </p>
                                    </Grid>
                                </Grid>

                            )}


                            {StartWork(
                                "Data Scientist Intern at Sia Partners",
                                "Paris, France",
                                "March 2019 - October 2019",
                                <WorkIcon />,
                                <p>
                                    Started working at Sia Partners as a data scientist intern
                                </p>
                            )}

                            {Project(
                                "Challenge: prediction of sales in a service station",
                                "Télécom Bretagne",
                                "October 2018 - March 2019 ",
                                <PythonIcon />,
                                <Grid container justify="flex-end" sx={styles.projectContainer}>
                                    <Grid item xs={12} sx={styles.fontClassic}>
                                        <p>
                                            In this challenge, I had a dataset containing all the sales throughout a year and a half of two service stations. We built and implemented a Machine Learning model in order to predict the number of products sold in a service station for a given date.
                                        </p>

                                    </Grid>
                                </Grid>,
                                true

                            )}

                            {Project(
                                "Data mining: Kaggle project ",
                                "Télécom Bretagne",
                                "October 2018 - November 2018",
                                <PythonIcon />,
                                <Grid container justify="flex-end" sx={styles.projectContainer}>
                                    <Grid item xs={12} sx={styles.fontClassic}>
                                        <p>
                                            Prediction of final placement in a game of PUBG
                                        </p>
                                        {GrowComp("",
                                            <div>
                                                <p style={{ marginTop: "0px" }}>
                                                    Built and implemented a model to predict the final placement of a game: PUBG. PUBG is a game were 100 of people drop on a map. They have to kill each other until one remains. The dataset is a selection of over 65000+ games. For each game, we have each player's statistics and based on that, we had to predict the final rank.
                                                </p>
                                                <p>
                                                    Final model: LightGBM
                                                </p>
                                                <p>
                                                    <a href="https://www.kaggle.com/c/pubg-finish-placement-prediction">Link to Kaggle challenge</a>
                                                </p>
                                            </div>,
                                            "Mask content",
                                            "Show content"

                                        )}

                                    </Grid>

                                    <Grid item xs={12} style={{ textAlign: "right" }}>
                                        {LinkReport("report_datamining.pdf")}
                                        {LinkProject("https://github.com/Syndorik/Resume/tree/master/IMT_atlantique/datamining_PUBG")}
                                    </Grid>
                                </Grid>,
                                true

                            )}

                            {Project(
                                "Statistics",
                                "Télécom Bretagne",
                                "October 2018 - November 2018 ",
                                <PythonIcon />,
                                <Grid container justify="flex-end" sx={styles.projectContainer}>
                                    <Grid item xs={12} sx={styles.fontClassic}>
                                        <p>
                                            Statistics on film culture realised on people from Brest and its area
                                        </p>
                                        {GrowComp("",
                                            <div>
                                                <p style={{ marginTop: "0px" }}>
                                                    The purpose of the project was to make a survey about film culture and see if the hypothesis we made about it were true. Hence this project consists of two distinct part: the creation of the survey and the statistical analysis.
                                                </p>
                                            </div>,
                                            "Mask content",
                                            "Show content"

                                        )}

                                    </Grid>

                                    <Grid item xs={12} style={{ textAlign: "right" }}>
                                        {LinkReport("report_film_culture.pdf")}
                                        {LinkProject("https://github.com/Syndorik/Resume/tree/master/IMT_atlantique/statistics")}
                                    </Grid>
                                </Grid>,
                                true

                            )}
                            {StartWork(
                                "Graduate Student at Télécom Bretagne",
                                "Brest, France",
                                "September 2018 - June 2019",
                                <SchoolIcon />,
                                <p>
                                    Started my Master of Science in Data Science
                                </p>
                            )}

                            {Project(
                                "Mobile Computing and Application",
                                "KAIST",
                                "March 2018 - June 2018  ",
                                <AndroidIcon />,
                                <Grid container justify="flex-end" sx={styles.projectContainer}>
                                    <Grid item xs={12} sx={styles.fontClassic}>
                                        <p>
                                            Created an application running the same music on multiple smartphones through Bluetooth with strobe light on sync with the rythm
                                        </p>
                                        {GrowComp("",
                                            <div>
                                                <p style={{ marginTop: "0px" }}>
                                                    This project is divided in two applications. In the application "LightPart" you will find an application that turns the phone flashlight into a strobe light that reacts to the music. This means that the light will blink according to the rhythm of the music. In the application "Whole Application Source Code" you will find the application that connects two smartphones and turns them into (almost) synchronized speakers, with the flashlight acting as a strobelight. (Android Studio/ Java). I made the Light part in this project, and helped on the Bluetooth connection on the latter part.
                                                </p>
                                            </div>,
                                            "Mask content",
                                            "Show content"

                                        )}

                                    </Grid>

                                    <Grid item xs={12} style={{ textAlign: "right" }}>
                                        {LinkReport("report_speaker_strobe_light.pdf")}
                                        {LinkProject("https://github.com/Syndorik/Resume/tree/master/KAIST/mobile_computing/Project%20of%20the%20semester%20--%20SpeakerAndStrobe")}
                                    </Grid>
                                </Grid>

                            )}

                            {Project(
                                "Software Engineering",
                                "KAIST",
                                "March 2018 - June 2018",
                                <AndroidIcon />,
                                <Grid container justify="flex-end" sx={styles.projectContainer}>
                                    <Grid item xs={12} sx={styles.fontClassic}>
                                        <p>
                                            Created a TimeTable Application designed for KAIST students
                                        </p>
                                        {GrowComp("",
                                            <div>
                                                <p style={{ marginTop: "0px" }}>
                                                    The application is a timetable app designed for KAIST students. It records all the classes but also personal events. This application uses the smartphone as a database (Room module of Android) since I did not have access to a distant database. The purpose of this project was to use Software Engineering methods to develop the application. I was the only developer on the team. You will find also the SRS and SDD of the project on the Github link (Android / Java).
                                                </p>
                                            </div>,
                                            "Mask content",
                                            "Show content"

                                        )}

                                    </Grid>

                                    <Grid item xs={12} style={{ textAlign: "right" }}>
                                        {LinkReport("report_software_engineering.pdf")}
                                        {LinkProject("https://github.com/Syndorik/Resume/tree/master/KAIST/software_engineering")}
                                    </Grid>
                                </Grid>

                            )}

                            {Project(
                                "System Programming",
                                "KAIST",
                                "March 2018 - June 2018",
                                <CIcon />,
                                <Grid container justify="flex-end" sx={styles.projectContainer}>
                                    <Grid item xs={12} sx={styles.fontClassic}>
                                        <p>
                                            Multiple courseworks in System Programming including basic understanding of memory allocation
                                        </p>
                                        {GrowComp("",
                                            <div>
                                                <p style={{ marginTop: "0px" }}>
                                                    List of labs:
                                                    <OlStyled>
                                                        <li>Implementation of different functions with some limitation. Most functions had to be coded with bitwise operators. (C)</li>
                                                        <li>Defusing a binary bomb by reading Assembly code of the object file. (Assembly / GDB)</li>
                                                        <li>Attacking a program with the buffer-overflow attack. I first had to do a simple buffer overflow attack. Then it was more working around protections that exist to protect an application from such attacks. (Assembly / GDB)</li>
                                                        <li>The first part of the lab was about writing a cache simulator. The second part was about coding a cache-friendly version of the matrix transpose function. (C/GDB)</li>
                                                        <li>This lab was mostly dealing with signals and processes. I had to create almost from scratch a very light version of a linux shell. (C/GDB)</li>
                                                        <li>In this lab I had to write from scratch the functions malloc, realloc and free. I used segregated free list to achieve that. (C/GDB)</li>
                                                        <li>In this lab I had to write (almost) from scratch a server proxy. The main purpose of this lab was to work with Threads and Semaphores.</li>
                                                    </OlStyled>
                                                </p>
                                            </div>,
                                            "Mask content",
                                            "Show content"

                                        )}

                                    </Grid>

                                    <Grid item xs={12} style={{ textAlign: "right" }}>
                                        {LinkProject("https://github.com/Syndorik/Resume/tree/master/KAIST/system_programing_labs")}
                                    </Grid>
                                </Grid>,
                                true

                            )}

                            {Project(
                                "Mobile computing and Application",
                                "KAISTs",
                                "May 2018",
                                <ArduinoIcon />,
                                <Grid container justify="flex-end" sx={styles.projectContainer}>
                                    <Grid item xs={12} sx={styles.fontClassic}>
                                        <p>
                                            Communication Smartphone-Arduino with High Frequencies wavesound
                                        </p>
                                        {GrowComp("",
                                            <div>

                                                <p style={{ marginTop: "0px" }}>
                                                    The project involves an Android Application and Arduino. The Arduino is sending a message that the Android Application has to decode according to a protocol based on 3 frequencies 19KHz, 20KHz, 21KHz. (Arduino/C++, Android Studio/Java)
                                                </p>
                                            </div>,
                                            "Mask content",
                                            "Show content"

                                        )}

                                    </Grid>

                                    <Grid item xs={12} style={{ textAlign: "right" }}>
                                        {LinkReport("report_high_freq.pdf")}
                                        {LinkProject("https://github.com/Syndorik/Resume/tree/master/KAIST/mobile_computing/Project%203%20--%20HighFreqCommunication")}
                                    </Grid>
                                </Grid>

                            )}

                            {Project(
                                "Mobile computing and Application",
                                "KAIST",
                                "April 2018",
                                <ArduinoIcon />,
                                <Grid container justify="flex-end" sx={styles.projectContainer}>
                                    <Grid item xs={12} sx={styles.fontClassic}>
                                        <p>
                                            Communication Smartphone-Arduino with blinking lights
                                        </p>
                                        {GrowComp("",
                                            <div>
                                                <p style={{ marginTop: "0px" }}>
                                                    Implementation of a light-based protocol. According to the blinks of a LED light, the receiver (which is also on the Arduino) will decrypt the message. (Arduino / C++)
                                                </p>
                                            </div>,
                                            "Mask content",
                                            "Show content"

                                        )}

                                    </Grid>

                                    <Grid item xs={12} style={{ textAlign: "right" }}>
                                        {LinkReport("report_blinking_lights.pdf")}
                                        {LinkProject("https://github.com/Syndorik/Resume/tree/master/KAIST/mobile_computing/Project%202%20--%20Arduino%20Assignement")}
                                    </Grid>
                                </Grid>

                            )}

                            {Project(
                                "Mobile computing and Application",
                                "KAIST",
                                "April 2018",
                                <AndroidIcon />,
                                <Grid container justify="flex-end" sx={styles.projectContainer}>
                                    <Grid item xs={12} sx={styles.fontClassic}>
                                        <p>
                                            Implementation of a Weather Application using Wunderground APIs
                                        </p>
                                        {GrowComp("",
                                            <div>
                                                <p style={{ marginTop: "0px" }}>
                                                    This is a "simple" weather application. Objectives of this project: learn about Threads/AsyncTask. Connect to a distant base. Use activities and widgets. (Android Studio / Java)
                                                </p>
                                            </div>,
                                            "Mask content",
                                            "Show content"

                                        )}

                                    </Grid>

                                    <Grid item xs={12} style={{ textAlign: "right" }}>
                                        {LinkReport("report_weather_app.pdf")}
                                        {LinkProject("https://github.com/Syndorik/Resume/tree/master/KAIST/mobile_computing/Project%201%20--%20WeatherApp")}
                                    </Grid>
                                </Grid>

                            )}

                            {StartWork(
                                "Semester abroad at KAIST",
                                "Daejon, South-Korea",
                                "February 2018 - June 2018",
                                <SchoolIcon />,
                                <p>
                                    Started my semester abroad in KAIST
                                </p>
                            )}

                            {Project(
                                "Data Engineering",
                                "Télécom Bretagne",
                                "October 2017 - December 2017",
                                <DockerIcon />,
                                <Grid container justify="flex-end" sx={styles.projectContainer}>
                                    <Grid item xs={12} sx={styles.fontClassic}>
                                        <p>
                                            Deployment of a Photo sharing website
                                        </p>
                                        {GrowComp("",
                                            <div>
                                                <p style={{ marginTop: "0px" }}>
                                                    The purpose of this project was to create automatically VMs on Openstack and to deploy an application on those VMs. In the project, we had 3 replica (Master-salve running the application) and 3 replica runing the database (mongoDB).
                                                </p>
                                            </div>,
                                            "Mask content",
                                            "Show content"

                                        )}

                                    </Grid>

                                    <Grid item xs={12} style={{ textAlign: "right" }}>
                                        {LinkProject("https://github.com/Syndorik/Resume/tree/master/IMT_atlantique/devops")}
                                    </Grid>
                                </Grid>,
                                true

                            )}

                            {Project(
                                "Network Application",
                                "Télécom Bretagne",
                                "April 2017 - June 2017",
                                <PythonIcon />,
                                <Grid container justify="flex-end" sx={styles.projectContainer}>
                                    <Grid item xs={12} sx={styles.fontClassic}>
                                        <p>
                                            Chat application using Python
                                        </p>
                                        {GrowComp("",
                                            <div>
                                                <p style={{ marginTop: "0px" }}>
                                                    The purpose of this project was to code the applicative layer (from the OSI model) in a basic chat application/ movie chat. One could enter the application and chat with other people connected. One could also go into a "movie chat room", which is basically a chat room where you can watch a film. I did not code the GUI part. However I decided what protocol to use and implemented it in UDP and TCP. This application is made with twisted (Python's module)
                                                </p>
                                            </div>,
                                            "Mask content",
                                            "Show content"

                                        )}

                                    </Grid>

                                    <Grid item xs={12} style={{ textAlign: "right" }}>
                                        {LinkProject("https://github.com/Syndorik/Resume/tree/master/IMT_atlantique/network_application")}
                                    </Grid>
                                </Grid>,
                                true

                            )}

                            {Project(
                                "Pixar lamp",
                                "Télécom Bretagne",
                                "January 2017 - June 2017",
                                <ArduinoIcon />,
                                <Grid container justify="flex-end" sx={styles.projectContainer}>
                                    <Grid item xs={12} sx={styles.fontClassic}>
                                        <p>
                                            Implementation of the communication protocol for a Pixar-type lamp on an Arduino board
                                        </p>
                                        {GrowComp("",
                                            <div>
                                                <p style={{ marginTop: "0px" }}>
                                                    The purpose of this project was to create a lamp that moves and is able to follow the movement of some people. This project was done for a danse troupe. I implemented the protocol to communicate with the lamp, and more specifically with the motors.
                                                </p>
                                            </div>,
                                            "Mask content",
                                            "Show content"

                                        )}

                                    </Grid>

                                    <Grid item xs={12} style={{ textAlign: "right" }}>
                                        {LinkProject("https://github.com/Syndorik/Resume/tree/master/IMT_atlantique/pixar_project")}
                                    </Grid>
                                </Grid>

                            )}

                            {Project(
                                "Projet Découverte",
                                "Télécom Bretagne",
                                "September 2016 - December 2016 ",
                                <ArduinoIcon />,
                                <Grid container justify="flex-end" sx={styles.projectContainer}>
                                    <Grid item xs={12} sx={styles.fontClassic}>
                                        <p>
                                            Creation of a remote-controlled car using an Arduino Board
                                        </p>
                                        {GrowComp("",
                                            <div>
                                                <p style={{ marginTop: "0px" }}>
                                                    Introduction to C++ and Arduino. Built a remote controlled car. The car was controlled over Bluetooth and it was able to read and write RFID cards.<br />
                                                    The aim of this project was to participate in a "car competition". The winner was the car who read all the RFID tags and crossed the line first.
                                                </p>
                                            </div>,
                                            "Mask content",
                                            "Show content"

                                        )}

                                    </Grid>
                                </Grid>

                            )}

                            {Project(
                                "Graph Traversal",
                                "Télécom Bretagne",
                                "September 2016 - November 2016",
                                <PythonIcon />,
                                <Grid container justify="flex-end" sx={styles.projectContainer}>
                                    <Grid item xs={12} sx={styles.fontClassic}>
                                        <p>
                                            Implementation of the best graph traversal algorithm according to a given maze.
                                        </p>
                                        {GrowComp("",
                                            <div>
                                                <p style={{ marginTop: "0px" }}>
                                                    This project is revolving around the traveling salesman problem. I had a snake on a randomly generated maze. The snake had to retrieve all the cheese in it. And I had a pre-processing of 3 seconds. Each file that you can find on my GitHub is an algorithm that I made to solve this problem the fastest way possible. Basically the fastest one is a mix between a greedy algorithm and the travel salesman algorithm. (Python)
                                                </p>
                                            </div>,
                                            "Mask content",
                                            "Show content"

                                        )}

                                    </Grid>

                                    <Grid item xs={12} style={{ textAlign: "right" }}>
                                        {LinkProject("https://github.com/Syndorik/Resume/tree/master/IMT_atlantique/pyrat_french_only")}
                                    </Grid>
                                </Grid>,
                                true

                            )}
                            {StartWork(
                                "Télécom Bretagne",
                                "Brest, France",
                                "September 2016 - November 2016",
                                <SchoolIcon />,
                                <p>
                                    Started Télécom Bretagne, a french engineering school
                                </p>
                            )}

                            {StartWork(
                                "Classe Préparatoire MP, Lycée Blaise Pascal",
                                "Orsay, France",
                                "September 2014 - June 2016",
                                <SchoolIcon />,
                                <p>
                                    Started the preparatory classes for the competitive entrance for french engineering schools in Maths and Physics
                                </p>
                            )}

                            {StartWork(
                                "Lycée Institution du Sacré Coeur",
                                "La ville du bois, France",
                                "September 2011 - June 2014",
                                <SchoolIcon />,
                                <p>
                                    Started Highschool
                                </p>
                            )}

                            <VerticalTimelineElement
                                iconStyle={{ background: '#77dd77', color: '#fff', boxShadow: "0 0 0 4px rgb(117 187 117)" }}
                                icon={<StarIcon />}
                            />
                        </VerticalTimelineStyled>
                    </Grid>
                </Grid>
            </MainDiv>
        </div>
    );
}
