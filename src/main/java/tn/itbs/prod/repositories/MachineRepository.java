package tn.itbs.prod.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tn.itbs.prod.models.Machine;

@Repository
public interface MachineRepository extends JpaRepository<Machine, Long> {

}
