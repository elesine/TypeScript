let username: string = "Gretel Canasa";
let age: number = 20;
let isTrue: boolean = true;
let token: any = "puedo crear lo que sea"; 
let personas: string[] = ["chef", "software", "artist"];

console.log(username, age, isTrue)

let div_personas:HTMLElement | null = document.querySelector("#personas");

div_personas.innerHTML = "<ul>" +
                        personas.map((persona) => {
                            return `<li> ${persona} </li>`;
                        }).join(""); 
                        + "</ul>";