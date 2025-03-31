import "@/app/styles/globals.css";
import { Poppins } from "next/font/google";
import ReduxProvider from "@/app/providers/Provider";
import QueryProvider from "@/lib/ReactQueryProvider";
import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/Header";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReduxProvider>
      <QueryProvider>
        <html>
          <body className={poppins.className}>
            <Header />
            {children}
            <Footer />
          </body>
        </html>
      </QueryProvider>
    </ReduxProvider>
  );
}
