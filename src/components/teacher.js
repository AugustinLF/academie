import g from "glamorous";
import React from "react";
import RawLink from "gatsby-link";
import {FormattedMessage} from "react-intl";

import {H3} from "./base";

const Container = g.div({
    // height: 250,
});
const Header = g.div({
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
});
const Short = g.div({});
const Link = g(RawLink)({color: "initial"});
const Courses = g.ul({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
});

const renderCourse = (className, localisation) => (
    <li key={className}>
        <Link to={`/${localisation}/${className}`}>
            <FormattedMessage id={className} />
        </Link>
    </li>
);

const Teacher = ({name, short, link, courses, localisation}) => (
    <Container>
        <Header>
            <H3>
                <Link to={`/${localisation}/${link}`}>{name}</Link>
            </H3>
            {courses && (
                <Courses>{courses.map(course => renderCourse(course, localisation))}</Courses>
            )}
        </Header>
        <Short>{short}</Short>
    </Container>
);
export default Teacher;
