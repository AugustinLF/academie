import React from "react";

import Page from "../components/page";
import Lead from "../components/lead";
import {Link} from "../components/base";
import TeacherList from "../components/teacherList";
import Layout from "../layouts/fr";
import Helmet from "react-helmet";

const Teachers = props => (
    <Layout location={props.location}>
        <Helmet>
            <meta
                name="keywords"
                content="Stage de chant, stage choral, stage de chant choral, stage de direction de chœur, Hélène Dufour, Muriel Ferraro, Stefano INTRIERI, Maarten Koningsberger, Philippe Le Fèvre, Adam Vidovic"
            />
        </Helmet>
        <Page title="Les enseignants">
            <Lead>
                <p>
                    Le Capriccio Français a fêté son 25ème anniversaire en 2020. Depuis sa création
                    il a donné plusieurs centaines de concerts. Si l'essentiel de son répertoire
                    porte sur la musique du XVIIIème siècle, il s'empare régulièrement du répertoire
                    classique et romantique : nul doute que sa Traviata sur instruments d'époque fut
                    une première mondiale !
                </p>
                <p>
                    Le Capriccio Français alterne productions de grande envergure (Passion selon
                    Saint-Jean de J.S. Bach, Israel in Egypt d'Handel, Grande messe en ut mineur de
                    Mozart) et productions plus intimes. Après{" "}
                    <Link href="https://www.youtube.com/watch?v=Hb4y2qL6MkM">
                        Mozart, opéra intime
                    </Link>{" "}
                    –{" "}
                    <Link href="https://www.youtube.com/watch?v=02E8FGrew-E">
                        Haendel, caro Sassone
                    </Link>{" "}
                    –{" "}
                    <Link href="https://www.youtube.com/watch?v=OmvK1gjEx_E">
                        Vivaldi, le vénitien
                    </Link>{" "}
                    , le Capriccio Français a créé son dernier spectacle Si Versailles m'était
                    chanté consacré à l'opéra français des XVIIe et XVIIIe siècles.
                </p>
                <p>
                    Toujours actif sur le plan pédagogique, entre Académie d'été et actions
                    culturelles pour les villes, le Capriccio Français réalise aussi des actions de
                    prestige comme sa résidence au Festival de Froville dans le cadre de laquelle
                    Philippe Le Fèvre a invité de nombreux artistes (Gérard Lesne, Maarten
                    Koningsberger, Andreas Scholl) à venir travailler avec lui pour former des
                    jeunes artistes.
                </p>
            </Lead>
            <TeacherList language="fr" />
        </Page>
    </Layout>
);

export default Teachers;
