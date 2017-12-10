package hu.bettina.ticket.service.Converter;

import hu.bettina.ticket.Resource.Model.TicketResponse;
import hu.bettina.ticket.commons.domain.Ticket;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by Stefyy on 2017. 12. 10..
 */
@Service
public class TicketResponseConverter {
    private final ModelMapper modelMapper;

    private static final org.slf4j.Logger Logger = LoggerFactory.getLogger(TicketResponseConverter.class);

    @Autowired
    public TicketResponseConverter(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    public TicketResponse from(Ticket ticket){
        Logger.info("Converting Ticket to ticketResponseConverter");
        return modelMapper.map(ticket,TicketResponse.class);
    }
}
