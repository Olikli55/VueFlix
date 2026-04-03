const initData = [
    { "id": 1, "name": "Fight club" },
    { "id": 2, "name": "Oppenheimer" },
    { "id": 3, "name": "The Shawshank Redemption" },
    { "id": 4, "name": "The Godfather" },
    { "id": 5, "name": "The Dark Knight" },
    { "id": 6, "name": "Pulp Fiction" },
    { "id": 7, "name": "The Lord of the Rings: The Fellowship of the Ring" },
    { "id": 8, "name": "Schindler's List" },
    { "id": 9, "name": "Inception" },
    { "id": 10, "name": "Forrest Gump" },
    { "id": 11, "name": "The Matrix" },
    { "id": 12, "name": "Goodfellas" },
    { "id": 13, "name": "Star Wars: The Empire Strikes Back" },
    { "id": 14, "name": "Interstellar" },
    { "id": 15, "name": "Parasite" },
    { "id": 16, "name": "Spirited Away" },
    { "id": 17, "name": "The Silence of the Lambs" },
    { "id": 18, "name": "Casablanca" },
    { "id": 19, "name": "Citizen Kane" },
    { "id": 20, "name": "Back to the Future" },
    { "id": 21, "name": "Gladiator" },
    { "id": 22, "name": "The Green Mile" },
    { "id": 23, "name": "Blade Runner" },
    { "id": 24, "name": "Terminator 2: Judgment Day" },
    { "id": 25, "name": "Saving Private Ryan" },
    { "id": 26, "name": "The Prestige" },
    { "id": 27, "name": "Whiplash" },
    { "id": 28, "name": "La La Land" },
    { "id": 29, "name": "Moonlight" },
    { "id": 30, "name": "Memento" },
    { "id": 31, "name": "Amélie" },
    { "id": 32, "name": "The Social Network" },
    { "id": 33, "name": "Mad Max: Fury Road" },
    { "id": 34, "name": "Toy Story" },
    { "id": 35, "name": "Rocky" },
    { "id": 36, "name": "The Departed" },
    { "id": 37, "name": "Her" },
    { "id": 38, "name": "Eternal Sunshine of the Spotless Mind" },
    { "id": 39, "name": "There Will Be Blood" },
    { "id": 40, "name": "Once Upon a Time in Hollywood" }
];
export function getData(){
    // const dataInLocalStorage = localStorage.getItem('data');
    // if(dataInLocalStorage){
    //     console.log(JSON.parse(dataInLocalStorage));
    //
    //     return JSON.parse(dataInLocalStorage);
    // }

    console.log(initData);
    //localStorage.setItem('data', JSON.stringify({initData}));
    return initData;


}