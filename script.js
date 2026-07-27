/* ==========================================================================
   AVIS PRINTERS - HIGH-CONVERTING LANDING PAGE JAVASCRIPT
   ========================================================================== */

// Real Master Project Dataset (Linux & Vercel Case-Sensitive Clean Paths)
const projectsData = [
  { id: 1, cat: 'stationery', title: 'Sandhya - Creative Designer Branding', tag: 'Vector & Brand Suite', img: './assets/projects/sandhya_logo.png', bgWhite: true, desc: 'Custom vector butterfly gradient logo design, metallic foil business cards, and complete brand identity suite.', specs: ['Vector Logo Design', 'Metallic Gradient Foil', 'Soft-Touch Matte Finish'] },
  { id: 2, cat: 'govt', title: 'Official Inscription & Inauguration Plate', tag: 'Government & Corporate', img: './assets/projects/inauguration_plate_july_2026.jpg', desc: 'Acid-etched brass & stainless steel inauguration plate for official foundation stone ceremonies.', specs: ['Acid-Etched Deep Lettering', 'Brass / Stainless Steel', 'GeM Portal Execution'] },
  { id: 3, cat: 'govt', title: 'Gloss Laminated Custom Event Badges', tag: 'Summit & Conference Merch', img: './assets/projects/badges_2026.jpg', desc: 'Metallic pin badges with gloss dome lamination for official summit delegates and event personnel.', specs: ['Gloss Laminated Metallic Pins', 'High-Density Print', 'Bulk 5,000+ Unit Batch'] },
  { id: 4, cat: 'packaging', title: 'Big Round Waterproof Packaging Stickers', tag: 'Packaging & Labels', img: './assets/projects/big_round_stickers_2026.jpg', desc: 'Waterproof die-cut vinyl roll stickers for food packaging jars, shipping boxes, and product bottles.', specs: ['Waterproof Gloss Vinyl', 'Precision Die-Cut Roll', 'Strong Adhesive Backing'] },
  { id: 5, cat: 'signage', title: '3ft x 6ft Aluminium Roll-Up Standee', tag: 'Exhibition Display', img: './assets/projects/3x6_standee.jpg', desc: 'Heavy aluminum cassette standee with non-curl greyback vinyl print for trade shows and retail entrance.', specs: ['1440 DPI Eco-Solvent HD Print', 'Non-Curl Greyback Vinyl', 'Portable Carrying Bag'] },
  { id: 6, cat: 'signage', title: 'Public Health Awareness Roll-Up Banner', tag: 'Public Campaign', img: './assets/projects/hypertension_standee.jpg', desc: 'Official health department roll-up banner standee printed for medical awareness programs.', specs: ['Medical Campaign Design', 'Non-Curl Banner Vinyl', 'Quick Assembly Frame'] },
  { id: 7, cat: 'stationery', title: 'JMD Commercial NCR Bill Books', tag: 'Business Stationery', img: './assets/projects/jmd_bill_book_pv.jpg', desc: 'Serialized carbonless duplicate & triplicate invoice books with custom perforation and binding.', specs: ['NCR Carbonless Duplicate', 'Serialized Red Numbering', 'Heavy Cover Binding'] },
  { id: 8, cat: 'stationery', title: 'Multi-Page Gloss Corporate Booklet', tag: 'Publishing & Catalog', img: './assets/projects/booklet_2.jpg', desc: 'Saddle-stitched multi-page glossy art paper catalog for corporate profiles and institutional reports.', specs: ['170 GSM Gloss Art Paper', 'Saddle Stitch Binding', 'Vibrant Offset Colors'] },
  { id: 9, cat: 'signage', title: '6ft x 4ft Heavy-Duty Outdoor Flex Banner', tag: 'Outdoor Hoarding', img: './assets/projects/flex_6ft_x_4ft_1.jpg', desc: 'All-weather heavy-duty flex banner with reinforced brass grommets for street billboards and displays.', specs: ['Weatherproof Heavy Flex', 'Brass Grommets Eyelets', 'UV-Resistant Inks'] },
  { id: 10, cat: 'signage', title: '72" x 36" Rigid Commercial Display Board', tag: 'Rigid Signage', img: './assets/projects/72x36_board_copy.jpg', desc: 'Large 6ft x 3ft rigid sign board on Foamex/ACP for storefront signage and directional boards.', specs: ['ACP / Foamex Board Base', 'High-Gloss Vinyl Graphic', 'Outdoor UV Lamination'] },
  { id: 11, cat: 'marketing', title: 'Multi-Color Promotional Pamphlets (English)', tag: 'Bulk Marketing Print', img: './assets/projects/pamphlet_english_2026_front.jpg', desc: 'High-speed offset printed flyers on 130 GSM glossy paper for mass promotional door-to-door distribution.', specs: ['130 GSM Gloss Art Paper', 'High-Speed Offset Press', 'Crisp Color Reproduction'] },
  { id: 12, cat: 'marketing', title: 'Multi-Color Promotional Pamphlets (Hindi)', tag: 'Regional Marketing Print', img: './assets/projects/pamphlet_hindi_2026_front.jpg', desc: 'Regional language Hindi pamphlets for local awareness and retail promotion campaigns.', specs: ['Regional Language Layout', '130 GSM Gloss Paper', 'Bulk 10,000+ Units'] },
  { id: 13, cat: 'govt', title: 'World Health Day Public Campaign Poster', tag: 'Government Awareness', img: './assets/projects/world_health_day_2026_1.jpg', desc: 'Large format public health awareness campaign poster for government medical drives.', specs: ['High-Definition Graphic Print', '220 GSM Photo Gloss Paper', 'GeM Portal Execution'] },
  { id: 14, cat: 'govt', title: 'National Pharmacy Week Campaign Poster', tag: 'Medical Campaign', img: './assets/projects/nimsulide_poster_final.jpg', desc: 'Official medical conference & awareness campaign posters printed for health institutions.', specs: ['High-Definition Offset', 'Vibrant Color Match', 'Official Institutional Run'] },
  { id: 15, cat: 'marketing', title: 'Social Media & WhatsApp Digital Banner Design', tag: 'Digital & Print Design', img: './assets/projects/whats_app_design_1.jpg', desc: 'Custom artwork designed for digital WhatsApp promotion and matching print banners.', specs: ['Custom Graphic Design', 'Social Media Formatting', 'Matching Print Specs'] },
  { id: 16, cat: 'signage', title: '12ft x 8ft Outdoor Advertising Sign Board', tag: 'Large Format Display', img: './assets/projects/12x8_color_option.jpg', desc: 'Large outdoor commercial advertising board with color variation options for client approval.', specs: ['Heavy Duty Steel Frame Base', 'Weatherproof HD Print', 'Outdoor Color Guarantee'] },
  { id: 17, cat: 'stationery', title: 'Press Workshop Print Job Batch', tag: 'Print Execution', img: './assets/projects/20220907_170614.jpg', desc: 'Heidelberg press production batch undergoing color inspection and precision cutting.', specs: ['Precision Color Calibrated', 'High-Speed Production', 'Strict QA Check'] },
  { id: 18, cat: 'packaging', title: 'Dispatch Packaging & Order Bundling', tag: 'Order Fulfillment', img: './assets/projects/20221030_192751.jpg', desc: 'Completed custom print order packaged in protective shrink wrapping ready for shipment.', specs: ['Moisture-Proof Shrink Wrap', 'Reinforced Outer Boxes', 'Express Shipping Ready'] },
  { id: 19, cat: 'signage', title: '10ft x 6ft Flex Signboard', tag: 'Store Frontage', img: './assets/projects/10x6.jpg', desc: 'Commercial flex signboard printed with high-density UV resistant inks.', specs: ['High-Density UV Ink', 'Reinforced Border Stitching', 'All-Weather Coating'] },
  { id: 20, cat: 'govt', title: 'Helpline Awareness Board (Hindi)', tag: 'Government Signage', img: './assets/projects/helpline_number_in_hindi.jpg', desc: 'Public helpline signage board printed in Hindi for civic government departments.', specs: ['Public Safety Signage', 'High Visibility Contrast', 'GeM Portal Execution'] }
];

// Expanded 10 Authentic Client Testimonials Dataset
const testimonialsData = [
  {
    name: "Vikramaditya Sharma",
    role: "Sr. Administrative Officer, Public Health Dept",
    badge: "GeM Portal Order",
    badgeColor: "emerald",
    rating: 5,
    quote: "Avis Printers delivered 4,000 sets of World Health Day campaign posters and 3x6 roll-up standees directly to our Delhi office within 36 hours. Their GeM Portal account made billing completely seamless and 100% tax compliant."
  },
  {
    name: "Sandhya Verma",
    role: "Founder & Creative Lead, Sandhya Design Studio",
    badge: "Luxury Brand Client",
    badgeColor: "purple",
    rating: 5,
    quote: "We needed custom butterfly vector logo business cards with gold foil stamping and soft-touch matte lamination. Avis Printers executed the color gradient perfectly. The quality is easily the best in Delhi NCR!"
  },
  {
    name: "Rajesh Gulati",
    role: "Proprietor, JMD Enterprises",
    badge: "30+ Year Retainer",
    badgeColor: "amber",
    rating: 5,
    quote: "We have been printing our commercial NCR duplicate bill books, letterheads, and tax invoice registers from Avis Printers for over 18 years. Their paper GSM quality and serial numbering precision never fail."
  },
  {
    name: "Dr. Meenakshi Sundaram",
    role: "Event Convener, National Pharmacy Week",
    badge: "Institutional Campaign",
    badgeColor: "cyan",
    rating: 5,
    quote: "Printed over 2,000 public medical awareness posters and flex banners for our health conclave. The ink density is super sharp and the 24-hour express dispatch saved our launch event!"
  },
  {
    name: "Harpreet Singh",
    role: "Operations Manager, Urban Hygiene & Supplies",
    badge: "Trading Inventory Kit",
    badgeColor: "emerald",
    rating: 5,
    quote: "Procured 500 Swachhta Pakhwada cleanliness kits and commercial artificial grass turf rolls for municipal tenders. Avis Printers provided valid GST invoices and delivered on time."
  },
  {
    name: "Rohan Kapoor",
    role: "Founder, D2C Merch Lab",
    badge: "Gen-Z Apparel Partner",
    badgeColor: "purple",
    rating: 5,
    quote: "Finding a printer in North India that understands high-density puff print hoodies, custom clothing tags, and waterproof round packaging stickers was tough until we found Avis. 10/10 service!"
  },
  {
    name: "Deepak Rastogi",
    role: "VP Corporate Communications, Apex Infra Ltd",
    badge: "Corporate Annual Report",
    badgeColor: "cyan",
    rating: 5,
    quote: "We printed 3,000 hardcover annual report booklets with spot UV and metallic foil covers. Avis Printers' senior press team assisted us with bleed corrections and delivered impeccable copies."
  },
  {
    name: "Sunita Deshmukh",
    role: "Managing Director, Spice Garden Restaurant Chain",
    badge: "Hospitality Print",
    badgeColor: "amber",
    rating: 5,
    quote: "Replaced all our restaurant menus with heavy waterproof thermal laminated menus and takeaway flyers. The color reproduction on food pictures looks appetizing and highly professional."
  },
  {
    name: "Tarun Bhardwaj",
    role: "Head of Logistics, TechConclave 2026",
    badge: "Summit & Exhibition",
    badgeColor: "purple",
    rating: 5,
    quote: "Ordered 50+ 3D LED signboards, vinyl wall graphics, and 2,500 custom satin lanyards for our summit delegates. The team worked overnight to complete the setup before registration opened."
  },
  {
    name: "Amitabh Sen",
    role: "Editor-in-Chief, Horizon Academic Publishing",
    badge: "Book Publishing Run",
    badgeColor: "emerald",
    rating: 5,
    quote: "Printed 10,000 perfect-bound softcover educational manuals and training workbooks. Avis Printers provided sample physical proofs within 24 hours. Exceptionally reliable print partner."
  }
];

let currentFilter = 'all';
let visibleCount = 6;
let currentTestimonialIndex = 0;
let testimonialTimer = null;

// Render Gallery Cards
function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;
  
  const searchVal = (document.getElementById('projectSearch')?.value || '').toLowerCase();

  const filtered = projectsData.filter(p => {
    const matchesCategory = currentFilter === 'all' || p.cat === currentFilter;
    const matchesSearch = p.title.toLowerCase().includes(searchVal) || p.desc.toLowerCase().includes(searchVal) || p.tag.toLowerCase().includes(searchVal);
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full text-center py-12 text-slate-500 glass-panel rounded-3xl">
        <i data-lucide="search-x" class="w-12 h-12 mx-auto mb-3 text-slate-600"></i>
        <p class="text-sm font-semibold">No matching project found. Try searching for "sticker", "banner", "poster", or "standee".</p>
      </div>
    `;
    if (window.lucide) lucide.createIcons();
    return;
  }

  const displayList = filtered.slice(0, visibleCount);

  grid.innerHTML = displayList.map(p => `
    <div class="glass-panel rounded-3xl overflow-hidden border border-slate-800 hover:border-purple-500/40 transition-all group flex flex-col justify-between shadow-xl">
      <div class="${p.bgWhite ? 'bg-white p-4' : 'bg-slate-900 p-2'} flex items-center justify-center h-[220px] border-b border-slate-800 relative overflow-hidden cursor-pointer" onclick="openLightbox(${p.id})">
        <img src="${p.img}" alt="${p.title}" class="w-full h-full ${p.bgWhite ? 'object-contain max-h-36' : 'object-cover'} group-hover:scale-105 transition-transform" />
        <span class="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-slate-950/90 text-purple-300 border border-purple-500/30 shadow">${p.tag}</span>
      </div>
      <div class="p-6 space-y-3 flex-1 flex flex-col justify-between">
        <div>
          <h3 class="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">${p.title}</h3>
          <p class="text-xs text-slate-300 mt-1 leading-relaxed">${p.desc}</p>
        </div>
        <div class="pt-3 flex justify-between items-center text-xs font-semibold border-t border-slate-800/80">
          <span class="text-cyan-400 font-bold">${p.specs[0]}</span>
          <button onclick="orderSimilar('${p.title}')" class="text-purple-400 hover:text-purple-300 flex items-center gap-1 font-bold">
            Order Similar <i data-lucide="arrow-up-right" class="w-3.5 h-3.5 inline"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');

  const btn = document.getElementById('loadMoreBtn');
  if (btn) {
    if (visibleCount >= filtered.length) {
      btn.style.display = 'none';
    } else {
      btn.style.display = 'inline-flex';
    }
  }

  if (window.lucide) lucide.createIcons();
}

function toggleLoadMore() {
  visibleCount += 6;
  renderProjects();
}

function filterProjects(cat) {
  currentFilter = cat;
  visibleCount = 6;
  document.querySelectorAll('.project-tab-btn').forEach(btn => {
    btn.classList.remove('active', 'bg-purple-600', 'text-white');
    btn.classList.add('bg-slate-900', 'text-slate-400');
  });
  if (window.event && window.event.target) {
    window.event.target.classList.add('active', 'bg-purple-600', 'text-white');
    window.event.target.classList.remove('bg-slate-900', 'text-slate-400');
  }
  renderProjects();
}

function searchProjects() {
  visibleCount = 6;
  renderProjects();
}

// Lightbox Modal Functions
function openLightbox(id) {
  const p = projectsData.find(item => item.id === id);
  if (!p) return;

  const modalContent = document.getElementById('modalContent');
  if (!modalContent) return;

  modalContent.innerHTML = `
    <div class="space-y-4">
      <div class="flex items-center justify-between">
        <span class="px-3 py-1 rounded-full text-xs font-bold bg-purple-500/10 text-purple-400 border border-purple-500/20">${p.tag}</span>
        <span class="text-xs text-slate-400 font-semibold">GeM & GST Verified Order</span>
      </div>

      <div class="max-h-[320px] overflow-hidden rounded-2xl bg-slate-950 flex items-center justify-center p-4 border border-slate-800">
        <img src="${p.img}" alt="${p.title}" class="max-h-[300px] object-contain rounded-lg" />
      </div>

      <div>
        <h3 class="text-2xl font-extrabold text-white">${p.title}</h3>
        <p class="text-sm text-slate-300 mt-1 leading-relaxed">${p.desc}</p>
      </div>

      <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-2">
        <h4 class="text-xs font-bold text-slate-300 uppercase tracking-wider">Key Print Specifications:</h4>
        <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
          ${p.specs.map(s => `<li class="flex items-center gap-2"><i data-lucide="check-circle" class="w-3.5 h-3.5 text-emerald-400"></i> ${s}</li>`).join('')}
        </ul>
      </div>

      <button onclick="orderSimilar('${p.title}')" class="w-full py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 shadow-lg flex items-center justify-center gap-2">
        <i data-lucide="message-circle" class="w-5 h-5"></i>
        <span>Order Similar Execution on WhatsApp (+91 8285462728)</span>
      </button>
    </div>
  `;

  document.getElementById('lightboxModal')?.classList.remove('hidden');
  if (window.lucide) lucide.createIcons();
}

function closeLightbox() {
  document.getElementById('lightboxModal')?.classList.add('hidden');
}

// Sliding Testimonial Carousel Logic
function renderTestimonials() {
  const container = document.getElementById('testimonialSlide');
  const dotsContainer = document.getElementById('testimonialDots');
  if (!container) return;

  const t = testimonialsData[currentTestimonialIndex];
  
  const badgeClass = t.badgeColor === 'emerald' ? 'badge-emerald' : 
                     t.badgeColor === 'purple' ? 'badge-purple' : 
                     t.badgeColor === 'amber' ? 'badge-amber' : 'badge-cyan';

  container.innerHTML = `
    <div class="glass-panel p-8 sm:p-10 rounded-3xl border border-purple-500/30 shadow-2xl space-y-6 text-left transition-all duration-500 transform">
      <div class="flex items-center justify-between flex-wrap gap-2">
        <div class="flex text-amber-400 gap-1">
          <i data-lucide="star" class="w-5 h-5 fill-amber-400"></i>
          <i data-lucide="star" class="w-5 h-5 fill-amber-400"></i>
          <i data-lucide="star" class="w-5 h-5 fill-amber-400"></i>
          <i data-lucide="star" class="w-5 h-5 fill-amber-400"></i>
          <i data-lucide="star" class="w-5 h-5 fill-amber-400"></i>
        </div>
        <span class="badge-pill ${badgeClass} text-xs">${t.badge}</span>
      </div>

      <p class="text-base sm:text-lg text-slate-200 italic leading-relaxed font-medium">
        "${t.quote}"
      </p>

      <div class="pt-4 border-t border-slate-800/80 flex items-center justify-between">
        <div>
          <h4 class="text-base font-extrabold text-white font-heading">${t.name}</h4>
          <p class="text-xs text-purple-400 font-semibold">${t.role}</p>
        </div>
        <div class="text-xs text-slate-500 font-bold">
          ${currentTestimonialIndex + 1} / ${testimonialsData.length}
        </div>
      </div>
    </div>
  `;

  if (dotsContainer) {
    dotsContainer.innerHTML = testimonialsData.map((_, idx) => `
      <button onclick="goToTestimonial(${idx})" class="w-3 h-3 rounded-full transition-all ${idx === currentTestimonialIndex ? 'bg-purple-500 w-8' : 'bg-slate-800 hover:bg-slate-700'}"></button>
    `).join('');
  }

  if (window.lucide) lucide.createIcons();
}

function nextTestimonial() {
  currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonialsData.length;
  renderTestimonials();
  resetTestimonialTimer();
}

function prevTestimonial() {
  currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonialsData.length) % testimonialsData.length;
  renderTestimonials();
  resetTestimonialTimer();
}

function goToTestimonial(idx) {
  currentTestimonialIndex = idx;
  renderTestimonials();
  resetTestimonialTimer();
}

function resetTestimonialTimer() {
  if (testimonialTimer) clearInterval(testimonialTimer);
  testimonialTimer = setInterval(nextTestimonial, 5000);
}

function toggleFaq(elem) {
  const p = elem.querySelector('p');
  const icon = elem.querySelector('[data-lucide="chevron-down"]');
  if (p) {
    if (p.classList.contains('hidden')) {
      p.classList.remove('hidden');
      if (icon) icon.style.transform = 'rotate(180deg)';
    } else {
      p.classList.add('hidden');
      if (icon) icon.style.transform = 'rotate(0deg)';
    }
  }
}

function triggerQuickWhatsApp() {
  const cat = document.getElementById('quickCat')?.value || 'General';
  const qty = document.getElementById('quickQty')?.value || '500';
  const text = encodeURIComponent(`Hi Avis Printers! I need a quick estimate for ${qty} units of ${cat}. Please guide me.`);
  window.open(`https://wa.me/918285462728?text=${text}`, '_blank');
}

function inquireCategory(catName) {
  const text = encodeURIComponent(`Hello Avis Printers! I am interested in ordering from your "${catName}" category. Please share pricing.`);
  window.open(`https://wa.me/918285462728?text=${text}`, '_blank');
}

function orderSimilar(projectTitle) {
  const text = encodeURIComponent(`Hi Avis Printers! I saw your past project "${projectTitle}" on your website. I want to order a similar execution.`);
  window.open(`https://wa.me/918285462728?text=${text}`, '_blank');
}

function handleLeadSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('leadName')?.value || '';
  const phone = document.getElementById('leadPhone')?.value || '';
  const email = document.getElementById('leadEmail')?.value || '';
  const category = document.getElementById('leadCategory')?.value || '';
  const qty = document.getElementById('leadQty')?.value || '';
  const design = document.getElementById('leadDesign')?.value || '';
  const date = document.getElementById('leadDate')?.value || '';
  const desc = document.getElementById('leadDesc')?.value || '';

  const message = `*NEW PRINT INQUIRY - AVIS PRINTERS WEBSITE*
---------------------------------------
👤 *Name & Company:* ${name}
📞 *Phone No:* ${phone}
✉️ *Email:* ${email}
📦 *Product Category:* ${category}
📊 *Quantity Needed:* ${qty}
🎨 *Designing:* ${design}
📅 *Required Date:* ${date}
---------------------------------------
📝 *Description:*
${desc || 'Standard specifications requested.'}`;

  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/918285462728?text=${encoded}`, '_blank');
}

// Initial Setup
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) lucide.createIcons();
  renderProjects();
  renderTestimonials();
  resetTestimonialTimer();
});
