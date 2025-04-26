<template>
  <div class="home">
    <section class="intro">
      <img
        src="https://avatars.githubusercontent.com/u/139529375?v=4"
        alt="Profile"
        class="profile-pic"
      />
      <div class="intro-text">&gt; An undergrad CS student who loves building good software and hardware.</div>
    </section>

    <p class="tagline">
      Hey, I’m just someone who enjoys creating cool things using tech. I tinker with devices, write code, and try to make life easier with my builds.
    </p>

    <section class="skills">
      <div class="box"><i class="fab fa-python"></i> Python</div>
      <div class="box"><i class="fab fa-js-square"></i> JavaScript</div>
      <div class="box"><i class="fas fa-pepper-hot"></i> Flask</div>
      <div class="box"><i class="fab fa-vuejs"></i> Vue.js</div>
      <div class="box"><i class="fas fa-database"></i> PostgreSQL</div>
      <div class="box"><i class="fab fa-docker"></i> Docker</div>
    </section>

    <section class="timeline">
      <div class="timeline-entry">
        <div class="ascii-block">2020 - Started</div>
        <div class="timeline-line"></div>
        <div class="ascii-block">2021 - Learned JS</div>
        <div class="timeline-line"></div>
        <div class="ascii-block">2022 - First App</div>
        <div class="timeline-line"></div>
        <div class="ascii-block">2023 - Freelance</div>
        <div class="timeline-line"></div>
        <div class="ascii-block">2024 - Systems</div>
        <div class="timeline-line"></div>
        <div class="ascii-block">2025 - Hardware</div>
      </div>
    </section>

    <section class="post-list">
      <h3>Latest Blogs</h3>
      <div class="post-item">&gt; Understanding Flask Routing <span class="post-date">Jan 10, 2025</span></div>
      <div class="post-item">&gt; My Simple LLM Pipeline <span class="post-date">Feb 05, 2025</span></div>
      <div class="post-item">&gt; How I Track Plants with AI <span class="post-date">Mar 22, 2025</span></div>
      <div class="post-item">&gt; Trekking Tools I Coded <span class="post-date">Apr 02, 2025</span></div>

      <h3>Latest Projects</h3>
      <div class="post-item">&gt; Portfolio API in Flask <span class="post-date">Jan 20, 2025</span></div>
      <div class="post-item">&gt; Signboard Tracker <span class="post-date">Feb 14, 2025</span></div>
      <div class="post-item">&gt; Offline LLM Chatbot <span class="post-date">Mar 10, 2025</span></div>
      <div class="post-item">&gt; CV Generator <span class="post-date">Apr 05, 2025</span></div>
    </section>
  </div>
</template>

<style scoped>
.home {
  padding: 40px 20px 100px; /* added bottom padding for footer */
  max-width: 800px;
  margin: 0 auto;
  font-size: 20px;
}

.intro {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.profile-pic {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 2px solid var(--text-color);
}

.intro-text {
  font-size: 14px;
}

.tagline {
  font-size: 18px;
  margin-bottom: 20px;
  
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 44px;
}

.box {
  padding: 8px;
  border: 2px dashed var(--text-color);
  flex: 1 0 auto;
  font-size: 15px;
  text-align: center;
  transition: all 0.3s ease;
  border-radius: 0;
  background-color: transparent;
}

.box i {
  margin-right: 6px;
}

.box:hover {
  transform: scale(1.05);
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
}

.box:nth-child(1):hover { background-color: #e0f7fa; }
.box:nth-child(2):hover { background-color: #ffe0b2; }
.box:nth-child(3):hover { background-color: #f3e5f5; }
.box:nth-child(4):hover { background-color: #dcedc8; }
.box:nth-child(5):hover { background-color: #fbe9e7; }
.box:nth-child(6):hover { background-color: #e8eaf6; }

.timeline {
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.timeline-entry {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.ascii-block {
  border: 2px dashed var(--text-color);
  padding: 6px 12px;
  font-family: monospace;
  transition: background 0.3s ease;
}

.ascii-block:hover {
  background-color: #f0f0f0;
}

.timeline-line {
  height: 30px;
  border-left: 2px dashed var(--text-color);
  margin: 5px 0;
}

.post-list {
  margin-top: 40px;
}

.post-item {
  margin-bottom: 12px;
  font-size: 18px;
}

.post-date {
  font-size: 13px;
  color: gray;
  margin-left: 10px;
}

/* Responsive */
@media (max-width: 768px) {
  .intro {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .profile-pic {
    width: 100px;
    height: 100px;
  }

  .skills {
    flex-direction: column;
    align-items: center;
  }

  .box {
    width: 100%;
    max-width: 300px;
  }
}
</style>
