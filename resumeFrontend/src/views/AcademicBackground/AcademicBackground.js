import React from "react";
import Header from "components/Header/Header.js";
import Parallax from "components/Parallax/Parallax.js";
import Grid from '@mui/material/Grid';
import Grow from '@mui/material/Grow';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';


import styles from "assets/jss/material-kit-react/views/academicBackground.js";
import profileP from "assets/img/profile-bg.jpg"

const H3Font = styled("h3")({
    ...styles.fonth3
})
const MarginPargraph = styled("p")({
    ...styles.marginP
})
const ItalicSpan = styled("span")({
    ...styles.fonttype, ...styles.fontItalic
})
const FontSpan = styled("span")({
    ...styles.fonttype
})

const BoldSpan = styled("span")({
    ...styles.opensansbold
})
const SemiBoldSpan = styled("span")({
    ...styles.opensanssemibold
})
const MaskedSpan = styled("span")({
    ...styles.showmaskText
})

const FontClassicSpan = styled("span")({
    ...styles.fontClassic
})
const MarginDiv = styled("div")({
    ...styles.marginSwap, ...styles.fontClassic
})

const StyledIconB = styled(IconButton)({
    ...styles.iconbutton
})

const MainDiv = styled('div')({ ...styles.main, ...styles.mainRaised })
const StyledUl = styled('ul')({ ...styles.ul })

export default function ProfilePage(props) {
    const { ...rest } = props;


    const addexp = (where, arr) => {
        return <div>
            <H3Font>{where}</H3Font>
            {arr.map(([type, date, city, description], index) => {
                return <span key={index}>
                    <MarginPargraph>
                        <ItalicSpan>{type}</ItalicSpan>
                        <FontSpan> • </FontSpan>
                        <FontClassicSpan>{city}</FontClassicSpan>
                        <FontSpan> • </FontSpan>
                        <FontClassicSpan>{date}</FontClassicSpan></MarginPargraph>
                    <MarginDiv >
                        {description}
                    </MarginDiv>
                </span>
            })}


        </div>
    }

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const GrowComp = (nameShow, toShow) => {

        const [checkedAbstract, setCheckedAbstract] = React.useState(false)
        const handleChange = () => {
            setCheckedAbstract((prev) => !prev);
        };

        return <span>
            {checkedAbstract ?
                <BoldSpan>
                    <StyledIconB edge='start' onClick={handleChange}>
                        <RemoveIcon />
                    </StyledIconB>
                    Mask {nameShow} <br />
                </BoldSpan> :
                <BoldSpan>
                    <StyledIconB edge='start' onClick={handleChange}>
                        <AddIcon />
                    </StyledIconB>
                    Show {nameShow} <br />
                </BoldSpan>
            }
            <span>
                <Grow in={checkedAbstract} mountOnEnter unmountOnExit>
                    <MaskedSpan > {toShow}</MaskedSpan>
                </Grow>
            </span>
        </span>
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
                <Grid container justify="center" sx={styles.contain}>
                    <Grid item xs={12} sm={2} sx={{ ...styles.sideTitle, ...styles.profile, ...styles.addMarginh1 }}>
                        <span>Work</span>
                    </Grid>
                    <Grid item xs={12} sm={10}>
                        {
                            addexp(
                                "Imperial College of London",
                                [["Thesis completed with Distinction (first-class honours)",
                                    "03/2020 - 09/2020",
                                    "London, United Kingdom",
                                    <span>
                                        <span><BoldSpan>Name :</BoldSpan> Natural Language Processing of the Psychedelic State as Induced by DMT <br /></span>
                                        <span><BoldSpan>Subject:</BoldSpan> Topic modeling<br /></span>
                                        <span>Contributions:<br /></span>
                                        <StyledUl>
                                            <li>Analysed <SemiBoldSpan>interviews</SemiBoldSpan> from the Centre of Psychedelic Research of Imperial
                                                dealing with the effect of <SemiBoldSpan>DMT</SemiBoldSpan> a psychedelic drug that puts its user into other realms.</li>
                                            <li>Developed a <SemiBoldSpan>brand new model using BERT</SemiBoldSpan> in topic modeling with
                                                <SemiBoldSpan> state of the art</SemiBoldSpan> results compared to Latent Dirichlet Allocation (PyTorch).</li>
                                            <li> Developed an evaluation pipeline to compare the LDA and BERT-based pipeline on a common ground.
                                                Based on this, my pipeline returns <SemiBoldSpan>significantly better results.</SemiBoldSpan></li>
                                        </StyledUl>
                                        {GrowComp("Abstract", "The study of interviews dealing with the psychedelic state as induced by DMT can be fastidious and error-prone. The analysis of these interviews will vary from one researcher to another, because of the implicit bias they might have. Therefore the objective of this project is to find a model that does a coarse analysis of the interviews allowing researchers to have less biases towards them. As an answer, we propose two pipelines that retrieve topics from documents in an unsupervised manner. The first one uses Latent Dirichlet Allocation (LDA) to model topics. The second one uses BERT’s contextualised embeddings to model topics by applying a clustering algorithm on the embedding space. A strong emphasis is made on the evaluation and comparison of the two pipelines. A specific framework was developed for this matter. We achieved better results with the BERT-based pipeline compared to LDA on different datasets.")}
                                    </span>]])
                        }
                        {
                            addexp(
                                "Sia Partners",
                                [["Data scientist Intern consultant",
                                    "03/2019 - 10/2019",
                                    "Paris, France",
                                    <span>
                                        <BoldSpan >Data scientist for Cleep:<br /></BoldSpan>
                                        <StyledUl>
                                            <li><SemiBoldSpan>Web scrapping</SemiBoldSpan> in NodeJS for Cleep, a startup specialised in fashion.
                                                I retrieved main elements of shopping pages such as photos, prices, name of products...</li>
                                            <li>Development of a <SemiBoldSpan>recommendation engine</SemiBoldSpan> based on the web scrapped data for
                                                Cleep using Java, Neo4j, ArangoDB. The recommendation engine was based
                                                on graph traversal techniques.</li>
                                        </StyledUl>
                                        <BoldSpan>Data engineer missions:<br /></BoldSpan>
                                        <StyledUl>
                                            <li>Participated in the creation of Sia Partners' <SemiBoldSpan>new deployment system</SemiBoldSpan> using
                                                Docker, DockerCompose, Gitlab CI/CD, Kubernetes, Google Cloud Platform,
                                                PostgreSQL.</li>
                                            <li><SemiBoldSpan>Web Development back and front</SemiBoldSpan>: Created APIs and connected them to the new deployment platform using
                                                Python-Flask and Docker.</li>
                                        </StyledUl>
                                    </span>]]

                            )
                        }
                        {
                            addexp(
                                "SAFRAN Electronic & Defense",
                                [[
                                    "Software engineer intern",
                                    "07/2018 - 07/2018",
                                    "Paris, France",
                                    <span>
                                        Produced a <SemiBoldSpan>man-agent Interface </SemiBoldSpan>
                                        for a target simulator using
                                        <SemiBoldSpan> JavaFX</SemiBoldSpan>. The interface
                                        sets parameters to the target simulator through a TCP connection.
                                    </span>],
                                [
                                    "Internship Trainee",
                                    "07/2015 - 07/2015",
                                    "Paris, France",
                                    <span>
                                        Produced a <SemiBoldSpan>promotional video </SemiBoldSpan>
                                        for an optronic mast.
                                    </span>]
                                ]

                            )
                        }


                    </Grid>
                    <Grid item xs={12}>
                        <Divider />
                    </Grid>

                    <Grid item xs={12} sm={2} sx={{ ...styles.sideTitle, ...styles.profile, ...styles.addMarginh1 }}>
                        <span>Education</span>
                    </Grid>
                    <Grid item xs={12} sm={10}>
                        {
                            addexp(
                                "Imperial College of London",
                                [[
                                    "Master of Science in Artificial Intelligence/Machine Learning",
                                    "09/2019 - 09/2020",
                                    "London, United Kingdom",
                                    <span>
                                        <SemiBoldSpan>Obtained Distinction (First class
                                            honors).</SemiBoldSpan> Relevant courses: <SemiBoldSpan>
                                            Math </SemiBoldSpan>for Machine Learning, Reinforcement Learning, <SemiBoldSpan>
                                            Computer Vision, Deep Learning</SemiBoldSpan>, Machine
                                        Learning for Imaging, <SemiBoldSpan>NLP</SemiBoldSpan>,
                                        Principle of Distributed Ledgers.
                                        <div>
                                            {GrowComp(
                                                "Course details",
                                                <div>
                                                    <BoldSpan>Core Courses:</BoldSpan>
                                                    <StyledUl>
                                                        <li>Reinforcement Learning: Markov Reward Process, Bellman's equation, Tabular Q learning, Deep Q Learning.</li>
                                                        <li>Machine Learning Basics: Core ML concepts, Decision Trees, Neural Network concepts, GMMs.</li>
                                                        <li>Computer Vision, features detection (edge/corners), SIFT/SURF descriptor, Region-based and texture-based classification, stereo matching, photometric stereo.</li>
                                                        <li>Math for Machine Learning: Linear Regression, SVM, LDA, KLDA, PCA.</li>
                                                        <li>Machine Learning for Imaging: Convolutional Neural Network, Unet, Fast-RCNN, YOLO.</li>
                                                        <li>NLP: Naive Bayes Classifier, Pared trees (CKY algorithm), Sequence to sequence models (RNN, LSTM), UlmFit, Transformers, BERT.</li>
                                                        <li>Deep Learning, Convolutional Neural Networ, Recurrent Neural Network, Variationnal Auto Encoders, Generative Adversarial Network.</li>
                                                    </StyledUl>
                                                    <BoldSpan>Minor Courses:</BoldSpan>
                                                    <StyledUl>
                                                        <li>Scalable Systems and Data : Study of databases core concepts and scalable computing.</li>
                                                        <li>Principle of Distributed Ledgers : Blockchain concepts.</li>
                                                    </StyledUl>
                                                </div>
                                            )}

                                        </div>
                                    </span>]
                                ]

                            )
                        }
                        {
                            addexp(
                                "IMT Atlantique (formerly known as Télécom Bretagne)",
                                [[
                                    "Master of Science in Data science (French engineering school)",
                                    "09/2016 - 09/2019",
                                    "Brest, France",
                                    <span>
                                        Degree completed with highest GPA score possible: 3.99/4. Relevant courses
                                        include: <SemiBoldSpan>Data science, </SemiBoldSpan>
                                        <SemiBoldSpan>Statistical Machine Learning,
                                            Data mining,</SemiBoldSpan> Big Data, Decision-making. Devops,
                                        Mathematics for Signal Processing, Network.
                                        <div>
                                            {GrowComp(
                                                "Course details",
                                                <div>
                                                    <BoldSpan>Core courses in the third year:</BoldSpan>
                                                    <StyledUl>
                                                        <li>Statistical Machine Learning,</li>
                                                        <li>Inferential Statistics,</li>
                                                        <li>Data mining,</li>
                                                        <li>Big Data,</li>
                                                        <li>Business Intelligence,</li>
                                                        <li>Decision making.</li>
                                                    </StyledUl>
                                                    <BoldSpan>Core courses in the first and second year :</BoldSpan>
                                                    <StyledUl>
                                                        <li>Computer Science,</li>
                                                        <li>DevOps (Docker/Openstack),⠀</li>
                                                        <li>Mathematics for signal processing,</li>
                                                        <li>Network (IT side, and protocols),</li>
                                                        <li>Practical Works (Signal Processing problem using Matlab, Algorithm problems using Java/python, Electronics and Physics),</li>
                                                        <li>Electronics and physics,</li>
                                                        <li>Economics and Human Sciences.</li>
                                                    </StyledUl>
                                                </div>
                                            )}

                                        </div>
                                    </span>]
                                ]

                            )
                        }
                        {
                            addexp(
                                "KAIST",
                                [[
                                    "Semester Abroad",
                                    "02/2018 - 06/2018",
                                    "Daejeon, South-Korea",
                                    <span>
                                        Relevant courses : Mobile Computing, <SemiBoldSpan>
                                            System Programming, Software Engineering.</SemiBoldSpan>
                                    </span>]
                                ]

                            )
                        }
                        {
                            addexp(
                                "Prépa Lycée Blaise Pascal",
                                [[
                                    "Preapratory classes for the competitive entrance examination for French Engineering Schools in Maths and Physics",
                                    "09/2014 - 06/2016",
                                    "Orsay, France",
                                    <span>
                                        Relevant modules: Linear Algebra, Numerical and Functional Sequences,
                                        Multivariate Calculus, Group Theory, Differential Calculus, Differential Equations
                                        Electromagnetism, Thermodynamics, Mechanics, Optics, Quantum Physics, Thermostatistics.
                                    </span>]
                                ]

                            )
                        }
                        {
                            addexp(
                                "Lycée Institution du Sacré Coeur",
                                [[
                                    "Baccalauréat Scientifique",
                                    "09/2011 - 06/2014",
                                    "La Ville Du Bois, France",
                                    <span>
                                        Highscool completed with honours.
                                    </span>]
                                ]

                            )
                        }
                    </Grid>

                </Grid>
            </MainDiv>
        </div>
    );
}
