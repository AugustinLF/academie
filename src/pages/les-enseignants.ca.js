import React from "react";

import Page from "../components/page";
import Lead from "../components/lead";
import {Link} from "../components/base";
import TeacherList from "../components/teacherList";
import Layout from "../layouts/ca";

const Teachers = (props) => (
    <Layout location={props.location}>
        <Page title="Le Capriccio Français i els ensenyants de l’Acadèmia">
            <Lead>
                <p>
                    Le Capriccio Français va celebrar el seu 20è aniversari el 2015. Des de la seva
                    creació ha donat diversos centenars de concerts. Si bé el seu repertori
                    essencial ens porta a la música del segle XVIIIè, regularment interpreten
                    repertori clàssic i romàntic: sense cap dubte que la seva Traviata amb
                    instruments d’època va ser una estrena mundial!
                </p>
                <p>
                    Le Capriccio Français alterna produccions de gran envergadura (Passió segons
                    Sant Joan de J.S. Bach, Israel en Egipte de Händel) i produccions més
                    intimistes. Després de{" "}
                    <Link href="https://www.youtube.com/watch?v=Hb4y2qL6MkM">
                        Mozart, opéra intime{" "}
                    </Link>{" "}
                    – –{" "}
                    <Link href="https://www.youtube.com/watch?v=02E8FGrew-E">
                        Haendel, caro Sassone
                    </Link>{" "}
                    – –
                    <Link href="https://www.youtube.com/watch?v=OmvK1gjEx_E">
                        Vivaldi, le vénitien
                    </Link>{" "}
                    , le Capriccio Français ha creat el seu darrer espectacle Si Versailles m'était
                    chanté, dedicat a l’òpera francesa dels segles XVIIè i XVIIIè.
                </p>
                <p>
                    Sempre actius pedagògicament, entre l’Acadèmia d’estiu i accions culturals a
                    ciutats, le Capriccio Français realitza també accions de prestigi com la seva
                    residència al Festival de Froville, en el marc de la qual Philippe Le Fèvre ha
                    convidat nombrosos artistes (Gérad Lesne, Maarten Koningsberger, Andréas Scholl)
                    a venir a treballar amb ell per formar joves artistes.
                </p>
            </Lead>
            <TeacherList language="ca" />
        </Page>
    </Layout>
);

export default Teachers;
