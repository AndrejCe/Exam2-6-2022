/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
2. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
3. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';




const element = document.getElementById("btn");
element.addEventListener("click", myFunction1);


function myFunction1() {
    getText(ENDPOINT);
    let text = document.getElementById("message").innerText;
    document.getElementById("message").innerText = null;
    element.remove();
    async function getText(file) {
        let myObject = await fetch(file);
        let myText = await myObject.text()
        const obj = JSON.parse(myText);

        for (let i = 0; i < obj.length; i++) {
            //
            // Create an "li" node:
            const node = document.createElement("li");

            // Create a text node:
            const textnode = document.createTextNode(obj[i].login);

            // Append the text node to the "li" node:
            node.appendChild(textnode);

            // Append the "li" node to the list:
            document.getElementById("output").appendChild(node);



            //
            var img = document.createElement("img");

            img.src = obj[i].avatar_url;
            var src = document.getElementById("output");

            src.appendChild(img);
            document.getElementById("output").style.backgroundColor = "green";
            document.getElementById("output").style.fontSize = "x-large";
            document.getElementById("output").style.alignContent = "space-between";
            document.getElementById("output").style.border = "thick solid #0000FF";
            document.getElementById("output").style.borderRadius = "100px";
        }
    }
}