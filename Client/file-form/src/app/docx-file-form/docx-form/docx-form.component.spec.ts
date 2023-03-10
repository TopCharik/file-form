import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocxFormComponent } from './docx-form.component';

describe('DocxFormComponent', () => {
  let component: DocxFormComponent;
  let fixture: ComponentFixture<DocxFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocxFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocxFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
