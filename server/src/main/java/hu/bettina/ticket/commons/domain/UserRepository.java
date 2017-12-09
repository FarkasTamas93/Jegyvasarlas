package hu.bettina.ticket.commons.domain;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * Created by Stefyy on 2017. 11. 22..
 */
//@Repository
public interface UserRepository extends CrudRepository<User, Long> {

    Optional<User> findById(long id);
    List<User> findAll();

    User findByuserName(String userName);


}
