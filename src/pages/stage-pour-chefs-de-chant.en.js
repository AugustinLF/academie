import React from "react";
import g from "glamorous";

import {Link, InnerLink} from "../components/base";
import choirConducting from "../choirConducting.jpg";
import InnerPage from "../components/innerPage";

const ChoirConducting = () => (
    <InnerPage
        name="Vocal coach academy"
        imgUrl={choirConducting}
        content={
            <div>
                <p>Coming soon.</p>
            </div>
        }
    />
);

export default ChoirConducting;
