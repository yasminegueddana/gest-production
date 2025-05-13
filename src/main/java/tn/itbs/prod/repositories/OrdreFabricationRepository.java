package tn.itbs.prod.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tn.itbs.prod.models.OrdreFabrication;

@Repository
public interface OrdreFabricationRepository extends JpaRepository<OrdreFabrication, Long> {

}
