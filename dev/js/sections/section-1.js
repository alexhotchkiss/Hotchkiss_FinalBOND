import {gsap} from "gsap";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin"

gsap.registerPlugin(DrawSVGPlugin);

const section1TL = gsap.timeline();

export function logoAnimaiton(){
    section1TL.from("#logo_stroke #outside",{duration:2, drawSVG: "0%"})
        .from("#logo_stroke #inside",{duration:1, alpha: 0})
        .to("#logo_stroke #inside",{duration:2, drawSVG: "0%"})
        .to("#logo_stroke #outside",{duration:.2, alpha: 0}, "logo")
        .from("#logo", {duration: 1, alpha: 0}, "logo")
        .to("#logo", {duration: .5, alpha: 0})
        .from("#bondlogo #Layer_2", {duration: 1, alpha: 0})
        .to("#bondlogo", {duration:1, scale: .2, y:-240})
        .from("#Left-tab", {duration: 1, alpha: 0, x: 80}, "tab")
        .to("#Left-tab", {duration: 1, x: -450}, "tab")
        .from("#Right-tab", {duration: 1, alpha: 0, x: -400}, "tab")
        .to("#Right-tab", {duration: 1, x: 450}, "tab")
        .from("#time", {duration: 1, alpha: 0})
        .from("#MPH", {duration: 2, alpha: 0}, "dial")
        .from("#rpm", {duration: 2, alpha: 0}, "dial")
        .from("#mph-gauge", {duration: 2, alpha: 0}, "dial")
        .from("#mph-gauge #fillLine", {duration: 2, x: -300}, "dial")
        .from("#gasgauge", {duration: 1, alpha: 0})
        .from("#rpmTag", {duration: 2, alpha: 0})
        .from("#speedTag", {duration: 2, alpha: 0})
        .from("#icon_holder", {duration: 1, alpha: 0})
        .from("#icon1", {duration: 2, alpha: 0}, "icons")
        .to("#icon1", {duration: .5, alpha: .7}, "iconsp2")
        .from("#icon2", {duration: 2, alpha: 0}, "icons")
        .to("#icon2", {duration: .5, alpha: .7}, "iconsp2")
        .from("#icon3", {duration: 2, alpha: 0}, "icons")
        .to("#icon3", {duration: .5, alpha: .7}, "iconsp2")
        .from("#icon4", {duration: 2, alpha: 0}, "icons")
        .to("#icon4", {duration: .5, alpha: .7}, "iconsp2")
        .from("#weather", {duration: 1, alpha: 0}, "apps")
        .from("#music", {duration: 1, alpha: 0}, "apps")
        .from("#gps", {duration: 1, alpha: 0}, "apps")
        .from("#seats", {duration: 1, alpha: 0}, "apps")
        .from("#seatlines", {duration: 1, alpha: 0}, "apps")
        .from("#icons", {duration: 3, alpha: 0, x: -200}, "weatherapp")
        .from("#top_weather", {duration: 3, alpha: 0, x: -200}, "weatherapp")
        .from("#sun-cloud", {duration: 3, alpha: 0, x: -200}, "weatherapp")
        .from("#degrees", {duration: 3, alpha: 0, x: -200}, "weatherapp")
        .from("#weather-text", {duration: 3, alpha: 0, x: -200}, "weatherapp")

        .from("#sun_rays", {duration: 2, alpha: 0})

        .to("#sun_rays", {duration: 2, alpha:0, x:-200}, "weatherclose")

        .to("#icons", {duration: 2, alpha: 0, x: -200}, "weatherclose")
        .to("#top_weather", {duration: 2, alpha: 0, x: -200}, "weatherclose")
        .to("#sun-cloud", {duration: 2, alpha: 0, x: -200}, "weatherclose")
        .to("#degrees", {duration: 2, alpha: 0, x: -200}, "weatherclose")
        .to("#weather-text", {duration: 2, alpha: 0, x: -200}, "weatherclose")


        .from("#icons_music", {duration: 3, alpha: 0, x: -200}, "musicapp")
        .from("#music_top", {duration: 3, alpha: 0, x: -200}, "musicapp")
        .from("#img", {duration: 3, alpha: 0, x: -200}, "musicapp")
        .from("#playbar", {duration: 3, alpha: 0, x: -200}, "musicapp")
        .from("#play-pause", {duration: 3, alpha: 0, x: -200}, "musicapp")
        .to("#playbar #dot", {duration: 5, x:120})


        .to("#icons_music", {duration: 2, alpha: 0, x: -200}, "musicclose")
        .to("#music_top", {duration: 2, alpha: 0, x: -200}, "musicclose")
        .to("#img", {duration: 2, alpha: 0, x: -200}, "musicclose")
        .to("#playbar", {duration: 2, alpha: 0, x: -200}, "musicclose")
        .to("#play-pause", {duration: 2, alpha: 0, x: -200}, "musicclose")


        .from("#icons_gps", {duration: 3, alpha: 0, x: -200}, "gpsapp")
        .from("#gps-top", {duration: 3, alpha: 0, x: -200}, "gpsapp")
        .from("#buildings", {duration: 3, alpha: 0, x: -200}, "gpsapp")
        .from("#gpsClipPath", {duration: 3, alpha: 0, x: -200}, "gpsapp")
        .from("#gpsClipPath #line", {duration: 5, y: 240}, "movement")
        .from("#dot2", {duration: 3, alpha: 0, x: -200}, "gpsapp")
        .to("#dot2", {duration: 6, y: -240}, "movement" )
        // .from("#play-pause", {duration: 3, alpha: 0, x: -200}, "gspapp")

        .to("#icons_gps", {duration: 2, alpha: 0, x: -200}, "gpsclose")
        .to("#gps-top", {duration: 2, alpha: 0, x: -200}, "gpsclose")
        .to("#buildings", {duration: 2, alpha: 0, x: -200}, "gpsclose")
        .to("#gpsClipPath", {duration: 1, alpha: 0, x: -200}, "gpsclose")
        .to("#gpsClipPath #line", {duration: 1, alpha: 0}, "gpsclose")
        .to("#dot2", {duration: 1, alpha: 0}, "gpsclose")
        .to("#dot2", {duration: 1, alpha: 0}, "gpsclose")
        // .to("#playbar", {duration: 2, alpha: 0, x: -200}, "gpsclose")
        // .to("#play-pause", {duration: 2, alpha: 0, x: -200}, "gpsclose")

        .to("#time", {duration: 1, alpha: 0}, "dialclose")
        .to("#MPH", {duration: 1, alpha: 0}, "dialclose")
        .to("#rpm", {duration: 1, alpha: 0}, "dialclose")
        .to("#gasgauge", {duration: 1, alpha: 0}, "dialclose")
        .to("#speedTag", {duration: 1, alpha: 0}, "dialclose")
        .to("#rpmTag", {duration: 1, alpha: 0}, "dialclose")
        .to("#icon_holder", {duration: 1, alpha: 0}, "iconclose")
        .to("#icon1", {duration: 2, alpha: 0}, "iconclose")
        .to("#icon2", {duration: 2, alpha: 0}, "iconclose")
        .to("#icon3", {duration: 2, alpha: 0}, "iconclose")
        .to("#icon4", {duration: 2, alpha: 0}, "iconclose")
        .to("#weather", {duration: 1, alpha: 0}, "iconclose")
        .to("#music", {duration: 1, alpha: 0}, "iconclose")
        .to("#gps", {duration: 1, alpha: 0}, "iconclose")
        .to("#seats", {duration: 1, alpha: 0}, "iconclose")
        .to("#seatlines", {duration: 1, alpha: 0}, "iconclose")

        .to("#Left-tab", {duration: 1, x: 225, alpha: 0}, "tabclose")
        .to("#Right-tab", {duration: 1, x: -225, alpha: 0}, "tabclose")

        .to("#bondlogo", {duration: 1.5, scale: 1, y: 0})
        .to("#bondlogo", {duration: 2, alpha: 0});






    return section1TL;

    
}

