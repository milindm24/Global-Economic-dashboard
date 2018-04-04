
var data = fetch('header.csv')
.then(response => response.text())
.then(text => {
    console.log(text);
    header = text.split(",");
    console.log(header);
    var row = document.getElementById("myTable").createTHead().insertRow(0);
    for(var i=0;i<header.length;i++){
        row.insertCell(i).innerHTML = header[i];
    }
     document.getElementById('out').innerHTML = viewOutput;

});
  
// viewData = ()=>{
//     console.log(header);
//     var row = document.getElementById("myTable").createTHead().insertRow(0);
//     for(var i=0;i<header.length;i++){
//         row.insertCell(i).innerHTML = header[i];
//     }
//      document.getElementById('out').innerHTML = viewOutput;
//  }

// let i = 0;
//     output = document.getElementById("out");
//     inputNames = Object.keys(fileInput).map((file) => {
//         return fileInput[file].name;
//     });

//     loadMultiple = () =>{  setInterval(() => { //function to retreive and render data in html file
//         let reader = new FileReader();
//         if (i < fileInput.length ) {
//             reader.addEventListener("load", () => {         
//                 outarray.push({ name: fileInput[i].name, data: reader.result });
//                 viewOutput += reader.result;
//                 console.log(outarray);
//                 i++;
//             }, false);
//             reader.readAsBinaryString(fileInput[i]);
//             console.log(fileInput[i].name);
//         }
//         if (i === fileInput.length)
//             clearInterval(loadMultiple);
//     }, 500);
// }
   
//     if (outarray.length > 0){
//      names = outarray.map(({name})=> name );         
//     }
//     console.log(inputNames);
//     if (names.length>0){

//         let matchFound = inputNames.filter((name)=>{
//             return names.includes(name);
//         });
//             if (matchFound.length>0){
//                 output.innerHTML = `${matchFound} already loaded` ;
//             } else {
//                 loadMultiple();
//             }
          
//     }else {
//         loadMultiple();
//     }

// viewData = ()=>{
//     var splitted = viewOutput.split("\n");
//     let splittedChildComma = [];
//     splitted.forEach((splittedChild)=>{
//         splittedChildComma.push(splittedChild.split(","));
//     });
//     console.log(splittedChildComma);
//     var row = document.getElementById("myTable").createTHead().insertRow(0);
//     for(var i=0;i<splittedChildComma[0].length;i++){
//         row.insertCell(i).innerHTML = splittedChildComma[0][i];
//     }
//     // document.getElementById('out').innerHTML = viewOutput;
// }





