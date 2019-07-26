package hu.bettina.ticket.service.Converter;
import hu.bettina.ticket.Resource.Model.UserLoginRequest;
import hu.bettina.ticket.commons.domain.User;
import org.modelmapper.ModelMapper;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by Stefyy on 2017. 12. 09..
 */
@Service
public class UserLoginRequestConverter {
    private final ModelMapper modelMapper;

    private static final org.slf4j.Logger Logger = LoggerFactory.getLogger(UserLoginRequestConverter.class);

    @Autowired

    public UserLoginRequestConverter(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    public User from(UserLoginRequest userLoginRequest){
        Logger.info("Converting CreateUserRequest from User");
        return modelMapper.map(userLoginRequest,User.class);
    }
}
