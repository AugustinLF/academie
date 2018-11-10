import React from "react";

import {Link, InnerLink} from "../components/base";
import InnerPage from "../components/innerPage";
import philippe from "../philippe.jpg";

const Philippe = () => (
    <InnerPage
        name="Philippe Le Fèvre"
        title="Choir and choir conducting"
        imgUrl={philippe}
        content={
            <div>
                <p>
                    As a musical director and as a choral director, Philippe Le Fèvre is eager to
                    make classical music accessible to as large an audience as possible. When he
                    performs with Le Capriccio Français or creates a symphonic orchestra for
                    conservatory students, he has a constant goal: to help people hear and perform
                    music.
                </p>
                <p>
                    Alongside his work as a musical director, Philippe Le Fèvre favors pedagogy and
                    transmission: he has therefore founded a Summer Music Academy for future young
                    artists, he is a Professor at Cergy-Pontoise Regional
                    Conservatory and Paris 9e Conservatory. He is also the Choral conductor of three
                    amateur choirs including the french Parliament choir, and he regularly delivers
                    lectures.
                </p>
                <p>
                    The same passion has led him to join the{" "}
                    <Link href="https://artchoral.org/">French Choral Art Institute</Link> in 2010,
                    as an Artistic and Pedagogical Director for several years, and now as a member
                    of its Board. He aims at creating new repertoires, developing choral directing
                    programs, and establishing international connections.
                </p>
                <p>
                    Philippe Le Fèvre enjoys following unusual paths : he has recently taken part in
                    the movie “Intouchables”, together with Le Capriccio Français, he likes to
                    combine different musical genres : a classical orchestra performing with a gipsy
                    jazz band or with piano and bandoneon, and he regularly performs French and
                    Russian repertoires with Russian professional choirs.
                </p>
                <p>
                    Philippe Le Fèvre cherishes the Baroque definition of the word “emotion”: that
                    which makes you move and makes you different. His inner aspiration is to make
                    his audience feel happy for sharing these ravishing musical moments.
                </p>
                <p>
                    Philippe Le Fèvre hosts the{" "}
                    <InnerLink to="/en/stage-direction-de-choeur">
                        choir conducting academy
                    </InnerLink>{" "}
                    and shares the choir conductin with{" "}
                    <InnerLink to="/en/josep-cabre">Josep Cabré</InnerLink> for the{" "}
                    <InnerLink to="/en/stage-choral">vocal academy</InnerLink>
                </p>
            </div>
        }
    />
);
export default Philippe;
