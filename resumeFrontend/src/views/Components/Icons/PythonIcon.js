import React from "react";
import { SvgIcon } from "@mui/material";
import { ReactComponent as PythonLogo } from "assets/icons/python.svg"

export default function PythonIcon() {
    return <SvgIcon height="60px" width="60px" viewBox='0 0 60 60'>
        <PythonLogo height="60px" width="60px" />
    </SvgIcon>
}