package de.neuefische.consilboard.service;

import de.neuefische.consilboard.db.ConsilBoardDB;
import de.neuefische.consilboard.model.Client;
import de.neuefische.consilboard.model.Consilboard;
import de.neuefische.consilboard.utils.RandomIdUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.Collection;
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
        List<Client> newClientIdList = new ArrayList<>();
        consilboard.setId(randomIdUtil.generateRandomId());
        consilboard.setConsilBoardName(consilBoardName);
        consilboard.setUser(user);
        consilboard.setClientIdList(newClientIdList);
         return consilBoardDB.save(consilboard);
    }

    public Consilboard getConsilBoard(String user) throws ResponseStatusException {
        if(consilBoardDB.findConsilboardByUser(user) == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No Consilboard for this User");
        }
        return consilBoardDB.findConsilboardByUser(user);
    }

    public List<Client> getClientIdArray(String user) throws ResponseStatusException {
        Consilboard userConsilBoard = consilBoardDB.findConsilboardByUser(user);
        if(userConsilBoard == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No Consilboard assigned to User");
        }
        return userConsilBoard.getClientIdList();
    }

    public Consilboard addClientToConsilBoardArray(Client client, String user) throws IllegalArgumentException {
        Consilboard userConsilBoard = consilBoardDB.findConsilboardByUser(user);
        List<Client> newIdList = userConsilBoard.getClientIdList();
        if(newIdList.size() >= 0) {
            if (newIdList.contains(client.getId())){
                throw new IllegalArgumentException("Client is already on Board");
            }
            newIdList.add(client);
        }

        return consilBoardDB.save(userConsilBoard);
    }

}
