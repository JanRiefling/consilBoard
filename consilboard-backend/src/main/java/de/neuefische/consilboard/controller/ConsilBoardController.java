package de.neuefische.consilboard.controller;

import de.neuefische.consilboard.db.ConsilBoardDB;
import de.neuefische.consilboard.model.Consilboard;
import de.neuefische.consilboard.service.ConsilBoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;


@RestController
@RequestMapping("api/consilboard")
public class ConsilBoardController {

    private final ConsilBoardService consilBoardService;

    @Autowired
    public ConsilBoardController(ConsilBoardService consilBoardService) {
        this.consilBoardService = consilBoardService;
    }

    @GetMapping
    public Iterable<Consilboard> getAllUserRelatedConsilboars(){

        return null;
    }

}
