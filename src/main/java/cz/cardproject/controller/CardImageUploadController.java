package cz.cardproject.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Base64;
import java.util.Map;

@Controller
@RequestMapping("/upload")
public class CardImageUploadController {

    @GetMapping
    public String renderIndex() {
        return "editImage";
    }


    @PostMapping("")
    public ResponseEntity<Map<String, String>> handleFileUpload(@RequestBody Map<String, String> payload) {

        System.out.println("PostMapping - Upload");

        String base64Image = payload.get("image");
        System.out.println("PostMapping - Upload - Base64:" + base64Image);

        if (base64Image != null && !base64Image.isEmpty()) {
            byte[] decodedBytes = Base64.getDecoder().decode(base64Image);

            try {

                // Nastavení složky uploads
                Path uploadsDir = Paths.get("uploads");
                Files.createDirectories(uploadsDir);
                System.out.println("PostMapping - Upload - AbsoluteFilePath:" +  uploadsDir.toAbsolutePath());

                // Dynamické pojmenování




                Map<String, String> response = Map.of("message", "Soubor byl úspěšně nahrán.");
                return ResponseEntity.ok(response);


            } catch (IOException e) {
                Map<String, String> errorResponse = Map.of("error", "Chyba při ukládání souboru: " + e.getMessage());
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
            }
        }

        Map<String, String> badRequestResponse = Map.of("error", "Nebyl poskytnut žádný obrázek.");

        return ResponseEntity.badRequest().body(badRequestResponse);
    }


}

