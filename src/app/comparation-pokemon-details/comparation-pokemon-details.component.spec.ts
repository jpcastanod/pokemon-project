import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparationPokemonDetailsComponent } from './comparation-pokemon-details.component';

describe('ComparationPokemonDetailsComponent', () => {
  let component: ComparationPokemonDetailsComponent;
  let fixture: ComponentFixture<ComparationPokemonDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparationPokemonDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparationPokemonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
