package tn.itbs.prod.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tn.itbs.prod.models.Produit;

@Repository
public interface ProduitRepository extends JpaRepository<Produit, Long> {

}
