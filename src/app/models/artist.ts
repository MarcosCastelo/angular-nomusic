import { Album } from './album'

export class Artist {
    pk: number;
    name: string;
    debut_year: number;
    albums: Album[];
}