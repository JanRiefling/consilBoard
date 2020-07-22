package de.neuefische.consilboard.controller;

import de.neuefische.consilboard.model.ConsilBoardUser;
import de.neuefische.consilboard.model.SignUpData;
import de.neuefische.consilboard.service.SignUpService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("auth/signup")
@RestController
public class SignUpController {

    private final SignUpService signUpService;


    public SignUpController(SignUpService signUpService) {
        this.signUpService = signUpService;
    }

    @PostMapping
    public ConsilBoardUser signUp(@RequestBody SignUpData data){

        return signUpService.addUserToUserDB(data);
    }

 }
