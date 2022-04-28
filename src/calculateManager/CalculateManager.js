import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Calculate from "./Calculate";

class CalculateManager extends React.Component {

    render() {
        return (<div>
            <Calculate />
        </div>);
    }
}
export default CalculateManager;