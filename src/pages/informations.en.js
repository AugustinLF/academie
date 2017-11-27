import React from "react";

import Page from "../components/page";
import LeadImage from "../components/leadImage";
import Barcelona from "./barcelona.png";
import Section from "../components/section";
import {List, ListItem, H3, Link} from "../components/base";

const Informations = () => (
    <Page title="Information">
        <LeadImage src={Barcelona} alt="house" />
        <Section title="Accommodation">
            <div>
                <p>
                    The Academy (tuition, rehearsals, lodging and dining) takes place in "Casa Sant
                    Felip Neri", an ancient convent. Located in the quiet residential district of la
                    Sarria, Casa Sant Felip Neri is 300m from the underground station and 10mins
                    from the Catalunya Square and historical area.
                </p>
                <p>
                    Full board is provided from the dinner of Sunday 16 July to the breakfast of
                    Monday 24 July.
                </p>
                <p>4 different options are available for your accommodation:</p>
                <List>
                    <ListItem>Ensuite Double room (two single beds)</ListItem>
                    <ListItem>Single room, shared bathroom (washbasin in the room)</ListItem>
                    <ListItem>Triple room, shared bathroom (washbasin in the room)</ListItem>
                    <ListItem>Ensuite Double room in hotel ***</ListItem>
                </List>
                <p>
                    Linen and towels are provided; bed linen will be changed once during the week.
                    Toiletries are not provided.
                </p>
                <p>
                    Rooms may be available one or more days before or after the Academy (no meals),
                    subject to availability.
                </p>
                <p>
                    Air-conditioning: Walls are very thick inside the convent, which assures fairly
                    fresh air in rooms in summer. The main rehearsal room can be air-conditioned if
                    necessary. The dance studio is air-conditioned.
                </p>
            </div>
        </Section>
        <Section title="Tarifs">
            <div>
                <p>
                    Les frais pédagogiques s’élèvent à 340 € et comprennent l’adhésion à
                    l’association. Pour les danseurs, les frais pédagogiques sont de 120 € et
                    comprennent l’adhésion à l’association.
                </p>
                <p>
                    Pour les personnes accompagnant les stagiaires et hébergées par l'Académie, mais
                    qui ne participent pas au stage, le montant de l'adhésion à l'association est de
                    15€.
                </p>
                <p>
                    Les frais d'hébergement en pension complète sont les suivants, sachant que trois
                    dîners dans la semaine sont libres (et donc non compris dans les frais) afin de
                    permettre de profiter pleinement de la ville :
                </p>
                <List>
                    <ListItem>Chambre double avec salle de bains : 430 €</ListItem>
                    <ListItem>
                        Chambre single avec lavabo dans la chambre et douches et toilettes partagées
                        avec d'autres chambres
                    </ListItem>
                    <ListItem>
                        Chambre single avec lavabo dans la chambre et douches et toilettes à
                        l'extérieur : 410 €
                    </ListItem>
                    <ListItem>
                        Chambre triple avec lavabo dans la chambre et douches et toilettes à
                        l'extérieur : 335 €
                    </ListItem>
                </List>
                <p>
                    Une participation aux frais de 15 € par jour (soit 105 €) pour les locations de
                    salle sera demandée aux stagiaires ne logeant pas en pension complète. Cette
                    participation ne s'applique pas aux membres du Moviment Coral Català et aux
                    danseurs.
                </p>
                <p>
                    NB: Les frais d’hébergement ne comprennent ni le transport, ni les transferts
                    depuis l’aéroport ou la gare.
                </p>
            </div>
        </Section>
        <Section title="Comment venir ?">
            <div>
                <H3>En train</H3>
                <p>
                    Barcelone est accessible en TGV direct depuis Paris. Il existe aussi des lignes
                    directes depuis Lyon et Marseille. Il est aussi possible d'emprunter les trains
                    low cost Ouigo de la SNCF depuis Marne-la-Vallée en direction du sud et de faire
                    un changement pour bénéficier des meilleurs prix.
                </p>
                <p>Pour vous rendre ensuite à l'Académie depuis la gare :</p>
                <List>
                    <ListItem>
                        Vous pouvez prendre un taxi, il vous en coûtera entre 10 et 15 euros, selon
                        le trafic et le nombre de bagages.
                    </ListItem>
                    <ListItem>
                        Ou bien vous pouvez prendre le métro :{" "}
                        <Link href="https://docs.wixstatic.com/ugd/169d18_9c24fa82724e441dacd0bdd615c3c094.pdf">
                            téléchargez l'itinéraire détaillé
                        </Link>
                    </ListItem>
                </List>
                <H3>En avion</H3>
                <p>
                    Barcelone est très bien desservi par de nombreuses compagnies aériennes. Depuis
                    Paris Air France et Iberia, en ce qui concerne les compagnies nationales,
                    Easyjet, Transavia et Vueling, pour les compagnies low-cost, assurent plusieurs
                    vols quotidiens. Ryanair dessert aussi Barcelone depuis l'aéroport de
                    Paris-Beauvais. Depuis Lyon, Genève, Nice, Easyjet assure également des vols
                    directs.
                </p>
                <p>Pour vous rendre ensuite à l'Académie depuis l'aéroport :</p>
                <List>
                    <ListItem>
                        Vous pouvez prendre un taxi, il vous en coûtera entre 30 et 40€ selon le
                        trafic et le nombre de bagages.
                    </ListItem>
                    <ListItem>
                        Vous pouvez aussi prendre l’Aerobus qui vous amènera Plaça de Catalunya. Le
                        ticket aller-retour vaut 10,20€. Vous prendrez ensuite le métro :
                        téléchargez l'itinéraire détaillé
                    </ListItem>
                </List>
                <H3>En voiture</H3>
                <p>
                    Attention, si vous venez en voiture, merci de nous avertir à l'avance, le nombre
                    de places de parking disponibles à la Casa Sant Felip Neri est réduit. Celles-ci
                    seront donc attribuées par ordre d'inscription.
                </p>
            </div>
        </Section>
        <Section title="Formation professionelle">
            <p>
                Les stages peuvent être pris en charge dans le cadre de la formation
                professionnelle. Depuis sa création l'Académie travaille avec l'AFDAS pour les
                professionnels intermittents du spectacle ou avec des organismes collecteurs comme
                Uniformation par exemple pour les salariés d'association. Nous travaillons aussi
                directement avec des collectivités locales pour les enseignants de conservatoire.
            </p>
            <p>
                Quelques unes de nos récentes références : AFDAS Paris, AFDAS Rhône-Alpes,
                Uniformation, Atelier musicaux de Toulouse, Villes de Châlon-sur-Saône, Chambéry,
                Domène, Lorient, Saint-Quentin
            </p>
        </Section>
    </Page>
);
export default Informations;
