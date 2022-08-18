// This file was automatically added by layer0 init.
// You should commit this file to source control.
// Learn more about this file at https://docs.layer0.co/guides/layer0_config
module.exports = {
	backends: {
		origin: {
			// The domain name or IP address of the origin server
			domainOrIp: 'layer0-origin.timetables.cf',

			// When provided, the following value will be sent as the host header when connecting to the origin.
			// If omitted, the host header from the browser will be forwarded to the origin.
			hostHeader: 'timetables.cf',

			// Uncomment the following line if TLS is not set up properly on the origin domain and you want to ignore TLS errors
			// disableCheckCert: true,

			// Overrides the default ports (80 for http and 443 for https) and instead use a specific port
			// when connecting to the origin
			// port: 1337,
		},
	},

	// The name of the site in Layer0 to which this app should be deployed.
	name: 'timetables.cf',

	// The name of the team in Layer0 to which this app should be deployed.
	// team: 'my-team-name',

	// Overrides the default path to the routes file. The path should be relative to the root of your app.
	// routes: 'routes.js',

	// The maximum number of URLs that will be concurrently prerendered during deployment when static prerendering is enabled.
	// Defaults to 200, which is the maximum allowed value.
	// prerenderConcurrency: 200,

	// A list of glob patterns identifying which source files should be uploaded when running layer0 deploy --includeSources.
	// This option is primarily used to share source code with Layer0 support personnel for the purpose of debugging. If omitted,
	// layer0 deploy --includeSources will result in all files which are not gitignored being uploaded to Layer0.
	//
	// sources : [
	//   '**/*', // include all files
	//   '!(**/secrets/**/*)', // except everything in the secrets directory
	// ],

	// Allows you to include additional resources in the bundle that is deployed to Layer0’s serverless JS workers.
	// Keys are globs, value can be a boolean or string. This is typically used to ensure that resources
	// that need to be dynamically required at runtime such as build manifests for server-side rendering
	// or other config files are present in the cloud.
	//
	// includeFiles: {
	//   'lang/**/*': true, // Just includes the specified files
	//   'content/**/*': 'another/dir/in/layer0/lambda', // Copies the files into specific directory within Layer0 build
	// },

	// Set to true to include all packages listed in the dependencies property of package.json when deploying to Layer0.
	// This option generally isn't needed as Layer0 automatically includes all modules imported by your code in the bundle that
	// is uploaded during deployment
	//
	// includeNodeModules: true,
};
