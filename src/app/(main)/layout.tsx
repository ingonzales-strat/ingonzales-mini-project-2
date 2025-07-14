import NavBar from "@/components/navigation/navi_bar";
import { Geist, Geist_Mono } from "next/font/google";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
      <div
        className={`${geistSans.variable} ${geistMono.variable} antialiased p-5`}
        
      >
        <div className="flex justify-center md:justify-start " ><NavBar/></div>
        <>
          <p className="block sm:hidden md:hidden lg:hidden xl:hidden">xs: &lt;640px</p>
          <p className="hidden sm:block md:hidden">sm: ≥640px</p>
          <p className="hidden md:block lg:hidden">md: ≥768px</p>
          <p className="hidden lg:block xl:hidden">lg: ≥1024px</p>
          <p className="hidden xl:block">xl: ≥1280px</p>
        </>
        

        {children}

    
        
       
      </div>
      
   
  );
}
