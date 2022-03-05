import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users.component';
import { UsersRegistryComponent } from './components/users.registry.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  },
  {
    path: 'registry',
    component: UsersRegistryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
