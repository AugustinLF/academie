import React from "react";

import Home from "../components/home";
import Layout from "../layouts/fr";

export const msg = {
    title: ["Académie 2020", "rejoignez-nous!"],
    academy: {
        title: "DU 19 AU 26 JUILLET 2020 : 7 JOURS A BARCELONE",
        content:
            "Stage de chant, stage de chant choral, stage pour chefs de chant, stage de direction de chœur : 7 jours consacrés à la musique baroque dans un cadre exceptionnel",
    },
    testimonials: {
        title: "TEMOIGNAGES",
        content: [
            '"I liked the method used by the teachers, the way they helped improve the performance. The physical preparation given was very useful. I liked working with such excellent professionals. Plus the course was very well thought and very organised." Albert, Spain',
            `J'ai aimé la disponibilité des enseignants, le grand nombre de cours par jour, individuels ou en commun, l'éveil corporel du matin (qui ne se fait pas du tout dans d'autres stages), l'unité de lieu qui permet de ne pas perdre de temps et donc d'avoir le temps de travailler pour soi." Christophe, France`,
            '"Effective schedule, nice environment, high level of proficiency of the staff." Aline, Israel',
            `"En tant que claveciniste j'ai vu ma compréhension du travail avec chanteur évoluer tout au long du stage dans toutes les formules possibles (solo/musique de chambre/ choeur) tout en ayant des cours individuels avec deux professeurs d'exception. On peut difficilement faire plus sur mesure... Encore merci!!!" Camille, France`,
            '"An excellent course, in a lovely location, led with professionalism and good humour. Highly recommended." Martin, Great Britain',
            `"Un niveau musical pour le choeur des chanteurs amateurs, tel que les participants de l'académie aimeraient retrouver dans leur choeur habituel."`,
        ],
    },
};

const IndexPage = props => (
    <Layout location={props.location}>
        <Home msg={msg} />
    </Layout>
);

export default IndexPage;
