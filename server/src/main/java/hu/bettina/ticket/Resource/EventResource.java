package hu.bettina.ticket.Resource;

import hu.bettina.ticket.Resource.Model.CreateEventRequest;
import hu.bettina.ticket.service.EventService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping(value="/eventTypeAlapjan/{eventType}")
    public ResponseEntity<?> typeAlapjan(@PathVariable String eventType){
        return new ResponseEntity<>(eventService.typeAlapjan(eventType),HttpStatus.OK);
    }

    @RequestMapping(value="/legujabb")
    public ResponseEntity<?> legujabb(){
        return new ResponseEntity<>(eventService.utolso(),HttpStatus.OK);
    }

    @GetMapping(value="/townAlapjan/{town}")
    public ResponseEntity<?> townAlapjan(@PathVariable String town){
        return new ResponseEntity<>(eventService.townAlapjan(town),HttpStatus.OK);
    }
    @GetMapping(value="/GenreAlapjan/{eventGenre}")
    public ResponseEntity<?> GenreAlapjan(@PathVariable String eventGenre){
        return new ResponseEntity<>(eventService.eventGenreAlapjan(eventGenre),HttpStatus.OK);
    }

    @GetMapping(value="/townesgenreAlapjan/{town}/{eventGenre}")
    public ResponseEntity<?> townesgenreAlapjan(@PathVariable String town,@PathVariable String eventGenre){
        return new ResponseEntity<>(eventService.townEsGenreAlapjan(town, eventGenre),HttpStatus.OK);
    }
    @GetMapping(value="/ketgenreAlapjan/{eventGenre1}/{eventGenre2}")
    public ResponseEntity<?> keteventgenreAlapjan(@PathVariable String eventGenre1,@PathVariable String eventGenre2){
        return new ResponseEntity<>(eventService.ketGenreAlapjan(eventGenre1, eventGenre2),HttpStatus.OK);
    }

    @GetMapping(value="/reszletekAlapjan/{town}/{eventGenre}/{eventGenre2}")
    public ResponseEntity<?> reszleteAlapjan(@PathVariable String town,@PathVariable String eventGenre,@PathVariable String eventGenre2){
        return new ResponseEntity<>(eventService.multiAlapjan(town, eventGenre, eventGenre2),HttpStatus.OK);
    }
    @GetMapping(value="/szamlalasmufaj/{eventGenre}")
    public ResponseEntity<?> kiszamol(@PathVariable String eventGenre){
        return new ResponseEntity<>(eventService.szamlalasMufajra(eventGenre),HttpStatus.OK);
    }
    @GetMapping(value="/szamlalasvaros/{town}")
    public ResponseEntity<?> kiszamol2(@PathVariable String town){
        return new ResponseEntity<>(eventService.szamlalasVarosra(town),HttpStatus.OK);
    }
    @GetMapping(value="/szamlalastipusra/{eventType}")
    public ResponseEntity<?> kiszamol3(@PathVariable String eventType){
        return new ResponseEntity<>(eventService.szamlalasTipusra(eventType),HttpStatus.OK);
    }



}
