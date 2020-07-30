package de.neuefische.consilboard.controller;


import de.neuefische.consilboard.db.ClientDB;
import de.neuefische.consilboard.db.UserDB;
import de.neuefische.consilboard.dto.AddClientDto;
import de.neuefische.consilboard.model.Client;
import de.neuefische.consilboard.model.ConsilBoardUser;
import de.neuefische.consilboard.model.LoginData;
import de.neuefische.consilboard.utils.RandomIdUtil;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;


@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class ConsilClientControllerTest {

    @LocalServerPort
    public int port;

    @Autowired
    public TestRestTemplate restTemplate;

    @Autowired
    private ClientDB db;

    @Autowired
    public PasswordEncoder encoder;

    @Autowired
    public UserDB userDb;

    @MockBean
    private RandomIdUtil idUtils;

    @BeforeEach
    public void resetDatabase() {
        db.deleteAll();
        userDb.deleteAll();
    }

    private String loginUser() {
        String savePassword = "savePassword";
        ConsilBoardUser user = new ConsilBoardUser("superUser", encoder.encode(savePassword), "admin");
        userDb.save(user);

        String loginUrl = "http://localhost:" + port + "/auth/login";
        ResponseEntity<String> tokenResponse = restTemplate.postForEntity(loginUrl, new LoginData("superUser", "savePassword"), String.class);
        return tokenResponse.getBody();
    }

/*    @Test
    public void getIdeasShouldReturnAllIdeas() {
        //GIVEN
        String token = loginUser();

        String url = "http://localhost:" + port + "/api/clients";
        db.save(new Client("1", "Alfo", "user1"));
        db.save(new Client("2", "Gerhard", "superUser"));


        //WHEN
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(token);
        HttpEntity entity = new HttpEntity(headers);
        ResponseEntity<Client[]> response = restTemplate.exchange(url, HttpMethod.GET, entity, Client[].class);

        //THEN
        assertEquals(response.getStatusCode(), HttpStatus.OK);
        Client[] ideas = response.getBody();
        assertEquals(ideas.length, 2);
        assertEquals(ideas[0], new Client("1", "Alfo", "user1"));
        assertEquals(ideas[1], new Client("2", "Gerhard", "superUser"));
    }*/


/*    @Test
    public void addClientShouldAddClientToDB() {
        // GIVEN
        String token = loginUser();

        when(idUtils.generateRandomId()).thenReturn("some-random-id");

        AddClientDto addClientDto = new AddClientDto("some name");
        String url = "http://localhost:" + port + "/api/clients";

        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(token);
        HttpEntity<AddClientDto> requestEntity = new HttpEntity<>(addClientDto, headers);

        // WHEN
        ResponseEntity<Client> putResponse = restTemplate.exchange(url, HttpMethod.PUT, requestEntity, Client.class);

        // THEN
        Client expectedClient = new Client("some-random-id","some name","superUser");
        assertEquals(HttpStatus.OK, putResponse.getStatusCode());
        assertNotNull(putResponse.getBody());
        assertEquals(expectedClient, putResponse.getBody());

        Optional<Client> byId = db.findById("some-random-id");
        assertTrue(byId.isPresent());
        assertEquals(byId.get(), expectedClient);
    }*/

    @Test
    @DisplayName("delete by id should delete idea with id")
    public void deleteIdea(){
        //GIVEN
        String token = loginUser();
        db.save(new Client("1", "Some Fancy Client", "user1"));
        db.save(new Client("2", "Second Client", "user2"));

        //WHEN
        String url = "http://localhost:" + port + "/api/clients/2";
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(token);
        HttpEntity entity = new HttpEntity(headers);
        restTemplate.exchange(url,HttpMethod.DELETE,entity,Void.class);

        //THEN
        assertTrue(db.findById("2").isEmpty());
    }

    @Test
    @DisplayName("get by id should return idea with id")
    public void getIdeaById(){
        //GIVEN
        String token = loginUser();
        db.save(new Client("1", "Some Fancy Idea", "user1"));
        db.save(new Client("2", "Clientname", "user2"));

        //WHEN
        String url = "http://localhost:" + port + "/api/clients/2";
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(token);
        HttpEntity entity = new HttpEntity(headers);
        ResponseEntity<Client> response = restTemplate.exchange(url, HttpMethod.GET, entity, Client.class);

        //THEN
        assertEquals(response.getStatusCode(), HttpStatus.OK);
        assertEquals(response.getBody(), new Client("2", "Clientname", "user2"));
    }

    @Test
    @DisplayName("when id not exists get idea by id should return status not found")
    public void getIdeaByIdNotfound(){
        //GIVEN
        String token = loginUser();
        db.save(new Client("1", "Clientname", "user1"));
        //WHEN
        String url = "http://localhost:" + port + "/api/clients/2";

        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(token);
        HttpEntity entity = new HttpEntity(headers);
        ResponseEntity<Client> response = restTemplate.exchange(url, HttpMethod.GET, entity, Client.class);

        //THEN
        assertEquals(response.getStatusCode(), HttpStatus.NOT_FOUND);
    }


/*    @Test
    @DisplayName("Find client by query contains a returns List")
    public void findClientsWithMongoDbQuery(){
        //GIVEN
        String token = loginUser();
        db.saveAll(List.of(new Client("1", "aaaa", "user1"), new Client("2", "bbbbb", "user1"), new Client("3", "cccccc", "user1")));
        Iterable<Client> clientSearchList = new ArrayList<>();
        //WHEN
        String url = "http://localhost:" + port + "/api/clients/search";
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(token);
        HttpEntity entity = new HttpEntity(headers);
        ResponseEntity<Client> response = restTemplate.exchange(url, HttpMethod.GET, entity, Client.class);
        //THEN
    }*/

}
