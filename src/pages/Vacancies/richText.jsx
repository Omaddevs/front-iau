function parseInlineBold(text, keyPrefix) {
  const parts = String(text || "").split(/\*\*(.+?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={`${keyPrefix}-b${i}`}>{part}</strong> : part
  );
}

export function renderRichText(text) {
  const lines = String(text || "")
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean);

  const blocks = [];
  let currentList = null;

  const flushList = () => {
    if (currentList) {
      const listIndex = blocks.length;
      blocks.push(
        <ul className="vac-rt-list" key={`list-${listIndex}`}>
          {currentList.map((item, i) => (
            <li key={i}>{parseInlineBold(item, `li-${listIndex}-${i}`)}</li>
          ))}
        </ul>
      );
      currentList = null;
    }
  };

  lines.forEach((line, idx) => {
    if (line.startsWith("## ")) {
      flushList();
      blocks.push(
        <h3 className="vac-rt-h3" key={`h-${idx}`}>
          {parseInlineBold(line.slice(3).trim(), `h-${idx}`)}
        </h3>
      );
    } else if (/^[-•]\s+/.test(line)) {
      if (!currentList) currentList = [];
      currentList.push(line.replace(/^[-•]\s+/, "").trim());
    } else {
      flushList();
      blocks.push(
        <p className="vac-rt-p" key={`p-${idx}`}>
          {parseInlineBold(line, `p-${idx}`)}
        </p>
      );
    }
  });
  flushList();

  return blocks;
}

export function renderInlineBold(text, keyPrefix = "inline") {
  return parseInlineBold(text, keyPrefix);
}

export function stripBulletPrefix(text) {
  return String(text || "").replace(/^[-•]\s+/, "").trim();
}
