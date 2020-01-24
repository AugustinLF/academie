import React from "react";

import InnerPage from "../components/innerPage";
import stefano from "../stefano.jpg";
import Layout from "../layouts/en";

const Stefano = (props) => (
    <Layout location={props.location}>
        <InnerPage
            name="Stefano Intrieri"
            title="Lyric coach"
            imgUrl={stefano}
            content={
                <div>
                    <p>
                        Born in Milano, he graduates in Organ and Harpsichord studies in Italy,
                        before completing his education with Ton Koopman in Amsterdam.
                    </p>
                    <p>
                        He plays either as a soloist or accompanist with several choirs and
                        orchestras, such as Coro & Orchestra RAI - Milano, Nederlands Omroep Koor
                        (Marcus Creed), Collegium ad Mosam, Il Concerto Barocco, Chœur de Radio
                        France, Orchestre de Picardie, Le Capriccio français, Ensemble Orchestral de
                        Paris (Ton Koopman), La Grande Écurie et la Chambre du Roy...
                    </p>
                    <p>
                        Stefano is also founder and artistic director of gruppo strumentale La
                        Réjouissance.
                    </p>
                    <p>
                        He obtained his French superior teaching certificate in Early Music and
                        worked for CRR de Paris, Maîtrise de Notre-Dame de Paris and Pôle Supérieur
                        ’93 in Aubervilliers – La Courneuve. He is often asked for other activities,
                        such as seminars, conferences and master classes about different specifical
                        themes, related to Baroque musical repertoire.
                    </p>
                    <p>
                        As a vocal coach, he has been working for several institutions (Centre de la
                        Voix - Fondation Royaumont, Centre de Musique Baroque de Versailles, Atelier
                        Lyrique de Tourcoing, Opera Zuid-Nederland…), opera productions and master
                        classes (with Margreet Honig, Rachel Yakar, Howard Crook, Maarten
                        Köningsberger, Gérard Lesne, Andreas Scholl…)
                    </p>
                </div>
            }
        />
    </Layout>
);
export default Stefano;
