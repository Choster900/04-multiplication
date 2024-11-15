import fs from 'fs';
import path from 'path';
import { yarg } from "./config/plugins/args.plugins";

console.log(yarg);

const BASE = yarg.b;
const LIMIT = yarg.l;
const OUTPUT_DIR = 'outputs';
const FILE_NAME = `tabla-${BASE}-hasta-${LIMIT}.txt`;

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const arrayNumbers = Array.from({ length: LIMIT }, (_, i) => i + 1);

const headerContent = `
=====================================
    Tabla del ${BASE} hasta ${LIMIT}
======================================
${arrayNumbers.map(i => `${BASE} x ${i} = ${BASE * i}`).join('\n')}`;

try {
  const filePath = path.join(OUTPUT_DIR, FILE_NAME);
  fs.writeFileSync(filePath, headerContent);

  const data = fs.readFileSync(filePath, 'utf8');
  if (yarg.s) {
    console.log(data);
  } else {
    console.log("Tabla de multiplicacion creada correctamente. verifica en la carpeta de outputs");

  }
} catch (err) {
  console.error('Error al manejar el archivo:', err);
}
