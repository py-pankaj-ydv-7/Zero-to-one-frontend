// // promise

// var ans = new Promise((res, rej)=>{

//     if(true){
//         return res();
//     }
//     else {
//         return rej();
//     }

// })

// ans.then(function(){
//     console.log("resolve ho gaya tha ");
    
// })

// .catch(function(){
//     console.log("resolve nahi hua tha ");
    
// })



/**** question :=> user will ask for a number between 0 se 9 and if the number below 5 resove if not reject*/

// var ans = new Promise((res,rej)=>{
//     Math.floor(Math.random()*10);
//     if(n<5){
//         return res();
//     }
//     else{
//         return rej();
//     }
// })
// ans.then(function(){
//     console.log("below");
    
// })
// .catch(function(){
//     console.log("above");
    
// })

// sabse pahle ghar par aao .
// gate kholo aur gate lagao.
// khana pakao kahana khao.
// incognito mode chalao.
// sojao kyuki tum thak gaye ho.

var ans = new Promise(function(res,rej){
    return res("sabse pahle ghar par aao")
})
var p2 = ans.then(function(data){
    console.log(data);
    new Promise(function(res,rej){
        return res("gate kholo aur gate lagao");
    });
})

var p3 = p2.then(function(data){
    console.log(data)
    return new Promise(function(res,rej){
        return res("khana pakao khana khaoo")
    })
})

p3.then(function(data){
    console.log(data);
    
})