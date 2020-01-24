import g from "glamorous";
import React from "react";

import {tabletUp} from "../../components/mediaQueries";
import menuIcon from "./menu.svg";
import MobileMenu from "./mobileMenu";
import Register from "./register";
import squareLogo from "./squareLogo.png";

const HeaderContainer = g.div({
    position: "relative",
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "solid 1px black",
    paddingRight: 20,
    [tabletUp]: {
        display: "none",
    },
});

class MobileHeader extends React.Component {
    state = {
        open: false,
    };

    closeMenu = () => {
        this.setState(() => ({
            open: false,
        }));
    };

    render() {
        const {homeLink, langKey, langsMenu} = this.props;
        return (
            <HeaderContainer>
                <img
                    onClick={() => this.setState(({open}) => ({open: !open}))}
                    src={menuIcon}
                    alt="Toggle menu"
                    width={40}
                    height={40}
                />

                <img src={squareLogo} alt="Toggle menu" width={30} height={30} />
                <Register langKey={langKey} />
                <MobileMenu
                    homeLink={homeLink}
                    open={this.state.open}
                    closeMenu={this.closeMenu}
                    langsMenu={langsMenu}
                />
            </HeaderContainer>
        );
    }
}
export default MobileHeader;
