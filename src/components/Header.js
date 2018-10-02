import React from "react"

// components
import Navigation from "./Navigation"
import BuiltBy from "./BuiltBy"

// styles
import "../scss/Header.scss"

const Header = () => {
    return (
        <header className="header">
            <Navigation />
            <BuiltBy />
        </header>
    )
}

Header.propTypes = {}
Header.defaultProps = {}

// export
export default Header
