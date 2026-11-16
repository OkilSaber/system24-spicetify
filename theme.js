// system24: the ascii header font (asciid) only has ascii glyphs, so "é" fell back to a giant
// DM Mono glyph. Fold accents in header titles (é -> e, the original stays in aria-label) and
// flag titles that are still not ascii so user.css keeps the regular font for them.
(function system24AsciiTitles() {
    if (!document.body) return setTimeout(system24AsciiTitles, 300);

    const fold = s =>
        s
            .normalize('NFD')
            .replace(/[̀-ͯ]/g, '')
            .replace(/[‘’]/g, "'")
            .replace(/[“”]/g, '"')
            .replace(/[–—]/g, '-')
            .replace(/œ/g, 'oe')
            .replace(/Œ/g, 'OE')
            .replace(/æ/g, 'ae')
            .replace(/Æ/g, 'AE');

    const fix = h1 => {
        const text = h1.textContent;
        if (text === h1.dataset.s24Folded) return; // our own write
        const folded = fold(text);
        const ascii = /^[\x20-\x7e]*$/.test(folded);
        h1.dataset.s24Ascii = ascii ? 'on' : 'off';
        if (ascii && folded !== text) {
            h1.setAttribute('aria-label', text);
            h1.dataset.s24Folded = folded;
            const walker = document.createTreeWalker(h1, NodeFilter.SHOW_TEXT);
            for (let n = walker.nextNode(); n; n = walker.nextNode()) n.nodeValue = fold(n.nodeValue);
        } else {
            h1.removeAttribute('aria-label');
            delete h1.dataset.s24Folded;
        }
    };

    const run = () => document.querySelectorAll('.main-entityHeader-title h1').forEach(fix);
    new MutationObserver(run).observe(document.body, { subtree: true, childList: true, characterData: true });
    run();
})();
