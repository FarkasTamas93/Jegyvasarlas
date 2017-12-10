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
        createEventRequest.settingTicketType();
        //System.out.println(createEventRequest.getTicketType2().toString());
        Event event = createEventRequestConverter.from(createEventRequest);
        eventRepository.save(event);
    }

    public List<EventResponse> getAll(){
        Logger.debug("providing all pet");
        return eventRepository.findAll().stream()
                .map(eventResponseConverter::from)
                .collect(Collectors.toList());
    }

    public List<EventResponse> typeAlapjan(String eventType){
        return eventRepository.findByeventType(eventType).stream()
                .map(eventResponseConverter::from)
                .collect(Collectors.toList());
    }

    public List<EventResponse> utolso(){
        return eventRepository.findFirst12ByOrderByIdDesc().stream()
                .map(eventResponseConverter::from)
                .collect(Collectors.toList());
    }

    public List<EventResponse> townAlapjan(String town){
        return eventRepository.findBytown(town).stream()
                .map(eventResponseConverter::from)
                .collect(Collectors.toList());
    }
    public List<EventResponse> eventGenreAlapjan(String eventGenre){
        return eventRepository.findByeventGenre(eventGenre).stream()
                .map(eventResponseConverter::from)
                .collect(Collectors.toList());
    }


    public List<EventResponse> townEsGenreAlapjan(String town, String eventGenre){
        return eventRepository.findByTownAndEventGenre(town, eventGenre).stream()
                .map(eventResponseConverter::from)
                .collect(Collectors.toList());
    }
    public List<EventResponse> ketGenreAlapjan(String eventGenre1, String eventGenre2){
        return eventRepository.findByEventGenreOrEventGenre(eventGenre1, eventGenre2).stream()
                .map(eventResponseConverter::from)
                .collect(Collectors.toList());
    }

    public List<EventResponse> multiAlapjan(String town, String eventGenre, String eventGenre2){
        return eventRepository.findByTownAndEventGenreOrEventGenre(town, eventGenre, eventGenre2).stream()
                .map(eventResponseConverter::from)
                .collect(Collectors.toList());
    }

    public long szamlalasMufajra (String eventGenre){
        return eventRepository.countByEventGenre(eventGenre);
    }

    public long szamlalasVarosra (String town){
        return eventRepository.countByTown(town);
    }
    public long szamlalasTipusra(String eventType){
        return eventRepository.countByEventType(eventType);
    }
}
