/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
var counterVal = 0;
document.querySelector("#btn__element").onclick = function() {

    document.getElementById("btn__state").innerHTML = counterVal;
    counterVal = counterVal + 1;
}