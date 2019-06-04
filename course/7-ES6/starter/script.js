const boxes = document.querySelectorAll('.box');


const boxersArr = Array.from(boxes);

boxersArr.forEach(cur => 
    cur.style.backgroundcolor ="red")