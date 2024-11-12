const $div = document.querySelector(".grid");


fetch("https://hp-api.onrender.com/api/characters").then((respuesta) => respuesta.json()).then((data) => {
 data.forEach((personaje)=>{
    if(personaje.image !== ""){
    $div.innerHTML += 
    `<div class="contain" >
    <div class= "cuadro">
    <img class="img-cuadro" src ="../assets/cuadro-removebg-preview.png" alt="marco de cuadro"/>
    <img class="img-foto"src =" ${personaje.image}" alt="${personaje.name}"/>
    </div>
    <h4>${personaje.name}</h4>
    <p>House: ${personaje.house}</p>
    </div>`
    }
 })
}); 