import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostListener,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-viewer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css'],
})
export class ImageViewerComponent {
  @Input() imagens: string[] = [];
  @Input() imagemAtual: string = '';
  @Output() fechar = new EventEmitter<void>();

  glitchOut: boolean = true;

  get indexAtual(): number {
    return this.imagens.indexOf(this.imagemAtual);
  }

  proximaImagem() {
    this.glitchOut = true;
    setTimeout(() => {
      const proximo = (this.indexAtual + 1) % this.imagens.length;
      this.imagemAtual = this.imagens[proximo];
      this.glitchOut = false;
    }, 150);
  }

  imagemAnterior() {
    this.glitchOut = true;
    setTimeout(() => {
      const anterior =
        (this.indexAtual - 1 + this.imagens.length) % this.imagens.length;
      this.imagemAtual = this.imagens[anterior];
      this.glitchOut = false;
    }, 150);
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
