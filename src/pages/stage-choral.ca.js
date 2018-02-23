import React from "react";
import g from "glamorous";

import {Link, InnerLink, List, ListItem} from "../components/base";
import choralImage from "../choral.jpg";
import InnerPage from "../components/innerPage";

const Choral = () => (
    <InnerPage
        name="Taller coral"
        imgUrl={choralImage}
        content={
            <div>
                <p>
                    El cor serà dirigit per{" "}
                    <InnerLink to="/ca/philippe-le-fevre">Philippe Le Fèvre</InnerLink>, director
                    musical de l’Acadèmia, i <InnerLink to="/ca/josep-cabre">
                        Josep Cabré
                    </InnerLink>. El cor comptarà amb 28 coristes amb un màxim equilibri de cordes.
                    El taller està adreçat a cantaires experimentats.
                </p>
                <p>
                    En parallel als assajos, els cantaires rebran classes de tècnica vocal de{" "}
                    <InnerLink to="/ca/muriel-ferraro">Muriel Ferraro</InnerLink>
                </p>
                <p>
                    El programa del cor:<List>
                        <ListItem>Giacomo Carissimi : Jephté (SSATTB)</ListItem>
                        <ListItem>Alessandro Grandi : O speciosa (SAB and SATB)</ListItem>
                        <ListItem>Antonio Lotti : Crucifixus a 6 (SSAATB)</ListItem>
                        <ListItem>Antonio Lotti : Miserere in d (SATB)</ListItem>
                    </List>
                </p>
            </div>
        }
    />
);

export default Choral;
