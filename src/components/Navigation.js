import React from "react"

// styles
import "../scss/Navigation.scss"

const Navigation = () => {
    return (
        <div className="navigation">
            <a className="App-link" href="/">
                Home
            </a>
            <a className="App-link" href="/about">
                About
            </a>
        </div>
    )
}

Navigation.propTypes = {}
Navigation.defaultProps = {}

// export
export default Navigation
