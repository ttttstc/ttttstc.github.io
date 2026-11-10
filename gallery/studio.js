// The room is built from real meshes. The flat room image is only the non-WebGL fallback.
export function startStudio(T, entries, decorationEntries=entries) {
  const canvas = document.querySelector('#studio');
  let renderer;
  try { renderer = new T.WebGLRenderer({canvas, antialias:true, powerPreference:'high-performance'}); }
  catch { return; }
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
  renderer.outputColorSpace = T.SRGBColorSpace;
  renderer.toneMapping = T.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.3;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = T.PCFSoftShadowMap;
  const scene = new T.Scene();
  scene.background = new T.Color('#d8c8b0');
  const room = new T.Group();room.scale.set(.72,1,.72);scene.add(room);
  const camera = new T.PerspectiveCamera(59, innerWidth / innerHeight, .05, 80);
  camera.position.set(0, 1.65, 1.8);
  const overlay = new T.Scene();
  overlay.add(new T.AmbientLight('#ffffff', 2));
  const overlayCam = new T.OrthographicCamera(-1,1,1,-1,1,2000);
  overlayCam.position.z = 1000;
  const shelfGroup = new T.Group(); overlay.add(shelfGroup);
  let seed=19; function random(){seed=(seed*16807)%2147483647;return (seed-1)/2147483646;}
  const textureLoader=new T.TextureLoader();
  function surface(prefix,repeatX,repeatY){
    const result={};
    for(const [field,suffix] of [['map','Diffuse'],['normalMap','nor_gl'],['roughnessMap','Rough']]){
      const tex=textureLoader.load(`./assets/textures/${prefix}_${suffix}.jpg`,()=>schedule());
      tex.wrapS=tex.wrapT=T.RepeatWrapping;tex.repeat.set(repeatX,repeatY);tex.anisotropy=Math.min(8,renderer.capabilities.getMaxAnisotropy());
      if(field==='map')tex.colorSpace=T.SRGBColorSpace;
      result[field]=tex;
    }
    return result;
  }
  const mat=(color,roughness=1,metalness=0)=>new T.MeshStandardMaterial({color,roughness,metalness});
  const oak=new T.MeshStandardMaterial({...surface('ash_veneer',1,1),color:'#bca888',roughness:.8,normalScale:new T.Vector2(.25,.25)});
  const paleOak=new T.MeshStandardMaterial({...surface('ash_veneer',1,1),color:'#e1d1b6',roughness:.88,normalScale:new T.Vector2(.2,.2)});
  const plaster=new T.MeshStandardMaterial({...surface('beige_wall_001',3,2),color:'#ffffff',roughness:.92,normalScale:new T.Vector2(.18,.18)});
  const floor=new T.MeshStandardMaterial({...surface('wooden_floor_02',2,2),color:'#dfd0bb',roughness:.86,normalScale:new T.Vector2(.25,.25)});
  // Subtle GLSL grain augments the PBR maps without baking light into the textures.
  function studioShader(material, strength, lift=0){material.onBeforeCompile=shader=>{
    shader.vertexShader=shader.vertexShader.replace('#include <common>','#include <common>\nvarying vec3 studioPosition;').replace('#include <begin_vertex>','#include <begin_vertex>\nstudioPosition = position;');
    shader.fragmentShader=shader.fragmentShader.replace('#include <common>',`#include <common>\nvarying vec3 studioPosition;\nfloat studioHash(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);}\nfloat studioNoise(vec3 p){vec3 i=floor(p), f=fract(p);f=f*f*(3.0-2.0*f);return mix(mix(mix(studioHash(i),studioHash(i+vec3(1,0,0)),f.x),mix(studioHash(i+vec3(0,1,0)),studioHash(i+vec3(1,1,0)),f.x),f.y),mix(mix(studioHash(i+vec3(0,0,1)),studioHash(i+vec3(1,0,1)),f.x),mix(studioHash(i+vec3(0,1,1)),studioHash(i+vec3(1,1,1)),f.x),f.y),f.z);}`)
      .replace('#include <color_fragment>',`#include <color_fragment>\nfloat grain = studioNoise(studioPosition * 26.0);\ndiffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.85, 0.82, 0.76), ${lift.toFixed(3)});\ndiffuseColor.rgb *= 1.0 + (grain - 0.5) * ${strength.toFixed(3)};`);
  };}
  studioShader(plaster,.065,.48);studioShader(oak,.035);studioShader(floor,.035);
  const cream=mat('#eee4d5'), dark=mat('#5e4839'), metal=mat('#66584a',.35,.7);
  const paper=mat('#f4eee3'), green=mat('#748667'), ceramic=mat('#d5c6ac'), glass=mat('#c4d2bf',.4);
  function box(parent,name,x,y,z,w,h,d,material,rotation=0){const o=new T.Mesh(new T.BoxGeometry(w,h,d),material);o.name=name;o.position.set(x,y,z);o.rotation.y=rotation;o.castShadow=true;o.receiveShadow=true;parent.add(o);return o;}
  function cylinder(parent,name,x,y,z,r1,r2,h,material){const o=new T.Mesh(new T.CylinderGeometry(r1,r2,h,16),material);o.name=name;o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;parent.add(o);return o;}
  function sphere(parent,name,x,y,z,sx,sy,sz,material){const o=new T.Mesh(new T.SphereGeometry(1,18,12),material);o.name=name;o.position.set(x,y,z);o.scale.set(sx,sy,sz);o.castShadow=true;parent.add(o);return o;}
  scene.add(new T.HemisphereLight('#f9f4e7','#ac9a83',2.6));
  const sun=new T.DirectionalLight('#ffe5bd',2.7);sun.position.set(-4,7,1);sun.castShadow=true;sun.shadow.mapSize.set(1024,1024);Object.assign(sun.shadow.camera,{left:-8,right:8,top:8,bottom:-8,near:.5,far:25});sun.shadow.bias=-.0004;scene.add(sun);
  const lampLight=new T.PointLight('#ffce92',28,8);lampLight.position.set(3.1,2.65,-1.3);room.add(lampLight);
  // Architectural shell, visible across a 270-degree turn.
  box(room,'floor',0,-.1,0,11,.2,11,floor);
  box(room,'back wall',0,2.4,-5.4,11,4.8,.2,plaster);
  box(room,'left wall below window',-5.5,.52,0,.2,1.04,11,plaster);
  box(room,'left wall above window',-5.5,4.5,0,.2,.6,11,plaster);
  box(room,'left wall by window',-5.5,2.62,-4.3,.2,3.16,2.4,plaster);
  box(room,'left wall by entrance',-5.5,2.62,3.45,.2,3.16,4.1,plaster);
  box(room,'right wall',5.5,2.4,0,.2,4.8,11,plaster);
  box(room,'front wall',0,2.4,5.5,11,4.8,.2,plaster);
  const ceiling=box(room,'ceiling',0,4.85,0,11,.12,11,cream);ceiling.castShadow=false;
  for(const x of [-4.8,-2.4,0,2.4,4.8])box(room,'ceiling beam',x,4.65,0,.18,.25,11,oak);
  for(const z of [-5.22,5.25])box(room,'baseboard',0,.16,z,11,.28,.12,paleOak);
  for(const x of [-5.32,5.32])box(room,'baseboard',x,.16,0,.12,.28,11,paleOak);
  // Left window: layered frame, glass and depth behind a mullioned opening.
  const glazing=new T.MeshPhysicalMaterial({color:'#e5f0e6',transparent:true,opacity:.18,roughness:.06,metalness:0,side:T.DoubleSide,depthWrite:false});
  box(room,'window glass',-5.35,2.65,-.9,.02,3,4.3,glazing);
  const sky=mat('#cbd8c4');box(room,'garden distance',-9,2.8,-.9,.05,6,9,sky);
  for(let i=0;i<20;i++){
    const z=-5+random()*9, x=-7.1-random()*1.1, y=.6+random()*2.6;
    const leaves=sphere(room,'garden foliage',x,y,z,.45+random()*.55,.4+random()*.6,.5+random()*.45,green);leaves.rotation.y=random()*Math.PI;
  }
  box(room,'window sill',-5.05,1.1,-.9,.65,.13,4.7,oak);
  for(const z of [-3.15,-2,-.9,.2,1.35])box(room,'window vertical',-5.18,2.65,z,.16,3.2,.1,oak);
  for(const y of [1.05,2.05,3.1,4.2])box(room,'window horizontal',-5.18,y,-.9,.16,.12,4.7,oak);
  const greenery=[[-3.9,1.45,-2.7],[-3.8,1.8,-2.4],[-3.9,2,-2.9],[-3.85,1.7,-3.2]];
  const plantFallback=new T.Group();room.add(plantFallback);
  cylinder(plantFallback,'vase',-4,1.35,-2.8,.17,.23,.48,ceramic);
  for(const [x,y,z] of greenery){const stem=cylinder(plantFallback,'stem',x,y,z,.014,.014,.8,dark);stem.rotation.z=(x+4)*.8;const leaf=sphere(plantFallback,'leaf',x,y+.38,z,.21,.08,.12,green);leaf.rotation.z=.5;}
  // Procedural fallback, replaced by the editable Blender asset when it loads.
  const deskGroup=new T.Group();room.add(deskGroup);
  box(deskGroup,'worktop',3.8,1.04,-1.7,2.65,.14,1.4,oak);
  for(const x of [2.72,4.87])for(const z of [-2.22,-1.18])box(deskGroup,'table leg',x,.52,z,.1,1,.1,dark);
  box(deskGroup,'desk drawer',3.4,.85,-1.68,1.05,.24,1.05,paleOak);
  sphere(deskGroup,'drawer knob',3.4,.85,-1.12,.045,.045,.035,metal);
  cylinder(deskGroup,'stool seat',3.15,.62,.1,.42,.4,.13,oak);
  for(const a of [0,2.09,4.18]){const leg=cylinder(deskGroup,'stool leg',3.15+Math.sin(a)*.25,.31,.1+Math.cos(a)*.25,.035,.045,.62,dark);leg.rotation.z=Math.sin(a)*.12;}
  for(let i=0;i<5;i++){const b=box(deskGroup,'sketchbook',3.8,1.14+i*.035,-2.1,.65,.035,.45,i%2?paper:paleOak);b.rotation.y=i*.08;}
  box(deskGroup,'drawing paper',4.15,1.125,-1.5,.68,.008,.48,paper,.13);
  box(deskGroup,'palette',3.28,1.14,-1.45,.46,.025,.3,paleOak,.2);
  for(let i=0;i<6;i++)sphere(deskGroup,'paint',3.13+i*.065,1.16,-1.44,.025,.008,.018,[mat('#b95840'),mat('#d4ac68'),mat('#778f8b'),mat('#c8c0a8'),mat('#526a68'),mat('#e3ddc9')][i]);
  cylinder(deskGroup,'brush jar',4.45,1.31,-2.04,.13,.15,.38,ceramic);
  for(let i=0;i<9;i++){const x=4.34+i*.026;const brush=cylinder(deskGroup,'paint brush',x,1.65+random()*.12,-2.04+(random()-.5)*.12,.012,.014,.6,oak);brush.rotation.z=(i-4)*.04;sphere(deskGroup,'brush tip',x,1.98,-2.04,.018,.06,.018,dark);}
  cylinder(deskGroup,'desk lamp base',2.86,1.15,-2.08,.18,.2,.04,metal);
  const arm=cylinder(deskGroup,'lamp arm',2.86,1.65,-2.08,.025,.025,1.0,metal);arm.rotation.z=-.2;
  const shade=cylinder(deskGroup,'lamp shade',2.97,2.13,-2.08,.1,.25,.23,dark);shade.rotation.z=-.2;
  sphere(deskGroup,'lamp glow',2.97,2.04,-2.08,.12,.05,.12,mat('#f5d2a2'));
  // Peg rail with tools and pinned studies on the right wall.
  box(room,'tool rail',5.35,2.75,-2.0,.12,.13,3.0,oak);
  for(let i=0;i<7;i++){const z=-3.2+i*.4;cylinder(room,'peg',5.2,2.68,z,.035,.035,.15,metal);const tool=box(room,'hanging tool',5.18,2.43,z,.025,.42,.035,i%2?dark:metal);tool.rotation.x=.08;}
  for(let i=0;i<3;i++){const study=box(room,'pinned paper',5.35,2.0,-3.6+i*.52,.02,.55,.4,paper);study.rotation.x=(i-1)*.05;}

  // Supplies are kept where an artist would actually reach for them.
  const bookMats=['#9c6e55','#cab79c','#7f8d78','#d4c6af','#6c7774'].map(color=>mat(color));
  const paintMats=['#b95d4d','#c99559','#81918a','#c8b89f','#746656'].map(color=>mat(color));
  box(room,'window storage',-4.82,.48,-.25,1.08,.9,2.5,paleOak);
  box(room,'window storage top',-4.82,.96,-.25,1.18,.08,2.65,oak);
  for(let i=0;i<3;i++){
    const z=-1.05+i*.82;box(room,'storage drawer',-4.26,.5,z,.04,.6,.72,paleOak);
    sphere(room,'drawer handle',-4.22,.53,z,.035,.035,.035,metal);
    const book=box(room,'well used sketchbook',-4.65,1.04+i*.06,.5,.5,.05,.4,bookMats[i]);book.rotation.y=(i-1)*.12;
  }
  cylinder(room,'window ceramic cup',-4.55,1.13,-.5,.12,.14,.28,ceramic);
  for(let i=0;i<6;i++){const pencil=cylinder(room,'pencil',-4.62+i*.028,1.39,-.5,.01,.01,.45,i%2?oak:dark);pencil.rotation.z=(i-3)*.06;}
  box(room,'materials shelf back',-5.3,1.45,3.1,.1,2.75,2.2,oak);
  for(const z of [2.0,4.2])box(room,'materials shelf side',-4.9,1.45,z,.86,2.75,.08,paleOak);
  for(const y of [.1,.65,1.2,1.75,2.3,2.85])box(room,'materials shelf',-4.9,y,3.1,.86,.07,2.28,paleOak);
  for(let i=0;i<12;i++){
    const z=2.16+(i%6)*.32,y=i<6?1.45:2.0;
    const book=box(room,'shelf journal',-4.68,y,z,.48,.43,.22,bookMats[i%bookMats.length]);book.rotation.x=(i%4-1)*.04;
  }
  for(let i=0;i<4;i++){
    cylinder(room,'supply jar',-4.65,.84,2.35+i*.5,.11,.12,.32,i%2?ceramic:paintMats[i]);
    const boxItem=box(room,'paper box',-4.7,.34,2.3+i*.5,.5,.35,.42,bookMats[(i+1)%bookMats.length]);boxItem.rotation.y=(i-1)*.03;
  }

  // A small easel and spare canvases occupy the left side of the gallery wall.
  for(const side of [-1,1]){const leg=box(room,'easel leg',-3.9+side*.34,1.02,-4.3,.08,2.0,.1,oak);leg.rotation.z=-side*.14;}
  box(room,'easel crossbar',-3.9,.9,-4.22,.92,.09,.15,dark);
  box(room,'easel frame',-3.9,1.75,-4.18,1.0,1.1,.1,oak);
  box(room,'easel paper',-3.9,1.75,-4.11,.89,.98,.025,paper);
  box(room,'paint study',-3.9,1.7,-4.09,.46,.5,.012,paintMats[2]);
  // Separate the overlapping canvas faces in depth to avoid z-fighting while moving.
  for(let i=0;i<3;i++){const spare=box(room,'spare canvas',-3.55+i*.1,.56,-4.92+i*.1,.58,1.0,.06,i===1?paper:paleOak);spare.rotation.z=-.12+i*.05;}
  const crates=[[-2.35,.25,-4.85,1.1,.45],[-1.15,.33,-4.57,.8,.6],[.95,.21,-4.91,1.05,.38],[2.05,.27,-4.65,.85,.5]];
  crates.forEach(([x,y,z,w,h],i)=>{
    const crate=box(room,'artist storage crate',x,y,z,w,h,.6,i%2?oak:paleOak);crate.rotation.y=(i-1)*.07;
    box(room,'crate handle',x,y+.03,z+.31,.22,.03,.02,dark);
    for(let j=0;j<(i%3)+1;j++){const book=box(room,'stacked art book',x+(j-1)*.04,y+h/2+.03+j*.055,z+.02,.64,.05,.43,bookMats[(i+j)%bookMats.length]);book.rotation.y=(j-i)*.11;}
  });
  for(let i=0;i<4;i++){
    const tube=cylinder(room,'rolled drawing',2.72+i*.13,.44+i*.04,-4.65+i*.035,.055,.055,.72+i*.08,paper);tube.rotation.z=-.16+i*.08;
  }

  // Notes, loose sheets and a trolley leave signs of work in progress.
  box(room,'cork pinboard',5.3,2.35,.35,.08,1.35,2.65,mat('#bba48a'));
  for(let i=0;i<6;i++){
    const z=-.6+(i%3)*.92,y=2.65-Math.floor(i/3)*.57;
    const note=new T.Group();note.position.set(5.23,y,z);note.rotation.x=(i-2)*.035;room.add(note);
    box(note,'pinned sketch',0,0,0,.025,.46,.7,paper);
    sphere(note,'pin',-.03,.2,0,.018,.018,.018,metal);
    const study=decorationEntries[(i*13+5)%decorationEntries.length];
    if(study){
      const print=new T.Mesh(new T.PlaneGeometry(.59,.37),new T.MeshStandardMaterial({color:'#e4d8c5',roughness:1}));print.rotation.y=-Math.PI/2;print.position.x=-.02;note.add(print);
      let url=study.images[0];try {const parsed=new URL(url,location.href);if(parsed.hostname==='pbs.twimg.com')parsed.searchParams.set('name','small');url=parsed.href;} catch {}
      textureLoader.load(url,image=>{image.colorSpace=T.SRGBColorSpace;print.material.map=image;print.material.color.set('#ffffff');print.material.needsUpdate=true;schedule();},undefined,()=>{});
    }
  }
  const cart=new T.Group();room.add(cart);
  for(const y of [.18,.65,1.12])box(cart,'trolley shelf',4.72,y,1.1,.85,.07,.7,oak);
  for(const x of [4.32,5.12])for(const z of [.78,1.42]){
    cylinder(cart,'trolley upright',x,.65,z,.025,.025,1.1,metal);
    sphere(cart,'trolley wheel',x,.08,z,.07,.07,.07,dark);
  }
  for(let i=0;i<5;i++)cylinder(cart,'paint tin',4.42+i*.15,1.27,1.08,.06,.065,.24,paintMats[i]);
  box(room,'painting stool seat',-2.9,.59,-1.35,.82,.09,.65,oak,.08);
  for(const x of [-3.2,-2.6])for(const z of [-1.57,-1.12]){
    const leg=cylinder(room,'painting stool leg',x,.3,z,.035,.045,.6,dark);leg.rotation.z=(x+2.9)*.12;
  }
  for(let i=0;i<3;i++){
    cylinder(room,'open pigment jar',-3.15+i*.24,.71,-1.35,.085,.09,.18,ceramic);
    cylinder(room,'pigment',-3.15+i*.24,.81,-1.35,.07,.07,.015,paintMats[i]);
  }
  const openBook=box(room,'open workbook',-2.75,.65,-1.18,.43,.025,.28,paper,.2);
  openBook.rotation.z=.035;
  cylinder(room,'brush bucket',-3.45,.19,-2.0,.18,.2,.38,ceramic);
  for(let i=0;i<7;i++){const brush=cylinder(room,'floor brush',-3.55+i*.035,.5,-2.0,.012,.012,.6,oak);brush.rotation.z=(i-3)*.065;}
  const looseSheets=[[-1.8,-3.6,.12],[-1.15,-3.92,-.23],[-.65,-3.35,.38],[.12,-3.75,-.18],[.55,-3.12,.29],[1.05,-3.8,-.4],[1.5,-3.4,.13],[-2.25,-3.15,.3]];
  for(const [x,z,angle] of looseSheets){const sheet=box(room,'loose sheet',x,.018,z,.42,.01,.3,paper);sheet.rotation.y=angle;}
  for(let i=0;i<5;i++){
    const tube=cylinder(room,'paint tube',4.25+i*.14,1.11,-1.36,.035,.04,.28,paintMats[i]);tube.rotation.z=Math.PI/2;tube.rotation.y=(i-2)*.12;
  }

  const rugCanvas=document.createElement('canvas');rugCanvas.width=256;rugCanvas.height=256;
  const rugContext=rugCanvas.getContext('2d');rugContext.fillStyle='#b7a38a';rugContext.fillRect(0,0,256,256);
  for(let i=0;i<256;i+=4){rugContext.fillStyle=i%20?'#c4b299':'#a18e78';rugContext.fillRect(i,0,1,256);rugContext.fillRect(0,i,256,1);}
  const rugTexture=new T.CanvasTexture(rugCanvas);rugTexture.colorSpace=T.SRGBColorSpace;
  const rug=new T.Mesh(new T.PlaneGeometry(3.5,2.6),new T.MeshStandardMaterial({map:rugTexture,roughness:1}));rug.rotation.x=-Math.PI/2;rug.position.set(.25,.008,-.5);rug.rotation.z=.035;rug.receiveShadow=true;room.add(rug);

  // Warm work lights and drying studies hang between the original ceiling beams.
  for(const [x,z,height] of [[-2.4,-1.1,.85],[1.7,-2.8,1.05],[3.5,.6,.72]]){
    const shadeY=4.72-height;
    cylinder(room,'pendant cord',x,4.72-height/2,z,.012,.012,height,dark);
    cylinder(room,'pendant shade',x,shadeY,z,.12,.3,.23,metal);
    sphere(room,'pendant bulb',x,shadeY-.14,z,.1,.065,.1,mat('#f6d9a9'));
    const glow=new T.PointLight('#ffd9a7',3,3);glow.position.set(x,shadeY-.2,z);room.add(glow);
  }
  const dryingLine=cylinder(room,'drying line',-.2,4.0,-2.1,.012,.012,4.8,dark);dryingLine.rotation.z=Math.PI/2;
  for(let i=0;i<7;i++){
    const x=-2.25+i*.68,y=3.77-(i%3)*.035,z=-2.1;
    const drawing=new T.Group();drawing.position.set(x,y,z);drawing.rotation.z=(i-3)*.035;room.add(drawing);
    box(drawing,'drying drawing',0,0,0,.48,.42,.018,paper);
    box(drawing,'drawing clip',0,.22,0,.045,.08,.035,oak);
    const study=decorationEntries[(i*9)%decorationEntries.length];
    if(study){
      const print=new T.Mesh(new T.PlaneGeometry(.4,.34),new T.MeshStandardMaterial({color:'#e4d8c5',roughness:1}));print.position.z=.015;drawing.add(print);
      let url=study.images[0];try {const parsed=new URL(url,location.href);if(parsed.hostname==='pbs.twimg.com')parsed.searchParams.set('name','small');url=parsed.href;} catch {}
      textureLoader.load(url,image=>{image.colorSpace=T.SRGBColorSpace;print.material.map=image;print.material.color.set('#ffffff');print.material.needsUpdate=true;schedule();},undefined,()=>{});
    }
  }
  // A separate physical magazine rack appears when looking around.
  const rack=new T.Group(); room.add(rack); rack.visible=false;
  const books=new T.Group();rack.add(books);
  const slots=[];
  for(let row=0;row<2;row++){
    const y=2.9-row*1.35;
    box(rack,'shelf',0,y-.57,-5.0,5.8,.12,.55,oak);
    for(let col=0;col<5;col++){
      const x=(col-2)*1.1;
      const volume=new T.Group();books.add(volume);
      box(volume,'book pages',x,y,-4.84,.9,1.1,.13,paper);
      const mesh=new T.Mesh(new T.PlaneGeometry(.88,1.08),new T.MeshStandardMaterial({color:'#e6ded0',roughness:.9}));
      mesh.position.set(x,y,-4.76);volume.add(mesh);slots.push({volume,mesh});
    }
  }
  let rackEntries=entries,rackStart=0,slideOffset=0;
  const coverCache=new Map(),pendingCovers=new Set(),failedCovers=new Set();
  const reduceMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
  let looking=false,yaw=0,pitch=.12,drag=null,queued=false,composer=null,renderWidth=0,renderHeight=0;
  const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
  function loadCover(item){
    if(coverCache.has(item.id)||pendingCovers.has(item.id)||failedCovers.has(item.id))return;
    pendingCovers.add(item.id);
    let url=item.images[0];
    try {const parsed=new URL(url,location.href);if(parsed.hostname==='pbs.twimg.com')parsed.searchParams.set('name','small');url=parsed.href;} catch {}
    textureLoader.load(url,image=>{
      pendingCovers.delete(item.id);image.colorSpace=T.SRGBColorSpace;coverCache.set(item.id,image);
      const inUse=new Set(slots.map(slot=>slot.mesh.userData.item?.id));
      for(const [id,texture] of coverCache){if(coverCache.size<=20)break;if(!inUse.has(id)){texture.dispose();coverCache.delete(id);}}
      updateRack();schedule();
    },undefined,()=>{pendingCovers.delete(item.id);failedCovers.add(item.id);});
  }
  function updateRack(){
    const count=rackEntries.length;
    const maxStart=count?Math.floor((count-1)/slots.length)*slots.length:0;
    rackStart=clamp(rackStart,0,maxStart);
    slots.forEach(({volume,mesh},index)=>{
      const row=Math.floor(index/5),col=index%5;
      const item=rackEntries[rackStart+col*2+row],image=item?(coverCache.get(item.id)||null):null;
      volume.visible=!!item;mesh.userData.item=item;
      if(mesh.material.map!==image){mesh.material.map=image;mesh.material.color.set(image?'#ffffff':'#e6ded0');mesh.material.needsUpdate=true;}
      if(item&&!image)loadCover(item);
    });
    document.querySelector('#rack-count').textContent=count?`${rackStart+1}–${Math.min(rackStart+slots.length,count)} / ${count}`:'没有作品';
    document.querySelector('#rack-prev').disabled=rackStart===0;
    document.querySelector('#rack-next').disabled=rackStart+slots.length>=count;
  }
  function moveRack(step){
    const count=rackEntries.length,maxStart=count?Math.floor((count-1)/slots.length)*slots.length:0;
    const next=clamp(rackStart+step*slots.length,0,maxStart);
    if(next===rackStart){slideOffset=0;schedule();return;}
    rackStart=next;slideOffset=reduceMotion?0:Math.sign(step)*.3;updateRack();schedule();
  }
  function coverAt(e){const ray=new T.Raycaster();ray.setFromCamera(new T.Vector2(e.clientX/innerWidth*2-1,-e.clientY/innerHeight*2+1),camera);return ray.intersectObjects(books.children,true).find(hit=>hit.object.userData.item);}
  function dolly(distance){
    const direction=new T.Vector3();camera.getWorldDirection(direction);direction.y=0;direction.normalize();
    camera.position.x=clamp(camera.position.x+direction.x*distance,-3.45,3.45);
    camera.position.z=clamp(camera.position.z+direction.z*distance,-2.9,3.45);schedule();
  }
  function orient(){camera.rotation.order='YXZ';camera.rotation.y=yaw;camera.rotation.x=pitch;}
  function disposeGroup(group){while(group.children.length){const child=group.children.pop();child.geometry.dispose();child.parent=null;}}
  function render(){
    queued=false; const w=innerWidth,h=innerHeight; renderer.setSize(w,h,false);
    if(!(drag&&drag.onCover)&&Math.abs(slideOffset)>.001){slideOffset*=.76;if(Math.abs(slideOffset)<.001)slideOffset=0;schedule();}
    books.position.x=slideOffset;
    camera.aspect=w/h;camera.updateProjectionMatrix();orient(); renderer.autoClear=true;
    if(composer){if(w!==renderWidth||h!==renderHeight){composer.setSize(w,h);renderWidth=w;renderHeight=h;}composer.render();}
    else renderer.render(scene,camera);
    if(looking)return;
    overlayCam.left=-w/2;overlayCam.right=w/2;overlayCam.top=h/2;overlayCam.bottom=-h/2;overlayCam.updateProjectionMatrix();
    disposeGroup(shelfGroup);
    const area=document.querySelector('#shelves').getBoundingClientRect(), rows=new Map();
    for(const book of document.querySelectorAll('.book')){const r=book.getBoundingClientRect();if(!rows.has(Math.round(r.top)))rows.set(Math.round(r.top),book);}
    for(const book of rows.values()){
      const r=book.querySelector('.book-cover').getBoundingClientRect();if(r.bottom < -30 || r.bottom > h+30)continue;
      const shelf=new T.Mesh(new T.BoxGeometry(area.width+34,14,38),oak);shelf.position.set(area.left+area.width/2-w/2,h/2-r.bottom-6,0);shelfGroup.add(shelf);
    }
    renderer.autoClear=false;renderer.clearDepth();renderer.render(overlay,overlayCam);renderer.autoClear=true;
  }
  function schedule(){if(!queued){queued=true;requestAnimationFrame(render);}}
  function setLooking(value){looking=value;rack.visible=value;document.documentElement.classList.toggle('looking',value);document.documentElement.classList.toggle('has-studio',value);document.querySelector('#look-controls').hidden=!value;document.querySelector('#mode-2d').setAttribute('aria-pressed',String(!value));document.querySelector('#mode-3d').setAttribute('aria-pressed',String(value));if(!value){yaw=0;pitch=.12;}schedule();}
  canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();setLooking(false);dispatchEvent(new Event('studio-unavailable'));});
  document.querySelector('#look-exit').addEventListener('click',()=>setLooking(false));
  document.querySelector('#look-left').addEventListener('click',()=>{yaw=clamp(yaw+.35,-Math.PI/2,Math.PI/2);schedule();});
  document.querySelector('#look-right').addEventListener('click',()=>{yaw=clamp(yaw-.35,-Math.PI/2,Math.PI/2);schedule();});
  document.querySelector('#look-near').addEventListener('click',()=>dolly(.8));
  document.querySelector('#look-far').addEventListener('click',()=>dolly(-.8));
  document.querySelector('#rack-prev').addEventListener('click',()=>moveRack(-1));
  document.querySelector('#rack-next').addEventListener('click',()=>moveRack(1));
  canvas.addEventListener('pointerdown',e=>{if(!looking)return;drag={x:e.clientX,y:e.clientY,startX:e.clientX,startY:e.clientY,moved:false,onCover:!!coverAt(e)};canvas.setPointerCapture(e.pointerId);});
  canvas.addEventListener('pointermove',e=>{
    if(!drag)return;drag.moved ||= Math.hypot(e.clientX-drag.startX,e.clientY-drag.startY)>5;
    if(drag.onCover){if(drag.moved)slideOffset=clamp((e.clientX-drag.startX)*.004,-.5,.5);}
    else {yaw=clamp(yaw+(e.clientX-drag.x)*.005,-Math.PI/2,Math.PI/2);pitch=clamp(pitch+(e.clientY-drag.y)*.003,-.4,.4);}
    drag.x=e.clientX;drag.y=e.clientY;schedule();
  });
  canvas.addEventListener('pointerup',e=>{
    if(!drag)return;
    if(drag.onCover&&drag.moved){const dx=e.clientX-drag.startX;if(Math.abs(dx)>25)moveRack(-Math.sign(dx));else slideOffset=0;}
    else if(!drag.moved){const hit=coverAt(e);if(hit)dispatchEvent(new CustomEvent('open-gallery-item',{detail:hit.object.userData.item}));}
    drag=null;schedule();
  });
  canvas.addEventListener('pointercancel',()=>{drag=null;slideOffset=0;schedule();});
  let wheelDistance=0,wheelReset;
  canvas.addEventListener('wheel',e=>{
    if(!looking)return;e.preventDefault();
    const delta=(Math.abs(e.deltaX)>Math.abs(e.deltaY)?e.deltaX:e.deltaY)*(e.deltaMode===1?16:1);
    if(coverAt(e)){
      wheelDistance+=delta;const steps=Math.trunc(wheelDistance/80);
      if(steps){moveRack(Math.sign(steps));wheelDistance=0;}
      clearTimeout(wheelReset);wheelReset=setTimeout(()=>{wheelDistance=0;},180);
    } else {wheelDistance=0;dolly(clamp(-delta*.008,-1,1));}
  },{passive:false});
  addEventListener('keydown',e=>{if(looking&&e.key==='Escape'&&!document.querySelector('#detail').open)setLooking(false);});
  addEventListener('resize',schedule);addEventListener('scroll',schedule,{passive:true});addEventListener('gallery-layout',schedule);
  if((navigator.deviceMemory||8)>=6 && (navigator.hardwareConcurrency||8)>=4){
    Promise.all([
      import('https://cdn.jsdelivr.net/npm/three@0.170.0/examples/jsm/postprocessing/EffectComposer.js'),
      import('https://cdn.jsdelivr.net/npm/three@0.170.0/examples/jsm/postprocessing/RenderPass.js'),
      import('https://cdn.jsdelivr.net/npm/three@0.170.0/examples/jsm/postprocessing/SSAOPass.js'),
      import('https://cdn.jsdelivr.net/npm/three@0.170.0/examples/jsm/postprocessing/OutputPass.js')
    ]).then(([{EffectComposer},{RenderPass},{SSAOPass},{OutputPass}])=>{
      composer=new EffectComposer(renderer);composer.addPass(new RenderPass(scene,camera));
      const ao=new SSAOPass(scene,camera,innerWidth,innerHeight);ao.kernelRadius=8;ao.minDistance=.003;ao.maxDistance=.12;
      composer.addPass(ao);composer.addPass(new OutputPass());schedule();
    }).catch(()=>{});
  }
  import('https://cdn.jsdelivr.net/npm/three@0.170.0/examples/jsm/loaders/GLTFLoader.js').then(({GLTFLoader})=>{
    const loader=new GLTFLoader();
    const details={lamp:false,chair:false};
    function refreshFallback(){deskGroup.children.forEach(o=>{
      o.visible=(o.name.includes('stool')&&!details.chair)||(o.name.includes('lamp')&&!details.lamp);
    });}
    function installDesk(gltf, generated){
      const model=gltf.scene;
      if(generated){
        const bounds=new T.Box3().setFromObject(model), size=bounds.getSize(new T.Vector3());
        const center=bounds.getCenter(new T.Vector3()), scale=1.8/size.y;
        model.scale.setScalar(scale);
        model.position.set(3.8-center.x*scale,-bounds.min.y*scale,-1.7-center.z*scale);
        refreshFallback();
        canvas.dataset.desk='hunyuan';
      }else{
        model.position.set(3.8,0,-1.7);deskGroup.visible=false;canvas.dataset.desk='blender';
      }
      model.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;}});
      room.add(model);schedule();
    }
    loader.load('./assets/hunyuan-desk-web.glb',gltf=>installDesk(gltf,true),undefined,
      ()=>loader.load('./assets/artist-desk.glb',gltf=>installDesk(gltf,false),undefined,()=>{}));
    function detail(name,height,x,y,z,rotation,onReady){
      loader.load(`./assets/polyhaven/${name}/${name}.gltf`,gltf=>{
        const object=gltf.scene, bounds=new T.Box3().setFromObject(object), size=bounds.getSize(new T.Vector3());
        if(!size.y)return;
        const center=bounds.getCenter(new T.Vector3()),scale=height/size.y;
        object.scale.setScalar(scale);object.position.set(x-center.x*scale,y-bounds.min.y*scale,z-center.z*scale);
        object.rotation.y=rotation;object.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;}});
        room.add(object);onReady?.();schedule();
      },undefined,()=>{});
    }
    detail('desk_lamp_arm_01',.72,3.07,1.05,-2.06,.35,()=>{details.lamp=true;if(canvas.dataset.desk==='hunyuan')refreshFallback();});
    detail('painted_wooden_chair_02',.94,3.16,0,.02,-.25,()=>{details.chair=true;if(canvas.dataset.desk==='hunyuan')refreshFallback();});
    detail('ceramic_vase_01',.32,-4.75,1.16,-2.7,.15);
    detail('potted_plant_02',1.35,-4.6,0,-2.3,.25,()=>{plantFallback.visible=false;});
  }).catch(()=>{});
  updateRack();
  return {enter:()=>setLooking(true),exit:()=>setLooking(false),setEntries:list=>{rackEntries=list;rackStart=0;slideOffset=0;updateRack();schedule();}};
}
