package de.neuefische.consilboard;


import de.neuefische.consilboard.db.UserDB;
import de.neuefische.consilboard.model.ConsilBoardUser;
import de.neuefische.consilboard.model.LoginData;
import de.neuefische.consilboard.security.JWTUtils;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class LoginControllerTest {

    @LocalServerPort
    public int port;

    @Autowired
    public TestRestTemplate restTemplate;

    @Autowired
    public PasswordEncoder encoder;

    @Autowired
    public UserDB userDB;

    @Autowired
    public JWTUtils jwtUtils;

    @BeforeEach
    public void resetDb() {
        userDB.deleteAll();
    }


    @Test
    public void loginWithValidCredentials() {
        //GIVEN
        ConsilBoardUser user = new ConsilBoardUser("superUser", encoder.encode("savePassword"), "admin");
        userDB.save(user);

        //WHEN
        String url = "http://localhost:" + port + "/auth/login";
        ResponseEntity<String> tokenResponse = restTemplate.postForEntity(url, new LoginData("superUser", "savePassword"), String.class);

        //THEN
        assertEquals(HttpStatus.OK, tokenResponse.getStatusCode());
        assertTrue(jwtUtils.validateToken(tokenResponse.getBody(), "superUser"));
    }

    @Test
    public void loginWithInvalidCredentials() {
        //GIVEN
        ConsilBoardUser user = new ConsilBoardUser("superUser", encoder.encode("savePassword"), "admin");
        userDB.save(user);

        //WHEN
        String url = "http://localhost:" + port + "/auth/login";
        ResponseEntity<String> tokenResponse = restTemplate.postForEntity(url, new LoginData("superUser", "savePasswor"), String.class);

        //THEN
        assertEquals(tokenResponse.getStatusCode(), HttpStatus.BAD_REQUEST);
    }
}
