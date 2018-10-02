import React from "react"

// styles
import "../scss/Navigation.scss"

const Navigation = () => {
    return (
        <div className="navigation">
            <a href="/">Home</a>
            <a href="/about">About</a>
        </div>
    )
}

Navigation.propTypes = {}
Navigation.defaultProps = {}

// export
export default Navigation
