import React from "react";

import Page from "../components/page";
import PageContent from "../components/pageContent";

const Contact = () => (
    <Page title="Contacte">
        <PageContent>
            <p>
                Adreça permanent:<br />
                5, rue Carnot<br />
                FR - 94130 Nogent-sur-Marne<br />
                Tél. : 01 48 75 00 70
            </p>
            <br />
            <p>
                Adreça a Barcelona:<br />
                Casa d´Espiritualitat Sant Felip Neri<br />
                Nena Casas, 37-47<br />
                08017 Barcelona
            </p>
        </PageContent>
    </Page>
);
export default Contact;
