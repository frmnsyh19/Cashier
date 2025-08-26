"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";

export default function QuerysProvider({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient()); // Create QueryClient on the client

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
