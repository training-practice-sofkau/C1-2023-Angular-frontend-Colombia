import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../interface/item';
import { TodoitemService } from '../service/todoitem.service';

@Component({
  selector: 'sofka-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {
  lista: string[];
  itemDetalles2:FormGroup;
  itemDetalles: Item ={
    id:"",
    title:"",
    description:"",
    responsible:"",
    isComplete:0,
    estate:0,
    dia: 0,
    mes: 0,
    anio: 0,
    idUser: ""

  }

  constructor(private route:ActivatedRoute, private itemService: TodoitemService, private router: Router){
    this.lista = ["../"]
    this.itemDetalles2 = new FormGroup({
      'id':new FormControl(''),
      'title':new FormControl('',[
        Validators.minLength(3),
        Validators.required
      ]),
      'description':new FormControl(''),
      'responsible':new FormControl(''),
      'isComplete':new FormControl(0),
      'estate':new FormControl(1),
      'dia': new FormControl(0,[
        Validators.min(1),
        Validators.max(28),
        Validators.required
      ]),
      'mes': new FormControl(2,[
        Validators.min(2),
        Validators.required,
        Validators.max(2)
        ]),
      'anio': new FormControl(2023,[
        Validators.min(2023),
        Validators.required,
        Validators.max(2023)
        ]),
    })
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
        const id = params.get('id');

        if(id){
          this.itemService.getItem(id).subscribe({
            next:(response) => {
              this.itemDetalles2.setValue({
                id:response.id,
                title:response.title,
                description:response.description,
                responsible:response.responsible,
                isComplete:response.isComplete,
                estate:response.estate,
                dia:response.dia,
                mes:response.mes,
                anio:response.anio
              })
            }
          })
        }
      }
    })
  }

  updateItem(){
    console.log(this.itemDetalles2.getRawValue());
    this.itemService.updateItem(this.itemDetalles2.get('id')?.value,this.itemDetalles2.getRawValue())
    .subscribe({
      next:(response)=>{
        this.router.navigate(['items']);
      }
    });
  }

  deleteItem(id:string){
    this.itemService.deleteItem(id)
    .subscribe({
      next:(response)=>{
        this.router.navigate(['items'])
      }
    })
  }
}