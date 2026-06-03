// ================= FORM VALIDATION =================

const form = document.getElementById("farmerForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    // GET VALUES

    const name = document.getElementById("name").value;
    const district = document.getElementById("district").value;
    const farmSize = document.getElementById("farmSize").value;
    const soil = document.getElementById("soil").value;
    const rainfall = document.getElementById("rainfall").value;
    const temperature = document.getElementById("temperature").value;

    const message = document.getElementById("message");

    // VALIDATION

    if(
        name === "" ||
        district === "" ||
        farmSize === "" ||
        soil === "" ||
        rainfall === "" ||
        temperature === ""
    ){

        message.style.color = "red";
        message.innerHTML = "Please fill in all fields.";

    }

    else{

        message.style.color = "green";
        message.innerHTML = "Farmer registered successfully!";

        form.reset();

    }

});