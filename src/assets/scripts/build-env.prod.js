require('dotenv').config();
require('./build-packege');
require('./build-firebase');

const fs = require('fs');
const path = require('path');

try {
  const environmentVariables = {
    production: true,
    name: process.env.APP_NAME,
    version: process.env.APP_VERSION,
    avatarImg: process.env.APP_AVATAR_IMG,
  }

  fs.writeFileSync(
    path.join("src/environments", "environment.prod.ts"),   
    `export const environment = ${JSON.stringify(environmentVariables, null, 2)};`
  );
  console.log(`Vairaveis de ambiente criadas com sucesso!`);
} catch (error) {
  console.error("Erro ao atualizar variaveis de ambiente:", error);
  process.exit(1);
}