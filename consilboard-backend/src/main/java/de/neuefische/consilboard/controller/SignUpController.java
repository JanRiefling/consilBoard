package de.neuefische.consilboard.controller;

import de.neuefische.consilboard.model.LoginData;
import de.neuefische.consilboard.model.SignUpData;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.HashMap;

@RequestMapping("auth/signup")
@RestController
public class SignUpController {



    @PostMapping
    public SignUpData signUp(@RequestBody SignUpData data){
        return data;
    }

 }
