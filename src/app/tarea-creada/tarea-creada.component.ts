import { Component} from '@angular/core';
import { Tarea, EstadoTarea } from '../tarea';
import { TareaBase } from '../tarea-base/tarea-base';
import { TareaService } from '../tarea.service';


@Component({
  selector: 'app-tarea-creada',
  templateUrl: './tarea-creada.component.html',
  styleUrls: ['./tarea-creada.component.css']
})
export class TareaCreadaComponent extends TareaBase{
  
  constructor(public tareaService: TareaService) {
    super();
  }

  obtenerSiguienteEstado(t: Tarea){
    t.estado = 1;
    this.updateEstado(t);
    return EstadoTarea.EnProceso;
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
