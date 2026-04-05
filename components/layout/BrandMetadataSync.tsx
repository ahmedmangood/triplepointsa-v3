'use client'

import { useEffect } from 'react'
import { useI18n } from '@/lib/i18n/context'

const BRAND_NAME_PATTERN = /Triple Point|The Triple Point|triple point|النقطة الثلاثية/gi

function replaceBrand(value: string, brandName: string) {
  return value.replace(BRAND_NAME_PATTERN, brandName)
}

export default function BrandMetadataSync() {
  const { t } = useI18n()
  const brandName = t.meta.co_title

  useEffect(() => {
    document.title = replaceBrand(document.title, brandName)

    const metaSelectors = [
      'meta[name="description"]',
      'meta[property="og:title"]',
      'meta[property="og:description"]',
      'meta[name="twitter:title"]',
      'meta[name="twitter:description"]',
      'meta[name="application-name"]',
      'meta[name="apple-mobile-web-app-title"]',
    ]

    metaSelectors.forEach((selector) => {
      const element = document.querySelector<HTMLMetaElement>(selector)
      const content = element?.getAttribute('content')
      if (element && content) {
        element.setAttribute('content', replaceBrand(content, brandName))
      }
    })

    const orgJsonLd = document.getElementById('org-jsonld')
    if (orgJsonLd?.textContent) {
      try {
        const data = JSON.parse(orgJsonLd.textContent)
        if (data && typeof data === 'object') {
          data.name = brandName
          orgJsonLd.textContent = JSON.stringify(data)
        }
      } catch {
        // Ignore invalid JSON-LD content.
      }
    }
  }, [brandName])

  return null
}
