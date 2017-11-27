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
            link={`/${language}/vocal`}
        />
        <Tile
            imgUrl={choral}
            titleId="choralTitle"
            content="choralContent"
            link={`/${language}/vocal`}
        />
        <Tile
            imgUrl={choirConducting}
            titleId="choralConductingTitle"
            content="choralConductingContent"
            link={`/${language}/vocal`}
        />
        <Tile
            imgUrl={instrumental}
            titleId="vocalCoachTitle"
            content="vocalCoachContent"
            link={`/${language}/vocal`}
        />
    </Grid>
);
export default ProgrammeList;
