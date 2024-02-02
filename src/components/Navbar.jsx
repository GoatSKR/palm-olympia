import { navLinks } from "../store/constants"

const Navbar = () => {
  return (
    <>
      <div className="text-center bg-[#000000] cursor-pointer hover:underline py-1 text-lg w-full">
        Palm Olympia Offer
      </div>
      <nav className="w-full h-28 bg-[#FFFFFF] flex items-center justify-around">
        <div className="h-4/5 w-36 rounded-xl bg-[#023A2A]">
          <img className="pl-2 pt-2" src="../src/assets/images/PLOG.png"/>
        </div>
        <div className="flex items-center justify-center gap-14">
          {navLinks.map((link) => (
            <a href="#" id={link.id} className="text-black font-light">
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </>
  )
}

export default Navbar
