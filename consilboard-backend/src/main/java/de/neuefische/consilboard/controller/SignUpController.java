package de.neuefische.consilboard.controller;

import de.neuefische.consilboard.model.ConsilBoardUser;
import de.neuefische.consilboard.model.SignUpData;
import de.neuefische.consilboard.service.SignUpService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RequestMapping("auth/signup")
@RestController
public class SignUpController {

    private final SignUpService signUpService;


    public SignUpController(SignUpService signUpService) {
        this.signUpService = signUpService;
    }

    @PostMapping
    public ConsilBoardUser signUp(@RequestBody SignUpData data){
        try {
            return signUpService.addUserToUserDB(data);
        } catch (Exception e){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "invalid credentials");
        }
    }

 }
