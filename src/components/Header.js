import React from "react";

import "./styles/Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header__container  mt-5">
        <h4 className="header-title">¿What are you looking for?</h4>
      </div>
    );
  }
}

export default Header;
