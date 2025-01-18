package cz.cardproject.controller;

import cz.cardproject.dto.ProjectDTO;
import cz.cardproject.service.CardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/projects")
public class ProjectController {

    @Autowired
    private CardService cardService;

    //Zobrazení - Výpis projektů
    @GetMapping("")
    public String renderProjects(Model model) {

        model.addAttribute("projects", cardService.getAllProjects());

        return "pages/projects/index";

    }



    //Zobrazení - Vytvoření projektu
    @GetMapping("/create")
    public String renderCreateProject(@ModelAttribute("createProject")  ProjectDTO project) {

        return "pages/projects/create";

    }

    //Vytvoření projektu
    @PostMapping("/create")
    public String createProject(@ModelAttribute("createProject") ProjectDTO project) {

        cardService.projectCreate(project);

        return "redirect:/projects";
    }




}