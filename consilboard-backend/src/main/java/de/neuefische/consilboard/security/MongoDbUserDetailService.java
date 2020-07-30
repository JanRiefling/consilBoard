package de.neuefische.consilboard.security;

import de.neuefische.consilboard.db.UserDB;
import de.neuefische.consilboard.model.ConsilBoardUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MongoDbUserDetailService implements UserDetailsService {

    private final UserDB userDB;

    @Autowired
    public MongoDbUserDetailService(UserDB userDB) {
        this.userDB = userDB;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<ConsilBoardUser> optionalConsilBoardUser = userDB.findById(username);
        if(optionalConsilBoardUser.isEmpty()) {
            throw new UsernameNotFoundException("user with username: \""+username+"\"not found");
        }

        ConsilBoardUser consilBoardUser = optionalConsilBoardUser.get();

        return new User(consilBoardUser.getUsername(), consilBoardUser.getPassword(), List.of(new SimpleGrantedAuthority("admin")));
    }

}
