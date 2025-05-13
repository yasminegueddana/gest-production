package tn.itbs.prod.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.itbs.prod.exception.ResourceNotFoundException;
import tn.itbs.prod.models.Machine;
import tn.itbs.prod.models.Maintenance;
import tn.itbs.prod.models.Technicien;
import tn.itbs.prod.repositories.MachineRepository;
import tn.itbs.prod.repositories.MaintenanceRepository;
import tn.itbs.prod.repositories.TechnicienRepository;

@Service
public class MaintenanceServiceImpl implements MaintenanceService {

    @Autowired
    private MaintenanceRepository maintenanceRepository;

    @Autowired
    private MachineRepository machineRepository;

    @Autowired
    private TechnicienRepository technicienRepository;

    @Override
    public List<Maintenance> getAllMaintenances() {
        return maintenanceRepository.findAll();
    }

    @Override
    public Maintenance getMaintenanceById(Long id) {
        return maintenanceRepository.findById(id).orElse(null);
    }

    @Override
    public Maintenance createMaintenance(Maintenance maintenance) {
        // Récupérer la machine et le technicien à partir de leur ID
        Machine machine = machineRepository.findById(maintenance.getMachine().getId())
                .orElseThrow(() -> new ResourceNotFoundException("Machine not found"));
        Technicien technicien = technicienRepository.findById(maintenance.getTechnicien().getId())
                .orElseThrow(() -> new ResourceNotFoundException("Technician not found"));

        // Associer la machine et le technicien à la maintenance
        maintenance.setMachine(machine);
        maintenance.setTechnicien(technicien);

        // Sauvegarder la maintenance
        return maintenanceRepository.save(maintenance);
    }

    @Override
    public Maintenance updateMaintenance(Long id, Maintenance maintenance) {
        maintenance.setId(id);
        return maintenanceRepository.save(maintenance);
    }

    @Override
    public void deleteMaintenance(Long id) {
        maintenanceRepository.deleteById(id);
    }
}

