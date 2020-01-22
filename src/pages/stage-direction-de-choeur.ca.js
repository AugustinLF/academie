import React from "react";

import choirConducting from "../choirConducting.jpg";
import InnerPage from "../components/innerPage";
import Layout from "../layouts/ca";

const ChoirConducting = (props) => (
    <Layout location={props.location}>
        <InnerPage
            name="Taller de Direcció de Cor"
            imgUrl={choirConducting}
            content={
                <div>
                    <p>
                        Aquest taller s’adreça als estudiants inscrits en un curs de direcció de cor
                        i desitgen treballar totes les facetes de l’ofici de director de cor i
                        treballar diàriament amb un cor pilot. Està també destinat als directors de
                        cor amateurs i també als músics professionals (professors de formació
                        musical, professors de música d’escoles i instituts, músics en generals...)
                    </p>
                    <p>
                        El treball relatiu al gest en relació al so serà el centre del taller que
                        s’articularà entre treball d’estudi fet en comú, gest, realització d’un
                        assaig i treball amb els coristes.
                    </p>
                </div>
            }
        />
    </Layout>
);

export default ChoirConducting;
