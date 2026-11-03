export const plasmaVertexShader = `
varying vec3 vNormal;
varying vec3 vPosition;
varying vec3 vWorld;
void main() {
  vNormal = normalize(normalMatrix * normal);
  vPosition = position;
  vec4 world = modelMatrix * vec4(position, 1.0);
  vWorld = world.xyz;
  gl_Position = projectionMatrix * viewMatrix * world;
}`;

export const plasmaFragmentShader = `
uniform float uTime;
uniform float uPulse;
uniform float uOpacity;
uniform float uViolet;
varying vec3 vNormal;
varying vec3 vPosition;
varying vec3 vWorld;

float hash(vec3 p) { return fract(sin(dot(p, vec3(127.1,311.7,74.7))) * 43758.5453); }
float noise(vec3 p) {
  vec3 i = floor(p), f = fract(p);
  f = f*f*(3.0-2.0*f);
  return mix(mix(mix(hash(i),hash(i+vec3(1,0,0)),f.x),mix(hash(i+vec3(0,1,0)),hash(i+vec3(1,1,0)),f.x),f.y),
             mix(mix(hash(i+vec3(0,0,1)),hash(i+vec3(1,0,1)),f.x),mix(hash(i+vec3(0,1,1)),hash(i+vec3(1,1,1)),f.x),f.y),f.z);
}
void main() {
  vec3 p = normalize(vPosition) * 3.0;
  float n1 = noise(p + vec3(0.0, uTime*.22, -uTime*.12));
  float n2 = noise(p*2.4 + vec3(uTime*.12, -uTime*.18, uTime*.1));
  float bands = sin((p.x + p.y*.7 + n1*2.2)*5.0 + uTime*1.8);
  float energy = smoothstep(-.35,.9,bands*.42 + n1*.72 + n2*.4);
  vec3 deep = vec3(.018,.045,.19);
  vec3 blue = vec3(.06,.34,.95);
  vec3 cyan = vec3(.18,.9,1.0);
  vec3 violet = vec3(.48,.18,.95);
  vec3 color = mix(deep, blue, energy);
  color = mix(color, violet, smoothstep(.35,.95,n2)*(.7 + uViolet*.2));
  color = mix(color, cyan, smoothstep(.66,1.0,energy+n2*.2) * (1.0 - uViolet*.42));
  color = mix(color, vec3(.62,.24,1.0), uViolet * .22);
  float fresnel = pow(1.0 - max(dot(normalize(vNormal), vec3(0.0,0.0,1.0)),0.0), 2.4);
  color += vec3(.15,.55,1.0) * fresnel * 1.8;
  float core = pow(max(0.0,1.0-length(vPosition)*.52),2.0);
  color += vec3(.08,.25,.9)*core*.7;
  color *= 1.0 + uPulse*.12;
  gl_FragColor = vec4(color, uOpacity);
}`;
