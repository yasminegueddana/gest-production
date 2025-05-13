package tn.itbs.prod.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.itbs.prod.models.Technicien;
import tn.itbs.prod.repositories.TechnicienRepository;

@Service
public class TechnicienServiceImpl implements TechnicienService {

    @Autowired
    private TechnicienRepository technicienRepository;

    @Override
    public List<Technicien> getAllTechniciens() {
        return technicienRepository.findAll();
    }

    @Override
    public Technicien createTechnicien(Technicien technicien) {
        return technicienRepository.save(technicien);
    }

    @Override
    public Technicien getTechnicienById(Long id) {
        return technicienRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Technicien not found with id: " + id));
    }
    
    @Override
    public Technicien updateTechnicien(Long id, Technicien updatedTechnicien) {
        Technicien existing = technicienRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Technicien not found with id: " + id));

        existing.setNom(updatedTechnicien.getNom());
        existing.setCompetences(updatedTechnicien.getCompetences());
        existing.setMachineAssignee(updatedTechnicien.getMachineAssignee());

        return technicienRepository.save(existing);
    }

    @Override
    public void deleteTechnicien(Long id) {
    	technicienRepository.deleteById(id);
    }

    
}
