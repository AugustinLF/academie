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
                    musical de l’Acadèmia, i <InnerLink to="/en/adam-vidovic">
                        Adam Vidovic
                    </InnerLink>. El cor comptarà amb 28 coristes amb un màxim equilibri de cordes.
                    El taller està adreçat a cantaires experimentats.
                </p>
                <p>
                    En parallel als assajos, els cantaires rebran classes de tècnica vocal de{" "}
                    <InnerLink to="/ca/muriel-ferraro">Muriel Ferraro</InnerLink>
                </p>
                <p>
                    El programa del cor:<List>
                        <ListItem>detailed program in january 2019</ListItem>
                    </List>
                </p>
            </div>
        }
    />
);

export default Choral;
