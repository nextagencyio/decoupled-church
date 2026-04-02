// Auto-generated TypeScript types from Drupal GraphQL schema.
// Run `decoupled-cli schema sync` to regenerate.

export interface NodeEvent {
  id: string;
  body: { value: string; summary?: string };
  endDate: { time: string };
  eventDate: { time: string };
  eventType: any[];
  image: { url: string; alt: string; width: number; height: number };
  location: string;
  path: string;
  registrationUrl: string;
  title: string;
}

export interface NodeHomepage {
  id: string;
  ctaDescription: { value: string };
  ctaPrimary: string;
  ctaSecondary: string;
  ctaTitle: string;
  featuredSermonsTitle: string;
  heroDescription: { value: string };
  heroSubtitle: string;
  heroTitle: string;
  path: string;
  statsItems: any[];
  title: string;
}

export interface ParagraphStatItem {
  id: string;
  label: string;
  number: string;
}

export interface NodeMinistry {
  id: string;
  body: { value: string; summary?: string };
  image: { url: string; alt: string; width: number; height: number };
  leaderName: string;
  location: string;
  meetingSchedule: string;
  ministryArea: any[];
  path: string;
  title: string;
}

export interface NodePage {
  id: string;
  body: { value: string; summary?: string };
  path: string;
  title: string;
}

export interface NodeSermon {
  id: string;
  audioUrl: string;
  body: { value: string; summary?: string };
  image: { url: string; alt: string; width: number; height: number };
  path: string;
  sermonDate: { time: string };
  sermonSeries: any[];
  speaker: string;
  title: string;
  videoUrl: string;
}

export interface NodeStaff {
  id: string;
  body: { value: string; summary?: string };
  email: string;
  path: string;
  phone: string;
  photo: { url: string; alt: string; width: number; height: number };
  position: string;
  title: string;
}
