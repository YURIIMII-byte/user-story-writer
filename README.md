# user-story-writer

Turns a rough feature idea into user stories with acceptance criteria, on-device. Built with [Tether's QVAC SDK](https://github.com/tetherto/qvac) — the model runs on-device, so nothing leaves your machine.

## What it does

Turns a rough feature idea into user stories with acceptance criteria, on-device.

**QVAC functions used:** `loadModel` and `completion`.

![user-story-writer demo](demo.png)

## Why I built it

Product ideas arrive as one Slack sentence. Engineers need something they can build and test.

## Requirements

- Node.js >= 22
- `@qvac/sdk` `^0.19.0` (installed automatically via `npm install`)

## Install

```bash
git clone https://github.com/YURIIMII-byte/user-story-writer.git
cd user-story-writer
npm install
```

## Run

```bash
npm start
```

An example input is included: `feature-idea.example.txt`.

See the comments at the top of `index.js` for the exact input this app expects. On first run, QVAC downloads the model it needs once and caches it locally; every run after that is fully offline.

## SDK version used

`@qvac/sdk` `0.19.1`

## License

MIT — see [LICENSE](LICENSE).
