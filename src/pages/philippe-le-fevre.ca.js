import React from "react";

import {Link, InnerLink} from "../components/base";
import InnerPage from "../components/innerPage";
import philippe from "../philippe.jpg";

const Philippe = () => (
    <InnerPage
        name="Philippe Le Fèvre"
        title="Cor i Direcció coral"
        imgUrl={philippe}
        content={
            <div>
                <p>
                    Director d’orquestra i de cor, Philippe Le Fèvre treballa perquè la música pugui
                    arribar al més alt estadi. Sigui com a cap del Capriccio Français o creant una
                    orquestra simfònica d’alumnes per una xarxa de conservatoris, el seu objectiu és
                    constant: fer interpretar i fer sentir la música.
                </p>
                <p>
                    És per això que al costat de la seva activitat de director, afegeix donar una
                    importància gran a la pedagogia i a la transmissió de coneixements: ha creat per
                    això una acadèmia d’estiu des d’on forma els artistes joves del demà, ensenya al
                    Conservatoire à Rayonnement Régional de Saint-Maur, de Cergy-Pontoise i al del
                    9è barri de Paris. Dirigeix cors amateurs on ajuda a fer-los descobrir obres
                    capdals i obres desconegudes i dóna conferències per a donar claus als melòmans.
                </p>
                <p>
                    És per això que després d’haver estat director artístic i pedagògic de
                    l’Institut Français d’Art Choral durant diversos anys, ha aconseguit prop del
                    consell d’administració de treballar sobre nous repertoris, sobre la formació de
                    directors de cor i sobre la creació de xarxes internacionals.
                </p>
                <p>
                    Philippe Le Fèvre, degut a la seva passió per la música ha escollit de fer-se
                    seva la definició del mot emoció en temps del barroc: és el que fa moure els
                    individus i els torna diferents. I contribuir, encara que sigui d’una manera
                    senzilla a fer feliços als que han compartit amb ell grans moments musicals.
                </p>
            </div>
        }
    />
);
export default Philippe;
