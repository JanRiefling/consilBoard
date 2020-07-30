package de.neuefische.consilboard.service;

import de.neuefische.consilboard.db.ClientDB;
import de.neuefische.consilboard.model.Client;
import de.neuefische.consilboard.utils.RandomIdUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
        client.setId(randomIdUtil.generateRandomId());
        client.setClientname(clientname);
        client.setUser(user);
        return clientDB.save(client);
    }

    public void deleteClient(String id) {
        clientDB.deleteById(id);
    }

    public Optional<Client> getClientById(String id) {
        return clientDB.findById(id);
    }

    public Iterable<Client> findClientsByName(String query, String user) {

        return clientDB.findClientsByClientnameStartingWithAndUser(query, user);
    }
}
