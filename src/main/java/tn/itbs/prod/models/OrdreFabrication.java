package tn.itbs.prod.models;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Data
@Entity
public class OrdreFabrication {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String projet;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "produit_id")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler", "fournisseur"})
    private Produit produit;

    private int quantite;

    private LocalDate date;

    private String etat; // Ex: "En cours", "Terminé"

	
    
    

}