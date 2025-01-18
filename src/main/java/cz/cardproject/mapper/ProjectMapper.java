package cz.cardproject.mapper;

import cz.cardproject.dto.ProjectDTO;
import cz.cardproject.entity.ProjectEntity;
import org.mapstruct.Mapper;


@Mapper(componentModel = "spring")
public interface ProjectMapper {

    ProjectDTO toDTO(ProjectEntity source);
    ProjectEntity toEntity(ProjectDTO source);

}
