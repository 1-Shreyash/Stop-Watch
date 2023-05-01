crcl1 = document.querySelector(".ck1")
// crcl2 = document.querySelectorAll(".c2")
str = ""
for(let i=0;i<60;i++){
    str +=`<div class="ck2"></div>`;
}
str +=`<div class="ck3"></div>`;
crcl1.innerHTML += str;
crcl2s = document.querySelectorAll(".ck2")
crcl2s.forEach((element,index) => {
    // element.style.transform = "rotateZ(" + index*6 + "deg)";
    element.style.setProperty('transform', `rotate(${6*index}deg)`);
});
