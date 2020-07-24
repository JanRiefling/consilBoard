package de.neuefische.consilboard;

import de.neuefische.consilboard.db.UserDB;
import de.neuefische.consilboard.model.ConsilBoardUser;
import de.neuefische.consilboard.model.LoginData;
import de.neuefische.consilboard.model.SignUpData;
import de.neuefische.consilboard.security.JWTUtils;
import de.neuefische.consilboard.service.SignUpService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.*;
import org.springframework.security.crypto.password.PasswordEncoder;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;


    @SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
    public class SignUpControllerTest {

        @LocalServerPort
        public int port;

        @Autowired
        public TestRestTemplate restTemplate;

        @Autowired
        public PasswordEncoder encoder;

        @Autowired
        public UserDB userDB;

        @Autowired
        public SignUpService signUpService;



        @BeforeEach
        public void resetDb() {
            userDB.deleteAll();
        }


        @Test
        public void signUpWithValidCredentials() {
            //GIVEN
            /*Simulierte SignUpData, die an den Controller geschickt werden...*/
            SignUpData signUpData = new SignUpData("ultrauser", "savepassword", "admin");
            /*ConsilBoardUser consilBoardUser = new ConsilBoardUser(signUpData.getUsername(), signUpData.getPassword(), signUpData.getRole());*/
            HttpEntity<SignUpData> requestEntity = new HttpEntity<>(signUpData);
            String url = "http://localhost:" + port + "/auth/signup";

            //WHEN
            /*Wenn der die SignUp daten in der DatenBank zu finden sind...*/
            ResponseEntity<ConsilBoardUser> responseEntity = restTemplate.postForEntity(url, requestEntity, ConsilBoardUser.class);
            //THEN
            /*ConsilBoardUser newUser = new ConsilBoardUser("ultrauser", "savepassword", "admin");*/
            assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        }

        @Test
        public void signUpWithEmptyUsernameOrPassword() {
            //GIVEN
            /*Invalid SignUpData mit leerem Password oder leerem Benutzernamen, die an den Controller gehen...*/
            SignUpData signUpData = new SignUpData("", "savepassword", "admin");
            HttpEntity<SignUpData> requestEntity = new HttpEntity<>(signUpData);
            String url = "http://localhost:" + port + "/auth/signup";

            //WHEN
            /*Die daten leer sind wird kein Db eintrag vorgenommen und ....*/

            ResponseEntity<ConsilBoardUser> responseEntity = restTemplate.postForEntity(url, requestEntity, ConsilBoardUser.class);
            //THEN
           /*assert Equals(HttpStatus.BAD_REQUEST, response.getStatusCode());
           * assert Equals(new IllegalArgument("Username or Password must contain something"), ) */
            assertEquals(HttpStatus.BAD_REQUEST, responseEntity.getStatusCode());
        }


        @Test
        public void signUpWithAlreadyExistingUsername() {
            //GIVEN
            /*Simulierte SignUpData, die an den Controller geschickt werden...*/
            userDB.save(new ConsilBoardUser("ultrauser", "savepassword", "admin"));
            SignUpData signUpData = new SignUpData("ultrauser", "savepassword", "admin");
            HttpEntity<SignUpData> requestEntity = new HttpEntity<>(signUpData);
            String url = "http://localhost:" + port + "/auth/signup";

            //WHEN
            /*Wenn der die SignUp daten in der DatenBank zu finden sind...*/

            ResponseEntity<ConsilBoardUser> responseEntity = restTemplate.postForEntity(url, requestEntity, ConsilBoardUser.class);

            //THEN
            /*ConsilBoardUser newUser = new ConsilBoardUser("ultrauser", "savepassword", "admin");*/

            assertEquals(HttpStatus.BAD_REQUEST, responseEntity.getStatusCode());
        }
    }
