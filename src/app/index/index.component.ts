import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() {}

  fecha:any = new Date();
  contect = this.fecha.getFullYear();

  ngOnInit(): void {
    
    let carrusel:any = document.querySelector(".carrusel-items");
    
    let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
    let intervalo:any
    let step = 1;
    const start = () => {
      intervalo = setInterval(function () {
        carrusel.scrollLeft = carrusel.scrollLeft + step;
        if (carrusel.scrollLeft === maxScrollLeft) {
          step = step * -1;
        } else if (carrusel.scrollLeft === 0) {
          step = step * -1;
        }
      }, 10);
    };

    const stop = () => {
      clearInterval(intervalo);
    };
    
    carrusel.addEventListener("mouseover", () => {
      stop();
    });
    
    carrusel.addEventListener("mouseout", () => {
      start();
    });
    
    start();

    let carruselDestacados:any = document.querySelector(".carrusel-items-destacados");

    let maxScrollLeftDestacados = carruselDestacados.scrollWidth - carruselDestacados.clientWidth;
    let intervaloDestacados:any
    let stepDestacados = 1;
    const startDestacados = () => {
      intervaloDestacados = setInterval(function () {
        carruselDestacados.scrollLeft = carruselDestacados.scrollLeft + stepDestacados;
        if (carruselDestacados.scrollLeft === maxScrollLeftDestacados) {
          stepDestacados = stepDestacados * -1;
        } else if (carruselDestacados.scrollLeft === 0) {
          stepDestacados = stepDestacados * -1;
        }
      }, 10);
    };

    const stopDestacado = () => {
      clearInterval(intervaloDestacados);
    };
    
    carruselDestacados.addEventListener("mouseover", () => {
      stopDestacado();
    });
    
    carruselDestacados.addEventListener("mouseout", () => {
      startDestacados();
    });
    
    startDestacados();
            

  }

}
