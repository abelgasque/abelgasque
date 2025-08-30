import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

declare let gtag: Function;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  loading = false;
  contactForm!: FormGroup;
  webhookUrl = environment.webhookUrl;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.webhookUrl = `${environment.webhookUrl}/webhook/abelgasque/contact`;
  }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.loading = true;

    if (environment.production) {
      gtag('event', 'form_contact', {
        event_category: 'contato',
        event_label: `Formulario de Contato`
      });
    }

    this.http.post(this.webhookUrl, this.contactForm.value, {
      headers: {
        'Authorization': 'Basic ' + btoa(environment.webhookUser + ':' + environment.webhookPassword)
      }
    }).subscribe({
      next: (res) => {
        alert('Mensagem enviada com sucesso!');
        this.contactForm.reset();
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
        alert('Erro ao enviar a mensagem. Tente novamente.');
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
}