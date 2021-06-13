const body = document.body;
body.style.backgroundColor="#6ae04c";


//Getting elements by classnames
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
    bottons[i].style.fontWeight='bold';
    bottons[i].style.color = 'orange';
}

//Getting elements by tag names 
// let images = body.getElementsByTagName("img");
// for ( let i =0; i < images.length; i++){
//     images[i].style.display = 'none';
// }

//Getting elements by quarySelectionAll
let paragraphs = body.querySelectorAll('p');
for(let i=0; i<paragraphs.length; i++){
    paragraphs[i].style.fontWeight = 'bold';
    paragraphs[i].style.color = 'gray';
}

let projnums= body.querySelectorAll('.user-follow-info');
for(let i=0; i<projnums.length; i++){
    projnums[i].style.color='orange';
}