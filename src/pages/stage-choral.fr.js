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
                    Le chœur est dirigé par{" "}
                    <InnerLink to="/fr/philippe-le-fevre">Philippe Le Fèvre</InnerLink>, directeur
                    musical de l'académie, et par{" "}
                    <InnerLink to="/fr/josep-cabre">Josep Cabré</InnerLink>. Le chœur compte 28
                    choristes maximum avec équilibre des pupitres. Il s'adresse à des choristes
                    expérimentés. Programme été 2018 disponible en janvier.
                </p>
                <p>
                    En parallèle de leurs répétitions, les choristes bénéficient chaque jour de
                    cours de technique vocale avec{" "}
                    <InnerLink to="/fr/muriel-ferraro">Muriel Ferraro</InnerLink>.
                </p>
            </div>
        }
    />
);

export default Choral;
