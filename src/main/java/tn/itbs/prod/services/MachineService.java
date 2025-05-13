package tn.itbs.prod.services;

import java.util.List;

import tn.itbs.prod.models.Machine;

public interface MachineService {

	 List<Machine> getAllMachines();
	    Machine createMachine(Machine machine);
	    Machine getMachineById(Long id);
	    void deleteMachine(Long id);
		Machine updateMachine(Long id, Machine updatedMachine);
}
