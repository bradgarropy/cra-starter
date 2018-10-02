import React from "react"
import {Component} from "react"
import {Route} from "react-router-dom"
import {BrowserRouter as Router} from "react-router-dom"
import logo from "./images/logo.svg"

// components
import Home from "./components/Home"
import About from "./components/About"
import Header from "./components/Header"

// styles
import "./scss/App.scss"

class App extends Component {
    render() {
        return (
            <Router>
                <div className="app">
                    <Header />
                    <img src={logo} className="app-logo" alt="logo" />
                    <div className="content">
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                    </div>
                </div>
            </Router>
        )
    }
}

// export
export default App
