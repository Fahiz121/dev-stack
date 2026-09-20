import Logo from "../assets/logo-text.png"

const Nav = () => {
    return (
     <nav>
      <div className="container mx-auto flex justify-between items-center py-5">
        <img src={Logo} alt="" className=""/>
        <ul className="flex gap-4 items-center text-2xl text-[#475569]">
          <li>Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      <div className="flex gap-[20px]">
        <button className="text-[#334155]">Sign In</button>
        <button className="bg-[#D91B7E] font-semibold btn btn-primary rounded-3xl px-5 py-5 shadow-md transition-all hover:scale-105">Sign Up</button>
      </div>
        </div>
     </nav>
    );
};

export default Nav;