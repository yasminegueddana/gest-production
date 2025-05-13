package tn.itbs.prod.models;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Fournisseur {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    private String nom;

	    private String adresse;

	    private String telephone;
	    
	    public Fournisseur() {}

	    // Parameterized constructor
	    public Fournisseur(String nom, String adresse, String telephone) {
	        this.nom = nom;
	        this.adresse = adresse;
	        this.telephone = telephone;
	    }

	    // Getters and Setters
	    public Long getId() {
	        return id;
	    }

	    public void setId(Long id) {
	        this.id = id;
	    }

	    public String getNom() {
	        return nom;
	    }

	    public void setNom(String nom) {
	        this.nom = nom;
	    }

	    public String getAdresse() {
	        return adresse;
	    }

	    public void setAdresse(String adresse) {
	        this.adresse = adresse;
	    }

	    public String getTelephone() {
	        return telephone;
	    }

	    public void setTelephone(String telephone) {
	        this.telephone = telephone;
	    }
	
}
