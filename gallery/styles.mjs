// These are navigation labels inferred from the post title or prompt, not author-provided metadata.
export const styleRules = [
  ['海报设计', /海报|招贴|poster/i],
  ['字体排版', /字体|字形|排版|文字|大字|手写|书法|typograph|lettering/i],
  ['手绘插画', /手绘|插画|蜡笔|水彩|油画|绘本|素描|铅笔|丙烯|涂鸦|illustrat|sketch|watercolor/i],
  ['拼贴手作', /拼贴|剪纸|折纸|布艺|刺绣|纸艺|贴纸|版画|collage|papercut|origami/i],
  ['3D 立体', /3d|立体|微缩|浮雕|等距|isometric/i],
  ['摄影人像', /摄影|人像|头像|婚纱|照片|portrait|photograph|\bphoto\b/i],
  ['品牌商品', /商品|产品|电商|广告|包装|品牌|商用|价目表|mockup|product|packaging/i],
  ['信息图鉴', /信息图|图鉴|科普|信息设计|蓝图|流程图|infograph|diagram/i],
  ['东方国风', /国风|中式|东方|水墨|印章|书法|文物|节气|中国风|chinese/i],
  ['几何抽象', /几何|抽象|图形|色块|矢量|像素|geometric|abstract|vector/i],
  ['复古印刷', /复古|做旧|印刷|网点|版画|(?:^|x)\s*旧(?:\s|$)|retro|vintage/i],
  ['极简留白', /极简|简约|留白|minimal|negative space/i],
  ['情绪氛围', /治愈|情绪|温柔|温暖|文艺|抒情|朦胧|氛围|cinematic/i]
];

export function classifyStyle(item) {
  const match = text => styleRules.filter(([, pattern]) => pattern.test(text)).map(([label]) => label);
  const description = match(`${item.title || ''}\n${(item.note || '').slice(0, 200)}`);
  const inferred = description.length ? description : match((item.prompt || '').slice(0, 500));
  return inferred.length ? inferred : ['其他'];
}
