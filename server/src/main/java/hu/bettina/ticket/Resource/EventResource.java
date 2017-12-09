package hu.bettina.ticket.Resource;

import hu.bettina.ticket.Resource.Model.CreateEventRequest;
import hu.bettina.ticket.service.EventService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by Stefyy on 2017. 11. 22..
 */

@RestController
@RequestMapping("/api/event")
public class EventResource {

    private final EventService eventService;

    @Autowired
    public EventResource(EventService eventService) {
        this.eventService = eventService;
    }

    @RequestMapping("/get/all")
    public ResponseEntity<?> getAll(){
        return new ResponseEntity<>(eventService.getAll(),HttpStatus.OK);
    }

    @RequestMapping("/save")
    public ResponseEntity<?> save(@RequestBody CreateEventRequest createEventRequest){
        eventService.save(createEventRequest);
        return new ResponseEntity<>(eventService.getAll(), HttpStatus.OK);
    }

}
