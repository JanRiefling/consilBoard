package de.neuefische.consilboard.service;

import de.neuefische.consilboard.db.ConsilBoardDB;
import de.neuefische.consilboard.model.Consilboard;
import de.neuefische.consilboard.utils.RandomIdUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ConsilBoardService {

    private final ConsilBoardDB consilBoardDB;
    private final RandomIdUtil randomIdUtil;

    @Autowired
    public ConsilBoardService(ConsilBoardDB consilBoardDB, RandomIdUtil randomIdUtil){
        this.consilBoardDB = consilBoardDB;
        this.randomIdUtil = randomIdUtil;
    }

    public Consilboard addNewConsilBoard(String consilBoardName, String user) {
        Consilboard consilboard = new Consilboard();
        consilboard.setId(randomIdUtil.generateRandomId());
        consilboard.setConsilBoardName(consilBoardName);
        consilboard.setUser(user);
         return consilBoardDB.save(consilboard);
    }

    public Optional<Consilboard> getConsilBoard(String id) {
        return consilBoardDB.findById(id);
    }
}
