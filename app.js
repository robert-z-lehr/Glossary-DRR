const STORAGE_KEY = 'dr_atlas_rows_v1';

const columns = [
  'term', 'category', 'definition', 'notation', 'units', 'formula',
  'assumptions', 'recognition', 'layman', 'analogy', 'visual', 'example',
  'mistakes', 'related', 'worked', 'tools', 'references'
];

const starterRows = [
  {
    term: 'Expected Value',
    category: 'Probability / Decision Analysis',
    definition: 'Probability-weighted average of all possible outcomes of a random variable.',
    notation: 'E[X]',
    units: 'Same as X',
    formula: 'Discrete: E[X] = Σ x_i P(x_i)\nContinuous: E[X] = ∫ x f(x) dx',
    assumptions: 'Probabilities sum to 1. Outcomes are properly defined.',
    recognition: 'Use when asked for average outcome, expected cost, or rollback value.',
    layman: 'The long-run average if the situation were repeated many times.',
    analogy: 'Average winnings from repeatedly playing the same game.',
    visual: 'Distribution with a balance point / center of mass.',
    example: 'Expected remediation cost for out-of-spec shafts.',
    mistakes: 'Confusing expected value with the most likely value.',
    related: 'Variance; expected cost; decision tree',
    worked: 'If p = 0.05 and cost = $1,000,000, expected cost = $50,000.',
    tools: 'Calculator; Excel; Python',
    references: 'Ang & Tang; course notes'
  },
  {
    term: 'Conditional Probability',
    category: 'Probability',
    definition: 'Probability of event A given that event B has occurred.',
    notation: 'P(A|B)',
    units: 'Probability',
    formula: 'P(A|B) = P(A ∩ B) / P(B)',
    assumptions: 'P(B) > 0',
    recognition: 'Use after learning new information or conditioning on a scenario.',
    layman: 'The probability after you learn something relevant.',
    analogy: 'Chance of rain given dark clouds already appeared.',
    visual: 'Venn diagram with overlap inside event B.',
    example: 'Probability of Wisconsin-like behavior given a failed test shaft.',
    mistakes: 'Mixing up P(A|B) and P(B|A).',
    related: 'Bayes theorem; likelihood; posterior probability',
    worked: 'If P(A ∩ B)=0.2 and P(B)=0.5, then P(A|B)=0.4.',
    tools: 'Calculator; spreadsheet',
    references: 'Probability textbook; lecture slides'
  },
  {
    term: 'EVPI',
    category: 'Decision Analysis',
    definition: 'Expected Value of Perfect Information: the maximum value of learning the true state before deciding.',
    notation: 'EVPI',
    units: 'Usually dollars or utility units',
    formula: 'EVPI = Best expected cost without PI − Expected cost with PI',
    assumptions: 'Information is perfect and fully reveals the state of nature.',
    recognition: 'Use when asked what exact foresight would be worth.',
    layman: 'How much it is worth to know the answer in advance with certainty.',
    analogy: 'Knowing tomorrow’s weather perfectly before planning an outdoor event.',
    visual: 'Decision tree with state revealed before the action.',
    example: 'Knowing whether Atlanta behaves like LV or WI before choosing pump design.',
    mistakes: 'Confusing EVPI with EVSI; forgetting to choose the best action within each revealed state.',
    related: 'EVSI; decision tree; expected cost',
    worked: 'Compute best no-info decision, then compare to the weighted best contingent decisions.',
    tools: 'Decision tree; calculator; Excel',
    references: 'Decision analysis texts; class notes'
  }
];

const body = document.getElementById('atlasBody');
const addRowTopBtn = document.getElementById('addRowTop');
const addRowBottomBtn = document.getElementById('addRowBottom');
const resetBtn = document.getElementById('resetTable');
const pdfBtn = document.getElementById('downloadPdf');

function loadRows() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (Array.isArray(saved) && saved.length) return saved;
  } catch (_) {}
  return structuredClone(starterRows);
}

function saveRows(rows) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(rows));
}

function emptyRow() {
  return Object.fromEntries(columns.map(col => [col, '']));
}

let rows = loadRows();

function render() {
  body.innerHTML = '';

  rows.forEach((row, rowIndex) => {
    const tr = document.createElement('tr');

    columns.forEach((col) => {
      const td = document.createElement('td');
      const textarea = document.createElement('textarea');
      textarea.value = row[col] || '';
      textarea.placeholder = col;
      textarea.addEventListener('input', (event) => {
        rows[rowIndex][col] = event.target.value;
        saveRows(rows);
      });
      td.appendChild(textarea);
      tr.appendChild(td);
    });

    const actionTd = document.createElement('td');
    actionTd.className = 'row-actions no-print';

    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.className = 'icon-btn';
    deleteBtn.title = 'Delete row';
    deleteBtn.textContent = '🗑';
    deleteBtn.addEventListener('click', () => {
      rows.splice(rowIndex, 1);
      if (!rows.length) rows.push(emptyRow());
      saveRows(rows);
      render();
    });

    actionTd.appendChild(deleteBtn);
    tr.appendChild(actionTd);
    body.appendChild(tr);
  });
}

function addRow() {
  rows.push(emptyRow());
  saveRows(rows);
  render();
  const lastTextarea = body.querySelector('tr:last-child textarea');
  if (lastTextarea) lastTextarea.focus();
}

addRowTopBtn.addEventListener('click', addRow);
addRowBottomBtn.addEventListener('click', addRow);

resetBtn.addEventListener('click', () => {
  rows = structuredClone(starterRows);
  saveRows(rows);
  render();
});

pdfBtn.addEventListener('click', async () => {
  const element = document.getElementById('atlasPage');
  const topbar = document.querySelector('.topbar');
  topbar.classList.add('no-print');

  const opt = {
    margin: [8, 8, 8, 8],
    filename: 'decision-risk-reliability-atlas.pdf',
    image: { type: 'jpeg', quality: 0.96 },
    html2canvas: { scale: 2, useCORS: true, scrollY: 0 },
    jsPDF: { unit: 'mm', format: 'a3', orientation: 'landscape' },
    pagebreak: { mode: ['css', 'legacy'] }
  };

  try {
    await html2pdf().set(opt).from(element).save();
  } finally {
    topbar.classList.remove('no-print');
  }
});

render();
