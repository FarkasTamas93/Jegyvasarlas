package hu.bettina.ticket.service.Converter;

import hu.bettina.ticket.Resource.Model.UserResponse;
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
public class UserResponseConverter {

    private final ModelMapper modelMapper;

    private static final Logger Logger = LoggerFactory.getLogger(UserResponseConverter.class);

    @Autowired
    public UserResponseConverter(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    public UserResponse from(User user){
        Logger.info("Converting User to UserResponseConverter");
        return modelMapper.map(user,UserResponse.class);
    }
}
