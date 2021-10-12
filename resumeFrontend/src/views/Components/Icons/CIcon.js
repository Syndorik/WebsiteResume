import React from "react";
import { SvgIcon } from "@mui/material";
import { ReactComponent as CLogo } from "assets/icons/c.svg"


export default function CIcon() {
    return <SvgIcon height="60px" width="60px" viewBox='0 0 60 60'>
        <CLogo height="60px" width="60px" />
    </SvgIcon>
}