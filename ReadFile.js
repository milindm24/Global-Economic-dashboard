// var outarray = []; //Declaring Array to store data from input CSV files
// var fileInput;     //Variable to retrieve data from files
// var names = [];
// var inputNames = [];
// var viewOutput = "";
// var output = document.getElementById("out"); //Variable to show output data


onAddFiles = () => {

    
    fileInput = document.getElementById("csv").files;
    let i = 0;
    output = document.getElementById("out");
    inputNames = Object.keys(fileInput).map((file) => {
        return fileInput[file].name;
    });

    loadMultiple = () =>{  setInterval(() => { //function to retreive and render data in html file
        let reader = new FileReader();
        if (i < fileInput.length ) {
            reader.addEventListener("load", () => {         
                outarray.push({ name: fileInput[i].name, data: reader.result });
                viewOutput += reader.result;
                console.log(outarray);
                i++;
            }, false);
            reader.readAsBinaryString(fileInput[i]);
            console.log(fileInput[i].name);
        }
        if (i === fileInput.length)
            clearInterval(loadMultiple);
    }, 500);
}
   
    if (outarray.length > 0){
     names = outarray.map(({name})=> name );         
    }
    console.log(inputNames);
    if (names.length>0){

        let matchFound = inputNames.filter((name)=>{
            return names.includes(name);
        });
            if (matchFound.length>0){
                output.innerHTML = `${matchFound} already loaded` ;
            } else {
                loadMultiple();
            }
          
    }else {
        loadMultiple();
    }      
}


viewData = ()=>{
    var splitted = viewOutput.split("\n");
    let splittedChildComma = [];
    console.log(count);
    splitted.forEach((splittedChild)=>{
        splittedChildComma.push(splittedChild.split(","));
    });
    console.log(splittedChildComma);
    for (var j=0; j<splittedChildComma.length;j++){
    var count = document.getElementById("myTable").rows.length;        
    var row = document.getElementById("myTable").createTHead().insertRow(count);
    for(var i=0;i<splittedChildComma[0].length;i++){
         row.insertCell(i).innerHTML = splittedChildComma[j][i];
    }
}
    // document.getElementById('out').innerHTML = viewOutput;
}





