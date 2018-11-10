import React from "react";

import {Link, InnerLink} from "../components/base";
import InnerPage from "../components/innerPage";
import philippeImage from "../philippe.jpg";

const Philippe = () => (
    <InnerPage
        name="Philippe Le Fèvre"
        title="Chœur et direction de chœur"
        imgUrl={philippeImage}
        content={
            <div>
                <p>
                    Chef d’orchestre et chef de chœur, Philippe Le Fèvre travaille pour que la
                    musique puisse rencontrer le plus grand nombre. Qu'il soit à la tête du
                    Capriccio Français ou qu'il crée un orchestre symphonique d'élèves pour un
                    réseau de conservatoires, son but est constant : faire jouer et entendre de la
                    musique.
                </p>
                <p>
                    C'est pourquoi à côté de son activité de chef, Philippe Le Fèvre attache une
                    grande importance à la pédagogie et à la transmission : il a créé pour cela une
                    académie d’été où il forme les jeunes artistes de demain, il enseigne au
                    Conservatoire à Rayonnement Régional de Cergy-Pontoise et à celui
                    du 9ème arrondissement de Paris, il dirige des chœurs amateurs qu’il aide à
                    découvrir chefs d’œuvres et œuvres méconnues, il donne des conférences pour
                    donner des clés au mélomane…
                </p>
                <p>
                    C'est aussi pourquoi, après avoir été directeur artistique et pédagogique de l'<Link href="https://artchoral.org/">Institut Français d’Art Choral</Link>{" "}
                    pendant plusieurs années, il en a rejoint le conseil d'administration afin de
                    travailler sur de nouveaux répertoires, sur la formation des chefs de chœurs, ou
                    sur la création de réseaux internationaux.
                </p>
                <p>
                    Philippe Le Fèvre, pour sa passion de la musique, a choisi de faire sienne la
                    définition du mot émotion aux temps baroques : ce qui fait mouvoir les individus
                    et les rend différents. Et contribuer, ne serait-ce que de façon infime, à
                    rendre heureux ceux qui auront partagé avec lui ces moments musicaux.
                </p>
                <p>
                    Philippe Le Fèvre anime le{" "}
                    <InnerLink to="/fr/stage-direction-de-choeur">
                        stage de direction de chœur
                    </InnerLink>{" "}
                    et partage la direction du chœur avec{" "}
                    <InnerLink to="/fr/josep-cabre">Josep Cabré</InnerLink> pour le{" "}
                    <InnerLink to="/fr/stage-choral">stage de chant choral</InnerLink>
                </p>
            </div>
        }
    />
);
export default Philippe;
