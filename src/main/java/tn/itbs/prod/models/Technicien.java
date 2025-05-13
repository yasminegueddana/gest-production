package tn.itbs.prod.models;


import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Technicien {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nom;

    private String competences;

    @ManyToOne
    @JoinColumn(name = "machine_id")
    private Machine machineAssignee;
    



    
}