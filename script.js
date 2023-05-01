let counter=[];
slides = document.querySelectorAll('.time');
console.log(slides)

//function to convert milliseconds into array time
function converter(ms){
    let t=[];
    t.push(Math.floor(ms/6000000)%100);
    t.push(Math.floor(ms/60000)%60);
    t.push(Math.floor(ms/1000)%60);
    t.push(Math.floor(ms/10)%100);
    return t;
}

//function used to update the counters value to the string
function update(){
    slides.forEach(
        (slide,index) => {
            slide.innerHTML = `<div class="b">${counter[index]}</div>`;
        }
    )
}

let myInterval,x1=0,x2,x3=0,total;
let m,countx=0;
//setting initial state of the clock with reference to last time when tab was opened
updtList() //setting list state
if(localStorage.getItem('StpwatchTtime')==null){
    ItemJsonArray = [0,0,0];
    localStorage.setItem('StpwatchTtime', JSON.stringify(ItemJsonArray))
}
ItemJsonArrayStr = localStorage.getItem('StpwatchTtime');
ItemJsonArray = JSON.parse(ItemJsonArrayStr);
total = ItemJsonArray[0];
m = ItemJsonArray[1];
if(m==1){
    ItemJsonArrayStr2 = localStorage.lastTime;
    x1 = Date.parse(ItemJsonArrayStr2);
    start();
}
else{
    let a;
    a = converter(total);
    counter[1]= a[0]%10;
    counter[0]=  Math.floor(a[0]/10)%10;
    counter[3]= a[1]%10;
    counter[2]=  Math.floor(a[1]/10)%10;
    counter[5]= a[2]%10;
    counter[4]=  Math.floor(a[2]/10)%10;
    counter[7]= a[3]%10;
    counter[6]=  Math.floor(a[3]/10)%10;
    update();
}
//setting the initial state of the blue dot
// ItemJsonArrayStr2 = localStorage.lastTime;
// x1 = Date.parse(ItemJsonArrayStr2);
// x3= new Date();
// crcl3 = document.querySelector(".ck3")
// crcl3.style.setProperty('transform', `rotate(${((total+(x3-x1))/1000)*6}deg)`);



//fuction used for start stop button
function strstp(){
    if(m==0){
        x1 = new Date();
        localStorage.setItem('lastTime',x1)
        start();
        m=1;
        bt1 = document.querySelector('.btn1')
        bt1.innerHTML = `<i class="fa-solid fa-pause fa-xl" style="color: #ffffff;"></i>`;
        bt2 = document.querySelectorAll('.btn2')
        bt2[0].innerHTML = `<i class="fa-sharp fa-solid fa-clock-rotate-left fa-xl" style="color: #4a4a4a;"></i>`
        bt2[1].innerHTML = `<i class="fa-solid fa-flag fa-xl" style="color: #ffffff;">`
    }
    else{
        total += x3-x1;
        clearInterval(myInterval);
        m=0;
        bt1 = document.querySelector('.btn1')
        bt1.innerHTML = `<i class="fa-solid fa-play fa-xl" style="color: #ffffff;"></i>`;
        bt2 = document.querySelectorAll('.btn2')
        bt2[0].innerHTML = `<i class="fa-sharp fa-solid fa-clock-rotate-left fa-xl" style="color: #ffffff;"></i>`
        bt2[1].innerHTML = `<i class="fa-solid fa-flag fa-xl" style="color: #4a4a4a;">`
    }
    ItemJsonArray=[total, m];
    localStorage.setItem('StpwatchTtime', JSON.stringify(ItemJsonArray))
}
//setting blue dot

function  name1 () {
    crcl3 = document.querySelector(".ck3")
    x3 = new Date();
    let a;
    a = converter(total+(x3-x1));
    counter[1]= a[0]%10;
    counter[0]=  Math.floor(a[0]/10)%10;
    counter[3]= a[1]%10;
    counter[2]=  Math.floor(a[1]/10)%10;
    counter[5]= a[2]%10;
    counter[4]=  Math.floor(a[2]/10)%10;
    counter[7]= a[3]%10;
    counter[6]=  Math.floor(a[3]/10)%10;
    update();

    crcl3.style.setProperty('transform', `rotate(${((total+(x3-x1))/1000)*6}deg)`);

    crcl2s = document.querySelectorAll(".ck2")
    for(let i=0;i<=Math.floor((total+(x3-x1))/1000)%60;i++){
        crcl2s[i].style.setProperty('background', `rgb(0, 106, 255)`);
        for(let j=i;j>=0 && j>=i-8;j--){
            crcl2s[j].style.setProperty('box-shadow','0px 0px 2px rgb(0, 106, 255)');
            // crcl2s[j].style.setProperty('heigth','1vw');
            // crcl2s[j].style.setProperty('width','1vw');
            // crcl2s[j].style.setProperty('transform-origin','0.5vw 80%');
            // crcl2s[j].classList.add('ck4')
            // crcl2s[j].style.scale = `2`
            // crcl2s[j].style.setProperty('top','26.5%')
            // crcl2s[j].style.setProperty('left','50%')
            // crcl2s[j].style.setProperty('transform-origin','0vw 4700%')

        }
    }
    for(let i=Math.floor((total+(x3-x1))/1000)%60+1; i<60;i++){
        crcl2s[i].style.setProperty('background', `white`);
    }
    // crcl2s.forEach((element,index) => {
    // // element.style.transform = "rotateZ(" + index*6 + "deg)";
    
    // });
}
function start(){
    myInterval=setInterval(name1,10);
}

//function called to reset clock
function reset(){
    if(m==0){
        counter = [0,0,0,0,0,0,0,0];
        total = 0;
        update();
        ItemJsonArray = [total,0];
        localStorage.setItem('StpwatchTtime', JSON.stringify(ItemJsonArray));

        //resetting list
        ItemJsonArray3 = [];
        localStorage.setItem('timeList', JSON.stringify(ItemJsonArray3))
        updtList()
        // tbl.setAttribute('class','tb')
        crcl3 = document.querySelector(".ck3")
        crcl3.style.setProperty('transform', `rotate( 0deg)`);

        crcl2s = document.querySelectorAll(".ck2")
        crcl2s.forEach((element) => {
            // element.style.transform = "rotateZ(" + index*6 + "deg)";
            element.style.setProperty('background-color', `white`);
        });
        bt2 = document.querySelectorAll('.btn2')
        bt2[0].innerHTML = `<i class="fa-sharp fa-solid fa-clock-rotate-left fa-xl" style="color: #4a4a4a;"></i>`
        bt2[1].innerHTML = `<i class="fa-solid fa-flag fa-xl" style="color: #4a4a4a;">`
    }
}



// to store the time
function updtList(){
    if(localStorage.getItem('timeList')!=null){
        if(JSON.parse(localStorage.getItem('timeList')).length == 0)
            tbl.setAttribute('class','tb') //to keep the tabel invisible
        else
            tbl.setAttribute('class','visible') //to make table visible
        let str="",str2="";
        tableBody = document.getElementById('tbody')
        ItemJsonArrayStr3 = localStorage.getItem('timeList');
        ItemJsonArray3 = JSON.parse(ItemJsonArrayStr3);
        if(ItemJsonArray3 != null){
            let c = 0;
            ItemJsonArray3.forEach((element,index)=>{
                t1 = converter(element-c);
                t2 = converter(element);
                c = element;
                str2=str
                str = `
                <div class="row">
                  <div class="c1">${index+1}</div>
                  <div class="c2">+${Math.floor(t1[0]/10)%10}${t1[0]%10}:${Math.floor(t1[1]/10)%10}${t1[1]%10}:${Math.floor(t1[2]/10)%10}${t1[2]%10}.${Math.floor(t1[3]/10)%10}${t1[3]%10}</div>
                  <div class="c2">${Math.floor(t2[0]/10)%10}${t2[0]%10}:${Math.floor(t2[1]/10)%10}${t2[1]%10}:${Math.floor(t2[2]/10)%10}${t2[2]%10}.${Math.floor(t2[3]/10)%10}${t2[3]%10}</div>
                </div>
                `
                str+=str2
            })
            tableBody.innerHTML = str;
        }
    }
}
function addlist(){
    if(m==1){
        // x4 = new Date();
        // if(localStorage.getItem('LastAddListTime')==null)
        //     localStorage.setItem('LastAddListTime',x4)

        // x5 = Date.parse(localStorage.getItem('LastAddListTime'))

        if(localStorage.getItem('timeList')==null){
            ItemJsonArray3 = [];
            ItemJsonArray3.push(total+(x3-x1))
            localStorage.setItem('timeList', JSON.stringify(ItemJsonArray3))
        }
        else{
            ItemJsonArrayStr3 = localStorage.getItem('timeList');
            ItemJsonArray3 = JSON.parse(ItemJsonArrayStr3);
            ItemJsonArray3.push(total+(x3-x1));
            localStorage.setItem('timeList',JSON.stringify(ItemJsonArray3));
        }
        // localStorage.setItem('LastAddListTime',x4)
        //add elements to the table
        updtList()
    }
}


//setting blue dot
crcl3 = document.getElementsByClassName("ck3")
