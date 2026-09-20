/* ═══════════════════════════════════════════
   FUNCHAL CHESS OPEN
   Main Script - routing, i18n, interactions
═══════════════════════════════════════════ */

/* ── Translations ── */
const translations = {
  en: {
    "theme.toggle":    "Toggle dark theme",

    "nav.home":        "Home",
    "nav.events":      "Programme",
    "nav.regulations": "Regulations",
    "nav.contacts":    "Contacts",
    "nav.register":    "Register",

    "hero.tagline":     "The Island Meets the Board",
    "hero.dates_label": "Dates",
    "hero.venue_label": "Venue",
    "hero.venue_val":   "Funchal, Madeira",
    "hero.cta_primary":   "View Programme",
    "hero.cta_secondary": "Register Now",

    "stats.rounds": "Rounds",
    "stats.days":   "Days",
    "stats.prizes": "Prize Pool",
    "stats.rated":  "Rated",


    "teaser.title":        "Festival Events",
    "teaser.open_title":   "I Funchal Chess Open",
    "teaser.open_desc":    "FIDE-rated open tournament welcoming players of all levels",
    "teaser.dinner_title": "Gala Dinner",
    "teaser.dinner_desc":  "An evening of chess, food, and good company",
    "teaser.master_title": "Masterclasses",
    "teaser.master_desc":  "Exclusive sessions with top-level players",
    "teaser.more": "Learn more",
    "teaser.cta":  "See Full Programme",

    "events.title":    "Programme",
    "events.subtitle": "A full programme for players and enthusiasts",
    "events.open_title":   "I Funchal Chess Open",
    "events.open_desc":    "The flagship event of the festival - a FIDE-rated open tournament welcoming players of all nationalities and rating levels. Whether you are a seasoned grandmaster or an ambitious club player, this is your chance to compete on an international stage.",
    "events.rounds_label": "Rounds",
    "events.tc_label":     "Time Control",
    "events.prizes_label": "Prizes",
    "events.dates_label":  "Dates",
    "events.venue_val":    "To be determined",
    "events.sched_title":  "Schedule",
    "events.sched_day":    "Day",
    "events.sched_round":  "Round",
    "events.sched_d1": "26 November (Thursday)",
    "events.sched_r1": "Opening ceremony + Round 1",
    "events.sched_d2": "27 November (Friday)",
    "events.sched_r2": "Round 2 + Round 3",
    "events.sched_d3": "28 November (Saturday)",
    "events.sched_r3": "Round 4",
    "events.sched_d4": "29 November (Sunday)",
    "events.sched_r4": "Round 5 + Round 6",
    "events.sched_d5": "30 November (Monday)",
    "events.sched_r5": "Round 7",
    "events.sched_d6": "1 December (Tuesday)",
    "events.sched_r6": "Round 8",
    "events.sched_d7": "2 December (Wednesday)",
    "events.sched_r7": "Round 9 + Closing ceremony",
    "events.prizes_title": "Prize Fund",
    "events.prize_place":  "Placing",
    "events.prize_amount": "Prize",
    "events.prize_1":  "1st place",
    "events.prize_2":  "2nd place",
    "events.prize_3":  "3rd place",
    "events.prize_4":  "4th place",
    "events.prize_5":  "5th place",
    "events.prize_6":  "6th place",
    "events.prize_7":  "7th place",
    "events.prize_8":  "8th place",
    "events.prize_9":  "9th place",
    "events.prize_10": "10th place",
    "events.prize_female": "Best female player",
    "events.prize_v50":    "Best veteran +50",
    "events.prize_v65":    "Best veteran +65",
    "events.prize_u18":    "Best junior U18",
    "events.prize_total":  "Total prize fund",
    "events.open_reg":   "Register for the Open",
    "events.open_rules": "View Regulations",
    "events.dinner_title": "Chess Gala Dinner",
    "events.dinner_desc":  "Celebrate the spirit of chess with fellow players, organizers, and guests at our official gala dinner. A night of good food, great company, and shared passion for the game.",
    "events.social_badge": "Social Event",
    "events.date_label":   "Date",
    "events.venue_label":  "Venue",
    "events.dinner_reg":   "Reserve a Seat",
    "events.master_title": "Masterclasses",
    "events.master_desc":  "An opportunity to learn from top-level players in focused, intimate sessions. Instructors, topics, and schedule to be announced. Stay tuned for updates.",
    "events.tba_badge":        "To Be Announced",
    "events.instructor_label": "Instructor",
    "events.schedule_label":   "Schedule",
    "events.master_interest":  "I want to participate!",

    "regs.title":    "Regulations",
    "regs.dl_title":    "Download Regulations",

    "contacts.title":    "Contacts",
    "contacts.subtitle": "Get in touch with the organising team",
    "contacts.info_title":  "Contact Information",
    "contacts.email_label": "Email",
    "contacts.phone_label": "Phone",
    "contacts.address_label": "Playing Hall",
    "contacts.address_val":   "To be determined",
    "contacts.org_label":   "Organisation",
    "contacts.org_val":     "Madeira Chess Association (AXRAM)",
    "contacts.response_note": "We aim to respond to all enquiries within 48 hours.",

    "reg.title":    "Registration",
    "reg.fees_title": "Registration Fees",
    "reg.fees_note":  "Entry fee for the I Funchal Chess Open. The amount depends on the date the payment is made.",
    "reg.col_category": "Paid by",
    "reg.col_fee":      "Fee",
    "reg.fee_early":  "26 October",
    "reg.fee_std":    "26 November",
    "reg.fee_late":   "After 26 November",
    "reg.fee_discount": "Players resident in the Madeira region receive a 30% discount on the entry fee.",
    "reg.fee_exempt":   "GMs, IMs and players rated above 2300 are exempt from the entry fee.",
    "reg.how_title": "How to Register",
    "reg.step1_title": "Check your fee",
    "reg.step1_desc":  "Find the fee that applies to you.",
    "reg.step2_title": "Pay the entry fee",
    "reg.step2_desc":  "Make the payment and keep the proof. Payment details (IBAN and accepted methods) will be published here shortly.",
    "reg.step3_title": "Send your registration email",
    "reg.step3_desc":  "Email festivaldexadrezdofunchal@gmail.com with your name, your FIDE ID and the proof of payment.",
    "reg.req_title": "Required Information",
    "reg.req_1": "Full name",
    "reg.req_2": "FIDE ID",
    "reg.req_3": "Proof of payment",
    "reg.req_4": "Federation and rating",
    "reg.req_5": "Contact email address",
    "reg.doc_note":   "Send everything in a single email to festivaldexadrezdofunchal@gmail.com. The organisation reserves the right of admission.",

    "regcta.btn":   "Join the Festival!",

    "footer.tagline":       "The Island Meets the Board",
    "footer.nav_title":     "Navigation",
    "footer.contact_title": "Contact",
    "footer.copy":          "© 2026 Funchal Chess Open. All rights reserved.",
  },

  pt: {
    "theme.toggle":    "Alternar tema escuro",

    "nav.home":        "Início",
    "nav.events":      "Programa",
    "nav.regulations": "Regulamentos",
    "nav.contacts":    "Contactos",
    "nav.register":    "Inscrição",

    "hero.tagline":     "A Ilha Encontra o Tabuleiro",
    "hero.dates_label": "Datas",
    "hero.venue_label": "Local",
    "hero.venue_val":   "Funchal, Madeira",
    "hero.cta_primary":   "Ver Programa",
    "hero.cta_secondary": "Inscrever-se",

    "stats.rounds": "Rondas",
    "stats.days":   "Dias",
    "stats.prizes": "Prémios",
    "stats.rated":  "Homologado",


    "teaser.title":        "Eventos do Festival",
    "teaser.open_title":   "I Funchal Chess Open",
    "teaser.open_desc":    "Torneio open com homologação FIDE aberto a jogadores de todos os níveis",
    "teaser.dinner_title": "Jantar de Gala",
    "teaser.dinner_desc":  "Uma noite de xadrez, boa comida e ótima companhia",
    "teaser.master_title": "Masterclasses",
    "teaser.master_desc":  "Sessões exclusivas com jogadores de alto nível",
    "teaser.more": "Saber mais",
    "teaser.cta":  "Ver Programa Completo",

    "events.title":    "Programa",
    "events.subtitle": "Um programa completo para jogadores e entusiastas",
    "events.open_title":   "I Funchal Chess Open",
    "events.open_desc":    "O evento de destaque do festival - um torneio open com homologação FIDE, aberto a jogadores de todas as nacionalidades e níveis de rating. Seja um grande mestre experiente ou um ambicioso jogador de clube, esta é a sua oportunidade de competir num palco internacional.",
    "events.rounds_label": "Rondas",
    "events.tc_label":     "Ritmo de Jogo",
    "events.prizes_label": "Prémios",
    "events.dates_label":  "Datas",
    "events.venue_val":    "A anunciar",
    "events.sched_title":  "Calendário",
    "events.sched_day":    "Dia",
    "events.sched_round":  "Ronda",
    "events.sched_d1": "26 de novembro (quinta-feira)",
    "events.sched_r1": "Cerimónia de abertura + Ronda 1",
    "events.sched_d2": "27 de novembro (sexta-feira)",
    "events.sched_r2": "Ronda 2 + Ronda 3",
    "events.sched_d3": "28 de novembro (sábado)",
    "events.sched_r3": "Ronda 4",
    "events.sched_d4": "29 de novembro (domingo)",
    "events.sched_r4": "Ronda 5 + Ronda 6",
    "events.sched_d5": "30 de novembro (segunda-feira)",
    "events.sched_r5": "Ronda 7",
    "events.sched_d6": "1 de dezembro (terça-feira)",
    "events.sched_r6": "Ronda 8",
    "events.sched_d7": "2 de dezembro (quarta-feira)",
    "events.sched_r7": "Ronda 9 + Cerimónia de encerramento",
    "events.prizes_title": "Prémios",
    "events.prize_place":  "Classificação",
    "events.prize_amount": "Prémio",
    "events.prize_1":  "1.º lugar",
    "events.prize_2":  "2.º lugar",
    "events.prize_3":  "3.º lugar",
    "events.prize_4":  "4.º lugar",
    "events.prize_5":  "5.º lugar",
    "events.prize_6":  "6.º lugar",
    "events.prize_7":  "7.º lugar",
    "events.prize_8":  "8.º lugar",
    "events.prize_9":  "9.º lugar",
    "events.prize_10": "10.º lugar",
    "events.prize_female": "Melhor jogadora",
    "events.prize_v50":    "Melhor veterano +50",
    "events.prize_v65":    "Melhor veterano +65",
    "events.prize_u18":    "Melhor júnior Sub-18",
    "events.prize_total":  "Total em prémios",
    "events.open_reg":   "Inscrever no Open",
    "events.open_rules": "Ver Regulamento",
    "events.dinner_title": "Jantar de Gala de Xadrez",
    "events.dinner_desc":  "Celebre o espírito do xadrez com outros jogadores, organizadores e convidados no nosso jantar de gala oficial. Uma noite de boa comida, ótima companhia e paixão partilhada pelo jogo.",
    "events.social_badge": "Evento Social",
    "events.date_label":   "Data",
    "events.venue_label":  "Local",
    "events.dinner_reg":   "Reservar um Lugar",
    "events.master_title": "Masterclasses",
    "events.master_desc":  "Uma oportunidade de aprender com jogadores de alto nível em sessões focadas e íntimas. Instrutores, temas e horário a anunciar. Fique atento às novidades.",
    "events.tba_badge":        "A Anunciar",
    "events.instructor_label": "Instrutor",
    "events.schedule_label":   "Horário",
    "events.master_interest":  "Quero participar!",

    "regs.title":    "Regulamentos",
    "regs.dl_title":    "Descarregar Regulamentos",

    "contacts.title":    "Contactos",
    "contacts.subtitle": "Entre em contacto com a equipa organizadora",
    "contacts.info_title":  "Informações de Contacto",
    "contacts.email_label": "Email",
    "contacts.phone_label": "Telefone",
    "contacts.address_label": "Local de Jogo",
    "contacts.address_val":   "A anunciar",
    "contacts.org_label":   "Organização",
    "contacts.org_val":     "Associação de Xadrez da Madeira (AXRAM)",
    "contacts.response_note": "Procuramos responder a todas as questões no prazo de 48 horas.",

    "reg.title":    "Inscrição",
    "reg.fees_title": "Taxas de Inscrição",
    "reg.fees_note":  "Taxa de inscrição do I Funchal Chess Open. O valor depende da data em que o pagamento é efetuado.",
    "reg.col_category": "Pago até",
    "reg.col_fee":      "Taxa",
    "reg.fee_early":  "26 de outubro",
    "reg.fee_std":    "26 de novembro",
    "reg.fee_late":   "Após 26 de novembro",
    "reg.fee_discount": "Os jogadores residentes na Região da Madeira têm 30% de desconto na taxa de inscrição.",
    "reg.fee_exempt":   "GMs, MIs e jogadores com rating superior a 2300 estão isentos da taxa de inscrição.",
    "reg.how_title": "Como se Inscrever",
    "reg.step1_title": "Confirme a sua taxa",
    "reg.step1_desc":  "Verifique qual é a sua taxa aplicável.",
    "reg.step2_title": "Pague a inscrição",
    "reg.step2_desc":  "Efetue o pagamento e guarde o comprovativo. Os dados de pagamento (IBAN e métodos aceites) serão publicados aqui em breve.",
    "reg.step3_title": "Envie o email de inscrição",
    "reg.step3_desc":  "Envie um email para festivaldexadrezdofunchal@gmail.com com o seu nome, o seu ID FIDE e o comprovativo de pagamento.",
    "reg.req_title": "Informações Necessárias",
    "reg.req_1": "Nome completo",
    "reg.req_2": "ID FIDE",
    "reg.req_3": "Comprovativo de pagamento",
    "reg.req_4": "Federação e rating",
    "reg.req_5": "Email de contacto",
    "reg.doc_note":   "Envie tudo num único email para festivaldexadrezdofunchal@gmail.com. A organização reserva o direito de admissão.",

    "regcta.btn":   "Participe no Festival!",

    "footer.tagline":       "A Ilha Encontra o Tabuleiro",
    "footer.nav_title":     "Navegação",
    "footer.contact_title": "Contacto",
    "footer.copy":          "© 2026 Funchal Chess Open. Todos os direitos reservados.",
  }
};

/* ── State ── */
let currentLang = 'pt';
let currentPage = 'home';

/* ── Language ── */
function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = translations[lang][key];
    if (text !== undefined) el.textContent = text;
  });

  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const text = translations[lang][el.getAttribute('data-i18n-aria')];
    if (text !== undefined) el.setAttribute('aria-label', text);
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

/* ── Routing ── */
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + pageId);
  if (target) {
    target.classList.add('active');
    currentPage = pageId;
  }

  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.page === pageId);
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
  closeMobileMenu();
}

/* ── Mobile menu ── */
function closeMobileMenu() {
  const navLinks   = document.getElementById('navLinks');
  const hamburger  = document.getElementById('hamburger');
  navLinks.classList.remove('open');
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
}

/* ── Navbar scroll effect ── */
function handleNavScroll() {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}

/* ── Dark theme ── */
function applyTheme(dark) {
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  const btn  = document.getElementById('themeToggle');
  const icon = document.getElementById('themeIcon');
  if (icon) icon.textContent = dark ? '☀' : '☾';
  if (btn) btn.setAttribute('aria-pressed', String(dark));
}

function initTheme() {
  const btn = document.getElementById('themeToggle');
  if (!btn) return;
  applyTheme(document.documentElement.dataset.theme === 'dark');

  btn.addEventListener('click', () => {
    const dark = document.documentElement.dataset.theme !== 'dark';
    applyTheme(dark);
    try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (e) {}
  });
}

/* ── Navigation click delegation ── */
function initNavigation() {
  document.addEventListener('click', e => {
    const target = e.target.closest('[data-page]');
    if (target) {
      e.preventDefault();
      showPage(target.dataset.page);
    }
  });
}

/* ── Language buttons ── */
function initLanguage() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });
}

/* ── Hamburger ── */
function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });
}

/* ── Subtle entrance animation on section scroll ── */
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.why-card, .teaser-card, .event-card, .step, .stat-item').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  setLanguage('pt');
  showPage('home');
  initNavigation();
  initLanguage();
  initHamburger();
  initTheme();
  initScrollReveal();
  window.addEventListener('scroll', handleNavScroll, { passive: true });
});
