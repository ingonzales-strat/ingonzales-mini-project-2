
import CustomTypewriter from "@/components/animata/typewriter";
import NavBar from "@/components/navigation/navi_bar";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      <main className="flex flex-col gap-[24px] row-start-2  ">
        <div>
          <h1 className="text-foreground text-4xl md:text-5xl">Welcome to <span className="text-blue-700">Noto ✎ᝰ.</span></h1>
        
          <div className="w-[28ch] whitespace-nowrap  overflow-hidden text-base md:text-xl lg:text-2xl">
            <CustomTypewriter />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-center">
          <NavBar/>
        </div>
        
        
      </main>
     
    </div>
  );
}
