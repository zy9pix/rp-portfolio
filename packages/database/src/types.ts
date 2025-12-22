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
                    title: string
                    description: string
                    tags: string[]
                    owner: 'oliver' | 'hana'
                }
                Insert: {
                    id?: string
                    created_at?: string
                    title: string
                    description: string
                    tags?: string[]
                    owner: 'oliver' | 'hana'
                }
                Update: {
                    id?: string
                    created_at?: string
                    title?: string
                    description?: string
                    tags?: string[]
                    owner?: 'oliver' | 'hana'
                }
            }
        }
    }
}
