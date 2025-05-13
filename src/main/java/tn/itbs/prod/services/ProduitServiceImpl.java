package tn.itbs.prod.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.itbs.prod.models.Fournisseur;
import tn.itbs.prod.models.Produit;
import tn.itbs.prod.repositories.FournisseurRepository;
import tn.itbs.prod.repositories.ProduitRepository;

@Service
public class ProduitServiceImpl implements ProduitService {

	@Autowired
	private ProduitRepository produitRepository;
	
	@Autowired
    private FournisseurRepository fournisseurRepository;

    @Override
    public List<Produit> getAllProduits() {
        return produitRepository.findAll();
    }

    @Override
    public Produit createProduit(Produit produit) {
        // If fournisseur_id is provided, fetch the Fournisseur from the database
        if (produit.getFournisseur() != null && produit.getFournisseur().getId() != null) {
            Fournisseur fournisseur = fournisseurRepository.findById(produit.getFournisseur().getId())
                    .orElseThrow(() -> new RuntimeException("Fournisseur not found"));
            produit.setFournisseur(fournisseur); // Associate the fournisseur with the produit
        }

        return produitRepository.save(produit);
    }
    @Override
    public Produit getProduitById(Long id) {
        return produitRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Produit not found with id: " + id));
    }

    @Override
    public void deleteProduit(Long id) {
        produitRepository.deleteById(id);
    }
    
    @Override
    public Produit updateProduit(Long id, Produit updatedProduit) {
        Produit existingProduit = produitRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Produit not found with id: " + id));

        // Update fields
        existingProduit.setNom(updatedProduit.getNom());
        existingProduit.setType(updatedProduit.getType());
        existingProduit.setStock(updatedProduit.getStock());

        // Update fournisseur if provided
        if (updatedProduit.getFournisseur() != null && updatedProduit.getFournisseur().getId() != null) {
            Fournisseur fournisseur = fournisseurRepository.findById(updatedProduit.getFournisseur().getId())
                    .orElseThrow(() -> new RuntimeException("Fournisseur not found"));
            existingProduit.setFournisseur(fournisseur);
        }

        return produitRepository.save(existingProduit);
    }
}
