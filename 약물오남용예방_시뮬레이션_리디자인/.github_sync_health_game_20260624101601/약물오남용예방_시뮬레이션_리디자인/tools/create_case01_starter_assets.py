from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont


PROJECT_ROOT = Path(__file__).resolve().parents[1]
SOURCE_ROOT = PROJECT_ROOT.parent
OUT_ROOT = PROJECT_ROOT / "assets" / "images"


def font(size, bold=False):
    font_path = Path("C:/Windows/Fonts/malgunbd.ttf" if bold else "C:/Windows/Fonts/malgun.ttf")
    if font_path.exists():
        return ImageFont.truetype(str(font_path), size)
    return ImageFont.load_default()


def save_webp_from(src, dst, size=None):
    im = Image.open(SOURCE_ROOT / src)
    if size:
        im.thumbnail(size, Image.LANCZOS)
    if im.mode not in ("RGB", "RGBA"):
        im = im.convert("RGBA")
    im.save(OUT_ROOT / dst, "WEBP", quality=90, lossless=False)


def ensure_dirs():
    for path in [
        OUT_ROOT / "backgrounds" / "case01",
        OUT_ROOT / "characters" / "case01",
        OUT_ROOT / "clues" / "case01",
        OUT_ROOT / "thumbnails",
    ]:
        path.mkdir(parents=True, exist_ok=True)


def create_desk_background():
    image = Image.new("RGB", (1600, 900), "#eef4fb")
    draw = ImageDraw.Draw(image)
    draw.rectangle((0, 0, 1600, 900), fill="#e7f0fa")
    draw.rectangle((0, 620, 1600, 900), fill="#c99362")
    draw.rounded_rectangle((120, 200, 1050, 760), radius=28, fill="#e4b47c", outline="#b77c4f", width=5)
    draw.rounded_rectangle((190, 250, 620, 565), radius=16, fill="#fffaf0", outline="#d9c7a3", width=4)
    draw.text((230, 285), "오답 정리", fill="#5b6777", font=font(54, True))
    for i, text in enumerate(["영단어 테스트", "수학 프린트", "오늘 제출"]):
        draw.text((235, 365 + i * 55), text, fill="#6b7280", font=font(38))
    draw.rounded_rectangle((650, 255, 790, 420), radius=18, fill="#d7eef9", outline="#9bbbd0", width=4)
    draw.text((675, 315), "물병", fill="#4f7c91", font=font(34, True))
    draw.rounded_rectangle((820, 230, 990, 600), radius=24, fill="#26364f", outline="#172033", width=5)
    draw.arc((815, 160, 995, 320), 200, 340, fill="#172033", width=18)
    draw.rounded_rectangle((850, 345, 950, 470), radius=10, fill="#f7f0da", outline="#b8a878", width=4)
    draw.text((864, 375), "약봉투", fill="#6b5b30", font=font(25, True))
    draw.rounded_rectangle((730, 505, 820, 700), radius=20, fill="#69c37d", outline="#288f4a", width=4)
    draw.text((745, 575), "CA", fill="#ffffff", font=font(42, True))
    draw.rounded_rectangle((400, 610, 650, 720), radius=10, fill="#fff3a6", outline="#d7bd4a", width=3)
    draw.text((425, 635), "아침 약\n졸리면 편의점", fill="#5b4b00", font=font(28, True), spacing=10)
    image.save(OUT_ROOT / "backgrounds" / "case01" / "bg_case01_scene02_desk.webp", "WEBP", quality=90)


def create_clueview_background():
    image = Image.new("RGB", (1600, 900), "#f4f7fb")
    draw = ImageDraw.Draw(image)
    draw.rounded_rectangle((170, 110, 1430, 790), radius=36, fill="#ffffff", outline="#dbe3ee", width=6)
    draw.text((240, 165), "단서 확인 보드", fill="#1f2a37", font=font(58, True))
    for i, x in enumerate([250, 620, 990]):
        draw.rounded_rectangle(
            (x, 290, x + 300, 650),
            radius=18,
            fill=["#fff7e8", "#eef4ff", "#effaf4"][i],
            outline="#dbe3ee",
            width=4,
        )
    image.save(OUT_ROOT / "backgrounds" / "case01" / "bg_case01_scene03_clueview.webp", "WEBP", quality=90)


def create_receipt():
    image = Image.new("RGB", (800, 600), "#f4f7fb")
    draw = ImageDraw.Draw(image)
    draw.rounded_rectangle((205, 35, 595, 565), radius=16, fill="#fffdf7", outline="#d8d2c4", width=4)
    draw.text((265, 70), "편의점 영수증", fill="#1f2a37", font=font(34, True))
    draw.line((235, 125, 565, 125), fill="#d8d2c4", width=3)
    rows = [("10:12", "고카페인 음료", "1개"), ("12:48", "고카페인 음료", "1개"), ("12:48", "삼각김밥", "1개")]
    y = 165
    for time, item, count in rows:
        draw.text((245, y), time, fill="#4b5563", font=font(26, True))
        draw.text((330, y), item, fill="#1f2a37", font=font(26))
        draw.text((510, y), count, fill="#4b5563", font=font(26))
        y += 62
    draw.rounded_rectangle((245, 405, 555, 485), radius=10, fill="#fff0d0", outline="#ffcf70", width=3)
    draw.text((276, 427), "같은 음료 2회 구매", fill="#925f00", font=font(28, True))
    image.save(OUT_ROOT / "clues" / "case01" / "clue_case01_receipt.webp", "WEBP", quality=90)


def create_note():
    image = Image.new("RGB", (800, 600), "#eef4fb")
    draw = ImageDraw.Draw(image)
    draw.rounded_rectangle((150, 95, 650, 500), radius=18, fill="#fff3a6", outline="#d7bd4a", width=5)
    draw.text((210, 155), "아침 약", fill="#3f3a1e", font=font(44, True))
    draw.text((210, 235), "영단어 테스트", fill="#3f3a1e", font=font(40))
    draw.text((210, 310), "졸리면 편의점", fill="#3f3a1e", font=font(44, True))
    draw.text((210, 390), "오답 정리", fill="#3f3a1e", font=font(40))
    draw.line((190, 220, 610, 220), fill="#e5ce63", width=3)
    image.save(OUT_ROOT / "clues" / "case01" / "clue_case01_note.webp", "WEBP", quality=90)


def create_chat_capture():
    image = Image.new("RGB", (800, 600), "#f4f7fb")
    draw = ImageDraw.Draw(image)
    draw.rounded_rectangle((190, 40, 610, 560), radius=36, fill="#1f2a37")
    draw.rounded_rectangle((215, 80, 585, 520), radius=20, fill="#ffffff")
    draw.text((245, 110), "지우와의 대화", fill="#1f2a37", font=font(28, True))
    rows = [
        ("지우", "오늘도 그거 마심?", "#eef4ff", 245),
        ("민재", "안 마시면 못 버틸 듯", "#e9f8f1", 300),
        ("민재", "오늘은 진짜 졸리다", "#e9f8f1", 350),
        ("지우", "시험 끝나면 쉬어야지", "#eef4ff", 420),
    ]
    for who, text, color, y in rows:
        x = 245 if who == "지우" else 300
        draw.rounded_rectangle((x, y, x + 260, y + 42), radius=18, fill=color, outline="#dbe3ee", width=2)
        draw.text((x + 18, y + 8), text, fill="#1f2a37", font=font(22, who == "민재"))
    image.save(OUT_ROOT / "clues" / "case01" / "clue_case01_chat_capture.webp", "WEBP", quality=90)


def create_thumbnail():
    image = Image.open(OUT_ROOT / "backgrounds" / "case01" / "bg_case01_scene01_classroom.webp").convert("RGB").resize((800, 450))
    image = image.filter(ImageFilter.GaussianBlur(1.2))
    draw = ImageDraw.Draw(image, "RGBA")
    draw.rectangle((0, 0, 800, 450), fill=(31, 42, 55, 72))
    draw.rounded_rectangle((52, 250, 748, 392), radius=20, fill=(255, 255, 255, 230))
    draw.text((82, 278), "사건 1", fill="#4f7cff", font=font(34, True))
    draw.text((82, 324), "떨리는 손의 이유", fill="#1f2a37", font=font(48, True))
    image.save(OUT_ROOT / "thumbnails" / "thumb_case01.webp", "WEBP", quality=90)


def main():
    ensure_dirs()
    save_webp_from("assets/backgrounds/scene_classroom.png", "backgrounds/case01/bg_case01_scene01_classroom.webp")
    save_webp_from("assets/backgrounds/scene_health.png", "backgrounds/case01/bg_case01_scene04_healthroom.webp")
    save_webp_from("assets/characters/char_male_sick.png", "characters/case01/npc_minjae_pale.webp")
    save_webp_from("assets/characters/char_male_recovered.png", "characters/case01/npc_minjae_relieved.webp")
    save_webp_from("assets/characters/char_female_nervous.png", "characters/case01/npc_jiwoo_worried.webp")
    save_webp_from("assets/characters/teacher_main.png", "characters/case01/npc_nurse_default.webp")
    save_webp_from("health_game_clue_can.png", "clues/case01/clue_case01_energy_drink.webp")
    if (SOURCE_ROOT / "약학정보원 활동" / "처방전 약봉투.png").exists():
        save_webp_from("약학정보원 활동/처방전 약봉투.png", "clues/case01/clue_case01_medicine_bag.webp")
    create_desk_background()
    create_clueview_background()
    create_receipt()
    create_note()
    create_chat_capture()
    create_thumbnail()
    print("case01 starter assets created")


if __name__ == "__main__":
    main()
