import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('renders hero section with content from Drupal', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('heading', { name: /A Place to Belong/i })).toBeVisible()
  })

  test('renders stats section', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('1,200+')).toBeVisible()
    await expect(page.getByText('Church Members')).toBeVisible()
  })

  test('renders navigation links', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('nav').getByRole('link', { name: 'Sermons' })).toBeVisible()
    await expect(page.locator('nav').getByRole('link', { name: 'Ministries' })).toBeVisible()
    await expect(page.locator('nav').getByRole('link', { name: 'Events' })).toBeVisible()
    await expect(page.locator('nav').getByRole('link', { name: 'Staff' })).toBeVisible()
  })
})

test.describe('Sermons listing', () => {
  test('displays sermon cards', async ({ page }) => {
    await page.goto('/sermons')
    await expect(page.getByRole('heading', { level: 1, name: /Sermons/i })).toBeVisible()
    await expect(page.getByText('Faith That Moves Mountains').first()).toBeVisible()
    await expect(page.getByText('Grace Is Sufficient').first()).toBeVisible()
  })
})

test.describe('Sermon detail', () => {
  test('loads a sermon detail page', async ({ page }) => {
    await page.goto('/sermons/faith-that-moves-mountains')
    await expect(page.getByRole('heading', { name: /Faith That Moves Mountains/i })).toBeVisible()
    await expect(page.getByText('Pastor James Mitchell').first()).toBeVisible()
  })
})

test.describe('Ministries listing', () => {
  test('displays ministry cards', async ({ page }) => {
    await page.goto('/ministries')
    await expect(page.getByRole('heading', { level: 1, name: /Ministries/i })).toBeVisible()
    await expect(page.getByText('Youth Ministry').first()).toBeVisible()
    await expect(page.getByText('Worship Team').first()).toBeVisible()
  })
})

test.describe('Ministry detail', () => {
  test('loads a ministry detail page', async ({ page }) => {
    await page.goto('/ministries/youth-ministry')
    await expect(page.getByRole('heading', { name: /Youth Ministry/i })).toBeVisible()
  })
})

test.describe('Events listing', () => {
  test('displays event cards', async ({ page }) => {
    await page.goto('/events')
    await expect(page.getByRole('heading', { level: 1, name: /Events/i })).toBeVisible()
    await expect(page.getByText('Easter Celebration Service').first()).toBeVisible()
  })
})

test.describe('Event detail', () => {
  test('loads an event detail page', async ({ page }) => {
    await page.goto('/events/easter-celebration')
    await expect(page.getByRole('heading', { name: /Easter Celebration Service/i })).toBeVisible()
  })
})

test.describe('Staff listing', () => {
  test('displays staff cards', async ({ page }) => {
    await page.goto('/staff')
    await expect(page.getByRole('heading', { level: 1 }).filter({ hasText: /Staff/i })).toBeVisible()
    await expect(page.getByText('Pastor James Mitchell').first()).toBeVisible()
    await expect(page.getByText('Pastor Sarah Chen').first()).toBeVisible()
    await expect(page.getByText('Pastor Mike Torres').first()).toBeVisible()
  })
})

test.describe('Staff detail', () => {
  test('loads a staff detail page', async ({ page }) => {
    await page.goto('/staff/pastor-james-mitchell')
    await expect(page.getByRole('heading', { name: /Pastor James Mitchell/i })).toBeVisible()
    await expect(page.getByText('Senior Pastor').first()).toBeVisible()
  })
})

test.describe('Static pages', () => {
  test('loads the about page', async ({ page }) => {
    await page.goto('/about')
    await expect(page.getByRole('heading', { name: /About Grace Community Church/i })).toBeVisible()
  })

  test('loads the visit page', async ({ page }) => {
    await page.goto('/visit')
    await expect(page.getByRole('heading', { name: /Plan Your Visit/i })).toBeVisible()
  })
})

test.describe('Navigation', () => {
  test('navigates from homepage to sermons via nav link', async ({ page }) => {
    await page.goto('/')
    await page.locator('nav').getByRole('link', { name: 'Sermons' }).click()
    await expect(page).toHaveURL(/\/sermons/)
    await expect(page.getByRole('heading', { level: 1, name: /Sermons/i })).toBeVisible()
  })
})
