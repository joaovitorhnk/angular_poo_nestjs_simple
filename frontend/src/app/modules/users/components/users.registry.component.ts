import { HttpResponse } from "@angular/common/http";
import { Component, TemplateRef } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { UsersRegistry } from "../models/users.model";
import { UsersRegistryService } from "../service/users.registry.service";

@Component({
    selector: 'app-users-registry',
    templateUrl: '../templates/users.registry.component.html',
    styleUrls: ['../styles/users.registry.component.scss']
})
export class UsersRegistryComponent {

    formRegistry: FormGroup
    modalRef?: BsModalRef;
    showSucess: boolean

    constructor(
        private _formBuilder: FormBuilder,
        private modalService: BsModalService,
        private service: UsersRegistryService
    ){
        this.formRegistry = this._formBuilder.group({
            email: [null, Validators.required],
            username: [null, Validators.required],
            password: [null, Validators.required]
        })

        this.showSucess = false
    }

    onSubmit(form: FormGroup, template: TemplateRef<any>) {

        if(!form.valid) {
            this.modalRef = this.modalService.show(template);
        } else {
            const body = new UsersRegistry(
                form.controls['email'].value,
                form.controls['username'].value,
                form.controls['password'].value
            )
            this.service.create(body).subscribe((res: HttpResponse<any>) => {
                if(res.status == 200) {
                    this.showSucess = true
                }
            })

        }
    }
}