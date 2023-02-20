import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { IgetTarea } from '../../interfaces/tareas.interface';
import { TareaService } from '../../services/tareaService/tarea.service';

@Component({
  selector: 'sofka-actualizar-tarea',
  templateUrl: './actualizar-tarea.component.html',
  styleUrls: ['./actualizar-tarea.component.scss']
})
export class ActualizarTareaComponent {
  tareaForm!: FormGroup;
  tarea: IgetTarea[];
  idTarea: number;

  constructor(private readonly tareaService: TareaService, private rutaActiva: ActivatedRoute, private router: Router){
    this.idTarea = 0;
    this.tarea = new Array<IgetTarea>();
    this.tareaForm = new FormGroup({
      title: new FormControl<string | null>(null, Validators.required),
      description: new FormControl<string | null>(null, Validators.required),
      responsible: new FormControl<string | null>(null, Validators.required),
      priority: new FormControl<string | null>(null, Validators.required),
      isCompleted: new FormControl<boolean | null>(null, Validators.required)
    });
  }

  ngOnInit(): void {
    this.rutaActiva.params.subscribe( params => {
      this.idTarea = params['id'],
      this.tareaService.getTarea(params['id']).subscribe({
          next: tarea => {
            this.tarea = tarea,
            console.log(tarea),
            this.tareaForm.setValue({
              title: this.tarea[0].title,
              description: this.tarea[0].description,
              responsible: this.tarea[0].responsible,
              priority: this.tarea[0].priority,
              isCompleted: this.tarea[0].isCompleted
            }) 
          },
          error: err => console.log(err),
          complete: () => console.log('Complete')
        })
    })
  }

  

  actualizar(){
    console.log(this.tareaForm);
    this.tareaForm.get('isCompleted')?.setValue(JSON.parse(this.tareaForm.get('isCompleted')?.value));
    this.rutaActiva.params.subscribe( params => {
      this.tareaService.putTarea(params['id'],this.tareaForm.value).subscribe({
          next: dias => {
            console.log(dias),
            Swal.fire(
              'Actualizada',
              'La Tarea ha sido Actualizada correctamente',
              'success'
            )
          },
          error: err => console.log(err),
          complete: () => {console.log('Complete'), this.router.navigate([`tareas/detalle/${this.idTarea}`]);}
        })
    })
  }
}
