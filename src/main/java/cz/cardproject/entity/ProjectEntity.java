package cz.cardproject.entity;


import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class ProjectEntity {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String user_id;;
    private String created_at;

}
