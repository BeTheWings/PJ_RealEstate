package com.example.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class mainPage {

    @RequestMapping("/home")
    public String main() {
        return "index.html";
    }
}
