import React from "react";

import Page from "../components/page";
import PageContent from "../components/pageContent";

const Contact = () => (
    <Page title="Contact us">
        <PageContent>
            <p>
                Permanent address:<br />
                5, rue Carnot<br />
                FR - 94130 Nogent-sur-Marne<br />
                Phone. : + 33 6 1 48 75 00 70
            </p>
            <br />
            <p>
                Address at Barcelona:<br />
                Casa d´Espiritualitat Sant Felip Neri<br />
                Nena Casas, 37-47<br />
                08017 Barcelona
            </p>
        </PageContent>
    </Page>
);
export default Contact;
