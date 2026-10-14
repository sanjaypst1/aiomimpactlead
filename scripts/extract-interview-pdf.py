from pathlib import Path
import pypdf

pdf = Path(
    r"C:\Users\Atharva\Downloads\5 Sanjay CV\Sanjay CV for AU\0. Interview\future fund\Generic Interview Preparation Guide - AI Operating Model Workstream Lead.pdf"
)
out = Path(r"C:\Users\Atharva\Downloads\_extracted_interview_guide.txt")
reader = pypdf.PdfReader(str(pdf))
parts = []
for i, page in enumerate(reader.pages):
    t = (page.extract_text() or "").replace("\ufb01", "fi").replace("\ufb02", "fl")
    parts.append(f"--- page {i+1} ---\n{t}")
text = "\n\n".join(parts)
out.write_text(text, encoding="utf-8")
print("pages", len(reader.pages), "chars", len(text))
