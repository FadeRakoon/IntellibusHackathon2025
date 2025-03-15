package com.webprojects.Wazaa.entities;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "surveys")
public class Survey {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title", nullable = false)
    private String title;

    @OneToMany(mappedBy = "survey", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Answer> responses = new ArrayList<>();

    public Survey() {}

    public Survey(String title) {
        this.title = title;
    }

    // Getters and Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public List<Answer> getResponses() {
        return responses;
    }

    public void setResponses(List<Answer> responses) {
        this.responses = responses;
    }

    public void addResponse(Answer response) {
        responses.add(response);
        response.setSurvey(this);
    }

    public void removeResponse(Answer response) {
        responses.remove(response);
        response.setSurvey(null);
    }
}