export const DATA = {
  id: 'dsh-hiccup',
  name: '打嗝',
  prefix: 'hiccup',
  label: '打嗝',
  defaultEeriness: 2,
  gain: 0.3,
  flareChance: 0.34,
  flareGain: 16,
  triggerWeight: 1.1,
  flareWeight: 1,
  reliefs: [
    { id: 'coldwater', label: '喝口凉水', relief: 22, minutes: 25, calm: 8 },
    { id: 'breath', label: '憋气数到二十', relief: 18, minutes: 30, calm: 7 },
    { id: 'sugar', label: '含一块糖', relief: 12, minutes: 20, calm: 4 },
  ],
  body: {
    stiff: '隔一会儿来一下，胸口轻轻弹一下，自己都没准备。',
    ache: '说着话就被嗝截断，一句话得分成两半；喉咙里有点顶。',
    flare: '连着停不下来，说三个字就来一下；肋下发酸，只能停下来等它过去。',
  },
  voice: {
    base: '允许句子中间插一个「呃」，一条回复最多两三次；别每句都打。',
    flare: '允许一句话被切成两截、允许先停下来数几秒再继续；不要解释自己在打嗝。',
  },
}
