import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-users',
  templateUrl: '../templates/users.component.html',
  styleUrls: ['../styles/users.component.scss']
})
export class UsersComponent implements OnInit {

  fomLogin: FormGroup
  modalRef?: BsModalRef;
  showError = false;

  constructor(
    private _formBuilder: FormBuilder,
    private service: UsersService,
    private router: Router,
    private auth: AuthService,
    private modalService: BsModalService,
    ) { 
    this.fomLogin = this._formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    })
  }

  ngOnInit(): void {
  }

  onSubmit(form: FormGroup, template: TemplateRef<any>){
    if(form.valid) {

      let username = form.controls['username'].value
      let password = form.controls['password'].value

      this.service.findUsers(username, password).subscribe((res: any) => {
        if(res.status === 200) {

          res.body.forEach((element: any) => {
          
            if(username === element.username && password === element.password) {
              this.auth.isLogged = true;
              this.router.navigate(['/home', username])
            } else {
              this.showError = true;
            }

          });
        }
      })
    } else {
      this.modalRef = this.modalService.show(template);
    }
  }

}
