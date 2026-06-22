window.gameData = {
  characters: {
    minjae_pale: {
      id: "minjae_pale",
      name: "민재",
      image: "./assets/images/characters/case01/npc_minjae_pale_imagegen.webp",
      mobileImage: "./assets/images/characters/case01/npc_minjae_pale_mobile_upper_imagegen.png",
      alt: "창백하고 피곤해 보이는 민재",
      role: "student"
    },
    minjae_relieved: {
      id: "minjae_relieved",
      name: "민재",
      image: "./assets/images/characters/case01/npc_minjae_relieved_imagegen.webp",
      mobileImage: "./assets/images/characters/case01/npc_minjae_relieved_mobile_upper_imagegen.png",
      alt: "안정을 되찾은 민재",
      role: "student"
    },
    jiwoo_worried: {
      id: "jiwoo_worried",
      name: "지우",
      image: "./assets/images/characters/case01/npc_jiwoo_worried_imagegen.webp",
      mobileImage: "./assets/images/characters/case01/npc_jiwoo_worried_mobile_upper_imagegen.png",
      alt: "걱정스럽게 바라보는 지우",
      role: "student"
    },
    nurse_default: {
      id: "nurse_default",
      name: "보건샘",
      image: "./assets/images/characters/case01/npc_nurse_default_imagegen.webp",
      mobileImage: "./assets/images/characters/case01/npc_nurse_default_mobile_upper_imagegen.png",
      alt: "차분하게 설명하는 보건샘",
      role: "nurse"
    }
  },

  clues: {
    medicine_bag: {
      id: "medicine_bag",
      title: "감기약 봉투",
      category: "물리 단서",
      location: "가방 안",
      image: "./assets/images/clues/case01/clue_case01_medicine_bag_imagegen.webp",
      alt: "감기약 봉투 단서",
      summary: "아침 복용 표시가 남아 있는 감기약 봉투",
      detail: "아침 복용 표시가 있는 감기약 봉투다. 오늘 약을 먹은 건 확실해 보인다."
    },
    note: {
      id: "note",
      title: "메모지",
      category: "관찰 기록",
      location: "책상 위",
      image: "./assets/images/clues/case01/clue_case01_note_imagegen.webp",
      alt: "공부 일정과 복용 메모가 적힌 메모지",
      summary: "공부 일정, 수면 부족, 복용 관련 메모",
      detail: "‘아침 약’, ‘영단어 테스트’, ‘졸리면 편의점’ 같은 메모가 적혀 있다. 피곤할 때 음료에 의존했을 가능성이 보인다."
    },
    receipt: {
      id: "receipt",
      title: "편의점 영수증",
      category: "물리 단서",
      location: "교실 쓰레기통 주변",
      image: "./assets/images/clues/case01/clue_case01_receipt_imagegen.webp",
      alt: "카페인 음료 구매 기록이 있는 영수증",
      summary: "오전과 점심 시간대의 카페인 음료 구매 기록",
      detail: "영수증에는 오전 쉬는 시간과 점심시간, 서로 다른 시간대의 구매 기록이 남아 있다. 카페인 음료를 한 번만 산 것이 아닌 것 같다."
    },
    chat_capture: {
      id: "chat_capture",
      title: "메신저 캡처",
      category: "디지털 단서",
      location: "휴대폰",
      image: "./assets/images/clues/case01/clue_case01_chat_capture_imagegen.webp",
      alt: "친구와 나눈 메신저 캡처",
      summary: "버티려고 계속 마셨다는 정황",
      detail: "대화 내용에는 ‘안 마시면 못 버틸 듯’이라는 말이 보인다. 민재는 피로와 압박감 속에서 버티려고 했던 것 같다."
    },
    energy_drink: {
      id: "energy_drink",
      title: "카페인 음료 캔",
      category: "물리 단서",
      location: "책상 옆",
      image: "./assets/images/clues/case01/clue_case01_energy_drink_imagegen.webp",
      alt: "카페인 음료 캔 단서",
      summary: "카페인 표시를 확인해야 하는 음료",
      detail: "책상 주변에 카페인 음료 캔이 놓여 있다. 한 번 마신 것인지, 반복해서 마신 것인지는 더 확인이 필요하다."
    },
    witness_jiwoo: {
      id: "witness_jiwoo",
      title: "지우의 증언",
      category: "관찰 기록",
      location: "교실",
      image: "./assets/images/characters/case01/npc_jiwoo_worried_imagegen.webp",
      alt: "걱정스럽게 증언하는 지우",
      summary: "민재가 물 대신 음료수로 약을 먹는 습관이 있다는 증언",
      detail: "지우는 민재가 정수기까지 가기 귀찮다며 마시다 남은 탄산음료로 감기약을 삼킨 적이 있다고 말했다. 약을 물이 아닌 음료와 함께 먹는 습관이 있었던 셈이다."
    },
    witness_haeun: {
      id: "witness_haeun",
      title: "하은의 증언",
      category: "관찰 기록",
      location: "매점 앞",
      image: "./assets/images/clues/case01/clue_case01_chat_capture_imagegen.webp",
      alt: "아침 행동을 떠올리게 하는 증언 단서",
      summary: "오늘 아침 민재가 아메리카노로 감기약을 먹으려 했다는 목격담",
      detail: "하은은 민재가 감기약 봉지를 들고 있었고, 생수 대신 잠을 깨려고 테이크아웃 아메리카노로 약을 먹겠다고 말한 장면을 봤다고 증언했다."
    },
    coffee_label: {
      id: "coffee_label",
      title: "커피 컵 카페인 표시",
      category: "물리 단서",
      location: "책상 위 컵 라벨",
      image: "./assets/images/clues/case01/clue_case01_energy_drink_imagegen.webp",
      alt: "카페인 표시를 확인한 커피 컵 라벨",
      summary: "숨은 표시에서 고카페인 150mg을 확인함",
      detail: "돋보기로 컵 라벨을 확인하자 고카페인 함유 표시가 보였다. 민재가 약을 먹을 때 함께 마신 음료에도 상당한 카페인이 들어 있었다."
    },
    anhydrous_caffeine: {
      id: "anhydrous_caffeine",
      title: "무수카페인 검색 결과",
      category: "참고 정보",
      location: "인게임 검색",
      image: "./assets/images/clues/case01/clue_case01_medicine_bag_imagegen.webp",
      alt: "감기약 성분 검색 단서",
      summary: "감기약에도 카페인 성분이 숨어 있을 수 있다는 검색 결과",
      detail: "검색 결과 무수카페인은 수분이 없는 고농축 카페인 성분이며, 일부 종합감기약에 포함될 수 있다. 커피 등 고카페인 음료와 겹치면 두근거림, 손 떨림 같은 불편이 심해질 수 있다."
    },
    health_newsletter: {
      id: "health_newsletter",
      title: "보건소식지: 자율신경계",
      category: "참고 정보",
      location: "보건실 벽면",
      image: "./assets/images/backgrounds/case01/bg_case01_scene04_healthroom_imagegen.webp",
      alt: "보건실 벽에 붙은 자율신경계 보건소식지",
      summary: "교감신경과 부교감신경을 엑셀과 브레이크로 설명한 소식지",
      detail: "보건소식지는 교감신경을 몸의 부스터, 부교감신경을 몸의 브레이크로 설명한다. 민재의 심박수 증가와 호흡 곤란은 교감신경이 과하게 활성화된 상태와 연결해볼 수 있다."
    }
  },

  episodes: [
    {
      id: "case01",
      order: 1,
      title: "떨리는 손의 이유",
      subtitle: "시험기간 카페인 사건",
      thumbnail: "./assets/images/thumbnails/episode01_thumbnail_imagegen.png",
      keywords: ["카페인", "수면 부족", "약 복용"],
      difficulty: "쉬움",
      estimatedMinutes: 10,
      recommendedStats: ["관찰력", "판단력", "건강문해력"],
      status: "available",
      worksheet: true,
      introQuestion: "민재의 상태를 악화시킨 주요 원인은 무엇일까?",

      scenes: [
        {
          id: "case01_scene01",
          title: "이상 징후 발견",
          stepLabel: "장면 1",
          phase: "도입",
          location: "교실",
          background: "./assets/images/backgrounds/case01/bg_case01_scene01_classroom_imagegen.webp",
          backgroundAlt: "시험기간 오후 교실 배경",
          actors: {
            left: { characterId: "minjae_pale", visible: true },
            right: { characterId: "jiwoo_worried", visible: true }
          },
          speaker: "right",
          tags: ["오후 자율학습 전", "시험기간", "교실"],
          dialogue: {
            name: "지우",
            text: "민재가 아까부터 손을 계속 떨고 있었어. 괜찮다고는 하는데, 얼굴도 좀 하얘 보여."
          },
          casePanel: {
            symptoms: ["손 떨림", "창백한 얼굴", "집중 저하"],
            facts: ["민재는 괜찮다고 말함"],
            unknowns: ["민재의 상태를 악화시킨 주요 원인", "오늘 먹거나 마신 것"],
            progress: {
              cluesFound: 0,
              cluesTotal: 10,
              statementsFound: 1,
              statementsTotal: 4,
              hypothesesFound: 0,
              hypothesesTotal: 3
            }
          },
          choices: [
            { id: "to_scene02", text: "민재에게 직접 상태를 묻는다", nextSceneId: "case01_scene02" },
            { id: "to_interview", text: "주변 친구들에게 먼저 묻는다", nextSceneId: "case01_scene02_interview" },
            { id: "to_scene02b", text: "지우에게 더 자세한 상황을 묻는다", nextSceneId: "case01_scene02" }
          ],
          actions: [
            { id: "openQuestion", text: "핵심 질문" },
            { id: "openMemo", text: "메모에 정리" }
          ],
          cluesShown: [],
          cluesUnlock: [],
          memoHints: [
            "민재에게 보인 이상 징후 2가지를 적어보세요.",
            "처음 떠오른 원인을 적되, 아직 확인된 사실과 추측을 나눠보세요."
          ]
        },
        {
          id: "case01_scene02",
          title: "민재의 말",
          stepLabel: "장면 2",
          phase: "초기 진술",
          location: "교실",
          background: "./assets/images/backgrounds/case01/bg_case01_scene01_classroom_imagegen.webp",
          backgroundAlt: "교실에서 민재와 지우가 대화하는 장면",
          actors: {
            left: { characterId: "minjae_pale", visible: true },
            right: { characterId: "jiwoo_worried", visible: true }
          },
          speaker: "left",
          tags: ["초기 진술", "컨디션 확인"],
          dialogue: {
            name: "민재",
            text: "괜찮아. 그냥 잠을 좀 못 자서 그래. 시험 때문에 어제 좀 늦게 잤어."
          },
          casePanel: {
            symptoms: ["손 떨림", "창백한 얼굴"],
            facts: ["민재는 수면 부족을 이유로 말함", "본인은 괜찮다고 함"],
            unknowns: ["수면 부족만으로 설명할 수 있는지", "약이나 음료 섭취가 있었는지"],
            progress: {
              cluesFound: 0,
              cluesTotal: 10,
              statementsFound: 2,
              statementsTotal: 4,
              hypothesesFound: 1,
              hypothesesTotal: 3
            }
          },
          choices: [
            { id: "to_interview", text: "친구들에게 오늘 있었던 일을 묻는다", nextSceneId: "case01_scene02_interview" },
            { id: "to_interview_alt", text: "쉬는 시간에 민재를 본 사람을 찾는다", nextSceneId: "case01_scene02_interview" },
            { id: "to_interview_note", text: "주변 기억부터 차근차근 모은다", nextSceneId: "case01_scene02_interview" }
          ],
          actions: [
            { id: "openMemo", text: "메모에 정리" },
            { id: "openQuestion", text: "핵심 질문" }
          ],
          cluesShown: [],
          cluesUnlock: [],
          memoHints: [
            "민재의 말과 보이는 상태가 일치하는지 생각해보세요.",
            "피곤함만으로 설명되지 않는 점이 있는지 적어보세요."
          ]
        },
        {
          id: "case01_scene02_interview",
          title: "친구들의 증언",
          stepLabel: "장면 3",
          phase: "증언 수집",
          location: "교실",
          background: "./assets/images/backgrounds/case01/bg_case01_scene01_classroom_imagegen.webp",
          backgroundAlt: "친구들에게 민재의 행동을 물어보는 교실 장면",
          actors: {
            left: { visible: false },
            right: { visible: false }
          },
          speaker: null,
          tags: ["인터뷰", "기억 비교", "상황 확인"],
          dialogue: {
            name: "조사",
            text: "친구들이 기억하는 장면을 하나씩 들어보세요. 같은 하루를 봤어도 사람마다 떠올리는 장면은 다를 수 있습니다."
          },
          casePanel: {
            symptoms: ["손 떨림", "창백한 얼굴", "집중 저하"],
            facts: ["민재는 수면 부족이라고 말함", "친구들이 서로 다른 기억을 갖고 있음"],
            unknowns: ["민재가 오늘 어디에서 무엇을 했는지", "서로 다른 기억이 같은 상황을 가리키는지"],
            progress: {
              cluesFound: 0,
              cluesTotal: 10,
              statementsFound: 2,
              statementsTotal: 4,
              hypothesesFound: 1,
              hypothesesTotal: 3
            }
          },
          choices: [
            {
              id: "to_scene03",
              text: "책상 위 물건을 살펴본다",
              lockedText: "친구들의 기억을 조금 더 들어보세요",
              nextSceneId: "case01_scene03",
              requiresInteraction: true
            },
            {
              id: "to_scene03_bag",
              text: "가방 주변을 확인한다",
              lockedText: "친구들의 기억을 조금 더 들어보세요",
              nextSceneId: "case01_scene03",
              requiresInteraction: true
            },
            {
              id: "to_scene03_compare",
              text: "들은 내용을 메모하고 물건과 비교한다",
              lockedText: "친구들의 기억을 조금 더 들어보세요",
              nextSceneId: "case01_scene03",
              requiresInteraction: true
            }
          ],
          actions: [
            { id: "openMemo", text: "메모에 정리" },
            { id: "openQuestion", text: "핵심 질문" }
          ],
          cluesShown: ["witness_jiwoo", "witness_haeun"],
          cluesUnlock: [],
          interaction: {
            type: "witnessInterview",
            progressLabel: "들은 이야기",
            requiredItems: ["minwoo", "jiwoo", "seoyeon", "haeun"],
            minRequiredCount: 4,
            eyebrow: "단서 찾기 인터뷰",
            title: "친구 네 명에게 말 걸기",
            description: "친구들이 본 장면을 차례대로 들어보고, 나중에 물건 단서와 비교해볼 내용을 메모해두세요.",
            emptyMessage: "친구 이름을 눌러 이야기를 들어보세요.",
            transition: {
              title: "친구들의 이야기를 들었습니다",
              text: "들은 내용을 바로 결론 내리지 말고, 주변 물건과 맞춰봅니다.",
              delay: 900
            },
            witnesses: [
              {
                id: "minwoo",
                name: "민우",
                label: "체육 수행평가",
                preview: "농구공을 너무 많이 던져서 손에 힘이 풀린 거 아닐까?",
                text: "민재? 걔 아까 2교시 끝나고 체육관 뒤에서 농구 엄청 열심히 하던데? 오늘 레이업 슛 수행평가라 자기 목숨 걸었다고 그랬어. 손 떠는 거 그거 그냥 농구공 너무 많이 던져서 손에 힘 풀린 거 아니야? 나도 저번에 하루 종일 피구하고 나니까 밥숟가락도 못 들겠더라.",
                isCore: false,
                falseHint: "민우의 기억을 기록했습니다. 다른 친구들의 말과도 비교해보세요."
              },
              {
                id: "jiwoo",
                name: "지우",
                label: "며칠 전 기억",
                preview: "며칠 전 감기약 먹을 때 봤던 장면이 있어.",
                text: "민재 알약 먹을 때 말이야, 걔 귀찮다고 정수기까지 절대 안 가. 며칠 전에도 감기약 먹을 때 보니까 책상에 마시다 남은 탄산음료로 그냥 꿀꺽 삼키더라고. 내가 '야, 약을 왜 그런 거랑 먹냐?' 그랬더니 민재가 '어차피 배 들어가면 다 똑같은 액체인데 뭔 상관이야, 쓴맛도 안 나고 개이득이지' 하면서 웃어넘겼어.",
                isCore: true,
                clueId: "witness_jiwoo",
                memo: "지우의 증언: 민재는 물 대신 음료수로 약을 먹는 습관이 있었다."
              },
              {
                id: "seoyeon",
                name: "서연",
                label: "점심시간 기억",
                preview: "매운 급식 때문에 배가 아프거나 당 떨어진 거 아닐까?",
                text: "민재 오늘 4교시 내내 배고프다고 징징대던데? 어제 밤새 시험공부 하느라 저녁도 제대로 못 먹었대. 아까 점심 급식에 매운 제육볶음 나왔잖아. 그거 너무 매워서 위가 아프거나, 배고파서 당 떨어져서 부들부들 떠는 거 아닐까? 매점 가서 초코바 하나 먹이면 바로 나을걸?",
                isCore: false,
                falseHint: "서연의 기억을 기록했습니다. 다른 친구들의 말과도 비교해보세요."
              },
              {
                id: "haeun",
                name: "하은",
                label: "아침 매점 앞 기억",
                preview: "아침에 매점 앞에서 민재를 봤던 일이 있어.",
                text: "오늘 아침에 매점 앞에서 민재 만났거든? 손에 감기약 봉지를 들고 있길래 감기 걸렸냐고 물어봤지. 그랬더니 걔가 '어제 밤새워서 너무 졸린데, 생수 대신 잠 깨게 테이크아웃 아메리카노 사서 이걸로 약 먹어야겠다' 하면서 킬킬거리더라고. 내가 그때 말렸어야 했는데...",
                isCore: true,
                clueId: "witness_haeun",
                memo: "하은의 증언: 오늘 아침 민재는 아메리카노로 감기약을 먹으려 했다."
              }
            ]
          },
          memoHints: [
            "친구마다 말한 시간, 장소, 행동을 따로 적어보세요.",
            "아직 결론을 내리지 말고 나중에 물건 단서와 비교해보세요."
          ]
        },
        {
          id: "case01_scene03",
          type: "investigation",
          title: "책상과 가방 조사",
          stepLabel: "장면 4",
          phase: "조사",
          location: "교실",
          background: "./assets/images/backgrounds/case01/bg_case01_scene02_desk_imagegen.webp",
          backgroundAlt: "책상 위 단서를 살펴보는 장면",
          actors: {
            left: { visible: false },
            right: { visible: false }
          },
          speaker: null,
          tags: ["단서 수집", "책상", "가방"],
          dialogue: {
            name: "조사",
            text: "무엇을 먹었고, 왜 그런 선택을 했는지 알 수 있는 단서를 찾아보세요."
          },
          casePanel: {
            symptoms: ["손 떨림", "창백한 얼굴"],
            facts: ["감기약 봉투가 있음", "수면 부족 메모가 있음", "카페인 음료 캔이 있음"],
            unknowns: ["약을 언제 먹었는지", "음료에 카페인이 얼마나 들어 있었는지"],
            progress: {
              cluesFound: 3,
              cluesTotal: 10,
              statementsFound: 4,
              statementsTotal: 4,
              hypothesesFound: 1,
              hypothesesTotal: 3
            }
          },
          choices: [
            {
              id: "to_scene04",
              text: "음료 라벨을 자세히 확인한다",
              lockedText: "책상과 가방을 조금 더 살펴보세요",
              nextSceneId: "case01_scene03_scan",
              requiresInvestigation: true
            },
            {
              id: "to_scene04_medicine",
              text: "약 봉투와 음료를 나란히 놓고 본다",
              lockedText: "책상과 가방을 조금 더 살펴보세요",
              nextSceneId: "case01_scene03_scan",
              requiresInvestigation: true
            },
            {
              id: "to_scene04_memo",
              text: "확인한 물건을 메모한 뒤 다음으로 간다",
              lockedText: "책상과 가방을 조금 더 살펴보세요",
              nextSceneId: "case01_scene03_scan",
              requiresInvestigation: true
            }
          ],
          actions: [
            { id: "openInventory", text: "단서 확인" },
            { id: "openMemo", text: "메모에 정리" }
          ],
          cluesShown: ["medicine_bag", "note", "energy_drink"],
          cluesUnlock: [],
          investigation: {
            progressLabel: "확인한 물건",
            requiredClues: ["medicine_bag", "note", "energy_drink"],
            minRequiredCount: 2,
            nextSceneId: "case01_scene03_scan",
            transition: {
              title: "물건을 충분히 살펴봤습니다",
              text: "확인한 물건 중 더 자세히 봐야 할 부분을 이어서 살펴봅니다.",
              delay: 1000
            },
            hotspots: [
              {
                id: "hotspot_medicine_bag",
                clueId: "medicine_bag",
                type: "core",
                label: "약 봉투",
                x: 71.3,
                y: 36.2,
                width: 19.2,
                height: 25.5,
                foundText: "오늘 아침 약을 복용한 정황이 확인된다."
              },
              {
                id: "hotspot_note",
                clueId: "note",
                type: "core",
                label: "메모지",
                x: 35.3,
                y: 36.1,
                width: 11.3,
                height: 16.4,
                foundText: "메모지에는 피곤할 때 편의점을 찾았다는 정황이 적혀 있다."
              },
              {
                id: "hotspot_energy_drink",
                clueId: "energy_drink",
                type: "core",
                label: "음료 캔",
                x: 43.5,
                y: 56.0,
                width: 12.0,
                height: 31.6,
                foundText: "카페인 음료를 마신 정황이 보인다. 얼마나, 몇 번 마셨는지는 아직 확실하지 않다."
              },
              {
                id: "hotspot_pencilcase",
                clueId: null,
                type: "extra",
                label: "필통",
                x: 22.9,
                y: 11.4,
                width: 21.4,
                height: 20.6,
                foundText: "특별한 점은 없어 보인다."
              },
              {
                id: "hotspot_bottle",
                clueId: null,
                type: "extra",
                label: "물병",
                x: 45.6,
                y: 1.2,
                width: 10.9,
                height: 32.0,
                foundText: "물병이다. 비어 있는지, 언제 마셨는지는 아직 알 수 없다."
              }
            ]
          },
          memoHints: [
            "핫스팟을 눌러 확인한 사실과 아직 추측인 내용을 나눠 적어보세요.",
            "물건을 충분히 살펴본 뒤 다음 분석으로 이동할 수 있습니다."
          ]
        },
        {
          id: "case01_scene03_scan",
          title: "커피 컵 라벨 스캔",
          stepLabel: "장면 5",
          phase: "성분 확인",
          location: "단서 보기",
          background: "./assets/images/backgrounds/case01/bg_case01_scene03_clueview.webp",
          backgroundAlt: "단서 라벨을 확대해 확인하는 장면",
          actors: {
            left: { visible: false },
            right: { visible: false }
          },
          speaker: null,
          tags: ["돋보기", "카페인 표시", "성분 확인"],
          dialogue: {
            name: "분석",
            text: "하은의 증언이 맞다면 컵 라벨에 중요한 표시가 있을 수 있습니다. 검은 라벨 주변을 자세히 살펴보세요."
          },
          casePanel: {
            symptoms: ["손 떨림", "창백한 얼굴", "집중 저하"],
            facts: ["아침에 들고 있던 음료에 대한 기억이 있음", "책상 주변에서 음료 정황이 보임"],
            unknowns: ["컵에 어떤 표시가 있는지", "표시된 내용이 민재 상태와 관련 있는지"],
            progress: {
              cluesFound: 5,
              cluesTotal: 10,
              statementsFound: 4,
              statementsTotal: 4,
              hypothesesFound: 2,
              hypothesesTotal: 3
            }
          },
          choices: [
            {
              id: "to_search",
              text: "약 봉투의 성분명을 확인한다",
              lockedText: "라벨의 숨은 표시를 확인하세요",
              nextSceneId: "case01_scene03_search",
              requiresInteraction: true
            },
            {
              id: "to_search_compare",
              text: "라벨에서 본 내용을 메모하고 검색한다",
              lockedText: "라벨의 숨은 표시를 확인하세요",
              nextSceneId: "case01_scene03_search",
              requiresInteraction: true
            },
            {
              id: "to_search_question",
              text: "모르는 성분이 있는지 찾아본다",
              lockedText: "라벨의 숨은 표시를 확인하세요",
              nextSceneId: "case01_scene03_search",
              requiresInteraction: true
            }
          ],
          actions: [
            { id: "openInventory", text: "단서 확인" },
            { id: "openMemo", text: "메모에 정리" }
          ],
          cluesShown: ["energy_drink", "coffee_label"],
          cluesUnlock: [],
          interaction: {
            type: "labelScan",
            progressLabel: "라벨 정보",
            requiredItems: ["coffee_label"],
            minRequiredCount: 1,
            clueId: "coffee_label",
            eyebrow: "돋보기 분석",
            title: "검은 라벨의 작은 글씨 확인",
            description: "컵 뒷면의 검은 라벨 주변을 마우스로 천천히 훑어 작은 글씨를 확인하세요.",
            itemLabel: "TAKEOUT AMERICANO",
            hiddenText: "[고카페인 함유: 총 150mg]",
            emptyMessage: "검은 라벨 아래쪽을 천천히 훑어보세요. 작은 글씨가 숨어 있습니다.",
            successMessage: "커피 컵 라벨에서 고카페인 함유 150mg 표시를 확인했습니다.",
            revealZone: { xMin: 54, xMax: 96, yMin: 52, yMax: 94 },
            transition: {
              title: "작은 표시를 확인했습니다",
              text: "표시된 내용을 메모하고, 약 봉투에 적힌 낯선 성분도 확인해봅니다.",
              delay: 900
            }
          },
          memoHints: [
            "라벨에서 확인한 수치와 민재의 증상을 연결해보세요.",
            "아직 모르는 성분명이나 확인해야 할 질문을 적어보세요."
          ]
        },
        {
          id: "case01_scene03_search",
          title: "약 성분 인터넷 검색",
          stepLabel: "장면 6",
          phase: "성분 검색",
          location: "휴대폰 검색",
          background: "./assets/images/backgrounds/case01/bg_case01_scene03_clueview.webp",
          backgroundAlt: "휴대폰으로 감기약 성분을 검색하는 장면",
          actors: {
            left: { visible: false },
            right: { visible: false }
          },
          speaker: null,
          tags: ["검색", "무수카페인", "건강문해력"],
          dialogue: {
            name: "검색",
            text: "감기약 봉투에서 낯선 성분명을 찾아 검색해보세요. 모르는 단어를 직접 확인하는 것도 중요한 조사입니다."
          },
          casePanel: {
            symptoms: ["손 떨림", "창백한 얼굴", "집중 저하"],
            facts: ["커피 컵에서 고카페인 표시를 확인함", "감기약 봉투가 있음"],
            unknowns: ["약 봉투에 적힌 낯선 성분이 어떤 역할을 하는지"],
            progress: {
              cluesFound: 6,
              cluesTotal: 10,
              statementsFound: 4,
              statementsTotal: 4,
              hypothesesFound: 2,
              hypothesesTotal: 3
            }
          },
          choices: [
            {
              id: "to_receipt",
              text: "영수증을 확인해 시간대를 본다",
              lockedText: "약 봉투의 성분명을 검색해보세요",
              nextSceneId: "case01_scene04",
              requiresInteraction: true
            },
            {
              id: "to_receipt_compare",
              text: "검색 결과와 구매 기록을 비교한다",
              lockedText: "약 봉투의 성분명을 검색해보세요",
              nextSceneId: "case01_scene04",
              requiresInteraction: true
            },
            {
              id: "to_receipt_timeline",
              text: "오늘 하루 시간순서를 맞춰본다",
              lockedText: "약 봉투의 성분명을 검색해보세요",
              nextSceneId: "case01_scene04",
              requiresInteraction: true
            }
          ],
          actions: [
            { id: "openInventory", text: "단서 확인" },
            { id: "openMemo", text: "메모에 정리" }
          ],
          cluesShown: ["medicine_bag", "anhydrous_caffeine"],
          cluesUnlock: [],
          interaction: {
            type: "medicineSearch",
            progressLabel: "검색 결과",
            requiredItems: ["anhydrous_caffeine"],
            minRequiredCount: 1,
            clueId: "anhydrous_caffeine",
            eyebrow: "인게임 검색",
            title: "감기약 성분 백과사전",
            description: "민재의 약 봉투에서 눈에 띄는 낯선 성분명을 검색하세요.",
            placeholder: "약 봉투에 적힌 성분명 입력",
            successKeywords: ["무수카페인"],
            emptyMessage: "검색어를 입력하면 약 성분 설명이 표시됩니다.",
            successMessage: "[검색 결과] 무수카페인은 일부 종합감기약에 들어갈 수 있는 고농축 카페인 성분입니다. 커피 등 고카페인 음료와 겹치면 두근거림, 손 떨림, 불안감이 심해질 수 있습니다.",
            failMessage: "'{query}'에 대한 결과만으로는 판단하기 어렵습니다. 약 봉투에 적힌 낯선 성분명을 다시 확인해보세요.",
            transition: {
              title: "약 성분 정보를 확인했습니다",
              text: "검색 결과를 메모해두고, 오늘 민재가 언제 무엇을 샀는지도 이어서 확인합니다.",
              delay: 900
            }
          },
          memoHints: [
            "검색 결과에서 새로 알게 된 내용을 자기 말로 적어보세요.",
            "이 정보가 다른 단서와 어떻게 이어질 수 있을지 질문 형태로 적어보세요."
          ]
        },
        {
          id: "case01_scene04",
          title: "반복된 구매 기록",
          stepLabel: "장면 7",
          phase: "단서 확인",
          location: "단서 보기",
          background: "./assets/images/backgrounds/case01/bg_case01_scene02_desk_imagegen.webp",
          backgroundAlt: "편의점 영수증과 구매 기록을 확인하는 장면",
          actors: {
            left: { visible: false },
            right: { visible: false }
          },
          speaker: null,
          tags: ["영수증", "구매 기록", "반복 섭취"],
          dialogue: {
            name: "단서",
            text: "영수증에는 오전 쉬는 시간과 점심시간, 서로 다른 시간대의 구매 기록이 남아 있다. 카페인 음료를 한 번만 산 것이 아닌 것 같다."
          },
          casePanel: {
            symptoms: ["손 떨림", "창백한 얼굴", "집중 저하"],
            facts: ["카페인 음료를 한 번만 산 것이 아님", "반복 섭취 정황이 있음"],
            unknowns: ["왜 반복해서 마셨을까?", "약 복용과 겹친 영향이 있었을까?"],
            progress: {
              cluesFound: 7,
              cluesTotal: 10,
              statementsFound: 4,
              statementsTotal: 4,
              hypothesesFound: 2,
              hypothesesTotal: 3
            }
          },
          choices: [
            { id: "to_scene05", text: "메신저 대화를 확인한다", nextSceneId: "case01_scene05" },
            { id: "to_scene05_time", text: "구매 시간과 대화 내용을 비교한다", nextSceneId: "case01_scene05" },
            { id: "to_scene05_memo", text: "영수증 내용을 메모하고 다음 단서를 본다", nextSceneId: "case01_scene05" }
          ],
          actions: [
            { id: "openInventory", text: "단서 확인" },
            { id: "openMemo", text: "메모에 정리" }
          ],
          cluesShown: ["receipt"],
          cluesUnlock: ["receipt"],
          memoHints: [
            "반복해서 구매한 정황이 왜 중요한지 적어보세요.",
            "약 복용, 수면 부족, 카페인 섭취가 따로가 아니라 함께 작용했을 가능성을 생각해보세요."
          ]
        },
        {
          id: "case01_scene05",
          title: "버티려 했던 이유",
          stepLabel: "장면 8",
          phase: "디지털 단서",
          location: "단서 보기",
          background: "./assets/images/backgrounds/case01/bg_case01_scene02_desk_imagegen.webp",
          backgroundAlt: "영수증과 메신저 캡처를 확인하는 장면",
          actors: {
            left: { visible: false },
            right: { visible: false }
          },
          speaker: null,
          tags: ["메신저", "시험 압박", "버티기"],
          dialogue: {
            name: "단서",
            text: "대화 내용에는 ‘안 마시면 못 버틸 듯’이라는 말이 보인다. 민재는 피로와 압박감 속에서 버티려고 했던 것 같다."
          },
          casePanel: {
            symptoms: ["손 떨림", "창백한 얼굴", "집중 저하"],
            facts: ["민재는 피로와 압박감을 느끼고 있었다", "버티기 위해 음료를 찾았을 가능성이 있다"],
            unknowns: ["약 복용, 수면 부족, 카페인이 함께 영향을 주었는지"],
            progress: {
              cluesFound: 8,
              cluesTotal: 10,
              statementsFound: 4,
              statementsTotal: 4,
              hypothesesFound: 3,
              hypothesesTotal: 3
            }
          },
          choices: [
            { id: "to_scene06", text: "보건실에서 상태를 확인한다", nextSceneId: "case01_scene06" },
            { id: "to_scene06_symptom", text: "증상과 단서를 함께 들고 보건실로 간다", nextSceneId: "case01_scene06" },
            { id: "to_scene06_help", text: "혼자 결론내리지 않고 도움을 요청한다", nextSceneId: "case01_scene06" }
          ],
          actions: [
            { id: "openInventory", text: "단서 확인" },
            { id: "openMemo", text: "메모에 정리" }
          ],
          cluesShown: ["chat_capture"],
          cluesUnlock: ["chat_capture"],
          memoHints: [
            "민재가 왜 음료를 반복해서 찾았는지 감정과 상황을 함께 적어보세요.",
            "단서들이 어떻게 연결되는지 정리해보세요."
          ]
        },
        {
          id: "case01_scene06",
          title: "보건실에서 정리",
          stepLabel: "장면 9",
          phase: "대응",
          location: "보건실",
          background: "./assets/images/backgrounds/case01/bg_case01_scene04_healthroom_imagegen.webp",
          backgroundAlt: "보건실에서 보건샘과 상담하는 장면",
          actors: {
            left: { characterId: "minjae_pale", visible: true },
            right: { characterId: "nurse_default", visible: true }
          },
          speaker: "right",
          tags: ["보건실", "안전한 대응", "확인"],
          dialogue: {
            name: "보건샘",
            text: "잠 부족, 약 복용, 반복된 카페인 섭취가 겹치면 몸이 더 예민하게 반응할 수 있어. 한 가지만 보고 판단하면 놓치는 게 생길 수 있지."
          },
          casePanel: {
            symptoms: ["손 떨림", "창백한 얼굴", "집중 저하"],
            facts: ["수면 부족", "감기약 복용", "고카페인 커피", "감기약 속 무수카페인 가능성", "카페인 반복 섭취 정황"],
            unknowns: ["민재의 심박수와 호흡 곤란이 어떤 몸의 반응인지", "다음에 같은 상황이 생기면 어떻게 대응할지"],
            progress: {
              cluesFound: 9,
              cluesTotal: 10,
              statementsFound: 4,
              statementsTotal: 4,
              hypothesesFound: 3,
              hypothesesTotal: 3
            }
          },
          choices: [
            { id: "to_scene07", text: "민재의 상태 변화를 다시 묻는다", nextSceneId: "case01_scene07" },
            { id: "to_scene07_news", text: "보건소식지 내용을 메모하고 정리한다", nextSceneId: "case01_scene07" },
            { id: "to_scene07_response", text: "다음에 할 안전한 행동을 정리한다", nextSceneId: "case01_scene07" }
          ],
          actions: [
            { id: "openInventory", text: "단서 확인" },
            { id: "openWorksheet", text: "활동지 연결" }
          ],
          cluesShown: ["health_newsletter"],
          cluesUnlock: [],
          interaction: {
            type: "healthNewsletter",
            progressLabel: "보건소식",
            requiredItems: ["health_newsletter"],
            minRequiredCount: 1,
            clueId: "health_newsletter",
            successMessage: "보건소식지에서 자율신경계 힌트를 확인했습니다.",
            memo: "보건소식지 분석: 민재의 빈맥·호흡 곤란 증상은 교감신경(부스터)이 과흥분된 상태와 일치한다.",
            newsletter: {
              badge: "보건소식",
              objectLabel: "보건소식지 열기",
              objectTitle: "우리 몸의 비밀, 자율신경계",
              title: "이번 달의 보건소식: 우리 몸의 비밀, 자율신경계!",
              lead: "우리 몸에는 의지와 상관없이 스스로 조절되는 자율신경계가 있습니다. 여기에는 몸을 깨우는 부스터와 몸을 쉬게 하는 브레이크가 함께 작동합니다.",
              sympatheticTitle: "교감신경: 엑셀 / 부스터",
              sympatheticText: "위급한 상황이나 스트레스를 받을 때 몸을 흥분시키는 신경입니다. 활성화되면 심장이 쿵쾅거리고, 숨이 가빠지며, 동공이 커지고 땀이 납니다. 카페인을 과다 섭취하면 엑셀 페달이 끝까지 밟힌 것처럼 몸이 과하게 흥분할 수 있습니다.",
              parasympatheticTitle: "부교감신경: 브레이크 / 휴식",
              parasympatheticText: "에너지를 아끼고 몸을 편안하게 안정시키는 신경입니다. 심장을 안정시키고, 소화를 돕고, 깊은 수면으로 회복하게 합니다.",
              monologue: "민재의 지금 증상인 심박수 증가와 호흡 곤란은 교감신경이라는 엑셀 페달이 과하게 밟힌 상태와 닮아 있어. 무언가가 민재의 몸을 극도로 흥분시킨 게 틀림없어!"
            }
          },
          memoHints: [
            "보건실 벽의 보건소식지를 읽고 민재 증상과 연결해보세요.",
            "한 가지 원인만이 아니라 여러 요인이 함께 작용했는지 생각해보세요."
          ]
        },
        {
          id: "case01_scene07",
          title: "민재의 말",
          stepLabel: "장면 10",
          phase: "정리",
          location: "보건실",
          background: "./assets/images/backgrounds/case01/bg_case01_scene04_healthroom_imagegen.webp",
          backgroundAlt: "보건실에서 사건을 정리하는 장면",
          actors: {
            left: { characterId: "minjae_relieved", visible: true },
            right: { characterId: "nurse_default", visible: true }
          },
          speaker: "left",
          tags: ["회고", "학습 정리", "성장 피드백"],
          dialogue: {
            name: "민재",
            text: "한 번쯤은 괜찮을 줄 알았어요. 졸리면 안 될 것 같아서... 그냥 버티려고 했어요."
          },
          casePanel: {
            symptoms: ["손 떨림", "창백한 얼굴", "집중 저하"],
            facts: ["복합 원인 가능성을 확인함", "도움 요청이 안전한 대응임을 확인함"],
            unknowns: ["활동지에 근거를 어떻게 설명할지"],
            progress: {
              cluesFound: 10,
              cluesTotal: 10,
              statementsFound: 4,
              statementsTotal: 4,
              hypothesesFound: 3,
              hypothesesTotal: 3
            }
          },
          choices: [
            { id: "to_result", text: "내 추리를 정리하고 결과를 본다", nextSceneId: "case01_result" },
            { id: "to_result_memo", text: "근거를 한 번 더 확인하고 결과를 본다", nextSceneId: "case01_result" },
            { id: "to_result_safety", text: "안전한 대응까지 적고 결과를 본다", nextSceneId: "case01_result" }
          ],
          actions: [
            { id: "openMemo", text: "메모에 정리" },
            { id: "openWorksheet", text: "활동지 연결" }
          ],
          cluesShown: [],
          cluesUnlock: [],
          memoHints: [
            "지금까지 확인한 사실을 바탕으로 실제 원인을 정리해보세요.",
            "다음에 더 안전한 행동은 무엇일지 적어보세요."
          ]
        }
      ],

      result: {
        id: "case01_result",
        title: "떨리는 손의 이유",
        subtitle: "시험기간 카페인 사건",
        stepLabel: "결과",
        phase: "학습 정리",
        location: "보건실",
        background: "./assets/images/backgrounds/case01/bg_case01_scene04_healthroom_imagegen.webp",
        backgroundAlt: "사건 해결 후 보건실 장면",
        actors: {
          left: { characterId: "minjae_relieved", visible: true },
          right: { characterId: "nurse_default", visible: true }
        },
        speaker: "right",
        tags: ["복합 원인", "안전한 대응", "활동지"],
        dialogue: {
          name: "보건샘",
          text: "피곤함을 버티기 위한 작은 선택도, 약 복용과 수면 부족이 겹치면 더 위험해질 수 있어요. 몸의 이상 신호를 가볍게 넘기지 말고, 혼자 판단하지 않는 것이 중요해요."
        },
        summary: "민재의 상태는 수면 부족, 감기약 복용, 고카페인 커피, 감기약 속 무수카페인 가능성, 반복된 카페인 음료 섭취가 겹쳐 나타난 결과였다. 플레이어는 친구들의 서로 다른 기억, 물건 단서, 검색 결과를 비교하며 약과 음료를 함께 확인해야 한다는 점을 알게 되었다.",
        keyClues: ["지우의 증언", "하은의 증언", "감기약 봉투", "커피 컵 카페인 표시", "무수카페인 검색 결과", "보건소식지: 자율신경계", "편의점 영수증", "메신저 캡처"],
        learningPoints: [
          "카페인 섭취는 한 번보다 반복과 누적이 중요하다.",
          "약 복용, 수면 부족, 카페인 섭취는 따로 보지 말고 함께 봐야 한다.",
          "교감신경이 과하게 활성화되면 심박수 증가, 빠른 호흡, 손 떨림 같은 반응이 나타날 수 있다.",
          "친구들의 말이나 인터넷 정보는 바로 결론내리지 말고 다른 근거와 비교해 확인해야 한다.",
          "몸의 이상 신호를 괜찮다고 넘기면 안 된다."
        ],
        safetyTips: [
          "복용 중인 약이 있다면 음료 섭취도 함께 고려한다.",
          "졸릴 때 무조건 버티기보다 휴식과 확인을 우선한다.",
          "헷갈리면 혼자 판단하지 말고 도움을 요청한다."
        ],
        casePanel: {
          symptoms: ["손 떨림", "창백한 얼굴", "집중 저하"],
          facts: ["수면 부족", "감기약 복용", "물 대신 음료수로 복용한 습관", "고카페인 커피", "무수카페인 검색 결과", "카페인 반복 섭취", "보건실 확인"],
          unknowns: ["다음 상황에서 스스로 어떤 질문을 던질지"],
          progress: {
            cluesFound: 10,
            cluesTotal: 10,
            statementsFound: 4,
            statementsTotal: 4,
            hypothesesFound: 3,
            hypothesesTotal: 3
          }
        },
        choices: [
          { id: "restart", text: "처음 장면으로 돌아가기", nextSceneId: "case01_scene01" }
        ],
        actions: [
          { id: "openInventory", text: "확인한 단서 다시 보기" },
          { id: "openWorksheet", text: "활동지 연결" }
        ],
        cluesShown: ["witness_jiwoo", "witness_haeun", "medicine_bag", "note", "energy_drink", "coffee_label", "anhydrous_caffeine", "health_newsletter", "receipt", "chat_capture"],
        cluesUnlock: ["witness_jiwoo", "witness_haeun", "medicine_bag", "note", "energy_drink", "coffee_label", "anhydrous_caffeine", "health_newsletter", "receipt", "chat_capture"]
      }
    },
    {
      id: "case02",
      order: 2,
      title: "한 잔인데 왜 다르지?",
      subtitle: "카페인 종류와 용량 비교 사건",
      thumbnail: "./assets/images/thumbnails/episode02_thumbnail_imagegen.png",
      keywords: ["음료 종류", "용량", "카페인 표시"],
      difficulty: "보통",
      estimatedMinutes: 15,
      recommendedStats: ["관찰력", "분석력", "건강문해력"],
      status: "planned",
      worksheet: true,
      introQuestion: "같은 한 잔처럼 보여도 카페인량이 달라지는 이유는 무엇일까?",
      scenes: []
    },
    {
      id: "case03",
      order: 3,
      title: "먹었나, 안 먹었나",
      subtitle: "중복 복용과 복용 시간 혼동 사건",
      thumbnail: "./assets/images/thumbnails/episode03_thumbnail_imagegen.png",
      keywords: ["중복 복용", "복용 기록", "시간 확인"],
      difficulty: "보통",
      estimatedMinutes: 15,
      recommendedStats: ["판단력", "신중함", "대응력"],
      status: "planned",
      worksheet: true,
      introQuestion: "약을 이미 먹었는지 헷갈릴 때 안전하게 확인하는 방법은 무엇일까?",
      scenes: []
    },
    {
      id: "case04",
      order: 4,
      title: "같은 약 같아 보여도",
      subtitle: "가족 약과 타인 처방약 복용 사건",
      thumbnail: "./assets/images/thumbnails/episode04_thumbnail_imagegen.png",
      keywords: ["처방약", "가족 약", "공유 금지"],
      difficulty: "보통",
      estimatedMinutes: 15,
      recommendedStats: ["판단력", "대응력", "건강문해력"],
      status: "planned",
      worksheet: true,
      introQuestion: "증상이 비슷해 보여도 다른 사람의 약을 먹으면 안 되는 이유는 무엇일까?",
      scenes: []
    },
    {
      id: "case05",
      order: 5,
      title: "SNS 속 공부 꿀팁의 함정",
      subtitle: "온라인 건강 정보 판별 사건",
      thumbnail: "./assets/images/thumbnails/episode05_thumbnail_imagegen.png",
      keywords: ["SNS", "건강 정보", "디지털 리터러시"],
      difficulty: "보통",
      estimatedMinutes: 15,
      recommendedStats: ["분석력", "신중함", "건강문해력"],
      status: "planned",
      worksheet: true,
      introQuestion: "온라인 건강 정보를 믿기 전에 어떤 근거를 확인해야 할까?",
      scenes: []
    },
    {
      id: "case06",
      order: 6,
      title: "괜찮을 줄 알았어",
      subtitle: "약 복용 후 주의사항 미확인 사건",
      thumbnail: "./assets/images/thumbnails/episode06_thumbnail_imagegen.png",
      keywords: ["주의사항", "졸음", "설명서 읽기"],
      difficulty: "보통",
      estimatedMinutes: 15,
      recommendedStats: ["관찰력", "대응력", "건강문해력"],
      status: "planned",
      worksheet: true,
      introQuestion: "약 복용 후 주의사항을 확인하지 않으면 어떤 문제가 생길 수 있을까?",
      scenes: []
    }
  ]
};
