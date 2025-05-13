package tn.itbs.prod.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tn.itbs.prod.models.Fournisseur;

@Repository
public interface FournisseurRepository extends JpaRepository <Fournisseur, Long > {

}
