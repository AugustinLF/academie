import React from "react";

import instrumental from "../instrumental.jpg";
import InnerPage from "../components/innerPage";
import Layout from "../layouts/en";

const ChoirConducting = (props) => (
    <Layout location={props.location}>
        <InnerPage
            name="Vocal coach academy"
            imgUrl={instrumental}
            content={
                <div>
                    <p>
                        A workshop for harpsichordists, organists and pianists who want to improve
                        their skills as Lyric coach for Early music. Tuition program includes a
                        theoretical part (figures, identifying different styles) but also a strong
                        practice with the vocal masterclass, the choral workshop and in chamber
                        music activities.
                    </p>
                </div>
            }
        />
    </Layout>
);

export default ChoirConducting;
