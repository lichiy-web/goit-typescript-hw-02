import { UnsplashImageItem } from "./services/api.types"

// export type ImageItem = {
//     id: string,
//     urls: Pick<ImageUrls, "small">,
//     alt_description: string | null,
//     color: string,
// }

export type ImageItem = Pick<UnsplashImageItem, "id" | "urls" | "alt_description" | "description" | "likes" | "user" | "color">;