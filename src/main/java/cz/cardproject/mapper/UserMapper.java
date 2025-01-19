package cz.cardproject.mapper;

import cz.cardproject.dto.UserDTO;
import cz.cardproject.entity.UserEntity;
import org.mapstruct.Mapper;


@Mapper(componentModel = "spring")
public interface UserMapper {

    UserDTO toDTO(UserEntity source);
    UserEntity toEntity(UserDTO source);

}
