import logo from "./icon.png";

function Header() {
  return (
    <header className=" flex flex-row gap-4 m-10 items-center">
      <img className=" h-20 w-20 rounded-lg" src={logo} alt="Logo" />
      <h1 className=" font-bold text-3xl">The React Quiz</h1>
    </header>
  );
}

export default Header;
