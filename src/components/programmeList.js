import React from "react";

import {Tile, Grid} from "../components/grid";
import vocal from "../vocal.png";
import choral from "../choral.jpg";
import choirConducting from "../choirConducting.jpg";
import instrumental from "../instrumental.jpg";

const ProgrammeList = ({language}) => (
    <Grid count={2}>
        <Tile
            imgUrl={vocal}
            titleId="vocalTitle"
            content="vocalContent"
            link={`/${language}/stage-de-chant`}
        />
        <Tile
            imgUrl={choral}
            titleId="choralTitle"
            content="choralContent"
            link={`/${language}/stage-choral`}
        />
        <Tile
            imgUrl={choirConducting}
            titleId="choralConductingTitle"
            content="choralConductingContent"
            link={`/${language}/stage-direction-de-choeur`}
        />
        <Tile
            imgUrl={instrumental}
            titleId="vocalCoachTitle"
            content="vocalCoachContent"
            link={`/${language}/stage-pour-chefs-de-chant`}
        />
    </Grid>
);
export default ProgrammeList;
