// The room is built from real meshes. The flat room image is only the non-WebGL fallback.
export function startStudio(T, entries) {
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
  const camera = new T.PerspectiveCamera(59, innerWidth / innerHeight, .05, 80);
  camera.position.set(0, 1.65, 3.3);
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
  const lampLight=new T.PointLight('#ffce92',28,8);lampLight.position.set(3.1,2.65,-1.3);scene.add(lampLight);
  // Architectural shell, visible across a 270-degree turn.
  box(scene,'floor',0,-.1,0,11,.2,11,floor);
  box(scene,'back wall',0,2.4,-5.4,11,4.8,.2,plaster);
  box(scene,'left wall below window',-5.5,.52,0,.2,1.04,11,plaster);
  box(scene,'left wall above window',-5.5,4.5,0,.2,.6,11,plaster);
  box(scene,'left wall by window',-5.5,2.62,-4.3,.2,3.16,2.4,plaster);
  box(scene,'left wall by entrance',-5.5,2.62,3.45,.2,3.16,4.1,plaster);
  box(scene,'right wall',5.5,2.4,0,.2,4.8,11,plaster);
  box(scene,'front wall',0,2.4,5.5,11,4.8,.2,plaster);
  const ceiling=box(scene,'ceiling',0,4.85,0,11,.12,11,cream);ceiling.castShadow=false;
  for(const x of [-4.8,-2.4,0,2.4,4.8])box(scene,'ceiling beam',x,4.65,0,.18,.25,11,oak);
  for(const z of [-5.22,5.25])box(scene,'baseboard',0,.16,z,11,.28,.12,paleOak);
  for(const x of [-5.32,5.32])box(scene,'baseboard',x,.16,0,.12,.28,11,paleOak);
  // Left window: layered frame, glass and depth behind a mullioned opening.
  const glazing=new T.MeshPhysicalMaterial({color:'#e5f0e6',transparent:true,opacity:.18,roughness:.06,metalness:0,side:T.DoubleSide,depthWrite:false});
  box(scene,'window glass',-5.35,2.65,-.9,.02,3,4.3,glazing);
  const sky=mat('#cbd8c4');box(scene,'garden distance',-9,2.8,-.9,.05,6,9,sky);
  for(let i=0;i<20;i++){
    const z=-5+random()*9, x=-7.1-random()*1.1, y=.6+random()*2.6;
    const leaves=sphere(scene,'garden foliage',x,y,z,.45+random()*.55,.4+random()*.6,.5+random()*.45,green);leaves.rotation.y=random()*Math.PI;
  }
  box(scene,'window sill',-5.05,1.1,-.9,.65,.13,4.7,oak);
  for(const z of [-3.15,-2,-.9,.2,1.35])box(scene,'window vertical',-5.18,2.65,z,.16,3.2,.1,oak);
  for(const y of [1.05,2.05,3.1,4.2])box(scene,'window horizontal',-5.18,y,-.9,.16,.12,4.7,oak);
  const greenery=[[-3.9,1.45,-2.7],[-3.8,1.8,-2.4],[-3.9,2,-2.9],[-3.85,1.7,-3.2]];
  const plantFallback=new T.Group();scene.add(plantFallback);
  cylinder(plantFallback,'vase',-4,1.35,-2.8,.17,.23,.48,ceramic);
  for(const [x,y,z] of greenery){const stem=cylinder(plantFallback,'stem',x,y,z,.014,.014,.8,dark);stem.rotation.z=(x+4)*.8;const leaf=sphere(plantFallback,'leaf',x,y+.38,z,.21,.08,.12,green);leaf.rotation.z=.5;}
  // Procedural fallback, replaced by the editable Blender asset when it loads.
  const deskGroup=new T.Group();scene.add(deskGroup);
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
  box(scene,'tool rail',5.35,2.75,-2.0,.12,.13,3.0,oak);
  for(let i=0;i<7;i++){const z=-3.2+i*.4;cylinder(scene,'peg',5.2,2.68,z,.035,.035,.15,metal);const tool=box(scene,'hanging tool',5.18,2.43,z,.025,.42,.035,i%2?dark:metal);tool.rotation.x=.08;}
  for(let i=0;i<3;i++){const study=box(scene,'pinned paper',5.35,2.0,-3.6+i*.52,.02,.55,.4,paper);study.rotation.x=(i-1)*.05;}
  // A separate physical magazine rack appears when looking around.
  const rack=new T.Group(); scene.add(rack); rack.visible=false;
  for(let row=0;row<2;row++){
    const y=2.9-row*1.35;
    box(rack,'shelf',0,y-.57,-5.0,5.8,.12,.55,oak);
    for(let col=0;col<5;col++){
      const x=(col-2)*1.1;
      box(rack,'book pages',x,y,-4.84,.9,1.1,.13,paper);
      const mesh=new T.Mesh(new T.PlaneGeometry(.88,1.08),new T.MeshStandardMaterial({color:'#e6ded0',roughness:.9}));
      mesh.position.set(x,y,-4.76); rack.add(mesh);
      const item=entries[row*5+col];
      if(item){mesh.userData.item=item;new T.TextureLoader().load(item.images[0],image=>{image.colorSpace=T.SRGBColorSpace;mesh.material.map=image;mesh.material.color.set('#ffffff');mesh.material.needsUpdate=true;render();},undefined,()=>{});}
    }
  }
  let looking=false,yaw=0,pitch=.12,drag=null,queued=false,composer=null,renderWidth=0,renderHeight=0;
  const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
  function orient(){camera.rotation.order='YXZ';camera.rotation.y=yaw;camera.rotation.x=pitch;}
  function disposeGroup(group){while(group.children.length){const child=group.children.pop();child.geometry.dispose();child.parent=null;}}
  function render(){
    queued=false; const w=innerWidth,h=innerHeight; renderer.setSize(w,h,false);
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
  document.querySelector('#look-left').addEventListener('click',()=>{yaw=clamp(yaw+.35,-Math.PI*.75,Math.PI*.75);schedule();});
  document.querySelector('#look-right').addEventListener('click',()=>{yaw=clamp(yaw-.35,-Math.PI*.75,Math.PI*.75);schedule();});
  canvas.addEventListener('pointerdown',e=>{if(!looking)return;drag={x:e.clientX,y:e.clientY,startX:e.clientX,startY:e.clientY,moved:false};canvas.setPointerCapture(e.pointerId);});
  canvas.addEventListener('pointermove',e=>{if(!drag)return;yaw=clamp(yaw+(e.clientX-drag.x)*.005,-Math.PI*.75,Math.PI*.75);pitch=clamp(pitch+(e.clientY-drag.y)*.003,-.4,.4);drag.moved ||= Math.hypot(e.clientX-drag.startX,e.clientY-drag.startY)>5;drag.x=e.clientX;drag.y=e.clientY;schedule();});
  canvas.addEventListener('pointerup',e=>{if(drag&&!drag.moved){const ray=new T.Raycaster();ray.setFromCamera(new T.Vector2(e.clientX/innerWidth*2-1,-e.clientY/innerHeight*2+1),camera);const hit=ray.intersectObjects(rack.children).find(o=>o.object.userData.item);if(hit)dispatchEvent(new CustomEvent('open-gallery-item',{detail:hit.object.userData.item}));}drag=null;});canvas.addEventListener('pointercancel',()=>{drag=null;});
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
      scene.add(model);schedule();
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
        scene.add(object);onReady?.();schedule();
      },undefined,()=>{});
    }
    detail('desk_lamp_arm_01',.72,3.07,1.05,-2.06,.35,()=>{details.lamp=true;if(canvas.dataset.desk==='hunyuan')refreshFallback();});
    detail('painted_wooden_chair_02',.94,3.16,0,.02,-.25,()=>{details.chair=true;if(canvas.dataset.desk==='hunyuan')refreshFallback();});
    detail('ceramic_vase_01',.32,-4.75,1.16,-2.7,.15);
    detail('potted_plant_02',1.35,-4.6,0,-2.3,.25,()=>{plantFallback.visible=false;});
  }).catch(()=>{});
  return {enter:()=>setLooking(true),exit:()=>setLooking(false)};
}
