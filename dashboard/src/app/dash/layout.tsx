import { inter } from "@/app/ui/font";
import "@/app/ui/globals.css";
import SideNav from "@/app/ui/sideNav";

// const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="h-screen flex flex-col md:flex-row md:overflow-hidden">
          <div className="w-full md:w-1/5 p-2 bg-gray-50">
            <SideNav />
          </div>
            <div className=" w-full md:w-4/5 p-8 overflow-y-auto">
              {children}
            </div>
        </div>
      </body>
    </html>
  );
}
