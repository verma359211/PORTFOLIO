"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Grid2X2, Pause, Play, Rocket, Sun } from "lucide-react";
import styles from "./themePreview.module.css";

type PreviewTheme = "light" | "space" | "blueprint";
const themes = [
  { value: "light", label: "Light", Icon: Sun },
  { value: "space", label: "Space", Icon: Rocket },
  { value: "blueprint", label: "Blueprint", Icon: Grid2X2 },
] as const;

/** Fresh visits open in Blueprint; the other designs remain available to preview. */
export default function ThemePreview({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  const [theme, setTheme] = useState<PreviewTheme>("blueprint");
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") delete root.dataset.portfolioTheme;
    else root.dataset.portfolioTheme = theme;
    if (theme === "blueprint") root.dataset.blueprintFinish = "light-white-clear";
    else delete root.dataset.blueprintFinish;
    return () => {
      delete root.dataset.portfolioTheme;
      delete root.dataset.blueprintFinish;
    };
  }, [theme]);

  return (
    <>
      <aside className={styles.switcher} aria-label="Theme preview controls">
        <span className={styles.label}>THEME PREVIEW</span>
        <div
          className={styles.options}
          role="group"
          aria-label="Portfolio theme"
        >
          {themes.map(({ value, label, Icon }) => (
            <button
              key={value}
              type="button"
              aria-pressed={theme === value}
              onClick={() => setTheme(value)}
            >
              <Icon size={15} aria-hidden="true" />
              <span>{label}</span>
            </button>
          ))}
        </div>
        {theme !== "light" && (
          <button
            type="button"
            className={styles.motionButton}
            aria-label={
              paused
                ? "Play background animation"
                : "Pause background animation"
            }
            aria-pressed={paused}
            title={
              paused
                ? "Play background animation"
                : "Pause background animation"
            }
            onClick={() => setPaused((value) => !value)}
          >
            {paused ? (
              <Play size={14} aria-hidden="true" />
            ) : (
              <Pause size={14} aria-hidden="true" />
            )}
          </button>
        )}
      </aside>
      <main className={className} data-portfolio-page>
        {theme !== "light" && <ThemeScenery theme={theme} paused={paused} />}
        {children}
      </main>
    </>
  );
}

function ThemeScenery({
  theme,
  paused,
}: {
  theme: Exclude<PreviewTheme, "light">;
  paused: boolean;
}) {
  return (
    <div
      className={styles.scenery}
      data-theme-backdrop
      data-scenery-theme={theme}
      data-paused={paused}
      aria-hidden="true"
    >
      {theme === "space" ? (
        <>
          <div className={styles.starfield} />
          <div className={`${styles.object} ${styles.rocket}`}>
            <CartoonRocket />
          </div>
          <div className={`${styles.object} ${styles.planet}`}>
            <RingPlanet />
          </div>
          <div className={`${styles.object} ${styles.moon}`}>
            <Moon />
          </div>
          <div className={`${styles.object} ${styles.satellite}`}>
            <Satellite />
          </div>
          <div className={`${styles.object} ${styles.lowerPlanet}`}>
            <RingPlanet />
          </div>
          <div className={`${styles.object} ${styles.lowerRocket}`}>
            <CartoonRocket />
          </div>
          <span className={styles.shootingStar} />
          <span className={styles.sparkOne}>✦</span>
          <span className={styles.sparkTwo}>✧</span>
          <span className={styles.sparkThree}>✦</span>
        </>
      ) : (
        <>
          <div className={styles.draftingGrid} />
          <div className={`${styles.object} ${styles.blueprintOrbit}`}>
            <DraftingOrbit />
          </div>
          <div className={`${styles.object} ${styles.blueprintCube}`}>
            <DraftingCube />
          </div>
          <div className={`${styles.object} ${styles.blueprintPlan}`}>
            <CircuitPlan />
          </div>
          <div className={`${styles.object} ${styles.blueprintLower}`}>
            <DraftingOrbit />
          </div>
          <div className={`${styles.object} ${styles.blueprintBottom}`}>
            <DraftingCube />
          </div>
          <div className={`${styles.object} ${styles.blueprintSetSquare}`}>
            <DraftingTriangle />
          </div>
          <div className={`${styles.object} ${styles.blueprintGears}`}>
            <GearAssembly />
          </div>
          <div className={`${styles.object} ${styles.blueprintDimensions}`}>
            <DimensionStudy />
          </div>
          <div className={`${styles.object} ${styles.blueprintStack}`}>
            <ExplodedAssembly />
          </div>
          <div className={`${styles.object} ${styles.blueprintSignal}`}>
            <SignalStudy />
          </div>
          <div className={`${styles.object} ${styles.blueprintNetwork}`}>
            <SystemNodes />
          </div>
          <div className={`${styles.object} ${styles.blueprintMidGears}`}>
            <GearAssembly />
          </div>
          <div className={`${styles.object} ${styles.blueprintMidCube}`}>
            <DraftingCube />
          </div>
          <div className={`${styles.object} ${styles.blueprintLowerTriangle}`}>
            <DraftingTriangle />
          </div>
          <div className={`${styles.object} ${styles.blueprintLowerSignal}`}>
            <SignalStudy />
          </div>
          <div className={`${styles.object} ${styles.blueprintLowerStack}`}>
            <ExplodedAssembly />
          </div>
          <div className={`${styles.object} ${styles.blueprintFooterPlan}`}>
            <CircuitPlan />
          </div>
          <span className={`${styles.annotation} ${styles.annotationTop}`}>
            FIG. 01 / IDEAS → SYSTEMS
          </span>
          <span className={`${styles.annotation} ${styles.annotationMiddle}`}>
            DETAIL A—A / BUILT TO SCALE
          </span>
          <span className={styles.edgeRuler} />
          <span className={`${styles.edgeRuler} ${styles.leftRuler}`} />
          <div className={styles.registrationMarks}>
            {[8, 20, 35, 50, 65, 80, 94].map((top) => (
              <span key={top} style={{ top: `${top}%` }}><i /><i /></span>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function CartoonRocket() {
  return (
    <svg viewBox="0 0 180 220" fill="none" focusable="false">
      <g stroke="#211d40" strokeWidth="4" strokeLinejoin="round">
        <path
          className={styles.flame}
          d="M70 156Q49 190 88 214Q129 184 105 155"
          fill="#ffb860"
        />
        <path
          d="M78 158Q68 181 88 195Q107 176 98 158"
          fill="#fff0ad"
          stroke="none"
        />
        <path
          d="M61 99Q26 116 35 157L65 144M112 99Q146 116 138 157L110 144"
          fill="#b2a0ff"
        />
        <path
          d="M86 12Q38 52 60 151Q86 166 112 151Q135 53 86 12Z"
          fill="#fff6e8"
        />
        <path
          d="M86 12Q68 28 59 52Q86 64 113 52Q104 29 86 12Z"
          fill="#fa8b8d"
        />
        <path
          d="M61 137Q87 147 112 137L109 154Q85 165 64 154Z"
          fill="#b2a0ff"
        />
        <circle cx="86" cy="91" r="22" fill="#b2a0ff" />
        <circle cx="86" cy="91" r="15" fill="#73ddd7" />
        <path
          d="M79 84L88 80"
          stroke="white"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path d="M86 127V160" stroke="#595074" strokeLinecap="round" />
        <path
          d="M109 72Q116 100 108 123"
          stroke="#ded6ec"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

function RingPlanet() {
  return (
    <svg viewBox="0 0 250 170" fill="none" focusable="false">
      <ellipse
        cx="125"
        cy="89"
        rx="115"
        ry="28"
        transform="rotate(-24 125 89)"
        stroke="#24203e"
        strokeWidth="16"
      />
      <ellipse
        cx="125"
        cy="89"
        rx="115"
        ry="28"
        transform="rotate(-24 125 89)"
        stroke="#d7c6ff"
        strokeWidth="9"
      />
      <circle
        cx="125"
        cy="80"
        r="58"
        fill="#b2a0ed"
        stroke="#24203e"
        strokeWidth="4"
      />
      <path
        d="M83 43Q117 68 170 63M72 78Q110 106 172 94M89 120Q122 132 147 121"
        stroke="#9580d6"
        strokeWidth="12"
        strokeLinecap="round"
      />
      <path
        d="M19 127Q46 151 150 106Q232 69 229 48"
        stroke="#24203e"
        strokeWidth="16"
        strokeLinecap="round"
      />
      <path
        d="M19 127Q46 151 150 106Q232 69 229 48"
        stroke="#e8d7ac"
        strokeWidth="9"
        strokeLinecap="round"
      />
      <path
        d="M100 38L110 34"
        stroke="#eadfff"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <circle cx="206" cy="137" r="4" fill="#f7d28c" />
    </svg>
  );
}

function Moon() {
  return (
    <svg viewBox="0 0 120 120" fill="none" focusable="false">
      <circle
        cx="60"
        cy="60"
        r="52"
        fill="#91d9cf"
        stroke="#213441"
        strokeWidth="4"
      />
      <path d="M77 13A52 52 0 0 1 25 99A52 52 0 0 0 77 13" fill="#64b5b1" />
      <g fill="#6ebbb6" stroke="#5ba3a2" strokeWidth="2">
        <circle cx="41" cy="37" r="12" />
        <circle cx="77" cy="68" r="16" />
        <circle cx="38" cy="81" r="7" />
      </g>
      <path
        d="M30 25L37 21"
        stroke="#c4fff0"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Satellite() {
  return (
    <svg
      viewBox="0 0 220 160"
      fill="none"
      stroke="#28223f"
      strokeWidth="3"
      strokeLinejoin="round"
      focusable="false"
    >
      <path d="M69 79H151" stroke="#b4a1f2" strokeWidth="9" />
      <path d="M15 52H69V108H15ZM151 52H205V108H151Z" fill="#8b85d9" />
      <path
        d="M33 52V108M51 52V108M15 80H69M169 52V108M187 52V108M151 80H205"
        stroke="#d3c5ff"
        strokeWidth="2"
      />
      <rect x="84" y="52" width="52" height="61" rx="12" fill="#fff0d7" />
      <path d="M85 37Q110 65 137 37Z" fill="#faad89" />
      <path d="M111 48V24M107 112V131" stroke="#d4c4ef" />
      <circle cx="111" cy="22" r="4" fill="#9de7d4" />
      <circle cx="110" cy="78" r="10" fill="#9de7d4" />
    </svg>
  );
}

function DraftingOrbit() {
  return (
    <svg
      viewBox="0 0 320 320"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      focusable="false"
    >
      <circle cx="160" cy="160" r="112" />
      <circle cx="160" cy="160" r="96" strokeDasharray="3 7" />
      <circle cx="160" cy="160" r="66" />
      <circle cx="160" cy="160" r="9" />
      <path d="M160 14V306M14 160H306" strokeDasharray="12 4 2 4" />
      <path d="M48 48V24H272V48M48 32L57 27M272 32L263 37M282 48H300V272H282M294 48L304 58M294 272L304 262" />
      <g className={styles.orbitRotor}>
        <path d="M160 48A112 112 0 0 1 272 160" strokeWidth="3" />
        <circle cx="272" cy="160" r="5" fill="currentColor" />
        <path d="M94 160L160 94L226 160L160 226Z" />
      </g>
      <circle className={styles.orbitCounterRotor} cx="160" cy="160" r="80" strokeDasharray="35 12 2 12" />
      <g fill="currentColor" stroke="none" fontSize="9" fontFamily="monospace">
        <text x="137" y="22">
          Ø 224
        </text>
        <text x="174" y="151">
          C/L
        </text>
        <text x="66" y="302">
          ROTATION / 360°
        </text>
      </g>
    </svg>
  );
}

function DraftingCube() {
  return (
    <svg
      viewBox="0 0 240 280"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      focusable="false"
    >
      <path d="M120 35L205 84V183L120 232L35 183V84Z M35 84L120 134L205 84M120 134V232" />
      <path d="M120 35V134M35 183L120 134L205 183" strokeDasharray="5 5" />
      <path
        d="M77 59L162 109V207M163 60L78 109V207M35 133L120 183L205 133"
        opacity=".5"
      />
      <path d="M26 80L12 73V191L26 184M7 79L17 69M7 195L17 185M39 207L32 222L111 268M43 220L35 230" />
      <circle cx="120" cy="134" r="5" />
      <circle className={styles.nodePulse} cx="120" cy="134" r="12" />
      <path d="M109 134H131M120 123V145" />
      <g fill="currentColor" stroke="none" fontSize="9" fontFamily="monospace">
        <text x="68" y="21">
          ISOMETRIC / 01
        </text>
        <text x="139" y="251">
          X : Y : Z
        </text>
      </g>
    </svg>
  );
}

function CircuitPlan() {
  return (
    <svg
      viewBox="0 0 360 180"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      focusable="false"
    >
      <rect x="125" y="45" width="100" height="90" rx="4" />
      <rect x="140" y="60" width="70" height="60" />
      <path d="M0 40H50L70 60H125M0 140H65L90 115H125M225 65H270L290 40H360M225 110H270L305 145H360M155 45V0M195 45V20H260M155 135V180M195 135V155H245" />
      <path className={styles.circuitSignal} d="M0 40H50L70 60H125M225 110H270L305 145H360" />
      <g fill="currentColor">
        <circle cx="50" cy="40" r="3" />
        <circle cx="65" cy="140" r="3" />
        <circle cx="290" cy="40" r="3" />
        <circle cx="305" cy="145" r="3" />
        <circle cx="260" cy="20" r="3" />
        <circle cx="245" cy="155" r="3" />
      </g>
      <g strokeDasharray="3 5" opacity=".5">
        <path d="M0 90H360M175 0V180" />
      </g>
      <text
        x="154"
        y="94"
        fill="currentColor"
        stroke="none"
        fontSize="12"
        fontFamily="monospace"
      >
        CORE
      </text>
    </svg>
  );
}

function DraftingTriangle() {
  return (
    <svg viewBox="0 0 240 220" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" focusable="false">
      <path d="M32 24V184H210ZM55 78V161H147Z" />
      <path d="M22 24H6V184H22M4 34l8-8M4 182l8-8M32 197V210H210V197" strokeWidth="1" />
      <path d="M32 161H47V184M32 24L210 184" strokeDasharray="4 6" opacity=".6" />
      {[0, 1, 2, 3, 4, 5, 6].map((tick) => <path key={tick} d={`M32 ${44 + tick * 20}h${tick % 2 === 0 ? 10 : 6}`} />)}
      <path className={styles.dimensionAccent} d="M130 184a98 98 0 0 0-32-72M117 170l13 14-2-20" />
      <g fill="currentColor" stroke="none" fontFamily="monospace" fontSize="10"><text x="58" y="17">DETAIL / 45°</text><text x="99" y="204">160.00</text></g>
    </svg>
  );
}

const gearProfile = Array.from({ length: 48 }, (_, index) => {
  const angle = (index / 48) * Math.PI * 2;
  const radius = index % 4 < 2 ? 62 : 53;
  return `${index ? "L" : "M"}${(Math.cos(angle) * radius).toFixed(2)},${(Math.sin(angle) * radius).toFixed(2)}`;
}).join(" ") + "Z";

function GearAssembly() {
  return (
    <svg viewBox="0 0 280 220" fill="none" stroke="currentColor" strokeWidth="1.5" focusable="false">
      <path d="M8 108H272M98 16V204M208 32V204" strokeDasharray="10 5 2 5" opacity=".45" />
      <circle cx="98" cy="108" r="76" strokeWidth=".8" strokeDasharray="2 6" />
      <g transform="translate(98 108)"><g className={styles.gearRotor}>
        <path d={gearProfile} /><circle r="37" /><circle r="13" />
        {[0, 60, 120].map((angle) => <path key={angle} d="M-37 0H-13M13 0H37" transform={`rotate(${angle})`} />)}
      </g></g>
      <g transform="translate(202 108) scale(.72)"><g className={styles.gearCounterRotor}>
        <path d={gearProfile} /><circle r="37" /><circle r="13" />
        {[0, 60, 120].map((angle) => <path key={angle} d="M-37 0H-13M13 0H37" transform={`rotate(${angle})`} />)}
      </g></g>
      <path className={styles.dimensionAccent} d="M98 184V195H202V172M94 191l8 8M198 191l8 8" strokeWidth="1" />
      <g fill="currentColor" stroke="none" fontFamily="monospace" fontSize="9"><text x="37" y="20">MECHANISM / 02</text><text x="113" y="210">RATIO 1 : 1.4</text></g>
    </svg>
  );
}

function DimensionStudy() {
  return (
    <svg viewBox="0 0 360 120" fill="none" stroke="currentColor" strokeWidth="1.3" focusable="false">
      <path d="M24 45H336V93H24ZM24 54H336M55 45V93M306 45V93" />
      <path d="M24 33V13M336 33V13M24 23H143M216 23H336M20 19l8 8M332 19l8 8" />
      {Array.from({ length: 20 }, (_, tick) => <path key={tick} d={`M${32 + tick * 16} 54v${tick % 5 === 0 ? 22 : 10}`} />)}
      <circle className={styles.dimensionAccent} cx="181" cy="69" r="10" />
      <path d="M166 69H196M181 54V84" strokeWidth=".8" />
      <g fill="currentColor" stroke="none" fontFamily="monospace" fontSize="10"><text x="151" y="27">320.00</text><text x="88" y="113">PRECISION / NOT TO SCALE</text></g>
    </svg>
  );
}

function ExplodedAssembly() {
  return (
    <svg viewBox="0 0 220 300" fill="none" stroke="currentColor" strokeWidth="1.5" focusable="false">
      <path d="M110 8V278M26 94V215M194 94V215" strokeDasharray="5 6" opacity=".5" />
      <g className={styles.assemblyLift}><path d="m110 32 83 47-83 47-83-47ZM27 79v15l83 47 83-47V79M110 126v15" /><circle cx="110" cy="79" r="10" /></g>
      <path className={styles.dimensionAccent} d="m110 127 83 47-83 47-83-47ZM48 174l62-35 62 35-62 35Z" strokeDasharray="5 4" />
      <path d="m110 202 83 47-83 47-83-47ZM27 249v13l83 37 83-37v-13M110 296v3" transform="translate(0 -24)" />
      <path d="M205 90h9v129h-9M210 90l8 8M210 219l8-8" strokeWidth="1" />
      <g fill="currentColor" stroke="none" fontFamily="monospace" fontSize="9"><text x="42" y="18">EXPLODED VIEW / A—A</text><text x="143" y="159">+24.0</text></g>
    </svg>
  );
}

function SignalStudy() {
  return (
    <svg viewBox="0 0 320 170" fill="none" stroke="currentColor" strokeWidth="1.3" focusable="false">
      <path d="M20 28V142H302M20 86H302M90 28V142M160 28V142M230 28V142" strokeWidth=".8" opacity=".5" />
      <path d="M20 86q18-80 36 0t36 0 36 0 36 0 36 0 36 0 36 0 36 0" />
      <g className={styles.signalScan}><path d="M20 28V142" strokeWidth="2" /><circle cx="20" cy="86" r="4" fill="currentColor" /></g>
      <path className={styles.dimensionAccent} d="M54 23H126M54 18v10M126 18v10" />
      <g fill="currentColor" stroke="none" fontFamily="monospace" fontSize="9"><text x="143" y="20">SIGNAL / f(t)</text><text x="23" y="160">0</text><text x="282" y="160">t →</text></g>
    </svg>
  );
}

function SystemNodes() {
  return (
    <svg viewBox="0 0 330 200" fill="none" stroke="currentColor" strokeWidth="1.5" focusable="false">
      <rect x="126" y="62" width="78" height="76" rx="3" /><rect x="137" y="73" width="56" height="54" strokeDasharray="3 4" />
      <path d="M43 39H82V100H126M43 161H82V100M204 100H248V39H287M248 100V161H287" />
      <path className={styles.circuitSignal} d="M43 39H82V100H126M204 100H248V161H287" />
      {[39, 161].map((y) => <g key={y}><circle cx="31" cy={y} r="12" /><circle cx="299" cy={y} r="12" /></g>)}
      <circle className={styles.nodePulse} cx="165" cy="100" r="19" />
      <path d="M158 100h14M165 93v14M114 152H216" />
      <g fill="currentColor" stroke="none" fontFamily="monospace" fontSize="9"><text x="104" y="25">SYSTEM / CONNECTED</text><text x="140" y="171">INPUT → OUTPUT</text></g>
    </svg>
  );
}
