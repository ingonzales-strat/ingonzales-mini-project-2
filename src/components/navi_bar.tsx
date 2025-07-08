import Link from 'next/link';

export default function NavBar() {
  return (<div>
    <nav className="flex gap-6  p-5 text-white ">
      <MenuItem name='Home' href='/'/>
      <MenuItem name='About Me' href='/about_me'/>
      <MenuItem name='My Projects' href='/projects'/>
      {/*<MenuItem name='My Gallery' href='/gallery'/>*/}
      <MenuItem name='Contact Me' href='/contact_me'/>
    </nav>
  </div>
    
  );
}

function MenuItem({name, href}: { name: string; href: string }){
    return <div><p className=" relative group inline-block px-0.5">
      <Link href={href} className='relative z-10 group-hover:text-black transition-colors' >{name}</Link>
      <span className="absolute rounded-t-lg px-2 left-0 -bottom-0 w-full h-0.5 bg-blue-500 -z-10 group-hover:h-full group-hover:transition-all"></span>
      </p>
      </div>
}
