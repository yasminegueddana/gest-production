import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicienFormComponent } from './technicien-form.component';

describe('TechnicienFormComponent', () => {
  let component: TechnicienFormComponent;
  let fixture: ComponentFixture<TechnicienFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnicienFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnicienFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
