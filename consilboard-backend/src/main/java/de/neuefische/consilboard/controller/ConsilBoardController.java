package de.neuefische.consilboard.controller;


import de.neuefische.consilboard.dto.AddConsilBoardDto;
import de.neuefische.consilboard.model.Client;
import de.neuefische.consilboard.model.Consilboard;
import de.neuefische.consilboard.service.ConsilBoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import javax.validation.Valid;
import java.security.Principal;
import java.util.List;



@RestController
@RequestMapping("api/consilboard")
public class ConsilBoardController {

    private final ConsilBoardService consilBoardService;

    @Autowired
    public ConsilBoardController(ConsilBoardService consilBoardService) {
        this.consilBoardService = consilBoardService;
    }


    @GetMapping()
    public Consilboard getPersonalConsilBoard(Principal principal) {
      return consilBoardService.getConsilBoard(principal.getName());

    }

    @PutMapping
    public Consilboard addConsilboard(@RequestBody @Valid AddConsilBoardDto data, Principal principal){
        return consilBoardService.addNewConsilBoard(data.getConsilBoardName(), principal.getName());
    }

    @PutMapping("clientarray")
    public List<Client> addClientToConsilBoard(@RequestBody Client client, Principal principal) {
        String user = principal.getName();
        return  consilBoardService.addClientToConsilBoardArray(client, user);
    }

    @GetMapping("clientarray")
    public List<Client> getClientArray(Principal principal){
        return consilBoardService.getClientIdArray(principal.getName());
    }

    @DeleteMapping("clientarray")
    public List<Client> removeClientFromClientFromBoard(@RequestBody Client client, Principal principal) {
        String user = principal.getName();
        return consilBoardService.removeClientFromClientArray(client, user);
    }

}
