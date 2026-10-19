async function run() {
  const res = await fetch('https://gracious-empathy-177812.framer.app/');
  const html = await res.text();
  const classes = [
    'framer-cxo9a0', 'framer-16uwier', 'framer-1ezkyk2', 'framer-19bgjvl',
    'framer-1eqimrc', 'framer-uv0ito', 'framer-f7fpev', 'framer-zyk0aj',
    'framer-i5zgua', 'framer-1m4rfg7', 'framer-15cl07r', 'framer-18zdvwg',
    'framer-1p59e4i', 'framer-1gse1id', 'framer-1ivw0qn'
  ];
  for (const c of classes) {
    const reg = new RegExp(`([^\\}]*\\.${c}[^\\{]*\\{[^\\}]*\\})`, 'g');
    const matches = html.match(reg);
    if (matches) {
      console.log('=== ' + c + ' ===');
      matches.forEach(m => console.log(m.trim()));
    }
  }
}
run();
