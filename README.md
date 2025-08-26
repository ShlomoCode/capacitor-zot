# Capacitor ZOT (ZPL Over TCP)

Send ZPL (Zebra Programming Language) commands from Capacitor apps to printers via TCP.

Compatible with capacitor 6.

## Installation

```bash
npm install @spryrocks/capacitor-socket-connection-plugin@6.3.0 capacitor-zot
npx cap sync
```

## Usage

```typescript
import { sendZpl } from 'capacitor-zot';

await sendZpl('^XA^FO50,50^ADN,36,20^FDHello World^FS^XZ', '192.168.1.100', 9100);
```
