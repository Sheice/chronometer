// get variables

const hours = document.getElementById('hours');
const minuts = document.getElementById('minuts');
const seconds = document.getElementById('seconds');

const resett = document.getElementById('resett');
const startt = document.getElementById('startt');
const stopp = document.getElementById('stopp');

// start the chronometer


let h = 0;
let m = 0;
let s = 0;

const go = () => {
    s++;

    
    if(s >= 60) {
        m++
        s=0
        
        if(m >=60){
            h++
            m=0

            if(h < 10){
                h = "0" + h;
            }
        }

        if(m < 10){
            m = "0" + m;
        }



    }
    
    if(s < 10){
        s = "0" + s;
    }


    

    
    
    
    
    seconds.textContent = s
    if(m==0){minuts.textContent = "0" + m;}else{minuts.textContent = m;}
    if(h==0){hours.textContent = "0" + h}else{hours.textContent = h; }
   
   

    
}

const startC = ()=>{
    start = setInterval(go , 1000);
}

const stopC = ()=>{
    clearInterval(start);
}

const resetC = ()=>{
    clearInterval(start);
    s = 0;
    m = 0;
    h = 0;

    seconds.textContent ="0"+ s;
    minuts.textContent = "0" + m;
    hours.textContent ="0" + h;
}



startt.addEventListener('click', startC);
stopp.addEventListener('click', stopC);
resett.addEventListener('click', resetC);




