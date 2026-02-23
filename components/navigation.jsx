import Link from "next/link";
 

const Home = () => {
  return (
    <>
      <header className="grid grid-cols-2">
        <div className="">Digambar gaikwad</div>
        <nav>
          <ul className="flex gap-4">
            <li><Link href="/">home</Link></li>
            <li><Link href="/contact">contact</Link></li>
            <li><Link href="/servercomp">servercompo</Link></li>
            <li><Link href="/clientcomp">clientcomp</Link></li>
          </ul>
        </nav>
      </header>

     
    </>
  );
};

export default Home;