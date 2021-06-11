const body = document.body;
body.style.backgroundColor="#6ae04c";
console.log(body.title)
// console.log(document.doctype)
console.log(document.all[6])


//Print out all the box-titles. 
let titles = body.getElementsByClassName("box-title");
for(let i =0; i<titles.length; i++){
    console.log(titles[i]);
}

//Print out all the descriptions
let descriptions = body.getElementsByClassName("description");
for ( let i =0; i < descriptions.length; i++){
    console.log(descriptions[i]);
}