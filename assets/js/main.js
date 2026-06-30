/* ==========================================================================
   Morigaon Mahila Mehfil - main.js (theme current)
   ========================================================================== */
(function () {
  'use strict';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.addEventListener('DOMContentLoaded', function() {

  /* ---- 1. Header scroll ---- */
  var header = document.getElementById('siteHeader');
  function onScroll(){
    if (!header) return;
    header.classList.toggle('mmm-header--scrolled', window.scrollY > 80);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- 2. Navigation dropdowns ---- */
  var processNavUl; /* declared here so mobile() can call it */
  (function buildNav(){
    var DASH = /^[\s]*[-\u002d\u2010\u2011\u2012\u2013\u2014\u2212]/;

    processNavUl = function(ul, isMobile) {
      if (!ul) return;
      var items = Array.prototype.slice.call(ul.querySelectorAll(':scope > .nav-item'));
      var lastParent = null;

      items.forEach(function(li) {
        /* Read from data-label attribute (set in template) or fall back to link text */
        var label = (li.getAttribute('data-label') || '').trim();
        if (!label) {
          var a0 = li.querySelector('a');
          label = a0 ? a0.textContent.trim() : '';
        }
        var a = li.querySelector('a');
        if (!a) return;

        /* Remove Donate � shown as dedicated button */
        if (label.toLowerCase() === 'donate') {
          li.remove();
          return;
        }

        if (DASH.test(label)) {
          /* Child item � strip dash, nest under last parent */
          a.textContent = label.replace(DASH, '').trim();
          if (lastParent) {
            var drop = lastParent.querySelector('.mmm-drop');
            if (!drop) {
              drop = document.createElement('ul');
              drop.className = 'mmm-drop';
              lastParent.appendChild(drop);
              lastParent.classList.add('mmm-has-drop');
              var pa = lastParent.querySelector(':scope > a');
              if (pa) {
                var caret = document.createElement('span');
                caret.className = 'mmm-caret';
                caret.setAttribute('aria-hidden','true');
                pa.appendChild(caret);
              }
            }
            drop.appendChild(li);
          }
        } else {
          lastParent = li;
        }
      });

      if (!isMobile) {
        /* Desktop: click to open dropdown */
        ul.querySelectorAll('.mmm-has-drop > a').forEach(function(a) {
          a.addEventListener('click', function(e) {
            var li = a.parentNode;
            var wasOpen = li.classList.contains('open');
            ul.querySelectorAll('.mmm-has-drop.open').forEach(function(x) { x.classList.remove('open'); });
            if (!wasOpen) { e.preventDefault(); li.classList.add('open'); }
          });
        });
      } else {
        /* Mobile: tap parent to toggle sub-list inline */
        ul.querySelectorAll('.mmm-has-drop > a').forEach(function(a) {
          a.addEventListener('click', function(e) {
            e.preventDefault();
            a.parentNode.classList.toggle('open');
          });
        });
      }
    }

    /* Desktop nav */
    var desktopWrap = document.getElementById('mmm-nav-links-wrap');
    if (desktopWrap) {
      var desktopUl = desktopWrap.querySelector('ul.nav');
      if (desktopUl) {
        desktopUl.id = 'mmm-nav-links';
        desktopUl.classList.add('mmm-nav__links');
        processNavUl(desktopUl, false);
      }
    }

    /* Mobile nav */
    var mobileNav = document.querySelector('.mmm-mobile__nav');
    if (mobileNav) {
      var mobileUl = mobileNav.querySelector('ul.nav');
      if (mobileUl) processNavUl(mobileUl, true);
    }

    /* Close desktop dropdowns on outside click */
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.mmm-has-drop')) {
        document.querySelectorAll('.mmm-has-drop.open').forEach(function(x) { x.classList.remove('open'); });
      }
    });
  })();

  /* Footer Explore: remove dash-children and Donate */
  (function footerClean(){
    var ul = document.querySelector('.footer-nav-clean');
    if (!ul) return;
    Array.prototype.slice.call(ul.children).forEach(function(li){
      var a = li.querySelector('a'); if (!a) return;
      var t = a.textContent.trim();
      if (/^[\s]*[-\u002d\u2010\u2013\u2014]/.test(t) || t.toLowerCase()==='donate') li.remove();
    });
  })();

  /* ---- 3. Mobile menu ---- */
  (function mobile(){
    var burger = document.getElementById('mmmBurger');
    var menu   = document.getElementById('mmmMobile');
    var close  = document.getElementById('mmmClose');
    if (!burger || !menu) return;
    function open(){ menu.classList.add('open'); menu.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden'; }
    function shut(){ menu.classList.remove('open'); menu.setAttribute('aria-hidden','true'); document.body.style.overflow=''; }
    burger.addEventListener('click', open);
    if (close) close.addEventListener('click', shut);
    menu.addEventListener('click', function(e){ if(e.target===menu) shut(); });
    /* Only close drawer when a LEAF link is tapped — not a parent dropdown toggle */
    menu.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){
        /* If this link is a dropdown parent, don't close the drawer */
        if (a.closest('.mmm-has-drop') && !a.closest('.mmm-drop')) return;
        shut();
      });
    });
  })();
/* ---- 4. Hero slider ---- */
  (function hero(){
    var root = document.getElementById('hero');
    if (!root) return;
    var slides = Array.prototype.slice.call(root.querySelectorAll('.hero__slide'));
    var dots   = Array.prototype.slice.call(root.querySelectorAll('.hero__dot'));
    var prev = document.getElementById('heroPrev'), next = document.getElementById('heroNext');
    if (slides.length <= 1) { if(prev)prev.classList.add('is-hidden'); if(next)next.classList.add('is-hidden'); return; }
    var i = 0, timer = null;
    function show(n){ i = (n + slides.length) % slides.length;
      slides.forEach(function(s,x){ s.classList.toggle('is-active', x===i); });
      dots.forEach(function(d,x){ d.classList.toggle('is-active', x===i); });
    }
    function play(){ if(reduce) return; stop(); timer = setInterval(function(){ show(i+1); }, 6000); }
    function stop(){ if(timer){ clearInterval(timer); timer=null; } }
    function go(n){ show(n); play(); }
    if(prev) prev.addEventListener('click', function(){ go(i-1); });
    if(next) next.addEventListener('click', function(){ go(i+1); });
    dots.forEach(function(d,x){ d.addEventListener('click', function(){ go(x); }); });
    root.addEventListener('mouseenter', stop); root.addEventListener('mouseleave', play);
    var sx = null;
    root.addEventListener('touchstart', function(e){ sx = e.touches[0].clientX; }, {passive:true});
    root.addEventListener('touchend', function(e){ if(sx===null) return; var dx = e.changedTouches[0].clientX - sx; if(Math.abs(dx)>50) go(dx<0?i+1:i-1); sx=null; });
    show(0); play();
  })();

  /* CMS: Legal badges — splits footer_reg_line custom field by · */
  (function legalBadges(){
    var el = document.querySelector('.legal-badges[data-badges]');
    if (!el) return;
    var raw = (el.getAttribute('data-badges') || '').trim();
    if (!raw) return;
    el.innerHTML = raw.split('·').filter(function(b){ return b.trim(); }).map(function(b){
      return '<span>' + b.trim() + '</span>';
    }).join('');
  })();

  /* ---- 5. Count-up (comma-safe animation) ---- */
  (function counters(){
    var nums = document.querySelectorAll('[data-target]');
    if (!nums.length || !('IntersectionObserver' in window)) {
      nums.forEach(function(n){ n.textContent = n.getAttribute('data-target'); }); return;
    }
    function run(el){
      var raw = (el.getAttribute('data-target') || '').trim();
      var match = raw.match(/[\d,\.]+/);
      if (!match) { el.textContent = raw; return; }
      var numStr = match[0];
      var prefix = raw.slice(0, match.index);
      var suffix = raw.slice(match.index + numStr.length);
      var target = parseFloat(numStr.replace(/,/g, ''));
      var hasComma = numStr.indexOf(',') !== -1;
      if (reduce || isNaN(target)) { el.textContent = raw; return; }
      var dur = 1600, start = null;
      function fmt(n){ n = Math.floor(n); return hasComma ? n.toLocaleString('en-IN') : String(n); }
      function step(ts){
        if (!start) start = ts;
        var p = Math.min((ts - start) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = prefix + fmt(target * eased) + suffix;
        if (p < 1) requestAnimationFrame(step); else el.textContent = raw;
      }
      requestAnimationFrame(step);
    }
    var io = new IntersectionObserver(function(en){
      en.forEach(function(e){ if(e.isIntersecting){ run(e.target); io.unobserve(e.target); } });
    }, { threshold: 0.4 });
    nums.forEach(function(n){ io.observe(n); });
  })();

  /* ---- 6. Reveal on scroll (one-shot - no replay on scroll-up) ---- */
  (function reveal(){
    var els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    if (reduce || !('IntersectionObserver' in window)) { els.forEach(function(e){ e.classList.add('in'); }); return; }
    var io = new IntersectionObserver(function(en){
      en.forEach(function(e){
        if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function(e){ io.observe(e); });
  })();

  /* ---- 7. Partners dual-row marquee (homepage + about page) ---- */
  function buildMarquee(srcSelector, row1Id, row2Id, rowsSelector) {
    var src = document.querySelector(srcSelector);
    var row1 = document.getElementById(row1Id);
    var row2 = document.getElementById(row2Id);
    var rowsWrap = document.querySelector(rowsSelector);
    if (!row1 || !row2) return;

    var logos = [];
    if (src) {
      src.querySelectorAll('img').forEach(function(im){
        var s = im.getAttribute('src');
        if (s) logos.push({ src: s, alt: im.getAttribute('alt') || 'Partner' });
      });
      src.remove();
    }

    // No logos -> hide entire section
    if (!logos.length) {
      var section = row1.closest('section');
      if (section) section.style.display = 'none';
      return;
    }

    var mid = Math.ceil(logos.length / 2);
    var set1 = logos.slice(0, mid);
    var set2 = logos.slice(mid);

    // If fewer than 2 logos, collapse to single row
    if (!set2.length) {
      set1 = logos;
      var r2 = row2.closest('.marquee--rev');
      if (r2) r2.style.display = 'none';
    }

    function buildTrack(track, set) {
      // Repeat the set enough times to guarantee seamless infinite scroll
      // regardless of how few logos there are
      var MIN_WIDTH = 4000; // px — more than any viewport
      var html = '';
      // Build one copy first to estimate width (~180px per logo on average)
      var approxLogoW = 180;
      var copies = Math.max(4, Math.ceil(MIN_WIDTH / (set.length * approxLogoW)) * 2);
      for (var c = 0; c < copies; c++) {
        set.forEach(function(logo){
          html += '<div class="partners__logo"><img src="' + logo.src + '" alt="' + logo.alt + '" loading="lazy"></div>';
        });
      }
      track.innerHTML = html;
    }
    buildTrack(row1, set1);
    if (set2.length) buildTrack(row2, set2);

    var pos1 = 0, pos2 = 0, speed = 0.5, paused = false;
    var half1 = 0, half2 = 0;

    function measure() {
      // Measure the width of one copy of the set (total / number of copies)
      var copies1 = Math.max(4, Math.ceil(4000 / (set1.length * 180)) * 2);
      var copies2 = set2.length ? Math.max(4, Math.ceil(4000 / (set2.length * 180)) * 2) : 0;
      half1 = row1.scrollWidth / copies1;
      half2 = (set2.length && copies2) ? row2.scrollWidth / copies2 : 0;
    }
    measure();
    window.addEventListener('load', measure);
    setTimeout(measure, 800);
    window.addEventListener('resize', measure);

    function frame() {
      if (!paused && half1 > 0) {
        // Row 1: scroll right
        pos1 += speed;
        if (pos1 >= half1) pos1 = 0;
        row1.style.transform = 'translateX(' + (-half1 + pos1) + 'px)';
        // Row 2: scroll left
        if (half2 > 0) {
          pos2 -= speed;
          if (-pos2 >= half2) pos2 = 0;
          row2.style.transform = 'translateX(' + pos2 + 'px)';
        }
      }
      requestAnimationFrame(frame);
    }
    if (!reduce) requestAnimationFrame(frame);

    if (rowsWrap) {
      rowsWrap.addEventListener('mouseenter', function(){ paused = true; });
      rowsWrap.addEventListener('mouseleave', function(){ paused = false; });
    }
  }

  // Homepage partners
  buildMarquee('.partners__source:not(.partners__source--about)', 'partnersRow1', 'partnersRow2', '.partners__rows');
  // About page partners (different source selector to avoid conflict)
  buildMarquee('.partners__source--about', 'aboutPartnersRow1', 'aboutPartnersRow2', '#aboutPartnersRows');

  /* ---- 8. Gallery bento + pagination + lightbox ---- */
  (function gallery(){
    var wrap = document.querySelector('.gallery');
    if (!wrap) return;
    var src = wrap.querySelector('.gallery__source');
    var bento = wrap.querySelector('.gallery__bento');
    if (!src || !bento) return;

    var urls = [], alts = [];
    src.querySelectorAll('img').forEach(function(im){
      var u = im.getAttribute('src');
      if (u && urls.indexOf(u) === -1){ urls.push(u); alts.push(im.getAttribute('alt') || 'Gallery image'); }
    });
    src.remove();
    if (!urls.length) { var sec = wrap.closest('section'); if (sec) sec.style.display = 'none'; return; }

    var PER = 7, page = 0, pages = Math.ceil(urls.length / PER);
    var pattern = ['big', '', '', 'wide', 'wide', '', ''];

    function render(){
      var set = urls.slice(page * PER, page * PER + PER);
      var html = '';
      set.forEach(function(u, i){
        var cls = pattern[i % pattern.length];
        var globalIdx = page * PER + i;
        html += '<div class="g-item' + (cls ? ' ' + cls : '') + '" data-idx="' + globalIdx + '"><img src="' + u + '" alt="' + alts[globalIdx] + '" loading="lazy"></div>';
      });
      bento.innerHTML = html;
      var pv = wrap.querySelector('.g-prev'), nx = wrap.querySelector('.g-next');
      if (pv) pv.style.opacity = page <= 0 ? '0.35' : '1';
      if (nx) nx.style.opacity = page >= pages - 1 ? '0.35' : '1';
    }
    render();

    if (pages > 1){
      var pv = document.createElement('button');
      pv.className = 'g-prev'; pv.setAttribute('aria-label', 'Previous photos');
      pv.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      var nx = document.createElement('button');
      nx.className = 'g-next'; nx.setAttribute('aria-label', 'Next photos');
      nx.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      wrap.appendChild(pv); wrap.appendChild(nx);
      pv.addEventListener('click', function(){ if (page > 0){ page--; render(); } });
      nx.addEventListener('click', function(){ if (page < pages - 1){ page++; render(); } });
    }

    // Lightbox
    var lb = document.createElement('div'); lb.className = 'lightbox';
    lb.innerHTML = '<button class="lightbox__close" aria-label="Close">&times;</button><button class="lightbox__btn lightbox__prev" aria-label="Previous">&#8249;</button><img alt="Gallery image"><button class="lightbox__btn lightbox__next" aria-label="Next">&#8250;</button>';
    document.body.appendChild(lb);
    var lbImg = lb.querySelector('img'), cur = 0;
    function showLb(n){ cur = (n + urls.length) % urls.length; lbImg.src = urls[cur]; }
    function openLb(n){ showLb(n); lb.classList.add('open'); document.body.style.overflow = 'hidden'; }
    function closeLb(){ lb.classList.remove('open'); document.body.style.overflow = ''; }
    bento.addEventListener('click', function(e){
      var it = e.target.closest('.g-item');
      if (it) openLb(parseInt(it.getAttribute('data-idx'), 10) || 0);
    });
    lb.querySelector('.lightbox__close').addEventListener('click', closeLb);
    lb.querySelector('.lightbox__prev').addEventListener('click', function(e){ e.stopPropagation(); showLb(cur - 1); });
    lb.querySelector('.lightbox__next').addEventListener('click', function(e){ e.stopPropagation(); showLb(cur + 1); });
    lb.addEventListener('click', function(e){ if (e.target === lb) closeLb(); });
    document.addEventListener('keydown', function(e){
      if (!lb.classList.contains('open')) return;
      if (e.key === 'Escape') closeLb();
      if (e.key === 'ArrowLeft') showLb(cur - 1);
      if (e.key === 'ArrowRight') showLb(cur + 1);
    });
  })();

  /* ---- 9. Newsletter PDF modal ---- */
  (function newsletters(){
    var cards = document.querySelectorAll('.nl-card');
    if (!cards.length) return;

    var modal = document.createElement('div');
    modal.className = 'pdf-modal';
    modal.innerHTML =
      '<div class="pdf-modal__inner">' +
        '<div class="pdf-modal__bar">' +
          '<span class="pdf-modal__name"></span>' +
          '<span class="pdf-modal__actions">' +
            '<a class="pdf-modal__dl" target="_blank" rel="noopener">Download</a>' +
            '<button class="pdf-modal__close" aria-label="Close">&times;</button>' +
          '</span>' +
        '</div>' +
        '<iframe title="Newsletter PDF viewer"></iframe>' +
      '</div>';
    document.body.appendChild(modal);

    var frame = modal.querySelector('iframe');
    var nameEl = modal.querySelector('.pdf-modal__name');
    var dlLink = modal.querySelector('.pdf-modal__dl');

    function openPdf(url, name){
      frame.src = url;
      nameEl.textContent = name || 'Document';
      dlLink.href = url;
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    function closePdf(){
      modal.classList.remove('open');
      document.body.style.overflow = '';
      setTimeout(function(){ frame.src = ''; }, 300);
    }

    modal.querySelector('.pdf-modal__close').addEventListener('click', closePdf);
    modal.addEventListener('click', function(e){ if (e.target === modal) closePdf(); });
    document.addEventListener('keydown', function(e){ if (e.key === 'Escape' && modal.classList.contains('open')) closePdf(); });

    cards.forEach(function(card){
      var pdfSrc = card.querySelector('.nl-card__pdf-src');
      var pdfUrl = '';
      if (pdfSrc){
        // Check for direct .pdf link
        var link = pdfSrc.querySelector('a[href*=".pdf"], a[href*=".PDF"]');
        if (link) pdfUrl = link.getAttribute('href');
        // Check for Ghost file card
        if (!pdfUrl){
          var fileCard = pdfSrc.querySelector('.kg-file-card');
          if (fileCard) pdfUrl = fileCard.getAttribute('href') || '';
        }
        pdfSrc.remove();
      }
      var title = card.querySelector('h4') ? card.querySelector('h4').textContent.trim() : '';
      if (pdfUrl){
        var btn = card.querySelector('.nl-card__view-btn');
        if (btn){ btn.addEventListener('click', function(e){ e.preventDefault(); openPdf(pdfUrl, title); }); }
        var cover = card.querySelector('.nl-card__cover');
        if (cover){ cover.addEventListener('click', function(e){ e.preventDefault(); openPdf(pdfUrl, title); }); }
      }
      // No PDF found: default href navigation remains intact
    });
  })();

  /* ---- 10. About page media handler (YouTube or image) ---- */
  (function aboutMedia(){
    var el = document.querySelector('.about-split__media');
    if (!el) return;
    var frame = el.querySelector('.about-split__frame');
    if (!frame) return;
    var media = (el.getAttribute('data-media') || '').trim();
    var fallback = (el.getAttribute('data-fallback') || '').trim();

    function ytId(url){
      var m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/))([a-zA-Z0-9_-]{11})/);
      return m ? m[1] : '';
    }

    var id = media ? ytId(media) : '';
    if (id){
      var thumb = 'https://img.youtube.com/vi/' + id + '/hqdefault.jpg';
      frame.innerHTML = '<img src="' + thumb + '" alt="Play video"><button class="about-play-btn" aria-label="Play video"><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></button>';
      // Try to upgrade thumbnail quality
      var hi = new Image();
      hi.onload = function(){ if (hi.naturalWidth > 140){ var im = frame.querySelector('img'); if (im) im.src = hi.src; } };
      hi.src = 'https://img.youtube.com/vi/' + id + '/maxresdefault.jpg';
      frame.addEventListener('click', function(){
        frame.innerHTML = '<iframe src="https://www.youtube.com/embed/' + id + '?autoplay=1&rel=0" title="MMM video" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>';
      });
    } else if (media){
      frame.innerHTML = '<img src="' + media + '" alt="About MMM">';
    } else if (fallback){
      frame.innerHTML = '<img src="' + fallback + '" alt="About MMM">';
    } else {
      // No media at all - collapse to single column
      var split = el.closest('.about-split');
      if (split) split.classList.add('no-media');
    }
  })();

  /* ---- 11. Timeline animated progress line ---- */
  (function timeline(){
    var tl = document.getElementById('mmmTimeline');
    var progress = document.getElementById('mmmTlProgress');
    if (!tl || !progress) return;
    var items = Array.prototype.slice.call(tl.querySelectorAll('.tl-item'));
    if (!items.length) return;

    var positions = [];
    function calc(){
      var base = tl.querySelector('.tl-track').getBoundingClientRect().top;
      positions = items.map(function(it){
        var dot = it.querySelector('.tl-dot');
        var r = dot.getBoundingClientRect();
        return (r.top - base) + r.height / 2;
      });
    }

    var active = -1;
    function setActive(idx){
      if (idx === active) return;
      active = idx;
      items.forEach(function(it, i){
        it.classList.toggle('tl-item--past', i < idx);
        it.classList.toggle('tl-item--active', i === idx);
      });
    }

    var progressY = 0, speed = 0.4, running = false;
    function frame(){
      if (!reduce && positions.length){
        progressY += speed;
        var max = positions[positions.length - 1] + 40;
        if (progressY > max) progressY = 0;
        progress.style.height = Math.min(progressY, max) + 'px';
        var passed = 0;
        for (var i = positions.length - 1; i >= 0; i--){
          if (progressY >= positions[i]){ passed = i; break; }
        }
        setActive(passed);
      }
      requestAnimationFrame(frame);
    }

    // Click a milestone to jump progress to it
    items.forEach(function(it, i){
      it.style.cursor = 'pointer';
      it.addEventListener('click', function(){
        if (!positions.length) calc();
        if (positions[i] !== undefined){ progressY = positions[i] + 1; }
      });
    });

    calc(); setActive(0);
    window.addEventListener('resize', calc);

    if (!('IntersectionObserver' in window)){
      running = true; setTimeout(function(){ requestAnimationFrame(frame); }, 400);
    } else {
      var io = new IntersectionObserver(function(en){
        en.forEach(function(e){
          if (e.isIntersecting && !running){ running = true; calc(); setTimeout(function(){ requestAnimationFrame(frame); }, 300); }
        });
      }, { threshold: 0.1 });
      io.observe(tl);
    }
  })();

  /* ---- 12. Team page tabs ---- */
  (function teamTabs(){
    var bar = document.getElementById('teamTabsBar');
    if (!bar) return;
    var tabs = Array.prototype.slice.call(bar.querySelectorAll('.team-tab'));
    var sections = {
      'team-board-section': document.getElementById('team-board-section'),
      'team-staff-section': document.getElementById('team-staff-section')
    };
    // Hide staff section on load
    if (sections['team-staff-section']) sections['team-staff-section'].style.display = 'none';
    function show(target){
      tabs.forEach(function(t){ t.classList.toggle('is-active', t.getAttribute('data-target') === target); });
      Object.keys(sections).forEach(function(k){
        if (sections[k]) sections[k].style.display = k === target ? '' : 'none';
      });
    }
    tabs.forEach(function(t){
      t.addEventListener('click', function(){ show(t.getAttribute('data-target')); });
    });
  })();

  /* ---- 13. Language selector (Google Translate) ---- */
  (function lang(){
    var fab = document.getElementById('langFab'), btn = document.getElementById('langFabBtn'), menu = document.getElementById('langMenu');
    if (!fab || !btn || !menu) return;
    btn.addEventListener('click', function(){ fab.classList.toggle('open'); });
    function setLang(code){ var combo = document.querySelector('.goog-te-combo'); if(combo){ combo.value = code; combo.dispatchEvent(new Event('change')); } }
    menu.querySelectorAll('button').forEach(function(b){ b.addEventListener('click', function(){ setLang(b.getAttribute('data-lang')); fab.classList.remove('open'); }); });
    document.addEventListener('click', function(e){ if(!fab.contains(e.target)) fab.classList.remove('open'); });
  })();

  /* ---- 14. Kill Google Translate banner ---- */
  /* Runs outside DOMContentLoaded so it can hook window.load */
  (function killGTBanner(){
    function reset(){
      if (document.body){ document.body.style.setProperty('top','0px','important'); document.body.style.setProperty('position','static','important'); }
      document.documentElement.style.setProperty('margin-top','0px','important');
      var bar = document.querySelector('.goog-te-banner-frame, iframe.skiptranslate');
      if (bar) bar.style.setProperty('display','none','important');
    }
    reset(); window.addEventListener('load', reset);
    if ('MutationObserver' in window){ new MutationObserver(reset).observe(document.documentElement, {childList:true, subtree:true, attributes:true, attributeFilter:['style','class']}); }
  })();

  /* ---- 15. Contact form validation ---- */
  (function contactForm(){
    var form = document.getElementById('contactForm');
    if (!form) return;
    var name = document.getElementById('cfName'), phone = document.getElementById('cfPhone'), note = document.getElementById('cfNote');
    if (name) name.addEventListener('input', function(){ name.value = name.value.replace(/[^A-Za-z\s.]/g,''); });
    if (phone) phone.addEventListener('input', function(){ phone.value = phone.value.replace(/[^0-9]/g,'').slice(0,10); });
    form.addEventListener('submit', function(e){ e.preventDefault(); if(note){ note.hidden = false; } form.reset(); });
  })();

  /* ---- 16. Awards slider ---- */
  (function awSlider(){
    var track = document.getElementById('awTrack');
    var dotsWrap = document.getElementById('awDots');
    if (!track) return;
    var cards = Array.prototype.slice.call(track.querySelectorAll('.aw-card'));
    if (cards.length < 2) return;
    var perView = window.innerWidth < 600 ? 1 : window.innerWidth < 980 ? 2 : 4;
    var total = Math.ceil(cards.length / perView);
    var cur = 0;
    for (var d = 0; d < total; d++) {
      var dot = document.createElement('button');
      dot.className = 'aw-dot' + (d === 0 ? ' is-active' : '');
      dot.setAttribute('aria-label', 'Go to page ' + (d + 1));
      dotsWrap.appendChild(dot);
    }
    var dots = Array.prototype.slice.call(dotsWrap.querySelectorAll('.aw-dot'));
    function go(n) {
      cur = (n + total) % total;
      var cardW = cards[0].offsetWidth + 24;
      track.style.transform = 'translateX(-' + (cur * perView * cardW) + 'px)';
      dots.forEach(function(d,i){ d.classList.toggle('is-active', i === cur); });
    }
    var prev = document.getElementById('awPrev'), next = document.getElementById('awNext');
    if (prev) prev.addEventListener('click', function(){ go(cur - 1); });
    if (next) next.addEventListener('click', function(){ go(cur + 1); });
    dots.forEach(function(d, i){ d.addEventListener('click', function(){ go(i); }); });
  })();

  /* ---- 17. Community gallery — scattered stacked carousel (About + Donate pages) ---- */

  /* Extract images from a Ghost page's content (Way 1: bulk upload via Gallery card) */
  (function extractPageGalleryImages() {
    var src = document.getElementById('galleryPageImages');
    var track = document.getElementById('communityCarousel');
    if (!src || !track) return;

    var imgs = Array.prototype.slice.call(src.querySelectorAll('img'));
    imgs.forEach(function(img) {
      var card = document.createElement('div');
      card.className = 'gallery-card';
      var i = document.createElement('img');
      i.src = img.src;
      i.alt = img.alt || 'Gallery photo';
      i.loading = 'lazy';
      card.appendChild(i);
      track.appendChild(card);
    });

    src.remove();
  })();
  function initCarousel(trackId) {
    var track = document.getElementById(trackId);
    if (!track) return;
    var cards = Array.prototype.slice.call(track.querySelectorAll('.gallery-card'));
    if (!cards.length) return;
    var wrap = track.closest('.gallery-carousel-wrapper');
    var prev = wrap ? wrap.querySelector('.carousel-btn.prev') : null;
    var next = wrap ? wrap.querySelector('.carousel-btn.next') : null;
    var n = cards.length, active = 0;
    function layout(){
      cards.forEach(function(card, i){
        var off = i - active;
        if (off > n / 2) off -= n;
        if (off < -n / 2) off += n;
        var abs = Math.abs(off);
        card.style.transform = 'translateX(' + (off * 62) + 'px) rotate(' + (off * 5) + 'deg) scale(' + (1 - abs * 0.08) + ')';
        card.style.opacity = abs > 2 ? '0' : String(1 - abs * 0.22);
        card.style.zIndex = String(10 - abs);
        card.style.pointerEvents = abs > 2 ? 'none' : 'auto';
        card.classList.toggle('active', off === 0);
      });
    }
    function go(d){ active = (active + d + n) % n; layout(); }
    if (prev) prev.addEventListener('click', function(){ go(-1); });
    if (next) next.addEventListener('click', function(){ go(1); });
    cards.forEach(function(card, i){ card.addEventListener('click', function(){ if (i !== active) { active = i; layout(); } }); });
    layout();
  }
  initCarousel('communityCarousel');
  initCarousel('donateCarousel');

  }); /* end DOMContentLoaded */

})();

