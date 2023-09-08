const TicketDetails = async ({ params }) => {
  // const id = params.id

  const getTicket = async (id) => {
    const response = await fetch(`http://localhost:4000/tickets/${id}` , {
      next: {
        revalidate: 0,
      },
    });

    if (!response.ok) {
      throw new Error("Request failed!");
    }
    return response.json();
  };

  const ticket = await getTicket(params.id);

  return (
    <div>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </div>
  );
};

export default TicketDetails;
