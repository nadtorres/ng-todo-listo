import { Component, OnInit} from '@angular/core';
import { Tarea, EstadoTarea } from './tarea';
import { TareaService } from './tarea.service';
import { FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent implements OnInit{

  title = 'Todo Listo';
  estadoTareas : EstadoTarea;
  tareaSeleccionada: Tarea;
  tareas: Array<Tarea>;
  newTarea: Tarea;
  estadosTareas: any;
  domain: string = 'http://127.0.0.1:8000';
  
  constructor(public tareaService: TareaService, private http : HttpClient){
    this.tareas =[];
    this.newTarea = new Tarea(null, null, null, null);
  }

 
  ngOnInit(){
    this.tareaService.getTareas()
    .subscribe((ts: Array<Tarea>) => { this.tareas = ts;} 
    );

    this.getEstados();
  }

  actualizarTarea(t: Tarea) {
  }

  seleccionarTarea(t: Tarea){
    this.tareaSeleccionada= t;
  }
  
  crearTarea(){
    console.log(this.newTarea);
    this.tareaService.crearTarea(this.newTarea).subscribe(
      response => { alert('Tarea Creada'), ts => {
        this.tareaService.push(ts);
      }
      },
      error => console.log('error', error)
    );
  }
  getEstados() {
    this.http.get(`${this.domain}/estados/`).subscribe(data => {
      this.estadosTareas = data;
    });
  }

  estado2str(e: EstadoTarea) {
    switch (e) {
      case EstadoTarea.Creada:    return 'Creada';
      case EstadoTarea.EnProceso: return 'En Proceso';
      case EstadoTarea.Terminada: return 'Terminada';
    }
  }
}
