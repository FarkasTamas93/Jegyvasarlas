package hu.bettina.ticket.commons.domain;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * Created by Stefyy on 2017. 11. 22..
 */
@Repository
public interface EventRepository extends CrudRepository<Event, Long> {

    Optional<Event> findById(long id);
    List<Event> findAll();
    List<Event> findByeventType(String eventType);
    List<Event> findFirst12ByOrderByIdDesc();

    //csak varos van a reszletes keresobe bepipalva
    List<Event> findBytown(String town);
    List<Event> findByeventGenre(String eventGenre);

    //varos es egy mufaj alapjan
    List<Event> findByTownAndEventGenre(String town, String eventGenre);

    //két kukolnbozo mufaj
    List<Event> findByEventGenreOrEventGenre(String eventGenre1, String ebentGenre2);

    //multi lekerdezes a reszletes keresohoz
    List<Event> findByTownAndEventGenreOrEventGenre(String town,String eventGenre, String eventGenre2);

    Long countByEventGenre(String eventGenre);
    Long countByTown(String town);
    Long countByEventType(String eventType);
}