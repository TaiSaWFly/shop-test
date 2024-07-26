import { APP_PAGES } from "@/constants/page-url.config.constants";
import { NavigateType } from "@/ts/types/app.types";

export const SHOES_NAVIGATE: NavigateType = {
    PAGE_NAME: "обувь",
    PAGE_URL: APP_PAGES.CATALOG,
    PAGE_QUERY: "shoes"
};

export const CLOTH_NAVIGATE: NavigateType = {
    PAGE_NAME: "одежда",
    PAGE_URL: APP_PAGES.CATALOG,
    PAGE_QUERY: "cloth"
};

export const ACCESSORY_NAVIGATE: NavigateType = {
    PAGE_NAME: "аксессуары",
    PAGE_URL: APP_PAGES.CATALOG,
    PAGE_QUERY: "accessory"
};

export const navigateData: NavigateType[] = [
    SHOES_NAVIGATE,
    CLOTH_NAVIGATE,
    ACCESSORY_NAVIGATE
];
