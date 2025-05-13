package tn.itbs.prod.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import tn.itbs.prod.models.Fournisseur;
import tn.itbs.prod.models.Produit;
import tn.itbs.prod.services.ProduitService;

@RestController
@RequestMapping("/api/produits")
public class ProduitController {


    @Autowired
    private ProduitService produitService;

    @GetMapping
    public List<Produit> getAllProduits() {
        return produitService.getAllProduits();
    }

    @PostMapping
    public Produit createProduit(@RequestBody Produit produit) {
        return produitService.createProduit(produit); 
    }
    @GetMapping("/{id}")
    public Produit getProduitById(@PathVariable Long id) {
        return produitService.getProduitById(id);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduit(@PathVariable Long id) {
        produitService.deleteProduit(id);
        return ResponseEntity.noContent().build();
    }
    
    @PutMapping("/{id}")
    public Produit updateProduit(@PathVariable Long id, @RequestBody Produit produit) {
        // Fetch the existing product from the database
        Produit existingProduit = produitService.getProduitById(id);

        // Update fields
        existingProduit.setNom(produit.getNom());
        existingProduit.setType(produit.getType());
        existingProduit.setStock(produit.getStock());

        // Update fournisseur if provided
        if (produit.getFournisseur() != null && produit.getFournisseur().getId() != null) {
            Fournisseur fournisseur = new Fournisseur();
            fournisseur.setId(produit.getFournisseur().getId());
            existingProduit.setFournisseur(fournisseur);
        }

        // Save the updated product
        return produitService.createProduit(existingProduit);
    }
}
