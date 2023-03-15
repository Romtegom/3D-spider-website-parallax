const canvas = document.querySelector(".canvas");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext("2d");
const frameCount = 96;

const currentFrame = (index) => `./Spider/${(index + 1).toString()}.png`;
const images = [];
let spider = {frame : 0}; 

for (let i=0 ; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    images.push(img);
}

gsap.to(spider, {
    frame: frameCount -1,
    snap: 'frame',
    ease: "none",
    scrollTrigger: {
        scrub: true,
        pin: "canvas",
        end: "500%",
    },
    onUpdate: render,
});

gsap.fromTo(
    ".spider-text", {opacity: 0}, {opacity : 1, scrollTrigger: {
    scrub: true,
    start: "40%",
    end : "60%",
}});

images[0].onload = render;

function render(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(images[spider.frame], 0, 0);
}