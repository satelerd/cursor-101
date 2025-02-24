'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Database } from '@/types/database.types'

type Tracker = Database['public']['Tables']['trackers']['Row']

export default function DashboardPage() {
  const [trackers, setTrackers] = useState<Tracker[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchTrackers = async () => {
      try {
        const response = await fetch('/api/trackers')
        if (!response.ok) {
          throw new Error('Failed to fetch trackers')
        }
        const data = await response.json()
        setTrackers(data)
      } catch (err) {
        setError('Error loading trackers')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchTrackers()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500">{error}</div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Your Trackers</h1>
        <Link
          href="/trackers/new"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium"
        >
          New Tracker
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {trackers.map((tracker) => (
          <Link
            key={tracker.id}
            href={`/trackers/${tracker.id}`}
            className="block p-6 bg-gray-800 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors"
          >
            <h2 className="text-xl font-semibold text-white mb-2">
              {tracker.name}
            </h2>
            {tracker.description && (
              <p className="text-gray-400">{tracker.description}</p>
            )}
          </Link>
        ))}

        {trackers.length === 0 && (
          <div className="col-span-full text-center text-gray-400 py-12">
            No trackers yet. Create your first one!
          </div>
        )}
      </div>
    </div>
  )
}