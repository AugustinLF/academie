import React from "react";
import g from "glamorous";

import {Link, InnerLink, List, ListItem, Information} from "../components/base";
import vocalImage from "../vocal.png";
import InnerPage from "../components/innerPage";

const Vocal = () => (
    <InnerPage
        name="Stage de chant"
        imgUrl={vocalImage}
        content={
            <div>
                <p>Les stagiaires choisissent parmi deux formules :</p>
                <List>
                    <ListItem>
                        Avec{" "}
                        <InnerLink to="/fr/maarten-koningsberger">
                            Maarten Koninsberger
                        </InnerLink>{" "}
                        ce stage de chant associe technique vocale et interprétation de la musique
                        baroque.
                    </ListItem>
                </List>
                <p>
                    Après un cours collectif sur la posture et la respiration, cours qui ouvre la
                    journée, chaque stagiaire reçoit un cours individuel de technique vocale avec
                    Maarten Koninsberger et travaille avec ses chefs de chant{" "}
                    <InnerLink to="/fr/helene-dufour">Hélène Dufour</InnerLink> et{" "}
                    <InnerLink to="/fr/stefano-intrieri">Stefano Intrieri</InnerLink>.
                </p>
                <p>
                    La journée se conclut sous la forme d'une masterclasse qui sera consacrée aux
                    quatre œuvres majeures de J.S. Bach : Passion selon Saint-Jean, Passion selon
                    Matthieu, Messe en si, Oratorio de Noël.
                </p>

                <p>
                    La musique d'ensemble est placée sous la coordination pédagogique de{" "}
                    <InnerLink to="/fr/josep-cabre">Josep Cabré</InnerLink> avec qui les stagiaires
                    préparent une pièce collective (la pièce sera déterminée en fonction des
                    tessitures des chanteurs acceptés dans l'Académie 2019). Le compositeur retenu
                    est Marc-Antoine Charpentier.
                </p>
                <List>
                    <ListItem>
                        Avec <InnerLink to="/fr/josep-cabre">Josep Cabré</InnerLink>, les stagiaires
                        préparent un oratorio sous la forme d'un atelier journalier de 3 heures
                        conduisant à une restitution publique à la fin du stage. Les stagiaires
                        travailleront une histoire sacrée de Marc-antoine Charpentier. Le choix
                        final de l'œuvre sera fait une fois les chanteurs sélectionnés. il s'agira
                        soit de Sacrificium Abrahae, histoire sacrée, soit du Reniement de
                        Saint-Pierre. Seront notamment abordés : - la relation entre texte et
                        musique - l'approche rhétorique - l'articulation et les notes
                        égales/inégales à la lumière des textes de Charpentier lui-même et de ses
                        contemporains - la prononciation du latin: français, italien, autre ?...
                    </ListItem>
                </List>
            </div>
        }
    />
);

export default Vocal;
