import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'cv';
  skills: any;
  skills2: any;
  constructor() {
    this.skills = [
        {nombre:'HTML5/CSS3/JS6', porcentaje:75},
        {nombre:'MySQL', porcentaje:50},
        {nombre:'Bootstrap 4', porcentaje:100},
        {nombre:'PHP7', porcentaje:75}
       ];
    this.skills2 = [
        {nombre:'Firebase',   porcentaje:25},
        {nombre:'Ionic 3',    porcentaje:50},
        {nombre:'PostgreSQL', porcentaje:50},
        {nombre:'Angular 8+', porcentaje:66.66}
    ];   
   }
  
  ngOnInit(): void { }
}
