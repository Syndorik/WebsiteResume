import React from "react";
import { SvgIcon } from "@mui/material";
import { ReactComponent as TorchLogo } from "assets/icons/pytorch.svg"


export default function TorchIcon() {
    return <SvgIcon height="60px" width="60px" viewBox='0 0 60 60'>
        <TorchLogo height="60px" width="60px" />
    </SvgIcon>
}