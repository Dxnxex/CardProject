package cz.cardproject.service;

import cz.cardproject.dto.ProjectDTO;
import cz.cardproject.mapper.ProjectMapper;
import cz.cardproject.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CardService {

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private ProjectMapper projectMapper;


    //Ziskání všech projektů
    public List<ProjectDTO> getAllProjects() {

        //CONSOLE
        System.out.println("\n"+this.getClass().getSimpleName()+": " + Thread.currentThread().getStackTrace()[1].getMethodName());

        //Logic
        List<ProjectDTO> allProjects = projectRepository.findAll().stream().map(entity -> projectMapper.toDTO(entity)).toList();

        //Log
        for (ProjectDTO projectDTO : allProjects) {
            System.out.println("ID: "+projectDTO.getId()+"\tUserID: "+projectDTO.getUser_id()+"\tName: "+projectDTO.getName());
        }

        return allProjects;

    }


    //Vytvoření projektu
    public void projectCreate(ProjectDTO data) {

        //CONSOLE
        System.out.println("\n"+this.getClass().getSimpleName()+": " + Thread.currentThread().getStackTrace()[1].getMethodName());

        //Logic
        projectRepository.saveAndFlush(projectMapper.toEntity(data));


    }



}
