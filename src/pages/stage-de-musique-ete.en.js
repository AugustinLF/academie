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
                    Organists or Pianists, as well as a Choral program, from August 23 
                    (arrival before dinner) to August 30. 
                </p>
                <p>
                    The Academy is situated on the heights of Lake Annecy (Haute-Savoie-France).
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
