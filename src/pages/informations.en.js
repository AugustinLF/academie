import React from "react";

import Page from "../components/page";
import LeadImage from "../components/leadImage";
import villefranche from "./villefranche.jpg";
import Section from "../components/section";
import {List, ListItem, H3} from "../components/base";
import PageContent from "../components/pageContent";
import Layout from "../layouts/en";

const Informations = props => (
    <Layout location={props.location}>
        <Page title="Information">
            <LeadImage src={villefranche} alt="house" big />
            <PageContent>
                <Section title="Accommodation">
                    <div>
                        <p>
                            The Academy takes place at the Ferme de Villefavard in Limousin - Centre
                            de Rencontres Artistiques, a cultural project open to cultural
                            professionals and the public. The Ferme de Villefavard offers residences
                            for high level artists and produces concerts, shows, recordings, master
                            classes...
                        </p>
                        <p>
                            The original Farmhouse houses a concert hall that retains the spirit of
                            the barn it once was, but is now equipped with exceptional acoustics by
                            Albert Yaying Xu (Philharmonie de Luxembourg, ` Copenhagen Philharmonic,
                            Peking Opera...). The concert hall will therefore be the rehearsal room
                            for the Academy choir and for the Masterclasses that punctuate the
                            Academy.
                        </p>
                        <p>
                            Adjacent to the concert hall, there will be numerous work and rehearsal
                            spaces for the students, as well as a dining area. Students are
                            accommodated on site with full board (from dinner on Sunday 23 August to
                            breakfast on Monday 31 August).
                        </p>
                        <p>
                            As the final concert is scheduled in the afternoon of Sunday 30 August,
                            students who wish to do so may leave the premises after the concert, if
                            they need to be present at home or work on Monday 31 August.
                        </p>
                        <p>
                            Please note: the possibility of having a final concert at the end of the
                            Academy will obviously depend on the Government decisions in force at
                            that time. We may have to conclude our Academy 2020 with an internal
                            audition, without an audience.
                        </p>
                        <p>4 different options are available for your accommodation:</p>
                        <List>
                            <ListItem>Ensuite Double room (two single beds)</ListItem>
                            <ListItem>
                                Double room (two single beds) with showers and toilets shared with
                                other rooms.
                            </ListItem>
                            <ListItem>Single room, shared bathroom</ListItem>
                            <ListItem>
                                Triple room, shared bathroom (washbasin in the room)
                            </ListItem>
                        </List>
                        <p>Due to covid-29, towels and toiletries are not provided.</p>
                    </div>
                </Section>
                <Section title="Fees">
                    <div>
                        <p>
                            Tuition fees are 340€ (individuals), and include membership or 600€
                            (professional training).
                        </p>
                        <p>
                            If students should be accompanied by a person who does not participate
                            in the programs but would like to be accommodated with them, then a
                            membership fee of 40€ is due.
                        </p>
                        <p>Accommodation fees in full boarding:</p>
                        <List>
                            <ListItem>Ensuite Double room: 460€</ListItem>
                            <ListItem>Double room , shared bathroom: 390€</ListItem>
                            <ListItem>Single room, shared bathroom: 420€</ListItem>
                            <ListItem>Triple room, shared bathroom: 340€</ListItem>
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
                        <p>Villefavard is connected to two SNCF railway stations:</p>
                        <ListItem>
                            La Souterraine, 2 hours 45min direct from Paris-Austerlitz or
                            connections from Limoges station (tickets between 15 and 40 €).
                        </ListItem>
                        <ListItem>
                            Le Dorat, 2h45 TGV from Paris-Montparnasse, TER connection in Poitiers
                            or connections from Limoges station.
                        </ListItem>
                        <p>
                            We can organize your transfers between the SNCF train station and
                            Villefavard: please contact us
                        </p>

                        <H3>By car</H3>
                        <p>
                            The A20 is only 16 kms from Villefavard, making Paris at 3 hours 45 mins
                            by car, Lyon at less than 4 hours, Nantes or Toulouse at 3 hours 30
                            mins, Bordeaux at less than 3 hours.
                        </p>
                    </div>
                </Section>
            </PageContent>
        </Page>
    </Layout>
);
export default Informations;
