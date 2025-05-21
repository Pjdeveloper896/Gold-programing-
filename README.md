

---

# Gold Programming Language

**Gold** is a creative, minimal, and expressive programming language designed to run in the browser. It avoids traditional syntax like `if`, `else`, `const`, etc., and instead offers a clean, command-style interface for variable management, reactive updates, and virtual DOM rendering using its built-in **HindDom** runtime.

---

## 🌐 Quick Start (CDN)

Include Gold and HindDom in your HTML via CDN:

```html
<script src="https://pjdeveloper896.github.io/Gold-programing-/dist/Gold.min.js"></script>
<script src="https://pjdeveloper896.github.io/Gold-programing-/dist/HindDom.js"></script>

<script>
  const gold = new Gold();

  // Type-safe variable
  gold.type("name", "string");
  gold.set("name", "Gold User");

  // Print to console
  gold.print("Welcome to Gold!");

  // DOM binding
  gold.bind("name", "username");
  gold.eventWatch("name", val => {
    gold.print("Updated name: " + val);
  });

  // Virtual DOM using HindDom
  gold.hindDom.render({
    tag: "div",
    props: { id: "app" },
    children: [
      { tag: "h1", children: ["Hello from Gold"] },
      { tag: "p", children: ["Reactive DOM powered by HindDom"] },
      { tag: "span", props: { id: "username" } }
    ]
  }, document.body);
</script>

---

## ✨ Features

* `print(x)` – Console output
* `err(e)` – Console error
* `type(name, "string"|"number"|"boolean")` – Type-safe variable definition
* `set(name, value)` / `get(name)` – Variable handling
* `bind(name, elementId)` – DOM binding by ID
* `eventWatch(name, callback)` – Reactive watchers
* `goldArray(...items)` – Array with undo history
* `goldObject(obj)` – Object with change tracking
* `goldFunc(meta, fn)` – Function metadata
* `customFetch(url, onDone, onFail)` – HTTP requests
* `hindDom.render(tree, root)` – Lightweight Virtual DOM

---

## 📁 Full Example

```html
<script src="https://pjdeveloper896.github.io/Gold-programing-/dist/Gold.min.js"></script>
<script src="https://pjdeveloper896.github.io/Gold-programing-/dist/HindDom.js"></script>

<div id="app"></div>

<script>
  const gold = new Gold();

  gold.type("score", "number");
  gold.set("score", 42);
  gold.bind("score", "scoreDisplay");

  gold.eventWatch("score", (v) => {
    gold.print("Score updated to " + v);
  });

  gold.hindDom.render({
    tag: "div",
    children: [
      { tag: "h2", children: ["Scoreboard"] },
      { tag: "span", props: { id: "scoreDisplay" } }
    ]
  }, document.getElementById("app"));
</script>
```

---

## 🪙 `.gold` File Extension

Although Gold runs in the browser, you can create `.gold` files to structure your code. Future enhancements may include a script loader for inline `.gold` files.

---

## ✅ Goals

* No JS or Hinglish-like syntax
* Minimal, expressive, and human-readable
* Full reactive data + DOM integration
* Virtual DOM without external frameworks
* CDN-first, browser-first

---

## 📦 CDN Links

* **Gold Runtime**:
  `https://pjdeveloper896.github.io/Gold-programing-/dist/Gold.min.js`

* **HindDom Virtual DOM**:
  `https://pjdeveloper896.github.io/Gold-programing-/dist/HindDom.js`

---

## Created and maintained by [pjdeveloper896](https://github.com/pjdeveloper896)

> Build expressively. Run boldly. Think in Gold.

```

---

```
