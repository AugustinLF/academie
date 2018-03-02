import g from "glamorous";
import React from "react";
import Link from "gatsby-link";
import {FormattedMessage} from "react-intl";

import {InnerLink} from "../../components/base";
import {tabletUp} from "../../components/mediaQueries";
import menuIcon from "./menu.svg";
import MobileMenu from "./mobileMenu";
import Register from "./register";

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
        const {homeLink, langKey} = this.props;
        return (
            <HeaderContainer>
                <button onClick={() => this.setState(({open}) => ({open: !open}))}>
                    <img src={menuIcon} alt="Toggle menu" width={40} height={40} />
                </button>
                <Register langKey={langKey} />
                <MobileMenu homeLink={homeLink} open={this.state.open} closeMenu={this.closeMenu} />
            </HeaderContainer>
        );
    }
}
export default MobileHeader;
