# Discord.js Slash Command Bot

A simple Discord bot built with **Node.js** and **Discord.js**, featuring a basic slash command system.

This project was created to practice working with Discord's API, handling interactions, and organizing slash commands into separate files.

## Features

- Slash command support.
- Automatic command loading from folders.
- Command registration using Discord's REST API.
- Basic error handling.
- `/ping` command that responds with `Pong!`.

## Project Structure

```text
project/
├── commands/
│   └── utility/
│       └── ping.js
├── config.json
├── index.js
├── deploy-commands.js
└── package.json
```

## Setup

**1. Install dependencies**

```bash
npm install discord.js
```

**2. Configure your bot**

Create a `config.json` file in the project root:

```json
{
    "token": "YOUR_BOT_TOKEN",
    "clientId": "YOUR_CLIENT_ID",
    "guildId": "YOUR_SERVER_ID"
}
```

- `token`: Your Discord bot token.
- `clientId`: Your application's ID.
- `guildId`: The ID of the Discord server where you want to register commands.

**3. Register slash commands**

Run:

```bash
node deploy-commands.js
```

This registers your slash commands with your Discord server.

**4. Start the bot**

```bash
node index.js
```

Once connected, the bot will be ready to receive commands.

## Example

The bot currently includes one slash command:

| Command | Description |
|---|---|
| `/ping` | Responds with `Pong!` |

### Ping Command in Action

<img width="271" height="94" alt="image" src="https://github.com/user-attachments/assets/9eab8dd0-62f4-4dd1-b233-549ac459190c" />

## Technologies

- JavaScript
- Node.js
- Discord.js
- Discord REST API

## Notes

This is a small learning project and serves as a foundation for experimenting with Discord bot development and expanding its command functionality.

**Important:** Keep your `config.json` private and never upload your bot token to GitHub. Add it to `.gitignore` before pushing your project.
