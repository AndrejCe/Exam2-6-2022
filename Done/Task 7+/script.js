/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją showObjectKeys, kuri kaip argumentą priims objektą 
ir grąžins visus jo "value" masyve.
-------------------------------------------------------------------------- */
const audi = {
    make: 'audi',
    model: 'A6',
    year: 2005,
    color: 'white',
};
showObjectKeys(audi);
//funkciją showObjectKeys, kuri kaip argumentą priims objektą 
//ir grąžins visus jo "value" masyve.
function showObjectKeys(audi) {
    return Object.keys(audi);
};