import React from 'react';

// 莫兰迪配色系统
const COLORS = {
  bg: '#000000',
  bgSecondary: '#0A0A0A',
  bgTertiary: '#111111',
  border: '#1A1A1A',
  borderHover: '#2A2A2A',
  text: '#FAFAFA',
  textSecondary: '#B0B0B0',
  textMuted: '#666666',
  accent: '#5EADB4',
  accentHover: '#7FC4CC',
  accentMuted: '#1E3538',
};

// 代码字体
const CODE_FONT = "'IBM Plex Mono', 'SF Mono', Monaco, 'Andale Mono', 'Ubuntu Mono', monospace";

// 渲染行内代码、粗体、斜体、链接
export const renderInlineCode = (text: string, phaseColor: string): React.ReactNode => {
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  const regex = /(`[^`]+`)|(\*\*[^*]+\*\*)|(\*[^*]+\*)|(__[^_]+__)|(_[^_]+_)|(\[[^\]]+\]\([^)]+\))/g;
  let match;
  let lastIndex = 0;

  while ((match = regex.exec(remaining)) !== null) {
    if (match.index > lastIndex) {
      parts.push(<span key={key++}>{remaining.slice(lastIndex, match.index)}</span>);
    }

    const fullMatch = match[0];
    if (fullMatch.startsWith('`') && fullMatch.endsWith('`')) {
      parts.push(
        <code key={key++} className="px-1.5 py-0.5 rounded text-sm" style={{ backgroundColor: COLORS.bgSecondary, color: phaseColor, fontFamily: CODE_FONT }}>
          {fullMatch.slice(1, -1)}
        </code>
      );
    } else if (fullMatch.startsWith('[')) {
      const linkMatch = fullMatch.match(/\[([^\]]+)\]\(([^)]+)\)/);
      if (linkMatch) {
        parts.push(
          <a key={key++} href={linkMatch[2]} target="_blank" rel="noopener noreferrer" style={{ color: phaseColor, textDecoration: 'underline' }}>
            {linkMatch[1]}
          </a>
        );
      }
    } else if (fullMatch.startsWith('**') || fullMatch.startsWith('__')) {
      parts.push(<strong key={key++} style={{ color: COLORS.text, fontWeight: 700 }}>{fullMatch.slice(2, -2)}</strong>);
    } else if (fullMatch.startsWith('*') || fullMatch.startsWith('_')) {
      parts.push(<em key={key++} style={{ fontStyle: 'italic' }}>{fullMatch.slice(1, -1)}</em>);
    }

    lastIndex = match.index + fullMatch.length;
  }

  if (lastIndex < remaining.length) {
    parts.push(<span key={key++}>{remaining.slice(lastIndex)}</span>);
  }

  return parts.length === 0 ? text : <>{parts}</>;
};

// 渲染 Markdown 内容
export const renderMarkdown = (content: string, phaseColor: string): React.ReactElement[] => {
  const lines = content.split('\n');
  const elements: React.ReactElement[] = [];
  let inCodeBlock = false;
  let codeContent: string[] = [];
  let codeKey = 0;

  let inList = false;
  let listType: 'ul' | 'ol' = 'ul';
  let listItems: React.ReactNode[] = [];
  let listKey = 0;

  let tableRows: React.ReactNode[] = [];

  const flushList = () => {
    if (listItems.length > 0) {
      const ListTag = listType === 'ol' ? 'ol' : 'ul';
      elements.push(
        <ListTag key={`list-${listKey++}`} className="ml-6 mb-4" style={{ listStyleType: listType === 'ol' ? 'decimal' : 'disc' }}>
          {listItems}
        </ListTag>
      );
      listItems = [];
      inList = false;
    }
  };

  const flushTable = () => {
    if (tableRows.length > 0) {
      elements.push(
        <div key={`table-${listKey++}`} className="overflow-x-auto my-4">
          <table className="w-full border-collapse" style={{ borderColor: COLORS.border }}>
            <tbody>
              {tableRows}
            </tbody>
          </table>
        </div>
      );
      tableRows = [];
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // 代码块
    if (line.startsWith('```')) {
      flushList();
      flushTable();
      if (inCodeBlock) {
        elements.push(
          <pre
            key={`code-${codeKey++}`}
            className="rounded-lg my-4 overflow-x-auto"
            style={{
              backgroundColor: '#0A0A0A',
              border: `1px solid ${COLORS.border}`,
              padding: '1rem',
              fontFamily: CODE_FONT,
              fontSize: '0.875rem',
              lineHeight: '1.6',
            }}
          >
            <code style={{ fontFamily: CODE_FONT, color: COLORS.textSecondary }}>
              {codeContent.join('\n')}
            </code>
          </pre>
        );
        codeContent = [];
        inCodeBlock = false;
      } else {
        inCodeBlock = true;
      }
      continue;
    }

    if (inCodeBlock) {
      codeContent.push(line);
      continue;
    }

    // 标题
    if (line.startsWith('# ')) {
      flushList();
      flushTable();
      elements.push(
        <h1 key={i} className="text-2xl font-bold mb-6 mt-8" style={{ color: COLORS.text }}>
          {renderInlineCode(line.slice(2), phaseColor)}
        </h1>
      );
    } else if (line.startsWith('## ')) {
      flushList();
      flushTable();
      elements.push(
        <h2 key={i} className="text-xl font-bold mb-4 mt-6" style={{ color: COLORS.text }}>
          {renderInlineCode(line.slice(3), phaseColor)}
        </h2>
      );
    } else if (line.startsWith('### ')) {
      flushList();
      flushTable();
      elements.push(
        <h3 key={i} className="text-lg font-semibold mb-3 mt-5" style={{ color: COLORS.text }}>
          {renderInlineCode(line.slice(4), phaseColor)}
        </h3>
      );
    } else if (line.startsWith('#### ')) {
      flushList();
      flushTable();
      elements.push(
        <h4 key={i} className="text-base font-semibold mb-2 mt-4" style={{ color: COLORS.text }}>
          {renderInlineCode(line.slice(5), phaseColor)}
        </h4>
      );
    }
    // 分割线
    else if (line.match(/^---+$/) || line.match(/^\*\*\*+$/)) {
      flushList();
      flushTable();
      elements.push(<hr key={i} className="my-6 border-0" style={{ borderTop: `1px solid ${COLORS.border}` }} />);
    }
    // 引用块
    else if (line.startsWith('> ')) {
      flushList();
      flushTable();
      elements.push(
        <blockquote
          key={i}
          className="border-l-4 my-4 pl-4 py-2"
          style={{
            borderColor: phaseColor,
            color: COLORS.textSecondary,
            backgroundColor: `${phaseColor}10`,
            borderRadius: '0 8px 8px 0',
          }}
        >
          {renderInlineCode(line.slice(2), phaseColor)}
        </blockquote>
      );
    }
    // 有序列表
    else if (line.match(/^\d+\.\s/)) {
      flushTable();
      if (!inList || listType !== 'ol') {
        flushList();
        inList = true;
        listType = 'ol';
      }
      const content = line.replace(/^\d+\.\s/, '');
      listItems.push(
        <li key={i} className="mb-2 py-1" style={{ color: COLORS.textSecondary }}>
          {renderInlineCode(content, phaseColor)}
        </li>
      );
    }
    // 无序列表
    else if (line.startsWith('- ') || line.startsWith('* ')) {
      flushTable();
      if (!inList || listType !== 'ul') {
        flushList();
        inList = true;
        listType = 'ul';
      }
      const content = line.slice(2);
      listItems.push(
        <li key={i} className="mb-2 py-1" style={{ color: COLORS.textSecondary }}>
          {renderInlineCode(content, phaseColor)}
        </li>
      );
    }
    // 表格
    else if (line.startsWith('|')) {
      flushList();
      const cells = line.split('|').filter(c => c.trim());
      if (cells.some(c => c.includes('---'))) continue;
      tableRows.push(
        <tr key={i} style={{ borderBottom: `1px solid ${COLORS.border}` }}>
          {cells.map((cell, j) => (
            <td key={j} className="px-4 py-2" style={{ color: COLORS.textSecondary }}>
              {renderInlineCode(cell.trim(), phaseColor)}
            </td>
          ))}
        </tr>
      );
    }
    // 空行
    else if (line.trim() === '') {
      flushList();
      flushTable();
      elements.push(<div key={i} className="h-4" />);
    }
    // 普通段落
    else {
      flushList();
      flushTable();
      elements.push(
        <p key={i} className="mb-4 leading-relaxed" style={{ color: COLORS.textSecondary }}>
          {renderInlineCode(line, phaseColor)}
        </p>
      );
    }
  }

  flushList();
  flushTable();

  return elements;
};
