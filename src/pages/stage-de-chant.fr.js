import React from "react";
import g from "glamorous";

import {Link, InnerLink, List, ListItem} from "../components/base";
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
                    <p />
                    La journée se conclut sous la forme d'une masterclasse qui sera consacrée aux
                    quatre œuvres majeures de J.S. Bach : Passion selon Saint-Jean, Passion selon
                    Matthieu, Messe en si, Oratorio de Noël.
                </p>
                <List>
                    <ListItem>
                        Avec <InnerLink to="/fr/josep-cabre">Josep Cabré</InnerLink>, les stagiaires
                        travaillent Jephté de Carissimi sous la forme d'un atelier journalier de 3
                        heures conduisant à une restitution publique à la fin du stage.
    </p>
     <p>
    Si Carissimi est un auteur généreux, dans des répertoires aussi bien profanes que religieux, il faut aussi noter que ses oratorios ou histoires sacrées fixent la forme de ce que l'on nommera désormais "oratorio". On retrouve parmi ses élèves directs des noms tels que Marc-Antoine Charpentier ou Alessandro Scarlatti. Presque toute son œuvre, par ailleurs, nous est parvenue par des copies manuscrites qui en ont assuré aussi bien la distribution que la sauvegarde, les originaux ayant été perdus ou détruits lors de la suppression de l'ordre des jésuites. N'ayant jamais été publié de son vivant, le nombre de copies manuscrites nous indique bien son niveau de diffusion.
</p>
     <p>
L'histoire de Jephté n'est pas bien compliquée : Jephté, rentrant victorieux d'une bataille, avait eu l'imprudence de promettre à Dieu que, en cas de victoire, il immolerait en sacrifice et remerciement la première personne rencontrée à son retour. La malchance ou le destin ont voulu que cette personne soit sa propre fille. Et nous voici partis pour une succession de récits, petits airs et chœurs, dont une touchante lamentation de la part de la fille, qui sont le fidèle reflet de la musique italienne, et plus particulièrement romaine, en ce milieu du XVIIe siècle. A l'instar d'autres compositeurs parmi ses contemporains, Carissimi réussit à donner un rythme presque dramatique et théâtral à cette histoire sacrée, tout en introduisant le concept de "cantate" dans l'église et en annonçant ce que l'on nommera, plus tard, le "bel canto".
</p>
     <p>
Les séances de travail ayant pour but de monter cet oratorio en entier, elles elles nous feront rencontrer et travailler la sensibilité de cette époque, le respect du texte et des références rhétoriques, aussi bien dans les parties de récitatif que dans les airs ou les chœurs. Une vision du milieu de ce XVIIe siècle italien, qui influença toute la musique européenne, et ceci jusqu'à nos jours.
    Si Carissimi est un auteur généreux, dans des répertoires aussi bien profanes que religieux, il nous faut bien dire que 
    ses oratorios ou histoires sacrées fixent la forme de ce que l'on nommera désormais "oratorio". On retrouve parmi ses 
    élèves directs des noms tels que Marc-Antoine Charpentier ou Alessandro Scarlatti. Presque toute son œuvre, par ailleurs, nous est parvenue par des copies manuscrites qui en ont assurée aussi bien la distribution que la sauvegarde, les originaux ayant été perdus ou détruits lors de la suppression de l'ordre des jésuites. N'ayant jamais été publié de son vivant, le nombre de copies manuscrites nous parle bien son niveau de diffusion.
 </p>
    
    
                    </ListItem>
                </List>
            </div>
        }
    />
);

export default Vocal;
