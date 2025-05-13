package tn.itbs.prod.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.itbs.prod.models.Machine;
import tn.itbs.prod.repositories.MachineRepository;

@Service
public class MachineServiceImpl implements MachineService {
	

    @Autowired
    private MachineRepository machineRepositories;

    @Override
    public List<Machine> getAllMachines() {
        return machineRepositories.findAll();
    }

    @Override
    public Machine createMachine(Machine machine) {
        return machineRepositories.save(machine);
    }

    @Override
    public Machine getMachineById(Long id) {
        return machineRepositories.findById(id)
                .orElseThrow(() -> new RuntimeException("Machine not found with id: " + id));
    }
    
    @Override
    public Machine updateMachine(Long id, Machine updatedMachine) {
        Machine machine = machineRepositories.findById(id)
            .orElseThrow(() -> new RuntimeException("Machine not found"));

        machine.setNom(updatedMachine.getNom());
        machine.setEtat(updatedMachine.getEtat());
        machine.setProchaineMaintenance(updatedMachine.getProchaineMaintenance());

        return machineRepositories.save(machine);
    }


    @Override
    public void deleteMachine(Long id) {
        machineRepositories.deleteById(id);
    }

}
