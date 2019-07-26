package hu.bettina.ticket.service.Converter;

import hu.bettina.ticket.Resource.Model.UpdateTicketRequest;
import hu.bettina.ticket.commons.domain.Ticket;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by Stefyy on 2017. 12. 11..
 */
@Service
public class UpdateTicketRequestConverter {

    private final ModelMapper modelMapper;

    private static final org.slf4j.Logger Logger = LoggerFactory.getLogger(UpdateTicketRequestConverter.class);

    @Autowired
    public UpdateTicketRequestConverter(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    public Ticket from(UpdateTicketRequest updateTicketRequest){
        Logger.info("converting UpdateTicketRequestConverter from Ticket");
        return modelMapper.map(updateTicketRequest,Ticket.class);
    }
}
