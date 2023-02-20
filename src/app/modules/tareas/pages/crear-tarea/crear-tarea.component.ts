import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { TareaService } from '../../services/tareaService/tarea.service';

@Component({
  selector: 'sofka-crear-tarea',
  templateUrl: './crear-tarea.component.html',
  styleUrls: ['./crear-tarea.component.scss']
})
export class CrearTareaComponent {
  tareaForm: FormGroup;

  constructor(private readonly tareaService: TareaService, private router: Router){
    this.tareaForm = new FormGroup({
      dia: new FormControl<number | null>(null, [Validators.required, Validators.minLength(1)]),
      title: new FormControl<string | null>(null, Validators.required),
      description: new FormControl<string | null>(null, Validators.required),
      responsible: new FormControl<string | null>(null, Validators.required),
      priority: new FormControl<string | null>(null, Validators.required),
      isCompleted: new FormControl<boolean | null>(false, Validators.required),
      uidUser: new FormControl<string | null>(null)
    });
  }

  crear(){
    this.tareaForm.get('uidUser')?.setValue(localStorage.getItem('uid'));
    this.tareaForm.get('isCompleted')?.setValue(JSON.parse(this.tareaForm.get('isCompleted')?.value));
    console.log(this.tareaForm.value);
    console.log(this.tareaForm.get('isCompleted')?.value);
    this.tareaService.postTarea(this.tareaForm.value).subscribe({
      next: dias => {
        console.log(dias),
        Swal.fire(
          'Creado',
          'La Tarea ha sido creada correctamente',
          'success'
        )
      },
      error: err => console.log(err),
      complete: () => {console.log('Complete'), this.router.navigate(["/tareas/home"]);}
    });
  }
}
