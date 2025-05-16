import { Component, AfterViewInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackComponent } from '../../components/feedback/feedback.component.spec';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [CommonModule, FeedbackComponent, FooterComponent],
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent {
  constructor(private renderer: Renderer2) {}

  produtos = [
    {
      nome: 'DARKLINK – Moletom',
      descricao:
        'Hoodie com impressão em plasma branco, simulando circuitos ocultos e símbolos da era do espírito digital.',
      preco: 239.9,
      imagem: 'assets/img/darklink-moletom.png',
    },
    {
      nome: 'RITUAL.EXE – Camiseta Oversized',
      descricao:
        'Estampa cybertribal em fluxo ritualístico, inspirada em algoritmos ancestrais. Ideal para iniciados no caos consciente.',
      preco: 129.9,
      imagem: 'assets/img/ritual-exe-camiseta.png',
    },
    {
      nome: 'SYMBIOTIC – Camiseta',
      descricao:
        'Combinação de formalidade com invasão simbólica. Estampa full-back com escrita demoníaca e fluidez geométrica.',
      preco: 179.9,
      imagem: 'assets/img/symbiotic-camisa.png',
    },
    {
      nome: 'HEXDATA – Calça Techwear',
      descricao:
        'Linhas cortantes em runas glitch, arte demoníaca aplicada em denim tático. Modelagem que esculpe presença.',
      preco: 199.9,
      imagem: 'assets/img/hexdata-calca.png',
    },
  ];

  ngAfterViewInit() {
    const elements = document.querySelectorAll('.fade-element');

    elements.forEach((el) => {
      setTimeout(() => {
        this.renderer.addClass(el, 'animar');
      }, 50); // aplica a classe após render, ativando o delay
    });
  }

  getClasseProduto(nome: string): string {
    const nomeUpper = nome.toUpperCase();
    if (nomeUpper.includes('MOLETOM')) return 'moletom';
    if (nomeUpper.includes('CAMISETA')) return 'camiseta';
    if (nomeUpper.includes('CAMISA')) return 'camisa';
    if (nomeUpper.includes('CALÇA')) return 'calca';
    return '';
  }
}
