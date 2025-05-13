import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicienEditComponent } from './technicien-edit.component';

describe('TechnicienEditComponent', () => {
  let component: TechnicienEditComponent;
  let fixture: ComponentFixture<TechnicienEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnicienEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnicienEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
