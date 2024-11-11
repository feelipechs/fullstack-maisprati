package com.example.api_user.service;

import com.example.api_user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder; // Classe usada para criptografar senhas com o algoritmo BCrypt.
import org.springframework.stereotype.Service;

import com.example.api_user.dto.UserDTO;
import com.example.api_user.model.User;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public List<UserDTO> getAllUsers() {
        return userRepository
                .findAll()
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }
    
    public UserDTO getUserById(Long id){
        Optional<User> user = userRepository.findById(id);
        return user.map(this:: convertToDTO).orElse(null);
    }
    
    public UserDTO createUser(UserDTO userDTO){
        User user = new User();
        user.setUsername(userDTO.getUsername());
        user.setEmail(userDTO.getEmail());
        user.setRole(userDTO.getRole());
        // user.setPassword(userDTO.getPassword());
        user.setPassword(passwordEncoder.encode(userDTO.getPassword())); 
        // String hashedPassword = passwordEncoder.encode(userDTO.getPassword());
        // user.setPassword(hashedPassword);

        userRepository.save(user);
        
        return convertToDTO(user);
    }
    
    public UserDTO updateUser(Long id, UserDTO userDTO){
        Optional<User> userOptional = userRepository.findById(id);
        if(userOptional.isPresent()){
            User user = userOptional.get();
            user.setUsername(userDTO.getUsername());
            user.setEmail(userDTO.getEmail());
            user.setRole(userDTO.getRole());
            user.setPassword(passwordEncoder.encode(userDTO.getPassword()));
            
            userRepository.save(user);
            return convertToDTO(user);
        }
        return null;
    }

    public void deleteUser(Long id){
        userRepository.deleteById(id);
    }

    private UserDTO convertToDTO(User user) {
        UserDTO userDTO = new UserDTO();
        userDTO.setId(user.getId());
        userDTO.setUsername(user.getUsername());
        userDTO.setEmail(user.getEmail());
        userDTO.setRole(user.getRole());

        return userDTO;
    }
}