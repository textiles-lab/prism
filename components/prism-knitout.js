Prism.languages.knitout = {
  header: [
    {
      pattern: /(^|[^\\:]);!.*/,
      lookbehind: !0,
      greedy: !0,
    },
    {
      pattern: /(^|[^\\:]);;.*/,
      lookbehind: !0,
      greedy: !0,
    },
  ],
  comment: [
    {
      pattern: /(^|[^\\:]);.*/,
      lookbehind: !0,
      greedy: !0,
    },
  ],
  extension: [
    {
      pattern: /x-(.*?)[\s]/,
    },
  ],
  knit: /knit/g,
  xfer: /xfer/g,
  tuck: /tuck/g,
  miss: /miss/g,
  drop: /drop/g,
  rack: [
    {
      pattern: /rack(.*?)[\s]/,
    },
  ],
  hook: /inhook|releasehook|outhook|in |out /,
  direction: / - | \+ /g,
  carrier: / \d\s| \d;*/,
  bed_f: /f+(?=\d)/,
  bed_b: /b+(?=\d)/,
  kn_number: /^\d+$/,
};
