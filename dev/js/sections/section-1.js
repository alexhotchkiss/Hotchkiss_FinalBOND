import {gsap} from "gsap";

const section1TL = gsap.timeline()

section1TL.from("#logo #Layer_2", {duration: 1, alpha: 0})
        .to("#logo #Layer_2", {duration: .5, alpha: 0})
        .from("#bondlogo #Layer_2", {duration: 1, alpha: 0})
        .to("#bondlogo #Layer_2", {duration:1, scale: .2, y:-340});

export function logoAnimaiton(){
    return section1TL;
}