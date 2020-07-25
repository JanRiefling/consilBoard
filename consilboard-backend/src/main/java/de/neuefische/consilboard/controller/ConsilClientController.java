package de.neuefische.consilboard.controller;


import de.neuefische.consilboard.dto.AddClientDto;
import de.neuefische.consilboard.model.Client;
import de.neuefische.consilboard.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.security.Principal;


@RestController
@RequestMapping("/api/clients")
public class ConsilClientController {

    private final ClientService clientService;

    @Autowired
    public ConsilClientController(ClientService clientService){
        this.clientService = clientService;
    }


    @PutMapping
    public Client addIdea(@RequestBody @Valid AddClientDto data, Principal principal){
        return clientService.add(data.getClientname(), principal.getName());
    }

}
