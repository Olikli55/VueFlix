export interface videoDB { //DB - database
    id: number //int8
    name: string
    coments: Record<string, any> | null //jsonb
    image: string | null
}

export interface videoUI {
    id: number;
    name: string;
};