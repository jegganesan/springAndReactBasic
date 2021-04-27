package com.jega.crmtest.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DemoLoader implements CommandLineRunner{

    private ContactRepository contactRepository;

    @Autowired
    public DemoLoader(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        contactRepository.save(new Contact("Jegathesan", "Ganesan", "jj@g.com"));
    }
    
}
