import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent {
  getFullStars(nota: number): any[] {
    return Array(Math.floor(nota)).fill(0);
  }

  hasHalfStar(nota: number): boolean {
    return nota % 1 !== 0;
  }

  feedbacks = [
    {
      nome: 'MICHAEL',
      data: 'MAY_22_24',
      nota: 4.5,
      titulo: 'INCRÍVEL',
      texto:
        'A camiseta e o moletom são incríveis. Macios e oversized, do jeitinho que eu gosto.',
      imagem: 'assets/img/feedback-01.jpg',
    },
    {
      nome: 'JOSH',
      data: 'MAY_21_24',
      nota: 4,
      titulo: 'BOM',
      texto:
        'O design é realmente único. Também adorei a embalagem e a entrega.',
      imagem: 'assets/img/feedback-02.jpg',
    },
  ];
}
