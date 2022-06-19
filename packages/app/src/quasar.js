import { Dialog } from "quasar";

// Import icon libraries
import iconSet from "quasar/icon-set/fontawesome-v6";
import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "@fortawesome/fontawesome-free/css/solid.min.css";
import "@fortawesome/fontawesome-free/css/brands.min.css";
import "@fortawesome/fontawesome-free/css/regular.min.css";

// Import Quasar css
import "quasar/src/css/index.sass";

export default {
  config: {},
  plugins: {
    Dialog,
  },
  iconSet,
};
