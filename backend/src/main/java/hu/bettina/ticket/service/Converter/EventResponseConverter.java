package hu.bettina.ticket.service.Converter;

import hu.bettina.ticket.Resource.Model.EventResponse;
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
public class EventResponseConverter {
    private final ModelMapper modelMapper;

    private static final Logger Logger = LoggerFactory.getLogger(EventResponseConverter.class);

    @Autowired
    public EventResponseConverter(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    public EventResponse from(Event event){
        Logger.info("Converting Event to eventResponseConverter");
        return modelMapper.map(event,EventResponse.class);
    }
}
