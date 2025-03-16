import { AxiosHeaders } from "axios";

type TopicSubmition = {
        status: string, // "approved" | "rejected",
        approved_on?: string // "2023-11-10T11:31:41Z"
}

type TopicSubmissions = {
    [topic: string]: TopicSubmition 
}

export type UnsplashImageItem = {
                id: string, //"ZCHj_2lJP00"
                slug: string, //"white-and-brown-long-fur-cat-ZCHj_2lJP00",
                alternative_slugs: {
                    en: string, //"white-and-brown-long-fur-cat-ZCHj_2lJP00",
                    es: string, //"gato-de-pelaje-largo-blanco-y-marron-ZCHj_2lJP00",
                    ja: string, //"白と茶色の長い毛皮の猫-ZCHj_2lJP00",
                    fr: string, //"chat-a-longue-fourrure-blanc-et-brun-ZCHj_2lJP00",
                    it: string, //"gatto-a-pelo-lungo-bianco-e-marrone-ZCHj_2lJP00",
                    ko: string, //"흰색과-갈색-긴-모피-고양이-ZCHj_2lJP00",
                    de: string, //"weisse-und-braune-langfellkatze-ZCHj_2lJP00",
                    pt: string, //"gato-de-pelo-longo-branco-e-marrom-ZCHj_2lJP00"
                },
                created_at: string, // "2020-06-15T04:30:27Z",
                updated_at: string, // "2025-03-16T00:47:52Z",
                promoted_at: string | null, // "2020-06-15T08:16:29Z",
                width: number, // 5304,
                height: number, // 7952,
                color: string, // "#a6d9d9",
                blur_hash: string, // "LRJcqDIUL3s..mX8rXRPOZnirWXT",
                description: string | null,
                alt_description: string | null// "white and brown long fur cat",
                breadcrumbs: [],
                urls: {
                    raw: string, //"https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixid=M3w3MDM1Njh8MHwxfHNlYXJjaHwxfHxjYXRzfGVufDB8fHx8MTc0MjA5OTk4M3ww&ixlib=rb-4.0.3",
                    full: string, //"https://images.unsplash.com/photo-1592194996308-7b43878e84a6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MDM1Njh8MHwxfHNlYXJjaHwxfHxjYXRzfGVufDB8fHx8MTc0MjA5OTk4M3ww&ixlib=rb-4.0.3&q=85",
                    regular: string, //"https://images.unsplash.com/photo-1592194996308-7b43878e84a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDM1Njh8MHwxfHNlYXJjaHwxfHxjYXRzfGVufDB8fHx8MTc0MjA5OTk4M3ww&ixlib=rb-4.0.3&q=80&w=1080",
                    small: string, //"https://images.unsplash.com/photo-1592194996308-7b43878e84a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDM1Njh8MHwxfHNlYXJjaHwxfHxjYXRzfGVufDB8fHx8MTc0MjA5OTk4M3ww&ixlib=rb-4.0.3&q=80&w=400",
                    thumb: string, //"https://images.unsplash.com/photo-1592194996308-7b43878e84a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDM1Njh8MHwxfHNlYXJjaHwxfHxjYXRzfGVufDB8fHx8MTc0MjA5OTk4M3ww&ixlib=rb-4.0.3&q=80&w=200",
                    small_s3: string, //"https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1592194996308-7b43878e84a6"
                },
                links: {
                    self: string, //"https://api.unsplash.com/photos/white-and-brown-long-fur-cat-ZCHj_2lJP00",
                    html: string, //"https://unsplash.com/photos/white-and-brown-long-fur-cat-ZCHj_2lJP00",
                    download: string, //"https://unsplash.com/photos/ZCHj_2lJP00/download?ixid=M3w3MDM1Njh8MHwxfHNlYXJjaHwxfHxjYXRzfGVufDB8fHx8MTc0MjA5OTk4M3ww",
                    download_location: string, //"https://api.unsplash.com/photos/ZCHj_2lJP00/download?ixid=M3w3MDM1Njh8MHwxfHNlYXJjaHwxfHxjYXRzfGVufDB8fHx8MTc0MjA5OTk4M3ww"
                },
                likes: number, // 2439,
                liked_by_user: boolean,
                current_user_collections: [],
                sponsorship: string | null,
                topic_submissions: TopicSubmissions,
                asset_type: string, //"photo",
                user: {
                    id: string // "1LMzZNX562k",
                    updated_at: string, // "2025-03-02T19:25:36Z",
                    username: string, // "alvannee",
                    name: string, // "Alvan Nee",
                    first_name: string, // "Alvan",
                    last_name: string | null, // "Nee",
                    twitter_username: string | null, // "Alvan Nee",
                    portfolio_url: string | null,
                    bio: string | null, // "I really love unsplash！！！！！",
                    location: string | null, // "Shanghai, China",
                    links: {
                        self: string, //"https://api.unsplash.com/users/alvannee",
                        html: string, //"https://unsplash.com/@alvannee",
                        photos: string, //"https://api.unsplash.com/users/alvannee/photos",
                        likes: string, //"https://api.unsplash.com/users/alvannee/likes",
                        portfolio: string, //"https://api.unsplash.com/users/alvannee/portfolio",
                        following?: string, //"https://api.unsplash.com/users/alvannee/following",
                        followers?: string, //"https://api.unsplash.com/users/alvannee/followers"
                    },
                    profile_image: {
                        small: string, //"https://images.unsplash.com/profile-1617947361627-4a8765a9b014image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                        medium: string, //"https://images.unsplash.com/profile-1617947361627-4a8765a9b014image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                        large: string, //"https://images.unsplash.com/profile-1617947361627-4a8765a9b014image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                    },
                    instagram_username: string | null, //"alvan_nee",
                    total_collections: number, // 0,
                    total_likes: number, // 68,
                    total_photos: number, // 115,
                    total_promoted_photos: number, // 23,
                    total_illustrations: number, // 0,
                    total_promoted_illustrations: number, // 0,
                    accepted_tos: boolean,
                    for_hire: boolean,
                    social: {
                        instagram_username: string | null, //"alvan_nee",
                        portfolio_url: string | null,
                        twitter_username: string | null, //"Alvan Nee",
                        paypal_email: string | null
                    }
                }
            }

export interface UnsplashData {
    total: number, // image items amounts
    total_pages: number, // pages amounts
    results: UnsplashImageItem[],
}

interface Response {
    data: object
}

export interface AxiosResponse extends Response {
    status: number,
    statusText: string,
    headers: AxiosHeaders,
    config: XMLHttpRequest,
    request: object
}

export interface UnsplashResponse extends AxiosResponse {
    data: UnsplashData
}