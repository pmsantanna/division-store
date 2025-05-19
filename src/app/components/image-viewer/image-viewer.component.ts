import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostListener,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-viewer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css'],
})
export class ImageViewerComponent implements OnInit {
  @Input() imagens: string[] = [];
  @Input() imagemAtual: string = '';
  @Output() fechar = new EventEmitter<void>();

  imagemVisivel: string = '';
  glitchOut: boolean = false;
  imagemInicial: boolean = true;

  ngOnInit() {
    this.imagemVisivel = this.imagemAtual;
  }

  get indexAtual(): number {
    return this.imagens.indexOf(this.imagemAtual);
  }

  trocarImagem(proxima: boolean) {
    if (this.imagens.length === 0) return;

    this.glitchOut = true;

    setTimeout(() => {
      const idx = this.indexAtual;
      const novoIdx = proxima
        ? (idx + 1) % this.imagens.length
        : (idx - 1 + this.imagens.length) % this.imagens.length;

      this.imagemAtual = this.imagens[novoIdx];
      this.imagemVisivel = this.imagemAtual;
      this.glitchOut = false;
    }, 150); // tempo do efeito glitch-out
  }

  proximaImagem() {
    this.trocarImagem(true);
  }

  imagemAnterior() {
    this.trocarImagem(false);
  }

  fecharViewer() {
    this.fechar.emit();
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    this.fecharViewer();
  }

  @HostListener('document:keydown.arrowright')
  onRight() {
    this.proximaImagem();
  }

  @HostListener('document:keydown.arrowleft')
  onLeft() {
    this.imagemAnterior();
  }
}
