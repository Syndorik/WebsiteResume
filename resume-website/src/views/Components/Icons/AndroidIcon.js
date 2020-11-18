import React from "react";
import { SvgIcon } from "@material-ui/core";
import { ReactComponent as AndroidLogo } from "assets/icons/android.svg"


export default function AndroidIcon() {
    return <SvgIcon height="60px" width="60px" viewBox='0 0 60 60'>
        <AndroidLogo stroke="white" fill="#fff" height="60px" width="60px" />
    </SvgIcon>
}