package hu.bettina.ticket.service.Converter;

import hu.bettina.ticket.Resource.Model.CreateEventRequest;
import hu.bettina.ticket.commons.domain.Event;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by Stefyy on 2017. 11. 23..
 */
@Service
public class CreateEventRequestConverter {
    private final ModelMapper modelMapper;

    private static final Logger Logger = LoggerFactory.getLogger(CreateEventRequestConverter.class);

    @Autowired
    public CreateEventRequestConverter(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    public Event from(CreateEventRequest createEventRequest){
        Logger.info("Converting CreateEventRequest from Event");
        return modelMapper.map(createEventRequest,Event.class);
    }
}
