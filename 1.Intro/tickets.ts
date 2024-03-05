class Ticket {

    constructor(public destination?: string, public price?: number, public status?: string) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
}

function storeTicket(data: string[], criteria: string) {
    let result: object[] = [];

    for (let line of data) {
        const [destination, price, status] = line.split('|');
        const ticketInfo = new Ticket(destination, Number(price), status);
        result.push(ticketInfo);
    }

    switch(criteria) {
        case 'destination':
            result.sort((a:any, b: any) => a.destination.localeCompare(b.destination)); 
        break;
        case 'price' :
            result.sort((a:any, b: any) => a.price.localeCompare(b.price));
        break;
        case 'status': 
            result.sort((a:any, b:any) => a.status.localeCompare(b.status));
        break;
    }

    return result;
}

  
console.log(storeTicket([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
],
     'destination'
     ));