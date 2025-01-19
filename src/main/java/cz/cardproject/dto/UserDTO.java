package cz.cardproject.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class UserDTO {

    private Long id;
    private String username;
    private String email;
    private String firstName;
    private String lastName;
    private String role;

        //Další informace
    private LocalDateTime registrationDate;
    private LocalDateTime lastLoginDate;

}
