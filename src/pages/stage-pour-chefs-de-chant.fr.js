import React from "react";
import g from "glamorous";

import {Link} from "../components/base";
import instrumental from "../instrumental.jpg";
import InnerPage from "../components/innerPage";

const ChoirConducting = () => (
    <InnerPage
        name="Stage pour chefs de chant"
        imgUrl={instrumental}
        content={
            <div>
                <p>
                    Ce stage s’adresse à des clavecinistes, organistes ou pianistes souhaitant se
                    perfectionner au métier de chef de chant dans les répertoires anciens. Le
                    travail comportera une partie théorique (chiffrages, connaissances des
                    différents styles de réalisation) et surtout un travail pratique en lien étroit
                    avec la masterclasse de chant, le stage de chœur et les activités de musique de
                    chambre.
                </p>
            </div>
        }
    />
);

export default ChoirConducting;
