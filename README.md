# core

Core Palladium Books Megaverse rule calculation libraries for use in character sheets, online tools, etc.

## Target Integration & Architecture

`megaversetools/core` is designed for strict compatibility with **PDF 1.7 ([ISO 32000-1](https://pdfa.org/resource/iso-32000-1/)) AcroForms** driven by Adobe Acrobat's embedded JavaScript engine.

To ensure absolute portability, zero-dependency execution, and long-term enterprise reliability across the PDF ecosystem, all core calculation logic complies with the **[ECMAScript 3 (ES3)](https://www.ecma-international.org/wp-content/uploads/ECMA-262_3rd_edition_december_1999.pdf)** standard.

### Scope & Execution Context
Because Adobe Acrobat's PDF JavaScript engine does not support modern module systems (`import` / `export`), all library files are executed within a shared global scope (typically loaded as Document-Level JavaScript actions inside the PDF). Functions are defined globally and consumed directly by form field event scripts.
