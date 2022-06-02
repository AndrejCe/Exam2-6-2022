/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodui:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kiru atveju false 
------------------------------------------------------------------------------------------------------ */


const budgetForTest = 1e9; //value for test
console.log(Movie('Vilnius', 'Neuseda', budgetForTest));
//Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodui:
function Movie(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
    //Metodas: 
    //wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kiru atveju false 
    function wasExpensive() {
        if (budget > 1e8) return true;
        return false
    }
    return wasExpensive();
}