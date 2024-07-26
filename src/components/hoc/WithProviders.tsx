"use client";

import store from "@/store/createStore";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC, PropsWithChildren, useState } from "react";
import { Provider } from "react-redux";

const WithProviders: FC<PropsWithChildren<unknown>> = ({ children }) => {
    const [client] = useState(
        new QueryClient({
            defaultOptions: {
                queries: {
                    refetchOnWindowFocus: false
                }
            }
        })
    );

    return (
        <Provider store={store}>
            <QueryClientProvider client={client}>
                {children}
            </QueryClientProvider>
        </Provider>
    );
};

export default WithProviders;
