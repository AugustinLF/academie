import g from "glamorous";
import React from "react";

import {FullWidth} from "../base";
import Block, {BlockTitle} from "./block";
import {tabletUp, phone} from "../mediaQueries";

const TestimonialBackground = g.div({backgroundColor: "rgba(0, 48, 91, 1)", flexGrow: 1});
const Title = g(BlockTitle)({
    marginBottom: 30,
});
const Testimonial = g.div({
    "&:not(:last-child)": {
        marginBottom: 20,
        [phone]: {
            marginBottom: 15,
        },
    },
    textAlign: "center",
});

const Testimonials = ({msg}) => (
    <FullWidth height={450} background={<TestimonialBackground />}>
        <Block white>
            <Title>{msg.testimonials.title}</Title>
            {msg.testimonials.content.map((testimonial, index) => (
                <Testimonial key={index}>{testimonial}</Testimonial>
            ))}
        </Block>
    </FullWidth>
);
export default Testimonials;
