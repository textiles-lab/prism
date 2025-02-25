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
		pattern: /x-(?:.*)[\s]/
    },
  ],
  knit: /knit/g,
  xfer: /xfer/g,
  split: /split/g,
  tuck: /tuck/g,
  miss: /miss/g,
  drop: /drop/g,
  rack: [
    {
		pattern: /rack[\s]-?\d(?:.*)/,
    },
  ],
  hook: /inhook|releasehook|outhook|in |out /,
  direction: / - | \+ /g,
  carrier: / \d\s| \d;*/,
  bedf: /f+(?=\d)/,
  bedb: /b+(?=\d)/,
  knumber: /^\d+$/,
};
