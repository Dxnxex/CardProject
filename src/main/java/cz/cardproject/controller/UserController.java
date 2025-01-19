package cz.cardproject.controller;

import cz.cardproject.dto.UserDTO;
import cz.cardproject.service.UserService;
import jakarta.validation.Valid;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/user")
public class UserController {

    private  UserService userService;

    //Zobrazení - Vytvoření projektu
    @GetMapping("/create")
    public String renderCreate(@ModelAttribute("createUser")  UserDTO project) {

        return "pages/user/create";

    }

    @PostMapping("/create")
    public String createUser(@Valid @ModelAttribute("createUser") UserDTO data) {

         userService.userCreate(data);

        return "redirect:/projects";

    }



}