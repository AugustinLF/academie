import React from "react";

import InnerPage from "../components/innerPage";
import helene from "../helene.jpg";
import Layout from "../layouts/en";

const Helene = (props) => (
    <Layout location={props.location}>
        <InnerPage
            name="Hélène Dufour"
            title="Harpischord and lyric coach"
            imgUrl={helene}
            content={
                <div>
                    <p>
                        Hélène Dufour started studying harpsichord at the Paris Superior National
                        Music Conservatory, then at the Royal Flemish Conservatory in Antwerp with
                        Jos Van Immerseel, and studied organ with Jean Boyer.
                    </p>
                    <p>
                        She took part in tours of the European Union Baroque Orchestra, where she
                        was to meet Ton Koopman, Roy Goodman and Jaap ter Linden. She then played
                        for the most important concert institutions (Paris Sacred Art Festival,
                        Lisbon Gulbekian Foundation, Utrecht Festival, Moscow Conservatory…)
                    </p>
                    <p>
                        She now plays chamber music (duet with James Bowman, trio with La
                        Tempesta…), basso continuo for orchestras (Le Capriccio Français, La
                        Réjouissance…), and solos (Bach concertos, Manuel de Falla…).
                    </p>
                    <p>
                        She has recorded French baroque motets (Diapason d’Or award), concerti
                        grossi with ECBO. Her recording of 18th century sonatas with Patrick Bismuth
                        received the Venice Fondazione Cini award, and her recording of Biber’s
                        Rosenkranzsonaten received a “Choc” award from “Le Monde de la Musique”.
                    </p>
                    <p>
                        She is a Lyric coach at the Versailles Baroque Music Center, a harpsichord
                        Professor at the Reims Regional Conservatory, and a basso continuo Professor
                        at the Orsay Regional Conservatory.
                    </p>
                </div>
            }
        />
    </Layout>
);
export default Helene;
