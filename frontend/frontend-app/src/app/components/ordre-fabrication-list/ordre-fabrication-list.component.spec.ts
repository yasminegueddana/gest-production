import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdreFabricationListComponent } from './ordre-fabrication-list.component';

describe('OrdreFabricationListComponent', () => {
  let component: OrdreFabricationListComponent;
  let fixture: ComponentFixture<OrdreFabricationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdreFabricationListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdreFabricationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
