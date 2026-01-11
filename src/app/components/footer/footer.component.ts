import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <div class="footer-logo">
              <span class="logo-highlight">xcel</span>_dev
            </div>
          </div>

          <div class="footer-section">
            <h4>Navigace</h4>
            <div class="footer-links">
              <a href="#home">Domů</a>
              <a href="#about">O mně</a>
              <a href="#skills">Dovednosti</a>
              <a href="#projects">Projekty</a>
              <a href="#contact">Kontakt</a>
            </div>
          </div>

          <div class="footer-section">
            <h4>Kontakt</h4>
            <div class="footer-contact">
              <div>vojta.fran@gmail.com</div>
              <div>Zlín, Česká republika</div>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="footer-copyright">
            © 2025 František Vojta - xcel_dev. Všechna práva vyhrazena.
          </div>

          <div class="footer-made">
            Web vytvořil František Vojta
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    /* FOOTER STYLES */
    .footer {
      background-color: var(--color-bg-alt);
      border-top: 1px solid var(--color-border);
      padding: 60px 0 30px;
    }

    .footer-content {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 48px;
      margin-bottom: 48px;
    }

    .footer-section {
      display: flex;
      flex-direction: column;
    }

    .footer-logo {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--color-text);
      margin-bottom: 16px;
    }

    .logo-highlight {
      color: var(--color-primary);
    }

    .footer-description {
      color: var(--color-text-light);
      font-size: 0.9375rem;
      line-height: 1.6;
    }

    .footer-section h4 {
      font-size: 1.125rem;
      margin-bottom: 20px;
      color: var(--color-text);
    }

    .footer-links {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .footer-links a {
      color: var(--color-text-light);
      text-decoration: none;
      font-size: 0.9375rem;
      transition: color 0.3s;
    }

    .footer-links a:hover {
      color: var(--color-primary);
    }

    .footer-contact {
      display: flex;
      flex-direction: column;
      gap: 8px;
      color: var(--color-text-light);
      font-size: 0.9375rem;
    }

    .footer-bottom {
      padding-top: 30px;
      border-top: 1px solid var(--color-border);
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 20px;
    }

    .footer-copyright {
      color: var(--color-text-light);
      font-size: 0.875rem;
    }

    .footer-made {
      color: var(--color-text-light);
      font-size: 0.875rem;
    }

    @media (max-width: 768px) {
      .footer {
        padding: 40px 0 24px;
      }

      .footer-content {
        grid-template-columns: 1fr;
        gap: 32px;
        margin-bottom: 32px;
      }

      .footer-bottom {
        flex-direction: column;
        text-align: center;
        gap: 16px;
      }
    }

    @media (max-width: 480px) {
      .footer-section {
        text-align: center;
      }

      .footer-links,
      .footer-contact {
        align-items: center;
      }
    }
  `]
})
export class FooterComponent {}
