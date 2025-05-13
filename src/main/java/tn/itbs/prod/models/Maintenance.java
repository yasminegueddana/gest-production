package tn.itbs.prod.models;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.*;
import lombok.*;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Maintenance {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String type;
    private LocalDate date;

    @ManyToOne

    @JoinColumn(name = "machine_id")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Machine machine;

    @ManyToOne
    @JoinColumn(name = "technicien_id")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    
    private Technicien technicien;
}
