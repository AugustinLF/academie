import React from "react";

import Page from "../components/page";
import Lead from "../components/lead";
import Teacher from "../components/teacher";
import {Link} from "../components/base";
import TwoColumns from "../components/twoColumns";

const Teachers = () => (
    <Page title="Le Capriccio Français et les enseignants">
        <Lead>
            <p>
                Le Capriccio Français a fêté son 20ème anniversaire en 2015. Depuis sa création il a
                donné plusieurs centaines de concerts. Si l'essentiel de son répertoire porte sur la
                musique du XVIIIème siècle, il s'empare régulièrement du répertoire classique et
                romantique : nul doute que sa Traviata sur instruments d'époque fut une première
                mondiale !
            </p>
            <p>
                Le Capriccio Français alterne productions de grande envergure (Passion selon
                Saint-Jean de J.S. Bach, Israel in Egypt d'Handel, Grande messe en ut mineur de
                Mozart) et productions plus intimes. Après{" "}
                <Link href="https://www.youtube.com/watch?v=Hb4y2qL6MkM">
                    Mozart, an intimate opera
                </Link>{" "}
                – {" "}
                <Link href="https://www.youtube.com/watch?v=02E8FGrew-E">
                    Haendel, caro Sassone
                </Link>{" "}
                – {" "}
                <Link href="https://www.youtube.com/watch?v=OmvK1gjEx_E">
                    Vivaldi, the Venetian
                </Link>{" "}
                , le Capriccio Français a créé son dernier spectacle Si Versailles m'était chanté
                consacré à l'opéra français des XVIIe et XVIIIe siècles.
            </p>
            <p>
                Toujours actif sur le plan pédagogique, entre Académie d'été et actions culturelles
                pour les villes, le Capriccio Français réalise aussi des actions de prestige comme
                sa résidence au Festival de Froville dans le cadre de laquelle Philippe Le Fèvre a
                invité de nombreux artistes (Gérard Lesne, Maarten Koningsberger, Andreas Scholl) à
                venir travailler avec lui pour former des jeunes artistes.
            </p>
        </Lead>
        <TwoColumns>
            <Teacher
                name="Philippe Le Fèvre"
                link="philippe-le-fevre"
                classes={["choral", "choralConducting"]}
                short="As a musical director and as a choral director, Philippe Le Fèvre is eager to make classical music accessible to as large an audience as possible. When he performs with Le Capriccio Français or creates a symphonic orchestra for conservatory students, he has a constant goal: to help people hear and perform music."
            />
            <Teacher
                name="Josep Cabré"
                link="joseph-cabre"
                classes={["choral", "vocal"]}
                short="Josep Cabré has worked for a long time with the most prestigious ensembles devoted to historical interpretation, among which Hesperion XX, Huelgas Ensemble, La Chapelle Royale, Ensemble Organum, Ensemble Gilles Binchois, Sequentia, with repertoires ranging from the Middle Ages to the Baroque. He is currently collaborating with the Daedalus ensemble (Geneva) and the organist Jean Charles Ablitzer."
            />
            <Teacher
                name="Hélène Dufour"
                link="helene-dufour"
                classes={["instrumental", "vocal"]}
                short="Hélène Dufour started studying harpsichord at the Paris Superior National Music Conservatory, then at the Royal Flemish Conservatory in Antwerp with Jos Van Immerseel, and studied organ with Jean Boyer."
            />
            <Teacher
                name="Isabelle Germain"
                link="isabelle-germain"
                classes={["vocal"]}
                short="Isabelle Germain started singing at the Poitiers Regional Conservatory and Versailles Baroque Music Center, with Vera Rosza, Martin Isepp, Maargret Honig, John Elwes, and then continued with Michèle Lebris, Margreet Hönig and Noëlle Barker."
            />
            <Teacher
                name="Muriel Ferraro"
                link="muriel-ferraro"
                classes={["choral", "vocal"]}
                short="The French soprano Muriel Ferraro was born in Grenoble, where she first started studying the violin. She unexpectedly decided to resume her musical studies after a master’s degree in Law and Applied Languages. She left Berlin for Paris and was lead by her rising voice through the sinuous paths of singing. Out of curiosity she explored various styles and vocal practices. She was then inclined towards young dramatic opera repertoire thanks to the decisive encounter with the Soprano Florence Guignolet, from whom she received instruction. She has been perfecting her skills with Mirella Freni and Leontina Vaduva.  "
            />
            <Teacher
                name="Guillaume Jablonka"
                link="guillaume-jablonka"
                classes={["dance"]}
                short="Guillaume JABLONKA trained as a ballet dancer in Strasbourg (France), made his debuts in Hannover and then moved to Ballet du Nord under the direction of Jean Guizerix and Wilfride Piollet. He discovered baroque dance while working for Company L'Eventail (Marie-Genevieve Masse) and performed for Ensemble Donaïres (Ana Yepes) and as a soloist in Sigrid T'Hooft's choreographies for Radamisto by Haendel."
            />
            <Teacher
                name="Stephano Intrieri"
                link="stephano-intrieri"
                classes={["vocal"]}
                short="Born in Milano, he graduates in Organ and Harpsichord studies in Italy, before completing his education with Ton Koopman in Amsterdam."
            />
        </TwoColumns>
    </Page>
);

export default Teachers;
