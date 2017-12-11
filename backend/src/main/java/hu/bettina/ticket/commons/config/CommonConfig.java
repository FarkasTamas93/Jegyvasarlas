package hu.bettina.ticket.commons.config;

import org.springframework.context.annotation.Configuration;
import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;

/**
 * Created by Stefyy on 2017. 11. 22..
 */
@Configuration
public class CommonConfig {

    @Bean
    ModelMapper getModelMapper(){
        return new ModelMapper();
    }
}
