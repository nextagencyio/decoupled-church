// Tagged template that returns the query string
const gql = (strings: TemplateStringsArray, ...values: any[]) => strings.reduce((a, s, i) => a + s + (values[i] || ''), '')

// Homepage query
export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    nodeHomepages(first: 1) {
      nodes {
        id
        title
        path
        heroTitle
        heroSubtitle
        heroDescription {
          processed
        }
        statsItems {
          ... on ParagraphStatItem {
            id
            number
            label
          }
        }
        featuredSermonsTitle
        ctaTitle
        ctaDescription {
          processed
        }
        ctaPrimary
        ctaSecondary
      }
    }
  }
`

// Sermons
export const GET_SERMONS = gql`
  query GetSermons($first: Int = 20) {
    nodeSermons(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        ... on NodeSermon {
          body {
            processed
            summary
          }
          sermonSeries {
            ... on TermInterface {
              id
              name
            }
          }
          sermonDate {
            timestamp
          }
          speaker
          videoUrl
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_SERMON_BY_PATH = gql`
  query GetSermonByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeSermon {
            id
            title
            path
            body {
              processed
            }
            sermonSeries {
              ... on TermInterface {
                id
                name
              }
            }
            sermonDate {
              timestamp
            }
            speaker
            videoUrl
            audioUrl
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Ministries
export const GET_MINISTRIES = gql`
  query GetMinistries($first: Int = 20) {
    nodeMinistries(first: $first, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeMinistry {
          body {
            processed
            summary
          }
          ministryArea {
            ... on TermInterface {
              id
              name
            }
          }
          leaderName
          meetingSchedule
          location
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_MINISTRY_BY_PATH = gql`
  query GetMinistryByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeMinistry {
            id
            title
            path
            body {
              processed
            }
            ministryArea {
              ... on TermInterface {
                id
                name
              }
            }
            leaderName
            meetingSchedule
            location
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Events
export const GET_EVENTS = gql`
  query GetEvents($first: Int = 20) {
    nodeEvents(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        ... on NodeEvent {
          body {
            processed
            summary
          }
          eventDate {
            timestamp
          }
          endDate {
            timestamp
          }
          location
          eventType {
            ... on TermInterface {
              id
              name
            }
          }
          registrationUrl
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_EVENT_BY_PATH = gql`
  query GetEventByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeEvent {
            id
            title
            path
            body {
              processed
            }
            eventDate {
              timestamp
            }
            endDate {
              timestamp
            }
            location
            eventType {
              ... on TermInterface {
                id
                name
              }
            }
            registrationUrl
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Staff
export const GET_STAFF = gql`
  query GetStaff($first: Int = 50) {
    nodeStaffItems(first: $first, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeStaff {
          body {
            processed
          }
          position
          email
          phone
          photo {
            url
            alt
            width
            height
            variations(styles: [MEDIUM, THUMBNAIL]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_STAFF_BY_PATH = gql`
  query GetStaffByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeStaff {
            id
            title
            path
            body {
              processed
            }
            position
            email
            phone
            photo {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Generic route query
export const GET_NODE_BY_PATH = gql`
  query GetNodeByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodePage {
            id
            title
            body {
              processed
            }
          }
          ... on NodeSermon {
            id
            title
            path
            body {
              processed
            }
            sermonSeries {
              ... on TermInterface {
                id
                name
              }
            }
            sermonDate {
              timestamp
            }
            speaker
            videoUrl
            audioUrl
          }
          ... on NodeMinistry {
            id
            title
            path
            body {
              processed
            }
            ministryArea {
              ... on TermInterface {
                id
                name
              }
            }
            leaderName
            meetingSchedule
            location
          }
          ... on NodeStaff {
            id
            title
            path
            body {
              processed
            }
            position
            email
            phone
          }
          ... on NodeEvent {
            id
            title
            path
            body {
              processed
            }
            eventDate {
              timestamp
            }
            endDate {
              timestamp
            }
            location
            eventType {
              ... on TermInterface {
                id
                name
              }
            }
            registrationUrl
          }
          ... on NodeHomepage {
            id
            title
            heroTitle
            heroSubtitle
            heroDescription {
              processed
            }
            statsItems {
              ... on ParagraphStatItem {
                id
                number
                label
              }
            }
            featuredSermonsTitle
            ctaTitle
            ctaDescription {
              processed
            }
            ctaPrimary
            ctaSecondary
          }
        }
      }
    }
  }
`

// Featured sermons for homepage
export const GET_FEATURED_SERMONS = gql`
  query GetFeaturedSermons {
    nodeSermons(first: 3, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        ... on NodeSermon {
          sermonSeries {
            ... on TermInterface {
              id
              name
            }
          }
          sermonDate {
            timestamp
          }
          speaker
          image {
            url
            alt
            variations(styles: [MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

// Upcoming events for homepage
export const GET_UPCOMING_EVENTS = gql`
  query GetUpcomingEvents {
    nodeEvents(first: 3, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        ... on NodeEvent {
          eventDate {
            timestamp
          }
          location
          eventType {
            ... on TermInterface {
              id
              name
            }
          }
        }
      }
    }
  }
`
