package de.neuefische.consilboard.db;


import de.neuefische.consilboard.model.ConsilBoardUser;
import de.neuefische.consilboard.model.SignUpData;
import org.springframework.data.repository.PagingAndSortingRepository;


public interface UserDB extends PagingAndSortingRepository<ConsilBoardUser,String> {

}
