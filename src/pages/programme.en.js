import React from "react";

import Page from "../components/page";
import Lead from "../components/lead";
import ProgrammeList from "../components/programmeList";

const Programme = () => (
    <Page title="Our programs">
        <Lead>
            <p>
                Le Capriccio Français Summer Music Academy offers a tuition program for singers,
                harpsichordists, and students in choir conducting, as well as a choral program, from
                July 16 (arrival before dinner) to July 23 (departure July 24 after breakfast). The
                Academy is situated in Barcelona, in Casa Sant Felip Neri, an ancient convent
                welcoming meetings, and especially musical workshops. A 3 days baroque dance program
                will take place from July 21 to july 23.
            </p>
            <p>
                The students will develop their technical skills together with their stylistic
                skills on early music repertoire. As an addition to their practice of the instrument
                or voice, all students will attend a special workshop on baroque dance. Singers,
                instrumentalists and choral singers work together all through the session, sharing
                their stylistic knowledge, and prepare auditions and the final concert together. The
                concert will be held on Sunday 23 July (5:00 pm) in Església de Sant Gaietà.
            </p>
            <p>
                Students interested in the vocal, conducting or instrumental Academy must be
                advanced musicians (and must send a curriculum before they can be accepted).
                Professional artists or music teachers are welcome, as part of their continuing
                professional development. The number of choral singers is intentionally limited (28
                max.), so that each section of the choir is balanced. A strong experience of choral
                singing is required.
            </p>
            <p>French and English are spoken in our international Music Academy.</p>
        </Lead>
        <ProgrammeList language="fr" />
    </Page>
);

export default Programme;
