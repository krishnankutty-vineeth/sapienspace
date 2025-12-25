
import { Geist, Geist_Mono } from "next/font/google";
import '@/app/styles/globals.css';

import { NavigationProvider } from "@/app/NavigationProvider";
import TopNavbar from "@/app/TopNavbar";
import ExploreSidebar from "@/app/ExploreSidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SapienSpace",
  description: "Where Human Wisdom Meets the Infinite Cosmos."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-black text-white antialiased`}
      >
          <NavigationProvider>
          <TopNavbar />
          <ExploreSidebar />
          <main className="pt-14">
            {children}
            {/* <UserProvider>{children}</UserProvider> */}
          </main>
        </NavigationProvider>
      </body>
    </html>
  );
}

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }
