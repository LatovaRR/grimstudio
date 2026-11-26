import * as THREE from 'three';
import { parseHeadModel, disposeLoadedModel } from './model-loader.mjs';
import { raycastGrid } from './spatial-raycast.mjs';

const $ = (selector) => document.querySelector(selector);
const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
const HEAD_MODEL_REGISTRY = Object.freeze([{id:'male',name:'Male Head',objFile:'Male Average Head.obj',mtlFile:'Male Average Head.mtl'},{id:'female',name:'Female Head',objFile:'Female Average Head.obj',mtlFile:'Female Average Head.mtl'}]);
let currentHeadModelId = 'male';
const modelSessions = new Map();
const MODEL_HASH = 'grimstudio-2.5.2-dual-heads-obj-mtl';
const MAX_LAYERS = 10;
const MAX_HISTORY = 100;
let adaptiveScale=1,slowRenderSamples=0,fastRenderSamples=0;
const GRID_RESOLUTION = 44;

const I18N = {
  en: {
    performanceStats:'Performance diagnostics',
    brandTag:'PROFESSIONAL 3D MAKEUP STUDIO',new:'New',open:'Open',save:'Save',export:'Export PNG',language:'Language',theme:'Theme',
    tools:'MAKEUP TOOLS',all:'All',paint:'Paint',face:'Face',blend:'Blend',advanced:'Advanced',size:'Size',opacity:'Opacity',softness:'Edge softness',flow:'Flow',symmetry:'Mirror painting (X axis)',view:'VIEW',front:'Front',left:'Left',right:'Right',back:'Back',reset:'Reset',viewHint:'Left button paints · Hold right button to rotate · Wheel to zoom',headModel:'HEAD MODEL',settingsTitle:'Settings',skinTone:'Skin tone',retry:'Retry loading',
    viewportHint:'Paint: left button · Rotate: hold right button · Pan: middle button · Zoom: wheel',color:'COLOR',activePigment:'Active pigment',layers:'MAKEUP LAYERS',layerOpacity:'Layer opacity',rename:'Rename',delete:'Delete',workflow:'WORKFLOW',workflowText:'Makeup is stored as surface-attached decals in independent layers. Original head materials and textures are never edited.',undo:'Undo',redo:'Redo',brushSize:'Brush size',
    ready:'Ready',loading:'Loading head model…',preparing:'Preparing isolated paint surface…',loaded:'Head surface ready',graphicsError:'3D graphics could not be initialized',retryText:'Check hardware acceleration and graphics drivers, then retry.',modelError:'Could not load the head model',
    toolNames:['Brush','Airbrush','Powder','Sponge','Foundation','Concealer','Blush','Contour','Highlighter','Eyeshadow','Eyeliner','Pencil','Lipstick','Lip Gloss','Mascara','Eyebrow','Blur','Blender','Eraser','Stencil','Stamp','Symmetry','Eyedropper'],
    toolTips:['Build soft, controllable pigment with smooth surface stamps.','Spray a feathered pigment cloud with gradual buildup.','Apply fine, low-contrast powder grain.','Dab a porous, irregular pigment texture.','Lay down a broad, natural base layer.','Apply precise localized coverage.','Create a soft circular cheek color gradient.','Apply a soft directional contour wash.','Add a soft luminous cosmetic layer.','Create a softly blended eye-area color.','Draw narrow, crisp cosmetic lines.','Create precise hard-edged detail strokes.','Apply dense, creamy lip pigment.','Add a translucent glossy highlight layer.','Create fine directional lash-like marks.','Create fine hair-like brow strokes.','Repaint the area with the local averaged pigment, softly feathering hard edges.','Mix the local pigment tones with the active color using a translucent veil.','Erase paint along the brush path on the active layer.','Apply a star-shaped decorative stencil.','Place a decorative rosette stamp.','Toggle mirrored painting across the model X axis.','Sample the composited pigment where colors have mixed.'],
    layerName:'Layer',baseLayer:'Base Makeup',layerAdded:'Layer added',layerDuplicated:'Layer duplicated',layerLimit:'Layer limit reached',noLayer:'No active layer',locked:'Unlock this layer first',clearConfirm:'Clear all paint on',newConfirm:'Create a new project? Current paint will be cleared. Save first if needed.',renamed:'Layer name:',deleted:'Layer deleted',
    toolStatus:'Tool',strokeSaved:'Stroke saved',autosaved:'Autosaved',autosaveFailed:'Autosave failed',projectSaved:'Project saved',projectOpened:'Project opened',invalidProject:'Invalid project file',exported:'PNG exported',exportFailed:'Export failed',modelReadyToast:'Head model ready',
    system:'System',dark:'Dark',light:'Light',symmetryOn:'Symmetry enabled',symmetryOff:'Symmetry disabled',colorSampled:'Pigment sampled',legacyWarning:'This project contains legacy UV paint. New strokes use isolated surface decals; legacy paint is preserved as a separate compatibility layer.',surfaceIndex:'Building surface index',surfaceReady:'Surface index ready',
    brushSettings:'TOOL SETTINGS',faceCategory:'Face makeup',paintCategory:'Paint',blendCategory:'Blend & correction',advancedCategory:'Advanced',interaction:'CAMERA & PERFORMANCE',cameraRotation:'Camera rotation',cameraPan:'Camera pan',rightMouse:'Right mouse button',middleMouse:'Middle mouse button',spaceLeft:'Space + left mouse',shiftRight:'Shift + right mouse',disabled:'Disabled',rotateSensitivity:'Rotation sensitivity',zoomSensitivity:'Zoom sensitivity',performance:'Painting performance',performanceFast:'Performance',performanceBalanced:'Balanced',performanceQuality:'Quality',cameraHint:'Paint: left button · Rotate: assigned button · Pan: assigned button · Zoom: wheel',resetControls:'Reset camera settings',
    preview:'BRUSH PREVIEW',brushShape:'BRUSH SHAPE',shapeDefault:'Tool default',shapeSoft:'Soft round',shapeHard:'Hard round',shapeFlat:'Flat',shapeAir:'Airbrush',shapeSpeckle:'Speckle',shapePorous:'Porous',shapeHair:'Fine hair',shapeStar:'Star',shapeRosette:'Rosette',
    lighting:'LIGHTING',lightingPreset:'Lighting preset',lightTemp:'Color temperature',lightAzimuth:'Light azimuth',lightElevation:'Light elevation',lightIntensity:'Key light intensity',lightHint:'Direction is measured from the front of the model.',
    lightFill:'Fill light',lightRim:'Rim light',lightAmbient:'Ambient light',
    lpStudio:'Studio portrait',lpVanity:'Vanity mirror',lpOvercast:'Overcast daylight',lpSun:'Direct sun',lpGolden:'Golden hour',lpSunset:'Sunset dusk',lpMoon:'Moonlight',lpBackstage:'Backstage lights',lpCandle:'Candlelight',lpRing:'Ring light',lpCustom:'Custom',
    appearance:'APPEARANCE',accentColor:'Accent color',accentReset:'Use default accent',accentBrass:'Brass',accentTeal:'Teal',accentSky:'Sky blue',accentViolet:'Violet',accentRose:'Rose',accentLime:'Lime',accentAmber:'Amber',accentCrimson:'Crimson'
  },
  ru: {
    performanceStats:'Диагностика производительности',
    brandTag:'ПРОФЕССИОНАЛЬНАЯ 3D-СТУДИЯ ГРИМА',new:'Новый',open:'Открыть',save:'Сохранить',export:'Экспорт PNG',language:'Язык',theme:'Тема',
    tools:'ИНСТРУМЕНТЫ ГРИМА',all:'Все',paint:'Рисование',face:'Лицо',blend:'Смешивание',advanced:'Дополнительно',size:'Размер',opacity:'Прозрачность',softness:'Мягкость края',flow:'Насыщенность',symmetry:'Зеркальное рисование (ось X)',view:'ВИД',front:'Спереди',left:'Слева',right:'Справа',back:'Сзади',reset:'Сбросить',viewHint:'ЛКМ — рисование · Удерживай ПКМ для вращения · Колесо — масштаб',headModel:'3D-МОДЕЛЬ ГОЛОВЫ',settingsTitle:'Настройки',skinTone:'Тон кожи',retry:'Повторить загрузку',
    viewportHint:'Рисование: ЛКМ · Вращение: удерживай ПКМ · Перемещение: средняя кнопка · Масштаб: колесо',color:'ЦВЕТ',activePigment:'Активный цвет',layers:'СЛОИ ГРИМА',layerOpacity:'Непрозрачность слоя',rename:'Переименовать',delete:'Удалить',workflow:'РАБОЧИЙ ПРОЦЕСС',workflowText:'Грим хранится как отдельные поверхностные проекции в независимых слоях. Исходные материалы и текстуры головы не изменяются.',undo:'Отменить',redo:'Повторить',brushSize:'Размер кисти',
    ready:'Готово',loading:'Загрузка модели головы…',preparing:'Подготовка изолированной поверхности рисования…',loaded:'Поверхность головы готова',graphicsError:'Не удалось инициализировать 3D-графику',retryText:'Проверь аппаратное ускорение и драйвер видеокарты, затем повтори попытку.',modelError:'Не удалось загрузить модель головы',
    toolNames:['Кисть','Аэрограф','Пудра','Спонж','Тональная основа','Консилер','Румяна','Контуринг','Хайлайтер','Тени','Подводка','Карандаш','Помада','Блеск для губ','Тушь','Брови','Размытие','Смешивание','Ластик','Трафарет','Штамп','Симметрия','Пипетка'],
    toolTips:['Мягкие управляемые мазки пигмента по поверхности.','Воздушное нанесение пигмента с плавным накоплением.','Мелкодисперсное нанесение пудры.','Нанесение текстурного пигмента точечными касаниями.','Широкое естественное нанесение тональной основы.','Точное локальное покрытие небольших участков.','Мягкий круговой градиент румян.','Мягкое направленное затемнение для контуринга.','Мягкий светящийся косметический слой.','Мягко растушёванный цвет для области глаз.','Тонкие чёткие косметические линии.','Точные детальные линии с жёстким краем.','Плотный кремовый пигмент для губ.','Полупрозрачный глянцевый слой.','Тонкие направленные штрихи, имитирующие ресницы.','Тонкие штрихи, имитирующие волоски бровей.','Перекрашивает участок усреднённым локальным пигментом, мягко сглаживая жёсткие края.','Смешивает локальные оттенки с активным цветом полупрозрачным слоем.','Стирает мазки вдоль пути кисти на активном слое.','Нанесение декоративного трафарета в форме звезды.','Нанесение декоративного узора-розетки.','Включение зеркального рисования относительно оси X модели.','Выбор смешанного цвета в месте наложения мазков.'],
    layerName:'Слой',baseLayer:'Основной грим',layerAdded:'Слой добавлен',layerDuplicated:'Слой дублирован',layerLimit:'Достигнут лимит слоёв',noLayer:'Нет активного слоя',locked:'Сначала разблокируй слой',clearConfirm:'Очистить весь грим на слое',newConfirm:'Создать новый проект? Текущий грим будет удалён. Сначала сохрани работу.',renamed:'Название слоя:',deleted:'Слой удалён',
    toolStatus:'Инструмент',strokeSaved:'Мазок сохранён',autosaved:'Автосохранение выполнено',autosaveFailed:'Ошибка автосохранения',projectSaved:'Проект сохранён',projectOpened:'Проект открыт',invalidProject:'Недопустимый файл проекта',exported:'PNG экспортирован',exportFailed:'Ошибка экспорта',modelReadyToast:'Модель головы готова',
    system:'Системная',dark:'Тёмная',light:'Светлая',symmetryOn:'Симметрия включена',symmetryOff:'Симметрия выключена',colorSampled:'Цвет выбран',legacyWarning:'Проект содержит старые UV-рисунки. Новые мазки используют изолированные проекции; старый грим сохранён в отдельном совместимом слое.',surfaceIndex:'Построение индекса поверхности',surfaceReady:'Индекс поверхности готов',
    brushSettings:'НАСТРОЙКИ ИНСТРУМЕНТА',faceCategory:'Макияж лица',paintCategory:'Рисование',blendCategory:'Смешивание и коррекция',advancedCategory:'Дополнительно',interaction:'КАМЕРА И ПРОИЗВОДИТЕЛЬНОСТЬ',cameraRotation:'Вращение камеры',cameraPan:'Перемещение камеры',rightMouse:'Правая кнопка мыши',middleMouse:'Средняя кнопка мыши',spaceLeft:'Пробел + левая кнопка',shiftRight:'Shift + правая кнопка',disabled:'Выключено',rotateSensitivity:'Чувствительность вращения',zoomSensitivity:'Чувствительность масштаба',performance:'Производительность рисования',performanceFast:'Производительность',performanceBalanced:'Баланс',performanceQuality:'Качество',cameraHint:'Рисование: ЛКМ · Вращение: назначенная кнопка · Перемещение: назначенная кнопка · Масштаб: колесо',resetControls:'Сбросить настройки камеры',
    preview:'ПРЕДПРОСМОТР КИСТИ',brushShape:'ФОРМА КИСТИ',shapeDefault:'Как у инструмента',shapeSoft:'Мягкий круглый',shapeHard:'Жёсткий круглый',shapeFlat:'Плоский',shapeAir:'Аэрограф',shapeSpeckle:'Крапинка',shapePorous:'Пористый',shapeHair:'Тонкие штрихи',shapeStar:'Звезда',shapeRosette:'Розетка',
    lighting:'ОСВЕЩЕНИЕ',lightingPreset:'Предустановка света',lightTemp:'Температура света',lightAzimuth:'Азимут света',lightElevation:'Высота света',lightIntensity:'Яркость ключевого света',lightHint:'Направление отсчитывается от лица модели.',
    lightFill:'Заполняющий свет',lightRim:'Контровой свет',lightAmbient:'Фоновый свет',
    lpStudio:'Студийный портрет',lpVanity:'Зеркало гримёрки',lpOvercast:'Пасмурный день',lpSun:'Прямое солнце',lpGolden:'Золотой час',lpSunset:'Закат',lpMoon:'Лунный свет',lpBackstage:'Закулисные софиты',lpCandle:'Свет свечи',lpRing:'Кольцевая лампа',lpCustom:'Своё',
    appearance:'ОФОРМЛЕНИЕ',accentColor:'Акцентный цвет',accentReset:'Акцент по умолчанию',accentBrass:'Латунь',accentTeal:'Бирюза',accentSky:'Небесный',accentViolet:'Сиреневый',accentRose:'Розовый',accentLime:'Лаймовый',accentAmber:'Янтарный',accentCrimson:'Багровый'
  }
};

// Compact, near-circular brush footprints: every aspect ratio stays within
// 1.0–1.5 so elongated stamps can no longer tear the stroke into ragged strips.
const TOOLS = [
  {key:'brush',category:'paint',icon:'brush',radius:1,aspect:1,mask:'soft',alpha:.85},
  {key:'airbrush',category:'paint',icon:'airbrush',radius:1.65,aspect:1,mask:'air',alpha:.22},
  {key:'powder',category:'paint',icon:'powder',radius:1.25,aspect:1,mask:'powder',alpha:.2},
  {key:'sponge',category:'paint',icon:'sponge',radius:1.35,aspect:1,mask:'sponge',alpha:.38},
  {key:'foundation',category:'face',icon:'foundation',radius:1.8,aspect:1.05,mask:'foundation',alpha:.5},
  {key:'concealer',category:'face',icon:'concealer',radius:.7,aspect:1,mask:'concealer',alpha:.78},
  {key:'blush',category:'face',icon:'blush',radius:1.5,aspect:1,mask:'blush',alpha:.32},
  {key:'contour',category:'face',icon:'contour',radius:1.55,aspect:1.25,mask:'contour',alpha:.3},
  {key:'highlighter',category:'face',icon:'highlighter',radius:1.25,aspect:1.05,mask:'highlight',alpha:.5,finish:'glow'},
  {key:'eyeshadow',category:'face',icon:'eyeshadow',radius:1.2,aspect:1.15,mask:'shadow',alpha:.42},
  {key:'eyeliner',category:'face',icon:'eyeliner',radius:.34,aspect:1.45,mask:'liner',alpha:1},
  {key:'pencil',category:'paint',icon:'pencil',radius:.24,aspect:1.15,mask:'hard',alpha:1},
  {key:'lipstick',category:'face',icon:'lipstick',radius:.72,aspect:1.15,mask:'lipstick',alpha:.88},
  {key:'lipgloss',category:'face',icon:'lipgloss',radius:.9,aspect:1.1,mask:'gloss',alpha:.5,finish:'gloss'},
  {key:'mascara',category:'face',icon:'mascara',radius:.26,aspect:1.45,mask:'hair',alpha:.82},
  {key:'eyebrow',category:'face',icon:'eyebrow',radius:.3,aspect:1.5,mask:'hair',alpha:.78},
  {key:'blur',category:'blend',icon:'blur',radius:1.5,aspect:1,mask:'blur',alpha:.14},
  {key:'blender',category:'blend',icon:'blender',radius:1.2,aspect:1.05,mask:'blend',alpha:.16},
  {key:'eraser',category:'blend',icon:'eraser',radius:1.1,aspect:1,mask:'soft',alpha:1,action:true},
  {key:'stencil',category:'advanced',icon:'stencil',radius:1,aspect:1,mask:'star',alpha:.9},
  {key:'stamp',category:'advanced',icon:'stamp',radius:.9,aspect:1,mask:'rosette',alpha:.9},
  {key:'symmetry',category:'advanced',icon:'symmetry',radius:1,aspect:1,mask:'soft',alpha:1,action:true},
  {key:'eyedropper',category:'advanced',icon:'eyedropper',radius:1,aspect:1,mask:'soft',alpha:1,action:true}
];
// Minimalist vector tool icons, drawn as inline SVG (no emoji anywhere).
const ICONS = {
  brush:'<path d="M20 4l-8.6 8.6"/><path d="M13.4 6.4l4.2 4.2"/><path d="M5.6 20.4c2.4.6 4.5-.4 5.2-2.5l1.2-3.5-3.4-3.4-3.5 1.2c-2.1.7-3.1 2.8-2.5 5.2.2 1.5 1.5 2.7 3 3z"/>',
  airbrush:'<rect x="9" y="9" width="6" height="12" rx="1.5"/><path d="M10.5 9V6.5h3V9"/><path d="M12 3v1.8"/><path d="M7.5 4.5l.9 1.1M16.5 4.5l-.9 1.1M6.5 8h1.6"/>',
  powder:'<circle cx="7.5" cy="9.5" r="1.3"/><circle cx="12.5" cy="7.5" r="1.1"/><circle cx="16.5" cy="10.5" r="1.4"/><circle cx="9.5" cy="14.5" r="1.5"/><circle cx="14.5" cy="15" r="1.2"/><circle cx="11.5" cy="18.5" r="1"/>',
  sponge:'<rect x="4.5" y="7" width="15" height="12" rx="2.5"/><circle cx="9" cy="11" r=".9"/><circle cx="13" cy="13.5" r=".8"/><circle cx="15" cy="10" r=".9"/>',
  foundation:'<rect x="8.5" y="10" width="7" height="10.5" rx="1.5"/><path d="M12 10V7"/><path d="M10 7h4l-.8-3h-2.4z"/>',
  concealer:'<circle cx="12" cy="13" r="6.5"/><circle cx="12" cy="13" r="2.2" fill="currentColor" stroke="none"/>',
  blush:'<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="3.4"/>',
  contour:'<path d="M5.5 18.5c5 1 9.5-.8 12.4-5 1.4-2 1.9-4.4 1.6-7"/><path d="M8.5 16.5c3.8.4 7-1.4 8.9-4.6"/>',
  highlighter:'<path d="M12 3.5l1.9 5.6 5.6 1.9-5.6 1.9L12 18.5l-1.9-5.6-5.6-1.9 5.6-1.9z"/><path d="M18.5 17.5v3M17 19h3"/>',
  eyeshadow:'<path d="M2.8 12S6.2 6.8 12 6.8 21.2 12 21.2 12 18 17.2 12 17.2 2.8 12 2.8 12z"/><circle cx="12" cy="12" r="2.6"/>',
  eyeliner:'<path d="M3 14.5c3-5.5 6-5.5 9 0s6 5.5 9 0"/>',
  pencil:'<path d="M4.5 19.5l1-3.8L16.6 4.6a2 2 0 0 1 2.8 2.8L8.3 18.5z"/><path d="M14.6 6.6l2.8 2.8"/>',
  lipstick:'<path d="M10.5 10.5V6l3.2-2.2v6.7"/><rect x="9" y="10.5" width="6" height="3.5" rx="1"/><path d="M8 14h8v5.5a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z"/>',
  lipgloss:'<path d="M12 4.5c2.2 2.6 4 4.9 4 7.2a4 4 0 1 1-8 0c0-2.3 1.8-4.6 4-7.2z"/><path d="M10 13.5c0 1 .8 1.9 1.8 2"/>',
  mascara:'<rect x="9.5" y="10" width="5" height="10.5" rx="1.5"/><path d="M12 10V7.5"/><path d="M10 4.8h4M12 3v4.5"/>',
  eyebrow:'<path d="M4 10.5c3-4.5 8.5-5.5 14-3.5"/><path d="M7 11.5l-1 2.2M11 9.8l-.5 2.4M15 9.2l.4 2.4M18 9.5l.8 2"/>',
  blur:'<circle cx="12" cy="12" r="7" stroke-dasharray="1.6 2.6"/><circle cx="12" cy="12" r="3"/>',
  blender:'<circle cx="9.4" cy="12" r="5.2"/><circle cx="14.6" cy="12" r="5.2"/>',
  eraser:'<path d="M15.6 4.6l4 4L11.2 17H7.4L5 14.6z"/><path d="M9.6 8.6l6 6"/><path d="M8 21h10"/>',
  stencil:'<path d="M12 3.5l2.5 5 5.5.8-4 3.9 1 5.5-5-2.7-5 2.7 1-5.5-4-3.9 5.5-.8z"/>',
  stamp:'<circle cx="12" cy="12" r="2.6"/><path d="M12 3.5v3.2M12 17.3v3.2M3.5 12h3.2M17.3 12h3.2M6 6l2.3 2.3M15.7 15.7L18 18M18 6l-2.3 2.3M8.3 15.7L6 18"/>',
  symmetry:'<path d="M12 3v18"/><path d="M8.5 7.5L4.5 12l4 4.5z" fill="currentColor" stroke="none"/><path d="M15.5 7.5l4 4.5-4 4.5z"/>',
  eyedropper:'<path d="M13.6 7.9l2.5 2.5L8 18.5l-3.7.7.7-3.7z"/><path d="M13.6 7.9l1.8-1.8a1.9 1.9 0 0 1 2.7 0l.4.4a1.9 1.9 0 0 1 0 2.7l-1.9 1.8"/>'
};
function icon(name,size=18){return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]||''}</svg>`;}

// Palette built from real cosmetic shade families: foundations (ivory→espresso),
// blushes, lip shades, eyeshadow neutrals, plus classic stage-paint primaries.
const COLORS = [
  // foundations & skin
  '#f7e0d0','#efc9b0','#e6b898','#d9a184','#c98f6d','#b87a5a','#a06246','#8a4f36','#6f3b28',
  // blush & rouge
  '#f2b6a0','#e8927c','#d96f63','#c25456','#f4c1ae','#e78f8a',
  // lips
  '#b46a6a','#a34e54','#c2185b','#8e2f47','#6d1f33','#d9556f','#e87c8f','#5c2e3c',
  // eyeshadow neutrals
  '#e8d5c0','#d4b48c','#b99770','#96714f','#6f4a30','#4c3326',
  // vivid eyeshadow & liner accents
  '#3b4a6b','#22333f','#2e5d4b','#543a6b','#7b3fa0',
  // classic stage / clown paints
  '#ffffff','#19151c','#d32f2f','#e64a19','#fbc02d','#388e3c','#1976d2','#7b1fa2'
];
// Realistic skin-tone presets; 'natural' keeps the authored material untinted.
const SKIN_TONES=Object.freeze([
  Object.freeze({key:'natural',name:'Natural',value:'#ffffff'}),
  Object.freeze({key:'porcelain',name:'Porcelain',value:'#ffe9db'}),
  Object.freeze({key:'fair',name:'Fair',value:'#f8d9c4'}),
  Object.freeze({key:'light',name:'Light',value:'#f0c8ab'}),
  Object.freeze({key:'medium',name:'Medium',value:'#dba882'}),
  Object.freeze({key:'tan',name:'Tan',value:'#c08b60'}),
  Object.freeze({key:'deep',name:'Deep',value:'#9c6a45'}),
  Object.freeze({key:'rich',name:'Rich',value:'#784a2c'})
]);
let skinTone='natural';
function applySkinTone(){
  if(!modelRoot)return;
  const tone=SKIN_TONES.find(entry=>entry.key===skinTone)||SKIN_TONES[0];
  modelRoot.traverse(object=>{
    if(!object.isMesh)return;
    const mats=Array.isArray(object.material)?object.material:[object.material];
    for(const material of mats){if(material?.color?.isColor)material.color.set(tone.value);}
  });
}

// ----- Lighting studio -----
// Real-life lighting presets: each sets color temperature, key direction
// (azimuth/elevation) and the balance between key, fill, rim and ambient
// light. Azimuth 0° is straight in front of the model's face, 90° is its
// right side. All intensity fields are unitless factors.
const LIGHT_PRESETS=Object.freeze([
  Object.freeze({key:'studio',temp:5500,az:25,el:45,intensity:1,fill:.45,rim:.55,ambient:.5}),
  Object.freeze({key:'vanity',temp:4700,az:0,el:22,intensity:1.05,fill:.9,rim:.3,ambient:.8}),
  Object.freeze({key:'overcast',temp:6500,az:10,el:70,intensity:.9,fill:.95,rim:.4,ambient:1.1}),
  Object.freeze({key:'sun',temp:5300,az:40,el:55,intensity:1.15,fill:.25,rim:.5,ambient:.35}),
  Object.freeze({key:'golden',temp:3400,az:310,el:12,intensity:1,fill:.35,rim:.8,ambient:.35}),
  Object.freeze({key:'sunset',temp:2700,az:325,el:8,intensity:.95,fill:.3,rim:.95,ambient:.3}),
  Object.freeze({key:'moon',temp:8600,az:15,el:40,intensity:.5,fill:.2,rim:.45,ambient:.25}),
  Object.freeze({key:'backstage',temp:4000,az:335,el:60,intensity:1.25,fill:1.1,rim:.8,ambient:.9}),
  Object.freeze({key:'candle',temp:1900,az:290,el:18,intensity:.8,fill:.12,rim:.2,ambient:.15}),
  Object.freeze({key:'ring',temp:5200,az:0,el:12,intensity:1.05,fill:1.05,rim:.35,ambient:.85})
]);
let lighting={preset:'studio',temp:5500,az:25,el:45,intensity:1,fill:.45,rim:.55,ambient:.5};
// Light-direction indicator: a small glowing marker at the key light position
// plus a line from the model center, drawn on top of everything (depth test
// off) so the source stays visible even behind the head.
let lightGizmo=null;
let lightGizmoVisible=false;
function ensureLightGizmo(){
  if(lightGizmo||!scene)return;
  lightGizmo=new THREE.Group();
  const marker=new THREE.Mesh(new THREE.SphereGeometry(.11,20,14),new THREE.MeshBasicMaterial({color:0xffd9a0,transparent:true,opacity:.95,depthTest:false,depthWrite:false,toneMapped:false}));
  marker.renderOrder=900;
  const halo=new THREE.Mesh(new THREE.SphereGeometry(.19,20,14),new THREE.MeshBasicMaterial({color:0xffc878,transparent:true,opacity:.28,depthTest:false,depthWrite:false,toneMapped:false}));
  halo.renderOrder=899;
  const line=new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0,0,0),new THREE.Vector3(0,0,1)]),new THREE.LineBasicMaterial({color:0xffd9a0,transparent:true,opacity:.4,depthTest:false,depthWrite:false,toneMapped:false}));
  line.renderOrder=898;
  lightGizmo.add(marker);lightGizmo.add(halo);lightGizmo.add(line);
  lightGizmo.userData={line};
  lightGizmo.visible=lightGizmoVisible;
  scene.add(lightGizmo);
  updateLightGizmo();
}
function updateLightGizmo(){
  if(!lightGizmo)return;
  const position=lightDirection(lighting.az,lighting.el);
  // The group sits at the model center; its child line (local +Z, length 1)
  // is scaled to reach the light and the group is oriented toward it.
  lightGizmo.position.set(0,0,0);
  lightGizmo.quaternion.setFromUnitVectors(new THREE.Vector3(0,0,1),position.clone().normalize());
  lightGizmo.userData.line.scale.set(1,1,position.length()*.93);
  requestRender();
}
function toggleLightGizmo(){
  lightGizmoVisible=!lightGizmoVisible;
  ensureLightGizmo();
  lightGizmo.visible=lightGizmoVisible;
  $('#toggleLightGizmo')?.setAttribute('aria-pressed',String(lightGizmoVisible));
  persistSettings();
  requestRender();
}
// Tanner Helland's blackbody approximation, converted to a linear-light color.
function kelvinToColor(kelvin){
  const t=clamp(kelvin,1000,40000)/100;
  let r,g,b;
  if(t<=66){r=255;g=99.4708025861*Math.log(t)-161.1195681661;}
  else{r=329.698727446*Math.pow(t-60,-.1332047592);g=288.1221695283*Math.pow(t-60,-.0755148492);}
  if(t>=66)b=255;
  else if(t<=19)b=0;
  else b=138.5177312231*Math.log(t-10)-305.0447927307;
  const color=new THREE.Color();
  return color.setRGB(clamp(r,0,255)/255,clamp(g,0,255)/255,clamp(b,0,255)/255).convertSRGBToLinear();
}
function lightDirection(azDeg,elDeg){
  const az=THREE.MathUtils.degToRad(azDeg),el=THREE.MathUtils.degToRad(elDeg);
  return new THREE.Vector3(Math.sin(az)*Math.cos(el),Math.sin(el),Math.cos(az)*Math.cos(el)).multiplyScalar(6);
}
function applyLighting(){
  if(!keyLight)return;
  const kelvin=kelvinToColor(lighting.temp);
  keyLight.color.copy(kelvin);
  keyLight.intensity=3*lighting.intensity;
  keyLight.position.copy(lightDirection(lighting.az,lighting.el));
  fillLight.color.copy(kelvinToColor(THREE.MathUtils.lerp(lighting.temp,6800,.55)));
  fillLight.intensity=1.15*lighting.fill;
  fillLight.position.copy(lightDirection(lighting.az+150,Math.max(14,lighting.el*.5)));
  rimLight.color.copy(kelvinToColor(clamp(lighting.temp+900,1200,12000)));
  rimLight.intensity=1.5*lighting.rim;
  rimLight.position.copy(lightDirection(lighting.az+180,Math.min(80,lighting.el+18)));
  hemisphereLight.intensity=1.7*lighting.ambient;
  updateLightGizmo();
  requestRender();
}
function setLighting(next,{fromPreset=false}={}){
  lighting.temp=clamp(Math.round(next.temp??lighting.temp),1500,9500);
  lighting.az=clamp(Math.round(next.az??lighting.az),0,360)%360;
  lighting.el=clamp(Math.round(next.el??lighting.el),3,85);
  lighting.intensity=clamp(Math.round((next.intensity??lighting.intensity)*100)/100,.1,2);
  lighting.fill=clamp(Math.round((next.fill??lighting.fill)*100)/100,0,2);
  lighting.rim=clamp(Math.round((next.rim??lighting.rim)*100)/100,0,2);
  lighting.ambient=clamp(Math.round((next.ambient??lighting.ambient)*100)/100,0,1.5);
  lighting.preset=fromPreset?next.preset:(LIGHT_PRESETS.find(entry=>entry.key===lighting.preset&&entry.temp===lighting.temp&&entry.az===lighting.az&&entry.el===lighting.el&&Math.abs(entry.intensity-lighting.intensity)<.011&&Math.abs(entry.fill-lighting.fill)<.011&&Math.abs(entry.rim-lighting.rim)<.011&&Math.abs(entry.ambient-lighting.ambient)<.011)?.key||'custom');
  syncLightingUI();
  applyLighting();
  persistSettings();
  queueAutosave();
}
function applyLightPreset(key){
  const preset=LIGHT_PRESETS.find(entry=>entry.key===key);
  if(!preset)return;
  setLighting({preset:key,temp:preset.temp,az:preset.az,el:preset.el,intensity:preset.intensity,fill:preset.fill,rim:preset.rim,ambient:preset.ambient},{fromPreset:true});
}

// ----- Brush shape presets -----
// A shape preset can override any paint tool's default stamp. Masks reuse the
// existing stamp generators; all preset aspects stay compact (≤1.35).
const BRUSH_SHAPES=Object.freeze([
  Object.freeze({key:'default'}),
  Object.freeze({key:'soft',mask:'soft',aspect:1}),
  Object.freeze({key:'hard',mask:'hard',aspect:1}),
  Object.freeze({key:'flat',mask:'soft',aspect:1.3}),
  Object.freeze({key:'air',mask:'air',aspect:1}),
  Object.freeze({key:'speckle',mask:'powder',aspect:1}),
  Object.freeze({key:'porous',mask:'sponge',aspect:1}),
  Object.freeze({key:'hair',mask:'hair',aspect:1.35}),
  Object.freeze({key:'star',mask:'star',aspect:1}),
  Object.freeze({key:'rosette',mask:'rosette',aspect:1})
]);
let brushShapeOverride=null;
function activeBrushShape(){
  return brushShapeOverride&&brushShapeOverride!=='default'?BRUSH_SHAPES.find(entry=>entry.key===brushShapeOverride)||null:null;
}
function effectiveMask(toolKey){
  const tool=TOOLS.find(item=>item.key===toolKey)||TOOLS[0];
  return activeBrushShape()?.mask||tool.mask;
}
function effectiveAspect(tool){
  return activeBrushShape()?.aspect||tool.aspect||1;
}

let language = 'en';
let themePreference = 'system';
let cameraRotateButton = 'right';
let cameraPanButton = 'middle';
let rotationSensitivity = .008;
let zoomSensitivity = .004;
let performanceMode = 'performance';
let graphicsQuality = 'low';
let adaptivePerformance = true;
let memoryOptimization = true;
let selectedTool = 0;
let lastPaintTool = 0;
let symmetryEnabled = false;
let color = '#c72f58';
let brushSize = 24;
let opacity = 1;
let softness = .72;
let flow = .75;
let scene, camera, renderer, raycaster, orbit, canvas, viewport;
let modelRoot = null;
let paintMeshes = [];
let spatialIndexes = [];
let modelPromise = null;
let modelReady = false;
let layers = [];
let activeLayer = 0;
let layerCounter = 1;
let activeStroke = null;
let lastHit = null;
let isPainting = false;
let isRotating = false;
let isPanning = false;
let activeInteraction = 'idle';
let activePointerId = null;
let dragStart = null;
let spaceHeld = false;
let pendingPointerSamples = [];
let strokeFlushQueued = false;
let viewTarget = new THREE.Vector3(0,0,0);
let zoom = 4.4;
let autosaveTimer = null;
let renderQueued = false;
let toastTimer = null;
let currentCategory = 'all';
let strokeSequence = 1;
const stampTextures = new Map();
const perfStats={raycastMs:0,raycasts:0,decalMs:0,decals:0,pointerMs:0,pointerSamples:0,renderFrames:0,lastFpsAt:performance.now(),lastFrameCount:0};
let diagnosticsTimer=null;
const vZ = new THREE.Vector3(0,0,1);
// Reused scratch objects and numeric polygon buffers avoid per-triangle object churn
// while a brush dab is projected onto the surface.
const decalNormalScratch = new THREE.Vector3();
const decalQuaternionScratch = new THREE.Quaternion();
const decalAxisQuaternionScratch = new THREE.Quaternion();
const decalRotationMatrixScratch = new THREE.Matrix4();
const decalInverseMatrixScratch = new THREE.Matrix4();
const decalForwardScratch = new THREE.Matrix3();
const decalInverseScratch = new THREE.Matrix3();
const clipBufferA = new Float64Array(96);
const clipBufferB = new Float64Array(96);
const strokeTangentScratch = new THREE.Vector3();
const strokeNormalScratch = new THREE.Vector3();
const strokeQuaternionScratch = new THREE.Quaternion();
const strokeInverseQuaternionScratch = new THREE.Quaternion();

function t(key) { return I18N[language]?.[key] ?? I18N.en[key] ?? key; }
function toolName(index) { return I18N[language].toolNames[index] || I18N.en.toolNames[index]; }
function toolTip(index) { return I18N[language].toolTips[index] || I18N.en.toolTips[index]; }
function persistSettings() {
  try { localStorage.setItem('grimstudio-settings', JSON.stringify({language,themePreference,symmetryEnabled,cameraRotateButton,cameraPanButton,rotationSensitivity,zoomSensitivity,performanceMode,graphicsQuality,adaptivePerformance,memoryOptimization,skinTone,lighting,brushShape:brushShapeOverride,accentColor,lightGizmoVisible})); } catch {}
}
function loadSettings() {
  try {
    const value = JSON.parse(localStorage.getItem('grimstudio-settings') || '{}');
    if (value.language === 'ru' || value.language === 'en') language = value.language;
    if (['system','dark','light'].includes(value.themePreference)) themePreference = value.themePreference;
    symmetryEnabled = value.symmetryEnabled === true;
    if (['right','middle','space-left'].includes(value.cameraRotateButton)) cameraRotateButton = value.cameraRotateButton;
    if (['middle','shift-right','disabled'].includes(value.cameraPanButton)) cameraPanButton = value.cameraPanButton;
    if (Number.isFinite(value.rotationSensitivity)) rotationSensitivity = clamp(value.rotationSensitivity,.002,.02);
    if (Number.isFinite(value.zoomSensitivity)) zoomSensitivity = clamp(value.zoomSensitivity,.001,.012);
    if (['performance','balanced','quality'].includes(value.performanceMode)) performanceMode = value.performanceMode;
    if (['low','balanced','high'].includes(value.graphicsQuality)) graphicsQuality=value.graphicsQuality;
    if (typeof value.adaptivePerformance==='boolean') adaptivePerformance=value.adaptivePerformance;
    if (typeof value.memoryOptimization==='boolean') memoryOptimization=value.memoryOptimization;
    if (SKIN_TONES.some(entry=>entry.key===value.skinTone)) skinTone=value.skinTone;
    if (value.lighting&&typeof value.lighting==='object'){
      lighting.temp=clamp(Math.round(Number(value.lighting.temp)||5500),1500,9500);
      lighting.az=clamp(Math.round(Number(value.lighting.az)||25),0,360)%360;
      lighting.el=clamp(Math.round(Number(value.lighting.el)||45),3,85);
      lighting.intensity=clamp(Number(value.lighting.intensity)||1,.1,2);
      // 2.5.1 projects/settings have no fill/rim/ambient balance; 1 keeps the old brightness.
      lighting.fill=clamp(Number(value.lighting.fill??1),0,2);
      lighting.rim=clamp(Number(value.lighting.rim??1),0,2);
      lighting.ambient=clamp(Number(value.lighting.ambient??1),0,1.5);
      lighting.preset=value.lighting.preset||'custom';
    }
    if (typeof value.brushShape==='string') brushShapeOverride=value.brushShape;
    if (typeof value.accentColor==='string'&&/^#[0-9a-f]{6}$/i.test(value.accentColor)) accentColor=value.accentColor.toLowerCase();
    if (typeof value.lightGizmoVisible==='boolean') lightGizmoVisible=value.lightGizmoVisible;
  } catch {}
}
function applyTheme() {
  const systemDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? true;
  const resolved = themePreference === 'system' ? (systemDark ? 'dark' : 'light') : themePreference;
  document.documentElement.dataset.theme = resolved;
  document.documentElement.style.colorScheme = resolved;
  if (scene) scene.background = new THREE.Color(resolved === 'dark' ? '#1b1820' : '#dedbe5');
}

// ----- Accent color -----
// The workspace accent is user-selectable: curated presets plus a custom
// picker. Derived shades (soft fill, border line, contrast text) are computed
// from the chosen hex so every control stays readable on both themes.
const ACCENT_PRESETS=Object.freeze([
  Object.freeze({key:'brass',value:'#c9a86a'}),
  Object.freeze({key:'teal',value:'#5fb8a5'}),
  Object.freeze({key:'sky',value:'#6c8cff'}),
  Object.freeze({key:'violet',value:'#a58aff'}),
  Object.freeze({key:'rose',value:'#e08a9b'}),
  Object.freeze({key:'lime',value:'#8fbf6a'}),
  Object.freeze({key:'amber',value:'#e0a13f'}),
  Object.freeze({key:'crimson',value:'#e06a6a'})
]);
let accentColor='';
function applyAccent(){
  const rootStyle=document.documentElement.style;
  if(!/^#[0-9a-f]{6}$/i.test(accentColor||'')){
    for(const property of ['--accent','--accent-strong','--accent-soft','--accent-line','--accent-contrast'])rootStyle.removeProperty(property);
    return;
  }
  const value=accentColor.toLowerCase();
  const r=parseInt(value.slice(1,3),16),g=parseInt(value.slice(3,5),16),b=parseInt(value.slice(5,7),16);
  const luminance=(0.2126*r+0.7152*g+0.0722*b)/255;
  const adjust=channel=>luminance>.6?Math.round(channel*.72):Math.round(channel+(255-channel)*.28);
  rootStyle.setProperty('--accent',value);
  rootStyle.setProperty('--accent-strong',`rgb(${adjust(r)},${adjust(g)},${adjust(b)})`);
  rootStyle.setProperty('--accent-soft',`rgba(${r},${g},${b},.13)`);
  rootStyle.setProperty('--accent-line',`rgba(${r},${g},${b},.45)`);
  rootStyle.setProperty('--accent-contrast',luminance>.62?'#181510':'#ffffff');
}
function setAccent(value){
  accentColor=/^#[0-9a-f]{6}$/i.test(value||'')?value.toLowerCase():'';
  applyAccent();
  syncAccentUI();
  persistSettings();
}
function populateAccentPresets(){
  const row=$('#accentPresets');if(!row)return;
  row.replaceChildren();
  for(const preset of ACCENT_PRESETS){
    const label=t(`accent${preset.key[0].toUpperCase()}${preset.key.slice(1)}`);
    const button=document.createElement('button');
    button.type='button';
    button.className='accent-swatch';
    button.style.background=preset.value;
    button.title=label;
    button.setAttribute('aria-label',`${t('accentColor')}: ${label}`);
    button.dataset.accent=preset.value;
    if(accentColor&&accentColor.toLowerCase()===preset.value)button.classList.add('active');
    row.appendChild(button);
  }
}
function syncAccentUI(){
  const picker=$('#accentColor');
  if(picker)picker.value=accentColor||'#c9a86a';
  $('#accentPresets')?.querySelectorAll('button[data-accent]').forEach(node=>node.classList.toggle('active',Boolean(accentColor)&&node.dataset.accent===accentColor));
}
$('#accentPresets')?.addEventListener('click',event=>{
  const button=event.target.closest('button[data-accent]');
  if(button)setAccent(button.dataset.accent);
});
$('#accentColor')?.addEventListener('input',event=>setAccent(event.target.value));
$('#accentReset')?.addEventListener('click',()=>setAccent(''));
function applyLanguage() {
  document.documentElement.lang = language;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (I18N[language][key]) element.textContent = I18N[language][key];
  });
  for (const option of $('#themeSelect').options) option.textContent = t(option.value);
  renderToolButtons();
  syncLayers();
  $('#toolSettingsLabel').textContent = `${toolName(selectedTool).toUpperCase()} ${t('brushSettings')}`;
  populateLightingPresets();
  syncLightingUI();
  populateBrushShapes();
  populateAccentPresets();
  syncAccentUI();
}
window.matchMedia?.('(prefers-color-scheme: dark)').addEventListener?.('change', () => { if (themePreference === 'system') applyTheme(); });
loadSettings();
if (cameraRotateButton==='middle'&&cameraPanButton==='middle') cameraPanButton='disabled';

// Centralized controls and localization.
$('#languageSelect').value = language;
$('#themeSelect').value = themePreference;
$('#languageSelect').addEventListener('change', (event) => { language = event.target.value === 'ru' ? 'ru' : 'en'; persistSettings(); applyLanguage(); });
$('#themeSelect').addEventListener('change', (event) => { themePreference = ['system','dark','light'].includes(event.target.value) ? event.target.value : 'system'; applyTheme(); persistSettings(); });
$('#symmetryToggle').checked = symmetryEnabled;
$('#symmetryToggle').addEventListener('change', (event) => { symmetryEnabled = event.target.checked; persistSettings(); toast(symmetryEnabled ? t('symmetryOn') : t('symmetryOff')); });
$('#cameraRotateSelect').value = cameraRotateButton;
$('#cameraPanSelect').value = cameraPanButton;
$('#rotationSensitivity').value = String(Math.round(rotationSensitivity * 1000));
$('#zoomSensitivity').value = String(Math.round(zoomSensitivity * 1000));
$('#performanceMode').value = performanceMode;
$('#graphicsQuality').value=graphicsQuality;$('#adaptivePerformance').checked=adaptivePerformance;$('#memoryOptimization').checked=memoryOptimization;
$('#cameraRotateSelect').addEventListener('change',event=>{
  cameraRotateButton=['right','middle','space-left'].includes(event.target.value)?event.target.value:'right';
  if (cameraRotateButton==='middle'&&cameraPanButton==='middle') cameraPanButton='disabled';
  $('#cameraPanSelect').value=cameraPanButton; persistSettings(); cancelActiveInteraction();
});
$('#cameraPanSelect').addEventListener('change',event=>{
  const next=['middle','shift-right','disabled'].includes(event.target.value)?event.target.value:'middle';
  if (cameraRotateButton==='middle'&&next==='middle') { cameraPanButton='disabled'; $('#cameraPanSelect').value='disabled'; }
  else cameraPanButton=next;
  persistSettings(); cancelActiveInteraction();
});
$('#rotationSensitivity').addEventListener('input',event=>{rotationSensitivity=clamp(Number(event.target.value)/1000,.002,.02);$('#rotationSensitivityValue').textContent=`${Math.round(rotationSensitivity*1000)}‰`;persistSettings();});
$('#zoomSensitivity').addEventListener('input',event=>{zoomSensitivity=clamp(Number(event.target.value)/1000,.001,.012);$('#zoomSensitivityValue').textContent=`${Math.round(zoomSensitivity*1000)}‰`;persistSettings();});
$('#performanceMode').addEventListener('change',event=>{performanceMode=['performance','balanced','quality'].includes(event.target.value)?event.target.value:'balanced';persistSettings();});
function applyGraphicsQuality(value){graphicsQuality=['low','balanced','high'].includes(value)?value:'low';adaptiveScale=1;const scale={low:.72,balanced:.9,high:1.15}[graphicsQuality];renderer?.setPixelRatio(Math.min((window.devicePixelRatio||1)*scale,graphicsQuality==='high'?1.5:1));resize();persistSettings();}
function updateAdaptiveQuality(renderMs){if(!adaptivePerformance||graphicsQuality==='low'||!renderer)return;if(renderMs>42){slowRenderSamples++;fastRenderSamples=0;}else if(renderMs<24){fastRenderSamples++;slowRenderSamples=0;}else{slowRenderSamples=Math.max(0,slowRenderSamples-1);fastRenderSamples=0;}if(slowRenderSamples>=8&&adaptiveScale>.65){adaptiveScale=Math.max(.65,adaptiveScale-.1);renderer.setPixelRatio(Math.max(.5,renderer.getPixelRatio()-.1));slowRenderSamples=0;}else if(fastRenderSamples>=40&&adaptiveScale<1){adaptiveScale=Math.min(1,adaptiveScale+.05);renderer.setPixelRatio(Math.min((window.devicePixelRatio||1)*({balanced:.9,high:1.15}[graphicsQuality]||.9)*adaptiveScale,1.5));fastRenderSamples=0;}}

$('#resetCameraControls').addEventListener('click',()=>{cameraRotateButton='right';cameraPanButton='middle';rotationSensitivity=.008;zoomSensitivity=.004;$('#cameraRotateSelect').value=cameraRotateButton;$('#cameraPanSelect').value=cameraPanButton;$('#rotationSensitivity').value='8';$('#zoomSensitivity').value='4';$('#rotationSensitivityValue').textContent='8‰';$('#zoomSensitivityValue').textContent='4‰';persistSettings();cancelActiveInteraction();});
$('#rotationSensitivityValue').textContent=`${Math.round(rotationSensitivity*1000)}‰`;
$('#zoomSensitivityValue').textContent=`${Math.round(zoomSensitivity*1000)}‰`;
$('#performanceDiagnosticsToggle')?.addEventListener('click',togglePerformanceDiagnostics);
// Settings live in their own dialog now, keeping the main workspace clean.
function toggleSettingsDialog(){const dialog=$('#settingsDialog');if(!dialog)return;dialog.hidden=!dialog.hidden;$('#settingsToggle')?.setAttribute('aria-pressed',String(!dialog.hidden));}
$('#settingsToggle')?.addEventListener('click',toggleSettingsDialog);
$('#settingsClose')?.addEventListener('click',toggleSettingsDialog);
$('#settingsDialog')?.addEventListener('click',(event)=>{if(event.target===event.currentTarget)toggleSettingsDialog();});
applyTheme();

const toolGrid = $('#toolGrid');
function renderToolButtons() {
  toolGrid.replaceChildren();
  TOOLS.forEach((tool, index) => {
    if (currentCategory !== 'all' && tool.category !== currentCategory) return;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `tool-button${index === selectedTool ? ' active' : ''}${tool.key === 'symmetry' && symmetryEnabled ? ' toggled' : ''}`;
    button.dataset.toolIndex = String(index);
    button.title = toolTip(index);
    button.setAttribute('aria-label', toolName(index));
    button.setAttribute('aria-pressed', String(index === selectedTool || (tool.key === 'symmetry' && symmetryEnabled)));
    button.innerHTML = `<span class="tool-icon">${icon(tool.icon,18)}</span><span class="tool-name">${toolName(index)}</span>`;
    toolGrid.appendChild(button);
  });
  $('#toolCount').textContent = String(TOOLS.length);
  updateToolTip();
}
function updateToolTip() {
  $('#toolTip').innerHTML = `<strong>${toolName(selectedTool)}</strong><p>${toolTip(selectedTool)}</p>`;
}
function selectTool(index) {
  if (!Number.isInteger(index) || index < 0 || index >= TOOLS.length) return;
  const tool = TOOLS[index];
  if (tool.key === 'symmetry') {
    symmetryEnabled = !symmetryEnabled;
    $('#symmetryToggle').checked = symmetryEnabled;
    persistSettings(); renderToolButtons();
    toast(symmetryEnabled ? t('symmetryOn') : t('symmetryOff'));
    return;
  }
  selectedTool = index;
  if (!tool.action) lastPaintTool = index;
  renderToolButtons();
  $('#toolSettingsLabel').textContent = `${toolName(index).toUpperCase()} ${t('brushSettings')}`;
  $('#status').textContent = `${t('toolStatus')}: ${toolName(index)}`;
  $('#stage').dataset.activeTool = tool.key;
  drawBrushPreview();
  requestRender();
}
$('#toolGrid').addEventListener('click', (event) => {
  const button = event.target.closest('button[data-tool-index]');
  if (button && toolGrid.contains(button)) selectTool(Number(button.dataset.toolIndex));
});
$('#toolFilters').addEventListener('click', (event) => {
  const button = event.target.closest('button[data-category]');
  if (!button) return;
  currentCategory = button.dataset.category;
  $('#toolFilters').querySelectorAll('button').forEach((node) => node.classList.toggle('active', node === button));
  renderToolButtons();
});

function toast(message) {
  const element = $('#toast');
  element.textContent = message;
  element.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => element.classList.remove('show'), 2400);
}
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
}
function setColor(value) {
  if (!/^#[0-9a-f]{6}$/i.test(value)) return;
  color = value.toLowerCase();
  $('#colorPicker').value = color;
  $('#colorHex').textContent = color.toUpperCase();
  queueAutosave();
}
$('#colorPicker').addEventListener('input', (event) => setColor(event.target.value));
COLORS.forEach((preset) => {
  const button = document.createElement('button');
  button.type = 'button'; button.className = 'swatch'; button.style.backgroundColor = preset; button.title = preset;
  button.setAttribute('aria-label', `Select ${preset}`); button.addEventListener('click', () => setColor(preset)); $('#swatches').appendChild(button);
});
$('#size').addEventListener('input', (event) => { brushSize = Number(event.target.value); $('#sizeReadout').textContent = `${brushSize} px`; });
$('#opacity').addEventListener('input', (event) => { opacity = Number(event.target.value)/100; $('#opacityReadout').textContent = `${event.target.value}%`; });
$('#softness').addEventListener('input', (event) => { softness = Number(event.target.value)/100; $('#softReadout').textContent = `${event.target.value}%`; });
$('#flow').addEventListener('input', (event) => { flow = Number(event.target.value)/100; $('#flowReadout').textContent = `${event.target.value}%`; });
$('#addLayer').addEventListener('click', () => addLayer());
$('#duplicateLayer').addEventListener('click', () => duplicateLayer());
$('#clearLayer').addEventListener('click', () => clearActive());
$('#layerUp').addEventListener('click', () => moveLayer(1));
$('#layerDown').addEventListener('click', () => moveLayer(-1));
$('#renameLayer').addEventListener('click', () => renameActive());
$('#deleteLayer').addEventListener('click', () => deleteActive());
$('#layerOpacity').addEventListener('input', (event) => {
  const layer = layers[activeLayer]; if (!layer) return;
  layer.opacity = Number(event.target.value)/100;
  $('#layerOpacityReadout').textContent = `${event.target.value}%`;
  layer.group.children.forEach((mesh) => { if (mesh.material) mesh.material.opacity = (mesh.userData.baseOpacity ?? 1) * layer.opacity; });
  queueAutosave(); requestRender();
});
$('#projectName').addEventListener('input', queueAutosave);
$('#newBtn').addEventListener('click', newProject);
$('#openBtn').addEventListener('click', openProject);
$('#saveBtn').addEventListener('click', saveProject);
$('#exportBtn').addEventListener('click', exportImage);
$('#undoBtn').addEventListener('click', undo);
$('#redoBtn').addEventListener('click', redo);
// The normalized head faces -Z in orbit space, so a camera at +Z needs a PI
// orbit yaw to see the face. Left/right views are derived from that yaw.
$('#frontBtn').addEventListener('click', () => setView(0,Math.PI,4.4));
$('#leftBtn').addEventListener('click', () => setView(0,Math.PI/2,4.4));
$('#rightBtn').addEventListener('click', () => setView(0,Math.PI*1.5,4.4));
$('#backBtn').addEventListener('click', () => setView(0,0,4.4));
$('#toggleGrid').addEventListener('click', () => viewport.classList.toggle('grid-on'));
$('#fullscreenBtn').addEventListener('click', () => viewport.requestFullscreen?.());
$('#retryModel').addEventListener('click', () => loadModel(true));
$('#headModelSelect').addEventListener('change', event => switchHeadModel(event.target.value));
const skinTonesRow=$('#skinTones');
if(skinTonesRow){
  SKIN_TONES.forEach(tone=>{
    const button=document.createElement('button');
    button.type='button';button.className=`skin-tone${tone.key===skinTone?' active':''}`;button.title=tone.name;
    button.setAttribute('aria-label',`Skin tone: ${tone.name}`);
    button.style.background=tone.key==='natural'?'linear-gradient(135deg,#f3c9ad,#e5a883)':tone.value;
    button.addEventListener('click',()=>{
      skinTone=tone.key;applySkinTone();persistSettings();queueAutosave();requestRender();
      skinTonesRow.querySelectorAll('button').forEach(node=>node.classList.toggle('active',node===button));
    });
    skinTonesRow.appendChild(button);
  });
}
$('#graphicsQuality').addEventListener('change', event => applyGraphicsQuality(event.target.value));
$('#adaptivePerformance').addEventListener('change', event => { adaptivePerformance=event.target.checked; persistSettings(); });
$('#memoryOptimization').addEventListener('change', event => { memoryOptimization=event.target.checked; persistSettings(); });

// ----- Lighting, brush shape and brush preview controls -----
function populateLightingPresets(){
  const select=$('#lightingPreset');if(!select)return;
  select.replaceChildren();
  for(const preset of LIGHT_PRESETS){
    const option=document.createElement('option');
    option.value=preset.key;
    option.textContent=t(`lp${preset.key[0].toUpperCase()}${preset.key.slice(1)}`);
    select.appendChild(option);
  }
  const custom=document.createElement('option');
  custom.value='custom';custom.textContent=t('lpCustom');
  select.appendChild(custom);
}
function syncLightingUI(){
  $('#lightTemp').value=String(lighting.temp);
  $('#lightTempReadout').textContent=`${lighting.temp} K`;
  $('#lightAzimuth').value=String(lighting.az);
  $('#lightAzimuthReadout').textContent=`${lighting.az}°`;
  $('#lightElevation').value=String(lighting.el);
  $('#lightElevationReadout').textContent=`${lighting.el}°`;
  $('#lightIntensity').value=String(Math.round(lighting.intensity*100));
  $('#lightIntensityReadout').textContent=`${Math.round(lighting.intensity*100)}%`;
  $('#lightFill').value=String(Math.round(lighting.fill*100));
  $('#lightFillReadout').textContent=`${Math.round(lighting.fill*100)}%`;
  $('#lightRim').value=String(Math.round(lighting.rim*100));
  $('#lightRimReadout').textContent=`${Math.round(lighting.rim*100)}%`;
  $('#lightAmbient').value=String(Math.round(lighting.ambient*100));
  $('#lightAmbientReadout').textContent=`${Math.round(lighting.ambient*100)}%`;
  $('#lightingPreset').value=lighting.preset;
  $('#toggleLightGizmo')?.setAttribute('aria-pressed',String(lightGizmoVisible));
}
function bindLightingControls(){
  populateLightingPresets();
  $('#lightingPreset').addEventListener('change',event=>applyLightPreset(event.target.value));
  $('#lightTemp').addEventListener('input',event=>setLighting({temp:Number(event.target.value)}));
  $('#lightAzimuth').addEventListener('input',event=>setLighting({az:Number(event.target.value)}));
  $('#lightElevation').addEventListener('input',event=>setLighting({el:Number(event.target.value)}));
  $('#lightIntensity').addEventListener('input',event=>setLighting({intensity:Number(event.target.value)/100}));
  $('#lightFill').addEventListener('input',event=>setLighting({fill:Number(event.target.value)/100}));
  $('#lightRim').addEventListener('input',event=>setLighting({rim:Number(event.target.value)/100}));
  $('#lightAmbient').addEventListener('input',event=>setLighting({ambient:Number(event.target.value)/100}));
}
function populateBrushShapes(){
  const grid=$('#brushShapeGrid');if(!grid)return;
  grid.replaceChildren();
  for(const shape of BRUSH_SHAPES){
    const button=document.createElement('button');
    button.type='button';
    button.className=`shape-button${brushShapeOverride===shape.key||(shape.key==='default'&&!brushShapeOverride)?' active':''}`;
    button.dataset.shapeKey=shape.key;
    button.textContent=t(`shape${shape.key[0].toUpperCase()}${shape.key.slice(1)}`);
    button.title=t(`shape${shape.key[0].toUpperCase()}${shape.key.slice(1)}`);
    grid.appendChild(button);
  }
}
$('#brushShapeGrid')?.addEventListener('click',event=>{
  const button=event.target.closest('button[data-shape-key]');
  if(!button)return;
  brushShapeOverride=button.dataset.shapeKey==='default'?null:button.dataset.shapeKey;
  persistSettings();
  populateBrushShapes();
  drawBrushPreview();
  toast(`${t('brushShape')}: ${button.textContent}`);
});
function drawBrushPreview(){
  const canvas=$('#brushPreview'),fallback=$('#brushPreviewIcon');
  if(!canvas||!fallback)return;
  const tool=TOOLS[selectedTool];
  if(tool.action&&tool.key!=='eraser'){
    canvas.hidden=true;fallback.hidden=false;
    fallback.innerHTML=icon(tool.icon,40);
    return;
  }
  canvas.hidden=false;fallback.hidden=true;
  const size=canvas.width,ctx=canvas.getContext('2d');
  ctx.clearRect(0,0,size,size);
  const stamp=makeStampTexture(tool.key,tool.key==='eraser'?.5:softness).image;
  ctx.drawImage(stamp,0,0,size,size);
  ctx.globalCompositeOperation='source-in';
  ctx.fillStyle=tool.key==='eraser'?'#e5725f':color;
  ctx.fillRect(0,0,size,size);
  ctx.globalCompositeOperation='source-over';
  // Dashed boundary marks the physical footprint of the brush.
  ctx.strokeStyle='rgba(128,128,128,.55)';
  ctx.setLineDash([3,3]);
  ctx.lineWidth=1;
  ctx.beginPath();ctx.arc(size/2,size/2,size/2-1,0,Math.PI*2);ctx.stroke();
  ctx.setLineDash([]);
}
$('#size')?.addEventListener('input',drawBrushPreview);
$('#softness')?.addEventListener('input',drawBrushPreview);
$('#opacity')?.addEventListener('input',drawBrushPreview);
$('#colorPicker')?.addEventListener('input',drawBrushPreview);

// ----- On-model brush cursor -----
// The cursor previews the active tool's real stamp footprint: it reuses the
// same cached stamp texture tinted with the pigment, follows the surface point
// under the pointer — including while a stroke is being drawn — and adds a thin
// dark ring for exact size/position reading. A mirrored twin follows symmetry.
const brushCursor={stamp:null,ring:null,mirror:null,stampMaterial:null,ringMaterial:null,last:null,lastRadius:-1,signature:''};
let cursorRingTexture=null;
function makeCursorRingTexture(){
  if(cursorRingTexture)return cursorRingTexture;
  const size=128,c=document.createElement('canvas');c.width=c.height=size;
  const ctx=c.getContext('2d');
  const g=ctx.createRadialGradient(64,64,0,64,64,64);
  g.addColorStop(0,'rgba(255,255,255,0)');
  g.addColorStop(.78,'rgba(255,255,255,0)');
  g.addColorStop(.88,'rgba(255,255,255,1)');
  g.addColorStop(.96,'rgba(255,255,255,.25)');
  g.addColorStop(1,'rgba(255,255,255,0)');
  ctx.fillStyle=g;ctx.fillRect(0,0,size,size);
  cursorRingTexture=new THREE.CanvasTexture(c);
  cursorRingTexture.colorSpace=THREE.SRGBColorSpace;
  cursorRingTexture.generateMipmaps=false;
  cursorRingTexture.minFilter=THREE.LinearFilter;
  cursorRingTexture.magFilter=THREE.LinearFilter;
  return cursorRingTexture;
}
function ensureBrushCursor(){
  if(brushCursor.stamp)return;
  brushCursor.ringMaterial=new THREE.MeshBasicMaterial({map:makeCursorRingTexture(),color:0x1a1c20,transparent:true,opacity:.85,depthWrite:false,depthTest:true,polygonOffset:true,polygonOffsetFactor:-3,side:THREE.DoubleSide,toneMapped:false});
  brushCursor.stampMaterial=new THREE.MeshBasicMaterial({transparent:true,opacity:.55,depthWrite:false,depthTest:true,polygonOffset:true,polygonOffsetFactor:-4,side:THREE.DoubleSide,toneMapped:false});
  brushCursor.ring=new THREE.Mesh(new THREE.BufferGeometry(),brushCursor.ringMaterial);
  brushCursor.stamp=new THREE.Mesh(new THREE.BufferGeometry(),brushCursor.stampMaterial);
  brushCursor.mirror=new THREE.Mesh(new THREE.BufferGeometry(),brushCursor.ringMaterial);
  for(const mesh of [brushCursor.ring,brushCursor.stamp,brushCursor.mirror]){mesh.frustumCulled=false;mesh.visible=false;}
  brushCursor.ring.renderOrder=999997;
  brushCursor.stamp.renderOrder=999998;
  brushCursor.mirror.renderOrder=999999;
  orbit.add(brushCursor.ring);orbit.add(brushCursor.stamp);orbit.add(brushCursor.mirror);
}
function cursorSignature(){
  const tool=TOOLS[selectedTool];
  return `${selectedTool}|${brushShapeOverride}|${Math.round((tool.key==='eraser'?.5:softness)*100)}|${color}`;
}
function applyCursorStyle(){
  const tool=TOOLS[selectedTool];
  brushCursor.stampMaterial.map=makeStampTexture(tool.key,tool.key==='eraser'?.5:softness);
  if(tool.key==='eraser'){brushCursor.stampMaterial.color.set('#e5725f');brushCursor.stampMaterial.opacity=.3;}
  else{brushCursor.stampMaterial.color.set(color);brushCursor.stampMaterial.opacity=.55;}
  brushCursor.stampMaterial.needsUpdate=true;
}
function hideBrushCursor(){
  if(!brushCursor.stamp)return;
  brushCursor.ring.visible=false;brushCursor.stamp.visible=false;brushCursor.mirror.visible=false;brushCursor.last=null;
  requestRender();
}
function updateBrushCursor(hit){
  if(!modelReady||!hit){hideBrushCursor();return;}
  ensureBrushCursor();
  const tool=TOOLS[selectedTool];
  if(tool.action&&tool.key!=='eraser'){hideBrushCursor();return;}
  const spatial=spatialIndexes[hit.meshIndex];
  if(!spatial){hideBrushCursor();return;}
  const signature=cursorSignature();
  if(signature!==brushCursor.signature){brushCursor.signature=signature;applyCursorStyle();}
  const radius=radiusForHit(hit,tool);
  const last=brushCursor.last;
  if(last&&brushCursor.lastRadius===radius){
    const dx=hit.point[0]-last[0],dy=hit.point[1]-last[1],dz=hit.point[2]-last[2];
    if(dx*dx+dy*dy+dz*dz<radius*radius*.015)return;
  }
  const dab={meshIndex:hit.meshIndex,p:[...hit.point],n:[...hit.normal],r:radius,aspect:effectiveAspect(tool),angle:0,c:[1,1,1]};
  const geometry=makeDecalGeometry(spatial,dab);
  if(!geometry){hideBrushCursor();return;}
  const oldGeometry=brushCursor.ring.geometry;
  // Ring and stamp share one decal geometry: two meshes, one vertex buffer.
  brushCursor.ring.geometry=geometry;
  brushCursor.stamp.geometry=geometry;
  if(oldGeometry!==geometry)oldGeometry.dispose();
  brushCursor.ring.visible=true;brushCursor.stamp.visible=true;
  brushCursor.last=[...hit.point];brushCursor.lastRadius=radius;
  if(symmetryEnabled){
    const mirrorDab={...dab,p:[2*spatial.bounds.center[0]-dab.p[0],dab.p[1],dab.p[2]],n:[-dab.n[0],dab.n[1],dab.n[2]]};
    const mirrorGeometry=makeDecalGeometry(spatial,mirrorDab);
    const oldMirror=brushCursor.mirror.geometry;
    if(mirrorGeometry){brushCursor.mirror.geometry=mirrorGeometry;brushCursor.mirror.visible=true;}
    else brushCursor.mirror.visible=false;
    if(oldMirror!==mirrorGeometry)oldMirror.dispose();
  }else{
    brushCursor.mirror.visible=false;
  }
  requestRender();
}

// ----- Model-independent, non-overlapping surface decal painting -----
function createLayer(name, legacyPaint = null) {
  const group = new THREE.Group(); group.name = `makeup-layer-${layerCounter}`;
  const layer = { id:layerCounter++, name, group, visible:true, opacity:1, locked:false, strokes:[], legacyPaint, legacyTexture:null, history:[], historyIndex:-1, geometryBuildToken:0 };
  if (modelReady) orbit.add(group);
  storeSnapshot(layer);
  return layer;
}
function disposeGroup(group) {
  const geometries=new Set(),materials=new Set();
  for(const child of [...group.children]){
    group.remove(child);
    if(!child.userData.sharedGeometry&&child.geometry)geometries.add(child.geometry);
    if(Array.isArray(child.material))child.material.forEach(material=>materials.add(material));
    else if(child.material)materials.add(child.material);
  }
  geometries.forEach(geometry=>geometry.dispose());
  materials.forEach(material=>material.dispose());
}
function attachLegacyLayer(layer) {
  if (!layer.legacyPaint || !modelReady || layer.legacyTexture) return;
  const image = new Image();
  image.onload = () => {
    const texture = new THREE.Texture(image); texture.colorSpace = THREE.SRGBColorSpace; texture.flipY = true; texture.needsUpdate = true; layer.legacyTexture = texture;
    for (const source of paintMeshes) {
      const material = new THREE.MeshPhongMaterial({map:texture,transparent:true,opacity:layer.opacity,depthWrite:false,depthTest:true,polygonOffset:true,polygonOffsetFactor:-2,side:THREE.DoubleSide,shininess:6,specular:new THREE.Color(.05,.05,.05),toneMapped:false});
      const overlay = new THREE.Mesh(source.geometry,material);
      const inverseOrbit = orbit.matrixWorld.clone().invert();
      const sourceToOrbit = inverseOrbit.multiply(source.matrixWorld);
      sourceToOrbit.decompose(overlay.position, overlay.quaternion, overlay.scale);
      overlay.userData.sharedGeometry = true; overlay.frustumCulled = false; overlay.renderOrder = 10 + layers.indexOf(layer) * 100; overlay.userData.baseOpacity = 1; overlay.name = `legacy-uv-${layer.id}`; layer.group.add(overlay);
    }
    requestRender();
  };
  image.onerror = () => toast(language === 'ru' ? 'Не удалось прочитать старый слой грима' : 'Could not load legacy paint layer');
  image.src = layer.legacyPaint;
}
async function attachLayer(layer) {
  if (!modelReady) return;
  if (layer.group.parent !== orbit) orbit.add(layer.group);
  // Idempotent attachment: model retries/recovery must not duplicate stroke meshes.
  disposeGroup(layer.group);
  layer.legacyTexture?.dispose();
  layer.legacyTexture = null;
  layer.group.visible = layer.visible;
  // Yield between strokes so attaching a heavily painted project keeps the UI
  // responsive instead of blocking the main thread for seconds. The build token
  // cancels this loop if the layer is rebuilt, cleared, or deleted meanwhile.
  const buildToken = ++layer.geometryBuildToken;
  for (const stroke of layer.strokes) {
    if (layer.geometryBuildToken !== buildToken || !layers.includes(layer)) break;
    buildStrokeMesh(layer, stroke);
    await yieldUI();
  }
  attachLegacyLayer(layer);
  requestRender();
}
function addLayer(name) {
  if (layers.length >= MAX_LAYERS) return toast(`${t('layerLimit')} (${MAX_LAYERS})`);
  const layer = createLayer(name || `${t('layerName')} ${layerCounter}`); layers.push(layer); if (modelReady) attachLayer(layer);
  activeLayer = layers.length-1; syncLayers(); queueAutosave(); toast(t('layerAdded'));
}
function cloneStrokeData(stroke) {
  return { id:stroke.id,tool:stroke.tool,color:stroke.color,opacity:stroke.opacity,softness:stroke.softness,flow:stroke.flow,dabs:stroke.dabs.map((dab)=>({...dab,p:[...dab.p],n:[...dab.n],c:dab.c?[...dab.c]:undefined})) };
}
function snapshotState(layer) { return layer.strokes.slice(); }
function storeSnapshot(layer) {
  layer.history = layer.history.slice(0,layer.historyIndex+1);
  layer.history.push(snapshotState(layer));
  const historyLimit=memoryOptimization?50:MAX_HISTORY;if (layer.history.length > historyLimit) layer.history.shift();
  layer.historyIndex = layer.history.length-1;
  if (layer === layers[activeLayer]) refreshHistoryButtons();
}
// Small front-view projection of a layer's dabs so the layer list shows what
// actually lives on each layer.
function drawLayerThumbnail(canvas,layer){
  const ctx=canvas.getContext('2d');const w=canvas.width,h=canvas.height;
  ctx.clearRect(0,0,w,h);
  if(!spatialIndexes.length)return;
  const b=spatialIndexes[0].bounds;const ex=Math.max(b.max[0]-b.min[0],.001),ey=Math.max(b.max[1]-b.min[1],.001);
  let dabCount=0;const samples=[];
  for(const stroke of layer.strokes){dabCount+=stroke.dabs.length;for(const dab of stroke.dabs)samples.push({stroke,dab});}
  const stride=Math.max(1,Math.ceil(samples.length/600));
  for(let i=0;i<samples.length;i+=stride){
    const {stroke,dab}=samples[i];
    const x=(1-(dab.p[0]-b.min[0])/ex)*w,y=(1-(dab.p[1]-b.min[1])/ey)*h;
    const r=Math.max(1.5,Math.min(9,dab.r/ex*w*2.2));
    ctx.globalAlpha=clamp((stroke.opacity??.8)*.9,.15,1);
    ctx.fillStyle=dab.css||stroke.color;
    ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.fill();
  }
  ctx.globalAlpha=1;
}
const LAYER_EYE_SVG='<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2.8 12S6.2 6.8 12 6.8 21.2 12 21.2 12 18 17.2 12 17.2 2.8 12 2.8 12z"/><circle cx="12" cy="12" r="2.6"/></svg>';
const LAYER_EYE_OFF_SVG='<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2.8 12S6.2 6.8 12 6.8c1.8 0 3.4.6 4.8 1.4M21.2 12S18 17.2 12 17.2c-1.8 0-3.4-.6-4.8-1.4"/><path d="M4 20L20 4"/></svg>';
const LAYER_LOCK_SVG='<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="6" y="11" width="12" height="9" rx="2"/><path d="M8.5 11V8a3.5 3.5 0 0 1 7 0v3"/></svg>';
const LAYER_UNLOCK_SVG='<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="6" y="11" width="12" height="9" rx="2"/><path d="M8.5 11V8a3.5 3.5 0 0 1 6.8-1.2"/></svg>';
function syncLayers() {
  const list = $('#layers'); list.replaceChildren();
  layers.forEach((layer,index)=>{
    const row = document.createElement('div'); row.className=`layer-item${index===activeLayer?' active':''}`; row.dataset.layerIndex=String(index); row.setAttribute('aria-selected',String(index===activeLayer));
    row.innerHTML=`<canvas class="layer-thumb" width="36" height="36" aria-label="Layer preview"></canvas><button class="visibility" type="button" title="Toggle visibility" aria-label="Toggle visibility">${layer.visible?LAYER_EYE_SVG:LAYER_EYE_OFF_SVG}</button><span class="layer-title">${escapeHTML(layer.name)}${layer.legacyPaint?' · UV':''}</span><span class="layer-count">${layer.strokes.length||''}</span><button class="lock" type="button" title="Toggle layer lock" aria-label="Toggle layer lock">${layer.locked?LAYER_LOCK_SVG:LAYER_UNLOCK_SVG}</button><span class="layer-number">${index+1}</span>`;
    row.addEventListener('click',()=>{activeLayer=index;syncLayers();$('#status').textContent=layer.name;requestRender();});
    row.querySelector('.visibility').addEventListener('click',(event)=>{event.stopPropagation();layer.visible=!layer.visible;layer.group.visible=layer.visible;syncLayers();queueAutosave();requestRender();});
    row.querySelector('.lock').addEventListener('click',(event)=>{event.stopPropagation();layer.locked=!layer.locked;syncLayers();queueAutosave();});
    list.appendChild(row);
    drawLayerThumbnail(row.querySelector('.layer-thumb'),layer);
    layer.group.children.forEach((mesh,childIndex)=>{mesh.renderOrder=20+index*10000+childIndex; if(mesh.material)mesh.material.opacity=(mesh.userData.baseOpacity??1)*layer.opacity;});
  });
  const active=layers[activeLayer]; $('#layerOpacity').value=String(Math.round((active?.opacity??1)*100)); $('#layerOpacityReadout').textContent=`${$('#layerOpacity').value}%`;
  $('#deleteLayer').disabled=layers.length<=1; $('#layerUp').disabled=activeLayer>=layers.length-1; $('#layerDown').disabled=activeLayer<=0; refreshHistoryButtons();
}
function refreshHistoryButtons() { const layer=layers[activeLayer]; $('#undoBtn').disabled=!layer||layer.historyIndex<=0; $('#redoBtn').disabled=!layer||layer.historyIndex>=layer.history.length-1; }
function restoreLayerSnapshot(layer,index) {
  if(index<0||index>=layer.history.length)return;
  layer.historyIndex=index; layer.strokes=layer.history[index].slice(); rebuildLayer(layer); syncLayers(); requestRender();
}
function undo() { const layer=layers[activeLayer]; if(layer&&layer.historyIndex>0)restoreLayerSnapshot(layer,layer.historyIndex-1); }
function redo() { const layer=layers[activeLayer]; if(layer&&layer.historyIndex<layer.history.length-1)restoreLayerSnapshot(layer,layer.historyIndex+1); }
async function duplicateLayer() {
  const source=layers[activeLayer]; if(!source)return toast(t('noLayer')); if(layers.length>=MAX_LAYERS)return toast(`${t('layerLimit')} (${MAX_LAYERS})`);
  const copy=createLayer(`${source.name} Copy`); copy.visible=source.visible; copy.opacity=source.opacity; copy.locked=source.locked; copy.legacyPaint=source.legacyPaint; copy.strokes=source.strokes.map(cloneStrokeData); layers.splice(activeLayer+1,0,copy); activeLayer++;
  if(modelReady)attachLayer(copy); storeSnapshot(copy); syncLayers(); queueAutosave(); requestRender(); toast(t('layerDuplicated'));
}
function moveLayer(direction) { const dest=activeLayer+direction;if(dest<0||dest>=layers.length)return;[layers[activeLayer],layers[dest]]=[layers[dest],layers[activeLayer]];activeLayer=dest;syncLayers();queueAutosave();requestRender(); }
function renameActive(){const layer=layers[activeLayer];if(!layer)return;const value=prompt(t('renamed'),layer.name);if(value?.trim()){layer.name=value.trim().slice(0,80);syncLayers();queueAutosave();}}
function deleteActive(){if(layers.length<=1)return;const [layer]=layers.splice(activeLayer,1);orbit.remove(layer.group);disposeGroup(layer.group);layer.legacyTexture?.dispose();activeLayer=clamp(activeLayer-1,0,layers.length-1);syncLayers();queueAutosave();requestRender();toast(t('deleted'));}
function clearActive(){const layer=layers[activeLayer];if(!layer)return toast(t('noLayer'));if(layer.locked)return toast(t('locked'));if(!confirm(`${t('clearConfirm')} '${layer.name}'?`))return;layer.strokes=[];layer.legacyPaint=null;rebuildLayer(layer);storeSnapshot(layer);queueAutosave();syncLayers();requestRender();}

// ----- Three.js renderer -----
viewport=$('#viewport'); canvas=$('#stage'); scene=new THREE.Scene();
scene.background=new THREE.Color('#1b1820'); camera=new THREE.PerspectiveCamera(35,1,.1,100); camera.position.set(0,0,zoom);
try {
  // preserveDrawingBuffer stays off: PNG export re-renders immediately before
  // toDataURL in the same task, and a preserved backbuffer costs a framebuffer
  // copy on every single rendered frame.
  renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:false,preserveDrawingBuffer:false,powerPreference:'high-performance'});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,.85)); renderer.outputColorSpace=THREE.SRGBColorSpace; renderer.toneMapping=THREE.ACESFilmicToneMapping; renderer.toneMappingExposure=1.05;
} catch(error) { console.error('WebGL initialization failed:',error);$('#loadState').textContent=t('graphicsError');$('#loadingText').textContent=t('graphicsError');$('#loadingSubtext').textContent=t('retryText');$('#loading').classList.add('error'); }
const hemisphereLight=new THREE.HemisphereLight(0xded7ff,0x4a3030,2);scene.add(hemisphereLight);
const keyLight=new THREE.DirectionalLight(0xffe7dc,3);keyLight.position.set(2.5,3.5,4);scene.add(keyLight);
const fillLight=new THREE.DirectionalLight(0xb8baff,1.3);fillLight.position.set(-3,1,2);scene.add(fillLight);
const rimLight=new THREE.DirectionalLight(0xffffff,1.6);rimLight.position.set(0,2,-3);scene.add(rimLight);
applyLighting();
ensureLightGizmo();
$('#toggleLightGizmo')?.addEventListener('click',toggleLightGizmo);
orbit=new THREE.Group();orbit.rotation.y=Math.PI;scene.add(orbit);raycaster=new THREE.Raycaster();raycaster.params.Mesh.threshold=.005;
function requestRender(){if(!renderer||renderQueued)return;renderQueued=true;requestAnimationFrame(()=>{renderQueued=false;if(renderer){const started=performance.now();renderer.render(scene,camera);const elapsed=performance.now()-started;perfStats.renderFrames++;updateAdaptiveQuality(elapsed);}});}
function resize(){if(!renderer)return;const w=viewport.clientWidth,h=viewport.clientHeight;if(w<1||h<1)return;renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();requestRender();}
window.addEventListener('resize',resize,{passive:true});if('ResizeObserver'in window)new ResizeObserver(resize).observe(viewport);resize();
function setView(rx,ry,distance){orbit.rotation.set(rx,ry,0);orbit.position.set(0,0,0);viewTarget.set(0,0,0);zoom=clamp(distance,1.2,9);camera.position.set(viewTarget.x,viewTarget.y,viewTarget.z+zoom);camera.lookAt(viewTarget);invalidateSceneMatrices();requestRender();}
function panCamera(dx,dy){const scale=(2*zoom*Math.tan(THREE.MathUtils.degToRad(camera.fov/2)))/Math.max(1,viewport.clientHeight);const right=new THREE.Vector3(1,0,0).applyQuaternion(camera.quaternion);const up=new THREE.Vector3(0,1,0).applyQuaternion(camera.quaternion);const delta=right.multiplyScalar(-dx*scale).add(up.multiplyScalar(dy*scale));viewTarget.add(delta);camera.position.add(delta);camera.lookAt(viewTarget);invalidateSceneMatrices();requestRender();}
function setLoadingState(state,detail=''){$('#loadState').textContent=state;if(detail)$('#loadingSubtext').textContent=detail;}
function normalizeModel(root){root.updateMatrixWorld(true);const bounds=new THREE.Box3().setFromObject(root);const center=bounds.getCenter(new THREE.Vector3());const size=bounds.getSize(new THREE.Vector3());const largest=Math.max(size.x,size.y,size.z);if(!Number.isFinite(largest)||largest<=0)throw new Error('Invalid model dimensions');const scale=2.35/largest;root.rotation.set(0,Math.PI,0);const rotatedCenter=center.clone().applyAxisAngle(new THREE.Vector3(0,1,0),Math.PI);root.scale.setScalar(scale);root.position.copy(rotatedCenter.multiplyScalar(-scale));root.updateMatrixWorld(true);}
function disposeModelRoot(root){disposeLoadedModel(root);}

const yieldUI=()=>new Promise((resolve)=>setTimeout(resolve,0));
function vertexTransform(x,y,z,e){const w=1/(e[3]*x+e[7]*y+e[11]*z+e[15]||1);return [(e[0]*x+e[4]*y+e[8]*z+e[12])*w,(e[1]*x+e[5]*y+e[9]*z+e[13])*w,(e[2]*x+e[6]*y+e[10]*z+e[14])*w];}
async function buildSpatialIndex(mesh){
  const geometry=mesh.geometry,position=geometry.attributes.position,index=geometry.index;
  if(!position)throw new Error(`Mesh ${mesh.name||'unnamed'} has no positions`);
  const inverseOrbit=orbit.matrixWorld.clone().invert();const sourceToOrbit=inverseOrbit.multiply(mesh.matrixWorld);
  const e=sourceToOrbit.elements,vertexCount=position.count,points=new Float32Array(vertexCount*3);
  let minX=Infinity,minY=Infinity,minZ=Infinity,maxX=-Infinity,maxY=-Infinity,maxZ=-Infinity;
  for(let v=0;v<vertexCount;v++){
    const p=vertexTransform(position.getX(v),position.getY(v),position.getZ(v),e),o=v*3;
    points[o]=p[0];points[o+1]=p[1];points[o+2]=p[2];
    minX=Math.min(minX,p[0]);minY=Math.min(minY,p[1]);minZ=Math.min(minZ,p[2]);
    maxX=Math.max(maxX,p[0]);maxY=Math.max(maxY,p[1]);maxZ=Math.max(maxZ,p[2]);
    if(v%32000===0)await yieldUI();
  }
  const extentX=Math.max(maxX-minX,.001),extentY=Math.max(maxY-minY,.001),extentZ=Math.max(maxZ-minZ,.001);
  const cellSize=Math.max(extentX,extentY,extentZ)/GRID_RESOLUTION;
  const nx=Math.ceil(extentX/cellSize)+1,ny=Math.ceil(extentY/cellSize)+1,nz=Math.ceil(extentZ/cellSize)+1;
  const cellCount=nx*ny*nz,faceCount=index?Math.floor(index.count/3):Math.floor(position.count/3);
  const triangles=new Uint32Array(faceCount*3),counts=new Uint32Array(cellCount);
  const cellCoord=(v,base,max)=>clamp(Math.floor((v-base)/cellSize),0,max-1);
  const eachFace=(face,callback)=>{
    const a=index?index.getX(face*3):face*3,b=index?index.getX(face*3+1):face*3+1,c=index?index.getX(face*3+2):face*3+2;
    triangles[face*3]=a;triangles[face*3+1]=b;triangles[face*3+2]=c;
    const ia=a*3,ib=b*3,ic=c*3;
    const x0=Math.min(points[ia],points[ib],points[ic]),x1=Math.max(points[ia],points[ib],points[ic]);
    const y0=Math.min(points[ia+1],points[ib+1],points[ic+1]),y1=Math.max(points[ia+1],points[ib+1],points[ic+1]);
    const z0=Math.min(points[ia+2],points[ib+2],points[ic+2]),z1=Math.max(points[ia+2],points[ib+2],points[ic+2]);
    const gx0=cellCoord(x0,minX,nx),gx1=cellCoord(x1,minX,nx),gy0=cellCoord(y0,minY,ny),gy1=cellCoord(y1,minY,ny),gz0=cellCoord(z0,minZ,nz),gz1=cellCoord(z1,minZ,nz);
    for(let z=gz0;z<=gz1;z++)for(let y=gy0;y<=gy1;y++)for(let x=gx0;x<=gx1;x++)callback(x+nx*(y+ny*z));
  };
  let total=0;
  for(let f=0;f<faceCount;f++){eachFace(f,cell=>{counts[cell]++;total++;});if(f%16000===0)await yieldUI();}
  const offsets=new Uint32Array(cellCount+1);
  for(let i=0;i<cellCount;i++)offsets[i+1]=offsets[i]+counts[i];
  const cursor=offsets.slice(0,cellCount),faceIds=new Uint32Array(total);
  for(let f=0;f<faceCount;f++){eachFace(f,cell=>{faceIds[cursor[cell]++]=f;});if(f%16000===0)await yieldUI();}

  // Face normals are computed once. The same cached data is used by the
  // high-speed ray query and by projected brush stamps.
  const faceNormals=new Float32Array(faceCount*3);
  for(let face=0;face<faceCount;face++){
    const a=triangles[face*3]*3,b=triangles[face*3+1]*3,c=triangles[face*3+2]*3;
    const abx=points[b]-points[a],aby=points[b+1]-points[a+1],abz=points[b+2]-points[a+2];
    const acx=points[c]-points[a],acy=points[c+1]-points[a+1],acz=points[c+2]-points[a+2];
    const nxv=aby*acz-abz*acy,nyv=abz*acx-abx*acz,nzv=abx*acy-aby*acx;
    const length=Math.hypot(nxv,nyv,nzv)||1,off=face*3;
    faceNormals[off]=nxv/length;faceNormals[off+1]=nyv/length;faceNormals[off+2]=nzv/length;
    if(face%50000===0)await yieldUI();
  }
  // Smooth vertex normals in orbit space: paint decals interpolate these so
  // strokes inherit the same shading as the underlying skin.
  const normalMatrix=new THREE.Matrix3().getNormalMatrix(sourceToOrbit);
  const nm=normalMatrix.elements;
  const vertexNormals=new Float32Array(vertexCount*3);
  const normalAttribute=geometry.attributes.normal;
  for(let v=0;v<vertexCount;v++){
    const x=normalAttribute?normalAttribute.getX(v):0,y=normalAttribute?normalAttribute.getY(v):0,z=normalAttribute?normalAttribute.getZ(v):1;
    let nx=nm[0]*x+nm[3]*y+nm[6]*z,ny=nm[1]*x+nm[4]*y+nm[7]*z,nz=nm[2]*x+nm[5]*y+nm[8]*z;
    const length=Math.hypot(nx,ny,nz)||1;
    vertexNormals[v*3]=nx/length;vertexNormals[v*3+1]=ny/length;vertexNormals[v*3+2]=nz/length;
    if(v%32000===0)await yieldUI();
  }
  return {
    mesh,points,triangles,faceNormals,vertexNormals,faceCount,gridMin:[minX,minY,minZ],
    gridMax:[minX+nx*cellSize,minY+ny*cellSize,minZ+nz*cellSize],
    cellSize,nx,ny,nz,offsets,faceIds,faceMarks:new Uint32Array(faceCount),mark:0,
    candidateFaces:[],normalMatrix,
    bounds:{min:[minX,minY,minZ],max:[maxX,maxY,maxZ],center:[(minX+maxX)/2,(minY+maxY)/2,(minZ+maxZ)/2],size:[extentX,extentY,extentZ]}
  };
}
function uvTriangleOverlapArea(a,b){
  let polygon=[a[0],a[1],a[2]].map((p)=>({x:p[0],y:p[1]}));
  const signed=(p,q,r)=>(q.x-p.x)*(r.y-p.y)-(q.y-p.y)*(r.x-p.x);
  const orientation=Math.sign(signed(b[0],b[1],b[2]))||1;
  for(let edge=0;edge<3;edge++){
    const p=b[edge],q=b[(edge+1)%3],input=polygon,output=[];
    if(!input.length)break;
    let previous=input[input.length-1],pv=orientation*signed(p,q,previous),previousInside=pv>=-1e-10;
    for(const current of input){
      const cv=orientation*signed(p,q,current),inside=cv>=-1e-10;
      if(inside!==previousInside){const denominator=pv-cv;const amount=Math.abs(denominator)<1e-14?0:pv/denominator;output.push({x:previous.x+(current.x-previous.x)*amount,y:previous.y+(current.y-previous.y)*amount});}
      if(inside)output.push(current);previous=current;pv=cv;previousInside=inside;
    }
    polygon=output;
  }
  if(polygon.length<3)return 0;let twice=0;for(let i=0;i<polygon.length;i++){const p=polygon[i],q=polygon[(i+1)%polygon.length];twice+=p.x*q.y-q.x*p.y;}return Math.abs(twice)*.5;
}
function inspectUVGeometry(geometry,maxPairChecks=2000000){
  const uv=geometry.attributes.uv,position=geometry.attributes.position,index=geometry.index;
  if(!uv)return {available:false,reason:'UV attribute missing'};
  const faceCount=index?Math.floor(index.count/3):Math.floor(position.count/3),triangles=new Array(faceCount),buckets=new Map();
  let invalid=0,outOfRange=0,degenerate=0,checks=0,overlaps=0,truncated=false;
  const resolution=128,cell=(x)=>clamp(Math.floor(x*resolution),0,resolution-1);
  for(let face=0;face<faceCount;face++){
    const ids=[0,1,2].map((corner)=>index?index.getX(face*3+corner):face*3+corner);
    const tri=ids.map((id)=>[uv.getX(id),uv.getY(id)]);triangles[face]={ids,tri};
    if(tri.some((p)=>!Number.isFinite(p[0])||!Number.isFinite(p[1]))){invalid++;continue;}
    if(tri.some((p)=>p[0]<0||p[0]>1||p[1]<0||p[1]>1))outOfRange++;
    const area=Math.abs((tri[1][0]-tri[0][0])*(tri[2][1]-tri[0][1])-(tri[1][1]-tri[0][1])*(tri[2][0]-tri[0][0]))*.5;
    if(area<1e-12){degenerate++;continue;}
    const minX=cell(Math.min(...tri.map((p)=>p[0]))),maxX=cell(Math.max(...tri.map((p)=>p[0]))),minY=cell(Math.min(...tri.map((p)=>p[1]))),maxY=cell(Math.max(...tri.map((p)=>p[1])));
    const candidates=new Set();
    for(let y=minY;y<=maxY;y++)for(let x=minX;x<=maxX;x++){
      const list=buckets.get(y*resolution+x);if(list)for(const other of list)candidates.add(other);
    }
    for(const other of candidates){
      if(++checks>maxPairChecks){truncated=true;break;}
      const previous=triangles[other];if(!previous||ids.some((id)=>previous.ids.includes(id)))continue;
      if(uvTriangleOverlapArea(tri,previous.tri)>1e-9)overlaps++;
    }
    if(truncated)break;
    for(let y=minY;y<=maxY;y++)for(let x=minX;x<=maxX;x++){const key=y*resolution+x;let list=buckets.get(key);if(!list)buckets.set(key,list=[]);list.push(face);}
  }
  return {available:true,triangleCount:faceCount,invalidUVTriangles:invalid,outOfRangeTriangles:outOfRange,degenerateUVTriangles:degenerate,overlappingTrianglePairs:overlaps,pairChecks:Math.min(checks,maxPairChecks),analysisTruncated:truncated,note:'Diagnostic of the original asset UVs only. New makeup strokes use independent surface-projected decal coordinates and do not depend on these UVs.'};
}
window.grimStudioDiagnostics=Object.freeze({...window.grimStudioDiagnostics,inspectUV:()=>paintMeshes.map((mesh,index)=>({mesh:index,name:mesh.name||`mesh-${index}`,...inspectUVGeometry(mesh.geometry)})),getPerformanceSnapshot:()=>({...perfStats,overlayMeshes:layers.reduce((n,layer)=>n+layer.group.children.length,0),storedDabs:layers.reduce((n,layer)=>n+layer.strokes.reduce((m,stroke)=>m+stroke.dabs.length,0),0)})});

async function loadModel(retry=false){
  if(!renderer)return;if(modelPromise)return modelPromise;if(modelReady)return;
  $('#retryModel').hidden=true;$('#loading').classList.remove('hide','error');$('#loadingText').textContent=t('loading');$('#loadingSubtext').textContent=t('preparing');setLoadingState('Loading',t('preparing'));
  modelPromise=(async()=>{const start=performance.now();let stagedRoot=null;try{
    // Keep the currently displayed model alive until the replacement is parsed and validated.
    const entry=HEAD_MODEL_REGISTRY.find(item=>item.id===currentHeadModelId)||HEAD_MODEL_REGISTRY[0];
    // Fetch model text via restricted main-process IPC. This avoids renderer fetch/file URL
    // failures with local OBJ/MTL files when the app is packaged as file:// / ASAR.
    const [objResult,mtlResult]=await Promise.all([window.grim.readModelAsset(entry.objFile),window.grim.readModelAsset(entry.mtlFile)]);
    if(objResult?.error)throw new Error(objResult.error);if(mtlResult?.error)throw new Error(mtlResult.error);
    if(typeof objResult?.content!=='string'||typeof mtlResult?.content!=='string')throw new Error('Model asset response was invalid');
    // MTL diffuse BMPs are absent in the supplied archive; those maps are optional.
    const parsedModel=parseHeadModel({objText:objResult.content,mtlText:mtlResult.content,modelId:entry.id});
    const candidateRoot=parsedModel.root;stagedRoot=candidateRoot;
    candidateRoot.traverse(object=>{if(!object.isMesh)return;object.castShadow=false;object.receiveShadow=false;object.frustumCulled=true;});
    if(parsedModel.stats.missingTextureRefs.length)console.warn(`[GrimStudio assets] ${entry.name}: missing optional diffuse textures`,parsedModel.stats.missingTextureRefs);
    console.info(`[GrimStudio assets] ${entry.name} validated`,parsedModel.stats);
    normalizeModel(candidateRoot);candidateRoot.visible=false;orbit.add(candidateRoot);orbit.updateMatrixWorld(true);const candidateMeshes=[];
    candidateRoot.traverse(object=>{if(object.isMesh)candidateMeshes.push(object);});
    if(!candidateMeshes.length)throw new Error('No mesh objects found in OBJ model');
    const candidateIndexes=[];for(let i=0;i<candidateMeshes.length;i++){setLoadingState(t('surfaceIndex'),`${i+1}/${candidateMeshes.length}`);candidateIndexes.push(await buildSpatialIndex(candidateMeshes[i]));}
    // Transactional swap: the old model stays intact until the new model and its paint indices are ready.
    if(modelRoot){orbit.remove(modelRoot);disposeModelRoot(modelRoot);}
    modelRoot=candidateRoot;stagedRoot=null;modelRoot.visible=true;paintMeshes=candidateMeshes;spatialIndexes=candidateIndexes;
    modelReady=true;invalidateSceneMatrices();applySkinTone();layers.forEach(layer=>attachLayer(layer));$('#loading').classList.add('hide');
    const elapsed=((performance.now()-start)/1000).toFixed(2);const vertices=paintMeshes.reduce((n,m)=>n+m.geometry.attributes.position.count,0);setLoadingState(`${t('loaded')} · ${entry.name} · ${elapsed}s`,`${vertices.toLocaleString()} vertices · surface decal index ready`);$('#status').textContent=`${t('ready')} · ${elapsed}s`;$('#headModelSelect').value=entry.id;requestRender();return true;
  }catch(error){if(stagedRoot&&stagedRoot!==modelRoot){orbit.remove(stagedRoot);disposeModelRoot(stagedRoot);}console.error('Model initialization failed:',error);modelReady=Boolean(modelRoot);modelPromise=null;setLoadingState(t('modelError'),error.message||'Unknown error');$('#loadingText').textContent=t('modelError');$('#loadingSubtext').textContent=error.message||t('retryText');$('#loading').classList.remove('hide');$('#loading').classList.add('error');$('#retryModel').hidden=false;return false;}})();return modelPromise;
}
// In-memory sessions keep plain references: strokes and history snapshots are
// never mutated in place (undo/erase replace arrays/objects), so cloning every
// dab here was pure allocation churn on each model switch and autosave.
function captureModelSession(){return {layers:layers.map(layer=>({name:layer.name,visible:layer.visible,opacity:layer.opacity,locked:layer.locked,strokes:layer.strokes.slice(),legacyPaint:layer.legacyPaint,history:layer.history.map(snapshot=>snapshot.slice()),historyIndex:layer.historyIndex})),activeLayer};}
function clearVisibleModelSession(){for(const layer of layers){orbit.remove(layer.group);disposeGroup(layer.group);layer.legacyTexture?.dispose();}layers=[];activeLayer=0;}
let modelSwitchBusy=false;
function restoreVisibleSession(session){clearVisibleModelSession();if(session){for(const entry of session.layers){const layer=createLayer(entry.name,entry.legacyPaint);layer.visible=entry.visible;layer.opacity=entry.opacity;layer.locked=entry.locked;layer.strokes=entry.strokes.map(cloneStrokeData);if(Array.isArray(entry.history)){layer.history=entry.history.map(snapshot=>snapshot.map(cloneStrokeData));layer.historyIndex=Number.isInteger(entry.historyIndex)?entry.historyIndex:layer.history.length-1;}else{layer.history=[];layer.historyIndex=-1;storeSnapshot(layer);}layers.push(layer);}activeLayer=clamp(session.activeLayer||0,0,Math.max(0,layers.length-1));}else{layers.push(createLayer(t('baseLayer')));}syncLayers();}
async function switchHeadModel(id){if(modelSwitchBusy||!HEAD_MODEL_REGISTRY.some(entry=>entry.id===id)||id===currentHeadModelId)return;modelSwitchBusy=true;const selector=$('#headModelSelect');selector.disabled=true;const previous=currentHeadModelId;const previousSession=modelReady?captureModelSession():modelSessions.get(previous);if(previousSession)modelSessions.set(previous,previousSession);if(activeInteraction!=='idle')cancelActiveInteraction();currentHeadModelId=id;modelReady=false;modelPromise=null;restoreVisibleSession(modelSessions.get(id));selector.value=id;try{const success=await loadModel(true);if(!success){currentHeadModelId=previous;modelPromise=null;restoreVisibleSession(modelSessions.get(previous));selector.value=previous;modelReady=Boolean(modelRoot);if(modelRoot){modelRoot.visible=true;layers.forEach(layer=>attachLayer(layer));$('#loading').classList.add('hide');$('#retryModel').hidden=true;toast(language==='ru'?'Не удалось загрузить выбранную модель. Предыдущая модель сохранена.':'Could not load selected model. Previous model remains active.');requestRender();}return;}queueAutosave();requestRender();}finally{selector.disabled=false;modelSwitchBusy=false;}}



const reusableNdc=new THREE.Vector2();
const reusableInverseOrbit=new THREE.Matrix4();
const reusableLocalOrigin=new THREE.Vector3();
const reusableLocalDirection=new THREE.Vector3();
let meshIndexByObject=new WeakMap();
let lastViewportRect=null,lastViewportRectAt=0;
// Orbit/camera world matrices are refreshed only after a transform actually
// changes. Rebuilding them on every pointer ray sample used to traverse the
// whole scene (model plus every paint mesh) dozens of times per stroke.
let sceneMatrixDirty=true;
function invalidateSceneMatrices(){sceneMatrixDirty=true;}
function getHitAt(clientX,clientY){
  if(!modelReady||!paintMeshes.length)return null;
  const started=performance.now();
  const now=started;
  if(!lastViewportRect||now-lastViewportRectAt>250){lastViewportRect=canvas.getBoundingClientRect();lastViewportRectAt=now;}
  const rect=lastViewportRect;if(!rect.width||!rect.height)return null;
  reusableNdc.set(((clientX-rect.left)/rect.width)*2-1,-((clientY-rect.top)/rect.height)*2+1);
  if(sceneMatrixDirty){orbit.updateMatrixWorld(true);camera.updateMatrixWorld(true);reusableInverseOrbit.copy(orbit.matrixWorld).invert();sceneMatrixDirty=false;}
  raycaster.setFromCamera(reusableNdc,camera);
  reusableLocalOrigin.copy(raycaster.ray.origin).applyMatrix4(reusableInverseOrbit);
  reusableLocalDirection.copy(raycaster.ray.direction).transformDirection(reusableInverseOrbit);
  let nearest=null,nearestMesh=-1;
  for(let i=0;i<spatialIndexes.length;i++){
    const hit=raycastGrid(spatialIndexes[i],reusableLocalOrigin,reusableLocalDirection,nearest?.distance??Infinity);
    if(hit&&(!nearest||hit.distance<nearest.distance)){nearest=hit;nearestMesh=i;}
  }
  perfStats.raycastMs+=performance.now()-started;perfStats.raycasts++;
  if(!nearest)return null;
  const spatial=spatialIndexes[nearestMesh],no=nearest.faceIndex*3;
  const normal=[spatial.faceNormals[no],spatial.faceNormals[no+1],spatial.faceNormals[no+2]];
  return {point:[nearest.x,nearest.y,nearest.z],normal,meshIndex:nearestMesh,faceIndex:nearest.faceIndex,distance:nearest.distance};
}
function getHit(event){return getHitAt(event.clientX,event.clientY);}
function getCell(x,y,z,spatial){const gx=clamp(Math.floor((x-spatial.gridMin[0])/spatial.cellSize),0,spatial.nx-1),gy=clamp(Math.floor((y-spatial.gridMin[1])/spatial.cellSize),0,spatial.ny-1),gz=clamp(Math.floor((z-spatial.gridMin[2])/spatial.cellSize),0,spatial.nz-1);return gx+spatial.nx*(gy+spatial.ny*gz);}
function queryCandidateFaces(spatial,center,extent){
  spatial.mark=(spatial.mark+1)>>>0;if(spatial.mark===0){spatial.faceMarks.fill(0);spatial.mark=1;}const mark=spatial.mark;
  const minX=clamp(Math.floor((center[0]-extent-spatial.gridMin[0])/spatial.cellSize),0,spatial.nx-1),maxX=clamp(Math.floor((center[0]+extent-spatial.gridMin[0])/spatial.cellSize),0,spatial.nx-1);
  const minY=clamp(Math.floor((center[1]-extent-spatial.gridMin[1])/spatial.cellSize),0,spatial.ny-1),maxY=clamp(Math.floor((center[1]+extent-spatial.gridMin[1])/spatial.cellSize),0,spatial.ny-1);
  const minZ=clamp(Math.floor((center[2]-extent-spatial.gridMin[2])/spatial.cellSize),0,spatial.nz-1),maxZ=clamp(Math.floor((center[2]+extent-spatial.gridMin[2])/spatial.cellSize),0,spatial.nz-1);const result=spatial.candidateFaces;result.length=0;
  for(let z=minZ;z<=maxZ;z++)for(let y=minY;y<=maxY;y++)for(let x=minX;x<=maxX;x++){const cell=x+spatial.nx*(y+spatial.ny*z);for(let i=spatial.offsets[cell];i<spatial.offsets[cell+1];i++){const face=spatial.faceIds[i];if(spatial.faceMarks[face]!==mark){spatial.faceMarks[face]=mark;result.push(face);}}}
  return result;
}
function clipPolygonNumeric(source,count,target,axis,bound,keepGreater){
  if(!count)return 0;
  let out=0,previous=(count-1)*3,previousValue=source[previous+axis]-bound;
  let previousInside=keepGreater?previousValue>=0:previousValue<=0;
  for(let i=0;i<count;i++){
    const current=i*3,currentValue=source[current+axis]-bound;
    const currentInside=keepGreater?currentValue>=0:currentValue<=0;
    if(currentInside!==previousInside){
      const denominator=source[current+axis]-source[previous+axis];
      const amount=Math.abs(denominator)<1e-12?0:(bound-source[previous+axis])/denominator;
      target[out++]=source[previous]+(source[current]-source[previous])*amount;
      target[out++]=source[previous+1]+(source[current+1]-source[previous+1])*amount;
      target[out++]=source[previous+2]+(source[current+2]-source[previous+2])*amount;
    }
    if(currentInside){target[out++]=source[current];target[out++]=source[current+1];target[out++]=source[current+2];}
    previous=current;previousInside=currentInside;
  }
  return out/3;
}
function makeDecalGeometry(spatial,dab){
  const started=performance.now();
  const centerX=dab.p[0],centerY=dab.p[1],centerZ=dab.p[2];
  decalNormalScratch.set(dab.n[0],dab.n[1],dab.n[2]).normalize();
  decalQuaternionScratch.setFromUnitVectors(vZ,decalNormalScratch);
  if(dab.angle){decalAxisQuaternionScratch.setFromAxisAngle(vZ,dab.angle);decalQuaternionScratch.multiply(decalAxisQuaternionScratch);}
  decalRotationMatrixScratch.makeRotationFromQuaternion(decalQuaternionScratch);
  decalInverseMatrixScratch.copy(decalRotationMatrixScratch).invert();
  decalForwardScratch.setFromMatrix4(decalRotationMatrixScratch);
  decalInverseScratch.setFromMatrix4(decalInverseMatrixScratch);
  const f=decalForwardScratch.elements,iv=decalInverseScratch.elements;
  const width=dab.r*2*dab.aspect,height=dab.r*2,depth=Math.max(dab.r*.9,.006),hx=width/2,hy=height/2,hz=depth/2;
  const faces=queryCandidateFaces(spatial,dab.p,Math.max(width,height)*.8+depth);
  const positions=[],normals=[],uvs=[],colors=[],points=spatial.points,triangles=spatial.triangles,faceNormals=spatial.faceNormals;
  const vertexNormals=spatial.vertexNormals,dabColor=dab.c||[1,1,1];
  const source=clipBufferA,target=clipBufferB;
  const normalX=decalNormalScratch.x,normalY=decalNormalScratch.y,normalZ=decalNormalScratch.z;
  for(let index=0;index<faces.length;index++){
    const face=faces[index],no=face*3,fnx=faceNormals[no],fny=faceNormals[no+1],fnz=faceNormals[no+2];
    if(fnx*normalX+fny*normalY+fnz*normalZ<.10)continue;
    const ia=triangles[no]*3,ib=triangles[no+1]*3,ic=triangles[no+2]*3;
    // Transform triangle vertices into decal-local coordinates without allocating vectors.
    for(let vertex=0;vertex<3;vertex++){
      const offset=vertex===0?ia:vertex===1?ib:ic,dx=points[offset]-centerX,dy=points[offset+1]-centerY,dz=points[offset+2]-centerZ,base=vertex*3;
      source[base]=iv[0]*dx+iv[3]*dy+iv[6]*dz;
      source[base+1]=iv[1]*dx+iv[4]*dy+iv[7]*dz;
      source[base+2]=iv[2]*dx+iv[5]*dy+iv[8]*dz;
    }
    let count=3,from=source,to=target,next;
    count=clipPolygonNumeric(from,count,to,0,-hx,true);next=from;from=to;to=next;if(count<3)continue;
    count=clipPolygonNumeric(from,count,to,0,hx,false);next=from;from=to;to=next;if(count<3)continue;
    count=clipPolygonNumeric(from,count,to,1,-hy,true);next=from;from=to;to=next;if(count<3)continue;
    count=clipPolygonNumeric(from,count,to,1,hy,false);next=from;from=to;to=next;if(count<3)continue;
    count=clipPolygonNumeric(from,count,to,2,-hz,true);next=from;from=to;to=next;if(count<3)continue;
    count=clipPolygonNumeric(from,count,to,2,hz,false);next=from;from=to;to=next;if(count<3)continue;
    // Fan-triangulate the clipped convex polygon.
    for(let tri=1;tri<count-1;tri++){
      for(let k=0;k<3;k++){
        const vertexIndex=k===0?0:k===1?tri:tri+1,base=vertexIndex*3,x=from[base],y=from[base+1],z=from[base+2];
        const wx=f[0]*x+f[3]*y+f[6]*z+centerX,wy=f[1]*x+f[4]*y+f[7]*z+centerY,wz=f[2]*x+f[5]*y+f[8]*z+centerZ;
        positions.push(wx,wy,wz);
        // Interpolate the smooth vertex normal of the underlying triangle so
        // decals shade exactly like the skin beneath them.
        const ia3=ia*3,ib3=ib*3,ic3=ic*3;
        const e1x=points[ib3]-points[ia3],e1y=points[ib3+1]-points[ia3+1],e1z=points[ib3+2]-points[ia3+2];
        const e2x=points[ic3]-points[ia3],e2y=points[ic3+1]-points[ia3+1],e2z=points[ic3+2]-points[ia3+2];
        const p2x=wx-points[ia3],p2y=wy-points[ia3+1],p2z=wz-points[ia3+2];
        const d00=e1x*e1x+e1y*e1y+e1z*e1z,d01=e1x*e2x+e1y*e2y+e1z*e2z,d11=e2x*e2x+e2y*e2y+e2z*e2z;
        const d20=p2x*e1x+p2y*e1y+p2z*e1z,d21=p2x*e2x+p2y*e2y+p2z*e2z;
        const denom=d00*d11-d01*d01;
        let snx=fnx,sny=fny,snz=fnz;
        if(Math.abs(denom)>1e-14){
          const w1=(d11*d20-d01*d21)/denom,w2=(d00*d21-d01*d20)/denom,w0=1-w1-w2;
          snx=vertexNormals[ia3]*w0+vertexNormals[ib3]*w1+vertexNormals[ic3]*w2;
          sny=vertexNormals[ia3+1]*w0+vertexNormals[ib3+1]*w1+vertexNormals[ic3+1]*w2;
          snz=vertexNormals[ia3+2]*w0+vertexNormals[ib3+2]*w1+vertexNormals[ic3+2]*w2;
          const snLength=Math.hypot(snx,sny,snz)||1;snx/=snLength;sny/=snLength;snz/=snLength;
          if(snx*fnx+sny*fny+snz*fnz<0){snx=-snx;sny=-sny;snz=-snz;}
        }
        normals.push(snx,sny,snz);
        uvs.push(clamp(x/width+.5,0,1),clamp(y/height+.5,0,1));
        colors.push(dabColor[0],dabColor[1],dabColor[2]);
      }
    }
  }
  perfStats.decalMs+=performance.now()-started;perfStats.decals++;
  if(!positions.length)return null;
  const geometry=new THREE.BufferGeometry();
  geometry.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));
  geometry.setAttribute('normal',new THREE.Float32BufferAttribute(normals,3));
  geometry.setAttribute('uv',new THREE.Float32BufferAttribute(uvs,2));
  geometry.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));
  geometry.computeBoundingSphere();
  return geometry;
}
function makeStampTexture(toolKey,softnessValue){
  const shape=activeBrushShape(),cacheKey=`${toolKey}:${shape?.key||'tool'}:${Math.round(softnessValue*100)}`;if(stampTextures.has(cacheKey))return stampTextures.get(cacheKey);
  const size=128,stamp=document.createElement('canvas');stamp.width=stamp.height=size;const ctx=stamp.getContext('2d',{alpha:true});
  const tool=TOOLS.find(item=>item.key===toolKey)||TOOLS[0],mask=shape?.mask||tool.mask;ctx.clearRect(0,0,size,size);
  // Edge softness now drives the falloff of every radial mask, not just a few.
  const edge=Math.max(.02,1-softnessValue);
  const radial=(inner,outer=62,ellipse=[1,1],center=[64,64])=>{
    ctx.save();ctx.translate(center[0],center[1]);ctx.scale(ellipse[0],ellipse[1]);
    const g=ctx.createRadialGradient(0,0,Math.max(0,inner*outer),0,0,outer);g.addColorStop(0,'rgba(255,255,255,1)');g.addColorStop(Math.min(.995,inner),'rgba(255,255,255,1)');g.addColorStop(1,'rgba(255,255,255,0)');ctx.fillStyle=g;ctx.fillRect(-outer,-outer,outer*2,outer*2);ctx.restore();
  };
  if(mask==='star'){
    ctx.fillStyle='white';ctx.beginPath();for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,r=i%2?size*.22:size*.47,x=size/2+Math.cos(a)*r,y=size/2+Math.sin(a)*r;if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);}ctx.closePath();ctx.fill();
  }else if(mask==='rosette'){
    ctx.fillStyle='white';for(let i=0;i<10;i++){const a=i*Math.PI/5;ctx.beginPath();ctx.arc(size/2+Math.cos(a)*size*.28,size/2+Math.sin(a)*size*.28,size*.105,0,Math.PI*2);ctx.fill();}ctx.beginPath();ctx.arc(size/2,size/2,size*.14,0,Math.PI*2);ctx.fill();
  }else if(mask==='hair'){
    // A faint cohesive base keeps hair-like stamps from tearing into ragged strips.
    radial(Math.max(.06,edge*.12),62,[1,.92]);
    ctx.globalAlpha=.55;
    ctx.lineCap='round';for(let i=0;i<13;i++){const x=18+i*7.7;ctx.strokeStyle=`rgba(255,255,255,${.30+(i%4)*.16})`;ctx.lineWidth=.9+(i%3)*.45;ctx.beginPath();ctx.moveTo(x,99);ctx.bezierCurveTo(x-8,72,x+9,43,x+((i%2)?7:-5),18);ctx.stroke();}
    ctx.globalAlpha=1;
  }else if(mask==='sponge'||mask==='powder'){
    radial(mask==='sponge'?Math.max(.08,edge*.12):Math.max(.02,edge*.04),62,[1,1]);
    let seed=mask==='sponge'?12345:54321;const random=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};
    for(let i=0;i<(mask==='sponge'?125:210);i++){const x=9+random()*110,y=9+random()*110,d=Math.hypot(x-64,y-64);if(d>61)continue;const alpha=mask==='sponge'?.09:.055;ctx.fillStyle=`rgba(0,0,0,${alpha})`;ctx.beginPath();ctx.arc(x,y,random()*(mask==='sponge'?2.1:1.15)+.25,0,Math.PI*2);ctx.fill();}
  }else if(mask==='foundation'){
    radial(Math.max(.3,edge*.42),62,[1,1]);
    let seed=78231;for(let i=0;i<160;i++){seed=(seed*1664525+1013904223)>>>0;const x=12+(seed/4294967296)*104;seed=(seed*1664525+1013904223)>>>0;const y=12+(seed/4294967296)*104;if(Math.hypot(x-64,y-64)>58)continue;ctx.fillStyle='rgba(0,0,0,.018)';ctx.fillRect(x,y,.7,.7);}
  }else if(mask==='concealer'){
    radial(Math.max(.5,edge*.62),62,[1,1]);
  }else if(mask==='blush'){
    radial(Math.max(.02,edge*.07),62,[1,1],[64,64]);
  }else if(mask==='contour'){
    radial(Math.max(.02,edge*.07),62,[1.08,.86],[64,64]);
  }else if(mask==='highlight'){
    radial(Math.max(0,edge*.02),62,[1,1]);
  }else if(mask==='shadow'){
    radial(Math.max(.12,edge*.22),62,[1,1]);
  }else if(mask==='liner'){
    radial(Math.max(.55,edge*.65),62,[1.08,.55]);
  }else if(mask==='lipstick'){
    radial(Math.max(.45,edge*.55),62,[1,1]);
  }else if(mask==='gloss'){
    radial(Math.max(.1,edge*.16),62,[1.05,.75]);
    ctx.globalCompositeOperation='destination-in';ctx.fillStyle='rgba(255,255,255,.88)';ctx.fillRect(0,0,size,size);ctx.globalCompositeOperation='source-over';
  }else if(mask==='blur'||mask==='blend'){
    radial(Math.max(0,edge*.02),62,[1,1]);
  }else{
    const inner=mask==='hard'?Math.max(.88,1-softnessValue):mask==='air'?.02:Math.max(.08,edge);radial(inner,62);
  }
  const texture=new THREE.CanvasTexture(stamp);texture.colorSpace=THREE.SRGBColorSpace;texture.generateMipmaps=false;texture.minFilter=THREE.LinearFilter;texture.magFilter=THREE.LinearFilter;texture.needsUpdate=true;stampTextures.set(cacheKey,texture);return texture;
}
function createStrokeMaterial(stroke,layer){
  // Lit Phong shading with per-dab vertex colors: strokes inherit the same
  // lighting as the skin beneath, so large paint areas can no longer flatten
  // facial shadows. The pigment itself lives in the dab color attribute; the
  // material color stays white. Opacity alone defines final visibility; flow
  // controls dab density in processStrokeHit.
  const tool=TOOLS.find((item)=>item.key===stroke.tool)||TOOLS[0],map=makeStampTexture(tool.key,stroke.softness??softness);
  const baseOpacity=clamp((stroke.opacity??opacity)*(tool.alpha??1),0,1);
  const common={map,color:0xffffff,vertexColors:true,transparent:true,opacity:baseOpacity*layer.opacity,depthWrite:false,depthTest:true,polygonOffset:true,polygonOffsetFactor:-1.5,side:THREE.DoubleSide,toneMapped:false};
  let material;
  if(tool.finish==='gloss')material=new THREE.MeshPhysicalMaterial({...common,roughness:.13,metalness:0,clearcoat:.85,clearcoatRoughness:.12});
  else if(tool.finish==='glow')material=new THREE.MeshPhysicalMaterial({...common,roughness:.24,metalness:0,clearcoat:.5,clearcoatRoughness:.25,emissive:stroke.color,emissiveIntensity:.18});
  else material=new THREE.MeshPhongMaterial({...common,shininess:6,specular:new THREE.Color(.05,.05,.05)});
  material.userData.baseOpacity=baseOpacity;return material;
}
function mergeGeometries(geometries){const keys=['position','normal','uv','color'];const totals={position:0,normal:0,uv:0,color:0};for(const geometry of geometries){for(const key of keys)totals[key]+=geometry.getAttribute(key)?.array.length||0;}if(!totals.position)return null;const arrays={position:new Float32Array(totals.position),normal:new Float32Array(totals.normal),uv:new Float32Array(totals.uv),color:new Float32Array(totals.color)};const offsets={position:0,normal:0,uv:0,color:0};for(const geometry of geometries){for(const key of keys){const attribute=geometry.getAttribute(key);if(!attribute)continue;arrays[key].set(attribute.array,offsets[key]);offsets[key]+=attribute.array.length;}}const merged=new THREE.BufferGeometry();merged.setAttribute('position',new THREE.BufferAttribute(arrays.position,3));merged.setAttribute('normal',new THREE.BufferAttribute(arrays.normal,3));merged.setAttribute('uv',new THREE.BufferAttribute(arrays.uv,2));merged.setAttribute('color',new THREE.BufferAttribute(arrays.color,3));merged.computeBoundingSphere();return merged;}
function buildStrokeMesh(layer,stroke){
  if(!modelReady||!layer.group||!stroke.dabs?.length)return;
  const material=createStrokeMaterial(stroke,layer),meshes=[];
  const batchSize=96;
  for(let start=0;start<stroke.dabs.length;start+=batchSize){
    const geometries=[];
    for(let i=start;i<Math.min(start+batchSize,stroke.dabs.length);i++){
      const dab=stroke.dabs[i],spatial=spatialIndexes[dab.meshIndex??0];if(!spatial)continue;
      if(!dab.c)dab.c=hexToLinearRgb(stroke.color);
      const geometry=makeDecalGeometry(spatial,dab);if(geometry)geometries.push(geometry);
    }
    if(!geometries.length)continue;
    const merged=mergeGeometries(geometries);for(const geometry of geometries)geometry.dispose();
    if(!merged)continue;
    const mesh=new THREE.Mesh(merged,material);mesh.frustumCulled=false;
    mesh.renderOrder=20+layers.indexOf(layer)*10000+layer.group.children.length;
    mesh.userData.baseOpacity=material.userData.baseOpacity;
    mesh.name=`makeup-stroke-${stroke.id||strokeSequence++}-${meshes.length}`;
    layer.group.add(mesh);meshes.push(mesh);
  }
  if(!meshes.length){material.dispose();return;}
  stroke.meshes=meshes;stroke.mesh=meshes[0];
}
async function rebuildLayer(layer){disposeGroup(layer.group);layer.legacyTexture?.dispose();layer.legacyTexture=null;const buildToken=++layer.geometryBuildToken;for(const stroke of layer.strokes){if(layer.geometryBuildToken!==buildToken||!layers.includes(layer))break;buildStrokeMesh(layer,stroke);await yieldUI();}layer.group.visible=layer.visible;attachLegacyLayer(layer);syncLayers();requestRender();}
function storeCurrentLayerSnapshot(){const layer=layers[activeLayer];if(!layer)return;storeSnapshot(layer);refreshHistoryButtons();queueAutosave();}
// Brush radius is defined in model space instead of screen space: the head is
// normalized to a 2.35-unit bounding extent, so a given slider value always
// covers the same physical patch of skin no matter how far the camera is
// zoomed in or out.
const BRUSH_MAX_WORLD_RADIUS=.2;
function radiusForHit(hit,tool){return Math.max(.004,BRUSH_MAX_WORLD_RADIUS*(brushSize/140)*(tool.radius||1));}
// Erased strokes keep their old meshes attached until the rebuild pass, so a
// frame never renders a "stroke missing" state (that caused flicker). The
// rebuild disposes the stale meshes and creates fresh geometry in one task.
let strokeRebuildQueued=false;
function scheduleStrokeRebuild(){
  if(strokeRebuildQueued)return;
  strokeRebuildQueued=true;
  requestAnimationFrame(()=>{
    strokeRebuildQueued=false;
    if(!activeStroke)return;
    rebuildTouchedStrokes();
  });
}
function rebuildTouchedStrokes(){
  if(!activeStroke?.touched?.size)return;
  const layer=layers[activeLayer];
  for(const stroke of activeStroke.touched.values()){disposeStrokeMeshes(layer,stroke);buildStrokeMesh(layer,stroke);}
  activeStroke.touched.clear();
  requestRender();
}
// Per-dab colors for the blur/blender strokes: each dab carries the locally
// sampled (or mixed) pigment so one stroke can blend many tones.
function updateBlendColor(hit){
  const tool=TOOLS[selectedTool],radius=radiusForHit(hit,tool);
  if(tool.key==='blur'){
    const sampled=samplePigment(hit.point,radius*1.5);
    activeStroke.dabColor=sampled?[...sampled]:null;
    activeStroke.skipDab=!sampled;
  }else{
    const sampled=samplePigment(hit.point,radius*1.35);
    const current=hexToLinearRgb(color);
    activeStroke.dabColor=sampled?mixLinear([...sampled],current,.4):current;
    activeStroke.skipDab=false;
  }
}
function hexToLinearRgb(hex){const c=new THREE.Color(hex);return [c.r,c.g,c.b];}
function linearToHex(rgb){const c=new THREE.Color();c.setRGB(clamp(rgb[0],0,1),clamp(rgb[1],0,1),clamp(rgb[2],0,1));return `#${c.getHexString(THREE.SRGBColorSpace)}`;}
function mixLinear(a,b,t){return [a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t,a[2]+(b[2]-a[2])*t];}
// Composites the visually blended pigment color around a point: overlapping
// dabs are weighted by proximity, stroke alpha and layer opacity, so colors
// that already mixed on the surface can be sampled as their perceived blend.
function samplePigment(point,radius){
  let weightSum=0,rSum=0,gSum=0,bSum=0;
  const reach=Math.max(radius,.01);
  for(const layer of layers){
    if(!layer.visible||layer.opacity<=0)continue;
    for(const stroke of layer.strokes){
      if(!stroke.dabs?.length)continue;
      const alphaBase=clamp((stroke.opacity??1)*((TOOLS.find(item=>item.key===stroke.tool)?.alpha)??1),0,1)*layer.opacity;
      if(alphaBase<=0)continue;
      for(const dab of stroke.dabs){
        const dx=dab.p[0]-point[0],dy=dab.p[1]-point[1],dz=dab.p[2]-point[2];
        const dist=Math.hypot(dx,dy,dz);
        if(dist>reach+dab.r)continue;
        const falloff=1-clamp((dist-dab.r*.35)/reach,0,1);
        const weight=falloff*falloff*alphaBase;
        if(weight<=0)continue;
        const c=dab.c||hexToLinearRgb(stroke.color);
        rSum+=c[0]*weight;gSum+=c[1]*weight;bSum+=c[2]*weight;weightSum+=weight;
      }
    }
  }
  return weightSum>0?[rSum/weightSum,gSum/weightSum,bSum/weightSum]:null;
}
function makeDab(hit,stroke,angle=0){
  const tool=TOOLS.find((item)=>item.key===stroke.tool)||TOOLS[0];
  const radius=radiusForHit(hit,tool);
  const rgb=stroke.dabColor||hexToLinearRgb(stroke.color);
  return {meshIndex:hit.meshIndex,p:[...hit.point],n:[...hit.normal],r:radius,aspect:effectiveAspect(tool),angle,c:rgb,css:linearToHex(rgb)};
}
const PERFORMANCE_PROFILES={performance:{step:.98,maxInterpolatedHits:1,maxPointerSamples:10,previewBatchSize:24},balanced:{step:.78,maxInterpolatedHits:2,maxPointerSamples:12,previewBatchSize:32},quality:{step:.58,maxInterpolatedHits:3,maxPointerSamples:16,previewBatchSize:40}};
function currentPerformanceProfile(){return PERFORMANCE_PROFILES[performanceMode]||PERFORMANCE_PROFILES.balanced;}
// Preview strokes live in a single pre-allocated dynamic mesh per stroke: new
// dabs are appended into its vertex buffers and drawn via drawRange. The brush
// feedback becomes frame-accurate (one cheap attribute upload per frame) and a
// stroke costs exactly one draw call instead of one merged mesh per batch.
function appendPreviewGeometry(stroke,layer,geometry){
  const vertexCount=geometry.getAttribute('position')?.count||0;
  if(!vertexCount)return;
  if(!stroke.previewMesh){
    stroke.vertexCapacity=Math.max(currentPerformanceProfile().previewBatchSize*24,vertexCount*2);
    const strokeGeometry=new THREE.BufferGeometry();
    for(const [key,itemSize] of [['position',3],['normal',3],['uv',2],['color',3]]){
      const attribute=new THREE.BufferAttribute(new Float32Array(stroke.vertexCapacity*itemSize),itemSize);
      attribute.setUsage(THREE.DynamicDrawUsage);strokeGeometry.setAttribute(key,attribute);
    }
    strokeGeometry.setDrawRange(0,0);
    const mesh=new THREE.Mesh(strokeGeometry,stroke.material);
    mesh.frustumCulled=false;
    mesh.renderOrder=30+layers.indexOf(layer)*10000+layer.group.children.length;
    mesh.userData.baseOpacity=stroke.material.userData.baseOpacity;
    mesh.name=`makeup-preview-${stroke.id}`;
    layer.group.add(mesh);stroke.previewMesh=mesh;stroke.previewMeshes.push(mesh);
  }else if(stroke.vertexCount+vertexCount>stroke.vertexCapacity){
    stroke.vertexCapacity=Math.max(stroke.vertexCapacity*2,(stroke.vertexCount+vertexCount)*2);
    for(const [key,itemSize] of [['position',3],['normal',3],['uv',2],['color',3]]){
      const replacement=new THREE.BufferAttribute(new Float32Array(stroke.vertexCapacity*itemSize),itemSize);
      replacement.setUsage(THREE.DynamicDrawUsage);
      replacement.array.set(stroke.previewMesh.geometry.getAttribute(key).array);
      stroke.previewMesh.geometry.setAttribute(key,replacement);
    }
  }
  const target=stroke.previewMesh.geometry.attributes;
  target.position.array.set(geometry.getAttribute('position').array,stroke.vertexCount*3);
  target.normal.array.set(geometry.getAttribute('normal').array,stroke.vertexCount*3);
  target.uv.array.set(geometry.getAttribute('uv').array,stroke.vertexCount*2);
  target.color.array.set(geometry.getAttribute('color').array,stroke.vertexCount*3);
  stroke.vertexCount+=vertexCount;stroke.dirty=true;
}
function flushStrokePreviewBatch(){
  if(!activeStroke||activeStroke.mode!=='paint'||!activeStroke.previewMesh||!activeStroke.dirty)return;
  const geometry=activeStroke.previewMesh.geometry;
  geometry.setDrawRange(0,activeStroke.vertexCount);
  geometry.attributes.position.needsUpdate=true;
  geometry.attributes.normal.needsUpdate=true;
  geometry.attributes.uv.needsUpdate=true;
  geometry.attributes.color.needsUpdate=true;
  activeStroke.dirty=false;
  requestRender();
}
function addDab(hit,angle=0){
  const layer=layers[activeLayer];if(!layer||layer.locked||!activeStroke)return false;
  if(activeStroke.skipDab)return false;
  const spatial=spatialIndexes[hit.meshIndex];if(!spatial)return false;
  const dab=makeDab(hit,activeStroke,angle);const geometry=makeDecalGeometry(spatial,dab);
  if(!geometry)return false;
  activeStroke.dabs.push(dab);
  appendPreviewGeometry(activeStroke,layer,geometry);geometry.dispose();
  if(symmetryEnabled){
    const mirror={...dab,p:[2*spatial.bounds.center[0]-dab.p[0],dab.p[1],dab.p[2]],n:[-dab.n[0],dab.n[1],dab.n[2]]};
    const mirrorGeometry=makeDecalGeometry(spatial,mirror);
    if(mirrorGeometry){activeStroke.dabs.push(mirror);appendPreviewGeometry(activeStroke,layer,mirrorGeometry);mirrorGeometry.dispose();}
  }
  return true;
}
function disposeStrokeMeshes(layer,stroke){
  const meshes=stroke.meshes||(stroke.mesh?[stroke.mesh]:[]),geometries=new Set(),materials=new Set();
  for(const mesh of meshes){layer.group.remove(mesh);if(mesh.geometry)geometries.add(mesh.geometry);if(Array.isArray(mesh.material))mesh.material.forEach(m=>materials.add(m));else if(mesh.material)materials.add(mesh.material);}
  geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());stroke.meshes=[];stroke.mesh=null;
}
// Erases every dab whose painted footprint intersects the brush path,
// measured as direct point-to-segment distance (per erase sample the path is
// only one or two segments, so spatial bucketing is unnecessary — bucket
// granularity could previously miss dabs with large radii), with an optional
// mirrored pass while symmetry is enabled.
//
// This is a pure data pass: it never removes meshes, so no frame can render a
// "stroke missing" state (the source of the old flicker). Instead, updated
// stroke objects INHERIT the old meshes; the scheduled rebuild pass disposes
// the stale meshes and builds fresh geometry in one synchronous task before
// the next render.
function eraseAlongPath(layer,path,touched){
  if(!layer||layer.locked||!path.length)return false;
  const segments=[];
  for(let i=1;i<path.length;i++)segments.push([path[i-1],path[i]]);
  if(!segments.length)segments.push([path[0],path[0]]);
  if(symmetryEnabled&&spatialIndexes[0]){
    const centerX=spatialIndexes[0].bounds.center[0];
    for(const [a,b] of segments.slice())segments.push([{p:[2*centerX-a.p[0],a.p[1],a.p[2]],n:a.n,r:a.r},{p:[2*centerX-b.p[0],b.p[1],b.p[2]],n:b.n,r:b.r}]);
  }
  const segmentDistance=(dab,segment)=>{
    const [a,b]=segment,ax=a.p[0],ay=a.p[1],az=a.p[2];
    const bx=b.p[0]-ax,by=b.p[1]-ay,bz=b.p[2]-az;
    const px=dab.p[0]-ax,py=dab.p[1]-ay,pz=dab.p[2]-az;
    const bb=bx*bx+by*by+bz*bz;
    let t=bb>1e-14?(px*bx+py*by+pz*bz)/bb:0;
    t=clamp(t,0,1);
    const cx=px-bx*t,cy=py-by*t,cz=pz-bz*t;
    return Math.sqrt(cx*cx+cy*cy+cz*cz);
  };
  let changed=false;const next=[];
  for(const stroke of layer.strokes){
    if(!stroke.dabs?.length){next.push(stroke);continue;}
    const reachBase=segments.reduce((m,s)=>Math.max(m,s[0].r,s[1].r),.002);
    // Early-out scan without allocating a filtered array for untouched strokes.
    let anyErased=false;
    for(const dab of stroke.dabs){
      for(const segment of segments){
        if(segmentDistance(dab,segment)<reachBase+dab.r*.75){anyErased=true;break;}
      }
      if(anyErased)break;
    }
    if(!anyErased){next.push(stroke);continue;}
    changed=true;
    const dabs=stroke.dabs.filter(dab=>{
      for(const segment of segments){
        if(segmentDistance(dab,segment)<reachBase+dab.r*.75)return false;
      }
      return true;
    });
    // Inherit the old meshes: they keep rendering (stale but harmless for one
    // frame) until the rebuild pass replaces them synchronously.
    const updated={...stroke,dabs,meshes:stroke.meshes||[],mesh:null};
    if(touched)touched.set(stroke.id??updated.id??next.length,updated);
    if(dabs.length)next.push(updated);
  }
  if(changed)layer.strokes=next;
  return changed;
}
function beginStroke(hit){
  const layer=layers[activeLayer];if(!layer||!modelReady)return false;
  if(layer.locked){toast(t('locked'));return false;}
  const tool=TOOLS[selectedTool];
  if(tool.key==='eyedropper'){
    const sampled=samplePigment(hit.point,Math.max(radiusForHit(hit,tool)*1.5,.035));
    if(sampled){setColor(linearToHex(sampled));toast(t('colorSampled'));}
    else toast(language==='ru'?'Здесь нет нанесённого пигмента':'No pigment sampled here');
    selectTool(lastPaintTool);return false;
  }
  if(tool.key==='eraser'){
    activeStroke={mode:'erase',touched:new Map(),erasedSomething:false,lastEraseHit:null};
    const radius=radiusForHit(hit,tool);
    // A single press erases immediately at the contact point.
    activeStroke.lastEraseHit={p:[...hit.point],n:[...hit.normal],r:radius};
    if(eraseAlongPath(layers[activeLayer],[activeStroke.lastEraseHit,activeStroke.lastEraseHit],activeStroke.touched))activeStroke.erasedSomething=true;
    if(activeStroke.touched.size)scheduleStrokeRebuild();
    isPainting=true;lastHit=hit;return true;
  }
  activeStroke={mode:'paint',id:strokeSequence++,tool:tool.key,color,opacity,softness,flow,dabs:[],previewMeshes:[],previewMesh:null,vertexCount:0,vertexCapacity:0,dirty:false,material:null,skipDab:false};
  if(tool.key==='blur'){
    activeStroke.softness=Math.max(softness,.88);
    updateBlendColor(hit);
  }else if(tool.key==='blender'){
    activeStroke.softness=Math.max(softness,.8);
    updateBlendColor(hit);
  }
  activeStroke.material=createStrokeMaterial(activeStroke,layer);isPainting=true;lastHit=hit;addDab(hit);scheduleStrokeFlush();return true;
}
function strokeAngle(fromHit,toHit){if(!fromHit)return 0;const tangent=strokeTangentScratch.set(toHit.point[0]-fromHit.point[0],toHit.point[1]-fromHit.point[1],toHit.point[2]-fromHit.point[2]);const normal=strokeNormalScratch.set(toHit.normal[0],toHit.normal[1],toHit.normal[2]);tangent.addScaledVector(normal,-tangent.dot(normal));if(tangent.lengthSq()<1e-8)return 0;tangent.normalize();strokeQuaternionScratch.setFromUnitVectors(vZ,normal);strokeInverseQuaternionScratch.copy(strokeQuaternionScratch).invert();tangent.applyQuaternion(strokeInverseQuaternionScratch);return Math.atan2(tangent.y,tangent.x);}
function processStrokeHit(hit){
  if(!isPainting||!activeStroke||!hit)return;
  const tool=TOOLS[selectedTool];
  if(activeStroke.mode==='erase'){
    // Continuous erase: every pointer sample erases along the segment between
    // the previous and current surface positions, so holding and dragging the
    // eraser works with no gating or per-click behavior.
    const radius=radiusForHit(hit,tool);
    const current={p:[...hit.point],n:[...hit.normal],r:radius};
    const previous=activeStroke.lastEraseHit;
    activeStroke.lastEraseHit=current;
    if(eraseAlongPath(layers[activeLayer],previous?[previous,current]:[current,current],activeStroke.touched))activeStroke.erasedSomething=true;
    if(activeStroke.touched.size)scheduleStrokeRebuild();
    lastHit=hit;return;
  }
  if(!lastHit){addDab(hit);lastHit=hit;return;}
  const dx=hit.point[0]-lastHit.point[0],dy=hit.point[1]-lastHit.point[1],dz=hit.point[2]-lastHit.point[2];
  const profile=currentPerformanceProfile(),distance=Math.hypot(dx,dy,dz),radius=radiusForHit(hit,tool),step=Math.max(.004,radius*profile.step*(1.35-(activeStroke.flow??flow)*.85));
  if(distance<step)return;
  const count=clamp(Math.ceil(distance/step),1,profile.maxInterpolatedHits);let previous=lastHit;
  for(let i=1;i<=count;i++){
    let sample=hit;
    if(i<count&&Number.isFinite(hit.clientX)&&Number.isFinite(lastHit.clientX)){
      const amount=i/count;
      sample=getHitAt(lastHit.clientX+(hit.clientX-lastHit.clientX)*amount,lastHit.clientY+(hit.clientY-lastHit.clientY)*amount);
      if(!sample)continue;
    }
    if(tool.key==='blur'||tool.key==='blender')updateBlendColor(sample);
    const angle=strokeAngle(previous,sample);addDab(sample,angle);previous=sample;
  }
  lastHit=hit;
}
function finishStroke(){
  if(!isPainting)return;
  const layer=layers[activeLayer];
  if(activeStroke?.mode==='paint'){
    flushStrokePreviewBatch();
    if(activeStroke.dabs.length){
      const stroke={id:activeStroke.id,tool:activeStroke.tool,color:activeStroke.color,opacity:activeStroke.opacity,softness:activeStroke.softness,flow:activeStroke.flow,dabs:activeStroke.dabs,meshes:activeStroke.previewMeshes};
      stroke.meshes.forEach((mesh,index)=>{mesh.name=`makeup-stroke-${stroke.id}-${index}`;mesh.renderOrder=20+layers.indexOf(layer)*10000+layer.group.children.indexOf(mesh);});
      layer.strokes.push(stroke);storeCurrentLayerSnapshot();$('#status').textContent=`${t('strokeSaved')} · ${toolName(selectedTool)}`;
    }else{
      for(const mesh of activeStroke.previewMeshes){layer.group.remove(mesh);mesh.geometry.dispose();}
      activeStroke.previewMeshes.length=0;activeStroke.material.dispose();
    }
  }else if(activeStroke?.mode==='erase'){
    // Rebuild anything still pending, then record one undo step and refresh
    // layer thumbnails once at the end of the drag.
    if(activeStroke.touched?.size)rebuildTouchedStrokes();
    if(activeStroke.erasedSomething){syncLayers();storeCurrentLayerSnapshot();}
  }
  activeStroke=null;isPainting=false;lastHit=null;requestRender();
}

canvas.addEventListener('contextmenu',(event)=>event.preventDefault());
function matchesRotateGesture(event){return cameraRotateButton==='right'?event.button===2:cameraRotateButton==='middle'?event.button===1:cameraRotateButton==='space-left'?event.button===0&&spaceHeld:false;}
function matchesPanGesture(event){return cameraPanButton==='middle'?event.button===1:cameraPanButton==='shift-right'?event.button===2&&event.shiftKey:false;}
function capturePointer(event){activePointerId=event.pointerId;try{canvas.setPointerCapture(event.pointerId);}catch(error){console.debug('Pointer capture unavailable:',error);}}
function scheduleStrokeFlush(){if(strokeFlushQueued)return;strokeFlushQueued=true;requestAnimationFrame(()=>{strokeFlushQueued=false;flushPointerQueue(false);flushStrokePreviewBatch();});}
function enqueuePointerSamples(event){const source=typeof event.getCoalescedEvents==='function'?event.getCoalescedEvents():[event];for(const sample of source){pendingPointerSamples.push({clientX:sample.clientX,clientY:sample.clientY});}if(pendingPointerSamples.length>64){const kept=[];const stride=Math.ceil(pendingPointerSamples.length/64);for(let i=0;i<pendingPointerSamples.length;i+=stride)kept.push(pendingPointerSamples[i]);const last=pendingPointerSamples[pendingPointerSamples.length-1];if(kept[kept.length-1]!==last)kept.push(last);pendingPointerSamples=kept;}scheduleStrokeFlush();}
function flushPointerQueue(force=false){strokeFlushQueued=false;if(activeInteraction!=='paint'||!isPainting){pendingPointerSamples.length=0;return;}if(force&&pendingPointerSamples.length>20){const source=pendingPointerSamples,compressed=[],stride=(source.length-1)/19;for(let i=0;i<19;i++)compressed.push(source[Math.floor(i*stride)]);compressed.push(source[source.length-1]);pendingPointerSamples=compressed;}const count=Math.min(pendingPointerSamples.length,force?pendingPointerSamples.length:currentPerformanceProfile().maxPointerSamples);const started=performance.now();let cursorHit=null;for(let i=0;i<count;i++){const sample=pendingPointerSamples[i],hit=getHitAt(sample.clientX,sample.clientY);if(hit){hit.clientX=sample.clientX;hit.clientY=sample.clientY;processStrokeHit(hit);cursorHit=hit;}else lastHit=null;}perfStats.pointerMs+=performance.now()-started;perfStats.pointerSamples+=count;if(count)pendingPointerSamples.splice(0,count);if(pendingPointerSamples.length)scheduleStrokeFlush();
  // Keep the brush cursor glued to the paint while a stroke is being drawn.
  if(cursorHit)updateBrushCursor(cursorHit);}
function cancelActiveInteraction(){if(activeInteraction==='paint'){flushPointerQueue(true);finishStroke();}activeInteraction='idle';activePointerId=null;isPainting=false;isRotating=false;isPanning=false;dragStart=null;pendingPointerSamples.length=0;strokeFlushQueued=false;requestRender();}
function endPointerInteraction(event){if(event&&activePointerId!==null&&event.pointerId!==activePointerId)return;if(activeInteraction==='paint'){flushPointerQueue(true);finishStroke();}activeInteraction='idle';activePointerId=null;isRotating=false;isPanning=false;dragStart=null;pendingPointerSamples.length=0;requestRender();}
canvas.addEventListener('pointerdown',(event)=>{
  if(activeInteraction!=='idle')return;
  if(matchesPanGesture(event)){event.preventDefault();activeInteraction='pan';isPanning=true;dragStart={x:event.clientX,y:event.clientY};capturePointer(event);return;}
  if(matchesRotateGesture(event)){event.preventDefault();activeInteraction='rotate';isRotating=true;dragStart={x:event.clientX,y:event.clientY};capturePointer(event);return;}
  if(event.button!==0||(cameraRotateButton==='space-left'&&spaceHeld))return;
  const hit=getHit(event);if(!hit)return;hit.clientX=event.clientX;hit.clientY=event.clientY;if(beginStroke(hit)){event.preventDefault();activeInteraction='paint';capturePointer(event);}
});
canvas.addEventListener('pointermove',(event)=>{
  if(activePointerId!==null&&event.pointerId!==activePointerId)return;
  if(activeInteraction==='paint'){enqueuePointerSamples(event);}
  else if(activeInteraction==='rotate'&&isRotating&&dragStart){orbit.rotation.y+=(event.clientX-dragStart.x)*rotationSensitivity;orbit.rotation.x=clamp(orbit.rotation.x+(event.clientY-dragStart.y)*rotationSensitivity,-.9,.9);dragStart={x:event.clientX,y:event.clientY};invalidateSceneMatrices();requestRender();}
  else if(activeInteraction==='pan'&&isPanning&&dragStart){panCamera(event.clientX-dragStart.x,event.clientY-dragStart.y);dragStart={x:event.clientX,y:event.clientY};}
  else if(activeInteraction==='idle'){const hit=getHit(event);updateBrushCursor(hit);}
});
canvas.addEventListener('pointerleave',()=>{if(activeInteraction==='idle')hideBrushCursor();});
canvas.addEventListener('pointerup',endPointerInteraction);
canvas.addEventListener('pointercancel',endPointerInteraction);
canvas.addEventListener('lostpointercapture',()=>{if(activeInteraction!=='idle')cancelActiveInteraction();});
canvas.addEventListener('wheel',(event)=>{event.preventDefault();zoom=clamp(zoom+event.deltaY*zoomSensitivity,1.2,9);camera.position.set(viewTarget.x,viewTarget.y,viewTarget.z+zoom);camera.lookAt(viewTarget);invalidateSceneMatrices();requestRender();},{passive:false});
window.addEventListener('blur',()=>{spaceHeld=false;cancelActiveInteraction();});
document.addEventListener('visibilitychange',()=>{if(document.hidden)cancelActiveInteraction();});
document.addEventListener('keydown',event=>{if(event.code==='Space'&&!event.repeat){const target=event.target;const typing=target instanceof HTMLElement&&(['INPUT','TEXTAREA','SELECT'].includes(target.tagName)||target.isContentEditable);if(!typing){spaceHeld=true;if(cameraRotateButton==='space-left')event.preventDefault();}}});
document.addEventListener('keyup',event=>{if(event.code==='Space'){spaceHeld=false;if(activeInteraction==='rotate'&&cameraRotateButton==='space-left')cancelActiveInteraction();}});

function updatePerformanceDiagnostics(){
  const panel=$('#performanceDiagnostics');if(!panel||panel.hidden)return;
  const now=performance.now(),elapsed=Math.max(1,now-perfStats.lastFpsAt),frames=perfStats.renderFrames-perfStats.lastFrameCount;
  $('#perfFps').textContent=String(Math.round(frames*1000/elapsed));
  perfStats.lastFpsAt=now;perfStats.lastFrameCount=perfStats.renderFrames;
  $('#perfRaycast').textContent=`${perfStats.raycasts?(perfStats.raycastMs/perfStats.raycasts).toFixed(2):'0.00'} ms`;
  $('#perfDecal').textContent=`${perfStats.decals?(perfStats.decalMs/perfStats.decals).toFixed(2):'0.00'} ms`;
  $('#perfPointer').textContent=`${perfStats.pointerSamples?(perfStats.pointerMs/perfStats.pointerSamples).toFixed(2):'0.00'} ms`;
  $('#perfMeshes').textContent=String(layers.reduce((n,layer)=>n+layer.group.children.length,0));
  const memory=performance.memory?.usedJSHeapSize;$('#perfMemory').textContent=memory?`${(memory/1048576).toFixed(0)} MB`:'N/A';
  perfStats.raycastMs=0;perfStats.raycasts=0;perfStats.decalMs=0;perfStats.decals=0;perfStats.pointerMs=0;perfStats.pointerSamples=0;
}
function togglePerformanceDiagnostics(){
  const panel=$('#performanceDiagnostics'),button=$('#performanceDiagnosticsToggle');if(!panel||!button)return;
  panel.hidden=!panel.hidden;
  if(panel.hidden){if(diagnosticsTimer)clearInterval(diagnosticsTimer);diagnosticsTimer=null;button.setAttribute('aria-pressed','false');}
  else{button.setAttribute('aria-pressed','true');updatePerformanceDiagnostics();diagnosticsTimer=setInterval(updatePerformanceDiagnostics,750);}
}

// ----- Project format, migration, and recovery -----
// Serialization drops runtime-only fields (GPU meshes, per-model undo history)
// via a replacer instead of deep-cloning every dab first. The old clone-then-
// stringify path stalled the UI thread for hundreds of milliseconds whenever a
// painted project autosaved.
const PROJECT_SERIALIZATION_SKIP=/^(mesh|meshes|history|historyIndex)$/;
function serializeProject(){return JSON.stringify(projectData(),(key,value)=>PROJECT_SERIALIZATION_SKIP.test(key)?undefined:value);}
function projectData(){return {format:'GrimStudioProject',version:5,name:$('#projectName').value||'Untitled Makeup',model:currentHeadModelId,modelHash:MODEL_HASH,skinTone,lighting:{...lighting},brushShape:brushShapeOverride,modelSessions:Object.fromEntries([...modelSessions.entries(),[currentHeadModelId,captureModelSession()]]),layers:layers.map((layer)=>({name:layer.name,visible:layer.visible,locked:layer.locked,opacity:layer.opacity,strokes:layer.strokes,legacyPaint:layer.legacyPaint||null})),activeLayer,brush:{tool:selectedTool,color,size:brushSize,opacity,softness,flow},symmetryEnabled,view:{rotationX:orbit.rotation.x,rotationY:orbit.rotation.y,zoom,target:[viewTarget.x,viewTarget.y,viewTarget.z]},savedAt:new Date().toISOString()};}
function queueAutosave(){clearTimeout(autosaveTimer);autosaveTimer=setTimeout(runQueuedAutosave,1800);}
async function runQueuedAutosave(){
  // Never serialize while a stroke is being painted; retry shortly after it ends
  // so autosave can never interleave with pointer-driven rendering work.
  if(isPainting||activeInteraction==='paint'){autosaveTimer=setTimeout(runQueuedAutosave,700);return;}
  try{await window.grim.autosave(serializeProject());$('#status').textContent=t('autosaved');}catch(error){console.warn('Autosave failed:',error);$('#status').textContent=t('autosaveFailed');}
}
async function saveProject(){try{const result=await window.grim.saveProject(serializeProject());if(result?.error)throw new Error(result.error);if(!result?.canceled)toast(t('projectSaved'));}catch(error){toast(language==='ru'?'Ошибка сохранения проекта':'Project save failed');console.error('Project save failed:',error);}}
function validateProject(data){if(!data||data.format!=='GrimStudioProject'||!Array.isArray(data.layers)||data.layers.length>MAX_LAYERS)throw new Error('Not a valid GrimStudio project');for(const layer of data.layers){if(!layer||typeof layer!=='object')throw new Error('Invalid layer');if(layer.paint&&(!String(layer.paint).startsWith('data:image/png;base64,')||String(layer.paint).length>48_000_000))throw new Error('Invalid legacy paint image');if(layer.strokes&&!Array.isArray(layer.strokes))throw new Error('Invalid stroke collection');}return data;}
async function openProject(){try{const result=await window.grim.openProject();if(result?.canceled)return;if(result?.error)throw new Error(result.error);const data=validateProject(JSON.parse(result.content));await restoreProject(data);toast(t('projectOpened'));}catch(error){toast(t('invalidProject'));console.error(error);}}
async function restoreProject(data){$('#projectName').value=data.name||'Untitled Makeup';if(SKIN_TONES.some(entry=>entry.key===data.skinTone)){skinTone=data.skinTone;const row=$('#skinTones');row?.querySelectorAll('button').forEach(node=>node.classList.toggle('active',node.title===SKIN_TONES.find(entry=>entry.key===skinTone).name));}
  if(data.lighting&&typeof data.lighting==='object'){setLighting({temp:data.lighting.temp,az:data.lighting.az,el:data.lighting.el,intensity:data.lighting.intensity,fill:data.lighting.fill??1,rim:data.lighting.rim??1,ambient:data.lighting.ambient??1,preset:data.lighting.preset},{fromPreset:data.lighting.preset&&data.lighting.preset!=='custom'});}
  if(typeof data.brushShape==='string'&&BRUSH_SHAPES.some(shape=>shape.key===data.brushShape)){brushShapeOverride=data.brushShape==='default'?null:data.brushShape;populateBrushShapes();drawBrushPreview();}if(data.modelSessions&&typeof data.modelSessions==='object'){modelSessions.clear();for(const [key,value] of Object.entries(data.modelSessions))if(['male','female'].includes(key))modelSessions.set(key,value);}if(['male','female'].includes(data.model)&&data.model!==currentHeadModelId){currentHeadModelId=data.model;modelReady=false;modelPromise=null;await loadModel(true);}applySkinTone();layers.forEach((layer)=>{orbit.remove(layer.group);disposeGroup(layer.group);layer.legacyTexture?.dispose();});layers=[];layerCounter=1;
  for(const entry of data.layers){const layer=createLayer(String(entry.name||`${t('layerName')} ${layerCounter}`).slice(0,80),entry.legacyPaint||entry.paint||null);layer.visible=entry.visible!==false;layer.locked=entry.locked===true;layer.opacity=clamp(Number(entry.opacity??1),0,1);layer.strokes=Array.isArray(entry.strokes)?entry.strokes.map(cloneStrokeData):[];layers.push(layer);storeSnapshot(layer);}
  if(!layers.length){layers.push(createLayer(t('baseLayer')));}
  activeLayer=clamp(Number(data.activeLayer)||0,0,layers.length-1);if(modelReady)layers.forEach(attachLayer);
  const brush=data.brush||{};const restoredTool=clamp(Number(brush.tool)||0,0,TOOLS.length-1);if(TOOLS[restoredTool]?.key==='symmetry'||TOOLS[restoredTool]?.key==='eyedropper')selectTool(0);else selectTool(restoredTool);
  setColor(/^#[0-9a-f]{6}$/i.test(brush.color||'')?brush.color:'#c72f58');$('#size').value=String(clamp(Number(brush.size)||24,2,140));$('#size').dispatchEvent(new Event('input',{bubbles:true}));$('#opacity').value=String(Math.round(clamp(Number(brush.opacity??1),0,1)*100));$('#opacity').dispatchEvent(new Event('input',{bubbles:true}));$('#softness').value=String(Math.round(clamp(Number(brush.softness??.72),0,1)*100));$('#softness').dispatchEvent(new Event('input',{bubbles:true}));$('#flow').value=String(Math.round(clamp(Number(brush.flow??.75),0,1)*100));$('#flow').dispatchEvent(new Event('input',{bubbles:true}));symmetryEnabled=data.symmetryEnabled===true;$('#symmetryToggle').checked=symmetryEnabled;
  if(data.view){setView(Number(data.view.rotationX)||0,Number(data.view.rotationY)||0,Number(data.view.zoom)||4.4);if(Array.isArray(data.view.target)&&data.view.target.length===3&&data.view.target.every(Number.isFinite)){viewTarget.fromArray(data.view.target);camera.position.set(viewTarget.x,viewTarget.y,viewTarget.z+zoom);camera.lookAt(viewTarget);invalidateSceneMatrices();}}syncLayers();if(layers.some((layer)=>layer.legacyPaint))toast(t('legacyWarning'));requestRender();}
async function exportImage(){if(!renderer)return toast('Renderer unavailable');try{renderer.render(scene,camera);const png=renderer.domElement.toDataURL('image/png');const result=await window.grim.exportImage(png);if(result?.error)throw new Error(result.error);if(!result?.canceled)toast(t('exported'));}catch(error){toast(t('exportFailed'));console.error(error);}}
function clearAllLayers(){layers.forEach((layer)=>{orbit.remove(layer.group);disposeGroup(layer.group);layer.legacyTexture?.dispose();});layers=[];layerCounter=1;layers.push(createLayer(t('baseLayer')));activeLayer=0;if(modelReady)attachLayer(layers[0]);syncLayers();}
function newProject(){if(!confirm(t('newConfirm')))return;clearAllLayers();$('#projectName').value='Untitled Makeup';setView(0,Math.PI,4.4);queueAutosave();}

// Keyboard-first workflow: tools, views, zoom, symmetry, layers and panels.
function applyZoomStep(delta){zoom=clamp(zoom+delta,1.2,9);camera.position.set(viewTarget.x,viewTarget.y,viewTarget.z+zoom);camera.lookAt(viewTarget);invalidateSceneMatrices();requestRender();}
function selectToolByKey(key){const index=TOOLS.findIndex(tool=>tool.key===key);if(index>=0)selectTool(index);}
function toggleSymmetryShortcut(){symmetryEnabled=!symmetryEnabled;$('#symmetryToggle').checked=symmetryEnabled;persistSettings();renderToolButtons();toast(symmetryEnabled?t('symmetryOn'):t('symmetryOff'));}
document.addEventListener('keydown',(event)=>{
  const target=event.target;const typing=target instanceof HTMLElement&&(['INPUT','TEXTAREA','SELECT'].includes(target.tagName)||target.isContentEditable);
  if(event.key==='Escape'&&$('#settingsDialog')&&!$('#settingsDialog').hidden){toggleSettingsDialog();return;}
  if(!typing&&event.ctrlKey&&!event.shiftKey&&event.key.toLowerCase()==='s'){event.preventDefault();saveProject();}
  else if(!typing&&event.ctrlKey&&event.key.toLowerCase()==='o'){event.preventDefault();openProject();}
  else if(!typing&&event.ctrlKey&&!event.shiftKey&&event.key.toLowerCase()==='z'){event.preventDefault();undo();}
  else if(!typing&&event.ctrlKey&&(event.key.toLowerCase()==='y'||(event.key.toLowerCase()==='z'&&event.shiftKey))){event.preventDefault();redo();}
  else if(!typing&&event.ctrlKey&&event.key.toLowerCase()==='e'){event.preventDefault();exportImage();}
  else if(!typing&&event.key==='['){brushSize=clamp(brushSize-2,2,140);$('#size').value=String(brushSize);$('#size').dispatchEvent(new Event('input',{bubbles:true}));}
  else if(!typing&&event.key===']'){brushSize=clamp(brushSize+2,2,140);$('#size').value=String(brushSize);$('#size').dispatchEvent(new Event('input',{bubbles:true}));}
  else if(!typing&&!event.ctrlKey&&(event.key==='+'||event.key==='=')){event.preventDefault();applyZoomStep(-.45);}
  else if(!typing&&!event.ctrlKey&&event.key==='-'){event.preventDefault();applyZoomStep(.45);}
  else if(!typing&&!event.ctrlKey&&event.key==='1'){event.preventDefault();setView(0,Math.PI,4.4);}
  else if(!typing&&!event.ctrlKey&&event.key==='2'){event.preventDefault();setView(0,Math.PI/2,4.4);}
  else if(!typing&&!event.ctrlKey&&event.key==='3'){event.preventDefault();setView(0,Math.PI*1.5,4.4);}
  else if(!typing&&!event.ctrlKey&&event.key==='4'){event.preventDefault();setView(0,0,4.4);}
  else if(!typing&&!event.ctrlKey&&event.key.toLowerCase()==='b'){selectToolByKey('brush');}
  else if(!typing&&!event.ctrlKey&&event.key.toLowerCase()==='e'){selectToolByKey('eraser');}
  else if(!typing&&!event.ctrlKey&&event.key.toLowerCase()==='i'){selectToolByKey('eyedropper');}
  else if(!typing&&!event.ctrlKey&&event.key.toLowerCase()==='m'){toggleSymmetryShortcut();}
  else if(!typing&&!event.ctrlKey&&event.key.toLowerCase()==='g'){viewport.classList.toggle('grid-on');}
  else if(!typing&&!event.ctrlKey&&event.key.toLowerCase()==='l'){addLayer();}
  else if(!typing&&event.key==='Tab'){event.preventDefault();document.body.classList.toggle('zen');}
});

// The application shell and all controls initialize before the GLB and surface index.
layers.push(createLayer(t('baseLayer')));applyTheme();applyAccent();populateAccentPresets();syncAccentUI();applyLanguage();bindLightingControls();syncLightingUI();populateBrushShapes();drawBrushPreview();syncLayers();renderToolButtons();$('#toolSettingsLabel').textContent=`${toolName(selectedTool).toUpperCase()} ${t('brushSettings')}`;setLoadingState('Starting',t('preparing'));requestRender();
window.grim.readAutosave().then(async(saved)=>{if(!saved)return;try{const data=validateProject(JSON.parse(saved));await restoreProject(data);toast(language==='ru'?'Восстановлено автосохранение':'Autosave recovered');}catch(error){console.warn('Autosave recovery skipped:',error);}}).catch((error)=>console.warn('Autosave read failed:',error));
requestAnimationFrame(()=>loadModel());
