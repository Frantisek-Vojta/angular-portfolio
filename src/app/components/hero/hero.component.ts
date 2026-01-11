import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="hero">
      <div class="container">
        <div class="hero-content">
          <h1>Ahoj, já jsem <span class="text-primary">František</span></h1>
            <p>a taky...</p>

          <p class="hero-description">
            {{ heroDescriptions()[currentDescriptionIndex()] }}
          </p>

          <!-- TLAČÍTKO PRO PŘEPÍNÁNÍ POPISU -->
          <div class="description-toggle">
            <button class="toggle-btn" (click)="toggleDescription()">
              <i class="fa-solid fa-chevron-down toggle-icon" [class.rotated]="showLongDescription()"></i>
              {{ showLongDescription() ? 'jinýmy slovy' : 'zpátky' }}
            </button>
          </div>
          <div class="hero-info">
            <div class="info-item">
              <div class="info-icon-wrapper">
                <i class="fa-solid fa-bullseye"></i>
              </div>
              <strong>3+ let</strong>
              <span>zkušeností</span>
            </div>

            <div class="info-item">
              <div class="info-icon-wrapper">
                <i class="fa-solid fa-cake-candles"></i>
              </div>
              <strong>17 let</strong>
              <span>věk</span>
            </div>

            <div class="info-item">
              <div class="info-icon-wrapper">
                <i class="fa-solid fa-cat"></i>
              </div>
              <strong>Cat Lover</strong>
              <span>milovník koček</span>
            </div>

            <div class="info-item">
              <div class="info-icon-wrapper">
                <i class="fa-solid fa-graduation-cap"></i>
              </div>
              <strong>Student IT</strong>
              <span>obor</span>
            </div>
          </div>

          <div class="hero-actions">
            <a href="#contact" class="btn btn-primary">
              <i class="fa-solid fa-envelope btn-icon"></i>
              Kontaktujte mě
            </a>
            <a href="#projects" class="btn btn-secondary">
              <i class="fa-solid fa-folder-open btn-icon"></i>
              Moje projekty
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      padding-top: 120px;
      padding-bottom: 80px;
      background: linear-gradient(135deg,
        color-mix(in srgb, var(--color-primary) 5%, transparent) 0%,
        color-mix(in srgb, var(--color-primary) 2%, transparent) 100%);
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .hero-content {
      max-width: 800px;
      margin: 0 auto;
      text-align: center;
    }

    .hero h1 {
      font-size: 3.5rem;
      font-weight: 800;
      margin-bottom: 12px;
      line-height: 1.1;
    }

    .hero h2 {
      font-size: 1.75rem;
      color: var(--color-text-secondary);
      margin-bottom: 40px;
      font-weight: 500;
    }

    .hero-description {
      font-size: 1.125rem;
      line-height: 1.8;
      color: var(--color-text);
      margin-bottom: 48px;
      padding: 24px;
      background: var(--color-surface);
      border-radius: 16px;
      border: 1px solid var(--color-border);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      min-height: 140px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .dark-mode .hero-description {
      background: var(--color-surface-dark);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    }

    .hero-info {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
      margin-bottom: 48px;
    }

    @media (max-width: 768px) {
      .hero-info {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 480px) {
      .hero-info {
        grid-template-columns: 1fr;
        max-width: 250px;
        margin-left: auto;
        margin-right: auto;
      }
    }

    .info-item {
      text-align: center;
      padding: 20px 12px;
      background: var(--color-surface);
      border-radius: 12px;
      border: 1px solid var(--color-border);
      transition: all 0.3s ease;
    }

    .info-item:hover {
      transform: translateY(-3px);
      border-color: var(--color-primary);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    }

    .dark-mode .info-item {
      background: var(--color-surface-dark);
    }

    .info-icon-wrapper {
      margin-bottom: 12px;
      font-size: 1.75rem;
      color: var(--color-primary);
    }

    .info-item strong {
      display: block;
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--color-text);
      margin-bottom: 4px;
    }

    .info-item span {
      color: var(--color-text-secondary);
      font-size: 0.875rem;
      font-weight: 500;
      letter-spacing: 0.5px;
    }

    .description-toggle {
      margin-bottom: 48px;
    }

    .toggle-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 20px;
      background: var(--color-surface);
      color: var(--color-primary);
      border: 2px solid var(--color-primary);
      border-radius: 8px;
      font-size: 0.875rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .toggle-btn:hover {
      background: var(--color-primary);
      color: white;
      transform: translateY(-2px);
    }

    .dark-mode .toggle-btn {
      background: var(--color-surface-dark);
    }

    .toggle-icon {
      font-size: 0.75rem;
      transition: transform 0.3s ease;
    }

    .toggle-icon.rotated {
      transform: rotate(180deg);
    }

    .hero-actions {
      display: flex;
      justify-content: center;
      gap: 16px;
      flex-wrap: wrap;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 12px 24px;
      border-radius: 8px;
      font-size: 0.875rem;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.3s ease;
    }

    .btn-primary {
      background: var(--color-primary);
      color: white;
      border: 2px solid var(--color-primary);
    }

    .btn-primary:hover {
      background: var(--color-primary-dark);
      border-color: var(--color-primary-dark);
      transform: translateY(-2px);
    }

    .btn-secondary {
      background: transparent;
      color: var(--color-text);
      border: 2px solid var(--color-border);
    }

    .btn-secondary:hover {
      background: var(--color-surface);
      border-color: var(--color-primary);
      transform: translateY(-2px);
    }

    .btn-icon {
      font-size: 0.875rem;
    }

    .text-primary {
      color: var(--color-primary);
    }

    @media (max-width: 768px) {
      .hero {
        padding-top: 100px;
        padding-bottom: 60px;
      }

      .hero h1 {
        font-size: 2.5rem;
      }

      .hero h2 {
        font-size: 1.25rem;
      }

      .hero-description {
        padding: 20px;
        font-size: 1rem;
      }

      .btn {
        padding: 10px 20px;
        font-size: 0.875rem;
      }
    }

    @media (max-width: 480px) {
      .hero h1 {
        font-size: 2rem;
      }

      .hero-actions {
        flex-direction: column;
        align-items: center;
      }

      .btn {
        width: 100%;
        max-width: 250px;
        justify-content: center;
      }
    }
  `]
})
export class HeroComponent {
  showLongDescription = signal(true);

  heroDescriptions = signal([
    'Profesionální vývojář se zkušenostmi s moderními technologiemi. Tvořím responzivní webové aplikace, Discord boty, Minecraft pluginy, pomáhám lidem.',
    'Zvládnu to co vy denně vidíte nebo na co si vzpomenete.'
  ]);




  currentDescriptionIndex = signal(0);


  toggleDescription() {
    this.currentDescriptionIndex.update(current => {
      if (this.showLongDescription()) {
        this.showLongDescription.set(false);
        return 1;
      } else {
        this.showLongDescription.set(true);
        return 0;
      }
    });
  }
}
