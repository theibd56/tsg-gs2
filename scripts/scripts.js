import { Mask, MaskInput } from "maska";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

new MaskInput("[data-maska]")

Fancybox.bind("[data-fancybox]", {});

document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const main = document.querySelector('main');

    if (header && main) {
        const headerHeight = header.offsetHeight;
        main.style.paddingTop = `${headerHeight}px`;
    }
});

window.addEventListener('resize', function() {
    const header = document.querySelector('header');
    const main = document.querySelector('main');

    if (header && main) {
        const headerHeight = header.offsetHeight;
        main.style.paddingTop = `${headerHeight}px`;
    }
});