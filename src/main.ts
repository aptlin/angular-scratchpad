import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { AppModule } from './app/app.module'
import { H, HighlightOptions } from 'highlight.run'

const options: HighlightOptions = {
	debug: { clientInteractions: true, domRecording: true },
	manualStart: false,
	enableStrictPrivacy: Math.floor(Math.random() * 8) === 0,
	networkRecording: {
		enabled: true,
		recordHeadersAndBody: true,
		destinationDomains: [
			'pri.highlight.run',
			'pub.highlight.run',
			'localhost:8082',
		],
	},
	tracingOrigins: ['highlight.run', 'localhost'],
	enableSegmentIntegration: true,
	enableCanvasRecording: true,
	samplingStrategy: {
		canvas: 15,
		canvasQuality: 'low',
		canvasMaxSnapshotDimension: 480,
		canvasFactor: 0.5,
	},
	inlineStylesheet: true,
	inlineImages: true,
	sessionShortcut: 'alt+1,command+`,alt+esc',
}
const favicon = document.querySelector("link[rel~='icon']") as any
options.scriptUrl = 'http://localhost:8080/dist/index.js'
options.backendUrl = 'https://localhost:8082/public'

options.integrations = undefined

const sampleEnvironmentNames = ['john', 'jay', 'anthony', 'cameron', 'boba']
options.environment = `${
	sampleEnvironmentNames[
		Math.floor(Math.random() * sampleEnvironmentNames.length)
	]
}-localhost`
window.document.title = `⚙️ ${window.document.title}`
if (favicon) {
	favicon.href = `/favicon-localhost.ico`
}

H.init(1, options)

platformBrowserDynamic()
	.bootstrapModule(AppModule)
	.catch((err) => console.error(err))
