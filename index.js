const body = document.body;
body.style.backgroundColor="#6ae04c";
console.log(body.title)
// console.log(document.doctype)
console.log(document.all[6])


//Print out all the box-titles. 
let titles = body.getElementsByClassName("box-title");
for(let i =0; i<titles.length; i++){
    titles[i].style.color="blue";
}

let boxes = body.getElementsByClassName("box");
for(let i =0; i<titles.length; i++){
    boxes[i].style.textAlign='center';
}

let bottons = body.getElementsByClassName("button");
for(let i =0; i<titles.length; i++){
    bottons[i].style.backgroundColor = '#21debe';
}

//Print out all the descriptions
let descriptions = body.getElementsByTagName("img");
for ( let i =0; i < descriptions.length; i++){
    // descriptions[i].style.display = 'none';
}