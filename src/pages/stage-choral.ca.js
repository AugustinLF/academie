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
                    musical de l’Acadèmia, i{" "}
                    <InnerLink to="/en/adam-vidovic">Adam Vidovic</InnerLink>. El cor comptarà amb
                    28 coristes amb un màxim equilibri de cordes. El taller està adreçat a cantaires
                    experimentats.
                </p>
                <p>
                    En parallel als assajos, els cantaires rebran classes de tècnica vocal de{" "}
                    <InnerLink to="/ca/muriel-ferraro">Muriel Ferraro</InnerLink>
                </p>
                <p>El programa del cor:</p>
                <p>Tomas Luis de Victoria (1548-1611):</p>
                <p>
                    <List>
                        <ListItem>Eram quasi agnus</ListItem>
                        <ListItem>Lamed. Matribus suis dixerunt</ListItem>
                        <ListItem>Caligaverunt Oculi mei </ListItem>
                        <ListItem>Aleph. Quomodo obscuratum</ListItem>
                        <ListItem>Sepulto Domino</ListItem>
                    </List>
                </p>

                <p>
                    <List>
                        <ListItem>Introït If Ye Love Me - Thomas Tallis </ListItem>
                        <ListItem>The Preces - William Smith</ListItem>
                        <ListItem>
                            Hymne - George Frideric Händel - Sinners obey the Gospel Word{" "}
                        </ListItem>
                        <ListItem>Magnificat – Henry Purcell</ListItem>
                        <ListItem>Nunc Dimitis – Henry Purcell</ListItem>
                        <ListItem>Anthem – I was Glad Henry Purcell</ListItem>
                        <ListItem>Hymne - Rejoice the Lord is King Händel</ListItem>
                        <ListItem>Bénédicton & Amen - Gibbons - Threefold Amen</ListItem>
                    </List>
                </p>
            </div>
        }
    />
);

export default Choral;
