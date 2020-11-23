import {gsap} from "gsap";
import {GSDevTools} from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

import { logoAnimaiton } from "./sections/section-1.js"

const mainTL = gsap.timeline();
mainTL.add(logoAnimaiton); 

GSDevTools.create();