import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="about section">
      <div class="container">
        <div class="section-title">
          <h2>O mně</h2>
          <div class="underline"></div>
        </div>

        <div class="about-content grid grid-2 gap-8">
          <div class="about-text">
            <p>
              Ahoj! Jmenuji se František Vojta, také známý jako xcel_dev, je mi 17 let a studuji informační technologie ve Zlíně.
            </p>

            <p>
              Specializuji se na vývoj v Javě, tvorbu Discord botů a pluginů pro Minecraft, stejně tak i na responzivní webové aplikace a prezentace.
              Taky rád pomáhám začínajícím komunitám nebo YouTuberům vytvořit a nastavit Discord servery.
            </p>

          </div>

          <div class="about-stats">
            <div class="stats-grid grid grid-2 gap-4">
              <div class="stat-card card">
                <div class="stat-number">3+</div>
                <div class="stat-label">Roky zkušeností</div>
              </div>

              <div class="stat-card card">
                <div class="stat-number">10+</div>
                <div class="stat-label">Projektů</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* ABOUT STYLES */
    .about-content {
      align-items: start;
    }

    .about-text p {
      margin-bottom: 24px;
      font-size: 1.125rem;
      line-height: 1.7;
    }

    .about-stats {
      width: 100%;
    }

    .stat-card {
      text-align: center;
      padding: 24px;
      transition: transform 0.3s, box-shadow 0.3s;
    }

    .stat-card:hover {
      transform: translateY(-8px);
    }

    .stat-number {
      font-size: 2rem;
      font-weight: 700;
      color: var(--color-primary);
      margin-bottom: 8px;
    }

    .stat-label {
      color: var(--color-text-light);
      font-size: 0.875rem;
    }

    @media (max-width: 768px) {
      .about-content {
        grid-template-columns: 1fr;
      }

      .about-text p {
        font-size: 1rem;
      }

      .stats-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 480px) {
      .stats-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class AboutComponent {}
