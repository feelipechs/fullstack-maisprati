package com.example.toDoAPI.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.toDoAPI.model.TodoItem;
import com.example.toDoAPI.repository.TodoRepository;

@Service
public class TodoService {
    @Autowired
    private TodoRepository todoRepository;

    public List<TodoItem> getAllTodos() {
        return todoRepository.findAll();
    }

    public Optional<TodoItem> getTodoById(Long id) {
        return todoRepository.findById(id);
    }

    public TodoItem saveTodoItem(TodoItem todoItem) {
        return todoRepository.save(todoItem);
    }

    public void deleteTodoItem(Long id) {
        todoRepository.deleteById(id);
    }
}
