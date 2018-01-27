import React from "react";

import Page from "../components/page";
import Lead from "../components/lead";
import {Link, InnerLink} from "../components/base";
import TeacherList from "../components/teacherList";

const Teachers = () => (
    <Page title="Le Capriccio Français and Academy faculty">
        <Lead>
            <p>
                Founded by <InnerLink to="/en/philippe-le-fevre">Philippe Le Fèvre</InnerLink>, Le
                Capriccio Français has performed hundreds of times, in prestigious and famous
                festivals as well as in more humble places. We have performed with the most renowned
                soloists and with amateur choirs alike. Our public may be music lovers or students
                in disadvantaged neighborhoods. Our goal is always the same: to perform with
                determination and passion.
            </p>
            <p>
                When Le Capriccio Français was founded, we intended to perform the 18th century
                amazing repertoire. We play period instruments because we mean to link every musical
                era with its proper instruments and interpretation. But we have since approached
                classical and romantic repertoires, and our performance of the Traviata on period
                instruments was a world premiere!
            </p>
            <p>
                Le Capriccio Français could lately be heard in great performances (J.S. Bach Mass in
                B minor, St. Matthew Passion and St John Passion, W.A. Mozart Great Mass in C minor)
                and more intimate concerts, as well as our four productions:{" "}
                <Link href="https://www.youtube.com/watch?v=Hb4y2qL6MkM">
                    Mozart, an intimate opera
                </Link>{" "}
                –{" "}
                <Link href="https://www.youtube.com/watch?v=02E8FGrew-E">
                    Haendel, caro Sassone
                </Link>{" "}
                –{" "}
                <Link href="https://www.youtube.com/watch?v=OmvK1gjEx_E">
                    Vivaldi, the Venetian
                </Link>{" "}
                - Si Versailles m'était chanté.
            </p>
            <p>
                We also emphasize accompaniment and transmission: cultural actions such as school
                programs, our summer music Academy, but also prestigious actions such as our
                residence at the Froville Festival, where Philippe Le Fèvre has invited numerous
                artists (Gérard Lesne, Maarten Koningsberger, Andréas Scholl) to offer top-level
                masterclasses to young artists!
            </p>
        </Lead>
        <TeacherList language="en" />
    </Page>
);

export default Teachers;
