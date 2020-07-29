package de.neuefische.consilboard.controller;


import de.neuefische.consilboard.dto.AddConsilBoardDto;
import de.neuefische.consilboard.model.Client;
import de.neuefische.consilboard.model.Consilboard;
import de.neuefische.consilboard.service.ConsilBoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.security.Principal;
import java.util.Optional;


@RestController
@RequestMapping("api/consilboard")
public class ConsilBoardController {

    private final ConsilBoardService consilBoardService;

    @Autowired
    public ConsilBoardController(ConsilBoardService consilBoardService) {
        this.consilBoardService = consilBoardService;
    }


    @GetMapping("{id}")
    public Consilboard getPersonalConsilBoard(@PathVariable String id) {
        Optional<Consilboard> consilboardOptional = consilBoardService.getConsilBoard(id);
        if (consilboardOptional.isPresent()) {
            return consilboardOptional.get();
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "consilboard with " + id + " not exists");
    }

    @PutMapping
    public Consilboard addConsilboard(@RequestBody @Valid AddConsilBoardDto data, Principal principal){
        return consilBoardService.addNewConsilBoard(data.getConsilBoardName(), principal.getName());
    }

    @PutMapping("clients")
    public Client addClientToConsilBoard(@RequestBody Client client, Principal principal) {
        String user = principal.getName();
        return consilBoardService.addClientToConsilBoardArray(client, user);
    }

    @GetMapping("clients")
    public Iterable<Client> getClientArray(Principal principal){
        return consilBoardService.getClientArray(principal.getName());
    }

}
