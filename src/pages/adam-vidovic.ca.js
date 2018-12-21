import React from "react";

import {Link, InnerLink} from "../components/base";
import InnerPage from "../components/innerPage";
import adam from "../adam.jpg";

const Adam = () => (
    <InnerPage
        name="Adam Vidovic"
        title="Chœur et direction de chœur"
        imgUrl={adam}
        content={
            <div>
                <p>
                    De nationalité britannique, Adam Vidović est chef de chœur, professeur de chant
                    choral, de direction de chœur, organiste et sophrologue. Il est titulaire des
                    orgues Cavaillé-Coll/Mutin de l'Église luthérienne de la Rédemption à Paris.
                </p>
                <p>
                    Il enseigne à Sciences-Po (Paris), au Conservatoire Nadia et Lili Boulanger,
                    Paris 9e, où il co-dirige le chœur Nadia Boulanger et le Jeune Chœur et au
                    Conservatoire Gustave Charpentier, Paris 18e, où il dirige l’Ensemble vocal.
                </p>
                <p>
                    Il a été directeur musical et chef de chœur de nombreux chœurs : l'Ensemble
                    vocal de Neuilly, le Chœur de Meudon, le Chœur du campus d'Orsay et de Voices
                    Chœur International.
                </p>
                <p>
                    Il remporte une médaille d'argent avec l'Ensemble vocal de Neuilly au 18e
                    Festival international de musique de l'Avent et de Noël à Prague, où il obtient
                    un prix spécial du jury pour « une direction de chœur inspirée ». En 2016 la
                    Lettre du Musicien qualifie sa direction de « claire et passionnée ».
                </p>
                <p>
                    Adam Vidović intervient à des master-class, participe aux Choralies à
                    Vaison-la-Romaine (A Cœur Joie), collabore avec Didier Grojsman au CREA
                    d’Aulnay-sous-Bois, et dirige les chœurs pour la première production de l’opéra
                    Vanessa de Samuel Barber en Île-de-France (coproduction Théâtre d’Herblay et
                    l’Opéra de Metz) sous la baguette de Jean-Luc Tingaud. Sa polyvalence et sa
                    curiosité le conduisent à diriger aussi bien des formations de chambre que de
                    grands chœurs avec orchestre, à collaborer avec la danse contemporaine
                    (compagnie Lionel Hoche), à intervenir dans le milieu de l’entreprise (Fondation
                    Orange, Business France…) ou à conduire la musique pour des défilés de mode
                    (Gaspard Yurkievich).
                </p>
                <p>
                    Adam Vidovic partage la direction du chœur avec{" "}
                    <InnerLink to="/fr/philippe-le-fevre">Philippe Le Fèvre</InnerLink> pour le{" "}
                    <InnerLink to="/fr/stage-choral">stage de chant choral</InnerLink>
                    et travaillera avec les débutants pour le{" "}
                    <InnerLink to="/fr/stage-direction-de-choeur">
                        stage de direction de chœur
                    </InnerLink>.
                </p>
            </div>
        }
    />
);
export default Adam;
