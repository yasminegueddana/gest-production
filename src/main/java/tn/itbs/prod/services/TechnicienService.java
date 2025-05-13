package tn.itbs.prod.services;

import java.util.List;

import tn.itbs.prod.models.Technicien;

public interface TechnicienService {
	List<Technicien> getAllTechniciens();
    Technicien createTechnicien(Technicien technicien);
    Technicien getTechnicienById(Long id);
    Technicien updateTechnicien(Long id, Technicien updatedTechnicien);
    void deleteTechnicien(Long id);
}
