package hu.bettina.ticket.service.Converter;

import hu.bettina.ticket.Resource.Model.UpdateUserRequest;
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
public class
        UpdateUserRequestConverter {
    private final ModelMapper modelMapper;

    private static final Logger Logger = LoggerFactory.getLogger(UpdateUserRequestConverter.class);

    @Autowired
    public UpdateUserRequestConverter(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    public User from(UpdateUserRequest updateUserRequest){
        Logger.info("converting UpdateUserRequestConverter from User");
        return modelMapper.map(updateUserRequest,User.class);
    }
}
