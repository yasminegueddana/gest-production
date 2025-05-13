package tn.itbs.prod.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Data 
@Entity
public class Produit {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String nom;
	
	private String type;
	
	private int stock ;
	
	@ManyToOne
    @JoinColumn(name = "fournisseur_id")
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Fournisseur fournisseur;
	

	

}
