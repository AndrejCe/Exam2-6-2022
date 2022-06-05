/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
getText(ENDPOINT);

async function getText(file) {
    let myObject = await fetch(file);
    let myText = await myObject.text()
    const obj = JSON.parse(myText);

    for (let i = 0; i < obj.length; i++) {

        const card = obj[i].brand + '  : ' + obj[i].models;
        const para = document.createElement("h2");
        const node = document.createTextNode(card);
        para.appendChild(node);
        document.body.appendChild(para);
        document.querySelector("h2").style.backgroundColor = "red";
        para.style.cssText = `color: blue !important;
        background-color: rgb(232,  100, 0);
        width: 100%;
        text-align: center;
      
    }


}