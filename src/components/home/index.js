import g from "glamorous";
import React from "react";

import {FullWidth, SpacerVertical} from "../base";
import home from "./villefavard__salle_de_concert.jpg";
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
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
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
    paddingTop: 75,
    [phone]: {
        paddingTop: 30,
        paddingLeft: 20,
    },
    alignItems: "flex-start",
    justifyContent: "center",
    top: 0,
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

const Image = g.img({
    width: 900,
    [phone]: {
        width: "100%",
    },
});
const Block = g.div({
    position: "relative",
    width: 900,
    [phone]: {width: "100%"},
    marginRight: "auto",
    marginLeft: "auto",
    display: "flex",
});

const Home = ({msg}) => (
    <div style={{width: "100%"}}>
        <Block>
            <Image alt="Villefranche" src={home} />
            <Overlay />
            <Headline>
                <CallToActionMain>{msg.title[0]}</CallToActionMain>
                <SpacerVertical size="medium" />
                <CallToAction>{msg.title[1]}</CallToAction>
            </Headline>
        </Block>
        <Academy msg={msg} />
        <Testimonials msg={msg} />
    </div>
);
export default Home;
