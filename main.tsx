/** @jsx h */

import blog, { ga, redirects, h } from "blog";

blog({
  title: "Das Jahr ohne Sommer",
  description: "berichte und erzählungen aus dem Jahr ohne Sommer.",
  // header: <header>Your custom header</header>,
  // section: <section>Your custom section</section>,
  // footer: <footer>Your custom footer</footer>,
  avatar: "https://www.vn.at/2019/07/dieser-hungertaler-erinnert-an-die-hunge.jpg",
  avatarClass: "rounded-full",
  author: "Luis Gjokaj, Gian Federspiel, Philip Brüetsch, Ander Bro, Rouven Hänggi",

  // middlewares: [

    // If you want to set up Google Analytics, paste your GA key here.
    // ga("UA-XXXXXXXX-X"),

    // If you want to provide some redirections, you can specify them here,
    // pathname specified in a key will redirect to pathname in the value.
    // redirects({
    //  "/hello_world.html": "/hello_world",
    // }),

  // ]
});
