import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://triplepointsa.com'
  const now = new Date()

  return [
    { url: base,                                      lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/about`,                           lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services`,                        lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/meeting-rooms`,          lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/queue-management`,       lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/security-surveillance`,  lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/smart-home`,             lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/video-wall`,             lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/projects`,                        lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact`,                         lastModified: now, changeFrequency: 'yearly',  priority: 0.9 },
  ]
}
