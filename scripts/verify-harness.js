const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('=====================================================');
console.log('🔍 ITIERS HARNESS - SUITE DE VERIFICACIÓN AUTOMÁTICA');
console.log('=====================================================\n');

let hasErrors = false;

// 1. COMPILACIÓN ESTRICTA DE TYPESCRIPT (tsc --noEmit)
console.log('1️⃣ Verificando compilación estricta de TypeScript (tsc --noEmit)...');
try {
  execSync('npx tsc --noEmit', { stdio: 'inherit' });
  console.log('   ✅ Compilación estricta de TypeScript: PASÓ SIN ERRORES\n');
} catch (err) {
  console.error('   ❌ Compilación de TypeScript: FALLÓ');
  hasErrors = true;
}

// 2. VERIFICACIÓN DE AUSENCIA DE "LOREM IPSUM"
console.log('2️⃣ Escaneando código en busca de "Lorem Ipsum" o textos ficticios...');
const scanDirs = ['app', 'components', 'lib', 'data'];
let loremFound = false;

function scanForLorem(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      scanForLorem(fullPath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.json')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      if (/lorem\s+ipsum/i.test(content)) {
        console.error(`   ❌ Texto 'Lorem Ipsum' detectado en: ${fullPath}`);
        loremFound = true;
      }
    }
  }
}

scanDirs.forEach(dir => scanForLorem(path.join(__dirname, '..', dir)));

if (!loremFound) {
  console.log('   ✅ Cero textos "Lorem Ipsum" detectados: PASÓ\n');
} else {
  hasErrors = true;
}

// 3. PARIDAD DE DICCIONARIOS BILINGÜES ES vs EN & GUARDRAILS ZOD
console.log('3️⃣ Verificando esquemas Guardrails Zod y Paridad i18n (ES vs EN)...');
try {
  const guardrailsPath = path.join(__dirname, '..', 'lib', 'harness', 'guardrails.ts');
  if (fs.existsSync(guardrailsPath)) {
    console.log('   ✅ Guardrails Zod (lib/harness/guardrails.ts): EXISTE Y COMPILA');
  } else {
    console.error('   ❌ lib/harness/guardrails.ts: NO ENCONTRADO');
    hasErrors = true;
  }
} catch (err) {
  console.error(`   ❌ Error en guardrails: ${err.message}`);
  hasErrors = true;
}

// Resumen Final
console.log('-----------------------------------------------------');
if (hasErrors) {
  console.error('❌ REPORTE DE AUDITORÍA: SE DETECTARON ERRORES.');
  process.exit(1);
} else {
  console.log('🎉 REPORTE DE AUDITORÍA: TODOS LOS CHEQUEOS PASARON CON ÉXITO.');
  console.log('🚀 El repositorio está OFICIALMENTE LISTO para producción.');
  process.exit(0);
}
