/** @jsx h */

import blog, { ga, redirects, h } from "blog";
import Footer from "./footer.tsx";

blog({  
  title: "Das Jahr ohne Sommer",
  description: "Berichte und Erzählungen aus dem Jahr ohne Sommer.",
// header: <Header></Header>,
  // section: <section>Your custom section</section>,
  footer: <Footer author="Luis Gjokaj, Gian Federspiel, Philip Sen, Green Malcolm, Rouven Hänggi"></Footer>,
  //coverTextColor : "White",
  // style: ".bg-no-repeat { opacity: 0.5; } header h1 { opacity: 1 } header p { opacity: 1 }",
  avatarClass: "rounded-full",
  cover: "https://github.com/RoeHH/IDAF-GP-DE/blob/master/cover.png?raw=true",
  dateStyle: "long",
  lang: "de",
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
