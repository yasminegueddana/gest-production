package tn.itbs.prod.services;

import java.util.List;
import tn.itbs.prod.models.Maintenance;

public interface MaintenanceService {
    List<Maintenance> getAllMaintenances();
    Maintenance getMaintenanceById(Long id);
    Maintenance createMaintenance(Maintenance maintenance);
    Maintenance updateMaintenance(Long id, Maintenance maintenance);
    void deleteMaintenance(Long id);
}