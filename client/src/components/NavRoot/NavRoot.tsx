import NavMobile from "./NavMobile/NavMobile";
import NavPC from "./NavPC/NavPC";

function NavRoot() {
  return (
    <nav>
      <NavMobile />
      <NavPC />
    </nav>
  );
}

export default NavRoot;
