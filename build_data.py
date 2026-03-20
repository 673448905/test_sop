from pathlib import Path
import re


def extract_title(html):
    match = re.search(r"<title[^>]*>(.*?)</title>", html, re.IGNORECASE | re.DOTALL)
    if match:
        return match.group(1).strip()
    return ""


def extract_body(html):
    body_open = re.search(r"<body[^>]*>", html, re.IGNORECASE | re.DOTALL)
    body_close = re.search(r"</body>", html, re.IGNORECASE | re.DOTALL)
    if not body_open or not body_close:
        return ""
    start = body_open.end()
    end = body_close.start()
    return html[start:end].strip()


def escape_js_string(value):
    value = value.replace("\\", "\\\\")
    value = value.replace("`", "\\`")
    value = value.replace("${", "\\${")
    return value


def escape_js_single_quoted(value):
    return value.replace("\\", "\\\\").replace("'", "\\'")


def main():
    root = Path(__file__).parent
    sops_root = root / "sops"
    entries = []

    if not sops_root.exists():
        print("warning: sops/ 目录不存在，目前不会生成任何数据")
    else:
        for path in sorted(sops_root.rglob("*.html")):
            text = path.read_text(encoding="utf-8", errors="ignore")
            title = extract_title(text)
            body_html = extract_body(text)
            rel_dir = path.parent.relative_to(sops_root)
            category = "" if str(rel_dir) == "." else rel_dir.as_posix()

            entry = {
                "title": title or path.stem,
                "content": body_html,
                "category": category,
            }
            entries.append(entry)

    lines = ["const sopData = ["]
    for entry in entries:
        title_js = escape_js_single_quoted(entry["title"])
        category_js = escape_js_single_quoted(entry["category"])
        content_js = escape_js_string(entry["content"])
        lines.append("  {")
        lines.append(f"    title: '{title_js}',")
        lines.append(f"    content: `{content_js}`,")
        lines.append(f"    category: '{category_js}',")
        lines.append("  },")
    lines.append("];")
    output = "\n".join(lines)
    (root / "data.js").write_text(output, encoding="utf-8")


if __name__ == "__main__":
    main()

