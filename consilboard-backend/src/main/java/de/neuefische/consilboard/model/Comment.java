package de.neuefische.consilboard.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Comment {
    private String createdBy;
    private String comment;
    private LocalDateTime timeStamp;
}
