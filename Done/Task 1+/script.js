/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiama
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
document.querySelector('form').addEventListener('submit', myFunction);


function myFunction(andre) {
    andre.preventDefault();
    // var pwd = document.querySelector('#input-pwd');
    const calcInput = document.querySelector('#search').value;
    // 1. Svarus (lb) | Formulė: lb = kg * 2.2046
    const SvarusLb = calcInput * 2.2046;
    //2. Gramus (g) | Formulė: g = kg / 0.0010000
    const GramusG = calcInput / 0.0010000;
    //3. Uncijos (oz) | Formul4: oz = kg * 35.274
    const UncijosOz = calcInput * 35.274;
    document.querySelector('#output').textContent = SvarusLb;
    document.querySelector('#output').textContent = GramusG;
    document.querySelector('#output').textContent = UncijosOz;
    // atvaizdavimas turi būti matomas pateikus formą ir pateikiama
    //<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
    document.getElementById("output").style.fontSize = "x-large";
    document.querySelector('#output').style.backgroundColor = "red";

    document.getElementById("output").style.textAlign = "center";
    document.querySelector('#output').innerHTML = 'Svarus (lb)   =   ' + SvarusLb + '   Gramus (g)   =   ' + GramusG + '    Uncijos (oz)   = ' + UncijosOz;

    document.querySelector('#output').style.backgroundColor = "red";

};