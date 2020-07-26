package de.neuefische.consilboard.service;

import de.neuefische.consilboard.db.ConsilBoardDB;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ConsilBoardService {

    private final ConsilBoardDB consilBoardDB;

    @Autowired
    public ConsilBoardService(ConsilBoardDB consilBoardDB){
        this.consilBoardDB = consilBoardDB;
    }

}
