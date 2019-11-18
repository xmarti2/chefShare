import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeNewPage } from './recipe-new.page';

describe('RecipeNewPage', () => {
  let component: RecipeNewPage;
  let fixture: ComponentFixture<RecipeNewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeNewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
