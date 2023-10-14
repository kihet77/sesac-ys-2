// function call(name) {
//     return new Promise(function (resolve, reject){
//         setTimeout(function (){
//             console.log(name);
//             resolve(name);
//         }, 1000);
//     })
// }

// function back() {
//     return new Promise(function (resolve, reject){
//         setTimeout(function (){
//             console.log('back');
//             resolve('back');
//         }, 1000);
//     })
// }

// function hell() {
//     return new Promise(function (resolve, reject){
//         setTimeout(function (){
//             resolve("promise");
//         }, 1000);
//     })
// }


// call("Han", function(name){
//     console.log(name + "반가워")
//     back(function (txt){
//         console.log(txt + "을 실했했구나")
//         hell(function (message) {
//             console.log("여기는" + message)
//         })
//     })
// })

//-----------------------------------------------------------

// call("kiseon")
//     .then(function (name) {
//         console.log( name + "반가워")
//        return back()
//     })
//     .then(function (back) {
//         console.log(back + "을 실행했구나")
//         return hell()
//     })
//     .then(function (promise){
//         console.log ("여기는" + promise + "실습이야")
//     })

//-------------------------------------------------------------

// async function exec(){
//     let name = await call("kiseon");
//     console.log(name +"반가워" );
//     let play = await back();
//     console.log(play + "을 실행했구나");
//     let helll = await hell();
//     console.log(helll + "을 활용한 Asyne, Await 실습야")

// };

// exec()

let backColor = document.body.style.backgroundColor

setTimeout(function(){
    backColor = 'red'
},1000)