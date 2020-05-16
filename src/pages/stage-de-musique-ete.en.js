import React from "react";

import Page from "../components/page";
import Lead from "../components/lead";
import ProgrammeList from "../components/programmeList";
import Layout from "../layouts/en";

const Programme = (props) => (
    <Layout location={props.location}>
        <Page title="Summer Music Academy 2020">
            <Lead>
                <p>
                    Le Capriccio Français Summer Music Academy offers a tuition program for Singers, Harpsichordists, 
                    Organists or Pianists, and students in Choir conducting, as well as a Choral program, from August 23 
                    (arrival before dinner) to August 30 (departure August 31 after breakfast). 
                </p>
                <p>
                    The Academy is situated in Villefavard, in the beautiful countryside near Limoges (France). 
                    In these uncertain times of epidemic, the Academy has chosen a secluded place, entirely dedicated to our 
                    students, offering both accommodation and musical activities in only one place, and with music rooms of 
                    exceptional quality.
                </p>
                <p>
                    Students interested in the vocal, conducting or instrumental Academy must be
                    advanced musicians (and must send a curriculum before they can be accepted).
                    Professional artists or music teachers are welcome, as part of their continuing
                    professional development. The number of choral singers is intentionally limited
                    (28 max.), so that each section of the choir is balanced. A strong experience of
                    choral singing is required.
                </p>
                <p>French and English are spoken in our international Music Academy.</p>
            </Lead>
            <ProgrammeList language="en" />
        </Page>
    </Layout>
);

export default Programme;
