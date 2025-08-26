import { Socket } from '@spryrocks/capacitor-socket-connection-plugin';
import { Capacitor } from '@capacitor/core';

/** Open a socket connection, send ZPL string to a printer over raw TCP, then close the socket */
export async function sendZpl(zplData: string, printerIp: string, printerPort: number = 9100): Promise<void> {
    if (Capacitor.getPlatform() !== 'ios' && Capacitor.getPlatform() !== 'android') {
        throw new Error('[capacitor-zot] This library only works on iOS and Android platforms');
    }

    const socket = new Socket();

    try {
        await socket.open(printerIp, printerPort);
        const message = new TextEncoder().encode(zplData);
        await socket.write(message);
    } catch (error: any) {
        throw new Error(`Connection error: ${error?.message || error}`);
    } finally {
        try {
            await socket.close();
        } catch {}
    }
}