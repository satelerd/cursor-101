import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/client'
import { cookies } from 'next/headers'

export async function GET() {
  try {
    // Verificar autenticación
    const cookieStore = cookies()
    const isAuthenticated = cookieStore.has('auth')

    if (!isAuthenticated) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    const supabase = createClient()
    const { data, error } = await supabase
      .from('trackers')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching trackers:', error)
      return new NextResponse('Internal Server Error', { status: 500 })
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error('Error in GET /api/trackers:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    // Verificar autenticación
    const cookieStore = cookies()
    const isAuthenticated = cookieStore.has('auth')

    if (!isAuthenticated) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    const body = await request.json()
    const { name, description } = body

    if (!name) {
      return new NextResponse('Name is required', { status: 400 })
    }

    const supabase = createClient()
    const { data, error } = await supabase
      .from('trackers')
      .insert([{ name, description }])
      .select()
      .single()

    if (error) {
      console.error('Error creating tracker:', error)
      return new NextResponse('Internal Server Error', { status: 500 })
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error('Error in POST /api/trackers:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}