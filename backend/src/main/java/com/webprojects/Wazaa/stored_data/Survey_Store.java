package com.webprojects.Wazaa.stored_data;

import com.webprojects.Wazaa.entities.Survey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Survey_Store extends JpaRepository<Survey, Integer> {
}
