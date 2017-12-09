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

}