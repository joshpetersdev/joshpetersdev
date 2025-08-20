// Common Go keywords
const goKeywords = new Set([
  "break", "default", "func", "interface", "select",
  "case", "defer", "go", "map", "struct",
  "chan", "else", "goto", "package", "switch",
  "const", "fallthrough", "if", "range", "type",
  "continue", "for", "import", "return", "var", "len",
]);

export function highlightGoCode(code) {
  // Tokenizer:
  // - string literals (double quotes or backticks)
  // - composite tokens like []int
  // - identifiers / numbers
  // - operators & punctuation
  // - whitespace (spaces, tabs, newlines)
  const tokens = code.match(/".*?"|`[^`]*`|\[\]\w+|\w+|[+\-*/=<>!:&|^%]+|[()[\]{}.,;]|[\s]+/g) || [];

  return tokens.map(tok => {
    // Keep whitespace untouched
    if (/^\s+$/.test(tok)) {
      return tok;
    }

    // Keywords
    if (goKeywords.has(tok)) {
      return `<span class="highlight keyword">${tok}</span>`;
    }

    // Strings
    if (/^".*"$/.test(tok) || /^`.*`$/.test(tok)) {
      return `<span class="highlight string">${tok}</span>`;
    }

    // Operators / punctuation
    if (/^[+\-*/=<>!:&|^%]+$/.test(tok) || /^[()[\]{}.,;]$/.test(tok)) {
      return `<span class="highlight operator">${tok}</span>`;
    }

    // Slice type like []int
    if (/^\[\]\w+$/.test(tok)) {
      return `<span class="highlight type">${tok}</span>`;
    }

    return tok; // variables, function names, etc.
  }).join("");
}

export function applyHighlights() {
  document.querySelectorAll("pre.go-code").forEach(el => {
    const code = el.textContent;
    el.innerHTML = highlightGoCode(code);
  });
}

