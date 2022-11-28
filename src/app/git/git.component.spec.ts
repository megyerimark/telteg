
 /*

* Author: Megyeri Márk Máté
* Copyright: 2022, Megyeri Márk Máté
* Group: Szoft II/N
* Date: 2022.11.28
* Github: https://github.com/megyerimark/
* Licenc: GNU GPL
*/
 
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitComponent } from './git.component';

describe('GitComponent', () => {
  let component: GitComponent;
  let fixture: ComponentFixture<GitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
