<template>
  <div class="home">
    <section class="intro">
      <img
        src="https://avatars.githubusercontent.com/u/139529375?v=4"
        alt="Profile"
        class="profile-pic floating"
      />
      <div class="intro-text">&gt; An undergrad CS student who loves building good software and hardware.</div>
    </section>

    <p class="tagline">
      Hey, I’m just someone who enjoys creating cool things using tech. I tinker with devices, write code, and try to make life easier with my builds.
    </p>

    <section class="skills">
      <span class="skill-pill"><i class="fab fa-linux" style="color:#fff200"></i> Linux</span>
      <span class="skill-pill"><i class="fab fa-docker" style="color:#2496ed"></i> Docker</span>
      <span class="skill-pill"><i class="fab fa-python" style="color:#3776ab"></i> Django</span>
      <span class="skill-pill"><i class="fas fa-bolt" style="color:#009688"></i> FastAPI</span>
      <span class="skill-pill"><i class="fab fa-aws" style="color:#ff9900"></i> AWS</span>
      <span class="skill-pill"><i class="fas fa-link" style="color:#1f1f1f"></i> Ngrok</span>
      <span class="skill-pill"><i class="fas fa-database" style="color:#336791"></i> PostgreSQL</span>
      <span class="skill-pill"><i class="fas fa-database" style="color:#00758f"></i> MySQL</span>
      <span class="skill-pill"><i class="fas fa-leaf" style="color:#47a248"></i> MongoDB</span>
      <span class="skill-pill"><i class="fab fa-git-alt" style="color:#f34f29"></i> Git</span>
      <span class="skill-pill"><i class="fas fa-video" style="color:#5c3ee8"></i> OpenCV</span>
      <span class="skill-pill"><i class="fas fa-cubes" style="color:#ffb300"></i> LangChain</span>
      <span class="skill-pill"><i class="fas fa-chart-bar" style="color:#150458"></i> Pandas</span>
      <span class="skill-pill"><i class="fas fa-superscript" style="color:#4b8bbe"></i> Numpy</span>
      <span class="skill-pill"><i class="fas fa-brain" style="color:#f7931e"></i> Scikit-Learn</span>
      <span class="skill-pill"><i class="fas fa-cloud" style="color:#00bcd4"></i> RESTful API</span>
      <span class="skill-pill"><i class="fas fa-robot" style="color:#e91e63"></i> LLM</span>
      <span class="skill-pill"><i class="fab fa-openai" style="color:#10a37f"></i> OpenAI</span>
      <span class="skill-pill"><i class="fab fa-vuejs" style="color:#42b883"></i> Vue.js</span>
      <span class="skill-pill"><i class="fab fa-html5" style="color:#e34c26"></i> HTML</span>
      <span class="skill-pill"><i class="fab fa-css3-alt" style="color:#2965f1"></i> CSS</span>
      <span class="skill-pill"><i class="fas fa-terminal" style="color:#43a047"></i> Bash Scripting</span>
      <span class="skill-pill"><i class="fas fa-flask" style="color:#ff6c37"></i> Postman</span>
      <span class="skill-pill"><i class="fas fa-project-diagram" style="color:#00bcd4"></i> SDLC</span>
      <span class="skill-pill"><i class="fas fa-running" style="color:#43a047"></i> Agile</span>
      <span class="skill-pill"><i class="fab fa-github" style="color:#fff"></i> CI Github</span>
    </section>

    <section class="timeline">
      <div class="meteor-bg">
        <div v-for="n in 6" :key="n" class="meteor" :style="meteorStyle(n)"></div>
      </div>
      <div class="timeline-container">
        <div
          v-for="(item, idx) in timeline"
          :key="item.year"
          class="timeline-item"
          :class="{ active: activeTimeline === idx }"
          @click="handleTimelineClick(idx)"
          tabindex="0"
          @keydown.enter="handleTimelineClick(idx)"
        >
          <div class="timeline-dot"></div>
          <div class="timeline-content">{{ item.label }}</div>
          <transition name="timeline-fade-slide">
            <div
              v-if="activeTimeline === idx"
              class="timeline-desc minimal-desc"
            >
              {{ item.desc }}
            </div>
          </transition>
        </div>
      </div>
    </section>

    <section class="current-focus">
      <div class="focus-cards">
        <div class="focus-card">
          <i class="fas fa-brain"></i>
          <div class="focus-title">AI & ML Projects</div>
          <div class="focus-desc">Building and deploying machine learning models, exploring LLMs, and automating real-world tasks.</div>
        </div>
        <div class="focus-card">
          <i class="fas fa-server"></i>
          <div class="focus-title">Backend Systems</div>
          <div class="focus-desc">Designing scalable APIs, working with databases, and optimizing server-side performance.</div>
        </div>
        <div class="focus-card">
          <i class="fas fa-microchip"></i>
          <div class="focus-title">Hardware & IoT</div>
          <div class="focus-desc">Integrating hardware with software, tinkering with microcontrollers, and building IoT solutions.</div>
        </div>
        <div class="focus-card">
          <i class="fas fa-users"></i>
          <div class="focus-title">Collaboration</div>
          <div class="focus-desc">Open to teaming up on innovative ideas, hackathons, and freelance opportunities.</div>
        </div>
      </div>
    </section>

    <section class="contact-pitch">
      <span>
        If you want me to work for your ideas &rarr; to deployed solution, then <a href="mailto:sahilnayak@example.com" class="contact-link">contact me</a>.
      </span>
    </section>

    
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const timeline = [
  {
    year: 2020,
    label: '2020 - Get into Tech',
    desc: 'During the COVID lockdown, I started exploring the tech world.',
  },
  {
    year: 2021,
    label: '2021 - Learned Django',
    desc: 'Learned Python and began building websites using Django.',
  },
  {
    year: 2022,
    label: '2022 - Explore more in web app',
    desc: 'Discovered new development tools and frameworks.',
  },
  {
    year: 2023,
    label: '2023 - Get into Uni',
    desc: 'Joined university, participated in coding events and hackathons.',
  },
  {
    year: 2024,
    label: '2024 - Explore AI and ML',
    desc: 'Studied classic ML algorithms, EDA, and ML pipelines.',
  },
  {
    year: 2025,
    label: '2025 - Done two internship',
    desc: 'Worked as SDE-1 and in AI (computer vision); learned a lot, more to go.',
  },
]

const activeTimeline = ref(null)
const isMobile = ref(false)

function checkMobile() {
  isMobile.value = window.innerWidth <= 600
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', checkMobile)
})

// Meteor style generator for random animation
function meteorStyle(n) {
  const left = 10 + n * 12 + Math.random() * 10
  const delay = Math.random() * 3.5
  const duration = 1.8 + Math.random()
  return {
    left: `${left}%`,
    top: '-60px',
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
  }
}

// Timeline click handler for smooth open/close
function handleTimelineClick(idx) {
  activeTimeline.value = activeTimeline.value === idx ? null : idx
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');

.home {
  background: none;
  color: var(--text-color);
  font-family: 'Cascadia Code', monospace;
  min-height: 80vh;
  padding: 60px 20px 20px;
}

.intro {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
  text-align: center;
}

.profile-pic {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 2px solid var(--text-color);
  margin-bottom: 10px;
}

.floating {
  animation: float 3.5s ease-in-out infinite;
}

@keyframes float {
  0%   { transform: translateY(0); }
  50%  { transform: translateY(-18px); }
  100% { transform: translateY(0); }
}

.intro-text {
  font-size: 16px;
  color: rgba(255,255,255,0.7);
}

.tagline {
  font-size: 18px;
  margin-bottom: 20px;
  text-align: center;
  color: rgba(255,255,255,0.7);
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 28px;
  justify-content: center;
}

.skill-pill {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 5px 14px;
  border-radius: 999px;
  background: rgba(255,255,255,0.07);
  font-size: 13px;
  font-weight: 400;
  color: var(--text-color);
  box-shadow: 0 1px 6px 0 rgba(0,0,0,0.07);
  cursor: pointer;
  transition: 
    background 0.2s,
    transform 0.22s cubic-bezier(.4,0,.2,1),
    box-shadow 0.22s cubic-bezier(.4,0,.2,1);
  will-change: transform, box-shadow;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.skill-pill:hover,
.skill-pill:focus {
  background: rgba(255,255,255,0.18);
  transform: scale(1.09);
  box-shadow: 0 2px 16px 0 rgba(255,255,255,0.13);
}

.skill-pill i {
  font-size: 1em;
}

.timeline {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 40px 0;
  position: relative;
  min-height: 340px;
}

.timeline-container {
  position: relative;
  padding-left: 52px; /* was 48px */
  margin: 0 auto;
  width: 100%;
  max-width: 400px;
  z-index: 1;
}

.timeline-container::before {
  content: "";
  position: absolute;
  left: 36px; /* was 32px */
  top: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(to bottom, #fff2 0%, #fff 100%);
  border-radius: 2px;
}

.timeline-item {
  position: relative;
  margin-bottom: 36px;
  min-height: 32px;
  display: flex;
  align-items: center;
  cursor: pointer;
  z-index: 2;
  transition: background 0.35s cubic-bezier(.4,0,.2,1), box-shadow 0.35s cubic-bezier(.4,0,.2,1);
  will-change: background, box-shadow;
}

.timeline-dot {
  position: absolute;
  left: 28px;
  width: 16px;
  height: 16px;
  background: radial-gradient(circle at 60% 40%, #fffbe6 0%, #ffe082 60%, #ffd54f 100%);
  border: 2px solid #fffbe6;
  border-radius: 50%;
  box-shadow: 0 0 0 2px rgba(255,255,255,0.10);
  z-index: 2;
  transition:
    background 0.35s cubic-bezier(.4,0,.2,1),
    border-color 0.35s cubic-bezier(.4,0,.2,1),
    box-shadow 0.35s cubic-bezier(.4,0,.2,1),
    transform 0.35s cubic-bezier(.4,0,.2,1);
  will-change: background, border-color, box-shadow, transform;
}

.timeline-item.active .timeline-dot,
.timeline-item:hover .timeline-dot {
  background: radial-gradient(circle at 60% 40%, #fffde4 0%, #ffe082 60%, #ffd54f 100%);
  border-color: #fff;
  box-shadow:
    0 0 12px 4px #ffe08288,
    0 0 20px 8px #ffd54f44,
    0 0 0 4px rgba(255,255,255,0.10);
  transform: scale(1.13);
}

.timeline-content {
  margin-left: 52px;
  padding: 8px 16px;
  background: rgba(255,255,255,0.07);
  border-radius: 8px;
  color: var(--text-color);
  font-size: 15px;
  font-family: inherit;
  transition: background 0.35s cubic-bezier(.4,0,.2,1), color 0.35s cubic-bezier(.4,0,.2,1), transform 0.35s cubic-bezier(.4,0,.2,1), opacity 0.35s cubic-bezier(.4,0,.2,1);
  will-change: background, color, transform, opacity;
  opacity: 0.93;
}

.timeline-item.active .timeline-content,
.timeline-item:hover .timeline-content {
  background: rgba(255,255,255,0.15);
  transform: scale(1.04);
  opacity: 1;
}

.timeline-desc {
  margin-left: 52px;
  margin-top: 8px;
  background: rgba(255,255,255,0.12);
  color: #fff;
  border-radius: 8px;
  font-size: 14px;
  padding: 10px 16px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.08);
  animation: fadeInDesc 0.45s cubic-bezier(.4,0,.2,1);
  opacity: 0;
  transform: translateY(16px) scale(0.98);
  transition: opacity 0.45s cubic-bezier(.4,0,.2,1), transform 0.45s cubic-bezier(.4,0,.2,1);
  will-change: opacity, transform;
}

.timeline-desc.minimal-desc {
  margin-left: 52px;
  margin-top: 14px;
  background: rgba(255,255,255,0.13);
  color: #e3e3e3;
  border-radius: 12px;
  font-size: 15px;
  padding: 18px 28px 18px 24px;
  box-shadow: 0 4px 18px 0 rgba(0,0,0,0.10);
  font-family: 'Cascadia Code', monospace;
  font-weight: 400;
  line-height: 2.1;
  letter-spacing: 0.01em;
  min-height: 38px;
  opacity: 1;
  border: 1.5px solid rgba(255,255,255,0.13);
  backdrop-filter: blur(2.5px);
  transition: 
    background 0.45s cubic-bezier(.4,0,.2,1), 
    color 0.45s cubic-bezier(.4,0,.2,1),
    padding 0.45s cubic-bezier(.4,0,.2,1),
    margin 0.45s cubic-bezier(.4,0,.2,1),
    box-shadow 0.45s cubic-bezier(.4,0,.2,1);
}

.timeline-fade-slide-enter-active,
.timeline-fade-slide-leave-active {
  transition: 
    opacity 0.55s cubic-bezier(.4,0,.2,1), 
    transform 0.55s cubic-bezier(.4,0,.2,1);
}
.timeline-fade-slide-enter-from,
.timeline-fade-slide-leave-to {
  opacity: 0;
  transform: translateY(28px) scale(0.97);
}
.timeline-fade-slide-enter-to,
.timeline-fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}

@keyframes fadeInDesc {
  from { opacity: 0; transform: translateY(16px) scale(0.98);}
  to { opacity: 1; transform: translateY(0) scale(1);}
}

/* Meteor background for timeline */
.meteor-bg {
  position: absolute;
  left: 0; right: 0; top: 0; bottom: 0;
  pointer-events: none;
  z-index: 0;
  overflow: visible;
  width: 100%;
  height: 100%;
}

.meteor {
  position: absolute;
  width: 2px;
  height: 60px;
  background: linear-gradient(180deg, #fff 0%, #fff0 100%);
  opacity: 0.7;
  border-radius: 2px;
  animation: meteor-move-vertical linear forwards;
  animation-iteration-count: infinite;
}

@keyframes meteor-move-vertical {
  0% { transform: translateY(0) scaleY(0.7); opacity: 0.7; }
  10% { opacity: 1; }
  100% { transform: translateY(90vh) scaleY(1); opacity: 0; }
}

/* Responsive timeline for mobile */
@media (max-width: 600px) {
  .timeline {
    margin: 24px 0;
    min-height: 220px;
    width: 100%;
    overflow-x: visible;
  }
  .timeline-container {
    width: 100%;
    padding-left: 14px;
    box-sizing: border-box;
  }
  .timeline-content,
  .timeline-desc {
    margin-left: 14px;
    font-size: 12px;
    padding: 6px 8px;
    word-break: break-word;
  }
  .timeline-dot {
    left: 0px;
    width: 12px;
    height: 12px;
  }
  .timeline-container::before {
    left: 4px;
    width: 2px;
  }
  .meteor-bg {
    overflow: visible;
  }
}

.current-focus {
  margin: 40px 0;
}

.focus-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
}

.focus-card {
  background: rgba(255,255,255,0.07);
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}

.focus-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.focus-title {
  font-size: 16px;
  font-weight: 500;
  color: var(--text-color);
}

.focus-desc {
  font-size: 14px;
  color: rgba(255,255,255,0.8);
}

.contact-pitch {
  text-align: center;
  margin: 36px 0 18px 0;
  font-size: 16px;
  color: rgba(255,255,255,0.75);
  letter-spacing: 0.01em;
  opacity: 0;
  transform: translateY(24px);
  animation: contact-fade-in 1.1s cubic-bezier(.4,0,.2,1) 0.3s forwards;
}

@keyframes contact-fade-in {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.contact-link {
  color: #ffe082;
  text-decoration: none;
  position: relative;
  transition: color 0.2s;
}

.contact-link::after {
  content: "";
  display: block;
  position: absolute;
  left: 0; right: 0; bottom: -2px;
  height: 2px;
  background: #ffd54f;
  border-radius: 2px;
  transform: scaleX(0);
  transition: transform 0.4s cubic-bezier(.4,0,.2,1);
  transform-origin: left;
}

.contact-link:hover {
  color: #ffd54f;
}

.contact-link:hover::after {
  transform: scaleX(1);
}
</style>
