#!/usr/bin/env bash
set -e;cd "$(dirname "$0")"
echo PARALLAX;node horizon_gate/gate_projection.js
