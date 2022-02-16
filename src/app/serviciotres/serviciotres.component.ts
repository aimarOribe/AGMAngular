import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serviciotres',
  templateUrl: './serviciotres.component.html',
  styleUrls: ['./serviciotres.component.css']
})
export class ServiciotresComponent implements OnInit {

  constructor() { }

  fecha:any = new Date();
  contect = this.fecha.getFullYear();

  ngOnInit(): void {
  }

}
