import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TareasRoutingModule } from './tareas-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { PrincipalComponent } from './pages/principal/principal.component';
import { ListarTareaComponent } from './pages/listar-tarea/listar-tarea.component';
import { DetalleTareaComponent } from './pages/detalle-tarea/detalle-tarea.component';
import { CrearTareaComponent } from './pages/crear-tarea/crear-tarea.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PrincipalComponent,
    ListarTareaComponent,
    DetalleTareaComponent,
    CrearTareaComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    TareasRoutingModule,
  ]
})
export class TareasModule { }
