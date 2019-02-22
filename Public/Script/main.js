let Location = document.querySelector("#location");
let submit = document.querySelector("#smt");
let output = document.querySelector("#display");

submit.addEventListener("click" , (e) => {
    e.preventDefault();
    let data = Location.value;
    fetch("/api/rakib/?location="+data)
    .then((response) => {
        return response.json();
    })
    .then((res) => {
        if(res === "Error"){
            output.innerHTML = "Please Insert Data"
        }
        for(let i = 0; i < res.length; i++){
            output.innerHTML += `<b>Name: </b>${res[i].name} <p><strong>Field: </strong>${res[i].field}</p> <p><strong>Available: </strong>${res[i].available}</p><br />`
        }
    })
    .catch((err) => {
        output.innerHTML = "OPPS!! Error Occoured :("
    })

    Location.value = "";
    output.innerHTML = "";
})
