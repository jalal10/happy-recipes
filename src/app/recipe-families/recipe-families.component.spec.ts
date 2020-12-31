import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeFamiliesComponent } from './recipe-families.component';

describe('RecipeFamiliesComponent', () => {
  let component: RecipeFamiliesComponent;
  let fixture: ComponentFixture<RecipeFamiliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeFamiliesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeFamiliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
