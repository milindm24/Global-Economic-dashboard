var outarray = []; //Declaring Array to store data from input CSV files
var fileInput;     //Variable to retrieve data from files

onAddFiles = () => {

    fileInput = document.getElementById("csv").files;
    let output = document.getElementById('out'); //Variable to show output data
    let i = 0; //files counter

    loadMultiple = setInterval(() => { //function to retreive and render data in html file
        let reader = new FileReader();
        if (i < fileInput.length) {
            reader.addEventListener("load", () => {
                outarray.push({ name: fileInput[i].name, data: reader.result });
                output.innerHTML += reader.result;
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

