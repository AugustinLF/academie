import React from "react";
import Helmet from "react-helmet";

import Page from "../components/page";
import LeadImage from "../components/leadImage";
import Barcelona from "./villefranche.jpg";
import Section from "../components/section";
import {List, ListItem, H3} from "../components/base";
import PageContent from "../components/pageContent";
import Layout from "../layouts/fr";

const Informations = props => (
    <Layout location={props.location}>
        <Helmet>
            <meta
                name="keywords"
                content="Stage de chant, stage choral, stage de chant choral, stage de direction de chœur, prise en charge AFDAS"
            />
        </Helmet>
        <Page title="Informations">
            <LeadImage src={Barcelona} alt="house" big />
            <PageContent className="edsdf">
                <Section title="L'hébergement">
                    <div>
                        <p>
                            L'Académie se déroule à la Ferme de Villefavard en Limousin – Centre de
                            Rencontres Artistiques, projet culturel ouvert aux professionnels de la
                            culture et au public. La Ferme de Villefavard propose des résidences
                            d’artistes de haut niveau qui donnent lieu à des concerts, spectacles,
                            enregistrements, master class..
                        </p>
                        <p>
                            La Ferme-modèle originelle abrite une salle de concert qui conserve
                            l’esprit de la grange qu’elle a été, mais est dorénavant dotée d’une
                            acoustique exceptionnelle signée Albert Yaying Xu (Philharmonie de
                            Luxembourg, de Copenhague, Opéra de Pékin…). Cette salle sera la salle
                            de répétition pour le chœur de l'Académie et pour les masterclasses qui
                            ponctuent le stage.
                        </p>
                        <p>
                            Attenants à la salle de concert, se trouvent de nombreux espaces de
                            travail et de répétition pour les résidents, ainsi que l'espace de
                            restauration. Les stagiaires sont hébergés sur le site en pension
                            complète (du dîner du dimanche 23 juillet au petit-déjeuner du lundi 1er
                            septembre).
                             </p>
                        <p>
                                Le concert final ayant lieu dans l'après-midi du dimanche 30
                            août, les stagiaires qui le souhaitent peuvent quitter les lieux après
                            le concert s'ils doivent être présents à leur domicile ou à leur travail
                            dès le lundi 1er août. A noter : la tenue d'un concert de fin de stage
                            dépendra évidemment de l'état sanitaire et des décisions
                            gouvernementales en vigueur à ce moment-là. Il est donc possible que
                            nous concluions notre Académie 2020 par une audition interne. .
                        </p>
                        <p>
                            Quatre possibilités d'hébergement en pension complète sont disponibles
                            dans les trois bâtiment distincts que comporte le domaine :
                        </p>
                        <List>
                            <ListItem>
                                Chambre double avec salle de bains (deux lits simples).
                            </ListItem>
                            <ListItem>
                                Chambre double (deux lits simples) avec douches et toilettes
                                partagées avec d'autres chambres.
                            </ListItem>
                            <ListItem>
                                Chambre single avec douches et toilettes partagées avec d'autres
                                chambres.
                            </ListItem>
                            <ListItem>
                                Chambre triple (trois lits simples) et douches et toilettes
                                partagées avec d'autres chambres.
                            </ListItem>
                        </List>
                        <p>
                            En raison de l'épidémie, il est demandé aux stagiaires de venir avec
                            leurs serviettes de toilettes et avec leurs articles de toilette
                            (shampoing, gel douche...).
                        </p>
                    </div>
                </Section>
                <Section title="Tarifs">
                    <div>
                        <p>
                            Les frais pédagogiques sont :
                            <List>
                                <ListItem>
                                    inscription indivuelle (comprenant l'adhésion à l'association) :
                                    340 €
                                </ListItem>
                                <ListItem>formation professionnelle : 600 €</ListItem>
                            </List>
                        </p>
                        <p>
                            Pour les personnes accompagnant les stagiaires et hébergées par
                            l'Académie, mais qui ne participent pas au stage, le montant de
                            l'adhésion à l'association est de 40€.
                        </p>
                        <p>
                            Les frais d'hébergement en pension complète sont les suivants, sachant
                            que trois dîners dans la semaine sont libres (et donc non compris dans
                            les frais) afin de permettre de profiter pleinement de la ville :
                        </p>
                        <List>
                            <ListItem>
                                Chambre double avec salle de bains (deux lits simples) : 460 €.
                            </ListItem>
                            <ListItem>
                                Chambre double (deux lits simples) avec douches et toilettes partagées : 390 €
                            </ListItem>
                            <ListItem>
                                Chambre single avec douches et toilettes partagées avec d'autres
                                chambres : 420 €.
                            </ListItem>
                            <ListItem>
                                Chambre triple (trois lits simples) et douches et toilettes
                                partagées avec d'autres chambres : 350 €.
                            </ListItem>
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

                        <p>Villefavard est desservi par deux gares SNCF.</p>
                        <List>
                            <ListItem>
                                La Souterraine, 2h45 direct depuis Paris-Austerlitz ou
                                correspondances depuis la gare de Limoges (billets entre 15 et 40
                                €).
                            </ListItem>
                            <ListItem>
                                Le Dorat, 2h45 TGV depuis Paris-Montparnasse, correpondance TER à
                                Poitiers ou correspondances depuis la gare de Limoges.
                            </ListItem>
                        </List>
                        <p>
                            Nous pouvons organiser vos transferts entre la gare SNCF et Villefavard
                            : nous consulter.
                        </p>

                        <H3>En voiture</H3>
                        <p>
                            L'A20 est à 16 kms de Villefavard, mettant Paris à 3h45 en voiture, Lyon
                            à moins de 4 heures, Nantes ou Toulouse à 3h30, Bordeaux à moins de 3
                            heures.
                        </p>
                    </div>
                </Section>
                <Section title="Formation professionelle">
                    <p>
                        Les stages peuvent être pris en charge dans le cadre de la formation
                        professionnelle. Depuis sa création l'Académie travaille avec l'AFDAS pour
                        les professionnels intermittents du spectacle ou avec des organismes
                        collecteurs comme Uniformation par exemple pour les salariés d'association.
                        Nous travaillons aussi directement avec des collectivités locales pour les
                        enseignants de conservatoire.
                    </p>
                    <p>
                        Quelques unes de nos récentes références : AFDAS, Uniformation, Atelier
                        musicaux de Toulouse, Villes de Châlon-sur-Saône, Chambéry, Domène, Lorient,
                        Saint-Quentin
                    </p>
                </Section>
            </PageContent>
        </Page>
    </Layout>
);
export default Informations;
