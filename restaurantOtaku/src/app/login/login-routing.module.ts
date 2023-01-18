import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            { path: 'ingreso', component: LoginComponent },
            { path: 'registro', component: RegistroComponent },
            { path: '**', redirectTo: 'login' },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule { }