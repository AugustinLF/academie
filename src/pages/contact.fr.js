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
                    Tél. : +33 (0)1 48 75 00 70
                    <br />
                    Courriel : academie(at)capricciofrancais.com
                </p>
                <br />
                <p>
                    Adresse à Annecy :<br />
                    Les Balcons du lac d'Annecy<br />
                    1487 Route de Cessenaz<br />
                    74320 Sevrier<br />
                    Tél. : +33 (0)4 50 52 44 25<br />
                   
                </p>
            </PageContent>
        </Page>
    </Layout>
);
export default Contact;
