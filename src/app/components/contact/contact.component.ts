import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="contact section">
      <div class="container">
        <div class="section-title">
          <h2>Kontakt</h2>
          <div class="underline"></div>
        </div>

        <div class="contact-content grid grid-2 gap-8">
          <div class="contact-info">
            <h3>Kontaktní informace</h3>

            <div class="contact-items">
              <div class="contact-item">
                <div class="contact-icon"><i class="fa-solid fa-at"></i></div>
                <div class="contact-details">
                  <div class="contact-label">Email</div>
                  <a href="mailto:vojta.fran@gmail.com" class="contact-value">
                    vojta.fran&#64;gmail.com
                  </a>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon"><i class="fa-brands fa-discord"></i></div>
                <div class="contact-details">
                  <div class="contact-label">Discord komunita</div>
                  <a href="https://discord.gg/d5V3vmMByb"
                     target="_blank"
                     class="contact-value">
                    discord.gg/d5V3vmMByb
                  </a>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon"><i class="fa-brands fa-instagram"></i></div>
                <div class="contact-details">
                  <div class="contact-label">instagram</div>
                  <a href="https://www.instagram.com/frantisek_vojta/"
                     target="_blank"
                     class="contact-value">
                    &#64;frantisek_vojta
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="contact-form">
            <form (ngSubmit)="onSubmit()">
              <div class="form-group">
                <label for="name">Jméno *</label>
                <input type="text"
                       id="name"
                       [(ngModel)]="formData().name"
                       name="name"
                       required
                       placeholder="Vaše jméno">
              </div>

              <div class="form-group">
                <label for="email">Email *</label>
                <input type="email"
                       id="email"
                       [(ngModel)]="formData().email"
                       name="email"
                       required
                       placeholder="vas@email.cz">
              </div>

              <div class="form-group">
                <label for="message">Zpráva *</label>
                <textarea id="message"
                          [(ngModel)]="formData().message"
                          name="message"
                          rows="5"
                          required
                          placeholder="Vaše zpráva..."></textarea>
              </div>

              <button type="submit" class="btn" [disabled]="isSubmitting()">
                {{ isSubmitting() ? 'Odesílání...' : 'Odeslat zprávu' }}
              </button>

              <div *ngIf="messageSent()" class="success-message">
                Zpráva byla odeslána! Odpovím vám co nejdříve.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* CONTACT STYLES */
    .contact-content {
      max-width: 1000px;
      margin: 0 auto;
    }

    .contact-info h3 {
      margin-bottom: 32px;
      color: var(--color-text);
    }

    .contact-items {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    .contact-item {
      display: flex;
      align-items: flex-start;
      gap: 16px;
    }

    .contact-icon {
      font-size: 1.5rem;
      width: 40px;
      height: 40px;
      background-color: var(--color-bg-alt);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .contact-details {
      flex: 1;
    }

    .contact-label {
      font-size: 0.875rem;
      color: var(--color-text-light);
      margin-bottom: 4px;
    }

    .contact-value {
      font-size: 1.125rem;
      font-weight: 500;
      color: var(--color-text);
      text-decoration: none;
      transition: color 0.3s;
    }

    .contact-value:hover {
      color: var(--color-primary);
    }

    .contact-form {
      background-color: var(--color-card);
      border: 1px solid var(--color-border);
      border-radius: 12px;
      padding: 32px;
    }

    .contact-form h3 {
      margin-bottom: 24px;
      color: var(--color-text);
    }

    .form-group {
      margin-bottom: 24px;
    }

    .form-group label {
      display: block;
      margin-bottom: 8px;
      font-weight: 500;
      color: var(--color-text);
    }

    .form-group input,
    .form-group textarea {
      width: 100%;
      padding: 12px;
      background-color: var(--color-bg);
      border: 1px solid var(--color-border);
      border-radius: 8px;
      color: var(--color-text);
      font-size: 1rem;
      transition: border-color 0.3s;
    }

    .form-group input:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: var(--color-primary);
    }

    .form-group textarea {
      resize: vertical;
      min-height: 120px;
      font-family: inherit;
    }

    .contact-form .btn {
      width: 100%;
      margin-top: 8px;
    }

    .success-message {
      margin-top: 16px;
      padding: 12px;
      background-color: #d4edda;
      color: #155724;
      border-radius: 8px;
      border: 1px solid #c3e6cb;
      text-align: center;
    }

    .dark-mode .success-message {
      background-color: #1a3a1a;
      color: #8fdf8f;
      border-color: #2d5a2d;
    }

    @media (max-width: 768px) {
      .contact-content {
        grid-template-columns: 1fr;
      }

      .contact-form {
        padding: 24px;
      }
    }
  `]
})
export class ContactComponent {
  formData = signal({
    name: '',
    email: '',
    message: ''
  });

  isSubmitting = signal(false);
  messageSent = signal(false);

  onSubmit() {
    if (this.isSubmitting()) return;

    this.isSubmitting.set(true);

    setTimeout(() => {
      console.log('Form submitted:', this.formData());

      this.messageSent.set(true);
      this.isSubmitting.set(false);

      this.formData.set({
        name: '',
        email: '',
        message: ''
      });

      setTimeout(() => {
        this.messageSent.set(false);
      }, 5000);
    }, 1500);
  }
}
