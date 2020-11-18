import React from "react";
import { SvgIcon } from "@material-ui/core";
import { ReactComponent as ArduinoLogo } from "assets/icons/arduino.svg"


export default function ArduinoIcon() {
    return <SvgIcon height="60px" width="60px" viewBox='0 0 60 60'>
        <ArduinoLogo stroke="white" fill="#fff" height="60px" width="60px" />
    </SvgIcon>
}