import { Canvas, extend, useFrame } from "@react-three/fiber"
import { useMemo, useRef, useState, useEffect } from "react"
import * as THREE from "three"
import { Button } from "@/components/ui/button"

extend(THREE as unknown as Record<string, unknown>)

const Scene = () => {
  const meshRef = useRef<THREE.Mesh>(null)

  const material = useMemo(() => {
    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `

    const fragmentShader = `
      uniform vec2 uPointer;
      uniform float uTime;
      uniform vec2 uResolution;
      varying vec2 vUv;

      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(
          mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
          mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
          u.y
        );
      }

      float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.5;
        for (int i = 0; i < 5; i++) {
          v += a * noise(p);
          p *= 2.0;
          a *= 0.5;
        }
        return v;
      }

      float hexGrid(vec2 uv, float scale) {
        uv *= scale;
        vec2 r = vec2(1.0, 1.732);
        vec2 h = r * 0.5;
        vec2 a = mod(uv, r) - h;
        vec2 b = mod(uv - h, r) - h;
        vec2 gv = length(a) < length(b) ? a : b;
        float d = max(abs(gv.x), abs(gv.y * 0.577 + abs(gv.x) * 0.5));
        return smoothstep(0.45, 0.4, d);
      }

      float shieldShape(vec2 uv) {
        uv.y -= 0.05;
        float top = smoothstep(0.35, 0.34, length(uv * vec2(1.0, 0.85)));
        float bottom = smoothstep(0.0, 0.01, uv.y + 0.25 - abs(uv.x) * 0.8);
        return top * bottom;
      }

      void main() {
        vec2 uv = vUv;
        vec2 centeredUv = (uv - 0.5) * 2.0;
        centeredUv += uPointer * 0.05;

        vec3 bgColor = vec3(0.02, 0.04, 0.08);

        float grid = hexGrid(uv + uPointer * 0.02, 12.0);
        float gridPulse = sin(uTime * 0.5 + uv.y * 6.0) * 0.5 + 0.5;
        vec3 gridColor = vec3(0.05, 0.15, 0.4) * grid * gridPulse * 0.3;

        float n = fbm(uv * 3.0 + uTime * 0.1);
        float n2 = fbm(uv * 5.0 - uTime * 0.15 + 100.0);
        vec3 cloudColor = vec3(0.0, 0.1, 0.3) * n * 0.4 + vec3(0.0, 0.05, 0.2) * n2 * 0.3;

        float shield = shieldShape(centeredUv);
        float shieldEdge = shieldShape(centeredUv) - shieldShape(centeredUv * 1.08);
        float shieldPulse = sin(uTime * 1.5) * 0.3 + 0.7;
        vec3 shieldColor = vec3(0.1, 0.4, 1.0) * shieldEdge * 2.0 * shieldPulse;
        shieldColor += vec3(0.05, 0.15, 0.5) * shield * 0.15;

        float lockBody = smoothstep(0.08, 0.07, max(abs(centeredUv.x) - 0.06, abs(centeredUv.y + 0.02) - 0.05));
        float lockArc = smoothstep(0.06, 0.05, abs(length(vec2(centeredUv.x, max(centeredUv.y - 0.03, 0.0))) - 0.05));
        lockArc *= step(0.03, centeredUv.y);
        float lock = max(lockBody, lockArc) * shield;
        vec3 lockColor = vec3(0.2, 0.6, 1.0) * lock * shieldPulse;

        float ring1 = abs(length(centeredUv) - 0.55 - sin(uTime * 0.3) * 0.02);
        ring1 = smoothstep(0.008, 0.0, ring1);
        float ring2 = abs(length(centeredUv) - 0.65 - cos(uTime * 0.4) * 0.02);
        ring2 = smoothstep(0.004, 0.0, ring2);

        float angle = atan(centeredUv.y, centeredUv.x);
        float ringDash1 = step(0.0, sin(angle * 20.0 + uTime * 2.0));
        float ringDash2 = step(0.0, sin(angle * 30.0 - uTime * 1.5));

        vec3 ringColor = vec3(0.1, 0.3, 0.8) * ring1 * ringDash1 + vec3(0.05, 0.2, 0.6) * ring2 * ringDash2;

        for (float i = 0.0; i < 6.0; i++) {
          float a = i * 1.0472 + uTime * 0.2;
          vec2 dir = vec2(cos(a), sin(a));
          float line = abs(dot(centeredUv, vec2(-dir.y, dir.x)));
          float mask = smoothstep(0.55, 0.7, length(centeredUv));
          line = smoothstep(0.003, 0.0, line) * mask * smoothstep(1.0, 0.55, length(centeredUv));
          ringColor += vec3(0.05, 0.15, 0.4) * line * 0.5;
        }

        float scanLine = sin(uv.y * 400.0 + uTime * 3.0) * 0.015;

        float particleField = 0.0;
        for (float i = 0.0; i < 15.0; i++) {
          vec2 pos = vec2(
            hash(vec2(i, 0.0)) * 2.0 - 1.0,
            hash(vec2(0.0, i)) * 2.0 - 1.0
          );
          pos += vec2(sin(uTime * 0.5 + i), cos(uTime * 0.3 + i * 1.5)) * 0.3;
          float d = length(centeredUv - pos);
          particleField += smoothstep(0.02, 0.0, d) * 0.5;
        }
        vec3 particleColor = vec3(0.2, 0.5, 1.0) * particleField;

        float vignette = 1.0 - length(centeredUv) * 0.5;
        vignette = clamp(vignette, 0.0, 1.0);

        vec3 color = bgColor + gridColor + cloudColor + shieldColor + lockColor + ringColor + particleColor + scanLine;
        color *= vignette;
        color = clamp(color, 0.0, 1.0);

        gl_FragColor = vec4(color, 1.0);
      }
    `

    return new THREE.ShaderMaterial({
      uniforms: {
        uPointer: { value: new THREE.Vector2(0, 0) },
        uTime: { value: 0 },
        uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      },
      vertexShader,
      fragmentShader,
    })
  }, [])

  useFrame(({ clock, pointer }) => {
    if (material.uniforms) {
      material.uniforms.uPointer.value.lerp(pointer, 0.05)
      material.uniforms.uTime.value = clock.getElapsedTime()
    }
  })

  return (
    <mesh ref={meshRef} scale={[3, 3, 1]} material={material}>
      <planeGeometry />
    </mesh>
  )
}

export const Hero3DWebGL = () => {
  const titleWords = ["KONFIT"]
  const subtitle = "Комплексные ИТ-решения для вашего бизнеса"
  const [visibleWords, setVisibleWords] = useState(0)
  const [subtitleVisible, setSubtitleVisible] = useState(false)
  const [delays, setDelays] = useState<number[]>([])
  const [subtitleDelay, setSubtitleDelay] = useState(0)
  const [buttonsVisible, setButtonsVisible] = useState(false)

  useEffect(() => {
    setDelays(titleWords.map(() => Math.random() * 0.07))
    setSubtitleDelay(Math.random() * 0.1)
  }, [titleWords.length])

  useEffect(() => {
    if (visibleWords < titleWords.length) {
      const timeout = setTimeout(() => setVisibleWords(visibleWords + 1), 600)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => setSubtitleVisible(true), 800)
      return () => clearTimeout(timeout)
    }
  }, [visibleWords, titleWords.length])

  useEffect(() => {
    if (subtitleVisible) {
      const timeout = setTimeout(() => setButtonsVisible(true), 1000)
      return () => clearTimeout(timeout)
    }
  }, [subtitleVisible])

  return (
    <div className="h-screen bg-[hsl(220,25%,5%)] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[hsl(220,25%,5%)] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[hsl(220,25%,5%)] to-transparent" />
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[hsl(220,25%,5%)] to-transparent" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[hsl(220,25%,5%)] to-transparent" />
      </div>

      <div className="h-screen uppercase items-center w-full absolute z-[60] pointer-events-none px-10 flex justify-center flex-col">
        <div className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold font-orbitron">
          <div className="flex space-x-2 lg:space-x-6 overflow-hidden text-white">
            {titleWords.map((word, index) => (
              <div
                key={index}
                className={index < visibleWords ? "fade-in" : ""}
                style={{
                  animationDelay: `${index * 0.13 + (delays[index] || 0)}s`,
                  opacity: index < visibleWords ? undefined : 0,
                }}
              >
                {word}
              </div>
            ))}
          </div>
        </div>
        <div className="text-xs md:text-xl xl:text-2xl 2xl:text-3xl mt-2 overflow-hidden text-white font-bold max-w-4xl mx-auto text-center px-4 normal-case">
          <div
            className={subtitleVisible ? "fade-in-subtitle" : ""}
            style={{
              animationDelay: `${titleWords.length * 0.13 + 0.2 + subtitleDelay}s`,
              opacity: subtitleVisible ? undefined : 0,
            }}
          >
            {subtitle}
          </div>
        </div>
        <div className="mt-4 md:mt-6 text-sm md:text-base text-blue-200/80 max-w-2xl text-center normal-case">
          <div
            className={subtitleVisible ? "fade-in-subtitle" : ""}
            style={{
              animationDelay: `${titleWords.length * 0.13 + 0.5 + subtitleDelay}s`,
              opacity: subtitleVisible ? undefined : 0,
            }}
          >
            Программное обеспечение · Серверное оборудование · Информационная безопасность · Сетевая инфраструктура
          </div>
        </div>
        {buttonsVisible && (
          <div className="mt-8 flex gap-4 pointer-events-auto fade-in" style={{ animationDelay: "0.2s" }}>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8"
              onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Оставить заявку
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white text-lg px-8 bg-transparent"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Каталог
            </Button>
          </div>
        )}
      </div>

      <Canvas
        flat
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: "high-performance",
        }}
        camera={{ position: [0, 0, 1] }}
        style={{ background: "hsl(220, 25%, 5%)" }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}

export default Hero3DWebGL