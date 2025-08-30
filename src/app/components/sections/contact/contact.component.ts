import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Analytics, logEvent } from '@angular/fire/analytics';
import { getPerformance, trace } from '@angular/fire/performance';
import { FirebasePerformance } from '@angular/fire/performance';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  performance: FirebasePerformance;
  loading = false;
  contactForm!: FormGroup;
  webhookUrl: string;

  constructor(
    private analytics: Analytics,
    private fb: FormBuilder,
    private http: HttpClient,
  ) {
    this.performance = getPerformance();
    this.webhookUrl = `${environment.webhook.url}/webhook/abelgasque/contact`;
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
    const t = trace(this.performance, 'processar_dados');
    t.start();

    logEvent(this.analytics, 'formulario_contacto', {
      categoria: 'contato',
      label: `Formulario de Contato`
    });

    this.http.post(this.webhookUrl, this.contactForm.value, {
      headers: {
        'Authorization': 'Basic ' + btoa(environment.webhook.user + ':' + environment.webhook.password)
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
        t.stop();
      }
    });
  }
}