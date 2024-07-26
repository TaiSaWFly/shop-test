export interface IGeocodePoint {
    description: string;
    name: string;
    coordinates: number[];
    kind: string;
    text: string;
    components: {
        kind: string;
        name: string;
    }[];
}
