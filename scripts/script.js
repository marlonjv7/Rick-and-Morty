import data from "../helpers/data.js";
import targetas from "../modules/mostrar.js";



const url = 'https://rickandmortyapi.com/api/character';
const contenedor = document.querySelector('.container');

document.addEventListener('DOMContentLoaded', async()=>{
    const targe = await data(url);
    targetas(targe, contenedor);
})