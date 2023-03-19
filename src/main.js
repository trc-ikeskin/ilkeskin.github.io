import { createApp } from "vue";
import "./assets/css/style.css";
import App from "./App.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* import specific icons */
import {
  faLinkedin,
  faSquareXing,
  faSquareTwitter,
} from "@fortawesome/free-brands-svg-icons";

library.add(faLinkedin, faSquareXing, faSquareTwitter);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
