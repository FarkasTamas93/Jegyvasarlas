package hu.bettina.ticket.commons.domain;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by Stefyy on 2017. 12. 11..
 */
@Repository
public interface TicketRepository extends CrudRepository<Ticket,Long> {



}
