import { Injectable } from '@angular/core';
import { Tarea, EstadoTarea } from './tarea';
import { Observable, of, empty } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class  TareaService {
 
  
  tareaUrl = 'http://127.0.0.1:8000/tareas/';
  estadosUrl = 'http://127.0.0.1:8000/estados/';
  push;
  

  constructor(private http: HttpClient) {}


  getTareas(): Observable<any> {
    return this.http.get<Array<any>>(this.tareaUrl);
  }
 
  crearTarea(t: any): Observable<any> {
    location.reload()
    return this.http.post<Tarea>(this.tareaUrl, t);
  }
  actualizarTarea(t: Tarea): Observable<any> {
    return this.http.post<Tarea>(this.tareaUrl, t.id);
  }

}