import React, { Component } from 'react';
import './App.css';
import CalculateManager from "./calculateManager/CalculateManager";

class App extends Component {
    render() {
        return (
            <div className="container">
                <CalculateManager />
            </div>
        );
    }
}

export default App;