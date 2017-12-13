import React from "react";
import g from "glamorous";

import {Link, InnerLink} from "../components/base";
import instrumental from "../instrumental.jpg";
import InnerPage from "../components/innerPage";

const ChoirConducting = () => (
    <InnerPage
        name="Stage pour chefs de chant"
        imgUrl={instrumental}
        content={
            <div>
                <p>Contenu en cours de rédaction.</p>
            </div>
        }
    />
);

export default ChoirConducting;
