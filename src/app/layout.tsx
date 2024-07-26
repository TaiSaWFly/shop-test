import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.scss";
import { SITE_NAME } from "@/constants/seo.constants";
import WithProviders from "@/components/hoc/WithProviders";
import Header from "@/components/ui/Header/HeaderComponent/Header";
import Footer from "@/components/ui/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: {
        default: SITE_NAME,
        template: `%s | ${SITE_NAME}`
    },
    description: SITE_NAME
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <WithProviders>
                    <div className="app_page">
                        <Header />
                        <main>{children}</main>
                        <Footer />
                    </div>
                </WithProviders>
            </body>
        </html>
    );
}
