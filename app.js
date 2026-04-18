const STORAGE_KEY = 'course_atlas_ui_state_v3';
const FEEDBACK_ENDPOINT = 'https://formsubmit.co/ajax/e70ba1417addd4ee0d1da193b96845f1';

const DATA = {
  drr: {
    id: 'drr',
    name: 'Decision, Risk, and Reliability',
    description: 'Core concepts for probability, decision analysis, reliability, and Bayesian reasoning organized by sub-domain.',
    subdomains: [
      { name: 'Bayesian Inference', entries: [
        { term: 'Bayes’ Theorem', definition: 'Rule for updating prior probabilities using new evidence or data.', notation: 'P(A|B) = P(B|A)P(A)/P(B)', example: 'Updating the probability a unit is defective after receiving a test result.', analogy: 'Starting with an initial belief and then revising it when new clues arrive.', failureModes: 'TBD', visualization: 'TBD' },
        { term: 'Conditional Independence', definition: 'Condition in which two variables are independent once a third variable is known.', notation: 'A ⫫ B | C', example: 'Sensor readings may become independent once the true operating state is conditioned on.', analogy: 'Two clues look related until you realize both are explained by the same hidden cause.', failureModes: 'TBD', visualization: 'TBD' },
        { term: 'Conjugate Prior', definition: 'Prior distribution chosen so the posterior remains in the same distribution family after updating.', notation: 'Prior/posterior family pairing', example: 'Using a beta prior with Bernoulli observations to obtain a beta posterior.', analogy: 'A container shape that still fits neatly after you add new ingredients.', failureModes: 'TBD', visualization: 'TBD' },
        { term: 'Likelihood', definition: 'Function that measures how plausible the observed data are under different parameter values.', notation: 'L(θ|data)', example: 'Comparing candidate failure probabilities based on observed inspection outcomes.', analogy: 'A score for how well each hypothesis explains what you saw.', failureModes: 'TBD', visualization: 'TBD' },
        { term: 'Marginal Probability', definition: 'Overall probability of an event after summing or integrating over all relevant conditions.', notation: 'P(B)', example: 'Total probability of a positive test across defective and non-defective cases.', analogy: 'The final total after combining all the branches that could lead to the same outcome.', failureModes: 'TBD', visualization: 'TBD' },
        { term: 'Posterior Distribution', definition: 'Updated probability distribution after combining prior beliefs with observed data.', notation: 'P(θ|data)', example: 'Updated distribution of failure probability after a sample of component tests.', analogy: 'Your new belief state after seeing evidence.', failureModes: 'TBD', visualization: 'TBD' },
        { term: 'Posterior Predictive Distribution', definition: 'Distribution of future observations after accounting for uncertainty in the updated parameter estimates.', notation: 'P(y_new|data)', example: 'Predicting future failures after updating the model with observed failure counts.', analogy: 'Forecasting tomorrow while carrying forward what you learned today.', failureModes: 'TBD', visualization: 'TBD' },
        { term: 'Prior Distribution', definition: 'Probability distribution representing beliefs about a parameter before current data are observed.', notation: 'P(θ)', example: 'Initial belief about defect rate before new testing begins.', analogy: 'Your starting map before you collect new measurements.', failureModes: 'TBD', visualization: 'TBD' },
        { term: 'Sequential Updating', definition: 'Process of repeatedly updating beliefs as new data arrive over time.', notation: 'Posterior_t → Prior_t+1', example: 'Revising reliability estimates each time a new inspection batch is completed.', analogy: 'Carrying your latest corrected estimate into the next round of learning.', failureModes: 'TBD', visualization: 'TBD' },
        { term: 'Sensitivity and Specificity', definition: 'Metrics describing how well a diagnostic test identifies true positives and true negatives.', notation: 'Sensitivity = P(+|D), Specificity = P(-|¬D)', example: 'Characterizing inspection test accuracy before applying Bayes’ theorem.', analogy: 'How good a detector is at catching what matters without crying wolf too often.', failureModes: 'TBD', visualization: 'TBD' }
      ]},
      { name: 'Decision Analysis', entries: [
        { term: 'Alternative', definition: 'Candidate action or option available to the decision-maker.', notation: 'a_i', example: 'Choosing among multiple design concepts for a drainage system.', analogy: 'The menu of moves you can choose from before uncertainty unfolds.', failureModes: 'TBD', visualization: 'TBD' },
        { term: 'Decision Criterion', definition: 'Rule used to rank or choose between alternatives.', notation: 'Arg min cost or arg max utility', example: 'Selecting the option with the minimum expected lifecycle cost.', analogy: 'The rulebook that tells you what counts as best.', failureModes: 'TBD', visualization: 'TBD' },
        { term: 'Decision Tree', definition: 'Graphical structure that lays out decisions, uncertain events, and resulting outcomes in sequence.', notation: '□ decision node, ○ chance node', example: 'Used to compare design actions when failure scenarios branch into different costs.', analogy: 'A map of choices and forks showing what can happen after each move.', failureModes: 'TBD', visualization: 'TBD' },
        { term: 'Dominance', definition: 'Condition in which one alternative is at least as good as another in all relevant respects and strictly better in at least one.', notation: 'A dominates B', example: 'Discarding a strategy that has higher cost and lower benefit under every state.', analogy: 'One option beats another across the board.', failureModes: 'TBD', visualization: 'TBD' },
        { term: 'Expected Monetary Value', definition: 'Expected value of financial outcomes associated with a decision.', notation: 'EMV', example: 'Expected project cost after weighting each scenario by its probability.', analogy: 'Average dollars you would expect over many repetitions.', failureModes: 'TBD', visualization: 'TBD' },
        { term: 'Expected Opportunity Loss', definition: 'Expected regret from not having chosen the best action for each realized state.', notation: 'EOL', example: 'Comparing alternatives by the average forgone benefit relative to perfect hindsight.', analogy: 'Average amount you kick yourself for not having chosen differently.', failureModes: 'TBD', visualization: 'TBD' },
        { term: 'Expected Value of Perfect Information', definition: 'Maximum value of learning the true state before deciding.', notation: 'EVPI', example: 'Value of knowing which demand state will occur before choosing a design alternative.', analogy: 'Knowing tomorrow’s exact weather before planning an outdoor event.', failureModes: 'TBD', visualization: 'TBD' },
        { term: 'Expected Value of Sample Information', definition: 'Value of imperfect but informative data collected before making a decision.', notation: 'EVSI', example: 'Value of running a pilot test before making a full investment decision.', analogy: 'Paying for a forecast that is useful but not flawless.', failureModes: 'TBD', visualization: 'TBD' },
        { term: 'Rollback Analysis', definition: 'Backward evaluation of a decision tree by simplifying chance and decision nodes from right to left.', notation: 'Fold-back procedure', example: 'Collapsing each branch to select the minimum expected cost path.', analogy: 'Solving a maze from the end back toward the entrance.', failureModes: 'TBD', visualization: 'TBD' },
        { term: 'State of Nature', definition: 'Future uncertain condition that affects outcomes but is not controlled by the decision-maker.', notation: 's_j', example: 'Whether demand is low, medium, or high after a facility is built.', analogy: 'The world’s move after you have already made yours.', failureModes: 'TBD', visualization: 'TBD' }
      ]},
      { name: 'Probability Fundamentals', entries: [
        { term: 'Bernoulli Random Variable', definition: 'Binary random variable that takes value 1 for success and 0 for failure.', notation: 'X ~ Bernoulli(p)', example: 'Modeling pass or fail for a component test.', analogy: 'A one-shot yes-or-no outcome.', failureModes: 'TBD', visualization: 'TBD' },
        { term: 'Binomial Distribution', definition: 'Distribution of the number of successes in a fixed number of independent Bernoulli trials.', notation: 'X ~ Bin(n,p)', example: 'Number of failed components in a batch of 20 tests.', analogy: 'Counting how many times success appears in repeated coin flips.', failureModes: 'TBD', visualization: 'TBD' },
        { term: 'Conditional Probability', definition: 'Probability of event A after learning that event B has occurred.', notation: 'P(A|B)', example: 'Probability a shaft is defective given that the inspection test failed.', analogy: 'Updating your rain estimate after you already see dark clouds.', failureModes: 'TBD', visualization: 'TBD' },
        { term: 'Covariance', definition: 'Measure of how two random variables vary together around their means.', notation: 'Cov(X,Y)', example: 'Assessing whether traffic demand and flood damage cost tend to rise together.', analogy: 'Whether two quantities lean upward or downward together.', failureModes: 'TBD', visualization: 'TBD' },
        { term: 'Expected Value', definition: 'Probability-weighted average of all possible outcomes of a random variable.', notation: 'E[X]', example: 'Expected remediation cost equals the failure cost multiplied by the probability of failure.', analogy: 'The long-run average result if the same gamble were repeated many times.', failureModes: 'TBD', visualization: 'TBD' },
        { term: 'Independence', definition: 'Condition in which the occurrence of one event does not change the probability of the other.', notation: 'P(A∩B)=P(A)P(B)', example: 'Two component failures may be modeled independent if they do not share a causal mechanism.', analogy: 'One event does not nudge the odds of the other.', failureModes: 'TBD', visualization: 'TBD' },
        { term: 'Law of Total Probability', definition: 'Rule for computing an overall probability by partitioning across mutually exclusive conditions.', notation: 'P(B)=Σ P(B|A_i)P(A_i)', example: 'Overall test-positive rate found from defective and non-defective populations.', analogy: 'Adding up all the separate pathways that lead to the same destination.', failureModes: 'TBD', visualization: 'TBD' },
        { term: 'Normal Distribution', definition: 'Continuous bell-shaped distribution characterized by mean and standard deviation.', notation: 'X ~ N(μ,σ²)', example: 'Approximating measurement error in repeated instrument readings.', analogy: 'A symmetric mound where most outcomes cluster near the center.', failureModes: 'TBD', visualization: 'TBD' },
        { term: 'Poisson Distribution', definition: 'Distribution for the number of events occurring in a fixed interval when events happen independently at an average rate.', notation: 'X ~ Poisson(λ)', example: 'Modeling number of failures occurring in a month.', analogy: 'Counting random arrivals over a window of time.', failureModes: 'TBD', visualization: 'TBD' },
        { term: 'Variance', definition: 'Measure of how far outcomes tend to spread around the mean.', notation: 'Var(X), σ²', example: 'Two designs can have the same expected cost but very different spread in possible losses.', analogy: 'How wide or narrow the cloud of outcomes is around the average.', failureModes: 'TBD', visualization: 'TBD' }
      ]},
      { name: 'Reliability and Risk Metrics', entries: [
        { term: 'Consequence', definition: 'Magnitude of loss, damage, or harm resulting from an adverse event.', notation: 'C', example: 'Direct repair cost plus downtime after a bridge component failure.', analogy: 'How bad it is if the unwanted outcome happens.', failureModes: 'TBD', visualization: 'TBD' },
        { term: 'Failure Probability', definition: 'Probability that a system or component does not meet the required performance condition.', notation: 'P_f', example: 'Probability that load exceeds resistance in a structural reliability problem.', analogy: 'Chance that the bad outcome happens instead of the acceptable one.', failureModes: 'TBD', visualization: 'TBD' },
        { term: 'Hazard Rate', definition: 'Instantaneous rate of failure at a given time conditional on survival up to that time.', notation: 'h(t)', example: 'Tracking whether failure risk rises as an asset ages.', analogy: 'How sharply danger is increasing right now, given that the system has lasted so far.', failureModes: 'TBD', visualization: 'TBD' },
        { term: 'Mean Time Between Failures', definition: 'Average elapsed operating time between successive failures of a repairable system.', notation: 'MTBF', example: 'Typical operating time between pump failures in a utility system.', analogy: 'Average spacing between breakdowns.', failureModes: 'TBD', visualization: 'TBD' },
        { term: 'Mean Time To Failure', definition: 'Average time until failure for a nonrepairable component or system.', notation: 'MTTF', example: 'Expected lifetime of a sensor before it fails permanently.', analogy: 'Average lifespan until first breakdown.', failureModes: 'TBD', visualization: 'TBD' },
        { term: 'Reliability', definition: 'Probability that a system performs its intended function for a stated period and condition.', notation: 'R(t)', example: 'Reliability of a component surviving the service interval without failure.', analogy: 'The chance a tool keeps working through the job without breaking.', failureModes: 'TBD', visualization: 'TBD' },
        { term: 'Resistance', definition: 'Capacity of a system or component to withstand load or demand without failure.', notation: 'R', example: 'Material strength resisting the applied structural load.', analogy: 'How much push the system can absorb before giving way.', failureModes: 'TBD', visualization: 'TBD' },
        { term: 'Risk', definition: 'Combination of the likelihood of an adverse event and the consequence if it occurs.', notation: 'Often approximated as P × C', example: 'Expected annualized damage cost from flooding at a site.', analogy: 'A blend of how likely something bad is and how severe it would be.', failureModes: 'TBD', visualization: 'TBD' },
        { term: 'Risk Matrix', definition: 'Qualitative or semi-quantitative chart used to classify risk by probability and consequence levels.', notation: 'Likelihood × consequence grid', example: 'Placing hazards into low, medium, and high risk categories.', analogy: 'A heat map for danger levels.', failureModes: 'TBD', visualization: 'TBD' },
        { term: 'Safety Factor', definition: 'Ratio of available strength or capacity to required load or demand.', notation: 'FS = capacity / demand', example: 'Checking whether design resistance is sufficiently above expected load.', analogy: 'The cushion between what the system can handle and what it must handle.', failureModes: 'TBD', visualization: 'TBD' }
      ]}
    ]
  },
  airflow: {
    id: 'airflow',
    name: 'Airflow Modeling in Building Design',
    description: 'Key airflow and CFD concepts for building design, grouped by governing physics, modeling setup, and numerical interpretation.',
    subdomains: [
      { name: 'Governing Physics', entries: [
        { term: 'Continuity Equation', definition: 'Mass conservation statement requiring that mass is neither created nor destroyed within the flow field.', notation: '∂ρ/∂t + ∇·(ρV) = 0', example: 'Used to ensure inflow, outflow, and accumulation are balanced in a CFD model.', analogy: 'What flows into a control volume minus what flows out must match what builds up inside.', failureModes: 'TBD', visualization: 'TBD' },
        { term: 'Navier–Stokes Equations', definition: 'Momentum conservation equations describing how velocity changes due to pressure, viscosity, body forces, and inertia.', notation: 'ρ DV/Dt = -∇p + μ∇²V + body forces', example: 'Core equations solved in room airflow simulations with supply and return vents.', analogy: 'A force balance for moving fluid parcels.', failureModes: 'TBD', visualization: 'TBD' },
        { term: 'Reynolds Number', definition: 'Dimensionless ratio comparing inertial effects to viscous effects in a flow.', notation: 'Re = ρVL/μ', example: 'Helps judge whether a flow regime is likely laminar or turbulent.', analogy: 'A quick indicator of whether flow moves smoothly or mixes aggressively.', failureModes: 'TBD', visualization: 'TBD' }
      ]},
      { name: 'Boundary Conditions and Setup', entries: [
        { term: 'Boundary Condition', definition: 'Specified flow, temperature, or pressure information applied at the limits of the computational domain.', notation: 'Velocity inlet, pressure outlet, wall, symmetry', example: 'Assigning supply diffuser velocity and return pressure conditions in AirPak.', analogy: 'The instructions you give the model at the edges so it knows how the system connects to the outside world.', failureModes: 'TBD', visualization: 'TBD' },
        { term: 'Control Volume', definition: 'Small finite region of space over which the governing equations are discretized and solved.', notation: 'Cell or finite volume', example: 'Each mesh cell stores pressure, velocity, and temperature estimates.', analogy: 'A tiny bookkeeping box that tracks what enters, leaves, and changes inside it.', failureModes: 'TBD', visualization: 'TBD' },
        { term: 'Mesh', definition: 'Spatial subdivision of the physical domain into cells used for numerical solution.', notation: 'Structured or unstructured grid', example: 'Refining the mesh near diffusers or occupants to capture sharper gradients.', analogy: 'A pixel grid for physics, where finer pixels reveal more detail.', failureModes: 'TBD', visualization: 'TBD' }
      ]},
      { name: 'Turbulence and Numerical Interpretation', entries: [
        { term: 'Convergence', definition: 'Condition in which iterative solution updates become sufficiently small and residuals drop to acceptable levels.', notation: 'Residual trend', example: 'Checking residual histories and stable output values before accepting a CFD result.', analogy: 'The point where repeated corrections stop meaningfully changing the answer.', failureModes: 'TBD', visualization: 'TBD' },
        { term: 'Turbulence Model', definition: 'Approximate closure model used to represent the effects of turbulent fluctuations on the mean flow solution.', notation: 'k-ε, k-ω, RNG', example: 'Choosing k-ε to model indoor mixing ventilation in a room simulation.', analogy: 'A shorthand method for representing all the small chaotic swirls you are not resolving directly.', failureModes: 'TBD', visualization: 'TBD' },
        { term: 'Upwind Scheme', definition: 'Discretization approach that uses upstream information to evaluate transported quantities at cell faces.', notation: 'First-order upwind, second-order upwind', example: 'Used to stabilize convection-dominated flow calculations.', analogy: 'Estimating what crosses a boundary by looking at where the fluid just came from.', failureModes: 'TBD', visualization: 'TBD' }
      ]}
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

const ui = {
  courseSelect: document.getElementById('courseSelect'),
  courseTitle: document.getElementById('courseTitle'),
  courseDescription: document.getElementById('courseDescription'),
  searchInput: document.getElementById('searchInput'),
  columnToggleGroup: document.getElementById('columnToggleGroup'),
  glossaryColumnControl: document.getElementById('glossaryColumnControl'),
  subdomainAccordion: document.getElementById('subdomainAccordion'),
  searchResultsSection: document.getElementById('searchResultsSection'),
  searchResultsBody: document.getElementById('searchResultsBody'),
  searchTableHeadRow: document.getElementById('searchTableHeadRow'),
  resultCount: document.getElementById('resultCount'),
  pdfBtn: document.getElementById('downloadPdf'),
  feedbackForm: document.getElementById('feedbackForm'),
  feedbackInput: document.getElementById('feedbackInput'),
  feedbackStatus: document.getElementById('feedbackStatus'),
  sendFeedbackBtn: document.getElementById('sendFeedbackBtn'),
  tabs: Array.from(document.querySelectorAll('.tab-btn')),
  panels: {
    glossary: document.getElementById('glossaryPanel'),
    reference: document.getElementById('referencePanel'),
    learn: document.getElementById('learnPanel')
  },
  referenceTrack: document.getElementById('referenceTrack'),
  carouselShell: document.getElementById('carouselShell'),
  referencePrevBtn: document.getElementById('referencePrevBtn'),
  referenceNextBtn: document.getElementById('referenceNextBtn'),
  referenceCounter: document.getElementById('referenceCounter'),
  downloadSheetBtn: document.getElementById('downloadSheetBtn'),
  emailSheetBtn: document.getElementById('emailSheetBtn'),
  learnCards: document.getElementById('learnCards'),
  learnCount: document.getElementById('learnCount')
};

let state = loadUiState();
let referenceSheets = [];
let activeReferenceIndex = 0;
let dragState = { active: false, startX: 0, startScroll: 0 };
let scrollSnapTimeout = null;

function loadUiState() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return {
      course: parsed?.course && DATA[parsed.course] ? parsed.course : 'drr',
      search: typeof parsed?.search === 'string' ? parsed.search : '',
      activeTab: ['glossary', 'reference', 'learn'].includes(parsed?.activeTab) ? parsed.activeTab : 'glossary',
      visibleColumns: Array.isArray(parsed?.visibleColumns) ? parsed.visibleColumns.filter(key => EXTRA_COLUMNS.some(col => col.key === key)) : [],
      openSubdomains: Array.isArray(parsed?.openSubdomains) ? parsed.openSubdomains : []
    };
  } catch {
    return { course: 'drr', search: '', activeTab: 'glossary', visibleColumns: [], openSubdomains: [] };
  }
}

function saveUiState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function getActiveCourse() {
  return DATA[state.course];
}

function getFlattenedEntries() {
  const course = getActiveCourse();
  return course.subdomains.flatMap(subdomain => subdomain.entries.map(entry => ({ ...entry, subdomain: subdomain.name, course: course.name })));
}

function sortByTerm(entries) {
  return [...entries].sort((a, b) => a.term.localeCompare(b.term));
}

function getVisibleColumnDefs() {
  return [
    { key: 'term', label: 'Term / Concept' },
    { key: 'definition', label: 'Definition' },
    ...EXTRA_COLUMNS.filter(col => state.visibleColumns.includes(col.key))
  ];
}

function renderHeaderRow(target) {
  target.innerHTML = getVisibleColumnDefs().map(col => `<th data-col="${escapeHtml(col.key)}">${escapeHtml(col.label)}</th>`).join('');
}

function renderCellContent(entry, key, subdomainName) {
  if (key === 'term') {
    return `<div class="term-cell">${escapeHtml(entry.term)}</div><div class="term-meta">${escapeHtml(getActiveCourse().name)} · ${escapeHtml(subdomainName)}</div>`;
  }
  return escapeHtml(entry[key] || '');
}

function buildRowHtml(entry, subdomainName) {
  return getVisibleColumnDefs().map(col => `<td data-col="${escapeHtml(col.key)}">${renderCellContent(entry, col.key, subdomainName)}</td>`).join('');
}

function highlightMatch(text, query) {
  if (!query) return escapeHtml(text);
  const safe = escapeHtml(text);
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'ig');
  return safe.replace(regex, '<mark>$1</mark>');
}

function populateCourseSelect() {
  ui.courseSelect.innerHTML = Object.values(DATA).map(course => `<option value="${course.id}">${course.name}</option>`).join('');
  ui.courseSelect.value = state.course;
}

function setActiveTab(tab) {
  state.activeTab = tab;
  saveUiState();
  ui.tabs.forEach(btn => {
    const active = btn.dataset.tab === tab;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-selected', String(active));
  });
  Object.entries(ui.panels).forEach(([key, panel]) => {
    panel.hidden = key !== tab;
  });
  ui.glossaryColumnControl.hidden = tab !== 'glossary';
  handleSearchBehavior();
}

function renderGlossaryAccordion() {
  const course = getActiveCourse();
  ui.subdomainAccordion.innerHTML = '';
  course.subdomains.forEach((subdomain, index) => {
    const slug = `${course.id}::${subdomain.name}`;
    const isOpen = state.openSubdomains.includes(slug) || (index === 0 && !state.openSubdomains.length);
    const accordion = document.createElement('section');
    accordion.className = `accordion${isOpen ? ' open' : ''}`;
    accordion.innerHTML = `<button class="accordion-header" type="button" aria-expanded="${String(isOpen)}"><span class="accordion-title-wrap"><span><strong>${escapeHtml(subdomain.name)}</strong></span><span class="accordion-subtitle">${subdomain.entries.length} terms</span></span><span class="chevron">⌄</span></button><div class="accordion-panel"><div class="table-shell"><table class="atlas-table"><thead><tr></tr></thead><tbody></tbody></table></div></div>`;
    const headerBtn = accordion.querySelector('.accordion-header');
    headerBtn.addEventListener('click', () => {
      const exists = state.openSubdomains.includes(slug);
      state.openSubdomains = exists ? state.openSubdomains.filter(item => item !== slug) : [...state.openSubdomains, slug];
      saveUiState();
      renderGlossaryAccordion();
    });
    renderHeaderRow(accordion.querySelector('thead tr'));
    const tbody = accordion.querySelector('tbody');
    subdomain.entries.forEach(entry => {
      const tr = document.createElement('tr');
      tr.innerHTML = buildRowHtml(entry, subdomain.name);
      tbody.appendChild(tr);
    });
    ui.subdomainAccordion.appendChild(accordion);
  });
}

function renderGlossarySearchResults() {
  const query = state.search.trim().toLowerCase();
  if (!query) {
    ui.searchResultsSection.hidden = true;
    ui.searchResultsBody.innerHTML = '';
    ui.resultCount.textContent = '';
    return;
  }
  const matches = getFlattenedEntries().filter(entry => [entry.term, entry.definition, entry.notation, entry.example, entry.analogy, entry.failureModes, entry.visualization, entry.subdomain].join(' ').toLowerCase().includes(query));
  ui.searchResultsSection.hidden = false;
  renderHeaderRow(ui.searchTableHeadRow);
  if (!matches.length) {
    ui.searchResultsBody.innerHTML = `<tr><td colspan="${getVisibleColumnDefs().length}" class="empty-state">No matching rows found for “${escapeHtml(state.search)}”.</td></tr>`;
    ui.resultCount.textContent = '0 matches';
    return;
  }
  ui.searchResultsBody.innerHTML = matches.map(entry => `<tr>${buildRowHtml(entry, entry.subdomain)}</tr>`).join('');
  ui.resultCount.textContent = `${matches.length} matches`;
}

function buildReferenceSheets() {
  referenceSheets = sortByTerm(getFlattenedEntries()).map((entry, index) => ({ ...entry, sheetIndex: index }));
}

function renderReferenceCarousel() {
  buildReferenceSheets();
  const repeated = [...referenceSheets, ...referenceSheets, ...referenceSheets];
  ui.referenceTrack.innerHTML = repeated.map((sheet, renderIndex) => `
    <article class="reference-sheet" data-render-index="${renderIndex}" data-sheet-index="${sheet.sheetIndex}">
      <h4>${escapeHtml(sheet.term)}</h4>
      <div class="reference-subdomain">${escapeHtml(sheet.subdomain)} · ${escapeHtml(sheet.course)}</div>
      <div class="sheet-grid">
        <div class="sheet-block"><div class="sheet-label">Definition</div><div>${escapeHtml(sheet.definition)}</div></div>
        <div class="sheet-block"><div class="sheet-label">Notation / Symbols</div><div>${escapeHtml(sheet.notation)}</div></div>
        <div class="sheet-block"><div class="sheet-label">Example</div><div>${escapeHtml(sheet.example)}</div></div>
        <div class="sheet-block"><div class="sheet-label">Analogy</div><div>${escapeHtml(sheet.analogy)}</div></div>
        <div class="sheet-block"><div class="sheet-label">Failure Modes</div><div>${escapeHtml(sheet.failureModes)}</div></div>
        <div class="sheet-block"><div class="sheet-label">Visualization</div><div>${escapeHtml(sheet.visualization)}</div></div>
      </div>
    </article>
  `).join('');
  requestAnimationFrame(() => scrollToReferenceIndex(activeReferenceIndex, false, true));
}

function getReferenceCards() {
  return Array.from(ui.referenceTrack.querySelectorAll('.reference-sheet'));
}

function getCardWidth() {
  const card = getReferenceCards()[0];
  if (!card) return 0;
  const gap = 18;
  return card.getBoundingClientRect().width + gap;
}

function updateActiveReferenceFromScroll() {
  const cards = getReferenceCards();
  if (!cards.length) return;
  const shellRect = ui.carouselShell.getBoundingClientRect();
  const shellCenter = shellRect.left + shellRect.width / 2;
  let bestCard = cards[0];
  let bestDistance = Infinity;
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const center = rect.left + rect.width / 2;
    const distance = Math.abs(center - shellCenter);
    if (distance < bestDistance) {
      bestDistance = distance;
      bestCard = card;
    }
  });
  const sheetIndex = Number(bestCard.dataset.sheetIndex);
  activeReferenceIndex = sheetIndex;
  cards.forEach(card => card.classList.toggle('active', card === bestCard));
  ui.referenceCounter.textContent = `${activeReferenceIndex + 1} / ${referenceSheets.length}`;

  const total = referenceSheets.length;
  const renderIndex = Number(bestCard.dataset.renderIndex);
  const cardWidth = getCardWidth();
  if (!cardWidth || total === 0) return;
  if (renderIndex < total || renderIndex >= total * 2) {
    const middleIndex = total + sheetIndex;
    ui.carouselShell.scrollLeft = middleIndex * cardWidth;
  }
}

function scrollToReferenceIndex(index, smooth = true, centerBand = true) {
  const total = referenceSheets.length;
  if (!total) return;
  activeReferenceIndex = ((index % total) + total) % total;
  const cardWidth = getCardWidth();
  if (!cardWidth) return;
  const targetRenderIndex = (centerBand ? total : 0) + activeReferenceIndex;
  ui.carouselShell.scrollTo({ left: targetRenderIndex * cardWidth, behavior: smooth ? 'smooth' : 'auto' });
  setTimeout(updateActiveReferenceFromScroll, smooth ? 250 : 0);
}

function renderLearnCards() {
  const query = state.activeTab === 'learn' ? state.search.trim().toLowerCase() : '';
  const all = sortByTerm(getFlattenedEntries());
  const filtered = !query ? all : all.filter(entry => [entry.term, entry.definition, entry.analogy, entry.example, entry.subdomain].join(' ').toLowerCase().includes(query));
  ui.learnCards.innerHTML = filtered.map(entry => `
    <article class="learn-item ${query ? 'highlight-match' : ''}">
      <h4>${highlightMatch(entry.term, query)}</h4>
      <div class="learn-subdomain">${escapeHtml(entry.subdomain)}</div>
      <div class="learn-block"><div class="sheet-label">What it means</div><div class="learn-text">${highlightMatch(entry.definition, query)}</div></div>
      <div class="learn-block"><div class="sheet-label">Intuitive analogy</div><div class="learn-text">${highlightMatch(entry.analogy, query)}</div></div>
      <div class="learn-block"><div class="sheet-label">Concrete example</div><div class="learn-text">${highlightMatch(entry.example, query)}</div></div>
    </article>
  `).join('');
  ui.learnCount.textContent = `${filtered.length} concepts`;
}

function handleSearchBehavior() {
  if (state.activeTab === 'glossary') {
    renderGlossarySearchResults();
    renderLearnCards();
    return;
  }
  if (state.activeTab === 'reference') {
    const query = state.search.trim().toLowerCase();
    if (!query) {
      scrollToReferenceIndex(activeReferenceIndex, false, true);
      return;
    }
    const matchIndex = referenceSheets.findIndex(sheet => [sheet.term, sheet.definition, sheet.notation, sheet.example, sheet.analogy, sheet.failureModes, sheet.visualization, sheet.subdomain].join(' ').toLowerCase().includes(query));
    if (matchIndex >= 0) scrollToReferenceIndex(matchIndex, true, true);
    return;
  }
  if (state.activeTab === 'learn') {
    renderLearnCards();
  }
}

function renderCourse() {
  const course = getActiveCourse();
  ui.courseSelect.value = course.id;
  ui.courseTitle.textContent = course.name;
  ui.courseDescription.textContent = course.description;
  ui.searchInput.value = state.search;
  ui.columnToggleGroup.querySelectorAll('input[type="checkbox"]').forEach(input => {
    input.checked = state.visibleColumns.includes(input.dataset.column);
  });
  renderGlossaryAccordion();
  renderGlossarySearchResults();
  renderReferenceCarousel();
  renderLearnCards();
  setActiveTab(state.activeTab);
}

function downloadCurrentReferenceSheet() {
  const sheet = referenceSheets[activeReferenceIndex];
  if (!sheet) return;
  const wrapper = document.createElement('div');
  wrapper.style.padding = '24px';
  wrapper.innerHTML = `<h1>${escapeHtml(sheet.term)}</h1><p>${escapeHtml(sheet.subdomain)} · ${escapeHtml(sheet.course)}</p><h2>Definition</h2><p>${escapeHtml(sheet.definition)}</p><h2>Notation / Symbols</h2><p>${escapeHtml(sheet.notation)}</p><h2>Example</h2><p>${escapeHtml(sheet.example)}</p><h2>Analogy</h2><p>${escapeHtml(sheet.analogy)}</p><h2>Failure Modes</h2><p>${escapeHtml(sheet.failureModes)}</p><h2>Visualization</h2><p>${escapeHtml(sheet.visualization)}</p>`;
  html2pdf().set({ margin: [10,10,10,10], filename: `${sheet.term.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-reference-sheet.pdf`, image: { type: 'jpeg', quality: 0.96 }, html2canvas: { scale: 2 }, jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' } }).from(wrapper).save();
}

async function emailCurrentReferenceSheet() {
  const sheet = referenceSheets[activeReferenceIndex];
  if (!sheet) return;
  ui.feedbackStatus.textContent = 'Emailing sheet...';
  try {
    const response = await fetch(FEEDBACK_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        _subject: `Reference sheet: ${sheet.term}`,
        course: sheet.course,
        subdomain: sheet.subdomain,
        term: sheet.term,
        definition: sheet.definition,
        notation: sheet.notation,
        example: sheet.example,
        analogy: sheet.analogy,
        failureModes: sheet.failureModes,
        visualization: sheet.visualization,
        _template: 'table',
        _captcha: 'false'
      })
    });
    const result = await response.json();
    if (!response.ok || result?.success === false) throw new Error(result?.message || 'Email failed.');
    ui.feedbackStatus.textContent = 'Reference sheet emailed.';
  } catch (error) {
    ui.feedbackStatus.textContent = `Could not email sheet: ${String(error.message || error)}`;
  }
}

ui.courseSelect.addEventListener('change', event => {
  state.course = event.target.value;
  state.search = '';
  state.openSubdomains = [];
  activeReferenceIndex = 0;
  saveUiState();
  renderCourse();
});

ui.searchInput.addEventListener('input', event => {
  state.search = event.target.value;
  saveUiState();
  handleSearchBehavior();
});

ui.columnToggleGroup.addEventListener('change', event => {
  const key = event.target?.dataset?.column;
  if (!key) return;
  if (event.target.checked) {
    state.visibleColumns = EXTRA_COLUMNS.map(col => col.key).filter(colKey => colKey === key || state.visibleColumns.includes(colKey));
  } else {
    state.visibleColumns = state.visibleColumns.filter(colKey => colKey !== key);
  }
  saveUiState();
  renderGlossaryAccordion();
  renderGlossarySearchResults();
});

ui.tabs.forEach(btn => btn.addEventListener('click', () => setActiveTab(btn.dataset.tab)));

ui.referencePrevBtn.addEventListener('click', () => scrollToReferenceIndex(activeReferenceIndex - 1));
ui.referenceNextBtn.addEventListener('click', () => scrollToReferenceIndex(activeReferenceIndex + 1));
ui.downloadSheetBtn.addEventListener('click', downloadCurrentReferenceSheet);
ui.emailSheetBtn.addEventListener('click', emailCurrentReferenceSheet);

ui.carouselShell.addEventListener('scroll', () => {
  clearTimeout(scrollSnapTimeout);
  scrollSnapTimeout = setTimeout(updateActiveReferenceFromScroll, 80);
});
ui.carouselShell.addEventListener('pointerdown', event => {
  dragState = { active: true, startX: event.clientX, startScroll: ui.carouselShell.scrollLeft };
  ui.referenceTrack.classList.add('dragging');
});
window.addEventListener('pointermove', event => {
  if (!dragState.active) return;
  ui.carouselShell.scrollLeft = dragState.startScroll - (event.clientX - dragState.startX);
});
window.addEventListener('pointerup', () => {
  dragState.active = false;
  ui.referenceTrack.classList.remove('dragging');
});

ui.feedbackForm.addEventListener('submit', async event => {
  event.preventDefault();
  const message = ui.feedbackInput.value.trim();
  if (!message) {
    ui.feedbackStatus.textContent = 'Enter feedback before sending.';
    return;
  }
  ui.feedbackStatus.textContent = 'Sending...';
  ui.sendFeedbackBtn.disabled = true;
  try {
    const response = await fetch(FEEDBACK_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ _subject: `Glossary feedback: ${getActiveCourse().name}`, course: getActiveCourse().name, message, _template: 'table', _captcha: 'false' })
    });
    const result = await response.json();
    if (!response.ok || result?.success === false) throw new Error(result?.message || 'Submission failed.');
    ui.feedbackStatus.textContent = 'Feedback sent.';
    ui.feedbackInput.value = '';
  } catch (error) {
    ui.feedbackStatus.textContent = `Could not send feedback: ${String(error.message || error)}`;
  } finally {
    ui.sendFeedbackBtn.disabled = false;
  }
});

ui.pdfBtn.addEventListener('click', async () => {
  document.querySelectorAll('.accordion').forEach(section => section.classList.add('open'));
  try {
    await html2pdf().set({ margin: [8,8,8,8], filename: `${getActiveCourse().name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-atlas.pdf`, image: { type: 'jpeg', quality: 0.96 }, html2canvas: { scale: 2, useCORS: true, scrollY: 0 }, jsPDF: { unit: 'mm', format: 'a3', orientation: 'landscape' }, pagebreak: { mode: ['css', 'legacy'] } }).from(document.getElementById('atlasPage')).save();
  } finally {
    renderGlossaryAccordion();
  }
});

populateCourseSelect();
renderCourse();
