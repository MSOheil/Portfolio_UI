import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
export default function cmp_header() {
  return (
    <header className="w-full h-screen">
      <Navbar />
      <Main />
    </header>
  );
}
