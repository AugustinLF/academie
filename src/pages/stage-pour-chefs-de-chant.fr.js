import React from "react";
import g from "glamorous";

import {Link, InnerLink} from "../components/base";
import choirConducting from "../choirConducting.jpg";
import InnerPage from "../components/innerPage";

const ChoirConducting = () => (
    <InnerPage
        name="Stage pour chefs de chant"
        imgUrl={choirConducting}
        content={
            <div>
                <p>Contenu en cours de rédaction.</p>
            </div>
        }
    />
);

export default ChoirConducting;
