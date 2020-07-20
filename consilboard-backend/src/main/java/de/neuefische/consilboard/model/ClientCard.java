package de.neuefische.consilboard.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ClientCard {

    @Id
    private String id;
    private String name;
    private int age;
}
