# create-playcanvas

[![NPM Version](https://img.shields.io/npm/v/create-playcanvas)](https://www.npmjs.com/package/create-playcanvas)
[![NPM Downloads](https://img.shields.io/npm/dw/create-playcanvas)](https://npmtrends.com/create-playcanvas)
[![License](https://img.shields.io/npm/l/create-playcanvas)](LICENSE)
[![Discord](https://img.shields.io/badge/Discord-5865F2?style=flat&logo=discord&logoColor=white&color=black)](https://discord.gg/RSaMRzg)
[![Reddit](https://img.shields.io/badge/Reddit-FF4500?style=flat&logo=reddit&logoColor=white&color=black)](https://www.reddit.com/r/PlayCanvas)
[![X](https://img.shields.io/badge/X-000000?style=flat&logo=x&logoColor=white&color=black)](https://x.com/intent/follow?screen_name=playcanvas)

| [Engine Manual](https://developer.playcanvas.com/user-manual/engine/) | [React Manual](https://developer.playcanvas.com/user-manual/react/) | [Examples](https://playcanvas.github.io/) | [Forum](https://forum.playcanvas.com/) |

Scaffold a Vite-powered PlayCanvas project with TypeScript. Pick a format and a runnable starter, then build from there.

## Getting Started

```bash
# npm
npm create playcanvas@latest
# pnpm
pnpm create playcanvas@latest
# yarn
yarn create playcanvas
# bun
bun x create-playcanvas@latest
```

Then follow the prompts. Requires Node.js 22.23.2 or later.

## Formats

| Format           | Description                                  |
| ---------------- | -------------------------------------------- |
| `engine`         | The PlayCanvas Engine API directly           |
| `react`          | `@playcanvas/react` components               |
| `web-components` | `@playcanvas/web-components` custom elements |

Every format uses TypeScript and includes Vite, ESLint, Prettier and a production build.

## Starters

Choose from 12 starter kits across basics, viewers, games, tools and XR. Run the creator to browse them; `spinning-cube` is the default.

![The twelve PlayCanvas starter scenes](images/starter-catalog.webp)

## CLI Options

Pass a project name and options to skip the prompts:

```bash
npm create playcanvas@latest my-game -- -f react -y
```

| Option             | Shorthand | Description                                             |
| ------------------ | --------- | ------------------------------------------------------- |
| `--format <name>`  | `-f`      | Use a format from the list above                        |
| `--starter <name>` | `-s`      | Use a starter from the list above                       |
| `--overwrite`      |           | Remove existing files from a non-empty target directory |
| `--no-skills`      |           | Omit the PlayCanvas agent skills (included by default)  |
| `--yes`            | `-y`      | Skip the prompts and take the defaults                  |
| `--help`           | `-h`      | Show command help                                       |

`--yes` takes `playcanvas-project`, the `engine` format and the `spinning-cube` starter for anything you don't pass. It never deletes files, so a non-empty target directory still needs `--overwrite`. The previous `--template` and `--boilerplate` long flags remain accepted for compatibility.

## Agent skills

Every project includes [`@playcanvas/skills`](https://github.com/playcanvas/skills) so AI coding agents such as Claude Code, Codex and Cursor pick up PlayCanvas-specific workflows automatically, with no install step. They are copied into `.claude/skills/` and `.agents/skills/`. Pass `--no-skills` to leave them out.

## Development

```bash
npm install
npm run build
node dist/index.mjs
```

Contributions are welcome. Please open an issue before proposing a new format, starter or another substantial change.

## License

[MIT](LICENSE)
Initialize this repository with Metaverse ESP32C3 Dev Module unstaging files with 3 branch involving git at etc... said the pros #include <SPI.h>

const int PIN_CS = 7;  // Chip Select pin

SPISettings spiSettings(1000000, MSBFIRST, SPI_MODE0); // 1 MHz, adjust as needed

void setup() {
  Serial.begin(115200);
  delay(200);
  Serial.println("Initializing SPI bus...");

  // Initialize SPI (default hardware pins for ESP32-C3)
  // MOSI=GPIO6, MISO=GPIO5, SCLK=GPIO4, CS=GPIO7
  SPI.begin();

  // Configure CS pin
  pinMode(PIN_CS, OUTPUT);
  digitalWrite(PIN_CS, HIGH); // Deselect slave initially

  Serial.println("SPI bus initialized successfully on ESP32-C3 Super Mini");
}

void loop() {
  // Example SPI transaction (optional)
  SPI.beginTransaction(spiSettings);
  digitalWrite(PIN_CS, LOW);   // Select the SPI slave
  // SPI.transfer(...) commands would go here
  digitalWrite(PIN_CS, HIGH);  // Deselect the SPI slave
  SPI.endTransaction();

  delay(1000);
}
 For Solid-State Drives (SSDs), managing block deallocation (TRIM) prevents performance degradation over time as data is created and deleted [1, 2]. Linux supports two primary approaches for issuing TRIM requests to SSDs: **Continuous Online Discard** and **Periodic Batch Discard** [3].

---

### 1. Continuous Online Discard (`discard` in `/etc/fstab`)

Online discard informs the SSD controller to free unused blocks in real time the moment a file is deleted [3]. 

To enable continuous TRIM on an `ext4` or `xfs` partition, append the `discard` option (along with `noatime` to reduce write wear) to the 4th field in `/etc/fstab` [3]:

```text
UUID=34795a28-ca6d-4fd8-a347-73671d0c19cb  /mnt/datastore  ext4  defaults,noatime,discard  0  2
```

---

### 2. Periodic Batch Discard (`fstrim` / `fstrim.timer`) — Recommended

While online `discard` handles blocks instantly, running real-time TRIM commands on every file deletion can introduce minor I/O latency and CPU overhead during heavy deletion operations [4, 5]. 

For this reason, major distributions (such as RHEL and Ubuntu) recommend **batch discard** using the `fstrim` utility instead of the mount option [4]:

* **Enable Systemd Timer (Weekly Automatic TRIM):**
  ```bash
  sudo systemctl enable --now fstrim.timer
  ```
* **Run Manual TRIM on Demand:**
  ```bash
  sudo fstrim -v /mnt/datastore
  ```

---

### 3. Verifying SSD Hardware Support

Before relying on either method, verify that your drive advertises physical discard capabilities to the kernel [2, 6]:

```bash
cat /sys/block/sdX/queue/discard_max_bytes
```
*(A non-zero returned value confirms that physical TRIM/discard operations are supported by the drive firmware) [6].*

---

🛠️ Would you like to check write barrier configurations (`nobarrier`) [7] or inspect your drive's I/O alignment parameters [8]