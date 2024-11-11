package com.example.toDoAPI.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.toDoAPI.model.TodoItem;

@Repository
public interface TodoRepository extends JpaRepository<TodoItem, Long> {

}
