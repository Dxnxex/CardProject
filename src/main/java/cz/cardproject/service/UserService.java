package cz.cardproject.service;

import cz.cardproject.dto.UserDTO;
import cz.cardproject.entity.UserEntity;
import cz.cardproject.mapper.UserMapper;
import cz.cardproject.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserMapper userMapper;


    /**
     * Vytvoří nového uživatele a uloží ho do databáze.
     *
     * @param data Data nového uživatele ve formátu ENTITY
     */
    public UserEntity userCreate(UserDTO data) {

        //Logic
        UserEntity entity =userRepository.saveAndFlush(userMapper.toEntity(data));

        //LOG
        System.out.printf("\nVytvoření nového uživavatele: "+entity);

        return entity;

    }



}
