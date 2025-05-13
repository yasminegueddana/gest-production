package tn.itbs.prod.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tn.itbs.prod.models.Technicien;

@Repository
public interface TechnicienRepository extends JpaRepository <Technicien, Long> {

}
