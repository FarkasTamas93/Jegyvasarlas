package hu.bettina.ticket.service.Converter;

import hu.bettina.ticket.Resource.Model.UpdateEventRequest;
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
public class UpdateEventRequestConverter {

    private final ModelMapper modelMapper;

    private static final Logger Logger = LoggerFactory.getLogger(UpdateEventRequestConverter.class);

    @Autowired
    public UpdateEventRequestConverter(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    public Event from(UpdateEventRequest updateEventRequest){
        Logger.info("converting UpdateEventRequestConverter from Event");
        return modelMapper.map(updateEventRequest,Event.class);
    }
}
