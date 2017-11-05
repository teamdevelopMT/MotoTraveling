 export interface IUsuario{
    idUsuario?:string,
    nombre?: string,
    correo?:string,
    telefono?:number,
    foto?:string,
    estadoConexion? : boolean,
    Rh?:string,
    enfermedades?: IEnfermedad [] 
 }

 export interface IEnfermedad{
     nombre?:string,
     descripcion?: string,
     medicamentos?: IMedicamento [],
 }

 export interface IMedicamento{
     nombre?:string,
     cantidad?:string
 }