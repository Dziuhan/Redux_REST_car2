import React, { Component } from "react";
import CarsList from "./containers/CarsList.js";

class App extends Component {
    render() {
        return (
                <div>
                    <h1>App</h1>
                        <CarsList/>
                    <h1>End</h1>
                </div>
        );
    }
}

export default App;