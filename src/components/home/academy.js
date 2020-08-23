import g from "glamorous";
import React from "react";

import {FullWidth} from "../base";
import Block, {BlockTitle} from "./block";
import {phone, tabletUp} from "../mediaQueries";

const Content = g.p({
    textAlign: "center",
    [tabletUp]: {
        fontSize: 20,
    },
});

const Separator = g.hr({
    height: 5,
    width: 42,
    backgroundColor: "rgba(0, 0, 0, 1)",
    marginTop: 30,
    marginBottom: 30,
    [phone]: {
        marginTop: 15,
        marginBottom: 15,
    },
});

const Academy = ({msg}) => (
    <FullWidth>
        <Block>
            <BlockTitle>{msg.academy.title}</BlockTitle>
            <Separator />
            {msg.academy.concerts && msg.academy.concerts.length > 0 ? (
                <>
                    <Content>
                        {msg.academy.concerts.map((line, index) => (
                            <>
                                {line}
                                {index !== msg.academy.concerts.length - 1 ? <br /> : null}
                            </>
                        ))}
                    </Content>
                    <Separator />
                </>
            ) : null}

            <Content>{msg.academy.content}</Content>
        </Block>
    </FullWidth>
);
export default Academy;
