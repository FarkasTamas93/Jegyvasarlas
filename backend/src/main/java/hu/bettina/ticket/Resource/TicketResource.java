package hu.bettina.ticket.Resource;

import hu.bettina.ticket.service.EventService;
import hu.bettina.ticket.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by Stefyy on 2017. 12. 11..
 */
@RestController
@RequestMapping("/api/ticket")
public class TicketResource {
    private final EventService eventService;
    private final TicketService ticketService;

    @Autowired
    public TicketResource(EventService eventService, TicketService ticketService) {
        this.eventService = eventService;
        this.ticketService = ticketService;
    }
/*
    private final EventService eventService;

    public TicketResource(EventService eventService) {
        this.eventService = eventService;
    }*/
}
