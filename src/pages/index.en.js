import React from "react";
import Link from "gatsby-link";

import Home from "../components/home";

const msg = {
    title: ["Academy 2017", "JOIN US!"],
    academy: {
        title: "Barcelona: 16-23 July 2017",
        content:
            "Singers, chorists, harpsichordists, choir conductors and dancers: an international Academy devoted to ancient music in an outstanding setting in theheart of Barcelona",
    },
    testimonials: {
        title: "TESTIMONIALS",
        content: [
            '"Top quality teachers" Valérie, France',
            '"I liked the method used by the teachers, the way they helped improve the performance. The physical preparation given was very useful. I liked working with such excellent professionals. Plus the course was very well taught and very organised." Albert, Spain',
            '"I appreciated that the teachers were available for us, I enjoyed the great number of classes offered every day, private lessons as well as group classes, and the morning exercise (which other workshops I have tried do not offer), and also the fact that having all activities in the same place prevents you from losing time, so that you can have spare time to study by yourself." Christophe, France',
            '"Effective schedule, nice environment, high level of proficiency of the staff." Aline, Israel',
        ],
    },
};

const IndexPage = () => <Home msg={msg} />;

export default IndexPage;
