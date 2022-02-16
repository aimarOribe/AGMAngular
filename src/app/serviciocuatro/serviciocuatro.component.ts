import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serviciocuatro',
  templateUrl: './serviciocuatro.component.html',
  styleUrls: ['./serviciocuatro.component.css']
})
export class ServiciocuatroComponent implements OnInit {

  constructor() { }

  fecha:any = new Date();
  contect = this.fecha.getFullYear();

  ngOnInit(): void {
  }

}
