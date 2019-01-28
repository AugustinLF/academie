import React from "react";
import g from "glamorous";

import {Link, InnerLink, List, ListItem} from "../components/base";
import choralImage from "../choral.jpg";
import InnerPage from "../components/innerPage";

const Choral = () => (
    <InnerPage
        name="Stage choral"
        imgUrl={choralImage}
        content={
            <div>
                <p>
                    Le stage de chant choral été 2019 est dirigé par{" "}
                    <InnerLink to="/fr/philippe-le-fevre">Philippe Le Fèvre</InnerLink>, directeur
                    musical de l'académie, et par{" "}
                    <InnerLink to="/fr/adam-vidovic">Adam Vidovic</InnerLink>. Le chœur compte 28
                    choristes maximum avec équilibre des pupitres. Il s'adresse à des choristes
                    expérimentés.
                </p>
                <p>
                    En parallèle de leurs répétitions, les choristes bénéficient chaque jour de
                    cours de technique vocale avec{" "}
                    <InnerLink to="/fr/muriel-ferraro">Muriel Ferraro</InnerLink>.
                </p>
                <p>
                    La première partie du programme choral, sous la direction de{" "}
                    <InnerLink to="/fr/philippe-le-fevre">Philippe Le Fèvre</InnerLink>, sera
                    consacrée à des œuvres de Tomas Luis de Victoria (1548-1611). Victoria est
                    certainement l’un des plus grands compositeurs espagnols et un des plus
                    importants compositeurs européens de la contre-réforme. Il passera près de 20
                    ans à Rome, d’abord pour sa formation, puis pour devenir prête. Il succèdera à
                    Palestrina comme maître de chapelle du Séminaire Romain. Victoria retournera à
                    Madrid où il sera notamment maître de chapelle et organiste de deux
                    impératrices.
                </p>
                <p>
                    La publication en 1585 à Rome d’un recueil contenant neuf lamentations, dix-huit
                    répons des ténèbres et deux passions couvrant ainsi toute la semaine sainte lui
                    apporte immédiatement une large notoriété.
                </p>
                <p>
                    Nous alternerons lamentations et répons, tel que cela se pratiquait dans les
                    offices de ténèbres.
                </p>
                <p>
                    <List>
                        <ListItem>7ème répons du jeudi saint : Eram quasi agnus</ListItem>
                        <ListItem>
                            Lamentations du vendredi saint : Lamed. Matribus suis dixerunt
                        </ListItem>
                        <ListItem>
                            9ème répons pour le vendredi saint : Caligaverunt Oculi mei
                        </ListItem>
                        <ListItem>
                            Lamentations du samedi saint : Aleph. Quomodo obscuratum
                        </ListItem>
                        <ListItem>9ème répons du samedi saint : Sepulto Domino</ListItem>
                    </List>
                </p>
                <p>
                    Avec <InnerLink to="/fr/adam-vidovic">Adam Vidovic</InnerLink> nous aborderons
                    La tradition anglicane des vêpres chantés ou « choral Evensong ». Célébrées en
                    fin d’après-midi ou en début de soirée, la structure des vêpres reste quasi
                    inchangée dans les cathédrales britanniques et chapelles des collèges
                    universitaires d’Oxford et Cambridge depuis la dernière version du ‘Book of
                    Common Prayer’ (1662). Ces institutions continuent à perpétuer cette tradition
                    aujourd’hui encore, et puisent dans un répertoire musical abondant des œuvres de
                    grande qualité produites par les maîtres à travers les âges. Sans respecter un
                    temps liturgique particulier, nous chanterons une sélection de ces œuvres nous
                    permettant de s’immiscer dans ce service divin du soir en 'anthems', cantiques
                    et réponses.
                </p>
                <p>
                    <List>
                        <ListItem>Introït If Ye Love Me - Thomas Tallis </ListItem>
                        <ListItem>The Preces - William Smith</ListItem>
                        <ListItem>
                            Hymne - George Frideric Händel - Sinners obey the Gospel Word
                        </ListItem>
                        <ListItem>Magnificat – Henry Purcell</ListItem>
                        <ListItem>Nunc Dimitis – Henry Purcell</ListItem>
                        <ListItem>Anthem – I was Glad Henry Purcell</ListItem>
                        <ListItem>Hymne - Rejoice the Lord is King Händel</ListItem>
                        <ListItem>Bénédiction & Amen - Gibbons - Threefold Amen</ListItem>
                    </List>
                </p>
                <p>
                    Les journées commencent à 9h30 par un cours collectif d’une heure de technique
                    vocale avec <InnerLink to="/fr/muriel-ferraro">Muriel Ferraro</InnerLink> :
                    posture, respiration, technique vocale selon une progression pré-établie tout au
                    long de la semaine.
                </p>
                <p>
                    Ensuite, jusqu’à 13h00, les participants du stage de chant choral travaillent le
                    programme musical avec l'un des deux chefs, soit a cappella ou accompagné par{" "}
                    <InnerLink to="/fr/stefano-intrieri">Stefano Intrieri</InnerLink>. Les
                    répétitions reprennent à 16h30 jusqu’à 19h00, avec le chef avec lequel le chœur
                    n’a pas travaillé le matin.
                </p>
                <p>
                    Le début de l’après-midi est consacré, par rotation, à des cours de technique
                    vocale par pupitre avec{" "}
                    <InnerLink to="/fr/muriel-ferraro">Muriel Ferraro</InnerLink>. Le stage de chant
                    choral de l’Académie d’été attache une importance particulière à la qualité
                    vocale et donne aux choristes le maximum de temps de travail en technique vocale
                    pour y parvenir.
                </p>
                <p>
                    Il n’y a pas de répétition le vendredi après-midi et, sauf exception, jamais le
                    soir.
                </p>
                <p>
                    Les choristes reçoivent les partitions par mail avant le stage et disposent,
                    s’ils en éprouvent le besoin, de fichiers audios pour préparer les stages. Les
                    partitions doivent impérativement avoir été travaillées par tous avant le stage
                    de chant choral afin de consacrer la semaine uniquement au travail musical et
                    pas au déchiffrage ! Au début du mois de juillet, des séances de travail en
                    pupitre seront organisées. Les choristes habitant en région parisienne pourront
                    s'y rendre physiquement, les autres pourront y participer par video.
                </p>
            </div>
        }
    />
);

export default Choral;
