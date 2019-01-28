import React from "react";
import g from "glamorous";

import {Link, InnerLink, List, ListItem} from "../components/base";
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
                    <InnerLink to="/en/adam-vidovic">Adam Vidovic</InnerLink>. All choral singers
                    take part in a daily class of vocal technique with{" "}
                    <InnerLink to="/en/muriel-ferraro">Muriel Ferraro</InnerLink>.
                </p>
                <p>
                    Morning rehearsals start at 9:30 am with a class of vocal technique with{" "}
                    <InnerLink to="/en/muriel-ferraro">Muriel Ferraro</InnerLink>. Then from 10:30
                    am to 01:00 pm, the Academy Choir works with the conductors, either{" "}
                    <InnerLink to="/en/philippe-le-fevre">Philippe Le Fèvre</InnerLink> or{" "}
                    <InnerLink to="/en/adam-vidovic">Adam Vidovic</InnerLink>, a cappella or
                    accompanied by <InnerLink to="/en/stefano-intrieri">
                        Stefano Intrieri
                    </InnerLink>. From 02:30 to 04:30 pm, every section of the Choir, on a
                    rotational basis, will receive an additional one-hour vocal technique class.
                </p>
                <p>
                    Then the Choir rehearses in tutti from 04:30 pm to 19:00 pm, with the conductor
                    they haven’t seen in the morning. There is no rehearsal on Friday afternoon, and
                    in the evenings.
                </p>
                <p>
                    The Academy Choral workshop has a strong concern for the vocal quality and
                    therefore helps the choral singers improve their skills with as many vocal
                    technique lessons as possible.
                </p>
     <p>
                   
                    <InnerLink to="/fr/philippe-le-fevre">Philippe Le Fèvre</InnerLink>Philippe Le Fèvre will direct the first 
    part of the choral program, dedicated to works by Tomas Luis de Victoria (1548-1611). Victoria is one of the greatest 
Spanish composers and was one of the most prolific European composers of the counter-reform. 
He spent nearly 20 years in Rome, where he studied, and prepared for the priesthood. He succeeded Palestrina as chapel master 
of the Roman Seminary. Victoria subsequently returned to Madrid to become the director of music and organist of two 
empresses. Immediate renown followed the publication in 1585 in Rome of a collection of nine lamentations, 
    eighteen responses of darkness and two passions, composed for Holy Week
                </p>
                <p>
                    <List>
                        <ListItem>Responses: Eram quasi agnus</ListItem>
                        <ListItem>Lamentation: Lamed. Matribus suis dixerunt</ListItem>
                        <ListItem>Responses: Caligaverunt Oculi mei</ListItem>
                        <ListItem>Lamentation: Aleph. Quomodo obscuratum</ListItem>
                        <ListItem>Responses: Sepulto Domino</ListItem>
                    </List>
                </p>
                <p>
                    <InnerLink to="/en/adam-vidovic">Adam Vidovic</InnerLink> Adam Vidovic will work on the Anglican tradition 
of choral Evensong.  Sung in the late afternoon or early evening, the service has remained virtually unchanged within British 
cathedrals and the chapels of Oxford and Cambridge University, since the last version of the Book of Common Prayer (1662). 
These institutions continue to perpetuate this wonderful tradition today, and draw from a wealth of high-quality choral 
(and organ) repertoire, composed throughout the ages. Without respecting any particular liturgical season, we will sing a 
selection of these works, including anthems, hymns and responses.
                </p>
                <p>
                    <List>
                        <ListItem>Introït If Ye Love Me - Thomas Tallis </ListItem>
                        <ListItem>The Preces - William Smith</ListItem>
                        <ListItem>Hymn - George Frideric Händel - Sinners obey the Gospel Word</ListItem>
                        <ListItem>Magnificat – Henry Purcell</ListItem>
                        <ListItem>Nunc Dimitis – Henry Purcell</ListItem>
                        <ListItem>Anthem – I was Glad Henry Purcell</ListItem>
                        <ListItem>Hymne - Rejoice the Lord is King Händel</ListItem>
                        <ListItem>Bénédiction & Amen - Gibbons - Threefold Amen</ListItem>
                    </List>
</p>
                <p>
                    Choral singers must study the whole program before the beginning of the
                    workshop. Downloadable choral scores are provided by mail, free of charge. And
                    downloadable Midi and Sibelius files are available as a support if needed.
                    Scores must absolutely be studied before the Choral workshop. Choral singers
                    will devote their workshop time to singing, not to learning their part.
                </p>
            </div>
        }
    />
);

export default Choral;
