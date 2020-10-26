import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, filter, map } from 'rxjs/operators';
import { fadeInOut } from '../../other/fade-out/fade-in-out-animation';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [fadeInOut],
})
export class EmailFormComponent implements OnInit {
  readonly emailForm: FormGroup = this.createEmailForm();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  get nameErrors$() {
    return this.getFieldError('name');
  }

  get emailErrors$() {
    return this.getFieldError('email');
  }

  get messageErrors$() {
    return this.getFieldError('message');
  }

  private getFieldError(formFieldName: string): Observable<string[]> {
    const control = this.emailForm.get(formFieldName);
    return control.valueChanges.pipe(
      map(() => control.errors),
      filter(Boolean),
      map((errors) => Object.keys(errors)),
      debounceTime(300)
    );
  }

  private createEmailForm() {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: [''],
    });
  }
}
