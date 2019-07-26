package hu.bettina.ticket.service.Converter;

import hu.bettina.ticket.Resource.Model.CreateTicketRequest;
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
public class CreateTicketRequestConverter {
    private final ModelMapper modelMapper;

    private static final org.slf4j.Logger Logger = LoggerFactory.getLogger(CreateTicketRequestConverter.class);

    @Autowired
    public CreateTicketRequestConverter(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    public Ticket from(CreateTicketRequest createTicketRequest){
        Logger.info("Converting CreateTicketRequest from Ticket");
        return modelMapper.map(createTicketRequest,Ticket.class);
    }
}
