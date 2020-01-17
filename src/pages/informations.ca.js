import React from "react";

import Page from "../components/page";
import LeadImage from "../components/leadImage";
import Barcelona from "./barcelona.png";
import Section from "../components/section";
import {List, ListItem, H3, Link} from "../components/base";
import PageContent from "../components/pageContent";

const Informations = () => (
    <Page title="Què cal saber">
        <LeadImage src={Barcelona} alt="house" />
        <PageContent>
            <Section title="Allotjament">
                <div>
                    <p>
                        L’Acadèmia es desenvoluparà en la “Casa Sant Felip Neri”, que és un antic
                        convent. Tant el curs, els assajos, l’allotjament i els àpats es faran al
                        mateix lloc. Situat en un barri residencial de Sarrià, en un lloc molt
                        tranquil, la Casa Sant Felip Neri és a 300 metres del metro, a 5 estacions i
                        a 10 minuts de la plaça Catalunya, des d’on surt la coneguda Rambla i el
                        barri històric.
                    </p>
                    <p>
                        Els participants són allotjats en règim de pensió completa (des del dinar
                        del diumenge 19 de juliol fins a l’esmorzar del dilluns 27 de juliol)
                    </p>
                    <p>Tres possibilitats d’allotjament en pensió completa són disponibles:</p>
                    <List>
                        <ListItem>
                            Habitació doble amb sala de bany (dos llits individuals)
                        </ListItem>
                        <ListItem>
                            Habitació individual amb lavabo dins l’habitació i dutxes i wàters
                            compartits amb altres habitacions.
                        </ListItem>
                        <ListItem>
                            Habitació triple amb lavabo dins l’habitació (tres llits individuals) i
                            dutxes i wàters compartits amb altres habitacions.
                        </ListItem>
                    </List>
                    <p>
                        Es facilitaran les tovalloles. Els llençols es canviaran en la meitat de
                        l’estada. No es donaran articles d’higiene personal..
                    </p>
                    <p>
                        És possible d’arribar abans del començament del taller o de sortir-ne més
                        tard. Les habitacions són disponibles (sense àpats): consulteu-nos, si us
                        plau.
                    </p>
                    <p>
                        Nota: Les parets del convent són gruixudes i garanteixen una frescor
                        relativa d’estiu a les habitacions. La sala gran d’assaig pot ser
                        climatitzada si és necessari.
                    </p>
                </div>
            </Section>
            <Section title="Tarifs">
                <div>
                    <p>Els costos docents són de 340 € i comprèn l’adhesió a l’associació.</p>
                    <p>
                        Per als acompanyants dels participants i allotjats a través de l’Acadèmia,
                        però que no participen en cap taller, la tarifa d’adhesió a l’associació és
                        de 40 €.
                    </p>
                    <p>Els preus d’allotjament en pensió completa són:</p>
                    <p>
                        Els despeses d’allotjament, en règim de pensió completa, són els següents,
                        sabent, però, que tres sopars durant la setmana seran lliures per permetre
                        tastar Barcelona de la vora:
                    </p>
                    <List>
                        <ListItem>Habitació doble amb sala de bany: 440 €</ListItem>
                        <ListItem>
                            Habitació individual amb lavabo a l’habitació i dutxes i wàters a
                            l’exterior: 420 €
                        </ListItem>
                        <ListItem>
                            Habitació triple amb lavabo a l’habitació i dutxes i wàters a
                            l’exterior: 340 €
                        </ListItem>
                    </List>

                    <p>
                        Els participants que no estiguin allotjats en pensió completa, hauran de
                        pagar 10 € per dia (70 €) en concepte de lloguer de la sala.
                    </p>
                    <p>
                        NB. Els preus d’allotjament no comprenen ni el transports ni el transport
                        des de l’aeroport o estació de tren.
                    </p>
                </div>
            </Section>
        </PageContent>
    </Page>
);
export default Informations;
