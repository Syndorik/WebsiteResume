import React from "react";
import { SvgIcon } from "@material-ui/core";
import { ReactComponent as DockerLogo } from "assets/icons/docker.svg"

export default function DockerIcon() {
    return <SvgIcon height="60px" width="60px" viewBox='0 0 60 60'>
        <DockerLogo height="60px" width="60px" />
    </SvgIcon>
}