import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestFormComponent } from './gest-form.component';

describe('GestFormComponent', () => {
  let component: GestFormComponent;
  let fixture: ComponentFixture<GestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
