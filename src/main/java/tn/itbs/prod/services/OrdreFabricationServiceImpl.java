package tn.itbs.prod.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.itbs.prod.models.OrdreFabrication;
import tn.itbs.prod.models.Produit;
import tn.itbs.prod.repositories.OrdreFabricationRepository;
import tn.itbs.prod.repositories.ProduitRepository;

@Service
public class OrdreFabricationServiceImpl implements OrdreFabricationService {

	@Autowired
	private OrdreFabricationRepository ordreFabricationRepository;
	
	@Autowired
	private ProduitRepository produitRepository;
	
	@Override 
	public List<OrdreFabrication> getAllOrdres(){
		return ordreFabricationRepository.findAll();
	}
	
	@Override
	public OrdreFabrication createOrdre(OrdreFabrication ordre) {
	    // Fetch the full Produit from the database
	    Produit fullProduit = produitRepository.findById(ordre.getProduit().getId())
	        .orElseThrow(() -> new RuntimeException("Produit not found"));

	    // Use the full Produit to avoid losing fournisseur
	    ordre.setProduit(fullProduit);
	    
	    OrdreFabrication savedOrdre = ordreFabricationRepository.save(ordre);

	    if ("Terminé".equalsIgnoreCase(savedOrdre.getEtat())) {
	        fullProduit.setStock(fullProduit.getStock() + savedOrdre.getQuantite());
	        produitRepository.save(fullProduit);
	    }

	    return savedOrdre;
	}

	
	@Override
    public OrdreFabrication getOrdreById(Long id) {
        return ordreFabricationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Ordre not found with id: " + id));
	}
	
	@Override
	public OrdreFabrication updateOrdre(Long id, OrdreFabrication updatedOrdre) {
	    OrdreFabrication existingOrdre = ordreFabricationRepository.findById(id)
	        .orElseThrow(() -> new RuntimeException("Ordre not found"));

	    existingOrdre.setProjet(updatedOrdre.getProjet());

	    Produit fullProduit = produitRepository.findById(updatedOrdre.getProduit().getId())
	        .orElseThrow(() -> new RuntimeException("Produit not found"));

	    existingOrdre.setProduit(fullProduit);
	    existingOrdre.setQuantite(updatedOrdre.getQuantite());
	    existingOrdre.setDate(updatedOrdre.getDate());

	    boolean wasNotTermine = !"Terminé".equals(existingOrdre.getEtat());
	    boolean nowTermine = "Terminé".equals(updatedOrdre.getEtat());

	    existingOrdre.setEtat(updatedOrdre.getEtat());

	    if (wasNotTermine && nowTermine) {
	        fullProduit.setStock(fullProduit.getStock() + updatedOrdre.getQuantite());
	        produitRepository.save(fullProduit);  // Save the updated stock without losing fournisseur
	    }

	    return ordreFabricationRepository.save(existingOrdre);
	}



	
	@Override
    public void deleteOrdre(Long id) {
        ordreFabricationRepository.deleteById(id);
    }
}
