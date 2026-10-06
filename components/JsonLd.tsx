import React from 'react';
import { OFFICIAL_ITIERS_JSON_LD, validateJsonLdStructure } from '@/lib/harness/guardrails';

export interface JsonLdProps {
  data?: Record<string, unknown>;
}

export const JsonLd: React.FC<JsonLdProps> = ({ data = OFFICIAL_ITIERS_JSON_LD }) => {
  // Validar esquema mediante Guardrails Zod
  const validation = validateJsonLdStructure(data);
  if (!validation.success) {
    console.warn('⚠️ [JsonLd Guardrail Warning] Estructura Schema.org inválida:', validation.error);
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data)
      }}
    />
  );
};

export default JsonLd;
