export interface Film {
    id:number //int8
    name: string
    comment: Record<string, any>; // jsonb
    image: string
    isFilm: boolean
}