import { useState } from 'react';
import { sendZpl } from 'capacitor-zot';
import sampleLabel from './sample-label.json';
import './App.css';

function App() {
    const [ip, setIp] = useState('192.168.10.100');
    const [zpl, setZpl] = useState('^XA^FO50,50^A0N,50,50^FDHello ZOT!^FS^XZ');
    const [status, setStatus] = useState('');

    const handlePrint = async () => {
        try {
            await sendZpl(zpl, ip, 9100);
            setStatus('Sent successfully!');
        } catch (error) {
            setStatus(`Error: ${error.message}`);
        }
    };

    const loadSample = () => {
        setZpl(sampleLabel.zplString);
    };

    return (
        <div className='App'>
            <h1>Capacitor ZOT</h1>

            <div className='form-container'>
                <div className='input-group'>
                    <label>Printer IP:</label>
                    <input type='text' value={ip} onChange={(e) => setIp(e.target.value)} />
                </div>

                <div className='input-group'>
                    <label>ZPL:</label>
                    <textarea value={zpl} onChange={(e) => setZpl(e.target.value)} rows='4' />
                </div>

                <button onClick={handlePrint}>Send ZPL</button>
                <button onClick={loadSample}>Load Sample</button>

                {status && <div className='status'>{status}</div>}
            </div>
        </div>
    );
}

export default App;
