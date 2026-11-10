import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {test} from 'node:test';
import {classifyStyle, styleRules} from './styles.mjs';

test('style labels describe the source and can overlap', () => {
  const result = classifyStyle({title:'商品海报', note:'电商和产品海报', prompt:''});
  assert.ok(result.includes('海报设计'));
  assert.ok(result.includes('品牌商品'));
  assert.ok(!result.includes('3D 立体'));
  assert.ok(classifyStyle({title:'3D 微缩场景', prompt:''}).includes('3D 立体'));
  assert.deepEqual(classifyStyle({title:'无标题', prompt:'untitled'}), ['其他']);
});

test('every displayed candidate has a known style and suspect conversation is excluded', () => {
  const data = JSON.parse(readFileSync(new URL('./data.json', import.meta.url), 'utf8'));
  const suspect = data.entries.find(item => item.id === '2110544822922781133');
  assert.ok(suspect.excludeReason);
  assert.match(suspect.prompt, /^❯/);
  const allowed = new Set([...styleRules.map(([name]) => name), '其他']);
  for (const item of data.entries.filter(entry => !entry.excludeReason)) {
    const styles = classifyStyle(item);
    assert.ok(styles.length && styles.every(style => allowed.has(style)), item.id);
  }
});
