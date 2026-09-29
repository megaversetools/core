# Contributing to megaversetools/core

Thank you for contributing! Because this core library targets a highly specialized, legacy runtime environment (Adobe Acrobat / PDF 1.7 AcroForms), all contributions must adhere to strict technical constraints.

## Technical Specifications & Constraints

### 1. ECMAScript 3 (ES3) Compliance Only

All code must be written strictly to the **ECMAScript 3** specification (ISO/IEC 16262).

* **Prohibited:** Modern syntax features from ES5 and ES6+—including `const`, `let`, arrow functions (`() => {}`), classes, template literals, module syntax (`import` / `export`), and modern array methods (such as `.map()`, `.filter()`, `.includes()`, etc.).
* **Required:** Use traditional `var`, explicit `for` loops, and standard ES3 function declarations. Functions must rely on global scope exposure rather than module exports.

### 2. Pure Math & Boundary Separation

* **Pure Logic:** Keep functions deterministic, mathematical, and completely decoupled from any PDF-specific runtime context (`this.getField`, form field names, etc.).
* **No Defensive Padding:** Do not add runtime type-checking or error-handling blocks inside core functions. The core assumes proper types; data sanitization and type-coercion belong strictly in the consuming integration/glue layer.

## Review Guidelines

Because this repository is maintained as a clean, dependency-free vanilla JavaScript library, contributions are manually reviewed for strict adherence to the ECMAScript 3 execution standard. Please verify your code uses only classic JS syntax before submitting.
