export interface videoDB { //DB - database
    id: number //int8
    name: string
    comments: Comment[] | null  //jsonb
    image: string | null
}

export interface Comment{
    username: string,
    txt: string,
    date: string,
}