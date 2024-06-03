type TNumberOrString = number | string;

type TArrayUsuarios = TNumberOrString[];

interface IUsuario {
  nombre: string;
  apellidos: string;
  userName: TNumberOrString;
  edad: number;
  genero: TGenero;
}

export { TNumberOrString, TArrayUsuarios, IUsuario };
