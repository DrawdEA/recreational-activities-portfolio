import Image from "next/image";

import RulesModal from "./rules-modal";
import VibeController from "./vibe-controller";

const heroClips = [
  {
    label: "Base Run",
    meta: "Duo",
    tone: "sun",
    src: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=900&q=80",
  },
  {
    label: "Jail Rescue",
    meta: "Agawan",
    tone: "mint",
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80",
  },
  {
    label: "Dice Roll",
    meta: "Relay",
    tone: "ember",
    src: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=900&q=80",
  },
  {
    label: "Cone Weave",
    meta: "Dash",
    tone: "sky",
    src: "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?auto=format&fit=crop&w=900&q=80",
  },
  {
    label: "Shot Clock",
    meta: "Score",
    tone: "lime",
    src: "https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=900&q=80",
  },
  {
    label: "Final Match",
    meta: "Bracket",
    tone: "violet",
    src: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=900&q=80",
  },
] as const;

const galleryMedia = [
  {
    label: "Basketball Hoop",
    meta: "Video",
    type: "video",
    src: "https://cdn.pixabay.com/video/2024/04/18/208442_large.mp4",
    poster:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1400&q=80",
  },
  {
    label: "Relay Run",
    meta: "Video",
    type: "video",
    src: "https://cdn.pixabay.com/video/2024/04/18/208442_large.mp4",
    poster:
      "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Team Huddle",
    meta: "Photo",
    type: "image",
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Court Setup",
    meta: "Photo",
    type: "image",
    src: "https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Game Action",
    meta: "Photo",
    type: "image",
    src: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Final Shot",
    meta: "Photo",
    type: "image",
    src: "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?auto=format&fit=crop&w=1200&q=80",
  },
] as const;

const gameVideos = {
  warm: {
    eyebrow: "Gameplay Loop",
    title: "Pair movement, base runs, and rescue moments.",
    src: "https://cdn.pixabay.com/video/2024/04/18/208442_large.mp4",
    poster:
      "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1400&q=80",
  },
  electric: {
    eyebrow: "Gameplay Loop",
    title: "Cone weave, dice chance, and shooting rhythm.",
    src: "https://cdn.pixabay.com/video/2024/04/18/208442_large.mp4",
    poster:
      "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?auto=format&fit=crop&w=1400&q=80",
  },
} as const;

const filipinoMechanics = [
  {
    title: "Konsepto",
    visual: "duoConcept",
    body: "Ang Duo Agawang Base ay binagong bersyon ng tradisyonal na Agawang Base. Sa larong ito, kailangang gumalaw ang mga manlalaro bilang magkapareha upang mas bigyang-diin ang komunikasyon, diskarte, at pagtutulungan.",
  },
  {
    title: "Pagbuo ng Koponan",
    visual: "pairHold",
    body: "Hahatiin ang mga manlalaro sa dalawang koponan. Bawat koponan ay bubuo ng mga pares o duo. Kailangang magkahawak-kamay ang magkapareha habang naglalaro at manatiling malapit sa isa't isa.",
  },
  {
    title: "Home Base",
    visual: "homeBase",
    body: "May sariling base ang bawat koponan sa magkabilang dulo ng court. Para sa aktibidad na ito, gagamitin ang cushion sa base ng basketball hoop bilang home base.",
  },
  {
    title: "Layunin ng Laro",
    visual: "baseTouch",
    body: "Kailangang mahawakan ng isang pares ang base ng kalaban nang hindi natatag. Ang koponang mas maraming beses na makakahawak sa base ng kalaban sa loob ng itinakdang oras ang mananalo.",
  },
  {
    title: "Tagging at Jail",
    visual: "jailRescue",
    body: "Kapag natag ang isa sa magkapareha, pareho silang ituturing na nahuli. Ang nahuling pares ay pupunta sa jail area malapit sa base ng kalaban at kailangang manatiling nakadikit ang isang kamay sa base.",
  },
  {
    title: "Binagong Mekaniks",
    visual: "brokenPair",
    body: "Kung sinadyang bumitaw ang magkapareha, kailangan nilang bumalik sa base bago magpatuloy. Maaaring sagipin ng malayang pares ang nakakulong na kakampi sa pamamagitan ng ligtas na pagtag sa kanila.",
  },
  {
    title: "Format ng Laro",
    visual: "bestOfNine",
    body: "Lalaruin ito sa 5 hanggang 9 rounds. Best of 9 ang format, unang koponang manalo ng 5 rounds ang magiging champion. Bawat round ay tatagal ng 7 minuto o hanggang may makahawak sa base ng kalaban.",
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
  "Hahatiin ang mga manlalaro sa dalawang koponan.",
  "Bawat koponan ay bubuo ng mga pares o duo.",
  "Kailangang magkahawak-kamay ang magkapareha habang naglalaro.",
  "Kailangang gumalaw ang mga manlalaro bilang pares at manatiling malapit sa isa't isa.",
  "Kung sinadyang bumitaw ang isang pares, ituturing silang broken pair at kailangang bumalik sa sariling base bago magpatuloy.",
  "Kung aksidenteng nabitawan dahil sa bump o banggaan, bibigyan muna ng warning bago patawan ng consequence.",
  "May sariling home base ang bawat koponan sa magkabilang dulo ng court.",
  "Ang cushion sa base ng basketball hoop ang gagamiting home base.",
  "Layunin ng bawat pares na mahawakan ang base ng kalaban nang hindi natatag.",
  "Ang koponang mas maraming beses na makahawak sa base ng kalaban sa loob ng itinakdang oras ang mananalo.",
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
  "Best of 9 ang format; unang koponang manalo ng 5 rounds ang magiging champion.",
  "Bawat round ay tatagal ng 7 minuto o hanggang may pares na makahawak sa base ng kalaban.",
  "May 5 minutong halftime break para sa pahinga, hydration, at strategy.",
  "Nire-reset ang score kada round.",
  "Ang paghawak sa base ng kalaban ay katumbas ng 1 point.",
  "Ang koponang may pinakamaraming round victories ang tatanghaling Champion Team.",
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

const timeline = [
  {
    time: "TBA",
    phase: "Prep",
    title: "Court setup",
    body: "Bases, cone lanes, shooting areas, camera spots, and safety boundaries are prepared.",
  },
  {
    time: "TBA",
    phase: "Brief",
    title: "Duo Agawang Base briefing",
    body: "Pairs are formed, home bases are assigned, and the tagging/jail mechanics are explained.",
  },
  {
    time: "TBA",
    phase: "Game 01",
    title: "Duo Agawang Base gameplay",
    body: "Teams play timed rounds while duos coordinate attacks, rescues, and defensive movement.",
  },
  {
    time: "TBA",
    phase: "Reset",
    title: "Dice Dash setup",
    body: "Four teams are arranged into a bracket, cones are aligned, and the dice-and-shot rule is explained.",
  },
  {
    time: "TBA",
    phase: "Game 02",
    title: "Dice Dash matches",
    body: "Players roll, weave through cones, shoot from chosen spots, and build their team score.",
  },
] as const;

const reflections = [
  {
    name: "Edward Joshua Diesta",
    role: "Reflection 01",
    photoLabel: "Edward photo",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80",
    quote:
      "Recreation becomes more meaningful when we understand the people we play with and the culture behind the activity.",
    body: "This course helped me see recreational activities as more than physical tasks or requirements. In Duo Agawang Base, I saw how a simple Filipino game can become more challenging and meaningful when players are asked to move as partners, communicate constantly, and protect each other during play. In Dice Dash Basketball Relay, I appreciated how chance, movement, and scoring can make basketball less intimidating for people with different skill levels. The experience reminded me that games are not only about winning, but also about creativity, respect, safety, and making space for everyone to participate.",
  },
  {
    name: "Groupmate Name",
    role: "Reflection 02",
    photoLabel: "Groupmate photo",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
    quote:
      "The activity showed how teamwork becomes stronger when everyone understands the goal and feels included in the game.",
    body: "Working on these modified games made me appreciate the effort behind designing an activity that is both fun and understandable. Duo Agawang Base required us to think about pair movement, tagging fairness, rescue mechanics, and how to keep the traditional spirit of Agawang Base while making it feel new. Dice Dash Basketball Relay required clearer organization because the dice roll, cone relay, shooting area, and bracket format all had to work together smoothly. I realized that physical education connects to everyday life because it teaches patience, communication, adjustment, and responsibility.",
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
}: Readonly<{ clip: (typeof heroClips)[number]; index: number }>) {
  return (
    <div className={`media-card media-${clip.tone}`}>
      <Image className="media-card-asset" src={clip.src} alt="" fill sizes="18rem" />
      <div className="scanline" />
      <div>
        <span>{clip.meta}</span>
        <strong>{clip.label}</strong>
      </div>
      <small>0{index + 1}</small>
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
      {item.type === "video" ? (
        <video
          className="media-card-asset"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={item.poster}
        >
          <source src={item.src} type="video/mp4" />
        </video>
      ) : (
        <Image className="media-card-asset" src={item.src} alt="" fill sizes="18rem" />
      )}
      <div className="scanline" />
      <div>
        <span>{item.meta}</span>
        <strong>{item.label}</strong>
      </div>
      <small>0{index + 1}</small>
    </div>
  );
}

function MediaColumn({
  offset = false,
}: Readonly<{ offset?: boolean }>) {
  return (
    <div className={`media-column ${offset ? "reverse" : ""}`}>
      <div className="media-track">
        {[...heroClips, ...heroClips].map((clip, index) => (
          <MediaCard clip={clip} index={index % heroClips.length} key={`${clip.label}-${index}`} />
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
  const video = gameVideos[variant];

  return (
    <div className={`sticky-video-panel ${variant}`}>
      <video autoPlay loop muted playsInline poster={video.poster} preload="metadata">
        <source src={video.src} type="video/mp4" />
      </video>
      <div>
        <span>{video.eyebrow}</span>
        <strong>{video.title}</strong>
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
            <p className="hero-lede">
              A scroll-based showcase for Duo Agawang Base and Dice Dash
              Basketball Relay, documented through mechanics, movement, media,
              full rule lists, and individual reflections.
            </p>
            <div className="hero-meta">
              <span>Edward Joshua Diesta</span>
              <span>Groupmate Name</span>
              <span>May 2026 / Time TBA</span>
            </div>
          </Reveal>
        </div>
        <div className="hero-media" aria-label="Moving media wall placeholders">
          <MediaColumn />
          <MediaColumn offset />
          <MediaColumn />
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
          <h2>Drop in the actual clock times after the final run.</h2>
        </Reveal>
        <div className="timeline">
          {timeline.map((item, index) => (
            <Reveal className="timeline-row" key={item.title}>
              <div className="timeline-time">
                <time>{item.time}</time>
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="timeline-card">
                <div className="timeline-card-copy">
                  <span>{item.phase}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
                <div className="timeline-visual" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="gallery-section" data-vibe="media">
        <Reveal className="section-heading">
          <p className="eyebrow">Photos and Videos</p>
          <h2>A loud middle section for evidence, movement, and favorite moments.</h2>
        </Reveal>
        <div className="feature-video">
          <video
            className="feature-video-media"
            muted
            loop
            playsInline
            controls
            poster={galleryMedia[0].poster}
          >
            <source src={galleryMedia[0].src} type="video/mp4" />
          </video>
          <div className="play-icon">Play</div>
          <div>
            <span>Featured highlight</span>
            <h3>Replace this with your best gameplay video.</h3>
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
              <Image className="reflection-photo-img" src={reflection.photo} alt="" fill sizes="(max-width: 980px) 50vw, 34vw" />
              <span>{reflection.photoLabel}</span>
            </div>
          </Reveal>
          <Reveal className="reflection-panel">
            <span>{reflection.role}</span>
            <h2>{reflection.name}</h2>
            <p>{reflection.body}</p>
            <blockquote>{reflection.quote}</blockquote>
          </Reveal>
        </section>
      ))}

      <section className="final-section" data-vibe="neutral">
        <footer className="thank-you-footer">
          <Reveal>
            <p className="eyebrow">Thank You, Ma&apos;am Allely</p>
            <h2>Goodbye, PE.</h2>
            <p>
              As our last PE subject comes to a close, this portfolio becomes
              our small farewell to the games, movement, teamwork, and memories
              we carried through the course.
            </p>
            <p className="footer-note">Thank you for guiding us, Ma&apos;am Allely.</p>
          </Reveal>
        </footer>
      </section>
    </main>
  );
}
