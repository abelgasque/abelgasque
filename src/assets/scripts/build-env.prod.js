require('dotenv').config();

const fs = require('fs');
const path = require('path');

const {
  WEBHOOK_URL,
  WEBHOOK_USER,
  WEBHOOK_PASSWORD,
} = process.env;

try {
  const envDir = path.join(__dirname, '../../src/environments');
  if (!fs.existsSync(envDir)) {
    fs.mkdirSync(envDir, { recursive: true });
  }

  const environmentVariables = {
    production: true,
    webhookUrl: WEBHOOK_URL || '',
    webhookUser: WEBHOOK_USER || '',
    webhookPassword: WEBHOOK_PASSWORD || ''
  };

  const filePath = path.join(envDir, 'environment.prod.ts');
  const fileContent = `export const environment = ${JSON.stringify(environmentVariables, null, 2)};\n`;

  fs.writeFileSync(filePath, fileContent);

  console.log(`✅ Variáveis de ambiente criadas com sucesso em: ${filePath}`);
} catch (error) {
  console.error("❌ Erro ao atualizar variáveis de ambiente:", error);
  process.exit(1);
}