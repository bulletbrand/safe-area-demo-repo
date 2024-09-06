import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'
import { datadogRum } from '@datadog/browser-rum'

// Initialize Datadog
datadogRum.init({
    applicationId: 'your application id',
    clientToken: 'your client token',
    env: 'staging',
    version: 'latest',
    site: 'datadoghq.eu',
    service: 'your service name',
    sessionSampleRate: 100,
    sessionReplaySampleRate: 100,
    trackUserInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel: 'allow',
    enableExperimentalFeatures: ['clickmap', 'feature_flags'],
    trackViewsManually: false,
    beforeSend: (event, _context) => {
        console.log('activity', event)
        console.log('_context', _context)
        return true
    },
})

datadogRum.startSessionReplayRecording()

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
