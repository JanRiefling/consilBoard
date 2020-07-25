package de.neuefische.consilboard.utils;

import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class RandomIdUtil {
    public String generateRandomId(){
        return UUID.randomUUID().toString();
    }
}
