import g from "glamorous";
import React from "react";

import {FullWidth} from "../base";
import home from "./home.jpg";
import Block from "./block";
import Testimonials from "./testimonials";
import Sponsors from "./sponsors";
import {phone, tabletUp} from "../mediaQueries";
import Academy from "./academy";

const CrowdBackground = g.div({
    backgroundImage: `url(${home})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    // 110% on phone?
    flexGrow: 1,
    display: "flex",
    alignItems: "stretch",
});
const Overlay = g.div({
    flexGrow: 1,
    backgroundColor: "black",
    opacity: 0.15,
});

// TODO link program
const Container = g.div({
    paddingTop: 100,
    [phone]: {
        paddingTop: 80,
    },
});
const CallToAction = g.div({
    color: "white",
    fontSize: 60,
    [phone]: {
        fontSize: 24,
    },
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    fontWeight: "bold",
});

const TestimonialBackground = g.div({backgroundColor: "rgba(0, 48, 91, 1)", flexGrow: 1});

const Home = ({msg}) => (
    <div>
        <FullWidth
            height={610}
            mobile={220}
            background={
                <CrowdBackground>
                    <Overlay />
                </CrowdBackground>
            }
        >
            <Container>
                {msg.title.map((title, index) => <CallToAction key={index}>{title}</CallToAction>)}
            </Container>
        </FullWidth>
        <Academy msg={msg} />
        <Testimonials msg={msg} />
        <Sponsors />
    </div>
);
export default Home;
