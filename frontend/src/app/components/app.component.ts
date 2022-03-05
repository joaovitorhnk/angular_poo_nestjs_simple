import { Component, OnInit } from '@angular/core';
import { AppService } from '../service/app.service';

@Component({
  selector: 'app-root',
  templateUrl: '../templates/app.component.html',
  styleUrls: ['../styles/app.component.scss']
})
export class AppComponent implements OnInit {
  
  message: string
  constructor(private service: AppService) {
    this.message = '';
  }

  ngOnInit(): void {
    this.service.getWelcome().subscribe((res: string) => {
      this.message = res
    })
  }

}
