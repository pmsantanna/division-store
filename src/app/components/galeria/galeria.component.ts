import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChild,
  HostListener,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
})
export class GaleriaComponent implements AfterViewInit {
  @ViewChild('slider') sliderRef!: ElementRef<HTMLDivElement>;

  imagensPrincipais = [
    'assets/img/galeria-01.png',
    'assets/img/galeria-02.png',
    'assets/img/galeria-03.png',
    'assets/img/galeria-04.png',
  ];

  imagensLateral = [
    'assets/img/galeria-05.png',
    'assets/img/galeria-06.png',
    'assets/img/galeria-07.png',
    'assets/img/galeria-08.png',
    'assets/img/galeria-09.png',
    'assets/img/galeria-10.png',
    'assets/img/galeria-05.png',
    'assets/img/galeria-06.png',
    'assets/img/galeria-07.png',
    'assets/img/galeria-08.png',
    'assets/img/galeria-09.png',
    'assets/img/galeria-10.png',
  ];

  imagensDuplicadas: string[] = [];

  hoverAtivo = false;

  ngAfterViewInit() {
    this.imagensDuplicadas = [...this.imagensLateral, ...this.imagensLateral];

    const el = this.sliderRef.nativeElement;
    let scroll = 0;
    const velocidade = 0.2; // agora pode ser bem pequeno
    let acumulado = 0;

    const animar = () => {
      if (!this.hoverAtivo) {
        acumulado += velocidade;

        if (acumulado >= 1) {
          const passo = Math.floor(acumulado);
          scroll = el.scrollTop + passo;

          if (scroll >= el.scrollHeight / 2) {
            scroll = 0;
          }

          el.scrollTop = scroll;
          acumulado -= passo;
        }
      } else {
        scroll = el.scrollTop;
      }

      requestAnimationFrame(animar);
    };

    animar();
  }
}
