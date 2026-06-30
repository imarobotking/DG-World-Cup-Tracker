// ─── DATA ──────────────────────────────────────────────────────────────────

const GROUPS = {
  A: {
    teams: [
      { name: 'Mexico',       flag: 'mx' },
      { name: 'South Africa', flag: 'za' },
      { name: 'South Korea',  flag: 'kr' },
      { name: 'Czechia',      flag: 'cz' }
    ],
    matches: [
      { home: 0, away: 1, date: 'Jun 11' },
      { home: 2, away: 3, date: 'Jun 11' },
      { home: 3, away: 1, date: 'Jun 18' },
      { home: 0, away: 2, date: 'Jun 18' },
      { home: 3, away: 0, date: 'Jun 24' },
      { home: 1, away: 2, date: 'Jun 24' }
    ]
  },
  B: {
    teams: [
      { name: 'Canada',         flag: 'ca' },
      { name: 'Qatar',          flag: 'qa' },
      { name: 'Switzerland',    flag: 'ch' },
      { name: 'Bosnia & Herz.', flag: 'ba' }
    ],
    matches: [
      { home: 0, away: 3, date: 'Jun 12' },
      { home: 1, away: 2, date: 'Jun 13' },
      { home: 2, away: 3, date: 'Jun 18' },
      { home: 0, away: 1, date: 'Jun 18' },
      { home: 2, away: 0, date: 'Jun 24' },
      { home: 3, away: 1, date: 'Jun 24' }
    ]
  },
  C: {
    teams: [
      { name: 'Brazil',   flag: 'br' },
      { name: 'Morocco',  flag: 'ma' },
      { name: 'Scotland', flag: 'gb-sct' },
      { name: 'Haiti',    flag: 'ht' }
    ],
    matches: [
      { home: 0, away: 1, date: 'Jun 14' },
      { home: 3, away: 2, date: 'Jun 14' },
      { home: 0, away: 2, date: 'Jun 20' },
      { home: 3, away: 1, date: 'Jun 20' },
      { home: 2, away: 1, date: 'Jun 25' },
      { home: 0, away: 3, date: 'Jun 25' }
    ]
  },
  D: {
    teams: [
      { name: 'USA',       flag: 'us' },
      { name: 'Paraguay',  flag: 'py' },
      { name: 'Australia', flag: 'au' },
      { name: 'Türkiye',   flag: 'tr' }
    ],
    matches: [
      { home: 0, away: 1, date: 'Jun 13' },
      { home: 2, away: 3, date: 'Jun 13' },
      { home: 0, away: 2, date: 'Jun 19' },
      { home: 3, away: 1, date: 'Jun 19' },
      { home: 3, away: 0, date: 'Jun 25' },
      { home: 1, away: 2, date: 'Jun 25' }
    ]
  },
  E: {
    teams: [
      { name: 'Germany',     flag: 'de' },
      { name: 'Ivory Coast', flag: 'ci' },
      { name: 'Ecuador',     flag: 'ec' },
      { name: 'Curaçao',     flag: 'cw' }
    ],
    matches: [
      { home: 0, away: 3, date: 'Jun 14' },
      { home: 1, away: 2, date: 'Jun 14' },
      { home: 0, away: 1, date: 'Jun 20' },
      { home: 2, away: 3, date: 'Jun 20' },
      { home: 3, away: 1, date: 'Jun 25' },
      { home: 2, away: 0, date: 'Jun 25' }
    ]
  },
  F: {
    teams: [
      { name: 'Netherlands', flag: 'nl' },
      { name: 'Japan',       flag: 'jp' },
      { name: 'Sweden',      flag: 'se' },
      { name: 'Tunisia',     flag: 'tn' }
    ],
    matches: [
      { home: 0, away: 1, date: 'Jun 14' },
      { home: 2, away: 3, date: 'Jun 14' },
      { home: 0, away: 2, date: 'Jun 20' },
      { home: 1, away: 3, date: 'Jun 20' },
      { home: 1, away: 2, date: 'Jun 25' },
      { home: 3, away: 0, date: 'Jun 25' }
    ]
  },
  G: {
    teams: [
      { name: 'Belgium',     flag: 'be' },
      { name: 'Iran',        flag: 'ir' },
      { name: 'Egypt',       flag: 'eg' },
      { name: 'New Zealand', flag: 'nz' }
    ],
    matches: [
      { home: 0, away: 1, date: 'Jun 15' },
      { home: 2, away: 3, date: 'Jun 15' },
      { home: 0, away: 2, date: 'Jun 21' },
      { home: 1, away: 3, date: 'Jun 21' },
      { home: 2, away: 1, date: 'Jun 26' },
      { home: 3, away: 0, date: 'Jun 26' }
    ]
  },
  H: {
    teams: [
      { name: 'Spain',        flag: 'es' },
      { name: 'Cabo Verde',   flag: 'cv' },
      { name: 'Uruguay',      flag: 'uy' },
      { name: 'Saudi Arabia', flag: 'sa' }
    ],
    matches: [
      { home: 0, away: 1, date: 'Jun 16' },
      { home: 3, away: 2, date: 'Jun 16' },
      { home: 0, away: 2, date: 'Jun 22' },
      { home: 3, away: 1, date: 'Jun 22' },
      { home: 3, away: 0, date: 'Jun 27' },
      { home: 1, away: 2, date: 'Jun 27' }
    ]
  },
  I: {
    teams: [
      { name: 'France',  flag: 'fr' },
      { name: 'Senegal', flag: 'sn' },
      { name: 'Iraq',    flag: 'iq' },
      { name: 'Norway',  flag: 'no' }
    ],
    matches: [
      { home: 0, away: 1, date: 'Jun 17' },
      { home: 2, away: 3, date: 'Jun 17' },
      { home: 0, away: 2, date: 'Jun 22' },
      { home: 3, away: 1, date: 'Jun 22' },
      { home: 1, away: 2, date: 'Jun 26' },
      { home: 3, away: 0, date: 'Jun 26' }
    ]
  },
  J: {
    teams: [
      { name: 'Argentina', flag: 'ar' },
      { name: 'Algeria',   flag: 'dz' },
      { name: 'Austria',   flag: 'at' },
      { name: 'Jordan',    flag: 'jo' }
    ],
    matches: [
      { home: 0, away: 1, date: 'Jun 16' },
      { home: 2, away: 3, date: 'Jun 16' },
      { home: 0, away: 2, date: 'Jun 22' },
      { home: 3, away: 1, date: 'Jun 22' },
      { home: 3, away: 0, date: 'Jun 27' },
      { home: 1, away: 2, date: 'Jun 27' }
    ]
  },
  K: {
    teams: [
      { name: 'Colombia',   flag: 'co' },
      { name: 'Portugal',   flag: 'pt' },
      { name: 'DR Congo',   flag: 'cd' },
      { name: 'Uzbekistan', flag: 'uz' }
    ],
    matches: [
      { home: 0, away: 1, date: 'Jun 17' },
      { home: 2, away: 3, date: 'Jun 17' },
      { home: 0, away: 2, date: 'Jun 23' },
      { home: 3, away: 1, date: 'Jun 23' },
      { home: 3, away: 0, date: 'Jun 27' },
      { home: 1, away: 2, date: 'Jun 27' }
    ]
  },
  L: {
    teams: [
      { name: 'England', flag: 'gb-eng' },
      { name: 'Croatia', flag: 'hr' },
      { name: 'Ghana',   flag: 'gh' },
      { name: 'Panama',  flag: 'pa' }
    ],
    matches: [
      { home: 0, away: 1, date: 'Jun 17' },
      { home: 2, away: 3, date: 'Jun 17' },
      { home: 0, away: 2, date: 'Jun 23' },
      { home: 3, away: 1, date: 'Jun 23' },
      { home: 3, away: 0, date: 'Jun 27' },
      { home: 1, away: 2, date: 'Jun 27' }
    ]
  }
};

// ─── R32 AUTO-FILL MAP ─────────────────────────────────────────────────────
// Official FIFA 2026 Round of 32 matchup structure.
// group: group letter, pos: 0=winner, 1=runner-up
// group:'3RD', pos:N = Nth best third-place team (0=best)

const R32_OFFICIAL = {
  M73: { team1: { group:'A', pos:1 }, team2: { group:'B', pos:1 } }, 
  M74: { team1: { group:'E', pos:0 }, team2: { group:'D', pos:2 } }, 
  M75: { team1: { group:'F', pos:0 }, team2: { group:'C', pos:1 } }, 
  M76: { team1: { group:'C', pos:0 }, team2: { group:'F', pos:1 } },   
  M77: { team1: { group:'I', pos:0 }, team2: { group:'F', pos:2 } },   
  M78: { team1: { group:'E', pos:1 }, team2: { group:'I', pos:1 } },   
  M79: { team1: { group:'A', pos:0 }, team2: { group:'E', pos:2 } },   
  M80: { team1: { group:'L', pos:0 }, team2: { group:'K', pos:2 } },   
  M81: { team1: { group:'D', pos:0 }, team2: { group:'B', pos:2 } }, 
  M82: { team1: { group:'G', pos:0 }, team2: { group:'I', pos:2 } }, 
  M83: { team1: { group:'K', pos:1 }, team2: { group:'L', pos:1 } }, 
  M84: { team1: { group:'H', pos:0 }, team2: { group:'J', pos:1 } }, 
  M85: { team1: { group:'B', pos:0 }, team2: { group:'J', pos:2 } },   
  M86: { team1: { group:'J', pos:0 }, team2: { group:'H', pos:1 } },   
  M87: { team1: { group:'K', pos:0 }, team2: { group:'L', pos:2 } },   
  M88: { team1: { group:'D', pos:1 }, team2: { group:'G', pos:1 } },   
};

const BRACKET_STRUCTURE = {
  R32L: [
    { id: 'M74', label: 'C1 vs B2',        date: '29/06' },
    { id: 'M77', label: 'I1 vs J2',        date: '30/06' },
    { id: 'M73', label: 'A1 vs 3rd',       date: '28/06' },
    { id: 'M75', label: 'E1 vs 3rd',       date: '30/06' },
    { id: 'M83', label: 'H1 vs 3rd',       date: '03/07' },
    { id: 'M84', label: 'K1 vs 3rd',       date: '02/07' },
    { id: 'M81', label: 'L1 vs 3rd',       date: '02/07' },
    { id: 'M82', label: 'G1 vs 3rd',       date: '01/07' },
  ],
  R32R: [
    { id: 'M76', label: 'B1 vs A2',        date: '29/06' },
    { id: 'M78', label: 'J1 vs I2',        date: '30/06' },
    { id: 'M79', label: 'D1 vs C2',        date: '01/07' },
    { id: 'M80', label: 'F1 vs E2',        date: '01/07' },
    { id: 'M86', label: 'J1 vs H2',        date: '03/07' },
    { id: 'M88', label: 'D2 vs G2',        date: '03/07' },
    { id: 'M85', label: 'H2 vs G2',        date: '03/07' },
    { id: 'M87', label: 'K2 vs L2',        date: '04/07' },
  ],
  R16L: [
    { id: 'M89', label: 'W74 vs W77', date: '04/07' },
    { id: 'M90', label: 'W73 vs W75', date: '04/07' },
    { id: 'M93', label: 'W83 vs W84', date: '06/07' },
    { id: 'M94', label: 'W81 vs W82', date: '07/07' },
  ],
  R16R: [
    { id: 'M91', label: 'W76 vs W78', date: '05/07' },
    { id: 'M92', label: 'W79 vs W80', date: '06/07' },
    { id: 'M95', label: 'W86 vs W88', date: '07/07' },
    { id: 'M96', label: 'W85 vs W87', date: '07/07' },
  ],
  QFL: [
    { id: 'M97',  label: 'W89 vs W90', date: '09/07' },
    { id: 'M98',  label: 'W93 vs W94', date: '10/07' },
  ],
  QFR: [
    { id: 'M99',  label: 'W91 vs W92', date: '11/07' },
    { id: 'M100', label: 'W95 vs W96', date: '12/07' },
  ],
  SFL:   [{ id: 'M101', label: 'W97 vs W98',   date: '14/07' }],
  SFR:   [{ id: 'M102', label: 'W99 vs W100',  date: '15/07' }],
  FINAL: [{ id: 'M104', label: 'Final',         date: '19/07' }],
  THIRD: [{ id: 'M103', label: '3rd Place',     date: '18/07' }],
};

// ─── HELPERS ───────────────────────────────────────────────────────────────

function flagHTML(code, size = '1.3em') {
  if (!code) return `<span style="width:${size};display:inline-block"></span>`;
  return `<span class="fi fi-${code}" style="font-size:${size};border-radius:2px;flex-shrink:0"></span>`;
}

// ─── STATE ─────────────────────────────────────────────────────────────────

let state = loadState();

function loadState() {
  try {
    const s = localStorage.getItem('wc2026v3');
    if (s) return JSON.parse(s);
  } catch(e) {}
  return { scores: {}, knockout: {}, scorers: [] };
}

function saveState() {
  try {
    localStorage.setItem('wc2026v3', JSON.stringify(state));
  } catch(e) {}
}

// ─── STANDINGS CALC ────────────────────────────────────────────────────────

function calcStandings(groupKey) {
  const group = GROUPS[groupKey];
  const teams = group.teams.map((t, i) => ({
    ...t, idx: i, p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, pts: 0, cs: 0 
  }));

  group.matches.forEach((m, mi) => {
    const key = `${groupKey}-${mi}`;
    const sc = state.scores[key];
    
    if (sc !== undefined) {
      // Calculate Fair Play (Conduct) Score: Yellow = -1, Red = -4
      const homeY = parseInt(sc.hy) || 0;
      const homeR = parseInt(sc.hr) || 0;
      const awayY = parseInt(sc.ay) || 0;
      const awayR = parseInt(sc.ar) || 0;

      teams[m.home].cs -= (homeY * 1) + (homeR * 4);
      teams[m.away].cs -= (awayY * 1) + (awayR * 4);

      // Existing goals and points logic
      if (sc.h !== '' && sc.a !== '') {
        const h = parseInt(sc.h), a = parseInt(sc.a);
        if (!isNaN(h) && !isNaN(a)) {
          teams[m.home].p++; teams[m.away].p++;
          teams[m.home].gf += h; teams[m.home].ga += a;
          teams[m.away].gf += a; teams[m.away].ga += h;
          if (h > a) {
            teams[m.home].w++; teams[m.home].pts += 3; teams[m.away].l++;
          } else if (h < a) {
            teams[m.away].w++; teams[m.away].pts += 3; teams[m.home].l++;
          } else {
            teams[m.home].d++; teams[m.home].pts++;
            teams[m.away].d++; teams[m.away].pts++;
          }
        }
      }
    }
  });

  return teams.sort((a, b) => {
    if (b.pts !== a.pts) return b.pts - a.pts;
    const gdA = a.gf - a.ga, gdB = b.gf - b.ga;
    if (gdB !== gdA) return gdB - gdA;
    if (b.gf !== a.gf) return b.gf - a.gf;
    // Tiebreaker: Conduct Score (b.cs - a.cs works perfectly because higher/less negative is better)
    return b.cs - a.cs; 
  });
}

// Returns all 12 third-place teams sorted best→worst
function calcThirdPlace() {
  return Object.keys(GROUPS).map(gk => {
    const s = calcStandings(gk);
    const t = s[2];
    return { ...t, group: gk, gd: t.gf - t.ga };
  }).sort((a, b) => {
    if (b.pts !== a.pts) return b.pts - a.pts;
    if (b.gd  !== a.gd)  return b.gd  - a.gd;
    if (b.gf !== a.gf)   return b.gf - a.gf;  
    return b.cs - a.cs;
  });
}

// ─── BRACKET PROGRESSION MAP ───────────────────────────────────────────────
// Defines which two matches feed each later-round match.
// from1/from2 = match IDs whose WINNERS advance into this match.

const PROGRESSION = {
  // Round of 16
  M89: { from1: 'M74', from2: 'M77' },
  M90: { from1: 'M73', from2: 'M75' },
  M93: { from1: 'M83', from2: 'M84' },
  M94: { from1: 'M81', from2: 'M82' },
  M91: { from1: 'M76', from2: 'M78' },
  M92: { from1: 'M79', from2: 'M80' },
  M95: { from1: 'M86', from2: 'M88' },
  M96: { from1: 'M85', from2: 'M87' },
  // Quarter-finals
  M97:  { from1: 'M89', from2: 'M90' },
  M98:  { from1: 'M93', from2: 'M94' },
  M99:  { from1: 'M91', from2: 'M92' },
  M100: { from1: 'M95', from2: 'M96' },
  // Semi-finals
  M101: { from1: 'M97', from2: 'M98' },
  M102: { from1: 'M99', from2: 'M100' },
  // Final (winners of the two semis)
  M104: { from1: 'M101', from2: 'M102' },
  // Third place play-off (losers of the two semis)
  M103: { from1: 'M101', from2: 'M102', losers: true },
};

// ─── WINNER / LOSER RESOLUTION ─────────────────────────────────────────────
// Given a knockout match record, returns the winning (or losing) team object
// considering 90min score → extra time → penalties.

function getMatchOutcome(d) {
  if (!d) return { winner: null, loser: null };
  const s1 = d.score1, s2 = d.score2;
  // Replace the early return check in getMatchOutcome with:
if (s1 === '' || s2 === '' || s1 === undefined || s2 === undefined || isNaN(parseInt(s1)) || isNaN(parseInt(s2))) {
  return { winner: null, loser: null };

  }
  const team1 = { name: d.team1, flag: d.flag1 };
  const team2 = { name: d.team2, flag: d.flag2 };

  let n1 = parseInt(s1), n2 = parseInt(s2);
  if (n1 > n2) return { winner: team1, loser: team2 };
  if (n2 > n1) return { winner: team2, loser: team1 };

  // Draw after 90 → check extra time
  if (d.et1 !== '' && d.et2 !== '' && d.et1 !== undefined && d.et2 !== undefined) {
    const e1 = parseInt(d.et1), e2 = parseInt(d.et2);
    if (e1 > e2) return { winner: team1, loser: team2 };
    if (e2 > e1) return { winner: team2, loser: team1 };
  }

  // Still level → penalties
  if (d.pen1 !== '' && d.pen2 !== '' && d.pen1 !== undefined && d.pen2 !== undefined) {
    const p1 = parseInt(d.pen1), p2 = parseInt(d.pen2);
    if (p1 > p2) return { winner: team1, loser: team2 };
    if (p2 > p1) return { winner: team2, loser: team1 };
  }

  return { winner: null, loser: null }; // unresolved draw
}

// ─── AUTO-FILL BRACKET ─────────────────────────────────────────────────────
// 1. Fills R32 from group standings + best 3rd place table.
// 2. Propagates winners (and 3rd-place losers) through every later round.
// Never overwrites scores you've entered.

function autoFillBracket() {
  const thirds = calcThirdPlace();

  // -- Step 1: Round of 32 from groups --
  function resolveGroupSlot(slot) {
    if (slot.group === '3RD') {
      const t = thirds[slot.pos];
      return t ? { name: t.name, flag: t.flag } : null;
    }
    const standings = calcStandings(slot.group);
    const t = standings[slot.pos];
    return t ? { name: t.name, flag: t.flag } : null;
  }

  Object.keys(R32_OFFICIAL).forEach(matchId => {
    const map = R32_OFFICIAL[matchId];
    const existing = state.knockout[matchId] || {};
    const t1 = resolveGroupSlot(map.team1);
    const t2 = resolveGroupSlot(map.team2);
    state.knockout[matchId] = {
      team1: t1 ? t1.name : (existing.team1 || 'TBD'),
      flag1: t1 ? t1.flag : (existing.flag1 || ''),
      team2: t2 ? t2.name : (existing.team2 || 'TBD'),
      flag2: t2 ? t2.flag : (existing.flag2 || ''),
      score1: existing.score1 !== undefined ? existing.score1 : '',
      score2: existing.score2 !== undefined ? existing.score2 : '',
      et1: existing.et1 !== undefined ? existing.et1 : '',
      et2: existing.et2 !== undefined ? existing.et2 : '',
      pen1: existing.pen1 !== undefined ? existing.pen1 : '',
      pen2: existing.pen2 !== undefined ? existing.pen2 : '',
    };
  });

  // -- Step 2: propagate through later rounds, in order --
  // The PROGRESSION object is defined in the correct dependency order
  // (R16 → QF → SF → Final/3rd) so a single pass works.
  Object.keys(PROGRESSION).forEach(matchId => {
    const prog = PROGRESSION[matchId];
    const existing = state.knockout[matchId] || {};

    const src1 = state.knockout[prog.from1];
    const src2 = state.knockout[prog.from2];
    const o1 = getMatchOutcome(src1);
    const o2 = getMatchOutcome(src2);

    // For 3rd-place playoff we want the LOSERS, else the WINNERS
    const pick1 = prog.losers ? o1.loser : o1.winner;
    const pick2 = prog.losers ? o2.loser : o2.winner;

    state.knockout[matchId] = {
      team1: pick1 ? pick1.name : 'TBD',
      flag1: pick1 ? pick1.flag : '',
      team2: pick2 ? pick2.name : 'TBD',
      flag2: pick2 ? pick2.flag : '',
      score1: existing.score1 !== undefined ? existing.score1 : '',
      score2: existing.score2 !== undefined ? existing.score2 : '',
      et1: existing.et1 !== undefined ? existing.et1 : '',
      et2: existing.et2 !== undefined ? existing.et2 : '',
      pen1: existing.pen1 !== undefined ? existing.pen1 : '',
      pen2: existing.pen2 !== undefined ? existing.pen2 : '',
    };
  });

  saveState();
}

// ─── RENDER GROUPS ─────────────────────────────────────────────────────────

function renderGroups() {
  const grid = document.getElementById('groups-grid');
  grid.innerHTML = '';

  Object.keys(GROUPS).forEach(gk => {
    const group = GROUPS[gk];
    const standings = calcStandings(gk);

    const card = document.createElement('div');
    card.className = 'group-card';
    card.innerHTML = `<div class="group-header"><div class="group-letter">${gk}</div><span>Group ${gk}</span></div>`;

    const table = document.createElement('table');
    table.className = 'standings';
    table.innerHTML = `<thead><tr>
      <th style="width:50%">Team</th>
      <th>P</th><th>W</th><th>D</th><th>L</th>
      <th>GD</th><th style="color:var(--gold)">PTS</th>
      <th title="Conduct Score">CS</th>
    </tr></thead>`;
    const tbody = document.createElement('tbody');
    standings.forEach((t, pos) => {
      const gd = t.gf - t.ga;
      const gdClass = gd > 0 ? 'gd-pos' : gd < 0 ? 'gd-neg' : 'gd-zero';
      const rowClass = pos < 2 ? 'qualified' : pos === 2 ? 'third-place' : 'eliminated';
      const tr = document.createElement('tr');
      tr.className = rowClass;
      tr.innerHTML = `
        <td><div class="team-cell">
          <span class="pos-num">${pos + 1}</span>
          ${flagHTML(t.flag)}
          <span class="team-name">${t.name}</span>
        </div></td>
        <td>${t.p}</td><td>${t.w}</td><td>${t.d}</td><td>${t.l}</td>
        <td class="${gdClass}">${gd > 0 ? '+' : ''}${gd}</td>
        <td class="pts">${t.pts}</td>
        <td style="color:var(--muted); font-size:12px;">${t.cs}</td>`; // Added CS cell
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    card.appendChild(table);

    const fixturesDiv = document.createElement('div');
    fixturesDiv.className = 'fixtures-section';
    group.matches.forEach((m, mi) => {
      const key = `${gk}-${mi}`;
      const sc = state.scores[key] || { h: '', a: '' };
      const ht = group.teams[m.home], at = group.teams[m.away];
      const row = document.createElement('div');
      row.className = 'fixture-row';
     row.innerHTML = `
        <div class="fixture-teams">
          ${flagHTML(ht.flag, '1.1em')}
          <span class="fixture-team home">${ht.name}</span>
        </div>
        <div class="score-inputs">
          
          <div class="card-inputs">
            <input class="score-input card-input yc" type="number" min="0" placeholder="0" value="${sc.hy !== undefined ? sc.hy : ''}"
              onchange="updateScore('${key}','hy',this.value)" oninput="updateScore('${key}','hy',this.value)" title="Home Yellow Cards" />
            <input class="score-input card-input rc" type="number" min="0" placeholder="0" value="${sc.hr !== undefined ? sc.hr : ''}"
              onchange="updateScore('${key}','hr',this.value)" oninput="updateScore('${key}','hr',this.value)" title="Home Red Cards" />
          </div>

          <input class="score-input" type="number" min="0" value="${sc.h !== undefined ? sc.h : ''}"
            onchange="updateScore('${key}','h',this.value)" oninput="updateScore('${key}','h',this.value)" />
          <span class="score-sep">:</span>
          <input class="score-input" type="number" min="0" value="${sc.a !== undefined ? sc.a : ''}"
            onchange="updateScore('${key}','a',this.value)" oninput="updateScore('${key}','a',this.value)" />

          <div class="card-inputs">
            <input class="score-input card-input yc" type="number" min="0" placeholder="0" value="${sc.ay !== undefined ? sc.ay : ''}"
              onchange="updateScore('${key}','ay',this.value)" oninput="updateScore('${key}','ay',this.value)" title="Away Yellow Cards" />
            <input class="score-input card-input rc" type="number" min="0" placeholder="0" value="${sc.ar !== undefined ? sc.ar : ''}"
              onchange="updateScore('${key}','ar',this.value)" oninput="updateScore('${key}','ar',this.value)" title="Away Red Cards" />
          </div>

        </div>
        <div class="fixture-teams" style="justify-content:flex-end">
          <span class="fixture-team away">${at.name}</span>
          ${flagHTML(at.flag, '1.1em')}
        </div>
        <div class="match-date">${m.date}</div>`;
      fixturesDiv.appendChild(row);
    });
    card.appendChild(fixturesDiv);
    grid.appendChild(card);
  });

  renderThirdPlaceTable();
}

function updateScore(key, side, val) {
  if (!state.scores[key]) state.scores[key] = { h: '', a: '' };
  state.scores[key][side] = val === '' ? '' : parseInt(val);
  saveState();
  refreshStandings();
  autoFillBracket();
  showToast('Saved!');
}

function refreshStandings() {
  Object.keys(GROUPS).forEach(gk => {
    const standings = calcStandings(gk);
    document.querySelectorAll('.group-card').forEach(card => {
      const letter = card.querySelector('.group-letter');
      if (!letter || letter.textContent !== gk) return;
      const tbody = card.querySelector('tbody');
      if (!tbody) return;
      const rows = tbody.querySelectorAll('tr');
      standings.forEach((t, pos) => {
        const gd = t.gf - t.ga;
        const gdClass = gd > 0 ? 'gd-pos' : gd < 0 ? 'gd-neg' : 'gd-zero';
        const rowClass = pos < 2 ? 'qualified' : pos === 2 ? 'third-place' : 'eliminated';
        if (!rows[pos]) return;
        rows[pos].className = rowClass;
        rows[pos].cells[0].innerHTML = `<div class="team-cell">
          <span class="pos-num">${pos + 1}</span>
          ${flagHTML(t.flag)}
          <span class="team-name">${t.name}</span>
        </div>`;
        rows[pos].cells[1].textContent = t.p;
        rows[pos].cells[2].textContent = t.w;
        rows[pos].cells[3].textContent = t.d;
        rows[pos].cells[4].textContent = t.l;
       rows[pos].cells[5].className = gdClass;
        rows[pos].cells[5].textContent = (gd > 0 ? '+' : '') + gd;
        rows[pos].cells[6].textContent = t.pts;
        // Add this line to update the CS column on the fly
        if(rows[pos].cells[7]) rows[pos].cells[7].textContent = t.cs;
      });
    });
  });
  renderThirdPlaceTable();
}

// ─── THIRD PLACE TABLE ─────────────────────────────────────────────────────

function renderThirdPlaceTable() {
  const el = document.getElementById('third-place-table-body');
  if (!el) return;
  const thirds = calcThirdPlace();
  el.innerHTML = thirds.map((t, i) => {
    const gd = t.gf - t.ga;
    const gdClass = gd > 0 ? 'gd-pos' : gd < 0 ? 'gd-neg' : 'gd-zero';
    const advancing = i < 8;
    return `<tr class="${advancing ? 'third-advancing' : ''}">
      <td style="color:var(--muted);font-weight:700;padding-left:12px">${i + 1}</td>
      <td><div class="team-cell">${flagHTML(t.flag)}<span class="team-name">${t.name}</span><span style="color:var(--muted);font-size:11px;margin-left:4px">Grp ${t.group}</span></div></td>
      <td>${t.p}</td><td>${t.w}</td><td>${t.d}</td><td>${t.l}</td>
      <td class="${gdClass}">${gd > 0 ? '+' : ''}${gd}</td>
<td style="color:var(--muted); font-size:12px;">${t.cs}</td>
      <td class="pts">${t.pts}</td>
<td style="text-align:center">${advancing ? '<span class="adv-badge">ADV</span>' : ''}</td>
    </tr>`;
  }).join('');
}

// ─── BRACKET RENDER ────────────────────────────────────────────────────────

function mkTeam(data) {
  const t = data || {};
  const name = t.name || 'TBD';
  const flag = t.flag || '';
  const score = (t.score !== undefined && t.score !== '') ? t.score : '';
  const isWinner = t.winner === true;
  const isTbd = name === 'TBD';
  // Penalty marker shown in small text if match went to pens
  const penTag = (t.pen !== undefined && t.pen !== '') ? `<span class="bt-pen">(${t.pen})</span>` : '';
  return `<div class="bt-team ${isWinner ? 'bt-winner' : ''} ${isTbd ? 'bt-tbd' : ''}">
    ${flagHTML(flag, '1em')}
    <span class="bt-name">${name}</span>
    ${penTag}
    <span class="bt-score">${score}</span>
  </div>`;
}

function mkMatch(matchId, label, date) {
  const d = state.knockout[matchId] || {};
  const outcome = getMatchOutcome(d);

  // Determine display score — show ET score if it exists, else 90min
  const hasET = d.et1 !== '' && d.et1 !== undefined && d.et2 !== '' && d.et2 !== undefined;
  const s1 = hasET ? d.et1 : (d.score1 !== undefined ? d.score1 : '');
  const s2 = hasET ? d.et2 : (d.score2 !== undefined ? d.score2 : '');

  const wName = outcome.winner ? outcome.winner.name : null;
  const team1 = {
    name: d.team1 || 'TBD', flag: d.flag1 || '', score: s1,
    winner: wName && d.team1 === wName,
    pen: d.pen1
  };
  const team2 = {
    name: d.team2 || 'TBD', flag: d.flag2 || '', score: s2,
    winner: wName && d.team2 === wName,
    pen: d.pen2
  };
  const isAutoFilled = (d.team1 && d.team1 !== 'TBD') || (d.team2 && d.team2 !== 'TBD');
  const hasScore = s1 !== '' || s2 !== '';

  return `<div class="bt-match ${!isAutoFilled ? 'bt-match-tbd' : ''} ${hasScore ? 'bt-match-scored' : ''}"
    id="bm-${matchId}"
    onclick="openKOModal('${matchId}','${label}')"
    title="${label}">
    <div class="bt-match-id">${matchId}</div>
    <div class="bt-date">${date}</div>
    ${mkTeam(team1)}
    ${mkTeam(team2)}
  </div>`;
}

function renderBracket() {
  const container = document.getElementById('bracket-tree');
  if (!container) return;
  autoFillBracket();
  const B = BRACKET_STRUCTURE;

  container.innerHTML = `
  <div class="bracket-tree-wrap">
    <div class="bt-col bt-col-r32">
      <div class="bt-col-label">Round of 32</div>
      <div class="bt-col-matches bt-col-r32-left">
        <div class="bt-group-pair">${mkMatch(B.R32L[0].id,B.R32L[0].label,B.R32L[0].date)}${mkMatch(B.R32L[1].id,B.R32L[1].label,B.R32L[1].date)}</div>
        <div class="bt-group-pair">${mkMatch(B.R32L[2].id,B.R32L[2].label,B.R32L[2].date)}${mkMatch(B.R32L[3].id,B.R32L[3].label,B.R32L[3].date)}</div>
        <div class="bt-group-pair">${mkMatch(B.R32L[4].id,B.R32L[4].label,B.R32L[4].date)}${mkMatch(B.R32L[5].id,B.R32L[5].label,B.R32L[5].date)}</div>
        <div class="bt-group-pair">${mkMatch(B.R32L[6].id,B.R32L[6].label,B.R32L[6].date)}${mkMatch(B.R32L[7].id,B.R32L[7].label,B.R32L[7].date)}</div>
      </div>
    </div>
    <div class="bt-col bt-col-r16">
      <div class="bt-col-label">Round of 16</div>
      <div class="bt-col-matches">
        <div class="bt-r16-slot">${mkMatch(B.R16L[0].id,B.R16L[0].label,B.R16L[0].date)}</div>
        <div class="bt-r16-slot">${mkMatch(B.R16L[1].id,B.R16L[1].label,B.R16L[1].date)}</div>
        <div class="bt-r16-slot">${mkMatch(B.R16L[2].id,B.R16L[2].label,B.R16L[2].date)}</div>
        <div class="bt-r16-slot">${mkMatch(B.R16L[3].id,B.R16L[3].label,B.R16L[3].date)}</div>
      </div>
    </div>
    <div class="bt-col bt-col-qf">
      <div class="bt-col-label">Quarter-Finals</div>
      <div class="bt-col-matches">
        <div class="bt-qf-slot">${mkMatch(B.QFL[0].id,B.QFL[0].label,B.QFL[0].date)}</div>
        <div class="bt-qf-slot">${mkMatch(B.QFL[1].id,B.QFL[1].label,B.QFL[1].date)}</div>
      </div>
    </div>
    <div class="bt-col bt-col-sf">
      <div class="bt-col-label">Semi-Finals</div>
      <div class="bt-col-matches">
        <div class="bt-sf-slot">${mkMatch(B.SFL[0].id,B.SFL[0].label,B.SFL[0].date)}</div>
      </div>
    </div>
    <div class="bt-col bt-col-final">
      <div class="bt-col-label">Final</div>
      <div class="bt-final-wrap">
        <div class="bt-final-match">${mkMatch(B.FINAL[0].id,B.FINAL[0].label,B.FINAL[0].date)}</div>
        <div class="bt-third-label">Play-off for 3rd Place</div>
        <div class="bt-third-match">${mkMatch(B.THIRD[0].id,B.THIRD[0].label,B.THIRD[0].date)}</div>
      </div>
    </div>
    <div class="bt-col bt-col-sf">
      <div class="bt-col-label">Semi-Finals</div>
      <div class="bt-col-matches">
        <div class="bt-sf-slot">${mkMatch(B.SFR[0].id,B.SFR[0].label,B.SFR[0].date)}</div>
      </div>
    </div>
    <div class="bt-col bt-col-qf">
      <div class="bt-col-label">Quarter-Finals</div>
      <div class="bt-col-matches">
        <div class="bt-qf-slot">${mkMatch(B.QFR[0].id,B.QFR[0].label,B.QFR[0].date)}</div>
        <div class="bt-qf-slot">${mkMatch(B.QFR[1].id,B.QFR[1].label,B.QFR[1].date)}</div>
      </div>
    </div>
    <div class="bt-col bt-col-r16">
      <div class="bt-col-label">Round of 16</div>
      <div class="bt-col-matches">
        <div class="bt-r16-slot">${mkMatch(B.R16R[0].id,B.R16R[0].label,B.R16R[0].date)}</div>
        <div class="bt-r16-slot">${mkMatch(B.R16R[1].id,B.R16R[1].label,B.R16R[1].date)}</div>
        <div class="bt-r16-slot">${mkMatch(B.R16R[2].id,B.R16R[2].label,B.R16R[2].date)}</div>
        <div class="bt-r16-slot">${mkMatch(B.R16R[3].id,B.R16R[3].label,B.R16R[3].date)}</div>
      </div>
    </div>
    <div class="bt-col bt-col-r32">
      <div class="bt-col-label">Round of 32</div>
      <div class="bt-col-matches bt-col-r32-right">
        <div class="bt-group-pair">${mkMatch(B.R32R[0].id,B.R32R[0].label,B.R32R[0].date)}${mkMatch(B.R32R[1].id,B.R32R[1].label,B.R32R[1].date)}</div>
        <div class="bt-group-pair">${mkMatch(B.R32R[2].id,B.R32R[2].label,B.R32R[2].date)}${mkMatch(B.R32R[3].id,B.R32R[3].label,B.R32R[3].date)}</div>
        <div class="bt-group-pair">${mkMatch(B.R32R[4].id,B.R32R[4].label,B.R32R[4].date)}${mkMatch(B.R32R[5].id,B.R32R[5].label,B.R32R[5].date)}</div>
        <div class="bt-group-pair">${mkMatch(B.R32R[6].id,B.R32R[6].label,B.R32R[6].date)}${mkMatch(B.R32R[7].id,B.R32R[7].label,B.R32R[7].date)}</div>
      </div>
    </div>
  </div>`;
}

// ─── KNOCKOUT MODAL ────────────────────────────────────────────────────────

let currentKOMatch = null;

function openKOModal(matchId, label) {
  const d = state.knockout[matchId] || {};
  // Don't allow opening matches with no teams resolved yet
  const t1 = d.team1 || 'TBD';
  const t2 = d.team2 || 'TBD';
  if (t1 === 'TBD' && t2 === 'TBD') {
    showToast('Teams not decided yet');
    return;
  }
  currentKOMatch = matchId;

  document.getElementById('ko-modal-title').textContent = `${matchId} — ${label}`;

  // Read-only team labels with flags
  document.getElementById('ko-team1-label').innerHTML = `${flagHTML(d.flag1 || '', '1.4em')} <span>${t1}</span>`;
  document.getElementById('ko-team2-label').innerHTML = `${flagHTML(d.flag2 || '', '1.4em')} <span>${t2}</span>`;

  // 90-minute scores
  document.getElementById('ko-score1').value = d.score1 !== undefined ? d.score1 : '';
  document.getElementById('ko-score2').value = d.score2 !== undefined ? d.score2 : '';

  // Extra time
  document.getElementById('ko-et1').value = d.et1 !== undefined ? d.et1 : '';
  document.getElementById('ko-et2').value = d.et2 !== undefined ? d.et2 : '';

  // Penalties
  document.getElementById('ko-pen1').value = d.pen1 !== undefined ? d.pen1 : '';
  document.getElementById('ko-pen2').value = d.pen2 !== undefined ? d.pen2 : '';

  updateModalStages(); // show/hide ET + pens based on current values
  document.getElementById('ko-modal-overlay').classList.add('open');
  setTimeout(() => document.getElementById('ko-score1').focus(), 80);
}

// Decides whether to reveal the Extra Time and Penalties rows
function updateModalStages() {
  const s1 = document.getElementById('ko-score1').value;
  const s2 = document.getElementById('ko-score2').value;
  const etRow  = document.getElementById('ko-et-row');
  const penRow = document.getElementById('ko-pen-row');

  const bothFilled = s1 !== '' && s2 !== '';
  const is90Draw = bothFilled && parseInt(s1) === parseInt(s2);

  // Show ET only if 90min is a draw
  if (is90Draw) {
    etRow.style.display = 'flex';
  } else {
    etRow.style.display = 'none';
    penRow.style.display = 'none';
    // clear ET + pen values when not needed
    document.getElementById('ko-et1').value = '';
    document.getElementById('ko-et2').value = '';
    document.getElementById('ko-pen1').value = '';
    document.getElementById('ko-pen2').value = '';
    return;
  }

  // Now check ET for a draw → show pens
  const e1 = document.getElementById('ko-et1').value;
  const e2 = document.getElementById('ko-et2').value;
  const etFilled = e1 !== '' && e2 !== '';
  const isETDraw = etFilled && parseInt(e1) === parseInt(e2);

  if (isETDraw) {
    penRow.style.display = 'flex';
  } else {
    penRow.style.display = 'none';
    document.getElementById('ko-pen1').value = '';
    document.getElementById('ko-pen2').value = '';
  }
}

function saveKOResult() {
  if (!currentKOMatch) return;
  const existing = state.knockout[currentKOMatch] || {};
  const s1 = document.getElementById('ko-score1').value;
  const s2 = document.getElementById('ko-score2').value;
  const e1 = document.getElementById('ko-et1').value;
  const e2 = document.getElementById('ko-et2').value;
  const p1 = document.getElementById('ko-pen1').value;
  const p2 = document.getElementById('ko-pen2').value;

  state.knockout[currentKOMatch] = {
    team1: existing.team1 || 'TBD',
    flag1: existing.flag1 || '',
    team2: existing.team2 || 'TBD',
    flag2: existing.flag2 || '',
    score1: s1 !== '' && !isNaN(parseInt(s1)) ? parseInt(s1) : undefined ,
    score2: s2 !== '' ? parseInt(s2) : '',
    et1: e1 !== '' ? parseInt(e1) : '',
    et2: e2 !== '' ? parseInt(e2) : '',
    pen1: p1 !== '' ? parseInt(p1) : '',
    pen2: p2 !== '' ? parseInt(p2) : '',
  };
  saveState();
  closeKOModal();
  renderBracket(); // re-render propagates winner to next round
  showToast('Match saved!');
}

function clearKOResult() {
  if (!currentKOMatch) return;
  if (state.knockout[currentKOMatch]) {
    state.knockout[currentKOMatch].score1 = '';
    state.knockout[currentKOMatch].score2 = '';
    state.knockout[currentKOMatch].et1 = '';
    state.knockout[currentKOMatch].et2 = '';
    state.knockout[currentKOMatch].pen1 = '';
    state.knockout[currentKOMatch].pen2 = '';
  }
  saveState();
  closeKOModal();
  renderBracket();
}

function closeKOModal() {
  document.getElementById('ko-modal-overlay').classList.remove('open');
  currentKOMatch = null;
}

function closeKOModalOverlay(e) {
  if (e.target === document.getElementById('ko-modal-overlay')) closeKOModal();
}

// ─── STATS ─────────────────────────────────────────────────────────────────

function calcTournamentStats() {
  let totalGoals = 0, totalMatches = 0, totalPlayed = 0;
  Object.keys(GROUPS).forEach(gk => {
    GROUPS[gk].matches.forEach((_, mi) => {
      totalMatches++;
      const sc = state.scores[`${gk}-${mi}`];
      if (sc && sc.h !== '' && sc.a !== '') {
        totalPlayed++;
        totalGoals += (parseInt(sc.h) || 0) + (parseInt(sc.a) || 0);
      }
    });
  });
  return { totalGoals, totalMatches, totalPlayed, avg: totalPlayed > 0 ? (totalGoals / totalPlayed).toFixed(2) : '—' };
}

function renderStats() {
  const stats = calcTournamentStats();
  document.getElementById('stats-grid').innerHTML = `
    <div class="stat-card"><div class="stat-value">${stats.totalGoals}</div><div class="stat-label">Total Goals</div></div>
    <div class="stat-card"><div class="stat-value">${stats.totalPlayed}</div><div class="stat-label">Matches Played</div></div>
    <div class="stat-card"><div class="stat-value">${stats.avg}</div><div class="stat-label">Goals per Game</div></div>
    <div class="stat-card"><div class="stat-value">${stats.totalMatches - stats.totalPlayed}</div><div class="stat-label">Remaining</div></div>`;
  renderScorers();
}

function renderScorers() {
  const tbody = document.getElementById('scorers-body');
  const sorted = [...state.scorers].sort((a, b) => b.goals - a.goals);
  tbody.innerHTML = sorted.length === 0
    ? '<tr><td colspan="5" style="text-align:center;color:var(--muted);padding:20px">No scorers added yet</td></tr>'
    : sorted.map((s, i) => `<tr>
        <td style="color:var(--muted);font-weight:700">${i + 1}</td>
        <td style="font-weight:600">${s.name}</td>
        <td style="color:var(--muted)">${s.team}</td>
        <td style="text-align:center"><span class="scorer-goals">⚽ ${s.goals}</span></td>
        <td style="text-align:center"><button onclick="removeScorer(${i})" style="background:none;border:none;color:var(--muted);cursor:pointer;font-size:16px">×</button></td>
      </tr>`).join('');
}

function addScorer() {
  const name = document.getElementById('scorer-name').value.trim();
  const team = document.getElementById('scorer-team').value.trim();
  const goals = parseInt(document.getElementById('scorer-goals').value);
  if (!name || isNaN(goals)) return;
  const existing = state.scorers.find(s => s.name.toLowerCase() === name.toLowerCase());
  if (existing) { existing.goals = goals; existing.team = team || existing.team; }
  else state.scorers.push({ name, team, goals });
  saveState(); renderScorers();
  document.getElementById('scorer-name').value = '';
  document.getElementById('scorer-team').value = '';
  document.getElementById('scorer-goals').value = '';
  showToast('Scorer updated!');
}

function removeScorer(idx) {
  const sorted = [...state.scorers].sort((a, b) => b.goals - a.goals);
  state.scorers = state.scorers.filter(s => s !== sorted[idx]);
  saveState(); renderScorers();
}

// ─── UI ────────────────────────────────────────────────────────────────────

function showPanel(id) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.getElementById('panel-' + id).classList.add('active');
  event.target.classList.add('active');
  if (id === 'bracket') renderBracket();
  if (id === 'stats') renderStats();
}

let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = '✓ ' + msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 1800);
}

// ─── INIT ──────────────────────────────────────────────────────────────────
autoFillBracket();
renderGroups();