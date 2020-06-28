import React from "react";

import Page from "../components/page";
import LeadImage from "../components/leadImage";
import annecy1 from "../annecy1.jpg";
import Section from "../components/section";
import {List, ListItem, H3} from "../components/base";
import PageContent from "../components/pageContent";
import Layout from "../layouts/en";

const Informations = props => (
    <Layout location={props.location}>
        <Page title="Information">
            <LeadImage src={annecy1} alt="house" big />
            <PageContent>
                <Section title="Accommodation">
                    <div>
                        <p>
                            The Academy takes place on the heights of Lake Annecy (Haute-Savoie -
                            France)
                        </p>
                        <p>
                            The the final concert is scheduled in the afternoon of Sunday 30 August.
                        </p>
                        <p>
                            Please note: the possibility of having a final concert at the end of the
                            Academy will obviously depend on the Government decisions in force at
                            that time. We may have to conclude our Academy 2020 with an internal
                            audition, without an audience.
                        </p>
                        <p>Two different options are available for your accommodation:</p>
                        <List>
                            <ListItem>Ensuite Double room</ListItem>
                            <ListItem>Ensuite single room</ListItem>
                        </List>
                    </div>
                </Section>
                <Section title="Fees">
                    <div>
                        <p>Tuition fees are 340€ (individuals), and include membership.</p>
                        <p>
                            If students should be accompanied by a person who does not participate
                            in the programs but would like to be accommodated with them, then a
                            membership fee of 40€ is due.
                        </p>
                        <p>Accommodation fees in full boarding:</p>
                        <List>
                            <ListItem>Ensuite Double room: 460€</ListItem>
                            <ListItem>Ensuite single room: 510€</ListItem>
                        </List>
                        <p>
                            The number of rooms in each category is limited. We will warn you if
                            your first choice of room is no longer available.
                        </p>

                        <p>
                            10 € per day (70 € for the whole academy) will be asked to students who
                            should decide not to be accommodated with us.
                        </p>

                        <p>
                            NB: Accommodation rates do not include transportation or airport /
                            railway station transfers.
                        </p>
                    </div>
                </Section>
                <Section title="Travelling to the Academy">
                    <div>
                        <H3>By train</H3>
                        <p>Annecy railway station (direct TGV from Paris)</p>

                        <H3>By car</H3>
                        <p>Motorway A41n wayout 16 Annecy Nord.</p>
                    </div>
                </Section>
            </PageContent>
        </Page>
    </Layout>
);
export default Informations;
