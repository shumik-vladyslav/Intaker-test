export interface Link {
    href: string;
    rel: string;
}

export interface Speaker {
    name: string;
    value: string;
    id: string;
}

export interface SpeakerItem {
    data: Speaker[];
    href: string;
    links: Link[];
}

export interface SpeakersResponse {
    collection: {
        href?: string;
        items?: SpeakerItem[];
        links?: Link[];
        queries?: any[];
        template?: { data: any[] };
        version?: string;
    }
}