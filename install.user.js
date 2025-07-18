// ==UserScript==
// @name         v/ADDONZ - Menadżer dodatków vumo [NI]
// @version      1.0
// @author       vumo
// @description  Menadżer dodatków do gry Margonem.
// @match        http*://*.margonem.pl/
// @match        http*://*.margonem.com/
// @exclude      http*://margonem.*/*
// @exclude      http*://www.margonem.*/*
// @exclude      http*://new.margonem.*/*
// @exclude      http*://forum.margonem.*/*
// @exclude      http*://commons.margonem.*/*
// @exclude      http*://dev-commons.margonem.*/*
// @icon         https://vumocode.github.io/vaddonz-new/assets/vaddonz.ico
// @downloadURL  https://vumocode.github.io/vaddonz-new/install.user.js
// @updateURL    https://vumocode.github.io/vaddonz-new/install.user.js
// @grant        none
// ==/UserScript==

(function () {
    "use strict";

    const currentDate = new Date();
    const cacheBuster = currentDate.toISOString().slice(0, 10).replace(/-/g, '');
    const scriptURL = `https://addons2.margonem.pl/get/153/153538dev.js?v=${cacheBuster}`;

    const scriptElement = document.createElement("script");
    scriptElement.src = scriptURL;

    document.body.appendChild(scriptElement);
})();
