import Link from "next/link";

const TicketList = async () => {

  const getTickets = async () => {
    const response = await fetch("http://localhost:4000/tickets",{
      next:{
        revalidate: 0 //use 0 to opt out of using cashe;
      }
    });

    if (!response.ok) {
      throw new Error("Request failed!");
    }
    return response.json();
  };

  const tickets = await getTickets();

  return (
    <div>
      {tickets.length === 0 && (
        <p className="text-center">There are no open tickets, yay!</p>
      )}
      {tickets.map((ticket) => (
        <div key={ticket.id} className="card my-5">
         <Link href={`/tickets/${ticket.id}`} >
          <h3>{ticket.title}</h3>
          <p>{ticket.body.slice(0, 200)}...</p>
          <div className={`pill ${ticket.priority}`}>
            {ticket.priority} priority
          </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TicketList;

