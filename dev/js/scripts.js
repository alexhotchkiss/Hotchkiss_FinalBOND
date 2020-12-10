import {gsap} from "gsap";
import {GSDevTools} from "gsap/GSDevTools";

var audio = document.getElementById("audio");

playMusic();

function playMusic(){
    audio.play();
}

gsap.registerPlugin(GSDevTools);

import { logoAnimaiton } from "./sections/section-1.js"
import { speedCounter } from "./sections/section-2.js";
console.log(speedCounter);
import { rpmCounter } from "./sections/section-3.js";
console.log(rpmCounter);

const mainTL = gsap.timeline();
mainTL.add(logoAnimaiton); 
mainTL.add(speedCounter);

GSDevTools.create();