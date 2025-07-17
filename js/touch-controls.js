const TouchControls = {
  bind(map) {
    for (let key in map) {
      const el = document.querySelector(map[key]);
      if (!el) continue;
      el.addEventListener('touchstart', e => { e.preventDefault(); Sega.keyDown(key); });
      el.addEventListener('touchend', e => { e.preventDefault(); Sega.keyUp(key); });
    }
  }
};
