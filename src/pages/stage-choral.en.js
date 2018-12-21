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
