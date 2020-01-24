import React from "react";

import {Link} from "../components/base";
import InnerPage from "../components/innerPage";
import maarten from "../maarten.jpg";
import Layout from "../layouts/ca";

const Maarten = (props) => (
    <Layout location={props.location}>
        <InnerPage
            name="Maarten Koningsberger"
            title="Cant"
            imgUrl={maarten}
            content={
                <div>
                    <p>
                        The Dutch baritone Maarten Koningsberger has sung in operas from Monteverdi
                        to Mozart to Menotti. This diversity of styles is also reflected in his song
                        recitals, with pianists as Graham Johnson and Rudolf Jansen or with lutenist
                        Fred Jacobs, with whom he performed in concerthalls and festivals all over
                        the world. His concert tours include Europe, South Africa, the Far East,
                        China, Israel, USA and Canada, always highly acclaimed by the press. Among
                        the many mayor concerthalls where he performed are: The Concertgebouw
                        Amsterdam, Wigmore Hall London, Philharmonie München, Carnegie Hall New
                        York, Theater an der Wien, Staatsoper Berlin, Salle Pleyel Paris, Romanian
                        Atheneum Bucharest, Amsterdam Operahouse, Esplanade Singapore and many more.
                    </p>
                    <p>
                        Maarten Koningsberger has sung with orchestras such as the Concertgebouw
                        Orchestra, the Rotterdam Philharmonic Orchestra, The Orchestra of the Age of
                        Enlightenment, Akademie Alte Music Berlin, Combattimento Consort Amsterdam,
                        Les Arts Florissants, The Academy of Ancient Music, Tafelmusic Toronto, Les
                        Talents Lyriques, The Residentie Orchestra, The Dutch Radio Philharmonic
                        Orchestra and The Singapore Philharmonic.
                    </p>
                    <p>
                        He worked with conductors such as Gustav Leonhardt, René Jacobs, Mark
                        Minkowski, Ton Koopman, William Christie, Richard Egarr, Chistophe Rousset,
                        Marin Alsop, Ed Spanjaard, Arnold Östman, Gennady Roshdensvensky, Jaap van
                        Zweden, Jeffrey Tate, Jan Willem de Vriend and Roberto Benzi.
                    </p>
                    <p>
                        Among the many CD-recordings that Maarten Koningsberger made are: “Music of
                        the Spheres” (English Lute- and consortsongs of the 17th century), French
                        Baroque Cantates (Campras, Van Blankenburg), Grands Motets (Mondonville with
                        Les Arts Florrissants and Charpentier with the Centre de Musique Baroque de
                        Versailles) and many Lieder (a.o. Schubert ́s Winterreise and Die schöne
                        Müllerin, the Hyperion Schubert Edition with Graham Johnson, Brahms Lieder,
                        Lieder by Fanny Mendelssohn, etc) songs by Henry Purcell (elected Editor ́s
                        Choice by Gramphone Magazine: “Perfect Purcell on a superlative release
                        chock-full of treasures”) and French Mélodies (a.o. Fauré and Milhaud). In
                        june 2012 he will record a selection of Lieder from “Des Knaben Wunderhorn”
                        by Gustav Mahler with Ed Spanjaard.
                    </p>
                    <p>
                        Maarten Koningsberger teaches at the Amsterdam Conservatory of Music and the
                        Centre de Musique Baroque de Versailles. He regularly invited for jury’s and
                        gives masterclasses all over the world.
                    </p>
                    <p>
                        <Link href="http://www.maartenkoningsberger.com/">Personal website</Link>
                    </p>
                </div>
            }
        />
    </Layout>
);
export default Maarten;
