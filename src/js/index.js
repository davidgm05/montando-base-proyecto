import '../scss/style.scss';

// export class Movie {
//     #title;
//     #description;
//     #year;
//     #rating;

//     constructor(title, description, year, rating){
//         this.#title = title;
//         this.#description = description;
//         this.#year = year;
//         this.#rating = rating;
//     }

//     getMovieData() {
//         return {
//             title: this.#title,
//             description: this.#description,
//             year: this.#year,
//             rating: this.#rating,
//         };
//     }

//     isClasic(){
//         if(this.#year <= 1980){
//             return true;
//         } else{
//             return false;
//         }

//     }

//     isGood() {
//         if(this.#rating >= 8){
//             return true;
//         } else{
//             return false;
//         }
//     }
// }
// const batman = new Movie("batman", "el señor de la noche", 2010, 8);
// console.log(batman.isGood(batman));

const inputElement = document.querySelector('input');
const buttonElement = document.querySelector('button');



buttonElement.addEventListener('click', () => {
    const msgElement = document.querySelector('#msg');
    const textInput = inputElement.value.replaceAll(" ", "");
    const textAcort = textInput.substring(textInput.length - 3);
    const result = textAcort.padStart(7, "*");

    if (Number(textInput) !== NaN && textInput.length === 9) {
        msgElement.innerHTML = `tu numero ${result} es valido`;
    } else {
        msgElement.innerHTML = "error";
    }
});
