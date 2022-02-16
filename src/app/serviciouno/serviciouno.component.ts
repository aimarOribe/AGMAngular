import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serviciouno',
  templateUrl: './serviciouno.component.html',
  styleUrls: ['./serviciouno.component.css']
})
export class ServiciounoComponent implements OnInit {

  constructor() { }

  fecha:any = new Date();
  contect = this.fecha.getFullYear();

  ngOnInit(): void {
  }

}
