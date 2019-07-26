package hu.bettina.ticket.service;


import hu.bettina.ticket.Resource.TicketResource;
import hu.bettina.ticket.commons.domain.TicketRepository;
import hu.bettina.ticket.service.Converter.CreateTicketRequestConverter;
import hu.bettina.ticket.service.Converter.TicketResponseConverter;
import hu.bettina.ticket.service.Converter.UpdateTicketRequestConverter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

/**
 * Created by Stefyy on 2017. 12. 11..
 */

@Service
public class TicketService {

   // private final TicketResource ticketResource;
    private final TicketRepository ticketRepository;
    private final CreateTicketRequestConverter createTicketRequestConverter;
    private final TicketResponseConverter ticketResponseConverter;
    private final UpdateTicketRequestConverter updateTicketRequestConverter;

    private static final org.slf4j.Logger Logger = LoggerFactory.getLogger(TicketService.class);

    public TicketService(TicketRepository ticketRepository, CreateTicketRequestConverter createTicketRequestConverter, TicketResponseConverter ticketResponseConverter, UpdateTicketRequestConverter updateTicketRequestConverter) {
        this.ticketRepository = ticketRepository;
        this.createTicketRequestConverter = createTicketRequestConverter;
        this.ticketResponseConverter = ticketResponseConverter;
        this.updateTicketRequestConverter = updateTicketRequestConverter;
    }
}
