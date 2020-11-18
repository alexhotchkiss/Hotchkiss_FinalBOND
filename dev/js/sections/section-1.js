import {gsap} from "gsap";

const section1TL = gsap.timeline()

section1TL.from("#logo", {duration: 1, alpha: 0})
        .to("#logo", {duration: .5, alpha: 0})
        .from("#bondlogo", {duration: 1, alpha: 0})
        .to("#container #bondlogo", {duration:1, scale: .2, y:-480});

export function logoAnimaiton(){
    return section1TL;
}