import React from "react"
import {Component} from "react"
import {Route} from "react-router-dom"
import {BrowserRouter as Router} from "react-router-dom"
import logo from "./images/logo.svg"

// components
import Home from "./components/Home"
import About from "./components/About"
import Navigation from "./components/Navigation"

// styles
import "./scss/App.scss"

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />

                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />

                        <Navigation />
                    </header>
                </div>
            </Router>
        )
    }
}

// export
export default App
