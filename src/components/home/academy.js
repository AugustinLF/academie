import g from "glamorous";
import React from "react";

import {FullWidth} from "../base";
import Block, {BlockTitle} from "./block";
import {phone, tabletUp} from "../mediaQueries";
import * as base from "../base";

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
            <Content>
                Deux concerts de fin de stage :
                <br />
                Samedi 29 août 17h30 concert privé au Château de Duingt
                <br />
                Dimanche 30 aout 15h30 à l’église de Cuvat
            </Content>
            <Separator />
            <Content>{msg.academy.content}</Content>
        </Block>
    </FullWidth>
);
export default Academy;
