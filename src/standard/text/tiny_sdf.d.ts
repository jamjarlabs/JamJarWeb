declare module "tiny-sdf" {
    export default class TinySDF {
        constructor(fontSize?: number, buffer?: number, radius?: number, cutoff?: number, fontFamily?: string, fontWeight?: string)
        draw(char: string): ImageData
    }
}