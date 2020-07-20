package de.neuefische.consilboard.controller;


import de.neuefische.consilboard.model.ClientCard;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api")
@RestController
public class ClientCardController {

    @GetMapping
    public ClientCard getClientCard() {
        return new ClientCard("abc1", "Aal", 50);
    }
}
