// This file was added by layer0 init.
// You should commit this file to source control.

const { Router } = require('@layer0/core/router');

export const API_CACHE_HANDLER = ({
	removeUpstreamResponseHeader,
	cache,
	proxy,
}) => {
	removeUpstreamResponseHeader('cache-control');
	cache({
		browser: {
			maxAgeSeconds: 0,
			serviceWorkerSeconds: 60 * 60 * 24,
		},
		edge: {
			maxAgeSeconds: 60 * 60 * 24 * 365 * 10,
			staleWhileRevalidateSeconds: 60 * 60 * 24,
		},
	});
	proxy('api');
};

const ONE_HOUR = 60 * 60;
const ONE_DAY = 24 * ONE_HOUR;
const ONE_YEAR = 365 * ONE_DAY;

const edgeOnly = {
	browser: false,
	edge: { maxAgeSeconds: ONE_YEAR },
};

const edgeAndBrowser = {
	browser: { maxAgeSeconds: ONE_YEAR },
	edge: { maxAgeSeconds: ONE_YEAR },
};

module.exports = new Router()
	.prerender([{ path: '/' }])

	// match routes for js/css resources and serve the static files
	.match('/static/:path*', ({ serveStatic, cache }) => {
		cache(edgeAndBrowser);
		serveStatic('build/static/:path*');
	})
	// match client-side routes that aren't a static asset
	// and serve the app shell. client-side router will
	// handle the route once it is rendered
	.match('/:path*/:file([^\\.]+|)', ({ appShell, cache }) => {
		cache(edgeOnly);
		appShell('build/index.html');
	})
	// match other assets such as favicon, manifest.json, etc
	.match('/:path*', ({ serveStatic, cache }) => {
		cache(edgeOnly);
		serveStatic('build/:path*');
	})
	// send any unmatched request to serve the static index.html
	.fallback(({ serveStatic }) => serveStatic('build/index.html'));
