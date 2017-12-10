import React from "react";

import {Tile, Grid} from "../components/grid";

import philippe from "../philippe.jpg";
import helene from "../helene.jpg";
import josep from "../josep.jpg";
import muriel from "../muriel.jpg";
import stefano from "../stefano.jpg";
import maarten from "../maarten.jpg";

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
            imgUrl={josep}
            title="Josep Cabré"
            content="josepContent"
            link={`/${language}/josep-cabre`}
        />
        <Tile
            imgUrl={muriel}
            title="Muriel Ferraro"
            content="murielContent"
            link={`/${language}/muriel-ferraro`}
        />
        <Tile
            imgUrl={maarten}
            title="Maarten Koningsberger"
            content="maartenContent"
            link={`/${language}/maarten-koningsberger`}
        />
        <Tile
            imgUrl={stefano}
            title="Stefano Intrieri"
            content="stefanoContent"
            link={`/${language}/stefano-intrieri`}
        />
    </Grid>
);
export default TeacherList;
