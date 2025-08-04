import React, {Component, useState} from "react";
import '../styles/App.css';
import FlamesApp from "./FlamesApp.jsx";

class App extends Component {
    render() {

        return(
            <div id="main">
               {/* Do not remove the main div */}
               <FlamesApp />
            </div>
        )
    }
}


export default App;
