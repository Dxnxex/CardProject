package cz.cardproject.entity;


import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;

@Entity
@Data
public class CardEntity {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;;

    @Lob
    private String image;

}
