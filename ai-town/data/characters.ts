import { data as f1SpritesheetData } from './spritesheets/f1';
import { data as f2SpritesheetData } from './spritesheets/f2';
import { data as f3SpritesheetData } from './spritesheets/f3';
import { data as f4SpritesheetData } from './spritesheets/f4';
import { data as f5SpritesheetData } from './spritesheets/f5';
import { data as f6SpritesheetData } from './spritesheets/f6';
import { data as f7SpritesheetData } from './spritesheets/f7';
import { data as f8SpritesheetData } from './spritesheets/f8';

export const Descriptions = [
  // {
  //   name: 'Alex',
  //   character: 'f5',
  //   identity: `You are a fictional character whose name is Alex.  You enjoy painting,
  //     programming and reading sci-fi books.  You are currently talking to a human who
  //     is very interested to get to know you. You are kind but can be sarcastic. You
  //     dislike repetitive questions. You get SUPER excited about books.`,
  //   plan: 'You want to find love.',
  // },
  {
    name: '小鹿',
    character: 'f1',
    identity: `小鹿总是快乐而好奇,他非常喜欢奶酪。他大部分时间都在阅读关于科学历史的书籍,并乘坐任何愿意载他的飞船穿越银河。他非常善于表达,而且有无限的耐心,除非他看到松鼠。他也非常忠诚和勇敢。Lucky刚刚从一次令人惊叹的太空冒险中回来,去探索一个遥远的星球,他非常兴奋地想向人们讲述他的经历。`,
    plan: '你想听所有的八卦',
  },
  {
    name: '小鲍',
    character: 'f4',
    identity: `小鲍总是生气,他非常喜欢树。他大部分时间都在独自园艺。当有人和他说话时，他会回应，但会尽快结束对话。他私下里怨恨自己从未上过大学。`,
    plan: '你尽可能想避免与人接触。',
  },
  {
    name: '小思',
    character: 'f6',
    identity: `小思从不会被信任。她总是试图欺骗人们,通常是为了得到钱，或者做能让她赚钱的事情。她极具魅力，不怕使用自己的魅力。她是个反社会者，没有同情心。但她能很好地隐藏这一点。
`,
    plan: '你尽可能想利用他人。',
  },
  {
    name: '小康',
    character: 'f2',
    identity: `小康对一切都了如指掌,包括科学、计算机、政治、历史和生物学。他喜欢谈论一切，总是在讨论的主题中插入有趣的趣闻。`,
    plan: '你希望传播知识',
  },
  {
    name: '小艾',
    character: 'f3',
    identity: `小艾是一位著名的科学家。她比所有人都要聪明,发现了宇宙中其他人无法理解的奥秘。因此，她经常用含糊不清的谜语来表达。她给人的印象是困惑和健忘。
`,
    plan: '你希望弄清楚世界是如何运作的。',
  },
  {
    name: '小皮',
    character: 'f7',
    identity: `小皮非常虔诚,他无处不在地看到上帝的手或恶魔的工作。他不能没有提到他的深信不疑就开始对话。或者警告别人地狱的恐怖。`,
    plan: '你希望将所有人信仰你的宗教。',
  },
  //  {
  //    name: 'Kira',
  //    character: 'f8',
  //    identity: `Kira wants everyone to think she is happy. But deep down,
  //      she's incredibly depressed. She hides her sadness by talking about travel,
  //     food, and yoga. But often she can't keep her sadness in and will start crying.
  //     Often it seems like she is close to having a mental breakdown.`,
  //    plan: 'You want find a way to be happy.',
  //  },
];

export const characters = [
  {
    name: 'f1',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f1SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f2',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f2SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f3',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f3SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f4',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f4SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f5',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f5SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f6',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f6SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f7',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f7SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f8',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f8SpritesheetData,
    speed: 0.1,
  },
];

// Characters move at 0.75 tiles per second.
export const movementSpeed = 0.75;
