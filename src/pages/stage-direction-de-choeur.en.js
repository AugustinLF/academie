import React from "react";

import choirConducting from "../choirConducting.jpg";
import InnerPage from "../components/innerPage";
import Layout from "../layouts/en";

const ChoirConducting = (props) => (
    <Layout location={props.location}>
        <InnerPage
            name="Choir conducting Academy"
            imgUrl={choirConducting}
            content={
                <div>
                    <p>
                        The workshop offers intermediate and advanced students in choral directing
                        the opportunity to work in a challenging yet supportive environment. Amateur
                        choral directors and professional musicians may also apply.
                    </p>
                    <p>
                        Tuition program includes score study, gesture, rehearsal technique, and work
                        with choral singers. The workshop focuses on connecting gesture with sound.
                    </p>
                    <p>
                        The students work with a pilot choir on a daily basis, and with the Academy
                        choir on a regular basis.
                    </p>
                </div>
            }
        />
    </Layout>
);

export default ChoirConducting;
