#!/usr/bin/env bash
# Starts the production server on port 3077 in the background (for screenshots).
cd "$(dirname "$0")/.." && (fuser -k 3077/tcp >/dev/null 2>&1 || true); sleep 1
nohup npx next start -p 3077 > /tmp/sarto-server.log 2>&1 &
for i in $(seq 1 40); do curl -s -o /dev/null -w "%{http_code}" http://localhost:3077/de 2>/dev/null | grep -q 200 && echo "server up" && exit 0; sleep 1; done
echo "server failed"; tail -20 /tmp/sarto-server.log; exit 1
