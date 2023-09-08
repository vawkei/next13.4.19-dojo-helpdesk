import Link from "next/link";
import Image from "next/image";
import logoImage from "./dojo-logo.png";

const MainNavigation = () => {
  return (
    <header>
      <Image src={logoImage} alt="dojo-logo" width={70} placeholder="blur" />
      <div>
        <h1>Dojo Helpdesk</h1>
      </div>

      <nav>
        <Link href={"/"}>Dashboard</Link>
        <Link href={"/tickets"}>Tickets</Link>
      </nav>
    </header>
  );
};

export default MainNavigation;
