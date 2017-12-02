import React from "react";

import {Link} from "../components/base";
import InnerPage from "../components/innerPage";
import maarten from "../maarten.jpg";

const Maarten = () => (
    <InnerPage
        name="Maarten Koningsberger"
        title="Chant"
        imgUrl={maarten}
        content={
            <div>
                <p>Présentation à venir.</p>
            </div>
        }
    />
);
export default Maarten;
