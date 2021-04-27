package com.jega.crmtest.model;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.net.URISyntaxException;
import java.util.Collection;
//import javax.validation.Valid;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:3000")
public class ContactController {
    private ContactRepository contactRepository;

    public ContactController(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    @GetMapping("/contacts")
    public Collection<Contact> getContacts() {
        System.out.println("Inside getContacts");
        return (Collection<Contact>) contactRepository.findAll();
    }

    @PostMapping("/contacts")
    public ResponseEntity<Contact> createContact(@RequestBody Contact contact) throws URISyntaxException {
        System.out.println("Inside createContact");
        Contact result = contactRepository.save(contact);
        return ResponseEntity.ok().body(result);
    }
}
