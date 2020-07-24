package de.neuefische.consilboard.service;

import de.neuefische.consilboard.db.UserDB;
import de.neuefische.consilboard.model.ConsilBoardUser;
import de.neuefische.consilboard.model.SignUpData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class SignUpService {
    private final UserDB userDB;

    @Autowired
    public SignUpService(UserDB userDB){
        this.userDB = userDB;
    }


    public ConsilBoardUser addUserToUserDB(SignUpData data) throws IllegalArgumentException{

        String username = data.getUsername();
        String password = data.getPassword();
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        String encodedPassword = encoder.encode(password);

        if(userDB.existsById(username)){
            throw new IllegalArgumentException("User already exists");
        }

        if(username.isBlank() || password.isBlank()) {
            throw new IllegalArgumentException("Username or Password must contain something");
        }

        ConsilBoardUser newUser = new ConsilBoardUser(username, encodedPassword, data.getRole());

        userDB.save(newUser);
        return newUser;
    }
}
