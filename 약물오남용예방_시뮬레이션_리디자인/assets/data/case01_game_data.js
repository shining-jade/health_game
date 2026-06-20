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
              cluesTotal: 5,
              statementsFound: 1,
              statementsTotal: 4,
              hypothesesFound: 0,
              hypothesesTotal: 3
            }
          },
          choices: [
            { id: "to_scene02", text: "민재에게 직접 상태를 묻는다", nextSceneId: "case01_scene02" },
            { id: "to_scene03", text: "주변 물건을 먼저 살펴본다", nextSceneId: "case01_scene03" },
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
              cluesTotal: 5,
              statementsFound: 2,
              statementsTotal: 4,
              hypothesesFound: 1,
              hypothesesTotal: 3
            }
          },
          choices: [
            { id: "to_scene03", text: "책상과 가방 주변을 조사한다", nextSceneId: "case01_scene03" }
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
          id: "case01_scene03",
          type: "investigation",
          title: "책상과 가방 조사",
          stepLabel: "장면 3",
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
            unknowns: ["약을 언제 먹었는지", "음료를 몇 번 마셨는지"],
            progress: {
              cluesFound: 3,
              cluesTotal: 5,
              statementsFound: 2,
              statementsTotal: 4,
              hypothesesFound: 1,
              hypothesesTotal: 3
            }
          },
          choices: [
            {
              id: "to_scene04",
              text: "다음 분석으로 이동한다",
              lockedText: "핵심 단서를 더 찾아보세요",
              nextSceneId: "case01_scene04",
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
            progressLabel: "핵심 단서",
            requiredClues: ["medicine_bag", "note", "energy_drink"],
            minRequiredCount: 2,
            nextSceneId: "case01_scene04",
            transition: {
              title: "핵심 단서를 확보했습니다",
              text: "약 복용, 카페인 섭취, 생활 정황을 바탕으로 상황을 정리합니다.",
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
                foundText: "물병이다. 사건과 직접 관련된 단서는 없어 보인다."
              }
            ]
          },
          memoHints: [
            "핫스팟을 눌러 확인한 사실과 아직 추측인 내용을 나눠 적어보세요.",
            "핵심 단서 2개 이상을 찾으면 다음 분석으로 이동할 수 있습니다."
          ]
        },
        {
          id: "case01_scene04",
          title: "반복된 구매 기록",
          stepLabel: "장면 4",
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
              cluesFound: 3,
              cluesTotal: 5,
              statementsFound: 2,
              statementsTotal: 4,
              hypothesesFound: 2,
              hypothesesTotal: 3
            }
          },
          choices: [
            { id: "to_scene05", text: "메신저 대화를 확인한다", nextSceneId: "case01_scene05" }
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
          stepLabel: "장면 5",
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
              cluesFound: 5,
              cluesTotal: 5,
              statementsFound: 3,
              statementsTotal: 4,
              hypothesesFound: 3,
              hypothesesTotal: 3
            }
          },
          choices: [
            { id: "to_scene06", text: "보건실에서 원인을 정리한다", nextSceneId: "case01_scene06" }
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
          stepLabel: "장면 6",
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
            facts: ["수면 부족", "감기약 복용", "카페인 반복 섭취 정황"],
            unknowns: ["다음에 같은 상황이 생기면 어떻게 대응할지"],
            progress: {
              cluesFound: 5,
              cluesTotal: 5,
              statementsFound: 4,
              statementsTotal: 4,
              hypothesesFound: 3,
              hypothesesTotal: 3
            }
          },
          choices: [
            { id: "to_scene07", text: "안전한 대응을 정리한다", nextSceneId: "case01_scene07" }
          ],
          actions: [
            { id: "openInventory", text: "단서 확인" },
            { id: "openWorksheet", text: "활동지 연결" }
          ],
          cluesShown: [],
          cluesUnlock: [],
          memoHints: [
            "단서들을 바탕으로 실제 원인을 조합해보세요.",
            "한 가지 원인만이 아니라 여러 요인이 함께 작용했는지 생각해보세요."
          ]
        },
        {
          id: "case01_scene07",
          title: "민재의 말",
          stepLabel: "장면 7",
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
              cluesFound: 5,
              cluesTotal: 5,
              statementsFound: 4,
              statementsTotal: 4,
              hypothesesFound: 3,
              hypothesesTotal: 3
            }
          },
          choices: [
            { id: "to_result", text: "사건 해결 결과 보기", nextSceneId: "case01_result" }
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
        summary: "민재의 상태는 수면 부족, 감기약 복용, 반복된 카페인 음료 섭취가 겹쳐 나타난 결과였다. 민재는 피곤함을 버티려다 여러 선택이 겹쳐 몸 상태가 더 나빠질 수 있다는 점을 알게 되었다.",
        keyClues: ["감기약 봉투", "메모지", "카페인 음료 캔", "편의점 영수증", "메신저 캡처"],
        learningPoints: [
          "카페인 섭취는 한 번보다 반복과 누적이 중요하다.",
          "약 복용, 수면 부족, 카페인 섭취는 따로 보지 말고 함께 봐야 한다.",
          "몸의 이상 신호를 괜찮다고 넘기면 안 된다."
        ],
        safetyTips: [
          "복용 중인 약이 있다면 음료 섭취도 함께 고려한다.",
          "졸릴 때 무조건 버티기보다 휴식과 확인을 우선한다.",
          "헷갈리면 혼자 판단하지 말고 도움을 요청한다."
        ],
        casePanel: {
          symptoms: ["손 떨림", "창백한 얼굴", "집중 저하"],
          facts: ["수면 부족", "감기약 복용", "카페인 반복 섭취", "보건실 확인"],
          unknowns: ["다음 상황에서 스스로 어떤 질문을 던질지"],
          progress: {
            cluesFound: 5,
            cluesTotal: 5,
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
          { id: "openInventory", text: "핵심 단서 다시 보기" },
          { id: "openWorksheet", text: "활동지 연결" }
        ],
        cluesShown: ["medicine_bag", "note", "receipt", "chat_capture", "energy_drink"],
        cluesUnlock: ["medicine_bag", "note", "receipt", "chat_capture", "energy_drink"]
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
