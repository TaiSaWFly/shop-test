class PAGEURLS {
    private root = "/";

    MAIN = this.root;
    CATALOG = `${this.root}catalog`;
    FAVORITE = `${this.root}favorite`;
    ORDER = `${this.root}order`;
    PAYMENT = `${this.ORDER}/payment`;
}

export const APP_PAGES = new PAGEURLS();
