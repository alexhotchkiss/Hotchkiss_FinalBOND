import {gsap} from "gsap";
import {GSDevTools} from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

import { logoAnimaiton } from "./sections/section-1.js"
import { speedCounter } from "./sections/section-2.js";
console.log(speedCounter);


const mainTL = gsap.timeline();
mainTL.add(logoAnimaiton); 
mainTL.add(speedCounter);

GSDevTools.create();