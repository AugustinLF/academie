import React from "react";

import Page from "../components/page";
import LeadImage from "../components/leadImage";
import Barcelona from "./barcelona.png";
import Section from "../components/section";
import {List, ListItem, H3, Link} from "../components/base";
import PageContent from "../components/pageContent";

const Informations = () => (
    <Page title="Information">
        <LeadImage src={Barcelona} alt="house" />
        <PageContent>
            <Section title="Accommodation">
                <div>
                    <p>
                        The Academy (tuition, rehearsals, lodging and dining) takes place in "Casa
                        Sant Felip Neri", an ancient convent. Located in the quiet residential
                        district of la Sarria, Casa Sant Felip Neri is 300m from the underground
                        station and 10mins from the Catalunya Square and historical area.
                    </p>
                    <p>
                        Full board is provided from the dinner of Sunday 19 July to the breakfast of
                        Monday 26 July (4 diners are not included in the full board).
                    </p>
                    <p>3 different options are available for your accommodation:</p>
                    <List>
                        <ListItem>Ensuite Double room (two single beds)</ListItem>
                        <ListItem>Single room, shared bathroom (washbasin in the room)</ListItem>
                        <ListItem>Triple room, shared bathroom (washbasin in the room)</ListItem>
                    </List>
                    <p>
                        Linen and towels are provided; bed linen will be changed once during the
                        week. Toiletries are not provided.
                    </p>
                    <p>
                        Rooms may be available one or more days before or after the Academy (no
                        meals), subject to availability.
                    </p>
                    <p>Air-conditioning: The main rehearsal room is air-conditioned.</p>
                </div>
            </Section>
            <Section title="Fees">
                <div>
                    <p>
                        Tuition fees are 340€ (individuals), and include membership or 600€
                        (professional training).
                    </p>
                    <p>
                        If students should be accompanied by a person who does not participate in
                        the programs but would like to be accommodated with them, then a membership
                        fee of 40€ is due.
                    </p>
                    <p>Accommodation fees in full boarding:</p>
                    <List>
                        <ListItem>Ensuite Double room: 440€</ListItem>
                        <ListItem>Single room, shared bathroom: 420€</ListItem>
                        <ListItem>Triple room, shared bathroom: 340€</ListItem>
                    </List>
                    <p>
                        The number of rooms in each category is limited. We will warn you if your
                        first choice of room is no longer available.
                    </p>
                    <p>
                        Please take note that 3 evening meals in the week are not included, so that
                        students may enjoy Barcelona at night!
                    </p>
                    <p>
                        10 € per day (70 € for the whole academy) will be asked to students who
                        should decide not to be accommodated in Casa Sant Felip Neri, as a
                        participation for renting the rehearsal rooms. This fee does not apply for
                        members of the Moviment Coral Català.
                    </p>

                    <p>
                        NB: Accommodation rates do not include transportation or airport / railway
                        station transfers.
                    </p>
                </div>
            </Section>
            <Section title="Travelling to the Academy">
                <div>
                    <H3>By train</H3>
                    <p>
                        Detailed route: Download the{" "}
                        <Link href="https://drive.google.com/file/d/1g5fxG8cmhT0c-z8k4zlpuNqsrZDcQ4R-/view?usp=sharing">
                            plan
                        </Link>.
                    </p>
                    <H3>By plane</H3>
                    <p>
                        Barcelona - El Prat is an international airport with direct flights from all
                        European countries. Detailed route: Download the{" "}
                        <Link href="https://drive.google.com/file/d/1SIrY8N3NmEchhO7g91if1RLNQbORpn6N/view?usp=sharing">
                            plan
                        </Link>
                    </p>
                    <H3>By car</H3>
                    <p>
                        Please take note that there is no parking space in Casa Sant Felip Neri, and
                        parking in the street is expensive. The best solution is to take a 7-day
                        pass in one of the city car parks (69 €), which will allow you unlimited ins
                        and outs (but we recommend that you do not move your car for the week!). The
                        BSM Cotxeres de Sarrià car park, at Manuel Girona 77, is 500m from the
                        Academy.
                    </p>
                </div>
            </Section>
        </PageContent>
    </Page>
);
export default Informations;
