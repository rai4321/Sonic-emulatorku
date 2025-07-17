window.Sega = {
  init(opts) {
    const canvas = document.getElementById(opts.canvasId);
    const ctx = canvas.getContext('2d');
    fetch(opts.romUrl).then(r => r.arrayBuffer()).then(buf => {
      console.log('ROM loaded, size:', buf.byteLength);
      // Emulator asli akan diintegrasikan di sini
    });
  },
  keyDown(key){ console.log(key+' down'); },
  keyUp(key){ console.log(key+' up'); }
};

