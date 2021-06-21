console.log("index.js file");
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");
canvas.addEventListener("mousedown",(e)=>{
    e.target.addEventListener("mousemove",mousemoveEvent)
    e.target.addEventListener("mouseup",mouseupEvent);

})
function mousemoveEvent(e){
    context.beginPath();
    context.moveTo(e.clientX-20,e.clientY-30);
    context.lineTo(e.clientX,e.clientY);
    context.stroke();
}
function mouseupEvent(e){
   e.target.removeEventListener("mousemove",mousemoveEvent);

}
