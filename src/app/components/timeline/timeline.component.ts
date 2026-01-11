import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="timeline" class="timeline fade-in">
      <div class="container">
        <h2 class="section-title">Moje <span class="gradient-text">cesta</span></h2>

        <div class="timeline-container">
          <div class="timeline-track">
            <div *ngFor="let event of timelineEvents(); let i = index"
                 class="timeline-event"
                 [class.left]="i % 2 === 0"
                 [class.right]="i % 2 !== 0">

              <div class="event-marker">
                <div class="marker-dot"></div>
                <div class="marker-line"></div>
              </div>

              <div class="event-card card">
                <div class="event-date">{{ event.date }}</div>
                <h3 class="event-title">{{ event.title }}</h3>
                <p class="event-description">{{ event.description }}</p>

                <div class="event-tags">
                  <span *ngFor="let tag of event.tags" class="tag">{{ tag }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .timeline {
      padding: 100px 0;
      background: var(--bg-secondary);
      position: relative;
    }

    .timeline-container {
      position: relative;
      max-width: 1000px;
      margin: 0 auto;
    }

    .timeline-track {
      position: relative;
      padding: 40px 0;
    }

    .timeline-track::before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 2px;
      height: 100%;
      background: linear-gradient(to bottom, var(--primary), var(--accent), transparent);
    }

    .timeline-event {
      position: relative;
      margin-bottom: 60px;
      width: calc(50% - 30px);
    }

    .timeline-event.left {
      left: 0;
      text-align: right;
    }

    .timeline-event.right {
      left: calc(50% + 30px);
      text-align: left;
    }

    .event-marker {
      position: absolute;
      top: 20px;
      width: 60px;
      height: 2px;
      background: var(--border);
    }

    .timeline-event.left .event-marker {
      right: -60px;
    }

    .timeline-event.right .event-marker {
      left: -60px;
    }

    .marker-dot {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 12px;
      height: 12px;
      background: var(--primary);
      border-radius: 50%;
      border: 3px solid var(--bg-secondary);
    }

    .timeline-event.left .marker-dot {
      right: -6px;
    }

    .timeline-event.right .marker-dot {
      left: -6px;
    }

    .marker-line {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, var(--border), transparent);
    }

    .timeline-event.left .marker-line {
      background: linear-gradient(90deg, transparent, var(--border));
    }

    .event-card {
      position: relative;
      z-index: 1;
      transition: var(--transition);
    }

    .event-card:hover {
      transform: translateY(-5px) scale(1.02);
      box-shadow: var(--shadow-xl);
    }

    .event-date {
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--primary);
      margin-bottom: 12px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .event-title {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 12px;
      color: var(--text-main);
    }

    .event-description {
      font-size: 0.9375rem;
      line-height: 1.6;
      color: var(--text-secondary);
      margin-bottom: 16px;
    }

    .event-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .tag {
      font-size: 0.75rem;
      padding: 4px 12px;
      background: var(--bg-secondary);
      color: var(--text-secondary);
      border-radius: 50px;
      border: 1px solid var(--border);
      transition: var(--transition);
    }

    .event-card:hover .tag {
      background: var(--primary);
      color: white;
      border-color: var(--primary);
    }

    @media (max-width: 768px) {
      .timeline {
        padding: 80px 0;
      }

      .timeline-track::before {
        left: 30px;
      }

      .timeline-event {
        width: calc(100% - 60px);
        left: 60px !important;
        text-align: left !important;
        margin-bottom: 40px;
      }

      .event-marker {
        left: -60px !important;
        right: auto !important;
      }

      .marker-dot {
        left: -6px !important;
        right: auto !important;
      }

      .marker-line {
        background: linear-gradient(90deg, transparent, var(--border)) !important;
      }
    }

    @media (max-width: 480px) {
      .timeline {
        padding: 60px 0;
      }

      .timeline-event {
        width: calc(100% - 40px);
        left: 40px !important;
      }

      .event-marker {
        left: -40px !important;
        width: 40px;
      }
    }
  `]
})
export class TimelineComponent {
  timelineEvents = signal([
    {
      date: '2022',
      title: 'První kroky v programování',
      description: 'Začal jsem se učit základy Pythonu a webového vývoje. Vytvořil jsem své první jednoduché skripty a webové stránky.',
      tags: ['Python', 'HTML', 'CSS']
    },
    {
      date: '01.09.2023',
      title: 'Střední škola IT',
      description: 'Nastoupil jsem do prvního ročníku střední školy ve Zlíně na obor informační technologie.',
      tags: ['Škola', 'Základy', 'Python', 'JavaScript']
    },
    {
      date: '26.12.2024',
      title: 'Hlavní developer na Minecraft serveru',
      description: 'Vytvořil jsem svoje první Minecraft pluginy a skripty. Udržoval a navrhoval chod serveru s 400+ členy.',
      tags: ['Java', 'Spigot', 'Minecraft', 'Pluginy']
    },
    {
      date: '12.4.2025',
      title: 'Mr. Koblizek v2 - Discord Bot',
      description: 'Discord bot s ekonomickým systémem, shop, work, gambling funkcemi. Postaven v Javě.',
      tags: ['Java', 'JDA', 'Discord', 'Bot']
    },
    {
      date: '06.09.2025',
      title: 'Technik a developer na XMP',
      description: 'Pracuji jako technik a developer na XMP - Minecraft serveru Youtubera "Plej".',
      tags: ['Java', 'Minecraft', 'Development', 'Technik']
    },
    {
      date: '2026',
      title: 'Kdo ví ...',
      description: 'Další krok v mé vývojářské kariéře. Neustále se učím nové technologie a rozšiřuji své dovednosti.',
      tags: ['Budoucnost', 'Růst', 'Učení']
    }
  ]);
}
