import React from "react";
import "./header-component";
import FollowUs from "./sub-header-components/follow-us-component";
import Title from "./sub-header-components/title-component";
import Menu from "./sub-header-components/menu-component";
const Header = () => {
  return (
    <div>
      <FollowUs />
      <Title />
      <Menu />
    </div>
  );
};

export default Header;
