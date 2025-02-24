export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      trackers: {
        Row: {
          id: string
          created_at: string
          name: string
          description: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          description?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          description?: string | null
        }
      }
      entries: {
        Row: {
          id: string
          created_at: string
          tracker_id: string
          date: string
          status: boolean
        }
        Insert: {
          id?: string
          created_at?: string
          tracker_id: string
          date: string
          status: boolean
        }
        Update: {
          id?: string
          created_at?: string
          tracker_id?: string
          date?: string
          status?: boolean
        }
      }
      reflections: {
        Row: {
          id: string
          created_at: string
          tracker_id: string
          content: string
        }
        Insert: {
          id?: string
          created_at?: string
          tracker_id: string
          content: string
        }
        Update: {
          id?: string
          created_at?: string
          tracker_id?: string
          content?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
} 