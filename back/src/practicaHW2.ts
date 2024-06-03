import { TNumberOrString, TArrayUsuarios, IUsuario } from "./types";

const num1: number = 5;
const num2: number = 56;

function suma(a: number, b: number) {
  return a + b;
}

console.log(suma(num1, num2));

interface url {
  titulo: string;
  url: TNumberOrString;
}

const netflix: url = {
  titulo: "Netflix",
  url: "https://www.netflix.com/browse",
};

console.log(netflix);

const users: TArrayUsuarios = ["Mauricio", 5, "Jorge", "Cristian"];
console.log(users);

enum TGenero {
  Femenino = "Femenino",
  Masculino = "Masculino",
  NoBinario = "No Binario",
}

const user2: IUsuario = {
  nombre: "Mauricio",
  apellidos: "Arce",
  userName: 69,
  edad: 18,
  genero: TGenero.Masculino,
};

console.log(user2);
