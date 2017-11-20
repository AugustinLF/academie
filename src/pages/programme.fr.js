import React from "react";

import {InnerLink, H2, H3} from "../components/base";
import Page from "../components/page";
import Lead from "../components/lead";
import {Tile, Grid} from "../components/grid";
import vocal from "../vocal.png";
import choral from "../choral.jpg";
import choirConducting from "../choirConducting.jpg";

const Programme = () => (
    <Page title="Les différents stages de l'académie">
        <Lead>
            <p>
                L'Académie d'été du Capriccio Français propose un stage pour chanteurs, étudiants en
                direction de chœur, ainsi qu’un stage choral, du 15 juillet en fin de journée au 22
                juillet 2017 (départ le matin du 23). L'Académie se déroule à Barcelone dans la Casa
                Sant Felip Neri, un ancien couvent, aujourd'hui lieu d'accueil de rencontres,
                notamment musicales. Un stage de danse baroque sera également organisé du 21 au 23
                juillet.
            </p>
            <p>
                Un concert de fin se stage aura lieu le dimanche 22 juillet 2017 à 17h00 à
                l'Església de Sant Gaietà.
            </p>
        </Lead>
        <H2>Les stages</H2>
        <Grid>
            <Tile imgUrl={vocal} title="vocalTitle" content="vocalContent" link="/fr/vocal" />
            <Tile imgUrl={choral} title="choralTitle" content="choralContent" link="/fr/vocal" />
            <Tile
                imgUrl={choirConducting}
                title="choralConductingTitle"
                content="choralConductingContent"
                link="/fr/vocal"
            />
        </Grid>
    </Page>
);

export default Programme;
