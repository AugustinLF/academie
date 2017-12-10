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
                    Le chœur est dirigé par Philippe Le Fèvre, directeur musical de l'académie, et
                    par Josep Cabré. Le chœur compte 28 choristes maximum avec équilibre des
                    pupitres. Il s'adresse à des choristes expérimentés. Programme été 2018
                    disponible en janvier.
                </p>
                <p>
                    En parallèle de leurs répétitions, les choristes bénéficient chaque jour de
                    cours de technique vocale avec Muriel Ferraro
                </p>
            </div>
        }
    />
);

export default Choral;
