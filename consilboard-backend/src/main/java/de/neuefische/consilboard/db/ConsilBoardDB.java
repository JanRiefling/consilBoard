package de.neuefische.consilboard.db;




import de.neuefische.consilboard.model.Consilboard;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface ConsilBoardDB extends PagingAndSortingRepository<Consilboard, String> {
    Consilboard findConsilboardByUser(String user);

}
