package hu.bettina.ticket.service;

import hu.bettina.ticket.Resource.Model.CreateUserRequest;
import hu.bettina.ticket.Resource.Model.UserLoginRequest;
import hu.bettina.ticket.Resource.Model.UserResponse;
import hu.bettina.ticket.commons.domain.User;
import hu.bettina.ticket.commons.domain.UserRepository;
import hu.bettina.ticket.service.Converter.CreateUserRequestConverter;
import hu.bettina.ticket.service.Converter.UpdateUserRequestConverter;
import hu.bettina.ticket.service.Converter.UserLoginRequestConverter;
import hu.bettina.ticket.service.Converter.UserResponseConverter;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * Created by Stefyy on 2017. 11. 22..
 */

@Service
public class UserService {

    private final UserRepository userRepository;
    private final CreateUserRequestConverter createUserRequestConverter;
    private final UpdateUserRequestConverter updateUserRequestConverter;
    private final UserResponseConverter userResponseConverter;
    private final UserLoginRequestConverter userLoginRequestConverter;

    private static final Logger Logger = LoggerFactory.getLogger(UserService.class);

    @Autowired
    public UserService(UserRepository userRepository, CreateUserRequestConverter createUserRequestConverter, UpdateUserRequestConverter updateUserRequestConverter, UserResponseConverter userResponseConverter, UserLoginRequestConverter userLoginRequestConverter) {
        this.userRepository = userRepository;
        this.createUserRequestConverter = createUserRequestConverter;
        this.updateUserRequestConverter = updateUserRequestConverter;
        this.userResponseConverter = userResponseConverter;
        this.userLoginRequestConverter = userLoginRequestConverter;
    }

//    User defaultUser=new User();

    public void save(CreateUserRequest createUserRequest){
        Logger.info("user saved.");
        User user = createUserRequestConverter.from(createUserRequest);
        this.userRepository.save(user);
    }



    public List<UserResponse> getAll(){
        Logger.debug("Prividing all user");
        return userRepository.findAll().stream()
                .map(userResponseConverter::from)
                .collect(Collectors.toList());
    }

    public UserResponse usernamealapjan(String name){
        System.out.println(userResponseConverter.from(userRepository.findByuserName(name)));
        return userResponseConverter.from(userRepository.findByuserName(name));
    }

    public Optional<User> valami(long id){
        System.out.println("belpett ide " + "id:" + id);
        System.out.println(userRepository.findById(id).get().getUserName());
        return userRepository.findById(id);
//        Logger.debug("A valamiben vagyok");
    }

    public User findByuserName (String userName){
        return userRepository.findByuserName(userName);
    }

//    public User registeredUsers(UserLoginRequest userLoginRequest){
//        System.out.println(userRepository.find());
//        return userRepository.find();
//    }

}
