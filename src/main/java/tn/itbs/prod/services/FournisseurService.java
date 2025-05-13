package tn.itbs.prod.services;

import java.util.List;

import tn.itbs.prod.models.Fournisseur;

public interface FournisseurService {

	List<Fournisseur> getAllFournisseurs();
    Fournisseur createFournisseur(Fournisseur fournisseur);
    Fournisseur getFournisseurById(Long id);
    void deleteFournisseur(Long id);
    Fournisseur updateFournisseur(Long id, Fournisseur updatedFournisseur);
}
