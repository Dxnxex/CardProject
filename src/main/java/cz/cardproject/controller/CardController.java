package cz.cardproject.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Map;

@Controller
@RequestMapping("")
public class CardController {



    @GetMapping
    public ResponseEntity<Map<String, Object>> listProjects() {
        try {
            Path uploadsDir = Paths.get("uploads");
            Files.createDirectories(uploadsDir);

            Map<String, Object> response = Map.of(
                    "projects", Files.list(uploadsDir)
                            .filter(Files::isDirectory)
                            .map(path -> path.getFileName().toString())
                            .toArray()
            );

            return ResponseEntity.ok(response);
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("error", "Chyba při načítání seznamu projektů: " + e.getMessage()));
        }
    }

}