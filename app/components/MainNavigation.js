import Link from "next/link";

const MainNavigation = () => {
  return (
    <header>
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
