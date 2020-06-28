import React from "react";
import Helmet from "react-helmet";

import Page from "../components/page";
import LeadImage from "../components/leadImage";
import annecy1 from "../annecy1.jpg";
import Section from "../components/section";
import {List, ListItem, H3} from "../components/base";
import PageContent from "../components/pageContent";
import Layout from "../layouts/fr";

const Informations = props => (
    <Layout location={props.location}>
        <Helmet>
            <meta
                name="keywords"
                content="Stage de chant, stage choral, stage de chant choral, stage de direction de chœur"
            />
        </Helmet>
        <Page title="Informations">
            <LeadImage src={annecy1} alt="house" big />
            <PageContent className="edsdf">
                <Section title="L'hébergement">
                    <div>
                        <p>L'Académie 2020 se déroule sur les hauteurs du Lac d'Annecy</p>
                        <p>
                            L'ensemble des répétitions et des cours, ainsi que l'hébergement se
                            tiendront dans un centre de vacances dominant le lac d'Annecy.
                        </p>
                        <p>
                            Les stagiaires sont hébergés sur le site en pension complète (du dîner
                            du dimanche 23 août au déjeuner du dimanche 30 août). Un dîner dans la
                            semaine sera libre afin de permettre aux stagiaires de profiter
                            d'Annecy.
                        </p>
                        <p>
                            Le concert final ayant lieu dans l'après-midi du dimanche 30 août. A
                            noter : la tenue d'un concert de fin de stage dépendra évidemment de
                            l'état sanitaire et des décisions gouvernementales en vigueur à ce
                            moment-là. Il est donc possible que nous concluions notre Académie 2020
                            par une audition sans public.
                        </p>
                        <p>
                            Deux possibilités d'hébergement en pension complète sont disponibles :
                        </p>
                        <List>
                            <ListItem>Chambre double avec salle de bains.</ListItem>
                            <ListItem>Chambre single avec salle de bains.</ListItem>
                        </List>
                    </div>
                </Section>
                <Section title="Tarifs">
                    <div>
                        <p>
                            Les frais pédagogiques sont de 340 € (comprenant l'adhésion à
                            l'association).
                        </p>
                        <p>
                            Pour les personnes accompagnant les stagiaires et hébergées par
                            l'Académie, mais qui ne participent pas au stage, le montant de
                            l'adhésion à l'association est de 40€.
                        </p>
                        <p>
                            Les frais d'hébergement en pension complète sont les suivants, sachant
                            qu'un dîner dans la semaine est libre (et donc non compris dans les
                            frais) :
                        </p>
                        <List>
                            <ListItem>Chambre double avec salle de bains : 460 €.</ListItem>
                            <ListItem>Chambre single avec salle de bains : 510 €.</ListItem>
                        </List>
                        <p>
                            Une participation aux frais de 10 € par jour (soit 70 €) pour les
                            locations de salle sera demandée aux stagiaires ne logeant pas en
                            pension complète.
                        </p>
                    </div>
                </Section>
                <Section title="Comment venir ?">
                    <div>
                        <H3>En train</H3>

                        <p>
                            Gare SNCF d'Annecy (TGV direct depuis Paris) puis bus 51 ou 52 jusqu'au
                            centre de vacances.
                        </p>

                        <H3>En voiture</H3>
                        <p>
                            Depuis l'A41 nord : sortie Annecy Centre (n°16) direction Albertville.
                            Traverser le village de Sevrier puis prendre la direction du col de
                            Leschaux. Continuer 3 km, passer le pont étroit. Le village-club se
                            trouve en contrebas sur votre gauche.
                        </p>
                    </div>
                </Section>
            </PageContent>
        </Page>
    </Layout>
);
export default Informations;
