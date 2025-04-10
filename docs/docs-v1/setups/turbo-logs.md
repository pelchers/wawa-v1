# Enabling Persistent Logging in Turborepo

This guide explains how to configure Turborepo to display all logs from your client and server applications in real-time, including user interactions.

## 1. Configure Turbo for Persistent Logging

The key to getting comprehensive logs in Turborepo is to configure the `dev` pipeline to be persistent. This tells Turbo that the process is long-running and should continue to display logs.

Update your `turbo.json` file at the root of your project:

```json
// turbo.json
{
  "pipeline": {
    "dev": {
      "cache": false,
      "dependsOn": ["^dev"],
      "outputs": [],
      "persistent": true
    },
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**", ".next/**", "public/dist/**"]
    }
  },
  "globalDependencies": [".env"]
}
```

The important additions are:
- `"persistent": true` - Tells Turbo this is a long-running process
- `"outputs": []` - Indicates there are no build artifacts from the dev process
- `"globalDependencies": [".env"]` - Makes Turbo aware of environment file changes

## 2. Run Your Development Environment

After making these changes, start your development environment:

```bash
# Execute from root directory
npm run dev
```

Turbo will now display all console logs from both your client and server applications in a unified terminal output, with clear prefixes indicating which workspace (client or server) the log is coming from.

## 3. Verify Logging is Working

To verify that logging is working correctly:
1. Open your application in the browser
2. Interact with the UI (click buttons, submit forms, etc.)
3. Check your terminal - you should see logs for these interactions

## 4. Troubleshooting

If you're not seeing logs:

- Make sure your application is actually logging information (using `console.log`, etc.)
- Check that the `persistent` flag is set to `true` in your `turbo.json`
- Restart your development server to apply the new Turbo configuration

## 5. Advanced Configuration

For more advanced logging configuration, you can:

- Use different log levels by setting `LOG_LEVEL` in your environment variables
- Filter logs by workspace using `turbo run dev --filter=client` or `turbo run dev --filter=server`
- Add verbose output with `turbo run dev --verbose`

By properly configuring Turborepo's persistent logging, you'll have a much better development experience with comprehensive visibility into your application's behavior. 