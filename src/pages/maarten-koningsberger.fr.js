import React from "react";

import {Link, InnerLink} from "../components/base";
import InnerPage from "../components/innerPage";
import maarten from "../maarten.jpg";

const Maarten = () => (
    <InnerPage
        name="Maarten Koningsberger"
        title="Chant"
        imgUrl={maarten}
        content={
            <div>
                <p>
                    Le baryton néerlandais Maarten Koninsberger a chanté dans des opéras allant de
                    Monteverdi à Mozart ou encore Menotti. Ce goût pour des styles multiples est
                    aussi présent dans ses récitals de chansons, accompagnés par des pianistes comme
                    Graham Johnson et Rudolf Jansen, ou par le luthiste Fred Jacobs, avec lequel il
                    s’est produit dans les salles de concerts et les festivals du monde entier. Ses
                    tournées de concerts en Europe, Afrique du Sud, Extrême-Orient, Chine, Israël,
                    USA et Canada, ont toujours eu un immense succès critique. Parmi les salles de
                    concert majeures dans lesquelles il a chanté on trouve : le Concertgebouw à
                    Amsterdam, le Wigmore Hall à London, la Philharmonie de Munich, Carnegie Hall à
                    New York, le Theater an der Wien, le Staatsoper de Berlin, la Salle Pleyel à
                    Paris, le Romanian Atheneum de Bucarest, l’Amsterdam Operahouse, l’Esplanade à
                    Singapour, et tant d’autres.
                </p>
                <p>
                    Maarten Koninsberger a chanté avec des orchestres, tels que Concertgebouw
                    Orchestra, Rotterdam Philharmonic Orchestra, The Orchestra of the Age of
                    Enlightenment, Akademie Alte Music Berlin, Combattimento Consort Amsterdam, Les
                    Arts Florissants, The Academy of Ancient Music, Tafelmusic Toronto, Les Talens
                    Lyriques, Residentie Orchestra, Dutch Radio Philharmonic Orchestra et Singapore
                    Philharmonic.
                </p>
                <p>
                    Il a travaillé avec des chefs comme Gustav Leonhardt, René Jacobs, Mark
                    Minkowski, Ton Koopman, William Christie, Richard Egarr, Chistophe Rousset,
                    Marin Alsop, Ed Spanjaard, Arnold Östman, Gennady Roshdensvensky, Jaap van
                    Zweden, Jeffrey Tate, Jan Willem de Vriend et Roberto Benzi.
                </p>
                <p>
                    Parmi les nombreux enregistrements de Maarten Koningsberger on trouve les CDs
                    suivants : “Music of the Spheres” (Luth anglais et Consort Songs du 17ème
                    siècle), Cantates Baroques françaises (Campra, Van Blankenburg), Grands Motets
                    (Mondonville avec Les Arts Florrissants et Charpentier avec le Centre de Musique
                    Baroque de Versailles) et de nombreux Lieder (Schubert ́s Winterreise et Die
                    schöne Müllerin, the Hyperion Schubert Edition avec Graham Johnson, Brahms
                    Lieder, Lieder de Fanny Mendelssohn, etc), des Chansons de Henry Purcell
                    (elected Editor ́s Choice by Gramophone Magazine: “Perfect Purcell on a
                    superlative release chock-full of treasures”) et des Mélodies françaises (par
                    ex. Fauré et Milhaud).
                </p>
                <p>
                    Maarten Koningsberger est professeur au Conservatoire de Musique d’Amsterdam et
                    au Centre de Musique Baroque de Versailles. Il est régulièrement invité à faire
                    partie de jurys et donne des masterclasses dans le monde entier.
                </p>
                <p>
                    Maarten Koningsberger est professeur pour le{" "}
                    <InnerLink to="/fr/stage-de-chant">stage de chant</InnerLink>.
                </p>
                <p>
                    <Link href="http://www.maartenkoningsberger.com/">Site personnel</Link>
                </p>
            </div>
        }
    />
);
export default Maarten;
