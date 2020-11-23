import {gsap} from "gsap";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin"

gsap.registerPlugin(DrawSVGPlugin);

const section1TL = gsap.timeline();


export function logoAnimaiton(){
    section1TL.from("#logo_stroke #outside",{duration:1, drawSVG: "0%"})
        .from("#logo_stroke #inside",{duration:1, alpha: 0})
        .to("#logo_stroke #inside",{duration:1, drawSVG: "0%"})
        .to("#logo_stroke #outside",{duration:.1, alpha: 0}, "logo")
        .from("#logo", {duration: 1, alpha: 0}, "logo")
        .to("#logo", {duration: .5, alpha: 0})
        .from("#bondlogo #Layer_2", {duration: 1, alpha: 0})
        .to("#bondlogo", {duration:1, scale: .2, y:-240})
        .from("#Left-tab", {duration: 1, alpha: 0, x: 80}, "tab")
        .to("#Left-tab", {duration: 1, x: -450}, "tab")
        .from("#Right-tab", {duration: 1, alpha: 0, x: -400}, "tab")
        .to("#Right-tab", {duration: 1, x: 450}, "tab")
        .from("#MPH", {duration: 1, alpha: 0});

    return section1TL;
}