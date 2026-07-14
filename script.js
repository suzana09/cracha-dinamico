const inputNome = document.querySelector("#inputNome");
const inputCargo = document.querySelector("#inputCargo");
const selecionarCor = document.querySelector("#selecionarCor");

const cardNome = document.querySelector("#cardNome");
const cardCargo = document.querySelector("#cardCargo");

const banner = document.querySelector("#banner");


// Alterar nome em tempo real

inputNome.addEventListener("input", function(){

    cardNome.textContent = inputNome.value || "Nome Padrão";

});


// Alterar cargo em tempo real

inputCargo.addEventListener("input", function(){

    cardCargo.textContent = inputCargo.value || "Cargo Padrão";

});


// Alterar cor do banner

selecionarCor.addEventListener("change", function(){


    banner.classList.remove(
        "bg-blue-500",
        "bg-green-500",
        "bg-purple-500"
    );


    if(selecionarCor.value === "blue"){

        banner.classList.add("bg-blue-500");

    }


    else if(selecionarCor.value === "green"){

        banner.classList.add("bg-green-500");

    }


    else if(selecionarCor.value === "purple"){

        banner.classList.add("bg-purple-500");

    }


});
