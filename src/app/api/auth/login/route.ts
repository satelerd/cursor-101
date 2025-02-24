import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(request: Request) {
  try {
    const { key } = await request.json()

    // Verificar la clave con la variable de entorno
    if (key !== process.env.APP_SECRET_KEY) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    // Crear cookie de sesión
    const response = new NextResponse('OK', { status: 200 })
    response.cookies.set('auth', 'true', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
    })

    return response
  } catch (error) {
    console.error('Login error:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
} 