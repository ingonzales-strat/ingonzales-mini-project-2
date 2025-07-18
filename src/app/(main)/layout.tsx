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
       
        

        {children}

    
        
       
      </div>
      
   
  );
}
