import React from "react";

import Page from "../components/page";
import PageContent from "../components/pageContent";
import Layout from "../layouts/fr";

const Contact = (props) => (
    <Layout location={props.location}>
        <Page title="Contactez-nous">
            <PageContent>
                <p>
                    Adresse permanente :<br />
                    5, rue Carnot
                    <br />
                    FR - 94130 Nogent-sur-Marne
                    <br />
                    Tél. : 01 48 75 00 70
                </p>
                <br />
                <p>
                    Adresse à Barcelone :<br />
                    Casa d´Espiritualitat Sant Felip Neri
                    <br />
                    Nena Casas, 37-47
                    <br />
                    08017 Barcelona
                </p>
            </PageContent>
        </Page>
    </Layout>
);
export default Contact;
