

//import { notFound } from 'next/navigation';


export default async function BlogPage({
    params
}:{
    params: Promise<{blog_num:string}>;
}){
    const { blog_num } = await params;
    //console.log(proj_slug)
    


    return <main className="flex flex-col items-center px-4 sm:px-8 md:px-20 lg:px-40 min-h-screen gap-8 font-[family-name:var(--font-geist-sans)]">
                <header className="text-center max-w-3xl">
                    <p className="text-muted-foreground text-sm">
                    Published on XX/XX/XX | Niko Gonzales — {blog_num}
                    </p>
                    <h1 className="text-4xl font-bold mt-4 text-foreground">
                    This is a Title
                    </h1>
                    <div className="inline-flex  flex-wrap gap-4 py-2 ">
                        <p>tag0</p>
                        <p>tag1</p>
                        <p>tag2</p>
                        <p>tag3</p>
                        <p>tag4</p>
                        <p>tag5</p>

                    </div>
                    <p>A brief intro</p>
                </header>
                <div>
                    <p>Image Image of doom</p>
                    <p>words words words intro wrods words words</p>
                </div>
                    

               
                <footer>
                    © Isaiah Nikolo Gonzales. All Rights Reserved 2025
                </footer>
            </main>
}