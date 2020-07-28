package de.neuefische.consilboard.controller;


import de.neuefische.consilboard.dto.AddClientDto;
import de.neuefische.consilboard.dto.SearchDto;
import de.neuefische.consilboard.model.Client;
import de.neuefische.consilboard.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.security.Principal;
import java.util.Optional;


@RestController
@RequestMapping("/api/clients")
public class ConsilClientController {

    private final ClientService clientService;

    @Autowired
    public ConsilClientController(ClientService clientService){
        this.clientService = clientService;
    }

    @GetMapping
    public Iterable<Client> getAllClients(){
        return clientService.getAll();
    }

    @GetMapping("{id}")
    public Client getClientById(@PathVariable String id){
        Optional<Client> clientOptional = clientService.getClientById(id);
        if(clientOptional.isPresent()) {
            return clientOptional.get();
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "client with " + id + " not exists");
    }

    @GetMapping("search/{query}")
    public Iterable<Client> searchStudentByName(@PathVariable String query, Principal principal) {
        return clientService.findClientsByName(query, principal.getName());
    }

    @PutMapping
    public Client addClientToDb(@RequestBody @Valid AddClientDto data, Principal principal){
        return clientService.add(data.getClientname(), principal.getName());
    }

    @DeleteMapping("{id}")
    public void deleteClient(@PathVariable String id) {
        clientService.deleteClient(id);
    }
}
