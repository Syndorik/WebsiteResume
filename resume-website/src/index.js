import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import routes from "routes.js"

var hist = createBrowserHistory();

ReactDOM.render(
    <Router history={hist}>
        <Switch>
            {routes.map(arr => {
                return (<Route key={arr.path} path={arr.path} component={arr.component} />);
            })}

            <Redirect from="/" to="/home" />
        </Switch>
    </Router>,
    document.getElementById("root")
);
