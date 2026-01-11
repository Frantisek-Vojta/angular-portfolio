import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="skills section section-alt">
      <div class="container">
        <div class="section-title">
          <h2>Dovednosti</h2>
          <div class="underline"></div>
        </div>

        <div class="skills-grid grid grid-3">
          <div *ngFor="let skill of skills()" class="skill-card card">
            <h3>{{ skill.name }}</h3>
            <p>{{ skill.description }}</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* SKILLS STYLES */
    .skills {
      background-color: var(--color-bg-alt);
    }

    .skills-grid {
      max-width: 1000px;
      margin: 0 auto;
    }

    .skill-card {
      display: flex;
      flex-direction: column;
    }

    .skill-card h3 {
      color: var(--color-text);
      margin-bottom: 12px;
    }

    .skill-card p {
      flex-grow: 1;
      margin-bottom: 24px;
      color: var(--color-text-light);
      font-size: 0.9375rem;
    }

    .skill-progress {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .progress-bar {
      flex-grow: 1;
      height: 8px;
      background-color: var(--color-border-light);
      border-radius: 4px;
      overflow: hidden;
    }

    .progress-fill {
      height: 100%;
      background-color: var(--color-primary);
      border-radius: 4px;
      transition: width 1s ease-in-out;
    }

    .progress-text {
      font-weight: 600;
      color: var(--color-primary);
      min-width: 40px;
    }

    @media (max-width: 768px) {
      .skills-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 480px) {
      .skills-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class SkillsComponent {
  skills = signal([
    { name: 'Java', description: 'Minecraft pluginy, Discord boti'},
    { name: 'Kotlin', description: 'Discord boti', level: 80 },
    { name: 'Python', description: 'všechno možné i nemožné', level: 80 },
    { name: 'HTML/CSS/JS', description: 'Responzivní web design', level: 90 },
    { name: 'Figma', description: 'Design a návrhy', level: 90 },

  ]);
}
