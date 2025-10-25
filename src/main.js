import { createApp } from "vue";
import "./assets/css/style.css";
import App from "./App.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* import specific icons */
import { faLinkedin, faSquareXing } from "@fortawesome/free-brands-svg-icons";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";

library.add(faLinkedin, faSquareXing, faCertificate);

createApp(App).component("FontAwesomeIcon", FontAwesomeIcon).mount("#app");
