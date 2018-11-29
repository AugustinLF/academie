import React from "react";

import {InnerLink, H2, H3} from "../components/base";
import Page from "../components/page";
import Lead from "../components/lead";
import ProgrammeList from "../components/programmeList";

const Programme = () => (
    <Page title="Les stages de musique été 2019">
        <Lead>
            <p>
                L'Académie d'été du Capriccio Français propose un stage de chant, un stage de
                direction de chœur, un stage pour chefs de chant ainsi qu’un stage de chant choral.
                Elle se déroulera du 21 juillet au 28 juillet 2019 à Barcelone
            </p>
            <p>
                Le concert de fin de stage aura lieu le dimanche 28 juillet 2019 à 17h00 à
                l'Església de Sant Gaietà.
            </p>
        </Lead>
        <H2>Les stages</H2>
        <ProgrammeList language="fr" />
    </Page>
);

export default Programme;
