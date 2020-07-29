package de.neuefische.consilboard.service;

import de.neuefische.consilboard.db.ConsilBoardDB;
import de.neuefische.consilboard.model.Client;
import de.neuefische.consilboard.model.Consilboard;
import de.neuefische.consilboard.utils.RandomIdUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
public class ConsilBoardService {

    private final ConsilBoardDB consilBoardDB;
    private final RandomIdUtil randomIdUtil;

    @Autowired
    public ConsilBoardService(ConsilBoardDB consilBoardDB, RandomIdUtil randomIdUtil){
        this.consilBoardDB = consilBoardDB;
        this.randomIdUtil = randomIdUtil;
    }

    public Consilboard addNewConsilBoard(String consilBoardName, String user) {
        Consilboard consilboard = new Consilboard();
        consilboard.setId(randomIdUtil.generateRandomId());
        consilboard.setConsilBoardName(consilBoardName);
        consilboard.setUser(user);
         return consilBoardDB.save(consilboard);
    }

    public Optional<Consilboard> getConsilBoard(String id) {
        return consilBoardDB.findById(id);
    }

    public List<Client> getClientArray(String user) {
        Consilboard userConsilBoard = consilBoardDB.findConsilboardByUser(user);
        if(userConsilBoard.getClientArray().isEmpty()){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No Clients found");
        }
        return userConsilBoard.getClientArray();
    }

    public Client addClientToConsilBoardArray(Client client, String user) {
        List<Client> clientArray = getClientArray(user);
        clientArray.add(client);
        return client;
    }

}
