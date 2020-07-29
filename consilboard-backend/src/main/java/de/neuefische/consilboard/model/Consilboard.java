package de.neuefische.consilboard.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document("consilboard")
public class Consilboard {
    @Id
    private String id;
    private String consilBoardName;
    private String user;
    private List<Client> clientArray = new ArrayList<>();
}
