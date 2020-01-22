import React from "react";

import InnerPage from "../components/innerPage";
import josep from "../josep.jpg";
import Layout from "../layouts/en";

const Josep = (props) => (
    <Layout location={props.location}>
        <InnerPage
            name="Josep Cabré"
            title="Choir and singing"
            imgUrl={josep}
            content={
                <div>
                    <p>
                        Josep Cabré has worked for a long time with the most prestigious ensembles
                        devoted to historical interpretation, among which Hesperion XX, Huelgas
                        Ensemble, La Chapelle Royale, Ensemble Organum, Ensemble Gilles Binchois,
                        Sequentia, with repertoires ranging from the Middle Ages to the Baroque. He
                        is currently collaborating with the Daedalus ensemble (Geneva) and the
                        organist Jean Charles Ablitzer.
                    </p>
                    <p>
                        He is a founding member of the vocal quartet La Colombina. With this
                        ensemble he has performed in many concerts and has recorded a number of
                        records. He is often invited to teach specialised courses in various
                        institutions (University of Mexico, UNAM, Flanders Festival, Centre
                        International les Chemins du Baroque...). He also teaches at Musikene, the
                        Higher School of Music of the Basque Country, in San Sebastian, and at the
                        Conservatory in Perpignan.
                    </p>
                    <p>
                        Josep Cabré founded the Companyia Musical ensemble for the performance of
                        Renaissance and Baroque repertoires away from the mainstream, from
                        plainchant to polyphony. He was the conductor of the Capilla Peñaflorida
                        (San Sebastián) and artistic director and conductor of the Coral de Cámara
                        de Pamplona. He has carried out intensive work on the performance and
                        recording of Hispanic repertoires from the Renaissance and the Baroque with
                        both ensembles.
                    </p>
                    <p>
                        All this activity crystallises in frequent radio productions and the
                        recording of around a hundred records for different labels (Accent, Harmonia
                        Mundi, Almaviva, Tactus, K617, NB....), many of which have been awarded
                        prizes by the specialised critics.
                    </p>
                </div>
            }
        />
    </Layout>
);
export default Josep;
