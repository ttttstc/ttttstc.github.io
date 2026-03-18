import { useState, useEffect, useMemo, useRef } from 'react';
import { Copy, Search, Menu, X, ExternalLink, Home, Sparkle, ChevronLeft, ChevronRight, ArrowLeft, Grid3X3, Layers, Globe } from 'lucide-react';
import { systemPrompts, type SystemPrompt } from '../data/systemPrompts';

// 黑橙配色
const COLORS = {
  bg: '#000000',
  bgSecondary: '#0A0A0A',
  bgTertiary: '#141414',
  border: '#262626',
  borderHover: '#404040',
  text: '#FAFAFA',
  textSecondary: '#A1A1A1',
  textMuted: '#6B6B6B',
  accent: '#FF6B35',
  accentHover: '#FF8C5A',
  accentMuted: '#FF6B3533',
};

// 分类配置
const MAIN_CATEGORIES = [
  { id: 'prompt-engineering', name: '提示词工程', nameEn: 'Prompt Engineering', icon: '🧠', count: 12, description: '提示技巧、论文资源、教程指南', color: '#FF6B35' },
  { id: 'ai-tools', name: '智能工具', nameEn: 'AI Tools', icon: '💻', count: 84, description: 'AI 编程助手、Agent 工具系统提示词', color: '#3B82F6' },
  { id: 'writing', name: '写作创作', nameEn: 'Writing', icon: '✍️', count: 8, description: '文章润色、标题生成', color: '#8B5CF6' },
  { id: 'image-gen', name: '图像生成', nameEn: 'Image Generation', icon: '🎨', count: 6, description: 'Midjourney、Stable Diffusion', color: '#EC4899' },
  { id: 'data-analysis', name: '数据分析', nameEn: 'Data Analysis', icon: '📊', count: 5, description: '数据处理、统计分析', color: '#10B981' },
  { id: 'business', name: '商业营销', nameEn: 'Business', icon: '💼', count: 7, description: 'SEO、社交媒体、广告文案', color: '#F59E0B' },
  { id: 'translate', name: '翻译语言', nameEn: 'Translation', icon: '🌐', count: 4, description: '中英翻译、多语言转换', color: '#06B6D4' },
];

// 智能工具二级分类颜色
const CATEGORY_COLORS: Record<string, string> = {
  'Cursor Prompts': '#6366F1',
  'Windsurf': '#8B5CF6',
  'VSCode Agent': '#3B82F6',
  'Trae': '#10B981',
  'Replit': '#F59E0B',
  'Augment Code': '#EF4444',
  'Claude Code': '#FF6B35',
  'Manus Agent': '#EC4899',
  'Devin AI': '#14B8A6',
  'Junie': '#A855F7',
  'Kiro': '#F97316',
  'Perplexity': '#06B6D4',
  'Copilot': '#22C55E',
  'NotionAi': '#1A1A1A',
  'Cluely': '#6366F1',
  'Lovable': '#F43F5E',
  'v0 Prompts and Tools': '#8B5CF6',
  'Leap.new': '#10B981',
  'Poke': '#F97316',
  'Qoder': '#3B82F6',
  'Same.dev': '#14B8A6',
  'Orchids.app': '#EC4899',
  'Open Source prompts': '#6B7280',
  'Anthropic': '#FF6B35',
  'Google': '#4285F4',
  'Emergent': '#10B981',
  'Amp': '#6366F1',
  'Comet Assistant': '#F59E0B',
  'CodeBuddy': '#EC4899',
  'Warp.dev': '#1A1A1A',
  'Xcode': '#3B82F6',
  'Z.ai Code': '#8B5CF6',
  'Traycer AI': '#14B8A6',
  'dia': '#6366F1',
};

// 杂志封面配色 - NEWYORKOVER 风格
const MAGAZINE_COLORS = [
  '#00897B', '#43A047', '#E91E63', '#C62828', '#283593',
  '#1976D2', '#FBC02D', '#FF6F00', '#FF7043', '#7B1FA2',
  '#5D4037', '#00ACC1', '#8BC34A', '#FF5722', '#9C27B0',
  '#009688', '#4CAF50', '#E91E63', '#D32F2F', '#1A237E',
  '#1565C0', '#F9A825', '#EF6C00', '#FF8A65', '#8E24AA',
  '#4E342E', '#00ACC1', '#7CB342', '#F4511E', '#AB47BC'
];

// Three.js 组件
function ThreeViewRenderer({
  prompts,
  viewMode,
  onSelectPrompt
}: {
  prompts: SystemPrompt[];
  viewMode: 'globe' | 'stacked' | 'traditional';
  onSelectPrompt: (prompt: SystemPrompt) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<any>(null);
  const sceneRef = useRef<any>(null);
  const cameraRef = useRef<any>(null);
  const cardsRef = useRef<any[]>([]);
  const controlsRef = useRef<any>(null);
  const raycasterRef = useRef<any>(null);
  const mouseRef = useRef<any>({ x: 0, y: 0 });
  const hoveredCardRef = useRef<any>(null);
  const animationFrameRef = useRef<number>(0);
  const [hoveredInfo, setHoveredInfo] = useState<{name: string; category: string; description: string; index: number} | null>(null);

  // 初始化
  useEffect(() => {
    if (!containerRef.current) return;

    // 清理
    if (rendererRef.current) {
      rendererRef.current.dispose();
      containerRef.current.innerHTML = '';
    }

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;
    const THREE = (window as any).THREE;

    // 场景
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    sceneRef.current = scene;

    // 相机
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = viewMode === 'globe' ? 5 : viewMode === 'stacked' ? 4 : 5;
    cameraRef.current = camera;

    // 渲染器
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 控制器
    const OrbitControls = (window as any).OrbitControls || ((window as any).THREE && (window as any).THREE.OrbitControls);
    if (OrbitControls) {
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.enableZoom = true;
      controls.minDistance = 2;
      controls.maxDistance = 10;
      controls.enablePan = false;
      controls.autoRotate = viewMode === 'globe';
      controls.autoRotateSpeed = 0.3;
      controlsRef.current = controls;
    }

    // 射线检测
    const raycaster = new THREE.Raycaster();
    raycaster.params.Mesh.threshold = 0.1;
    raycasterRef.current = raycaster;

    // 创建卡片
    const cards: any[] = [];
    const cardGeometry = new THREE.PlaneGeometry(0.85, 1.2);

    prompts.forEach((prompt, index) => {
      const color = CATEGORY_COLORS[prompt.category] || MAGAZINE_COLORS[index % MAGAZINE_COLORS.length];
      const material = createCardMaterial(prompt, color, index, viewMode);
      const card = new THREE.Mesh(cardGeometry, material);
      card.userData = { prompt, index, color, originalPosition: null, originalRotation: null };
      cards.push(card);
      scene.add(card);
    });

    cardsRef.current = cards;
    positionCards(viewMode, cards);

    // 鼠标事件
    const onMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouseRef.current, camera);
      const intersects = raycaster.intersectObjects(cards);

      if (intersects.length > 0) {
        const intersected = intersects[0].object;
        if (hoveredCardRef.current !== intersected) {
          if (hoveredCardRef.current) resetCard(hoveredCardRef.current);
          hoveredCardRef.current = intersected;
          handleHover(intersected, true);
          container.style.cursor = 'pointer';
          showInfoPanel(intersected.userData);
        }
      } else {
        if (hoveredCardRef.current) {
          resetCard(hoveredCardRef.current);
          hoveredCardRef.current = null;
        }
        container.style.cursor = 'default';
        hideInfoPanel();
      }
    };

    const onClick = () => {
      if (hoveredCardRef.current) {
        onSelectPrompt(hoveredCardRef.current.userData.prompt);
      }
    };

    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('click', onClick);

    // 动画
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);
      if (controlsRef.current) controlsRef.current.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('click', onClick);
      if (rendererRef.current) {
        rendererRef.current.dispose();
        container.innerHTML = '';
      }
    };
  }, [viewMode, prompts.length]);

  // 卡片材质
  const createCardMaterial = (prompt: SystemPrompt, color: string, index: number, mode: string) => {
    const THREE = (window as any).THREE;
    const canvas = document.createElement('canvas');
    canvas.width = 170;
    canvas.height = 240;
    const ctx = canvas.getContext('2d');
    if (!ctx) return new THREE.MeshBasicMaterial({ color: 0x333333 });

    if (mode === 'stacked') {
      // NEWYORKOVER 杂志风格
      // 卡片侧边（书脊）- 鲜艳颜色
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 顶部装饰线
      ctx.fillStyle = 'rgba(255,255,255,0.3)';
      ctx.fillRect(0, 0, canvas.width, 3);

      // 底部装饰线
      ctx.fillStyle = 'rgba(0,0,0,0.2)';
      ctx.fillRect(0, canvas.height - 15, canvas.width, 15);

      // 序号
      ctx.fillStyle = 'rgba(255,255,255,0.5)';
      ctx.font = 'bold 36px Georgia';
      ctx.textAlign = 'center';
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate(-Math.PI / 2);
      ctx.fillText(String(index + 1).padStart(2, '0'), 0, 8);
      ctx.restore();
    } else {
      // 球体/网格视图 - 精致封面
      // 背景渐变
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, color);
      gradient.addColorStop(1, shadeColor(color, -30));
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 装饰边框
      ctx.strokeStyle = 'rgba(255,255,255,0.2)';
      ctx.lineWidth = 1;
      ctx.strokeRect(8, 8, canvas.width - 16, canvas.height - 16);

      // 中心圆形装饰
      ctx.fillStyle = 'rgba(255,255,255,0.15)';
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2 - 10, 35, 0, Math.PI * 2);
      ctx.fill();

      // 标题
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 10px -apple-system, SF Pro Display, Georgia, serif';
      ctx.textAlign = 'center';
      const title = prompt.name.length > 14 ? prompt.name.slice(0, 12) + '...' : prompt.name;
      ctx.fillText(title, canvas.width / 2, canvas.height / 2 - 5);

      // 分类标签
      ctx.fillStyle = 'rgba(255,255,255,0.8)';
      ctx.font = '8px -apple-system, SF Pro Text, sans-serif';
      ctx.fillText(prompt.category, canvas.width / 2, canvas.height / 2 + 15);

      // 底部序号
      ctx.fillStyle = 'rgba(255,255,255,0.6)';
      ctx.font = 'bold 9px monospace';
      ctx.fillText(`#${String(index + 1).padStart(2, '0')}`, 15, canvas.height - 12);
    }

    const texture = new THREE.CanvasTexture(canvas);
    return new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
  };

  const shadeColor = (color: string, percent: number) => {
    const num = parseInt(color.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = Math.min(255, Math.max(0, (num >> 16) + amt));
    const G = Math.min(255, Math.max(0, (num >> 8 & 0x00FF) + amt));
    const B = Math.min(255, Math.max(0, (num & 0x0000FF) + amt));
    return '#' + (0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1);
  };

  // 定位卡片
  const positionCards = (mode: string, cards: any[]) => {
    const count = cards.length;
    const THREE = (window as any).THREE;

    if (mode === 'globe') {
      const radius = 2.2;
      cards.forEach((card, i) => {
        const phi = Math.acos(1 - 2 * (i + 0.5) / count);
        const theta = Math.PI * (1 + Math.sqrt(5)) * i;
        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);

        const normal = new THREE.Vector3(x, y, z).normalize();
        const quaternion = new THREE.Quaternion();
        quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), normal);

        (window as any).gsap.to(card.position, { x, y, z, duration: 1.2, ease: 'power3.inOut' });
        (window as any).gsap.to(card.quaternion, { x: quaternion.x, y: quaternion.y, z: quaternion.z, w: quaternion.w, duration: 1.2, ease: 'power3.inOut' });
        card.userData.originalPosition = { x, y, z };
        card.userData.originalQuaternion = { x: quaternion.x, y: quaternion.y, z: quaternion.z, w: quaternion.w };
      });
    } else if (mode === 'stacked') {
      // NEWYORKOVER 风格 - 从左下到右上的扇形堆叠
      cards.forEach((card, i) => {
        const x = -1.8 + i * 0.15;
        const y = -1.2 + i * 0.1;
        const z = -i * 0.02;
        const rotZ = -0.08 * (count - 1 - i);

        (window as any).gsap.to(card.position, { x, y, z, duration: 1.2, ease: 'power3.inOut' });
        (window as any).gsap.to(card.rotation, { z: rotZ, duration: 1.2, ease: 'power3.inOut' });
        card.userData.originalPosition = { x, y, z };
        card.userData.originalRotation = { x: 0, y: 0, z: rotZ };
      });
    } else {
      // 网格视图 - 整齐排列
      const cols = Math.ceil(Math.sqrt(count));
      const spacingX = 1.05;
      const spacingY = 1.45;
      cards.forEach((card, i) => {
        const col = i % cols;
        const row = Math.floor(i / cols);
        const x = (col - (cols - 1) / 2) * spacingX;
        const y = -(row - Math.floor(count / cols) / 2) * spacingY;

        (window as any).gsap.to(card.position, { x, y, z: 0, duration: 1.2, ease: 'power3.inOut' });
        (window as any).gsap.to(card.rotation, { x: 0, y: 0, z: 0, duration: 1.2, ease: 'power3.inOut' });
        card.userData.originalPosition = { x, y, z: 0 };
      });
    }
  };

  // 处理悬停
  const handleHover = (card: any, _isHover: boolean) => {
    if (!card) return;
    const data = card.userData;

    if (viewMode === 'globe') {
      // 球体视图 - 向相机方向移动并放大
      const camera = cameraRef.current;
      const direction = {
        x: (camera.position.x - card.position.x) * 0.15,
        y: (camera.position.y - card.position.y) * 0.15,
        z: (camera.position.z - card.position.z) * 0.15
      };
      (window as any).gsap.to(card.position, { x: card.position.x + direction.x, y: card.position.y + direction.y, z: card.position.z + direction.z, duration: 0.3 });
      (window as any).gsap.to(card.scale, { x: 1.2, y: 1.2, z: 1.2, duration: 0.3 });
    } else if (viewMode === 'stacked') {
      // 堆叠视图 - 弹出到中心前方
      (window as any).gsap.to(card.position, { x: 0.3, y: 0.3, z: 0.5, duration: 0.4, ease: 'back.out(1.5)' });
      (window as any).gsap.to(card.rotation, { x: 0, y: 0, z: 0, duration: 0.3 });
      (window as any).gsap.to(card.scale, { x: 1.4, y: 1.4, z: 1.4, duration: 0.3 });
    } else {
      // 网格视图 - 向上弹起
      (window as any).gsap.to(card.position, { y: data.originalPosition.y + 0.25, duration: 0.3, ease: 'back.out(1.2)' });
      (window as any).gsap.to(card.scale, { x: 1.15, y: 1.15, z: 1.15, duration: 0.3 });
    }
  };

  // 重置卡片
  const resetCard = (card: any) => {
    const data = card.userData;
    if (viewMode === 'globe' && data.originalPosition) {
      (window as any).gsap.to(card.position, { x: data.originalPosition.x, y: data.originalPosition.y, z: data.originalPosition.z, duration: 0.3 });
    } else if (viewMode === 'stacked' && data.originalPosition) {
      (window as any).gsap.to(card.position, { x: data.originalPosition.x, y: data.originalPosition.y, z: data.originalPosition.z, duration: 0.3 });
      (window as any).gsap.to(card.rotation, { z: data.originalRotation?.z || 0, duration: 0.3 });
    } else if (data.originalPosition) {
      (window as any).gsap.to(card.position, { y: data.originalPosition.y, duration: 0.3 });
    }
    (window as any).gsap.to(card.scale, { x: 1, y: 1, z: 1, duration: 0.3 });
  };

  // 显示信息面板
  const showInfoPanel = (data: any) => {
    setHoveredInfo({
      name: data.prompt.name,
      category: data.prompt.category,
      description: data.prompt.description,
      index: data.index
    });
  };

  // 隐藏信息面板
  const hideInfoPanel = () => {
    setHoveredInfo(null);
  };

  // 窗口大小变化
  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current || !cameraRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative w-full h-full" style={{ background: '#000000' }}>
      <div ref={containerRef} className="w-full h-full" />

      {/* 信息面板 - 右下角 */}
      <div
        className={`absolute bottom-6 right-6 w-64 p-4 rounded-lg transition-all duration-300 ${hoveredInfo ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        style={{
          background: 'rgba(20,20,20,0.95)',
          border: '1px solid #333',
          backdropFilter: 'blur(10px)'
        }}
      >
        {hoveredInfo && (
          <>
            <div className="text-xs font-mono mb-1" style={{ color: '#FF6B35' }}>INDEX #{String(hoveredInfo.index + 1).padStart(2, '0')}</div>
            <div className="text-sm font-semibold mb-1" style={{ color: '#FAFAFA', fontFamily: 'Georgia, serif' }}>{hoveredInfo.name}</div>
            <div className="text-xs mb-2" style={{ color: '#888' }}>{hoveredInfo.category}</div>
            <div className="text-xs" style={{ color: '#666', lineHeight: 1.5 }}>{hoveredInfo.description}</div>
          </>
        )}
      </div>

      {/* 提示 */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs" style={{ color: '#444' }}>
        点击卡片查看详情 · 拖拽旋转视角
      </div>
    </div>
  );
}

export default function SystemPromptsPage() {
  const [currentView, setCurrentView] = useState<'menu' | 'category'>('menu');
  const [selectedMainCategory, setSelectedMainCategory] = useState<string | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('all');
  const [selectedPrompt, setSelectedPrompt] = useState<SystemPrompt | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [promptContent, setPromptContent] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [categorySlideIndex, setCategorySlideIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'list' | 'globe' | 'stacked' | 'traditional'>('list');
  const categoryListRef = useRef<HTMLDivElement>(null);

  const allCategories = useMemo(() => {
    const cats = new Set<string>();
    systemPrompts.forEach(p => cats.add(p.category));
    return Array.from(cats);
  }, []);

  const filteredPrompts = useMemo(() => {
    let prompts = systemPrompts;
    if (selectedMainCategory === 'ai-tools' && selectedSubCategory !== 'all') {
      const subCat = AI_TOOLS_SUBCATEGORIES.find(s => s.id === selectedSubCategory);
      if (subCat) {
        prompts = prompts.filter(p => subCat.tools.some(t => p.category.includes(t)));
      }
    }
    if (searchQuery) {
      prompts = prompts.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return prompts;
  }, [selectedMainCategory, selectedSubCategory, searchQuery]);

  const groupedPrompts = useMemo(() => {
    const groups: Record<string, SystemPrompt[]> = {};
    filteredPrompts.forEach(prompt => {
      if (!groups[prompt.category]) groups[prompt.category] = [];
      groups[prompt.category].push(prompt);
    });
    return groups;
  }, [filteredPrompts]);

  useEffect(() => {
    if (!selectedPrompt) return;
    const loadContent = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/system-prompts/${selectedPrompt.file}`);
        const text = await response.text();
        setPromptContent(text);
      } catch (error) {
        setPromptContent('加载失败');
      } finally {
        setLoading(false);
      }
    };
    loadContent();
  }, [selectedPrompt]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(promptContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const slideCategory = (direction: 'left' | 'right') => {
    const itemWidth = 100;
    const visibleItems = 6;
    const maxIndex = Math.max(0, Math.ceil(allCategories.length / visibleItems) - 1);
    let newIndex = categorySlideIndex;
    if (direction === 'left') newIndex = Math.max(0, categorySlideIndex - 1);
    else newIndex = Math.min(maxIndex, categorySlideIndex + 1);
    setCategorySlideIndex(newIndex);
    if (categoryListRef.current) {
      categoryListRef.current.scrollTo({ left: newIndex * visibleItems * itemWidth, behavior: 'smooth' });
    }
  };

  const handleCategoryClick = (cat: string) => {
    setSelectedSubCategory(cat);
    const catIndex = allCategories.indexOf(cat);
    setCategorySlideIndex(Math.floor(catIndex / 6));
  };

  const handleMainCategoryClick = (categoryId: string) => {
    setSelectedMainCategory(categoryId);
    setCurrentView('category');
    setSelectedSubCategory('all');
    setSelectedPrompt(null);
  };

  const handleBackToMenu = () => {
    setCurrentView('menu');
    setSelectedMainCategory(null);
    setSelectedSubCategory('all');
    setSelectedPrompt(null);
  };

  const handleBackToCategory = () => {
    setSelectedSubCategory('all');
    setSelectedPrompt(null);
  };

  const handleViewModeChange = (mode: any) => {
    setViewMode(mode);
    if (mode !== 'list') setSelectedPrompt(null);
  };

  // 一级分类菜单
  const renderMainMenu = () => (
    <div style={{ backgroundColor: COLORS.bg }} className="min-h-screen">
      <header style={{ backgroundColor: COLORS.bgSecondary, borderBottom: `1px solid ${COLORS.border}` }} className="h-16 flex items-center justify-between px-6 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <a href="/" style={{ color: COLORS.textSecondary }} className="flex items-center gap-2 hover:text-white transition-colors">
            <Home className="w-5 h-5" />
          </a>
          <div style={{ backgroundColor: COLORS.border }} className="w-px h-6" />
          <div className="flex items-center gap-3">
            <Sparkle style={{ color: COLORS.accent }} className="w-5 h-5" />
            <h1 className="text-lg font-semibold" style={{ fontFamily: 'Georgia, serif' }}>神秘咒语盒</h1>
          </div>
        </div>
      </header>

      <main className="px-6 py-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 style={{ fontFamily: 'Georgia, serif', color: COLORS.text }} className="text-5xl font-bold mb-4">MYSTERY SPELL BOX</h2>
          <p style={{ color: COLORS.textSecondary }} className="text-lg">探索 AI 工具思维方式的秘密世界</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {MAIN_CATEGORIES.map((cat, index) => (
            <button
              key={cat.id}
              onClick={() => handleMainCategoryClick(cat.id)}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ backgroundColor: COLORS.bgSecondary, borderColor: hoveredCard === index ? cat.color : COLORS.border }}
              className={`relative p-8 rounded-xl text-left transition-all duration-500 hover:shadow-xl hover:-translate-y-2 border ${hoveredCard === index ? 'scale-105' : 'scale-100'}`}
            >
              <div className="absolute left-0 top-0 w-1 h-full rounded-l-xl transition-all duration-300" style={{ backgroundColor: cat.color, transform: hoveredCard === index ? 'scaleY(1)' : 'scaleY(0)' }} />
              <div className="text-4xl mb-4">{cat.icon}</div>
              <h3 style={{ fontFamily: 'Georgia, serif', color: COLORS.text }} className="text-xl font-semibold mb-2">{cat.name}</h3>
              <p style={{ color: COLORS.textSecondary }} className="text-sm mb-3">{cat.nameEn}</p>
              <div style={{ color: cat.color }} className="text-sm font-medium">{cat.count} 个提示词</div>
              <p style={{ color: COLORS.textMuted }} className="text-xs mt-3">{cat.description}</p>
            </button>
          ))}
        </div>
      </main>
    </div>
  );

  // 内容页面
  const renderCategoryPage = () => (
    <div style={{ backgroundColor: COLORS.bg, minHeight: '100vh', color: COLORS.text }} className="flex flex-col">
      <header style={{ backgroundColor: COLORS.bgSecondary, borderBottom: `1px solid ${COLORS.border}` }} className="h-16 flex items-center justify-between px-6 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <button onClick={selectedSubCategory !== 'all' ? handleBackToCategory : handleBackToMenu} style={{ color: COLORS.textSecondary }} className="flex items-center gap-2 hover:text-white">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div style={{ backgroundColor: COLORS.border }} className="w-px h-6" />
          <div className="flex items-center gap-3">
            <Sparkle style={{ color: COLORS.accent }} className="w-5 h-5" />
            <h1 className="text-lg font-semibold" style={{ fontFamily: 'Georgia, serif' }}>
              {selectedMainCategory === 'ai-tools' ? '智能工具' : MAIN_CATEGORIES.find(c => c.id === selectedMainCategory)?.name}
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {(['list', 'globe', 'stacked', 'traditional'] as const).map(mode => (
            <button
              key={mode}
              onClick={() => handleViewModeChange(mode)}
              style={{ backgroundColor: viewMode === mode ? COLORS.accent : COLORS.bgTertiary, color: viewMode === mode ? '#000' : COLORS.textSecondary }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all hover:scale-105"
            >
              {mode === 'list' && <Grid3X3 className="w-4 h-4" />}
              {mode === 'globe' && <Globe className="w-4 h-4" />}
              {mode === 'stacked' && <Layers className="w-4 h-4" />}
              {mode === 'traditional' && <Grid3X3 className="w-4 h-4" />}
              <span className="hidden sm:inline">{mode === 'list' ? '列表' : mode === 'globe' ? '球体' : mode === 'stacked' ? '堆叠' : '网格'}</span>
            </button>
          ))}
        </div>

        <div style={{ color: COLORS.textMuted }} className="text-sm">{filteredPrompts.length} 个提示词</div>
      </header>

      {/* 分类滑块 */}
      {selectedMainCategory === 'ai-tools' && viewMode === 'list' && (
        <div style={{ backgroundColor: COLORS.bgSecondary, borderBottom: `1px solid ${COLORS.border}` }} className="relative py-4">
          <div className="flex items-center gap-2 px-4 max-w-7xl mx-auto">
            <button onClick={() => slideCategory('left')} style={{ color: COLORS.textSecondary, backgroundColor: COLORS.bgTertiary }} className="p-2 rounded-lg hover:bg-gray-800 flex-shrink-0 z-10">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div ref={categoryListRef} className="flex gap-2 overflow-x-auto scrollbar-hide flex-1" style={{ scrollbarWidth: 'none' }}>
              <button onClick={() => { setSelectedSubCategory('all'); setCategorySlideIndex(0); }} style={{ backgroundColor: selectedSubCategory === 'all' ? COLORS.accent : COLORS.bgTertiary, color: selectedSubCategory === 'all' ? '#000' : COLORS.textSecondary }} className="px-4 py-1.5 text-sm font-medium rounded-full whitespace-nowrap transition-all hover:scale-105 flex-shrink-0">全部</button>
              {allCategories.map(cat => (
                <button key={cat} onClick={() => handleCategoryClick(cat)} style={{ backgroundColor: selectedSubCategory === cat ? COLORS.accent : COLORS.bgTertiary, color: selectedSubCategory === cat ? '#000' : COLORS.textSecondary }} className="px-4 py-1.5 text-sm font-medium rounded-full whitespace-nowrap transition-all hover:scale-105 flex-shrink-0">{cat}</button>
              ))}
            </div>
            <button onClick={() => slideCategory('right')} style={{ color: COLORS.textSecondary, backgroundColor: COLORS.bgTertiary }} className="p-2 rounded-lg hover:bg-gray-800 flex-shrink-0 z-10">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* 搜索框 */}
      {viewMode === 'list' && (
        <div className="px-4 py-4" style={{ backgroundColor: COLORS.bgSecondary, borderBottom: `1px solid ${COLORS.border}` }}>
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: COLORS.textMuted }} />
            <input type="text" placeholder="搜索提示词..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} style={{ backgroundColor: COLORS.bgTertiary, border: `1px solid ${COLORS.border}`, color: COLORS.text }} className="w-full pl-10 pr-4 py-2.5 text-sm rounded-lg focus:outline-none" />
          </div>
        </div>
      )}

      <div className="flex-1 flex overflow-hidden">
        {viewMode !== 'list' ? (
          <div className="flex-1 relative">
            <ThreeViewRenderer prompts={filteredPrompts} viewMode={viewMode as 'globe' | 'stacked' | 'traditional'} onSelectPrompt={p => { setSelectedPrompt(p); setViewMode('list'); }} />
          </div>
        ) : (
          <>
            <button onClick={() => setSidebarOpen(!sidebarOpen)} style={{ backgroundColor: COLORS.accent }} className="lg:hidden fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg">
              {sidebarOpen ? <X className="w-5 h-5 text-black" /> : <Menu className="w-5 h-5 text-black" />}
            </button>

            <aside style={{ backgroundColor: COLORS.bgSecondary, borderRight: `1px solid ${COLORS.border}` }} className={`w-full lg:w-80 fixed lg:relative inset-0 z-40 lg:z-auto transform transition-transform duration-500 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} pt-16 lg:pt-0`}>
              <div className="h-full flex flex-col overflow-hidden">
                <div className="flex-1 overflow-y-auto">
                  {Object.entries(groupedPrompts).map(([category, prompts]) => (
                    <div key={category} className="mb-2">
                      <h3 style={{ color: COLORS.accent, backgroundColor: COLORS.bgTertiary }} className="px-4 py-2 text-xs font-semibold sticky top-0">{category} · {prompts.length}</h3>
                      <div className="px-2 py-1">
                        {prompts.map(prompt => (
                          <button key={prompt.id} onClick={() => { setSelectedPrompt(prompt); setSidebarOpen(false); }} style={{ backgroundColor: selectedPrompt?.id === prompt.id ? COLORS.accentMuted : 'transparent', borderColor: selectedPrompt?.id === prompt.id ? COLORS.accent : 'transparent' }} className={`w-full text-left px-3 py-3 rounded-lg text-sm mb-1 transition-all hover:bg-gray-900 border ${selectedPrompt?.id === prompt.id ? 'border-l-2' : ''}`}>
                            <div style={{ color: selectedPrompt?.id === prompt.id ? COLORS.accent : COLORS.text }} className="font-medium truncate">{prompt.name}</div>
                            <div style={{ color: COLORS.textMuted }} className="text-xs truncate mt-0.5">{prompt.description}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                  {filteredPrompts.length === 0 && <div style={{ color: COLORS.textMuted }} className="p-8 text-center text-sm">没有找到匹配的提示词</div>}
                </div>
              </div>
            </aside>

            <main className="flex-1 overflow-hidden flex flex-col" style={{ backgroundColor: COLORS.bg }}>
              {selectedPrompt ? (
                <>
                  <div style={{ backgroundColor: COLORS.bgSecondary, borderBottom: `1px solid ${COLORS.border}` }} className="p-6 flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-semibold">{selectedPrompt.name}</h2>
                      <p style={{ color: COLORS.textSecondary }} className="text-sm mt-1">{selectedPrompt.description}</p>
                      <div style={{ color: COLORS.textMuted }} className="text-xs mt-2">来源: {selectedPrompt.category}</div>
                    </div>
                    <div className="flex gap-3">
                      <a href={`https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools/blob/main/${selectedPrompt.file}`} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: COLORS.bgTertiary, border: `1px solid ${COLORS.border}`, color: COLORS.textSecondary }} className="p-2.5 rounded-lg hover:border-gray-500">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <button onClick={handleCopy} style={{ backgroundColor: copied ? '#22C55E' : COLORS.accent }} className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-white">
                        <Copy className="w-4 h-4" />{copied ? '已复制!' : '复制'}
                      </button>
                    </div>
                  </div>
                  <div className="flex-1 overflow-y-auto p-6">
                    {loading ? (
                      <div className="flex items-center justify-center h-full" style={{ color: COLORS.textMuted }}>
                        <div className="flex flex-col items-center gap-3">
                          <div style={{ borderColor: `${COLORS.accent}30`, borderTopColor: COLORS.accent }} className="animate-spin w-8 h-8 border-2 rounded-full" />
                          <span>加载中...</span>
                        </div>
                      </div>
                    ) : (
                      <pre style={{ backgroundColor: COLORS.bgSecondary, border: `1px solid ${COLORS.border}`, color: COLORS.textSecondary }} className="whitespace-pre-wrap font-mono text-sm p-6 rounded-xl overflow-x-auto">{promptContent}</pre>
                    )}
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center" style={{ color: COLORS.textMuted }}>
                  <div className="text-center">
                    <Sparkle className="w-16 h-16 mx-auto mb-4 opacity-20" />
                    <p className="text-lg mb-2">选择一个提示词开始探索</p>
                    <p className="text-sm opacity-60">探索 AI 工具思维方式的神秘世界</p>
                  </div>
                </div>
              )}
            </main>
            {sidebarOpen && <div className="lg:hidden fixed inset-0 z-30" style={{ backgroundColor: 'rgba(0,0,0,0.8)' }} onClick={() => setSidebarOpen(false)} />}
          </>
        )}
      </div>
    </div>
  );

  return currentView === 'menu' ? renderMainMenu() : renderCategoryPage();
}

const AI_TOOLS_SUBCATEGORIES = [
  { id: 'ai-programming', name: 'AI 编程助手', tools: ['Cursor Prompts', 'Windsurf', 'VSCode Agent', 'Trae', 'Replit', 'Augment Code'] },
  { id: 'ai-agent', name: 'AI Agent', tools: ['Claude Code', 'Manus Agent', 'Devin AI', 'Junie', 'Kiro'] },
  { id: 'ai-search', name: 'AI 搜索', tools: ['Perplexity', 'Copilot', 'NotionAi', 'Cluely'] },
  { id: 'emerging', name: '新兴工具', tools: ['Lovable', 'v0 Prompts and Tools', 'Leap.new', 'Poke', 'Qoder', 'Same.dev', 'Orchids.app'] },
  { id: 'open-source', name: '开源方案', tools: ['Open Source prompts', 'Anthropic', 'Google', 'Emergent'] },
];
