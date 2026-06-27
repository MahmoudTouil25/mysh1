import type { EventItem } from '@/types/content';

export const events: EventItem[] = [
  {
    slug: 'dubai-infrastructure-rental-briefing',
    title: 'Dubai Infrastructure Rental Briefing',
    metaTitle: 'Dubai Infrastructure Rental Briefing | MYSH',
    metaDescription:
      'A contractor briefing on planning heavy equipment rental for infrastructure maintenance and civil works in Dubai.',
    image: '/images/equipment/CAT-349DL.png',
    excerpt:
      'A focused session for contractors planning machinery rental around infrastructure and maintenance projects.',
    date: '2026-08-20',
    location: 'Dubai, UAE',
    eventType: 'Contractor Briefing',
    content: [
      {
        heading: 'What the briefing covers',
        body: 'The session covers rental planning, equipment matching, mobilization considerations and common bottlenecks for infrastructure teams.',
      },
      {
        heading: 'Who should attend',
        body: 'Procurement teams, project managers, civil contractors and maintenance planners working on UAE infrastructure packages will benefit most.',
      },
    ],
  },
  {
    slug: 'marine-equipment-readiness-workshop',
    title: 'Marine Equipment Readiness Workshop',
    metaTitle: 'Marine Equipment Readiness Workshop UAE',
    metaDescription:
      'Workshop on preparing heavy equipment rental requirements for marine, coastal and port infrastructure operations.',
    image: '/images/hero-equipment.jpg',
    excerpt:
      'A practical readiness workshop for port, coastal and marine-side machinery rental planning.',
    date: '2026-09-14',
    location: 'Jebel Ali, Dubai',
    eventType: 'Workshop',
    content: [
      {
        heading: 'Marine-side rental planning',
        body: 'Participants review access constraints, machine classes, safety coordination and availability planning for port and coastal projects.',
      },
      {
        heading: 'Rental coordination topics',
        body: 'The workshop includes rental duration planning, quote information, transport considerations and equipment use case matching.',
      },
    ],
  },
  {
    slug: 'road-maintenance-equipment-day',
    title: 'Road Maintenance Equipment Day',
    metaTitle: 'Road Maintenance Equipment Day Dubai',
    metaDescription:
      'A MYSH event for road maintenance contractors comparing rental machinery for repair, resurfacing and route rehabilitation work.',
    image: '/images/equipment/VOLVO-A40F.png',
    excerpt:
      'A machinery planning day for contractors managing road repair and maintenance scopes.',
    date: '2026-10-08',
    location: 'Dubai Industrial City',
    eventType: 'Equipment Planning Day',
    content: [
      {
        heading: 'Project-focused comparisons',
        body: 'The event helps teams compare machine roles for hauling, excavation, grading and support work in route maintenance operations.',
      },
      {
        heading: 'Quote preparation',
        body: 'Attendees learn what information speeds up rental quotes, including site location, duration, task type and preferred mobilization date.',
      },
    ],
  },
];
