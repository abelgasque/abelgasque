import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Injectable({
  providedIn: 'root'
})
export class PdfGeneratorService {
  constructor(private http: HttpClient) {}

  generate(): void {
    this.http.get('assets/templates/cv.html', { responseType: 'text' }).subscribe(
      (htmlContent: string) => {
        const newWindow = window.open('', '_blank');

        if (newWindow) {
          newWindow.document.write(htmlContent);
          newWindow.document.close();

          newWindow.onload = () => {
            html2canvas(newWindow.document.body).then((canvas) => {
              const imgData = canvas.toDataURL('image/png');
              const pdf = new jsPDF('p', 'mm', 'a4');
              const pdfWidth = pdf.internal.pageSize.getWidth();
              const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

              pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

              const pdfBlob = pdf.output('blob');
              const link = document.createElement('a');
              const pdfUrl = URL.createObjectURL(pdfBlob);
              link.href = pdfUrl;
              link.download = 'Curriculo-AbelGasque.pdf';

              link.click();
              newWindow.close();
            });
          };
        }
      },
      (error) => {
        console.error('Erro ao carregar o arquivo HTML:', error);
      }
    );
  }
}