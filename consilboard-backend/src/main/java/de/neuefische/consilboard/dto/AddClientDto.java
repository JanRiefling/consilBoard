package de.neuefische.consilboard.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Size;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AddClientDto {

    @Size(min = 2, message = "clientname min length 2")
    private String clientname;
}
