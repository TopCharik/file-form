import { TestBed } from '@angular/core/testing';

import { DocxFileFormService } from './docx-file-form.service';

describe('DocxFileFormService', () => {
  let service: DocxFileFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocxFileFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
