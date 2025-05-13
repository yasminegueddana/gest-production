package tn.itbs.prod.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.itbs.prod.models.Fournisseur;
import tn.itbs.prod.repositories.FournisseurRepository;

@Service
public class FournisseurServiceImpl implements FournisseurService {


    @Autowired
    private FournisseurRepository fournisseurRepository;

    @Override
    public List<Fournisseur> getAllFournisseurs() {
        return fournisseurRepository.findAll();
    }

    @Override
    public Fournisseur createFournisseur(Fournisseur fournisseur) {
        return fournisseurRepository.save(fournisseur);
    }

    @Override
    public Fournisseur getFournisseurById(Long id) {
        return fournisseurRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Fournisseur not found with id: " + id));
    }
    
    public Fournisseur updateFournisseur(Long id, Fournisseur updatedFournisseur) {
        Fournisseur existingFournisseur = fournisseurRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Fournisseur not found with ID: " + id));

        // Update fields
        existingFournisseur.setNom(updatedFournisseur.getNom());
        existingFournisseur.setAdresse(updatedFournisseur.getAdresse());
        existingFournisseur.setTelephone(updatedFournisseur.getTelephone());

        return fournisseurRepository.save(existingFournisseur);
    }

    @Override
    public void deleteFournisseur(Long id) {
        fournisseurRepository.deleteById(id);
    }
}
