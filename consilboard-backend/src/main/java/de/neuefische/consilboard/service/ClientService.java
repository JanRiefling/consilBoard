package de.neuefische.consilboard.service;

import de.neuefische.consilboard.db.ClientDB;
import de.neuefische.consilboard.model.Client;
import de.neuefische.consilboard.model.Comment;
import de.neuefische.consilboard.utils.RandomIdUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class ClientService {

    private final ClientDB clientDB;
    private final RandomIdUtil randomIdUtil;

    @Autowired
    public ClientService(ClientDB clientDB, RandomIdUtil randomIdUtil){
        this.clientDB = clientDB;
        this.randomIdUtil = randomIdUtil;
    }

    public Iterable<Client> getAll(String user) {
        return clientDB.findAllByUser(user);
    }

    public Client add(String clientname, String user) {
        Client client = new Client();
        List<Comment> newCommentList = new ArrayList<>();
        client.setId(randomIdUtil.generateRandomId());
        client.setClientname(clientname);
        client.setUser(user);
        client.setUserComments(newCommentList);
        return clientDB.save(client);
    }

    public void deleteClient(String clientname) throws IllegalArgumentException {
        Client client = clientDB.findClientByClientname(clientname);
        if (client == null){
            throw new IllegalArgumentException("Client to delete not found");
        }
        String id = client.getId();
        clientDB.deleteById(id);
    }

    public Optional<Client> getClientById(String id) {
        return clientDB.findById(id);
    }

    public Iterable<Client> findClientsByName(String query, String user) {

        return clientDB.findClientsByClientnameStartingWithAndUser(query, user);
    }


    public List<Comment> getCommentIdArray(String id) throws ResponseStatusException {
        Client client = clientDB.findClientById(id);
        return client.getUserComments();
    }

    public Comment addCommentToClientCommentArray(String note, String id, String user) {
        Client client = clientDB.findClientById(id);
        List<Comment> newCommentList = client.getUserComments();
            Date date = new Date();
            Comment comment = new Comment();
            comment.setId(randomIdUtil.generateRandomId());
            comment.setComment(note);
            comment.setCreatedBy(user);
            comment.setTimeStamp(date.getTime());
            comment.setClientId(client.getId());
            newCommentList.add(comment);
            clientDB.save(client);

        return comment;
    }

    public void removeCommentFromCommentArray(String id, String clientid) {
        Client client = clientDB.findClientById(clientid);
        List<Comment> newCommentList = client.getUserComments();
        newCommentList.removeIf(comment -> comment.getId().equals(id));
        clientDB.save(client);
    }
}
