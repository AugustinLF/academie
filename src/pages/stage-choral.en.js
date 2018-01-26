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
                    The choir is conducted by{" "}
                    <InnerLink to="/en/philippe-le-fevre">Philippe Le Fèvre</InnerLink>, artistic
                    director of the Music Academy, and by{" "}
                    <InnerLink to="/en/josep-cabre">Josep Cabré</InnerLink>. All choral singers take
                    part in a daily class of vocal technique with{" "}
                    <InnerLink to="/en/muriel-ferraro">Muriel Ferraro</InnerLink>.
    
    in 2018, the program is about italian baroc music. The choir will sing:
+    . Giacomo Carissimi : Jephté (SSATTB)
+    . Alessandro Grandi :  O speciosa (SAB and SATB)
+    . Antonio Lotti ; Crucifixus a 6 (SSAATB)
+    . Antonio Lotti : Miserere in d (SATB)
                </p>
            </div>
        }
    />
);

export default Choral;
