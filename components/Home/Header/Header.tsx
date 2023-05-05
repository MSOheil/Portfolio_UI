import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
export default function cmp_header() {
  return (
    <header className="w-full h-screen">
      <nav className="w-full h-auto ">
        <Navbar />
      </nav>
      <header className="w-full h-auto">
      <Main />
      </header>
    </header>
  );
}
