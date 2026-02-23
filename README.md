# minions-oss-quality

**Linting rules, test coverage targets, usability checklists, and release gates**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-oss-quality/sdk minions-sdk

# Python
pip install minions-oss-quality

# CLI (global)
npm install -g @minions-oss-quality/cli
```

---

## CLI

```bash
# Show help
oss-quality --help
```

---

## Python SDK

```python
from minions_oss_quality import create_client

client = create_client()
```

---

## Project Structure

```
minions-oss-quality/
  packages/
    core/           # TypeScript core library (@minions-oss-quality/sdk on npm)
    python/         # Python SDK (minions-oss-quality on PyPI)
    cli/            # CLI tool (@minions-oss-quality/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [oss-quality.minions.help](https://oss-quality.minions.help)
- Blog: [oss-quality.minions.blog](https://oss-quality.minions.blog)
- App: [oss-quality.minions.wtf](https://oss-quality.minions.wtf)

---

## License

[MIT](LICENSE)
