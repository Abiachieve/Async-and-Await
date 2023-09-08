// const res = fetch("https://restcountries.com/v2/all")
// res.then((data)=>data.json()).then((data1)=>{
//     for (var i=0;i<data1.length;i++){
//         console.log(data1[i].name);
//     }
// })

//Display webpage to html from console
// const res = fetch("https://restcountries.com/v2/all")
// res.then((data)=>data.json()).then((data1)=>{
//     for(let i=0;i<data1.length;i++){
//         const div=document.createElement("div");
//         div.innerHTML=`${data1[i].name}`;
//         document.body.append(div);
//     }
// });

// const res = fetch("https://restcountries.com/v2/all");
// res
//   .then((data) => data.json())
//   .then((data1) => {
//     for (var i = 0; i < data1.length; i++) {
//       //console.log(data1[i])
//       const div = document.createElement("div");
//       div.innerHTML = `<div class="row row-cols-1 row-cols-md-3 ">
//         <div class="col">
//           <div class="card">
//             <img src="${data1[i].flag}" class="card-img-top" alt="country-flag">
//             <div class="card-body">
//               <h5 class="card-title">${data1[i].name}</h5>
//               <p class="card-text"><b><i>Capital: ${data1[i].capital}</i></b></p>
//               <p class="card-text"><b><i>Region: ${data1[i].region}</b></p>
//               <p class="card-text"><b><i>SubRegion: ${data1[i].subregion}</i></b></p>
//               <p class="card-text"><b><i>Population: ${data1[i].population}</i></b></p>
//             </div>
//           </div>
//         </div>
//         </div>`;
//       document.body.append(div);
//     }
//   });

//!async-await
//  async function foo(){
//         const res =  await fetch("https://restcountries.com/v2/all")
//         const result = await res.json();
//         console.log(result)
//  }
//  foo();
 
 //!Error Handling
 async function foo(){
 try {
    const res =  await fetch("https://restcountries.com/v2/all")
    const result = await res.json();
    console.log(result)
} catch (error) {
    console.log(error)
 }
}
foo();