package cz.cardproject.repository;

import cz.cardproject.entity.CardEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CardRepository extends JpaRepository<CardEntity, Long>{

}
