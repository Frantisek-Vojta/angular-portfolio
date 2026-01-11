import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="projects section section-alt">
      <div class="container">
        <div class="section-title">
          <h2>Moje projekty</h2>
          <div class="underline"></div>
        </div>

        <div class="projects-grid grid grid-3">
          <div *ngFor="let project of projects()" class="project-card card">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>

            <div class="project-tech">
              <span *ngFor="let tech of project.tech" class="tech-tag">
                {{ tech }}
              </span>
            </div>

            <div class="project-links">
              <a *ngIf="project.github"
                 [href]="project.github"
                 target="_blank"
                 class="project-link">
                GitHub
              </a>
              <a *ngIf="project.demo"
                 [href]="project.demo"
                 target="_blank"
                 class="project-link demo">
                Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* PROJECTS STYLES */
    .projects {
      background-color: var(--color-bg-alt);
    }

    .projects-grid {
      max-width: 1200px;
      margin: 0 auto;
    }

    .project-card {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .project-card h3 {
      color: var(--color-text);
      margin-bottom: 16px;
    }

    .project-card p {
      flex-grow: 1;
      margin-bottom: 24px;
      color: var(--color-text-light);
      line-height: 1.6;
    }

    .project-tech {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 24px;
    }

    .tech-tag {
      background-color: var(--color-bg-alt);
      color: var(--color-primary);
      padding: 6px 12px;
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 500;
      border: 1px solid var(--color-border);
    }

    .project-links {
      display: flex;
      gap: 12px;
      margin-top: auto;
    }

    .project-link {
      flex: 1;
      text-align: center;
      padding: 10px;
      background-color: var(--color-primary);
      color: white;
      text-decoration: none;
      border-radius: 6px;
      font-size: 0.875rem;
      font-weight: 500;
      transition: all 0.3s;
    }

    .project-link:hover {
      background-color: var(--color-primary-dark);
      transform: translateY(-2px);
    }

    .project-link.demo {
      background-color: transparent;
      border: 1px solid var(--color-primary);
      color: var(--color-primary);
    }

    .project-link.demo:hover {
      background-color: var(--color-primary);
      color: white;
    }

    @media (max-width: 1024px) {
      .projects-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 768px) {
      .projects-grid {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 480px) {
      .project-links {
        flex-direction: column;
      }
    }
  `]
})
export class ProjectsComponent {
  projects = signal([
    {
      title: 'mr. koblizek v2 - Discord Bot',
      description: 'Discord bot postavený v Javě s utility příkazy, ekonomický systém s vlastní měnou.',
      tech: ['Java', 'JDA'],
      github: 'https://github.com/Frantisek-Vojta/mr-koblizek-v2',
      demo: 'https://frantisekvojta.cz/mr-koblizek/'
    },
    {
      title: 'Recepty s kalkulačkou',
      description: 'Responzivní web pro výpočet ingrediencí podle počtu porcí s kalkulací cen.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      demo: 'https://frantisekvojta.cz/recepty/'
    },
    {
      title: 'Nebulynx Cloud Website',
      description: 'Moderní web pro fiktivní cloudovou společnost s futuristickým designem.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      demo: 'https://frantisekvojta.cz/nebulynx/'
    },
  ]);
}
