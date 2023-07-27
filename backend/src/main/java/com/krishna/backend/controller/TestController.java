package com.krishna.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController()
public class TestController {
    @GetMapping("/hello")
    public String printHello() {
        return "welcome to my app";
    }
}
