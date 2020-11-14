import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from '@material-ui/core/IconButton';

import styles from "assets/jss/material-kit-react/views/academicBackground.js";


const useStyles = makeStyles(styles);


export default function ProfilePage(props) {
    const classes = useStyles();
    const { ...rest } = props;

    const [checkedAbstract, setCheckedAbstract] = React.useState(false)
    const handleChange = () => {
        setCheckedAbstract((prev) => !prev);
    };

    const addexp = (where, type, date, description) => {
        return <div>
            <h3 className={classes.fonth3}>{where}</h3>
            <p className={classes.marginP}>
                <span className={classNames(classes.fonttype, classes.fontItalic)}>{type}</span>
                <span className={classes.fonttype}> • </span>
                <span className={classes.fontClassic}>{date}</span></p>
            <p className={classNames(classes.marginSwap, classes.fontClassic)}>
                {description}
            </p>

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
                <Grid container justify="center" className={classes.contain}>
                    <Grid item xs={12} sm={2} className={classNames(classes.profile, classes.sideTitle, classes.addMarginh1)}>
                        <span>Work</span>
                    </Grid>
                    <Grid item xs={12} sm={10}>
                        {addexp(
                            "Imperial College of London",
                            "Thesis completed with Distinctions (first-class honours)",
                            "03/2020 - 09/2020",
                            <span>
                                <span><span className={classes.opensansbold}>Name :</span> Natural Language Processing of the Psychedelic State as Induced by DMT <br /></span>
                                <span><span className={classes.opensansbold}>Subject:</span> Topic modeling<br /></span>
                                <span>Contributions:<br /></span>
                                <ul className={classes.ul}>
                                    <li>Analysed interviews from the centre of Psychedelic Research of Imperial
                                dealing with the effect of DMT a psychedelic drug that puts its user into other realms.</li>
                                    <li>Developed a brand new model using BERT in topic modeling with state of the art
                                results compared to Latent Dirichlet Allocation (PyTorch)</li>
                                    <li> Developed an evaluation pipeline to compare the LDA and BERT-based pipeline on a common ground.
                                    Based on this, my pipeline returns significantly better results.</li>
                                </ul>
                                {checkedAbstract ?
                                    <span className={classes.opensansbold}>
                                        <IconButton className={classes.iconbutton} edge='start' onClick={handleChange}>
                                            <RemoveIcon />
                                        </IconButton>
                                        Mask Abstract <br />
                                    </span> :
                                    <span className={classes.opensansbold}>
                                        <IconButton className={classes.iconbutton} edge='start' onClick={handleChange} s>
                                            <AddIcon />
                                        </IconButton>
                                        Show Abstract <br />
                                    </span>
                                }
                                <span>
                                    <Grow in={checkedAbstract} mountOnEnter unmountOnExit>
                                        <span className={classes.showmaskText}> The study of interviews dealing with the psychedelic state as induced by DMT can be fastidious and error-prone. The analysis of these interviews will vary from one researcher to another, because of the implicit bias they might have. Therefore the objective of this project is to find a model that does a coarse analysis of the interviews allowing researchers to have less biases towards them. As an answer, we propose two pipelines that retrieve topics from documents in an unsupervised manner. The first one uses Latent Dirichlet Allocation (LDA) to model topics. The second one uses BERT’s contextualised embeddings to model topics by applying a clustering algorithm on the embedding space. A strong emphasis is made on the evaluation and comparison of the two pipelines. A specific framework was developed for this matter. We achieved better results with the BERT-based pipeline compared to LDA on different datasets.</span>
                                    </Grow>
                                </span>
                            </span>)}


                    </Grid>

                    <Grid item xs={12} sm={2} className={classNames(classes.profile, classes.sideTitle, classes.addMarginh1)}>
                        <span>Education</span>
                    </Grid>
                    <Grid item xs={12} sm={10}>
                        <h1 className={classes.fonth1}>About Me</h1>

                    </Grid>

                </Grid>
            </div>
        </div>
    );
}
