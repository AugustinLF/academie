import React from "react";
import g from "glamorous";

import {Link, InnerLink} from "../components/base";
import choralImage from "../choral.jpg";
import InnerPage from "../components/innerPage";

const Choral = () => (
    <InnerPage
        name="Stage choral"
        imgUrl={choralImage}
        content={
            <div>
                <p>
                    Le stage de chant choral été 2018 est dirigé par{" "}
                    <InnerLink to="/fr/philippe-le-fevre">Philippe Le Fèvre</InnerLink>, directeur
                    musical de l'académie, et par{" "}
                    <InnerLink to="/fr/josep-cabre">Josep Cabré</InnerLink>. Le chœur compte 28
                    choristes maximum avec équilibre des pupitres. Il s'adresse à des choristes
                    expérimentés. 
                </p>
                <p>
                    En parallèle de leurs répétitions, les choristes bénéficient chaque jour de
                    cours de technique vocale avec{" "}
                    <InnerLink to="/fr/muriel-ferraro">Muriel Ferraro</InnerLink>.
                </p>
    Le stage choral 2018 sera consacré à un siècle de musique baroque italienne. Le chœur chantera :
    . Giacomo Carissimi : Jephté (chœurs à 6 voix de l'oratorio)
    . Alessandro Grandi :  O speciosa (à 3 et 4 voix)
    . Antonio Lotti ; Crucifixus a 6
    . Antonio Lotti : Miserere en ré (à 4 voix)
            </div>
        }
    />
);

export default Choral;
