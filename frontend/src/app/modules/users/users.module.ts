import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AlertModule } from 'ngx-bootstrap/alert';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './components/users.component';
import { UsersService } from './service/users.service';
import { UsersRegistryComponent } from './components/users.registry.component';
import { UsersRegistryService } from './service/users.registry.service';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    UsersComponent,
    UsersRegistryComponent
  ],
  imports: [
    CommonModule,
    TooltipModule.forRoot(),
    UsersRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    RouterModule
  ],
  providers: [
    UsersService,
    UsersRegistryService
  ]
})
export class UsersModule { }
