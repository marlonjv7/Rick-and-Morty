const targetas = (array, conte)=>{
   array.forEach(element => {
       const {name, status, species, gender, image}= element;

       conte.innerHTML +=`
       <div class="targetas">
            <img src="${image}" alt="">
            <div class="detalleTarge">
                <section class="title">
                    <h1>${name}</h1>
                    <p>${status} - ${species}sp</p>
                </section>
                <section class="location">
                    <h4>Last known location:</h4>
                    <h3>Earth (Replacement Dimension)</h3>
                </section>
                <section class="location">
                    <h4>First seen in:</h4>
                    <h3>${gender}</h3>
                </section>
            </div>
        </div>
       `
   });
}

export default targetas;