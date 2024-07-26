let YMAP_KEY;
let API_ENDPOINT = "https://unicorngo.ru/main-api/api/customer-bot/";

if (process.env.NODE_ENV === "development") {
    YMAP_KEY = process.env.NEXT_PUBLIC_YMAP_KEY;
}

if (process.env.NODE_ENV === "production") {
    YMAP_KEY = process.env.NEXT_PUBLIC_YMAP_KEY;
}

export const APP_CONFIG = {
    apiEndPoint: API_ENDPOINT,
    YMAP_KEY: YMAP_KEY
};
