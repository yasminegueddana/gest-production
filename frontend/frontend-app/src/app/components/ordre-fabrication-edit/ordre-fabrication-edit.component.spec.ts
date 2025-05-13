import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdreFabricationEditComponent } from './ordre-fabrication-edit.component';

describe('OrdreFabricationEditComponent', () => {
  let component: OrdreFabricationEditComponent;
  let fixture: ComponentFixture<OrdreFabricationEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdreFabricationEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdreFabricationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
