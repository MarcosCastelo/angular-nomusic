import { Music } from './music'

export class Album {
    pk: number;
    title: string;
    genre: string;
    year: number;
    artist: string;
    musics: Music[];
}