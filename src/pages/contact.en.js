import React from "react";

import Page from "../components/page";
import PageContent from "../components/pageContent";
import Layout from "../layouts/en";

const Contact = (props) => (
    <Layout location={props.location}>
        <Page title="Contact us">
            <PageContent>
                <p>
                    Permanent address:
                    <br />
                    5, rue Carnot
                    <br />
                    FR - 94130 Nogent-sur-Marne
                    <br />
                    Phone. : + 33 (0)1 48 75 00 70
                     <br />
                    email: academie(at)capricciofrancais.com
                </p>
                <br />
                <p>
                    Villefavard address:<br />
                    Ferme de Villefavard en Limousin <br />
                    2 impasse de l’église et de la cure <br />
                    87190 Villefavard <br />
                    Tél. : +33 (0)5 55 76 54 72
                    <br />
                </p>
               
            </PageContent>
        </Page>
    </Layout>
);
export default Contact;
