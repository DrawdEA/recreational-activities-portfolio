import Image from "next/image";

import RulesModal from "./rules-modal";
import VibeController from "./vibe-controller";

const heroColumns = [
  [
    {
      label: "Pair Run",
      meta: "Laro",
      tone: "sun",
      src: "/lahi/Unknown-33.jpg",
    },
    {
      label: "Base Guard",
      meta: "Laro",
      tone: "mint",
      src: "/lahi/Unknown-29.jpg",
    },
    {
      label: "Tag Chase",
      meta: "Laro",
      tone: "ember",
      src: "/lahi/Unknown-23.jpg",
    },
    {
      label: "Base Play",
      meta: "Laro",
      tone: "sky",
      src: "/lahi/Unknown-28.jpg",
    },
    {
      label: "Team Hold",
      meta: "Laro",
      tone: "lime",
      src: "/lahi/Unknown-35.jpg",
    },
    {
      label: "Game Talk",
      meta: "Laro",
      tone: "violet",
      src: "/lahi/Unknown-36.jpg",
    },
  ],
  [
    {
      label: "Cone Dash",
      meta: "Relay",
      tone: "ember",
      src: "/photos/1a378f41-d2dc-4207-ad24-7ce53a46c749.jpeg",
    },
    {
      label: "Cone Weave",
      meta: "Dash",
      tone: "sky",
      src: "/photos/1333a697-6145-4294-8807-9fd910c22928.jpeg",
    },
    {
      label: "Shot Form",
      meta: "Score",
      tone: "lime",
      src: "/photos/1ccfe712-8f98-4bd0-8fcc-9b0e572a0dce.jpeg",
    },
    {
      label: "Shot Release",
      meta: "Score",
      tone: "sun",
      src: "/photos/24efcbd3-b3ae-4c39-b973-dbea2210c60c.jpeg",
    },
    {
      label: "Lane Setup",
      meta: "Relay",
      tone: "mint",
      src: "/photos/57014263-2cde-445f-95c9-0815a1bf2281.jpeg",
    },
    {
      label: "Shooting Pair",
      meta: "Score",
      tone: "violet",
      src: "/photos/6016f5ef-41e0-4f98-8808-e9e0f9618c2b.jpeg",
    },
  ],
  [
    {
      label: "Jail Base",
      meta: "Agawan",
      tone: "mint",
      src: "/lahi/Unknown-27.jpg",
    },
    {
      label: "Pair Defense",
      meta: "Laro",
      tone: "sun",
      src: "/lahi/Unknown-19.jpg",
    },
    {
      label: "Team Line",
      meta: "Laro",
      tone: "sky",
      src: "/lahi/Unknown-24.jpg",
    },
    {
      label: "Briefing Lane",
      meta: "Relay",
      tone: "ember",
      src: "/photos/5c786953-aabe-40d1-886d-a4e71b117936.jpeg",
    },
    {
      label: "Final Match",
      meta: "Bracket",
      tone: "lime",
      src: "/photos/e9493111-38ae-4634-8854-df39e3b81c07.jpeg",
    },
    {
      label: "Scoreboard",
      meta: "Bracket",
      tone: "violet",
      src: "/photos/e163402e-1e6e-4287-ae86-70ffe82b0c7a.jpeg",
    },
  ],
] as const;

const heroColumnStartIndexes = heroColumns.map((_column, columnIndex) =>
  heroColumns.slice(0, columnIndex).reduce((total, column) => total + column.length, 0),
);

const galleryMedia = [
  {
    label: "Pair Run",
    meta: "Laro ng Lahi",
    src: "/lahi/Unknown-33.jpg",
  },
  {
    label: "Base Guard",
    meta: "Laro ng Lahi",
    src: "/lahi/Unknown-29.jpg",
  },
  {
    label: "Tag Chase",
    meta: "Laro ng Lahi",
    src: "/lahi/Unknown-23.jpg",
  },
  {
    label: "Base Play",
    meta: "Laro ng Lahi",
    src: "/lahi/Unknown-28.jpg",
  },
  {
    label: "Team Hold",
    meta: "Laro ng Lahi",
    src: "/lahi/Unknown-35.jpg",
  },
  {
    label: "Cone Lane",
    meta: "Dice Dash",
    src: "/photos/1333a697-6145-4294-8807-9fd910c22928.jpeg",
  },
  {
    label: "Relay Run",
    meta: "Dice Dash",
    src: "/photos/1a378f41-d2dc-4207-ad24-7ce53a46c749.jpeg",
  },
  {
    label: "Jump Shot",
    meta: "Dice Dash",
    src: "/photos/1ccfe712-8f98-4bd0-8fcc-9b0e572a0dce.jpeg",
  },
  {
    label: "Shot Release",
    meta: "Dice Dash",
    src: "/photos/24efcbd3-b3ae-4c39-b973-dbea2210c60c.jpeg",
  },
  {
    label: "Court Setup",
    meta: "Dice Dash",
    src: "/photos/57014263-2cde-445f-95c9-0815a1bf2281.jpeg",
  },
  {
    label: "Shooting Pair",
    meta: "Dice Dash",
    src: "/photos/6016f5ef-41e0-4f98-8808-e9e0f9618c2b.jpeg",
  },
  {
    label: "Scoreboard",
    meta: "Bracket",
    src: "/photos/e163402e-1e6e-4287-ae86-70ffe82b0c7a.jpeg",
  },
] as const;

const gameMedia = {
  warm: {
    eyebrow: "Tala ng Laro",
    title: "Pares, base, tag, at mabilis na diskarte.",
    src: "/lahi/Unknown-33.jpg",
  },
  electric: {
    eyebrow: "Photo Reel",
    title: "Cone weave, basketball shots, and scoring rhythm.",
    src: "/photos/1a378f41-d2dc-4207-ad24-7ce53a46c749.jpeg",
  },
} as const;

const filipinoMechanics = [
  {
    title: "Konsepto",
    visual: "duoConcept",
    body: "Ang Duo Agawang Base ay binagong bersyon ng tradisyonal na Agawang Base. Sa larong ito, kailangang gumalaw ang mga manlalaro bilang magkapareha upang mas bigyang-diin ang komunikasyon, diskarte, at pagtutulungan.",
  },
  {
    title: "Pagbuo ng Grupo",
    visual: "pairHold",
    body: "Hahatiin ang mga manlalaro sa dalawang grupo. Bawat grupo ay bubuo ng mga pares o duo. Kailangang magkahawak-kamay ang magkapareha habang naglalaro at manatiling malapit sa isa't isa.",
  },
  {
    title: "Home Base",
    visual: "homeBase",
    body: "May sariling base ang bawat grupo sa magkabilang dulo ng court. Para sa aktibidad na ito, gagamitin ang cushion sa base ng basketball hoop bilang home base.",
  },
  {
    title: "Layunin ng Laro",
    visual: "baseTouch",
    body: "Kailangang mahawakan ng isang pares ang base ng kalaban nang hindi natatag. Ang grupong mas maraming beses na makakahawak sa base ng kalaban sa loob ng itinakdang oras ang mananalo.",
  },
  {
    title: "Tagging at Jail",
    visual: "jailRescue",
    body: "Kapag natag ang isa sa magkapareha, pareho silang ituturing na nahuli. Ang nahuling pares ay pupunta sa jail area malapit sa base ng kalaban at kailangang manatiling nakadikit ang isang kamay sa base.",
  },
  {
    title: "Mga Ipinagbabawal",
    visual: "brokenPair",
    body: "Kung sinadyang bumitaw ang magkapareha, kailangan nilang bumalik sa base bago magpatuloy. Maaaring sagipin ng malayang pares ang nakakulong na kakampi sa pamamagitan ng ligtas na pagtag sa kanila.",
  },
  {
    title: "Format ng Laro",
    visual: "bestOfNine",
    body: "Lalaruin ito sa 5 hanggang 9 rounds. Best of 9 ang format, unang grupong manalo ng 5 rounds ang magiging champion. Bawat round ay tatagal ng 7 minuto o hanggang may makahawak sa base ng kalaban.",
  },
  {
    title: "Kaligtasan",
    visual: "safetyBase",
    body: "Iwasan ang malakas na pagtag, panatilihin ang sportsmanship, manatili sa loob ng court, magsuot ng angkop na athletic attire, at sundin ang hydration breaks.",
  },
];

const foreignMechanics = [
  {
    title: "Concept",
    visual: "diceConcept",
    body: "Dice Dash Basketball Relay is a modified recreational basketball relay game that combines cone movement, dice-based shooting chances, and friendly competition.",
  },
  {
    title: "Team Formation",
    visual: "fourTeams",
    body: "Players are divided into four teams. Only two teams compete per match using a bracket tournament format, and each player joins the relay one at a time.",
  },
  {
    title: "Setup",
    visual: "coneSetup",
    body: "Each team has five cones placed evenly in front of their starting line. Players must weave through all five cones before moving to the shooting area.",
  },
  {
    title: "Relay Flow",
    visual: "relayFlow",
    body: "Before running, the player rolls a dice. The number rolled determines how many shots the player may take after completing the cone relay.",
  },
  {
    title: "Scoring",
    visual: "scoringZones",
    body: "A made shot inside the 3-point line is worth 1 point. A made shot outside the 3-point line is worth 2 points. Total points at the end of the round determine the winner.",
  },
  {
    title: "Tournament Format",
    visual: "tournament",
    body: "The game uses a 4-team bracket. Each round lasts 8 minutes, with a 2-minute break between rounds for rest, hydration, and team strategy.",
  },
  {
    title: "Tie Breaker",
    visual: "suddenDeath",
    body: "If the score is tied, a sudden-death shootout will be conducted with one representative from each team.",
  },
  {
    title: "Safety Guidelines",
    visual: "safetyRelay",
    body: "Players must avoid collisions, pushing, blocking, and aggressive contact. Knocked cones must be fixed before continuing, and hydration breaks must be followed.",
  },
];

const filipinoDetailedRules = [
  "Hahatiin ang mga manlalaro sa dalawang grupo.",
  "Bawat grupo ay bubuo ng mga pares o duo.",
  "Kailangang magkahawak-kamay ang magkapareha habang naglalaro.",
  "Kailangang gumalaw ang mga manlalaro bilang pares at manatiling malapit sa isa't isa.",
  "Kung sinadyang bumitaw ang isang pares, ituturing silang broken pair at kailangang bumalik sa sariling base bago magpatuloy.",
  "Kung aksidenteng nabitawan dahil sa bump o banggaan, bibigyan muna ng warning bago patawan ng consequence.",
  "May sariling home base ang bawat grupo sa magkabilang dulo ng court.",
  "Ang cushion sa base ng basketball hoop ang gagamiting home base.",
  "Layunin ng bawat pares na mahawakan ang base ng kalaban nang hindi natatag.",
  "Ang grupong mas maraming beses na makahawak sa base ng kalaban sa loob ng itinakdang oras ang mananalo.",
  "Kapag nahawakan ng isang pares ang base ng kalaban, hindi na sila maaaring itag habang pabalik sa sariling base.",
  "Kailangang bumalik muna ang pares sa sariling base bago sila muling makapuntos sa base ng kalaban.",
  "Maaari lamang magtag ng kalaban sa loob ng playing field o basketball court.",
  "Kapag natag ang isa sa magkapareha, pareho silang ituturing na nahuli.",
  "Ang nahuling pares ay pupunta sa jail area malapit sa base ng kalaban.",
  "Kailangang manatiling nakadikit ang kahit isang kamay ng nahuling pares sa base ng kalaban habang nasa jail.",
  "Maaaring sagipin ng malayang pares ang nakakulong na kakampi sa pamamagitan ng ligtas na pagtag sa kanila.",
  "Kailangang manatili ang lahat ng manlalaro sa loob ng court boundaries.",
  "Kung odd ang bilang ng manlalaro, isang manlalaro mula sa nakaraang round ang muling lalaro upang manatiling pares ang lahat.",
  "Lalaruin ang laro sa 5 hanggang 9 rounds.",
  "Best of 9 ang format; unang grupong manalo ng 5 rounds ang magiging champion.",
  "Bawat round ay tatagal ng 7 minuto o hanggang may pares na makahawak sa base ng kalaban.",
  "May 5 minutong halftime break para sa pahinga, hydration, at strategy.",
  "Nire-reset ang score kada round.",
  "Ang paghawak sa base ng kalaban ay katumbas ng 1 point.",
  "Ang grupong may pinakamaraming round victories ang tatanghaling Champion Group.",
  "Bawal ang labis na lakas sa pagtag.",
  "Kailangang panatilihin ang sportsmanship sa buong laro.",
  "Kailangang magsuot ng angkop na athletic attire at footwear.",
  "Kailangang sundin ang hydration breaks at safety reminders.",
] as const;

const foreignDetailedRules = [
  "Dice Dash Basketball Relay is a modified recreational basketball relay game.",
  "The game combines relay movement, cone weaving, dice-based shot attempts, and basketball scoring.",
  "Players are divided into four teams.",
  "Only two teams compete per match in a bracket tournament format.",
  "Team members line up behind the starting line.",
  "Only one player from each team runs the relay at a time.",
  "Each team has five cones placed evenly in a straight pattern in front of the starting line.",
  "The player rolls a dice at the starting line before beginning the relay.",
  "The number rolled determines how many shots the player may take after the relay course.",
  "The player runs through the cone course and weaves around all five cones.",
  "After completing the cone course, the player may choose any shooting position.",
  "Dribbling is optional.",
  "The player must shoot from a stationary position.",
  "After using the allotted shots, the player retrieves the ball.",
  "The player returns to the line and passes the ball to the next teammate.",
  "The team with the highest total score within the allotted round time wins the match.",
  "The winning team advances in the tournament bracket.",
  "Players must stay within the boundaries.",
  "If a player skips or knocks over a cone, the player must fix the cone before continuing.",
  "Players may not interfere with the opposing team.",
  "The tournament uses a 4-team bracket with winners advancing to the final match.",
  "Each round lasts 8 minutes.",
  "There is a 2-minute break between rounds.",
  "Scores reset every round.",
  "The winner of the final match becomes the Champion Team.",
  "A made shot inside the 3-point line is worth 1 point.",
  "A made shot outside the 3-point line is worth 2 points.",
  "The total points at the end of the round determine the winner.",
  "If the score is tied, a sudden-death shootout is conducted.",
  "The sudden-death shootout uses one representative from each team.",
  "Players must avoid collisions.",
  "Pushing, blocking, and aggressive contact are not allowed.",
  "Cones must be secure before play begins.",
  "Players must wear proper athletic attire and footwear.",
  "Hydration breaks must be followed.",
] as const;

const timelineDays = [
  {
    day: "Day 1",
    title: "Laro ng Lahi",
    items: [
      ["2:30-2:40", "Warmup", "Light movement and preparation before playing."],
      ["2:40-2:45", "Instructions", "Rules and reminders for Duo Agawang Base."],
      ["2:45-2:55", "Game 1", "First round of Duo Agawang Base."],
      ["2:55-3:00", "Rest", "Short pause before the next game."],
      ["3:00-3:10", "Game 2", "Second round of Duo Agawang Base."],
      ["3:10-3:15", "Water break", "Quick hydration break."],
      ["3:15-3:20", "Game 3", "Final round, rest, and cool down."],
    ],
  },
  {
    day: "Day 2",
    title: "Dice Dash Basketball Relay",
    items: [
      ["2:30-2:40", "Warmup", "Light movement and shooting preparation."],
      ["2:40-2:45", "Instructions", "Rules and reminders for the relay format."],
      ["2:45-2:53", "Championship Game 1", "First championship match."],
      ["2:53-2:55", "Rest", "Two-minute pause before the next match."],
      ["2:55-3:03", "Championship Game 2", "Second championship match."],
      ["3:03-3:05", "Rest and Water Break", "Two-minute hydration and reset."],
      ["3:05-3:13", "Winners", "Final winners' match."],
      ["3:13-3:20", "Rest and Cool Down", "Cool down and pack up."],
    ],
  },
] as const;

const reflections = [
  {
    name: "Edward Diesta",
    role: "Reflection 01",
    photo: "/profiles/edward.jpg",
    photoLabel: "Edward Diesta",
    body: "Taking this recreational activities course was honestly one of the best PE experiences I have had. As a Computer Science student, most of my subjects can feel very computer-like, screen-heavy, and mentally tiring, so this class became a real rest time for me. It did not feel like a subject that was only about completing requirements; it felt like a space where we could move, laugh, release stress, enjoy being with our classmates, and bring out our competitive spirit in a fun way. Through the activities we prepared and played, I learned how simple games can become meaningful when they are designed with teamwork, creativity, fairness, and inclusion in mind. Since this is our last PE subject, it feels like a fitting way to close that part of college life: with movement, memories, and games that brought people together.",
  },
  {
    name: "Rafael Rafanan",
    role: "Reflection 02",
    photo: "/profiles/raf.png",
    photoLabel: "Rafael Rafanan",
    body: "This class was the 'rest' I didn't know I needed. It has completely changed my perspective on what 'recreation' actually means. Coming from a heavy workload of coding and theory, I expected this to be just another requirement, but I ended up learning a lot about the intentionality behind play. I enjoyed seeing how teamwork and creativity can transform a simple set of rules into a meaningful social experience. It was refreshing to use my brain for game design and strategy rather than just debugging. Ending my PE journey with this class was a great reminder that staying active and staying connected to others is just as important as academic success.",
  },
];

function Reveal({
  children,
  className = "",
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

function MediaCard({
  clip,
  index,
}: Readonly<{ clip: (typeof heroColumns)[number][number]; index: number }>) {
  return (
    <div className={`media-card media-${clip.tone}`}>
      <Image className="media-card-asset" src={clip.src} alt="" fill sizes="18rem" />
      <div className="scanline" />
      <div>
        <span>{clip.meta}</span>
        <strong>{clip.label}</strong>
      </div>
      <small>{String(index + 1).padStart(2, "0")}</small>
    </div>
  );
}

function GalleryCard({
  item,
  index,
}: Readonly<{ item: (typeof galleryMedia)[number]; index: number }>) {
  const tone = ["sun", "mint", "ember", "sky", "lime", "violet"][index % 6];

  return (
    <div className={`media-card gallery-media-card media-${tone}`}>
      <Image className="media-card-asset" src={item.src} alt="" fill sizes="18rem" />
      <div className="scanline" />
      <div>
        <span>{item.meta}</span>
        <strong>{item.label}</strong>
      </div>
      <small>{String(index + 1).padStart(2, "0")}</small>
    </div>
  );
}

function MediaColumn({
  clips,
  offset = false,
  startIndex,
}: Readonly<{
  clips: (typeof heroColumns)[number];
  offset?: boolean;
  startIndex: number;
}>) {
  return (
    <div className={`media-column ${offset ? "reverse" : ""}`}>
      <div className="media-track">
        {[...clips, ...clips].map((clip, index) => (
          <MediaCard
            clip={clip}
            index={startIndex + (index % clips.length)}
            key={`${clip.src}-${index}`}
          />
        ))}
      </div>
    </div>
  );
}

function RuleGrid({
  items,
  variant,
}: Readonly<{
  items: typeof filipinoMechanics;
  variant: "warm" | "electric";
}>) {
  return (
    <div className={`rule-grid ${variant}`}>
      {items.map((item, index) => (
        <Reveal className="rule-card" key={item.title}>
          <RuleVisual type={item.visual} />
          <span className="rule-number">{String(index + 1).padStart(2, "0")}</span>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </Reveal>
      ))}
    </div>
  );
}

function RuleVisual({ type }: Readonly<{ type: string }>) {
  const cones = Array.from({ length: 5 }, (_, index) => index);
  const rounds = Array.from({ length: 9 }, (_, index) => index);

  return (
    <div className={`rule-visual rule-visual-${type}`} aria-hidden="true">
      {type === "duoConcept" && (
        <>
          <div className="mini-base left">Base A</div>
          <div className="mini-base right">Base B</div>
          <div className="duo duo-left">
            <i />
            <i />
          </div>
          <div className="duo-link" />
          <div className="motion-path" />
        </>
      )}

      {type === "pairHold" && (
        <>
          <div className="team-pair pair-a">
            <i />
            <i />
            <b />
          </div>
          <div className="team-pair pair-b">
            <i />
            <i />
            <b />
          </div>
          <em>duos move together</em>
        </>
      )}

      {type === "homeBase" && (
        <>
          <div className="hoop-base left"><b /></div>
          <div className="hoop-base right"><b /></div>
          <div className="court-center" />
          <em>basketball hoop cushions as bases</em>
        </>
      )}

      {type === "baseTouch" && (
        <>
          <div className="mini-base left">Home</div>
          <div className="mini-base right">Touch</div>
          <div className="dash-route" />
          <div className="duo duo-run">
            <i />
            <i />
          </div>
        </>
      )}

      {type === "jailRescue" && (
        <>
          <div className="jail-box">Jail</div>
          <div className="prisoner-pair">
            <i />
            <i />
          </div>
          <div className="rescuer" />
          <div className="rescue-line" />
          <em>tag to rescue</em>
        </>
      )}

      {type === "brokenPair" && (
        <>
          <div className="broken-duo">
            <i />
            <i />
          </div>
          <div className="break-mark">!</div>
          <div className="return-arrow" />
          <em>return to base if intentionally broken</em>
        </>
      )}

      {type === "bestOfNine" && (
        <>
          <div className="round-pips">
            {rounds.map((round) => (
              <i className={round < 5 ? "active" : ""} key={round} />
            ))}
          </div>
          <strong className="timer-chip">7:00</strong>
          <em>first to 5 wins</em>
        </>
      )}

      {type === "safetyBase" && (
        <>
          <div className="boundary-box" />
          <div className="no-contact">No hard tags</div>
          <div className="hydration">Hydrate</div>
        </>
      )}

      {type === "diceConcept" && (
        <>
          <div className="dice-face">
            <i />
            <i />
            <i />
          </div>
          <div className="basketball" />
          <div className="relay-arrow" />
          <em>chance decides shot attempts</em>
        </>
      )}

      {type === "fourTeams" && (
        <>
          <div className="team-stack">
            <i>A</i>
            <i>B</i>
            <i>C</i>
            <i>D</i>
          </div>
          <div className="bracket-lines" />
          <div className="final-slot">Final</div>
        </>
      )}

      {type === "coneSetup" && (
        <>
          <div className="start-line">Start</div>
          <div className="cone-lane">
            {cones.map((cone) => (
              <i key={cone} />
            ))}
          </div>
          <div className="shoot-area">Shoot</div>
        </>
      )}

      {type === "relayFlow" && (
        <>
          <div className="mini-step dice-step">Roll</div>
          <div className="mini-step cone-step">Weave</div>
          <div className="mini-step hoop-step">Shoot</div>
          <div className="flow-arrow one" />
          <div className="flow-arrow two" />
        </>
      )}

      {type === "scoringZones" && (
        <>
          <div className="hoop-ring" />
          <div className="arc inner">1 pt</div>
          <div className="arc outer">2 pts</div>
        </>
      )}

      {type === "tournament" && (
        <>
          <div className="bracket team-one">Team 1</div>
          <div className="bracket team-two">Team 2</div>
          <div className="bracket team-three">Team 3</div>
          <div className="bracket team-four">Team 4</div>
          <div className="bracket final">Champion</div>
        </>
      )}

      {type === "suddenDeath" && (
        <>
          <div className="player-shot left" />
          <div className="player-shot right" />
          <div className="single-hoop" />
          <strong className="sudden-chip">1v1</strong>
        </>
      )}

      {type === "safetyRelay" && (
        <>
          <div className="safe-lane" />
          <div className="fallen-cone" />
          <div className="fix-chip">fix cone</div>
          <div className="no-block">no blocking</div>
        </>
      )}
    </div>
  );
}

function MechanicsVisual({
  variant,
}: Readonly<{ variant: "warm" | "electric" }>) {
  const details =
    variant === "warm"
      ? {
          zones: ["Home", "Field", "Enemy Base"],
          stats: [
            ["Format", "Best of 9"],
            ["Round", "7 min"],
          ],
          flow: ["Pair", "Attack", "Tag", "Rescue"],
        }
      : {
          zones: ["Roll", "Cones", "Shoot"],
          stats: [
            ["Teams", "4"],
            ["Round", "8 min"],
          ],
          flow: ["Roll", "Weave", "Shoot", "Bracket"],
        };

  return (
    <div className={`mechanics-visual ${variant}`} aria-hidden="true">
      <div className="court-map">
        <div className="zone zone-a">{details.zones[0]}</div>
        <div className="zone zone-b">{details.zones[1]}</div>
        <div className="zone zone-c">{details.zones[2]}</div>
        <span className="player player-one" />
        <span className="player player-two" />
        <span className="player player-three" />
      </div>
      <div className="mechanics-dashboard">
        {details.stats.map(([label, value]) => (
          <div key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>
      <div className="flow-strip">
        {details.flow.map((step) => (
          <span key={step}>{step}</span>
        ))}
      </div>
    </div>
  );
}

function StickyVideoPanel({
  variant,
}: Readonly<{ variant: "warm" | "electric" }>) {
  const media = gameMedia[variant];

  return (
    <div className={`sticky-video-panel ${variant}`}>
      <Image className="sticky-video-image" src={media.src} alt="" fill sizes="(max-width: 980px) 100vw, 34vw" />
      <div>
        <span>{media.eyebrow}</span>
        <strong>{media.title}</strong>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <VibeController />
      <section className="hero-section" data-vibe="neutral">
        <div className="hero-copy">
          <Reveal>
            <p className="eyebrow">PEPC 19.03-PFT-N Portfolio</p>
            <h1>Game Day Portfolio</h1>
            <div className="hero-meta">
              <span>Edward Diesta</span>
              <span>Rafael Rafanan</span>
              <span>2nd Sem / May 2026</span>
            </div>
          </Reveal>
        </div>
        <div className="hero-media" aria-label="Moving media wall">
          {heroColumns.map((clips, index) => (
            <MediaColumn
              clips={clips}
              offset={index === 1}
              startIndex={heroColumnStartIndexes[index]}
              key={`hero-column-${index}`}
            />
          ))}
        </div>
      </section>

      <section className="game-section game-warm" data-vibe="warm">
        <div className="sticky-intro">
          <Reveal>
            <p className="eyebrow">Laro ng Lahi</p>
            <h2>Duo Agawang Base</h2>
            <p>
              Isang pares-based na bersyon ng Agawang Base kung saan kailangang
              magkasabay gumalaw, umiwas, magligtas, at dumiskarte ang magkapareha.
            </p>
          </Reveal>
          <Reveal>
            <StickyVideoPanel variant="warm" />
          </Reveal>
        </div>
        <div className="game-detail-column">
          <RuleGrid items={filipinoMechanics} variant="warm" />
          <Reveal>
            <MechanicsVisual variant="warm" />
          </Reveal>
          <Reveal>
            <RulesModal
              eyebrow="Laro ng Lahi"
              rules={filipinoDetailedRules}
              tone="warm"
              title="Duo Agawang Base Rules"
            />
          </Reveal>
        </div>
      </section>

      <section className="game-section game-electric game-section-reverse" data-vibe="electric">
        <div className="game-detail-column">
          <RuleGrid items={foreignMechanics} variant="electric" />
          <Reveal>
            <MechanicsVisual variant="electric" />
          </Reveal>
          <Reveal>
            <RulesModal
              eyebrow="Foreign Game"
              rules={foreignDetailedRules}
              tone="electric"
              title="Dice Dash Basketball Relay Rules"
            />
          </Reveal>
        </div>
        <div className="sticky-intro">
          <Reveal>
            <p className="eyebrow">Foreign Game</p>
            <h2>Dice Dash Basketball Relay</h2>
            <p>
              A bracket-style basketball relay where a dice roll decides the
              number of shots after each cone-weaving dash.
            </p>
          </Reveal>
          <Reveal>
            <StickyVideoPanel variant="electric" />
          </Reveal>
        </div>
      </section>

      <section className="timeline-section" data-vibe="electric">
        <Reveal className="section-heading">
          <p className="eyebrow">Game Day Timeline</p>
          <h2>Timeline</h2>
          <p>Both activities were held during our 2:30-3:20 PM class time.</p>
        </Reveal>
        <div className="timeline-minimal">
          {timelineDays.map((day) => (
            <Reveal className="timeline-day-card" key={day.day}>
              <div className="timeline-day-heading">
                <div>
                  <span>{day.day}</span>
                  <h3>{day.title}</h3>
                </div>
                <time>2:30-3:20 PM</time>
              </div>
              <ol className="timeline-list">
                {day.items.map(([duration, title, body]) => (
                  <li key={`${day.day}-${title}`}>
                    <time>{duration}</time>
                    <div>
                      <strong>{title}</strong>
                      <p>{body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="gallery-section" data-vibe="media">
        <Reveal className="section-heading">
          <p className="eyebrow">Photos</p>
          <h2>Moments from the court.</h2>
        </Reveal>
        <div className="feature-video">
          <Image className="feature-video-media" src="/photos/1ccfe712-8f98-4bd0-8fcc-9b0e572a0dce.jpeg" alt="" fill sizes="100vw" />
          <div>
            <h3>Pair runs, base plays, shots, and team moments.</h3>
          </div>
        </div>
        <div className="gallery-strip">
          {galleryMedia.map((item, index) => (
            <GalleryCard item={item} index={index} key={item.label} />
          ))}
        </div>
      </section>

      {reflections.map((reflection, index) => (
        <section
          className={`reflection-section reflection-profile ${
            index % 2 === 1 ? "reflection-profile-reverse" : ""
          }`}
          data-vibe="reflection"
          key={reflection.name}
        >
          <Reveal className="reflection-photo-card">
            <div className="reflection-photo">
              <Image
                className="reflection-photo-img"
                src={reflection.photo}
                alt={reflection.photoLabel}
                fill
                sizes="(max-width: 980px) 100vw, 34vw"
              />
              <span>{reflection.photoLabel}</span>
            </div>
          </Reveal>
          <Reveal className="reflection-panel">
            <span>{reflection.role}</span>
            <h2>{reflection.name}</h2>
            <p>{reflection.body}</p>
          </Reveal>
        </section>
      ))}

      <section className="final-section" data-vibe="neutral">
        <footer className="thank-you-footer">
          <Reveal>
            <p className="eyebrow">Thank you, Ma&apos;am Allely!</p>
            <h2>Goodbye, PE.</h2>
            <p>Alexa, play Lifetime (Reimagined) by Ben&amp;Ben.</p>
            <p className="eyebrow">Is there a lifetime waiting for us?~</p>
          </Reveal>
        </footer>
      </section>
    </main>
  );
}
