import { createClient } from '@supabase/supabase-js'
import {onMounted} from "vue";
import type {videoDB} from "@/types.ts";

// Vite exposes environment variables using import.meta.env
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// This creates the connection to your database
export const supabase = createClient(supabaseUrl, supabaseKey)


export async function fetchById(videoType:string, id:string):Promise<videoDB>  {
    const { data, error } = await supabase
            .from(videoType)
            .select('*')
            .eq('id', String(id)) //supabase can sometimes return int8 as string bz of its size
            .single()

    if (error){throw error;}
    if (data) {return data;}
    throw new Error("no data!!!");
}

export async function fetchAll(videoType: string): Promise<videoDB[]> {
    const { data, error } = await supabase
        .from(videoType)
        .select('*')

    if (error) {throw error;}
    if (data) {return data;}
    throw new Error('no data!!')

}