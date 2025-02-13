export default function Navbar() {
  return (
    <nav className="p-2 md:px-16 border-b-[2px] border-gray-200  w-full">
    <div className="flex justify-between items-center p-4">
      <div className="logo"></div>
      <ul className="nav-links flex flex-row justify-between gap-4 pr-6 text-xl font-bold">
        <li>
          <a href="/about">About Us</a>
        </li>
        <li>
          <a href="/govern">Corporate Governance</a>
        </li>
        <li>
          <a href="/govern">Mining Assets</a>
        </li>
        <li>
          <a href="/govern">Project Data</a>
        </li>
      </ul>
      </div>
    </nav>
  );
}
