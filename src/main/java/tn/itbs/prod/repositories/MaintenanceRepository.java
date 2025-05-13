package tn.itbs.prod.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import tn.itbs.prod.models.Maintenance;

public interface MaintenanceRepository extends JpaRepository<Maintenance, Long> {

}
