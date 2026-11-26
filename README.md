# The Funniest Toaster Error Message

[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd.svg)](https://make.fun/c/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/Samot72/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd-entry/rank.svg)](https://make.fun/c/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/Samot72/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd-entry/reward.svg)](https://make.fun/c/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)

Entry for the [make.fun](https://make.fun/c/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd) competition **"The Funniest Toaster Error Message"** — one line, at most 120 characters: the error message a kitchen toaster shows its owner when something goes wrong.

## The entry

> ERROR: Gluten-free bread detected. I cannot work under these conditions.

72 characters, one line. A deadpan little appliance, quietly refusing to work under conditions it did not sign up for.

## How it works

`main.ts` (Node 22, no dependencies) holds the single entry line, validates it (1–120 Unicode code points, one line, not empty), writes it byte-exact — no trailing newline — to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`), then reads the file back to verify it matches.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/test-output node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
