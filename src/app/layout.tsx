import "@/app/styles/globals.css";
import CartOverlay from "@/app/components/CartOverlay";

import ReduxProvider from "@/app/providers/Provider";
import QueryProvider from "@/lib/ReactQueryProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReduxProvider>
      <QueryProvider>
        <html>
          <body>
            <CartOverlay />
            {children}
          </body>
        </html>
      </QueryProvider>
    </ReduxProvider>
  );
}
