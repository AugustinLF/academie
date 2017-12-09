import React from "react";
import g from "glamorous";

import {Link, InnerLink} from "../components/base";
import choralImage from "../choral.jpg";
import InnerPage from "../components/innerPage";

const Choral = () => (
    <InnerPage
        name="Choral Academy"
        imgUrl={choralImage}
        content={
            <div>
                <p>
                    The choir is conducted by Philippe Le Fèvre, artistic director of the Music
                    Academy, and by Josep Cabré. All choral singers take part in a daily class of
                    vocal technique with Muriel Ferraro.
                </p>
            </div>
        }
    />
);

export default Choral;
