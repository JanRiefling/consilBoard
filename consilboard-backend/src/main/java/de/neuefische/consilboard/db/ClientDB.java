package de.neuefische.consilboard.db;


import de.neuefische.consilboard.model.Client;
import de.neuefische.consilboard.model.Comment;
import de.neuefische.consilboard.model.Consilboard;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface ClientDB extends PagingAndSortingRepository<Client, String> {

    Iterable<Client> findClientsByClientnameStartingWithAndUser(String query, String user);
    Iterable<Client> findAllByUser(String user);
    Client findClientByClientname(String clienname);
    Client findClientByUser(String user);
    Client findClientById(String id);
}
