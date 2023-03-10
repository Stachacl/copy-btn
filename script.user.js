// ==UserScript==
// @name         ChatGPT copy btn
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  better accessibility!
// @author       Stacha_Cl
// @match        https://chat.openai.com/chat
// @icon         https://www.google.com/s2/favicons?sz=64&domain=openuserjs.org
// @grant        none
// ==/UserScript==

let styleSheet = `
.copyBtnStyle {
color: #7dc7b0;
background-color: white;
margin: 5px;

}`;

let s = document.createElement("style");
s.type = "text/css";
s.innerHTML = styleSheet;
(document.head || document.documentElement).appendChild(s);

 // Wait for window to load before executing JS function
window.addEventListener("load", function() {
   'use strict';

    alert("copy button extention is in use");

    function copy(ele) {
        let temp = document.createElement("textarea");
        document.body.appendChild(temp);
        temp.value = ele.textContent;
        temp.select();
        document.execCommand("copy");
        temp.remove();
    }
    function addCopyBtn(ele) {
        if (!ele.querySelector("button")) {
        let btn = document.createElement("button");
        btn.innerHTML = " Copy text below:  ";
        btn.className = "copyBtnStyle";
        btn.onclick = () => {
            copy(ele.lastChild);
        }
        ele.insertBefore(document.createElement('br'), ele.childNodes[0])
        ele.insertBefore(btn, ele.childNodes[0]);
    }}

    window.setInterval(function() {
        let preTags = document.getElementsByTagName("p");

        // Loop
        for (let preTag of preTags) {
            addCopyBtn(preTag);
        }
    }, 2000);

});
