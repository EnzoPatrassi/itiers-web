#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
=============================================================================
ITIERS AI HARNESS COPILOT — DESKTOP APPLICATION & UI
=============================================================================
Interfaz gráfica de escritorio moderna estilo 'ChatGPT para Itiers'.
Conecta directamente el motor de Harness de Stefano Ferro con Gemini 3.5 Flash,
Groq y Ollama, permitiendo auditar, auto-reparar y chatear con una UI visual.
=============================================================================
"""

import os
import sys
import json
import glob
import time
import shutil
import urllib.parse
import subprocess
import threading
from http.server import HTTPServer, BaseHTTPRequestHandler

# Importar el motor central del arnés
from harness_engine import HarnessAgent

PORT = 8765
HOST = "127.0.0.1"

# Instancia global del arnés
agent = HarnessAgent()

HTML_PAGE = """<!DOCTYPE html>
<html lang="es" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Itiers AI Copilot — Suite de Harness & QA</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
            mono: ['JetBrains Mono', 'monospace']
          },
          colors: {
            brand: {
              orange: '#ff4f00',
              hover: '#e04500',
              dark: '#0A0A0A',
              card: '#141414',
              surface: '#1E1E1E',
              border: '#2A2A2A',
              muted: '#888888'
            }
          }
        }
      }
    }
  </script>
  <style>
    /* Custom Scrollbars */
    ::-webkit-scrollbar { width: 6px; height: 6px; }
    ::-webkit-scrollbar-track { background: #0A0A0A; }
    ::-webkit-scrollbar-thumb { background: #2A2A2A; border-radius: 9999px; }
    ::-webkit-scrollbar-thumb:hover { background: #444444; }
    pre { white-space: pre-wrap; word-break: break-word; }
  </style>
</head>
<body class="bg-[#0A0A0A] text-gray-100 font-sans h-screen flex overflow-hidden antialiased selection:bg-[#ff4f00] selection:text-white">

  <!-- ================= SIDEBAR ================= -->
  <aside class="w-80 bg-[#121212] border-r border-brand-border flex flex-col justify-between flex-shrink-0 z-20">
    <!-- Top Branding -->
    <div>
      <div class="p-5 border-b border-brand-border flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-[#ff4f00] to-[#b33600] flex items-center justify-center font-bold text-white shadow-lg shadow-[#ff4f00]/20">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
          <div>
            <h1 class="text-sm font-bold tracking-tight text-white flex items-center gap-1.5">
              Itiers Copilot
              <span class="text-[10px] px-1.5 py-0.5 rounded-full bg-[#ff4f00]/20 text-[#ff4f00] font-semibold border border-[#ff4f00]/30">Harness</span>
            </h1>
            <p class="text-[11px] text-gray-400">Practicante 3 · Stefano Ferro</p>
          </div>
        </div>
      </div>

      <!-- New Chat Button -->
      <div class="p-4">
        <button onclick="newChat()" class="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-brand-surface hover:bg-[#262626] border border-brand-border text-sm font-medium transition-all duration-200 hover:border-gray-600 shadow-sm">
          <svg class="w-4 h-4 text-[#ff4f00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
          </svg>
          Nueva Conversación
        </button>
      </div>

      <!-- Quick Harness Controls -->
      <div class="px-4 space-y-4">
        <div>
          <label class="text-[11px] font-semibold uppercase tracking-wider text-gray-400 block mb-2 px-1">
            Componente Objetivo
          </label>
          <select id="componentSelect" class="w-full bg-[#181818] border border-brand-border rounded-xl px-3 py-2 text-xs text-gray-200 focus:outline-none focus:border-[#ff4f00] transition-colors">
            <option value="components/Header.tsx">components/Header.tsx</option>
            <option value="components/Hero.tsx">components/Hero.tsx</option>
            <option value="components/Footer.tsx">components/Footer.tsx</option>
            <option value="components/MetricCard.tsx">components/MetricCard.tsx</option>
            <option value="components/ImpactCounters.tsx">components/ImpactCounters.tsx</option>
            <option value="components/ContactSection.tsx">components/ContactSection.tsx</option>
            <option value="components/CareersSection.tsx">components/CareersSection.tsx</option>
            <option value="components/DataAISection.tsx">components/DataAISection.tsx</option>
            <option value="components/TeamCarousel.tsx">components/TeamCarousel.tsx</option>
            <option value="app/es/page.tsx">app/es/page.tsx</option>
          </select>
        </div>

        <!-- Action Buttons -->
        <div class="grid grid-cols-2 gap-2">
          <button onclick="triggerAudit()" class="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-[#181818] hover:bg-[#252525] border border-brand-border text-xs font-medium text-gray-200 transition-colors">
            <svg class="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Auditar QA
          </button>
          <button onclick="triggerRepair()" class="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-[#ff4f00]/10 hover:bg-[#ff4f00]/20 border border-[#ff4f00]/40 text-xs font-medium text-[#ff7333] transition-colors">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
            </svg>
            Auto-Reparar
          </button>
        </div>

        <!-- Undo Button -->
        <button onclick="triggerUndo()" class="w-full mt-2 flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-[#1C1C1C] hover:bg-[#262626] border border-brand-border text-xs font-medium text-amber-300 transition-all hover:border-amber-500/40 shadow-sm">
          <svg class="w-3.5 h-3.5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a5 5 0 015 5v2m0 0l-4-4m4 4l4-4M3 10l4-4M3 10l4 4"/>
          </svg>
          ↩️ Deshacer Último Cambio (Undo)
        </button>

        <!-- Other Suite Tools -->
        <div class="pt-2 border-t border-brand-border space-y-1.5">
          <button onclick="triggerSDD()" class="w-full flex items-center justify-between py-2 px-3 rounded-lg hover:bg-[#1E1E1E] text-xs text-gray-300 transition-colors">
            <span class="flex items-center gap-2">
              <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
              </svg>
              Verificación SDD (tasks.md)
            </span>
            <span class="text-[10px] bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded">Specs</span>
          </button>

          <button onclick="triggerGEO()" class="w-full flex items-center justify-between py-2 px-3 rounded-lg hover:bg-[#1E1E1E] text-xs text-gray-300 transition-colors">
            <span class="flex items-center gap-2">
              <svg class="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
              </svg>
              Auditoría SEO & GEO
            </span>
            <span class="text-[10px] bg-purple-500/10 text-purple-400 px-1.5 py-0.5 rounded">Answer-First</span>
          </button>

          <button onclick="triggerVerifyHarness()" class="w-full flex items-center justify-between py-2 px-3 rounded-lg hover:bg-[#1E1E1E] text-xs text-gray-300 transition-colors">
            <span class="flex items-center gap-2">
              <svg class="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
              Guardrails Zod & Tipos
            </span>
            <span class="text-[10px] bg-amber-500/10 text-amber-400 px-1.5 py-0.5 rounded">CI/CD</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Bottom User / Model Card -->
    <div class="p-4 border-t border-brand-border bg-[#0E0E0E]">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <div class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
          <div>
            <div id="modelBadge" class="text-xs font-semibold text-white">Gemini 3.5 Flash</div>
            <div class="text-[10px] text-emerald-400">Online · Modo Cloud Activo</div>
          </div>
        </div>
        <button onclick="toggleOllama()" title="Alternar Ollama Local vs Cloud" class="p-1.5 rounded-lg bg-brand-surface hover:bg-brand-border text-gray-300 transition-colors text-[11px] font-mono">
          /ollama
        </button>
      </div>
    </div>
  </aside>

  <!-- ================= MAIN CHAT AREA ================= -->
  <main class="flex-1 flex flex-col h-full bg-[#0A0A0A] relative">
    
    <!-- Top Header -->
    <header class="h-14 border-b border-brand-border flex items-center justify-between px-6 bg-[#0E0E0E]/80 backdrop-blur z-10">
      <div class="flex items-center gap-3">
        <span class="text-sm font-medium text-gray-300">Chat Asistente & Ingeniería de Arneses</span>
        <span class="text-xs text-gray-500">|</span>
        <span class="text-xs text-gray-400">Spec-Driven Development</span>
      </div>
      <div class="flex items-center gap-2">
        <button onclick="window.open('http://localhost:3000', '_blank')" class="text-xs py-1.5 px-3 rounded-lg bg-brand-surface hover:bg-[#252525] border border-brand-border text-gray-300 flex items-center gap-1.5 transition-colors">
          <span>Abrir Web en Vivo (localhost:3000)</span>
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
        </button>
      </div>
    </header>

    <!-- Messages Container -->
    <div id="chatContainer" class="flex-1 overflow-y-auto p-6 space-y-6 max-w-4xl w-full mx-auto">
      
      <!-- Welcome Message -->
      <div class="flex gap-4 p-5 rounded-2xl bg-[#141414] border border-brand-border shadow-sm">
        <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-[#ff4f00] to-[#b33600] flex-shrink-0 flex items-center justify-center font-bold text-white text-xs">
          IT
        </div>
        <div class="space-y-3 flex-1">
          <div class="flex items-center justify-between">
            <span class="text-sm font-bold text-white">Itiers AI Copilot</span>
            <span class="text-[11px] text-gray-400">Sistema Activo</span>
          </div>
          <p class="text-sm text-gray-300 leading-relaxed">
            ¡Hola Stefano! Soy tu arnés de inteligencia artificial corporativo. Estoy conectado al proyecto de <strong>Itiers</strong> con soporte multi-proveedor (Gemini 3.5 Flash, Groq y Ollama local).
          </p>
          <div class="grid grid-cols-2 gap-2.5 pt-2">
            <button onclick="quickPrompt('Audita la accesibilidad WCAG AA y estándares de components/Header.tsx')" class="text-left p-3 rounded-xl bg-[#1A1A1A] hover:bg-[#222222] border border-brand-border text-xs text-gray-300 transition-colors">
              <span class="font-semibold text-white block mb-0.5">🔍 Auditar Header</span>
              Revisa accesibilidad WCAG AA y semántica.
            </button>
            <button onclick="quickPrompt('Revisa la sección Hero en components/Hero.tsx y recomienda mejoras visuales según specs/design.md')" class="text-left p-3 rounded-xl bg-[#1A1A1A] hover:bg-[#222222] border border-brand-border text-xs text-gray-300 transition-colors">
              <span class="font-semibold text-white block mb-0.5">💡 Mejorar Hero Section</span>
              Sugerencias de diseño con Tailwind y manual de marca.
            </button>
          </div>
        </div>
      </div>

    </div>

    <!-- Input Bar -->
    <div class="p-4 border-t border-brand-border bg-[#0E0E0E]/90 backdrop-blur max-w-4xl w-full mx-auto">
      <form id="chatForm" onsubmit="sendMessage(event)" class="relative flex items-center">
        <textarea 
          id="messageInput" 
          rows="1" 
          placeholder="Escribe un mensaje, comando (/auditar, /reparar, /geo) o consulta técnica..." 
          onkeydown="handleKey(event)"
          class="w-full bg-[#181818] border border-brand-border rounded-2xl pl-4 pr-14 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#ff4f00] transition-colors resize-none shadow-inner"
        ></textarea>
        <button 
          type="submit" 
          id="sendBtn"
          class="absolute right-2.5 top-2.5 bottom-2.5 w-10 h-10 rounded-xl bg-[#ff4f00] hover:bg-[#e04500] text-white flex items-center justify-center transition-all shadow-md shadow-[#ff4f00]/20 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
          </svg>
        </button>
      </form>
      <div class="flex items-center justify-between text-[11px] text-gray-500 mt-2 px-1">
        <span>Presiona <strong>Enter</strong> para enviar, <strong>Shift + Enter</strong> para nueva línea</span>
        <span>Itiers Data Sense · 20 Años de Maestría en Datos</span>
      </div>
    </div>

  </main>

  <!-- ================= SCRIPTS ================= -->
  <script>
    const chatContainer = document.getElementById('chatContainer');
    const messageInput = document.getElementById('messageInput');
    const sendBtn = document.getElementById('sendBtn');
    const componentSelect = document.getElementById('componentSelect');
    const modelBadge = document.getElementById('modelBadge');

    function appendMessage(role, content, isHtml = false) {
      const isUser = role === 'user';
      const msgDiv = document.createElement('div');
      msgDiv.className = `flex gap-4 p-5 rounded-2xl ${isUser ? 'bg-[#181818] border border-brand-border ml-12' : 'bg-[#121212] border border-brand-border mr-12'}`;
      
      const avatar = isUser
        ? `<div class="w-8 h-8 rounded-lg bg-gray-700 flex-shrink-0 flex items-center justify-center font-bold text-white text-xs">Tú</div>`
        : `<div class="w-8 h-8 rounded-lg bg-gradient-to-br from-[#ff4f00] to-[#b33600] flex-shrink-0 flex items-center justify-center font-bold text-white text-xs shadow-md shadow-[#ff4f00]/20">IT</div>`;

      const formattedContent = isHtml ? content : formatMarkdown(content);

      msgDiv.innerHTML = `
        ${avatar}
        <div class="space-y-1.5 flex-1 min-w-0">
          <div class="flex items-center justify-between mb-1">
            <span class="text-xs font-semibold ${isUser ? 'text-gray-300' : 'text-[#ff7333]'}">${isUser ? 'Tú' : 'Itiers Copilot'}</span>
            <span class="text-[10px] text-gray-400">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
          </div>
          <div class="text-sm text-gray-200 leading-relaxed font-normal">${formattedContent}</div>
        </div>
      `;
      chatContainer.appendChild(msgDiv);
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    function formatMarkdown(text) {
      if (!text) return '';
      // Escape HTML
      let escaped = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      
      // Code blocks ```lang ... ```
      escaped = escaped.replace(/```([a-zA-Z0-9]*)\\n([\\s\\S]*?)```/g, function(match, lang, code) {
        return `<div class="my-3 rounded-xl overflow-hidden border border-[#2D2D2D] bg-[#080808]">
          <div class="flex items-center justify-between px-3 py-1.5 bg-[#171717] border-b border-[#2D2D2D] text-[11px] text-gray-400 font-mono">
            <span>${lang || 'código'}</span>
            <button onclick="navigator.clipboard.writeText(this.parentElement.nextElementSibling.innerText); this.innerText='¡Copiado!';" class="hover:text-white transition-colors">Copiar</button>
          </div>
          <pre class="p-3 text-xs font-mono text-emerald-400 overflow-x-auto">${code.trim()}</pre>
        </div>`;
      });

      // Inline code
      escaped = escaped.replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 rounded bg-[#202020] text-[#ff7333] font-mono text-xs">$1</code>');
      
      // Bold
      escaped = escaped.replace(/\\*\\*(.*?)\\*\\*/g, '<strong class="font-semibold text-white">$1</strong>');
      
      // Line breaks
      escaped = escaped.replace(/\\n/g, '<br/>');

      return escaped;
    }

    async function sendMessage(e) {
      if (e) e.preventDefault();
      const text = messageInput.value.trim();
      if (!text) return;

      appendMessage('user', text);
      messageInput.value = '';
      sendBtn.disabled = true;

      // Loading indicator
      const loadingId = 'loading-' + Date.now();
      const loadingDiv = document.createElement('div');
      loadingDiv.id = loadingId;
      loadingDiv.className = 'flex gap-4 p-5 rounded-2xl bg-[#121212] border border-brand-border mr-12 animate-pulse';
      const isEditAction = /^\/(crear|modificar|editar|cambiar|reparar)/i.test(text) || /^(cambia|modifica|edita|crea|agrega|elimina|actualiza)/i.test(text);
      const loadingText = isEditAction 
        ? 'Itiers Copilot está modificando el código y verificando con TypeScript...' 
        : 'Itiers Copilot está analizando...';

      loadingDiv.innerHTML = `
        <div class="w-8 h-8 rounded-lg bg-[#ff4f00]/30 flex items-center justify-center text-xs font-bold text-white">IT</div>
        <div class="text-sm text-gray-400 flex items-center gap-2">
          <span>${loadingText}</span>
        </div>
      `;
      chatContainer.appendChild(loadingDiv);
      chatContainer.scrollTop = chatContainer.scrollHeight;

      try {
        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            message: text,
            target_file: componentSelect.value 
          })
        });
        const data = await res.json();
        document.getElementById(loadingId)?.remove();
        appendMessage('assistant', data.reply || 'Sin respuesta.');
      } catch (err) {
        document.getElementById(loadingId)?.remove();
        appendMessage('assistant', '❌ Error comunicando con el arnés: ' + err);
      } finally {
        sendBtn.disabled = false;
        messageInput.focus();
      }
    }

    function handleKey(e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    }

    function quickPrompt(text) {
      messageInput.value = text;
      sendMessage();
    }

    function newChat() {
      chatContainer.innerHTML = '';
      appendMessage('assistant', 'Conversación reiniciada. ¿Qué componente deseas inspeccionar o crear hoy?');
    }

    async function triggerAudit() {
      const file = componentSelect.value;
      appendMessage('user', 'Auditar componente: ' + file);
      appendMessage('assistant', '🔍 Auditando <strong>' + file + '</strong> bajo especificaciones WCAG AA y marcas de Itiers...', true);
      
      try {
        const res = await fetch('/api/audit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ filepath: file })
        });
        const data = await res.json();
        appendMessage('assistant', data.report);
      } catch (err) {
        appendMessage('assistant', '❌ Error al auditar: ' + err);
      }
    }

    async function triggerRepair() {
      const file = componentSelect.value;
      appendMessage('user', 'Auto-reparar componente: ' + file);
      appendMessage('assistant', '🔧 Iniciando bucle de auto-reparación autónoma para <strong>' + file + '</strong> con verificación estricta de TypeScript y Next.js...', true);
      
      try {
        const res = await fetch('/api/repair', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ filepath: file })
        });
        const data = await res.json();
        appendMessage('assistant', data.message);
      } catch (err) {
        appendMessage('assistant', '❌ Error al reparar: ' + err);
      }
    }

    async function triggerUndo() {
      const file = componentSelect.value;
      appendMessage('user', 'Deshacer último cambio en: ' + file);
      appendMessage('assistant', '↩️ Restaurando versión previa de <strong>' + file + '</strong>...', true);
      
      try {
        const res = await fetch('/api/undo', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ filepath: file })
        });
        const data = await res.json();
        appendMessage('assistant', data.message);
      } catch (err) {
        appendMessage('assistant', '❌ Error al deshacer: ' + err);
      }
    }

    async function triggerSDD() {
      appendMessage('user', 'Ejecutar verificación SDD (tasks.md y requirements.md)');
      try {
        const res = await fetch('/api/sdd', { method: 'POST' });
        const data = await res.json();
        appendMessage('assistant', data.summary);
      } catch (err) {
        appendMessage('assistant', '❌ Error en SDD: ' + err);
      }
    }

    async function triggerGEO() {
      const file = componentSelect.value;
      appendMessage('user', 'Auditar optimización GEO & SEO: ' + file);
      try {
        const res = await fetch('/api/geo', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ filepath: file })
        });
        const data = await res.json();
        appendMessage('assistant', data.report);
      } catch (err) {
        appendMessage('assistant', '❌ Error en GEO: ' + err);
      }
    }

    async function triggerVerifyHarness() {
      appendMessage('user', 'Verificar Guardrails Zod y Paridad de Tipos');
      try {
        const res = await fetch('/api/verify', { method: 'POST' });
        const data = await res.json();
        appendMessage('assistant', data.output);
      } catch (err) {
        appendMessage('assistant', '❌ Error verificando harness: ' + err);
      }
    }

    async function toggleOllama() {
      try {
        const res = await fetch('/api/toggle_ollama', { method: 'POST' });
        const data = await res.json();
        modelBadge.innerText = data.active_model;
        appendMessage('assistant', '🔄 ' + data.message);
      } catch (err) {
        alert('Error alternando Ollama: ' + err);
      }
    }
  </script>
</body>
</html>
"""

class CopilotHandler(BaseHTTPRequestHandler):
    """Maneja las peticiones HTTP y API del Copilot."""

    def log_message(self, format, *args):
        # Silenciar logs ruidosos de consola
        pass

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path

        if path in ["/", "/index.html"]:
            self.send_response(200)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.end_headers()
            self.wfile.write(HTML_PAGE.encode("utf-8"))

        elif path.startswith("/public/"):
            rel_file = path.lstrip("/")
            if os.path.exists(rel_file):
                self.send_response(200)
                if rel_file.endswith(".png"):
                    self.send_header("Content-Type", "image/png")
                elif rel_file.endswith(".svg"):
                    self.send_header("Content-Type", "image/svg+xml")
                self.end_headers()
                with open(rel_file, "rb") as f:
                    self.wfile.write(f.read())
            else:
                self.send_response(404)
                self.end_headers()
        else:
            self.send_response(404)
            self.end_headers()

    def do_POST(self):
        content_len = int(self.headers.get("Content-Length", 0))
        body = self.rfile.read(content_len).decode("utf-8") if content_len > 0 else "{}"
        try:
            data = json.loads(body)
        except Exception:
            data = {}

        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path

        self.send_response(200)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.end_headers()

        response = {}

        if path == "/api/chat":
            msg = data.get("message", "").strip()
            selected_file = data.get("target_file")
            msg_lower = msg.lower()
            undo_keywords = ["deshace", "deshacer", "revertir", "revert", "undo"]
            if any(kw in msg_lower for kw in undo_keywords):
                target_to_revert = None
                for word in msg.split():
                    clean_word = word.strip(" '\"`(),;:")
                    if "." in clean_word and any(clean_word.endswith(ext) for ext in [".tsx", ".ts", ".jsx", ".js", ".css"]):
                        target_to_revert = clean_word
                        break
                if not target_to_revert and selected_file:
                    target_to_revert = selected_file
                ok, undo_msg = agent.revert_last_change(target_to_revert)
                response = {"reply": f"↩️ {undo_msg}"}
            elif agent.is_code_edit_request(msg):
                ok, result_msg = agent.apply_code_change(msg, target_path=selected_file)
                response = {"reply": result_msg}
            elif msg.startswith("/auditar") or msg.startswith("auditar"):
                parts = msg.split(maxsplit=1)
                target = agent.resolve_project_path(parts[1].strip() if len(parts) > 1 else (selected_file or "components/Header.tsx"))
                report = agent.audit_component(target)
                response = {"reply": f"📊 **Reporte de Auditoría para {target}:**\n\n{report}"}
            elif msg.startswith("/reparar") or msg.startswith("reparar"):
                parts = msg.split(maxsplit=1)
                target = agent.resolve_project_path(parts[1].strip() if len(parts) > 1 else (selected_file or "components/MetricCard.tsx"))
                success = agent.auto_repair_component(target)
                state = "Aprobado exitosamente" if success else "Finalizado con resguardo seguro"
                response = {"reply": f"🔧 **Auto-reparación en {target}:** {state}."}
            else:
                reply = agent.call_llm(msg)
                response = {"reply": reply}

        elif path == "/api/undo":
            filepath = data.get("filepath")
            success, msg = agent.revert_last_change(filepath)
            response = {"message": f"↩️ {msg}", "success": success}

        elif path == "/api/audit":
            filepath = data.get("filepath", "components/Header.tsx")
            target = agent.resolve_project_path(filepath)
            report = agent.audit_component(target)
            response = {"report": report, "file": target}

        elif path == "/api/repair":
            filepath = data.get("filepath", "components/MetricCard.tsx")
            target = agent.resolve_project_path(filepath)
            success = agent.auto_repair_component(target)
            state = "✅ Componente auto-reparado y validado limpiamente por TypeScript." if success else "🛡️ Rollback seguro ejecutado tras verificación de tipos."
            response = {"message": f"Resultado de auto-reparación en {target}:\n\n{state}", "success": success}

        elif path == "/api/geo":
            filepath = data.get("filepath", "app/es/page.tsx")
            target = agent.resolve_project_path(filepath)
            report = agent.audit_geo(target)
            response = {"report": report}

        elif path == "/api/sdd":
            results = agent.verify_page_seo_geo_and_requirements()
            verified = len(results.get("verified_files", []))
            issues = len(results.get("issues", []))
            summary = f"📋 **Verificación SDD Completada:**\n- Archivos validados: {verified}\n- Incidencias críticas: {issues}\n- Estado: {'✅ TODO EN REGLA' if issues == 0 else '⚠️ Revisar incidencias'}"
            response = {"summary": summary, "results": results}

        elif path == "/api/verify":
            res = subprocess.run("node scripts/verify-harness.js", shell=True, capture_output=True, text=True)
            output = res.stdout if res.returncode == 0 else (res.stderr or res.stdout)
            response = {"output": output}

        elif path == "/api/toggle_ollama":
            agent.prefer_ollama = not agent.prefer_ollama
            agent.rebuild_model_priority()
            active = [m for m in agent.available_models if m['provider'] in agent.clients]
            active_name = active[0]['name'] if active else 'Ollama Local'
            msg = f"Modo {'Ollama Local' if agent.prefer_ollama else 'Cloud (Gemini/Groq)'} activado."
            response = {"active_model": active_name, "message": msg}

        self.wfile.write(json.dumps(response).encode("utf-8"))


def launch_desktop_window():
    """Abre la ventana de aplicación de escritorio sin barra de navegación."""
    url = f"http://{HOST}:{PORT}"
    time.sleep(0.8)

    # 1. Intentar Microsoft Edge en modo App nativo
    edge_paths = [
        shutil.which("msedge"),
        r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
        r"C:\Program Files\Microsoft\Edge\Application\msedge.exe"
    ]
    for p in edge_paths:
        if p and os.path.exists(p):
            try:
                subprocess.Popen([p, f"--app={url}", "--window-size=1280,850"])
                return
            except Exception:
                pass

    # 2. Intentar Google Chrome en modo App nativo
    chrome_paths = [
        shutil.which("chrome"),
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
    ]
    for p in chrome_paths:
        if p and os.path.exists(p):
            try:
                subprocess.Popen([p, f"--app={url}", "--window-size=1280,850"])
                return
            except Exception:
                pass

    # 3. Fallback al navegador predeterminado
    import webbrowser
    webbrowser.open(url)


def main():
    server = HTTPServer((HOST, PORT), CopilotHandler)
    print(f"🚀 [Itiers Copilot] Servidor activo en http://{HOST}:{PORT}")
    
    # Lanzar la ventana de escritorio en hilo separado
    threading.Thread(target=launch_desktop_window, daemon=True).start()

    try:
        server.serve_forever()
    except (KeyboardInterrupt, SystemExit):
        print("\n👋 Itiers Copilot detenido.")
        server.server_close()


if __name__ == "__main__":
    main()

