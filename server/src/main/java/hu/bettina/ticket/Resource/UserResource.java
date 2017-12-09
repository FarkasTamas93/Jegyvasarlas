package hu.bettina.ticket.Resource;

import hu.bettina.ticket.Resource.Model.CreateUserRequest;
import hu.bettina.ticket.Resource.Model.UserLoginRequest;
import hu.bettina.ticket.service.UserService;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * Created by Stefyy on 2017. 11. 22..
 */

@RestController
@RequestMapping("/api/user")
public class UserResource {


    private final UserService userService;

    @Autowired
    public UserResource(UserService userService) {
        this.userService = userService;
    }

    @RequestMapping("/get/all")
    public ResponseEntity<?> getAll(){
        return new ResponseEntity<>(userService.getAll(),HttpStatus.OK);
    }

    @RequestMapping("/save")
    public ResponseEntity<?> save(@RequestBody CreateUserRequest createUserRequest){
       userService.save(createUserRequest);
        System.out.println(createUserRequest.getFirstName() + " "+ createUserRequest.getEmail());
        return new ResponseEntity<>(userService.getAll(), HttpStatus.OK);
    }

    @RequestMapping("/login")
    public ResponseEntity<?> login(@RequestBody long id){
        return new ResponseEntity<>(userService.valami(id),HttpStatus.OK);
    }

    //@RequestMapping("/fundbyusername")
    @GetMapping(value="/usernamealapjan/{userName}")
    public ResponseEntity<?> proba(@PathVariable String userName){
        return new ResponseEntity<>(userService.usernamealapjan(userName),HttpStatus.OK);
    }


}
