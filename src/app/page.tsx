
import CustomTypewriter from "@/components/typewriter";
import NavBar from "@/components/navi_bar";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center  p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      <main className="flex flex-col gap-[24px] row-start-2 justify-items-center ">
        <div>
          <h1 className="text-foreground">Welcome to my Blog</h1>
          <div className="w-[28ch] whitespace-nowrap overflow-hidden md:text-xl lg:text-2xl">
            <CustomTypewriter />
          </div>
        </div>
        <div className="flex justify-center">
          <NavBar/>
        </div>
        
        
      </main>
     
    </div>
  );
}
