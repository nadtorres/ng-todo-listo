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
  estadoTareas = EstadoTarea;
  tareaSeleccionada: Tarea;
  tareas: Array<Tarea>;
  newTarea: Tarea;
  estadosTareas: any;
  tareasMostradas: Array<Tarea>;
  
  
  constructor(public tareaService: TareaService, private http : HttpClient){
    this.tareas =[];
    this.newTarea = new Tarea(null, null, null, null);
  }

 
  ngOnInit(){
    this.tareaService.getTareas()
    .subscribe((ts: Array<Tarea>) => { this.tareas = ts; this.filtrarTareas();} 
    );

    this.getEstados();
  }
  filtrarTareas(){
    this.tareasMostradas = this.tareas.filter(t => t.titulo);
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
    this.tareaService.getEstados().subscribe(data => {
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
