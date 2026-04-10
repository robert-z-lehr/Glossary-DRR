const STORAGE_KEY = 'course_atlas_ui_state_v2';
const FEEDBACK_EMAIL = 'robert.z.lehr@utexas.edu';

const DATA = {
  drr: {
    id: 'drr',
    name: 'Decision, Risk, and Reliability',
    description: 'Core concepts for probability, decision analysis, reliability, and Bayesian reasoning organized by sub-domain.',
    subdomains: [
      {
        name: 'Probability Fundamentals',
        entries: [
          {
            term: 'Expected Value',
            definition: 'Probability-weighted average of all possible outcomes of a random variable.',
            notation: 'E[X]',
            example: 'Expected remediation cost equals the failure cost multiplied by the probability of failure.',
            analogy: 'The long-run average result if the same gamble were repeated many times.',
            failureModes: 'TBD',
            visualization: 'TBD'
          },
          {
            term: 'Conditional Probability',
            definition: 'Probability of event A after learning that event B has occurred.',
            notation: 'P(A|B)',
            example: 'Probability a shaft is defective given that the inspection test failed.',
            analogy: 'Updating your rain estimate after you already see dark clouds.',
            failureModes: 'TBD',
            visualization: 'TBD'
          },
          {
            term: 'Variance',
            definition: 'Measure of how far outcomes tend to spread around the mean.',
            notation: 'Var(X), σ²',
            example: 'Two designs can have the same expected cost but very different spread in possible losses.',
            analogy: 'How wide or narrow the cloud of outcomes is around the average.',
            failureModes: 'TBD',
            visualization: 'TBD'
          }
        ]
      },
      {
        name: 'Decision Analysis',
        entries: [
          {
            term: 'EVPI',
            definition: 'Expected Value of Perfect Information: the maximum worth of learning the true state before deciding.',
            notation: 'EVPI',
            example: 'Value of knowing which demand state will occur before choosing a design alternative.',
            analogy: 'Knowing tomorrow’s exact weather before planning an outdoor event.',
            failureModes: 'TBD',
            visualization: 'TBD'
          },
          {
            term: 'EVSI',
            definition: 'Expected Value of Sample Information: the worth of imperfect but informative data before deciding.',
            notation: 'EVSI',
            example: 'Value of running a pilot test before making a full investment decision.',
            analogy: 'Paying for a decent forecast instead of having perfect foresight.',
            failureModes: 'TBD',
            visualization: 'TBD'
          },
          {
            term: 'Decision Tree',
            definition: 'Graphical structure that lays out decisions, uncertain events, and resulting outcomes in sequence.',
            notation: '□ decision node, ○ chance node',
            example: 'Used to compare design actions when failure scenarios branch into different costs.',
            analogy: 'A map of choices and forks showing what can happen after each move.',
            failureModes: 'TBD',
            visualization: 'TBD'
          }
        ]
      },
      {
        name: 'Reliability and Bayes',
        entries: [
          {
            term: 'Reliability',
            definition: 'Probability that a system performs its intended function for a stated period and condition.',
            notation: 'R(t)',
            example: 'Reliability of a component surviving the service interval without failure.',
            analogy: 'The chance a tool keeps working through the job without breaking.',
            failureModes: 'TBD',
            visualization: 'TBD'
          },
          {
            term: 'Failure Probability',
            definition: 'Probability that a system or component does not meet the required performance condition.',
            notation: 'P_f',
            example: 'Probability that load exceeds resistance in a structural reliability problem.',
            analogy: 'Chance that the bad outcome happens instead of the acceptable one.',
            failureModes: 'TBD',
            visualization: 'TBD'
          },
          {
            term: 'Bayes’ Theorem',
            definition: 'Rule for updating prior probabilities using new evidence or data.',
            notation: 'P(A|B) = P(B|A)P(A)/P(B)',
            example: 'Updating the probability a unit is defective after receiving a test result.',
            analogy: 'Starting with an initial belief and then revising it when new clues arrive.',
            failureModes: 'TBD',
            visualization: 'TBD'
          }
        ]
      }
    ]
  },
  airflow: {
    id: 'airflow',
    name: 'Airflow Modeling in Building Design',
    description: 'Key airflow and CFD concepts for building design, grouped by governing physics, modeling setup, and numerical interpretation.',
    subdomains: [
      {
        name: 'Governing Physics',
        entries: [
          {
            term: 'Continuity Equation',
            definition: 'Mass conservation statement requiring that mass is neither created nor destroyed within the flow field.',
            notation: '∂ρ/∂t + ∇·(ρV) = 0',
            example: 'Used to ensure inflow, outflow, and accumulation are balanced in a CFD model.',
            analogy: 'What flows into a control volume minus what flows out must match what builds up inside.',
            failureModes: 'TBD',
            visualization: 'TBD'
          },
          {
            term: 'Navier–Stokes Equations',
            definition: 'Momentum conservation equations describing how velocity changes due to pressure, viscosity, body forces, and inertia.',
            notation: 'ρ DV/Dt = -∇p + μ∇²V + body forces',
            example: 'Core equations solved in room airflow simulations with supply and return vents.',
            analogy: 'A force balance for moving fluid parcels.',
            failureModes: 'TBD',
            visualization: 'TBD'
          },
          {
            term: 'Reynolds Number',
            definition: 'Dimensionless ratio comparing inertial effects to viscous effects in a flow.',
            notation: 'Re = ρVL/μ',
            example: 'Helps judge whether a flow regime is likely laminar or turbulent.',
            analogy: 'A quick indicator of whether flow moves smoothly or mixes aggressively.',
            failureModes: 'TBD',
            visualization: 'TBD'
          }
        ]
      },
      {
        name: 'Boundary Conditions and Setup',
        entries: [
          {
            term: 'Boundary Condition',
            definition: 'Specified flow, temperature, or pressure information applied at the limits of the computational domain.',
            notation: 'Velocity inlet, pressure outlet, wall, symmetry',
            example: 'Assigning supply diffuser velocity and return pressure conditions in AirPak.',
            analogy: 'The instructions you give the model at the edges so it knows how the system connects to the outside world.',
            failureModes: 'TBD',
            visualization: 'TBD'
          },
          {
            term: 'Control Volume',
            definition: 'Small finite region of space over which the governing equations are discretized and solved.',
            notation: 'Cell or finite volume',
            example: 'Each mesh cell stores pressure, velocity, and temperature estimates.',
            analogy: 'A tiny bookkeeping box that tracks what enters, leaves, and changes inside it.',
            failureModes: 'TBD',
            visualization: 'TBD'
          },
          {
            term: 'Mesh',
            definition: 'Spatial subdivision of the physical domain into cells used for numerical solution.',
            notation: 'Structured or unstructured grid',
            example: 'Refining the mesh near diffusers or occupants to capture sharper gradients.',
            analogy: 'A pixel grid for physics, where finer pixels reveal more detail.',
            failureModes: 'TBD',
            visualization: 'TBD'
          }
        ]
      },
      {
        name: 'Turbulence and Numerical Interpretation',
        entries: [
          {
            term: 'Turbulence Model',
            definition: 'Approximate closure model used to represent the effects of turbulent fluctuations on the mean flow solution.',
            notation: 'k-ε, k-ω, RNG',
            example: 'Choosing k-ε to model indoor mixing ventilation in a room simulation.',
            analogy: 'A shorthand method for representing all the small chaotic swirls you are not resolving directly.',
            failureModes: 'TBD',
            visualization: 'TBD'
          },
          {
            term: 'Upwind Scheme',
            definition: 'Discretization approach that uses upstream information to evaluate transported quantities at cell faces.',
            notation: 'First-order upwind, second-order upwind',
            example: 'Used to stabilize convection-dominated flow calculations.',
            analogy: 'Estimating what crosses a boundary by looking at where the fluid just came from.',
            failureModes: 'TBD',
            visualization: 'TBD'
          },
          {
            term: 'Convergence',
            definition: 'Condition in which iterative solution updates become sufficiently small and residuals drop to acceptable levels.',
            notation: 'Residual trend',
            example: 'Checking residual histories and stable output values before accepting a CFD result.',
            analogy: 'The point where repeated corrections stop meaningfully changing the answer.',
            failureModes: 'TBD',
            visualization: 'TBD'
          }
        ]
      }
    ]
  }
};

const EXTRA_COLUMNS = [
  { key: 'notation', label: 'Notation / Symbols' },
  { key: 'example', label: 'Example' },
  { key: 'analogy', label: 'Analogy' },
  { key: 'failureModes', label: 'Failure Modes' },
  { key: 'visualization', label: 'Visualization' }
];

const courseSelect = document.getElementById('courseSelect');
const courseTitle = document.getElementById('courseTitle');
const courseDescription = document.getElementById('courseDescription');
const searchInput = document.getElementById('searchInput');
const columnToggleGroup = document.getElementById('columnToggleGroup');
const subdomainAccordion = document.getElementById('subdomainAccordion');
const searchResultsSection = document.getElementById('searchResultsSection');
const searchResultsBody = document.getElementById('searchResultsBody');
const searchTableHeadRow = document.getElementById('searchTableHeadRow');
const resultCount = document.getElementById('resultCount');
const pdfBtn = document.getElementById('downloadPdf');
const feedbackForm = document.getElementById('feedbackForm');
const feedbackInput = document.getElementById('feedbackInput');
const feedbackStatus = document.getElementById('feedbackStatus');

let uiState = loadUiState();

function loadUiState() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return {
      course: parsed?.course && DATA[parsed.course] ? parsed.course : 'drr',
      search: typeof parsed?.search === 'string' ? parsed.search : '',
      visibleColumns: Array.isArray(parsed?.visibleColumns)
        ? parsed.visibleColumns.filter(key => EXTRA_COLUMNS.some(col => col.key === key))
        : [],
      openSubdomains: Array.isArray(parsed?.openSubdomains) ? parsed.openSubdomains : []
    };
  } catch (_) {
    return { course: 'drr', search: '', visibleColumns: [], openSubdomains: [] };
  }
}

function saveUiState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(uiState));
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function getActiveCourse() {
  return DATA[uiState.course];
}

function populateCourseSelect() {
  courseSelect.innerHTML = Object.values(DATA)
    .map(course => `<option value="${course.id}">${course.name}</option>`)
    .join('');
  courseSelect.value = uiState.course;
}

function getVisibleColumnDefs() {
  return [
    { key: 'term', label: 'Term / Concept' },
    { key: 'definition', label: 'Definition' },
    ...EXTRA_COLUMNS.filter(col => uiState.visibleColumns.includes(col.key))
  ];
}

function renderHeaderRow(target) {
  target.innerHTML = getVisibleColumnDefs()
    .map(col => `<th data-col="${escapeHtml(col.key)}">${escapeHtml(col.label)}</th>`)
    .join('');
}

function renderCellContent(entry, key, subdomainName) {
  if (key === 'term') {
    return `
      <div class="term-cell">${escapeHtml(entry.term)}</div>
      <div class="term-meta">${escapeHtml(getActiveCourse().name)} · ${escapeHtml(subdomainName)}</div>
    `;
  }
  return escapeHtml(entry[key] || '');
}

function buildRowHtml(entry, subdomainName) {
  return getVisibleColumnDefs().map(col => `
    <td data-col="${escapeHtml(col.key)}">${renderCellContent(entry, col.key, subdomainName)}</td>
  `).join('');
}

function renderSubdomainAccordion() {
  const course = getActiveCourse();
  subdomainAccordion.innerHTML = '';

  course.subdomains.forEach((subdomain, index) => {
    const slug = `${course.id}::${subdomain.name}`;
    const isOpen = uiState.openSubdomains.includes(slug) || (index === 0 && !uiState.openSubdomains.length);
    const accordion = document.createElement('section');
    accordion.className = `accordion${isOpen ? ' open' : ''}`;

    const button = document.createElement('button');
    button.className = 'accordion-header';
    button.type = 'button';
    button.setAttribute('aria-expanded', String(isOpen));
    button.innerHTML = `
      <span class="accordion-title-wrap">
        <span><strong>${escapeHtml(subdomain.name)}</strong></span>
        <span class="accordion-subtitle">${subdomain.entries.length} term${subdomain.entries.length === 1 ? '' : 's'}</span>
      </span>
      <span class="chevron">⌄</span>
    `;

    button.addEventListener('click', () => {
      const exists = uiState.openSubdomains.includes(slug);
      uiState.openSubdomains = exists
        ? uiState.openSubdomains.filter(item => item !== slug)
        : [...uiState.openSubdomains, slug];
      saveUiState();
      renderSubdomainAccordion();
    });

    const panel = document.createElement('div');
    panel.className = 'accordion-panel';

    const tableShell = document.createElement('div');
    tableShell.className = 'table-shell';
    const table = document.createElement('table');
    table.className = 'atlas-table';

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    renderHeaderRow(headerRow);
    thead.appendChild(headerRow);

    const tbody = document.createElement('tbody');
    subdomain.entries.forEach(entry => {
      const tr = document.createElement('tr');
      tr.innerHTML = buildRowHtml(entry, subdomain.name);
      tbody.appendChild(tr);
    });

    table.appendChild(thead);
    table.appendChild(tbody);
    tableShell.appendChild(table);
    panel.appendChild(tableShell);

    accordion.appendChild(button);
    accordion.appendChild(panel);
    subdomainAccordion.appendChild(accordion);
  });
}

function getSearchableRows() {
  const course = getActiveCourse();
  const rows = [];
  course.subdomains.forEach(subdomain => {
    subdomain.entries.forEach(entry => {
      rows.push({
        ...entry,
        subdomain: subdomain.name,
        course: course.name,
        haystack: [
          entry.term,
          entry.definition,
          entry.notation,
          entry.example,
          entry.analogy,
          entry.failureModes,
          entry.visualization,
          subdomain.name,
          course.name
        ].join(' ').toLowerCase()
      });
    });
  });
  return rows;
}

function renderSearchResults() {
  const query = uiState.search.trim().toLowerCase();
  if (!query) {
    searchResultsSection.hidden = true;
    searchResultsBody.innerHTML = '';
    resultCount.textContent = '';
    return;
  }

  const matches = getSearchableRows().filter(row => row.haystack.includes(query));
  searchResultsSection.hidden = false;
  renderHeaderRow(searchTableHeadRow);

  if (!matches.length) {
    searchResultsBody.innerHTML = `<tr><td colspan="${getVisibleColumnDefs().length}" class="empty-state">No matching rows found for “${escapeHtml(uiState.search)}”.</td></tr>`;
    resultCount.textContent = '0 matches';
    return;
  }

  searchResultsBody.innerHTML = matches.map(entry => `
    <tr>
      ${buildRowHtml(entry, entry.subdomain)}
    </tr>
  `).join('');

  resultCount.textContent = `${matches.length} match${matches.length === 1 ? '' : 'es'}`;
}

function render() {
  const course = getActiveCourse();
  courseSelect.value = course.id;
  searchInput.value = uiState.search;
  courseTitle.textContent = course.name;
  courseDescription.textContent = course.description;

  columnToggleGroup.querySelectorAll('input[type="checkbox"]').forEach(input => {
    input.checked = uiState.visibleColumns.includes(input.dataset.column);
  });

  renderSearchResults();
  renderSubdomainAccordion();
}

courseSelect.addEventListener('change', event => {
  uiState.course = event.target.value;
  uiState.search = '';
  uiState.openSubdomains = [];
  saveUiState();
  render();
});

searchInput.addEventListener('input', event => {
  uiState.search = event.target.value;
  saveUiState();
  renderSearchResults();
});

columnToggleGroup.addEventListener('change', event => {
  const key = event.target?.dataset?.column;
  if (!key) return;

  if (event.target.checked) {
    uiState.visibleColumns = EXTRA_COLUMNS
      .map(col => col.key)
      .filter(colKey => colKey === key || uiState.visibleColumns.includes(colKey));
  } else {
    uiState.visibleColumns = uiState.visibleColumns.filter(colKey => colKey !== key);
  }

  saveUiState();
  render();
});

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();
  const message = feedbackInput.value.trim();

  if (!message) {
    feedbackStatus.textContent = 'Enter feedback before sending.';
    return;
  }

  const subject = `Glossary feedback: ${getActiveCourse().name}`;
  const body = [
    `Course: ${getActiveCourse().name}`,
    '',
    'Feedback:',
    message
  ].join('\n');

  window.location.href = `mailto:${encodeURIComponent(FEEDBACK_EMAIL)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  feedbackStatus.textContent = 'Your email app should open with the feedback draft.';
});

pdfBtn.addEventListener('click', async () => {
  document.querySelectorAll('.accordion').forEach(section => section.classList.add('open'));

  const opt = {
    margin: [8, 8, 8, 8],
    filename: `${getActiveCourse().name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-atlas.pdf`,
    image: { type: 'jpeg', quality: 0.96 },
    html2canvas: { scale: 2, useCORS: true, scrollY: 0 },
    jsPDF: { unit: 'mm', format: 'a3', orientation: 'landscape' },
    pagebreak: { mode: ['css', 'legacy'] }
  };

  try {
    await html2pdf().set(opt).from(document.getElementById('atlasPage')).save();
  } finally {
    renderSubdomainAccordion();
  }
});

populateCourseSelect();
render();
