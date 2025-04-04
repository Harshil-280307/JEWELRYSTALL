let HomeHeader = document.getElementById("HomeHeader");
// let show = document.getElementById("show");
// let showPlace = document.getElementById("showPlace");
let addedItems = document.getElementById("addedItems");


HomeHeader.addEventListener("click", () => {
    window.open("index.html","_self");
})


// all add to cart buttons

let B7JPG = document.getElementById("B7JPG");
let B15JPG = document.getElementById("B15JPG");
let B2JPG = document.getElementById("B2JPG");
let B13JPG = document.getElementById("B13JPG");
let B9JPG = document.getElementById("B9JPG");
let B6JPG = document.getElementById("B6JPG");
let B3JPG = document.getElementById("B3JPG");
let B8JPG = document.getElementById("B8JPG");
let B5JPG = document.getElementById("B5JPG");
let B1JPG = document.getElementById("B1JPG");
let B10JPG = document.getElementById("B10JPG");
let B19JPG = document.getElementById("B19JPG");



B7JPG.addEventListener("click", () => {
    let tempDiv = document.createElement("div");
    tempDiv.innerHTML = _7JPG;
    addedItems.appendChild(tempDiv.firstElementChild); // Append the actual HTML inside the string
});

// B15JPG.addEventListener("click", () => {
//     let tempDiv = document.createElement("div");
//     tempDiv.innerHTML = _7JPG;
//     addedItems.appendChild(tempDiv.firstElementChild); // Append the actual HTML inside the string
// });



// const itemMap = {
//     B7JPG: _7JPG,
//     B15JPG: _15JPG,
//     B2JPG: _2JPG,
//     B13JPG: _13JPG,
//     B9JPG: _9JPG,
//     B6JPG: _6JPG,
//     B3JPG: _3JPG,
//     B8JPG: _8JPG,
//     B5JPG: _5JPG,
//     B1JPG: _1JPG,
//     B10JPG: _10JPG,
//     B19JPG: _19JPG,
// };

// for (let id in itemMap) {
//     document.getElementById(id).addEventListener("click", () => {
//         let tempDiv = document.createElement("div");
//         tempDiv.innerHTML = itemMap[id];
//         addedItems.appendChild(tempDiv.firstElementChild);
//     });
// }



// show.addEventListener("click", () => {
//     let tempDiv = document.createElement("div");
//     tempDiv.innerHTML = _7JPG;
//     addedItems.appendChild(tempDiv.firstElementChild); // Append the actual HTML inside the string
// });


