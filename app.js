const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


let tlabout = gsap.timeline({
    scrollTrigger: {
        trigger: ".about",
        scrub: true,
        start: "center center",
        end: "bottom+=100px center",
        markers: false,
        pin: '.about',
    }
});
tlabout.to(".about-title h1", {
    backgroundPositionX: "0%",
    // y:"-30px",
    stagger: 1,
})
tlabout.to(".about-title h1",{autoAlpha:0,duration:1})
tlabout.to('.about-img-wrap',{opacity:1,duration:0.5})
tlabout.to(".airplane",{top:"10%",left:"15%",duration:2})
tlabout.to(".truck",{top:"50%",left:"25%",duration:2},"-=2")
tlabout.to(".warehouse",{top:"10%",left:"40%",duration:2},"-=2")
tlabout.to(".ship",{top:"50%",left:"50%",duration:2},"-=2")
tlabout.to(".about-img-wrap",{left:'-5%',duration:1})
tlabout.to(".about-disc",{x:'-100%',duration:1},"-=1")


document.getElementById("service1").onmouseover = function () { mouseOverService1() };
document.getElementById("service1").onmouseout = function () { mouseOutService1() };

function mouseOverService1() {
    document.getElementById("cover1").style.maxHeight = "1000px";
    document.getElementById("arrow1").style.right = '3%';
}

function mouseOutService1() {
    document.getElementById("cover1").style.maxHeight = "0px";
    document.getElementById("arrow1").style.right = '5%';
}

document.getElementById("service2").onmouseover = function () { mouseOverService2() };
document.getElementById("service2").onmouseout = function () { mouseOutService2() };

function mouseOverService2() {
    document.getElementById("cover2").style.maxHeight = "1000px";
    document.getElementById("arrow2").style.right = '3%';
}

function mouseOutService2() {
    document.getElementById("cover2").style.maxHeight = "0px";
    document.getElementById("arrow2").style.right = '5%';
}

document.getElementById("service3").onmouseover = function () { mouseOverService3() };
document.getElementById("service3").onmouseout = function () { mouseOutService3() };

function mouseOverService3() {
    document.getElementById("cover3").style.maxHeight = "1000px";
    document.getElementById("arrow3").style.right = '3%';
}

function mouseOutService3() {
    document.getElementById("cover3").style.maxHeight = "0px";
    document.getElementById("arrow3").style.right = '5%';
}

document.getElementById("service4").onmouseover = function () { mouseOverService4() };
document.getElementById("service4").onmouseout = function () { mouseOutService4() };

function mouseOverService4() {
    document.getElementById("cover4").style.maxHeight = "1000px";
    document.getElementById("arrow4").style.right = '3%';
}

function mouseOutService4() {
    document.getElementById("cover4").style.maxHeight = "0px";
    document.getElementById("arrow4").style.right = '5%';
}