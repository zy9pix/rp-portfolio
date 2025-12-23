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
            projects: {
                Row: {
                    id: string
                    created_at: string
                    slug: string
                    title: string
                    description: string
                    content: string
                    image_url: string
                    link: string
                    tags: string[]
                    owner: 'oliver' | 'hana'
                }
                Insert: {
                    id?: string
                    created_at?: string
                    slug: string
                    title: string
                    description: string
                    content: string
                    image_url?: string
                    tags?: string[]
                    owner: 'oliver' | 'hana'
                }
                Update: {
                    id?: string
                    created_at?: string
                    slug?: string
                    title?: string
                    description?: string
                    content?: string
                    image_url?: string
                    tags?: string[]
                    owner?: 'oliver' | 'hana'
                }
            }
        }
    }
}
