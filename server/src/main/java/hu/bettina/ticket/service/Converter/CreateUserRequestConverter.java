package hu.bettina.ticket.service.Converter;

import hu.bettina.ticket.Resource.Model.CreateUserRequest;
import hu.bettina.ticket.commons.domain.User;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
/**
 * Created by Stefyy on 2017. 11. 22..
 */
@Service
public class CreateUserRequestConverter {
    private final ModelMapper modelMapper;

    private static final Logger Logger = LoggerFactory.getLogger(CreateUserRequestConverter.class);

    @Autowired

    public CreateUserRequestConverter(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    public User from(CreateUserRequest createUserRequest){
        Logger.info("Converting CreateUserRequest from User");
        return modelMapper.map(createUserRequest,User.class);
    }
}
