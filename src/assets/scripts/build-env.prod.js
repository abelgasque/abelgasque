require('dotenv').config();

const fs = require('fs');
const path = require('path');

const {
    WEBHOOK_URL,
    WEBHOOK_USER,
    WEBHOOK_PASSWORD,
} = process.env;

try {
    const environmentVariables = {
        production: true,
        webhookUrl: WEBHOOK_URL,
        webhookUser: WEBHOOK_USER,
        webhookPassword: WEBHOOK_PASSWORD
    };

    fs.writeFileSync(
        path.join("src/environments", "environment.prod.ts"),
        `export const environment = ${JSON.stringify(environmentVariables, null, 2)};`
    );
    console.log(`Vairaveis de ambiente criadas com sucesso!`);
} catch (error) {
    console.error("Erro ao atualizar variaveis de ambiente:", error);
    process.exit(1);
}