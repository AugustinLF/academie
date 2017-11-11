import g from "glamorous";
import React from "react";

import {FullWidth} from "../base";
import home from "./home.jpg";
import Block from "./block";
import Testimonials from "./testimonials";
import Sponsors from "./sponsors";

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

// TODO link program
const Container = g.div({
    paddingTop: 100,
});
const CallToAction = g.div({
    color: "white",
    fontSize: 60,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    fontWeight: "bold",
});

const TestimonialBackground = g.div({backgroundColor: "rgba(0, 48, 91, 1)", flexGrow: 1});

const Home = ({msg}) => (
    <div>
        <FullWidth
            height={610}
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
        <FullWidth height={310}>
            <Block>
                <h2 style={{textAlign: "center", fontSize: 35}}>{msg.academy.title}</h2>
                <hr
                    style={{
                        height: 5,
                        width: 42,
                        backgroundColor: "rgba(0, 0, 0, 1)",
                        marginTop: 30,
                        marginBottom: 30,
                    }}
                />
                <p style={{textAlign: "center", fontSize: 20}}>{msg.academy.content}</p>
            </Block>
            <Testimonials msg={msg} />
            <Sponsors />
        </FullWidth>
    </div>
);
export default Home;
