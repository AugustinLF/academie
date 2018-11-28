import React from "react";
import Link from "gatsby-link";

import Home from "../components/home";

export const msg = {
    title: ["Acadèmia 2019", "join us!"],
    academy: {
        title: "BARCELONA: 21-28 DE JULIOL 2019",
        content:
            "Cant, clavecí, direcció de cors, coral: una acadèmia internacional en un marc excepcional al centre Barcelona dedicats de ple als repertoris del barroc",
    },
    testimonials: {
        title: "TEMOIGNAGES",
        content: [
            '"Très grande qualité des intervenants." Valérie, France',
            '"I liked the method used by the teachers, the way they helped improve the performance. The physical preparation given was very useful. I liked working with such excellent profesionals. Plus the course was very well tought and very organised." Albert, Spain',
            "\"J'ai aimé la disponibilité des enseignants, le grand nombre de cours par jour, individuels ou en commun, l'éveil corporel du matin (qui ne se fait pas du tout dans d'autres stages), l'unité de lieu qui permet de ne pas perdre de temps et donc d'avoir le temps de travailler pour soi.\" Christophe, France",
            '"Effective schedule, nice environment, high level of proficiency of the staff." Aline, Israel',
        ],
    },
};

const IndexPage = () => <Home msg={msg} />;

export default IndexPage;
