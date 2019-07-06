import React from "react";

import {Tile, Grid} from "../components/grid";

import philippe from "../philippe.jpg";
import helene from "../helene.jpg";
import muriel from "../muriel.jpg";
import stefano from "../stefano.jpg";
import adam from "../adam.jpg";
import henk from "../henk.png";

const TeacherList = ({language}) => (
    <Grid count={3}>
        <Tile
            imgUrl={philippe}
            title="Philippe Le Fèvre"
            content="philippeContent"
            link={`/${language}/philippe-le-fevre`}
        />
        <Tile
            imgUrl={helene}
            title="Hélène Dufour"
            content="heleneContent"
            link={`/${language}/helene-dufour`}
        />
        <Tile
            imgUrl={muriel}
            title="Muriel Ferraro"
            content="murielContent"
            link={`/${language}/muriel-ferraro`}
        />
        <Tile
            imgUrl={henk}
            title="Henk Neven"
            content="henkContent"
            link={`/${language}/henk-neven`}
        />
        <Tile
            imgUrl={stefano}
            title="Stefano Intrieri"
            content="stefanoContent"
            link={`/${language}/stefano-intrieri`}
        />
        <Tile
            imgUrl={adam}
            title="Adam Vidovic"
            content="philippeContent"
            link={`/${language}/adam-vidovic`}
        />
    </Grid>
);
export default TeacherList;
