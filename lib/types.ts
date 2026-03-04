// Base node type
export interface DrupalNode {
  id: string
  title: string
  path: string
  created: {
    timestamp: number
  }
  changed: {
    timestamp: number
  }
}

// Paragraph types
export interface DrupalStatItem {
  id: string
  number: string
  label: string
}

// Homepage
export interface DrupalHomepage extends DrupalNode {
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: {
    processed: string
  }
  statsItems?: DrupalStatItem[]
  featuredSermonsTitle?: string
  ctaTitle?: string
  ctaDescription?: {
    processed: string
  }
  ctaPrimary?: string
  ctaSecondary?: string
}

export interface HomepageData {
  nodeHomepages: {
    nodes: DrupalHomepage[]
  }
}

// Sermon
export interface DrupalSermon extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  sermonSeries?: DrupalTerm[]
  sermonDate?: {
    timestamp: number
  }
  speaker?: string
  videoUrl?: string
  audioUrl?: string
  image?: DrupalImage
}

export interface SermonsData {
  nodeSermons: {
    nodes: DrupalSermon[]
  }
}

// Ministry
export interface DrupalMinistry extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  ministryArea?: DrupalTerm[]
  leaderName?: string
  meetingSchedule?: string
  location?: string
  image?: DrupalImage
}

export interface MinistriesData {
  nodeMinistries: {
    nodes: DrupalMinistry[]
  }
}

// Event
export interface DrupalEvent extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  eventDate?: {
    timestamp: number
  }
  endDate?: {
    timestamp: number
  }
  location?: string
  eventType?: DrupalTerm[]
  registrationUrl?: string
  image?: DrupalImage
}

export interface EventsData {
  nodeEvents: {
    nodes: DrupalEvent[]
  }
}

// Staff
export interface DrupalStaff extends DrupalNode {
  body?: {
    processed: string
  }
  position?: string
  email?: string
  phone?: string
  photo?: DrupalImage
}

export interface StaffData {
  nodeStaffs: {
    nodes: DrupalStaff[]
  }
}

// Basic Page
export interface DrupalPage extends DrupalNode {
  body?: {
    processed: string
  }
}

// Shared types
export interface DrupalImage {
  url: string
  alt?: string
  width?: number
  height?: number
  variations?: Array<{
    name: string
    url: string
    width: number
    height: number
  }>
}

export interface DrupalTerm {
  id: string
  name: string
  path?: string
}

// Legacy compatibility
export interface DrupalArticle extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  image?: DrupalImage
  tags?: DrupalTerm[]
}

export interface ArticleTeaserData {
  nodeArticles: {
    nodes: DrupalArticle[]
  }
}

export type FeatureColor = 'blue' | 'green' | 'purple' | 'yellow' | 'red' | 'indigo'
