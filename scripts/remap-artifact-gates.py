from pathlib import Path
import re

p = Path(__file__).resolve().parents[1] / "src" / "content" / "artifacts.ts"
text = p.read_text(encoding="utf-8")

MAP = {
    "gate-0": "gate-1",
    "gate-1": "gate-1",
    "gate-2": "gate-2",
    "gate-3": "gate-2",
    "gate-4": "gate-3",
    "gate-5": "gate-4",
    "gate-6": "gate-4",
    "gate-7": "gate-5",
    "gate-8": "gate-6",
    "gate-9": "gate-6",
}


def remap_id(gid: str) -> str:
    return MAP.get(gid, gid)


def repl(match: re.Match[str]) -> str:
    inner = match.group(1)
    ids = re.findall(r'"(gate-\d)"', inner)
    new_ids: list[str] = []
    for i in ids:
        ni = remap_id(i)
        if ni not in new_ids:
            new_ids.append(ni)
    return "gateIds: [" + ", ".join(f'"{i}"' for i in new_ids) + "]"


new_text, n = re.subn(r"gateIds: \[((?:.|\n)*?)\]", repl, text)
print("replacements", n)
p.write_text(new_text, encoding="utf-8")
