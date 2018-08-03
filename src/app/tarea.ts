import { DatePipe } from "../../node_modules/@angular/common";


export enum EstadoTarea{
    Creada
    , EnProceso
    , Terminada
}
export function estado2str(e: EstadoTarea): string{
    switch(e){
        case EstadoTarea.Creada: return 'Creada';
        case EstadoTarea.EnProceso: return 'En Proceso';
        case EstadoTarea.Terminada: return 'Terminada';
    }
}
export class Tarea {
    id: number;
    titulo: string;
    descripcion;
    fecha_inicio: Date;
    fecha_termino: Date;
    estado: EstadoTarea;

    constructor(id, titulo, descripcion, estado = EstadoTarea.Creada)
    {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.fecha_inicio = new Date();
        this.fecha_termino = new Date();
        this.estado = estado;
    }
    toString(){
        return `Tarea #${this.id}: ${this.titulo}`;
    }

}
