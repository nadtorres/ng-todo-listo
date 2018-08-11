import { Component} from '@angular/core';
import { Tarea, EstadoTarea } from '../tarea';
import { TareaBase } from '../tarea-base/tarea-base';
import { TareaService } from '../tarea.service';

@Component({
  selector: 'app-tarea-en-proceso',
  templateUrl: './tarea-en-proceso.component.html',
  styleUrls: ['./tarea-en-proceso.component.css']
})
export class TareaEnProcesoComponent extends TareaBase{

  constructor(public tareaService: TareaService) {
    super();
  }

 obtenerSiguienteEstado(t: Tarea){
  t.estado = 2;
  this.updateEstado(t);
  return EstadoTarea.Terminada;
 }
 updateEstado(t: Tarea) {
  this.tareaService.updateEstado(t).subscribe(
    response => {
      ts => {
        this.tareaService.push(ts);
      }
    },
    error => console.log('error', error)
  );
}

}
