package hu.bettina.ticket.service;

import hu.bettina.ticket.Resource.Model.CreateEventRequest;
import hu.bettina.ticket.Resource.Model.EventResponse;
import hu.bettina.ticket.commons.domain.Event;
import hu.bettina.ticket.commons.domain.EventRepository;
import hu.bettina.ticket.service.Converter.CreateEventRequestConverter;
import hu.bettina.ticket.service.Converter.EventResponseConverter;
import hu.bettina.ticket.service.Converter.UpdateEventRequestConverter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by Stefyy on 2017. 11. 22..
 */
@Service
public class EventService {

    private final EventRepository eventRepository;
    private final CreateEventRequestConverter createEventRequestConverter;
    private final UpdateEventRequestConverter updateEventRequestConverter;
    private final EventResponseConverter eventResponseConverter;

    private static final Logger Logger = LoggerFactory.getLogger(EventService.class);

    @Autowired
    public EventService(EventRepository eventRepository, CreateEventRequestConverter createEventRequestConverter, UpdateEventRequestConverter updateEventRequestConverter, EventResponseConverter eventResponseConverter) {
        this.eventRepository = eventRepository;
        this.createEventRequestConverter = createEventRequestConverter;
        this.updateEventRequestConverter = updateEventRequestConverter;
        this.eventResponseConverter = eventResponseConverter;
    }

    public void save(CreateEventRequest createEventRequest){
        Logger.info("event saved");
        Event event = createEventRequestConverter.from(createEventRequest);
        eventRepository.save(event);
    }

    public List<EventResponse> getAll(){
        Logger.debug("providing all pet");
        return eventRepository.findAll().stream()
                .map(eventResponseConverter::from)
                .collect(Collectors.toList());
    }
}
