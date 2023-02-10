import { LogComponent } from './pages/log/log.component';
import { TransferenciaComponent } from './pages/transferencia/transferencia.component';
import { HistorialComponent } from './pages/historial/historial.component';
import { DatosUsuarioComponent } from './pages/datos-usuario/datos-usuario.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: 'principal', //localhost:4200/banco
    component: PrincipalComponent,
},
{ path: 'usuario', //localhost:4200/banco
component: DatosUsuarioComponent,
},
{ path: 'historial', //localhost:4200/banco
component: HistorialComponent,
},
{ path: 'transferencia', //localhost:4200/banco
component: TransferenciaComponent,
},
{ path: 'registro', //localhost:4200/banco
component: LogComponent,
},

];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class bancoRoutingModule {}
