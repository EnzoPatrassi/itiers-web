#!/usr/bin/env bash
set -e

echo "🚀 Ejecutando Verify Harness Script..."
node "$(dirname "$0")/verify-harness.js"
