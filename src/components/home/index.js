import g from "glamorous";
import React from "react";

import {FullWidth, SpacerVertical} from "../base";
import home from "./villefavard__salle_de_concert.jpg";
import Block from "./block";
import Testimonials from "./testimonials";
import Sponsors from "./sponsors";
import {phone} from "../mediaQueries";
import Academy from "./academy";
import LeadImage from "../leadImage";

const CrowdBackground = g.div({
    backgroundImage: `url(${home})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    flexGrow: 1,
    display: "flex",
    alignItems: "stretch",
});
const Overlay = g.div({
    flexGrow: 1,
    backgroundColor: "black",
    opacity: 0.15,
});

const Headline = g.div({
    position: "absolute",
    alignItems: "flex-start",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    paddingLeft: 100,
    alignItems: "flex-start",
    justifyContent: "center",
});
const CallToActionMain = g.h1({
    color: "white",
    fontSize: 60,
    [phone]: {
        fontSize: 36,
    },
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    fontWeight: "bold",
});
const CallToAction = g.h2({
    color: "white",
    fontSize: 60,
    [phone]: {
        fontSize: 36,
    },
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    fontWeight: "bold",
});

const Home = ({msg}) => (
    <div style={{width: "100%"}}>
        <div style={{position: "relative", width: 900, marginRight: "auto", marginLeft: "auto"}}>
            <img alt="Villefranche" src={home} style={{width: 900}} />
            <Headline>
                <CallToActionMain>{msg.title[0]}</CallToActionMain>
                <SpacerVertical size="medium" />
                <CallToAction>{msg.title[1]}</CallToAction>
            </Headline>
        </div>
        {/* <FullWidth
            height={600}
            mobile={220}
            background={
            }
        > */}
        {/* <CrowdBackground>
            <Overlay />
        </CrowdBackground> */}

        {/* </FullWidth> */}
        <Academy msg={msg} />
        <Testimonials msg={msg} />
        <Sponsors />
    </div>
);
export default Home;
