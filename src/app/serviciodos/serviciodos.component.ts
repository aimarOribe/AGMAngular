import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serviciodos',
  templateUrl: './serviciodos.component.html',
  styleUrls: ['./serviciodos.component.css']
})
export class ServiciodosComponent implements OnInit {

  constructor() { }

  fecha:any = new Date();
  contect = this.fecha.getFullYear();

  ngOnInit(): void {
  }

}
