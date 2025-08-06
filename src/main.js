import "../style/modern-normalise.css";
import "../style/components/customeCursor.css";
import "../style/style.css";
import "../style/components/header.css";
import "../style/components/hero.css";
import "../style/components/about.css";
import "../style/components/featured.css";
import "../style/components/contact.css";
import "../style/components/footer.css";
import "../style/components/mobile-nav.css";
import "../style/components/projects.css";
import "../style/utils.css";

import "../src/project";
import cursors from "./utils/custcur";
import mobileNav from "./utils/mobile-nav";
import darkMode from "./utils/dark-mode";



const loading = () => {
    // Wait for DOM content to be fully loaded
    document.addEventListener("DOMContentLoaded", function () {
        // Simulate loading (remove this setTimeout in production)
        setTimeout(function () {
            document.getElementById("loadingScreen").style.opacity = "0";
            document.body.style.opacity = "1";

            // Remove loading screen after transition completes
            setTimeout(function () {
                document.getElementById("loadingScreen").remove();
            }, 500);
        }, 500); // Adjust this timeout as needed in production
    });
};

loading();
mobileNav();
darkMode();
cursors();

