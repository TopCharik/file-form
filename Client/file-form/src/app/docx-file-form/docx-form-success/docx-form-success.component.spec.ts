import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocxFormSuccessComponent } from './docx-form-success.component';

describe('DocxFormSuccessComponent', () => {
  let component: DocxFormSuccessComponent;
  let fixture: ComponentFixture<DocxFormSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocxFormSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocxFormSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
