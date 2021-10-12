import React from "react";
// @mui/material/ components
import { makeStyles } from "@mui/styles";
import Header from "components/Header/Header.js";
import Parallax from "components/Parallax/Parallax.js";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import profileP from "assets/img/profile-bg.jpg"

// @mui/icons-material
import GetAppIcon from '@mui/icons-material/GetApp';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';


import { styled } from '@mui/material/styles';


import profile from "assets/img/faces/alex.png";
import styles from "assets/jss/material-kit-react/views/profilePage.js";
import { Link } from "react-router-dom"
import settings from 'conf/config.js'


const DownloadButton = styled(Button)(styles.downloadButton)
const MainDiv = styled('div')({ ...styles.main, ...styles.mainRaised })
const ImageProf = styled('img')({
    ...styles.imgRaised,
    ...styles.imgRoundedCircle,
    ...styles.imgFluid
})
const FontH1 = styled('h1')({
    ...styles.fonth1
})
const DivFont = styled('div')({
    ...styles.font
})
const ParFont = styled('p')({
    ...styles.font
})

export default function ProfilePage(props) {
    const { ...rest } = props;

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, []);


    const alignedIcons = (icon, text) => {
        return <Grid container direction="row" alignItems="center" spacing={0} sx={{ margin: "-8px" }}>
            <Grid item sx={{ padding: "8px" }}>
                <DivFont>
                    {icon}
                </DivFont>
            </Grid>
            <Grid item sx={{ padding: "8px" }}>
                <DivFont>
                    {text}
                </DivFont>
            </Grid>
        </Grid>

    }

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
            <Parallax small filter image={profileP} />
            <MainDiv >
                <Grid container alignItems="center" justifyContent="center" sx={styles.contain}>
                    <Grid item xs={12} sm={4} sx={styles.profile}>
                        <div >
                            <div style={window.innerWidth >= settings.mobile ? undefined : { textAlign: "center", marginBottom: "20px" }}>
                                <ImageProf src={profile} alt="..." />
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <FontH1>About Me</FontH1>
                        <ParFont>
                            I undertook two masters in AI/Machine learning: one at IMT Atlantique
                            (formerly Télécom Bretagne) and one at Imperial College of London both completed with the
                            highest honours. I specialised in NLP with a master thesis in topic modeling: I was working
                            with the Centre of Psychedelic Research of Imperial and developped a new model based on
                            BERT with state of the art results. I like to discover new methods and apply them in
                            personal projects.
                        </ParFont>
                    </Grid>

                    <Grid item xs={12} sm={4} sx={styles.profile} />
                    <Grid item xs={12} sm={8}>
                        <Grid container sx={styles.addMargin}>
                            <Grid item xs={window.innerWidth >= settings.mobile ? 6 : 12}>
                                <FontH1>Contact Details</FontH1>
                            </Grid>
                            {window.innerWidth >= settings.mobile ? <Grid item xs={6} align="right" sx={styles.margin}>
                                <Link to="/files/resume.pdf" target="_blank" download>
                                    <DownloadButton size="large" variant="contained" startIcon={<GetAppIcon />}>
                                        Download Resume
                                    </DownloadButton>
                                </Link>
                            </Grid> : ""}
                        </Grid>

                        {alignedIcons(<PermIdentityIcon />, "Alexandre Allani")}
                        {alignedIcons(<HomeIcon />, "Paris, France")}
                        {alignedIcons(<PhoneIcon />, "+33648080121")}
                        {alignedIcons(<EmailIcon />, "alexandre.allani19@imperial.ac.uk")}
                        {window.innerWidth <= settings.mobile ? <Grid item xs={12} align="right" sx={styles.margin}>
                            <Link to="/files/resume.pdf" target="_blank" download>
                                <DownloadButton size="large" variant="contained" startIcon={<GetAppIcon />} style={{ marginTop: "10px" }}>
                                    Download Resume
                                </DownloadButton>
                            </Link>
                        </Grid> : ""}

                    </Grid>

                </Grid>
            </MainDiv>
        </div>
    );
}
