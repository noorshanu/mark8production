import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

export async function GET() {
  try {
    const cloudName = process.env.CLOUDINARY_CLOUD_NAME
    const apiKey = process.env.CLOUDINARY_API_KEY
    const apiSecret = process.env.CLOUDINARY_API_SECRET
    const folder = process.env.CLOUDINARY_REELS_FOLDER || 'reels'

    if (!cloudName || !apiKey || !apiSecret) {
      console.error('Missing Cloudinary credentials:', {
        cloudName: !!cloudName,
        apiKey: !!apiKey,
        apiSecret: !!apiSecret,
      })
      return NextResponse.json(
        { error: 'Cloudinary credentials not configured' },
        { status: 500 }
      )
    }

    const auth = Buffer.from(`${apiKey}:${apiSecret}`).toString('base64')

    // Use asset_folder parameter for newer Cloudinary folder structure
    // Fallback to prefix if asset_folder doesn't work
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/resources/video?type=upload&asset_folder=${encodeURIComponent(folder)}&max_results=50`
    
    console.log('Fetching from Cloudinary:', {
      cloudName,
      folder,
      url: url.replace(apiSecret || '', '***'),
    })

    const response = await fetch(url, {
      headers: {
        Authorization: `Basic ${auth}`,
      },
      cache: 'no-store',
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Cloudinary API error:', {
        status: response.status,
        statusText: response.statusText,
        error: errorText,
      })
      return NextResponse.json(
        { error: `Cloudinary API error: ${response.status} ${response.statusText}` },
        { status: response.status }
      )
    }

    const data = await response.json()
    console.log('Cloudinary response:', {
      resourceCount: data.resources?.length || 0,
      hasMore: !!data.next_cursor,
      firstResource: data.resources?.[0] ? {
        public_id: data.resources[0].public_id,
        secure_url: data.resources[0].secure_url?.substring(0, 100),
      } : null,
    })

    if (!data.resources || data.resources.length === 0) {
      console.warn('No videos found in folder:', folder)
      return NextResponse.json([])
    }

    interface CloudinaryResource {
      public_id: string
      secure_url: string
      format?: string
    }

    const reels = (data.resources as CloudinaryResource[])
      .filter((r) => r.secure_url) // Only include resources with URLs
      .map((r, i: number) => {
        const publicId = r.public_id.split('/').pop() || `Reel ${i + 1}`
        // Clean up the title (remove file extension and version numbers)
        const title = publicId
          .replace(/^v\d+_/, '') // Remove version prefix like "v1768554996_"
          .replace(/\.(mov|mp4|avi|webm)$/i, '') // Remove file extension
          .replace(/_/g, ' ') // Replace underscores with spaces
          .replace(/\b\w/g, (l) => l.toUpperCase()) // Capitalize first letter of each word

        return {
          id: i + 1,
          title: title || `Reel ${i + 1}`,
          category: 'Reels',
          thumbnail: 'bg-gradient-to-br from-yellow-500 to-orange-500',
          videoSrc: r.secure_url,
        }
      })

    console.log('Processed reels:', {
      count: reels.length,
      reels: reels.map((r) => ({ id: r.id, title: r.title, videoSrc: r.videoSrc.substring(0, 80) + '...' })),
    })
    return NextResponse.json(reels)
  } catch (error) {
    console.error('Error fetching reels:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}