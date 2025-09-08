---
layout: single
author_profile: false
classes: wide
---

<div class="home-hero">
  <div class="hero-content">
    <img src="/images/profile.png" alt="Krish Desai" class="hero-profile-pic">
    <div class="hero-text">
      <p class="hero-name"><strong>Krish Desai</strong></p>
      <p class="hero-title">Machine Learning Researcher</p>
      <p class="hero-degree">PhD, Physics</p>
      <p class="hero-institution">University of California, Berkeley</p>
      <p class="hero-email"><a href="mailto:krishdesai7@gmail.com">krishdesai7@gmail.com</a></p>
    </div>
  </div>
</div>

<div class="publications-talks-section">
  <div class="publications-column">
  <h3 class="smallcaps">Recent Publications</h3>  
    <div class="recent-publications">
    {% assign sorted_pubs = site.publications | sort: 'date' | reverse %}
    {% for post in sorted_pubs limit:3 %}
      <div class="pub-item">
        <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        <p class="pub-meta">{{ post.venue }}, {{ post.date | date: "%Y" }}</p>
      </div>
    {% endfor %}
    </div>
    <p class="view-all">
      <a href="/publications/" class="view-all-link">See all publications ▶︎</a>
    </p>
  </div>
  
  <div class="talks-column">
    <h3 class="smallcaps">Recent Talks</h3>
    <div class="recent-talks">
    {% assign sorted_talks = site.talks | sort: 'date' | reverse %}
    {% for talk in sorted_talks limit:3 %}
      <div class="talk-item">
        <h3><a href="{{ talk.url | relative_url }}">{{ talk.title }}</a></h3>
        {% assign short_venue = talk.venue %}
        {% if talk.venue contains "Neural Information Processing Systems" %}
          {% assign short_venue = "NeurIPS" %}
        {% elsif talk.venue contains "International Conference on Machine Learning" %}
          {% assign short_venue = "ICML" %}
        {% elsif talk.venue contains "Conference on Computer Vision and Pattern Recognition" %}
          {% assign short_venue = "CVPR" %}
        {% elsif talk.venue contains "International Conference on Learning Representations" %}
          {% assign short_venue = "ICLR" %}
        {% endif %}
        <p class="talk-meta">{{ short_venue }} | {{ talk.date | date: "%B %Y" }}</p>
      </div>
    {% endfor %}
    </div>
    <p class="view-all">
      <a href="/talks/" class="view-all-link">All talks ▶︎</a>
    </p>
  </div>
</div>

<style>
/* Override all link hover effects */
a {
  text-decoration: none !important;
}

a:hover {
  text-decoration: none !important;
  background: none !important;
  box-shadow: none !important;
  border: none !important;
}

/* Override default page margins for better spacing */
#main {
  max-width: 100% !important;
  padding-left: 12rem !important;  /* ~2 inches */
  padding-right: 12rem !important; /* ~2 inches */
}

.page {
  float: none !important;
  width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
}

.page__inner-wrap {
  float: none !important;
  width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
}

.home-hero {
  padding: 1rem 0 1.5rem;
  margin-bottom: 2rem;
  margin-top: -1rem;
}

.hero-content {
  display: flex;
  align-items: center;
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.hero-profile-pic {
  width: 150px;
  height: auto;
  filter: grayscale(100%);
  object-fit: cover;
  flex-shrink: 0;
}

.hero-text {
  text-align: left;
}
.smallcaps {
  font-variant-caps: small-caps;
  letter-spacing: 0.03em;
  font-size: 1.3rem;
  font-weight: 500;
  margin: 0 0 1rem 0;
}
.hero-text p {
  margin: 0;
  line-height: 1.4;
}

.hero-name {
  font-size: 1.2rem;
  margin-bottom: 0.3rem !important;
}

.hero-title,
.hero-degree,
.hero-institution {
  font-size: 1rem;
  color: var(--text-color, #555);
}

.hero-email {
  margin-top: 0.5rem !important;
  font-size: 1rem;
}

.hero-email a {
  color: var(--primary-color, #007bff);
  text-decoration: none;
}

.hero-email a:hover {
  text-decoration: none;
  color: var(--primary-color, #007bff);
}

.section-container {
  max-width: 1400px;
  margin: 0 auto;
}

.section-container h3 {
  margin-top: 0.3rem;
  margin-bottom: 1.5rem;
}

.publications-talks-section {
  display: flex;
  gap: 0.3rem;
  margin: 0.2rem auto;
  max-width: 1400px;
}

.publications-column {
  flex: 2;
}

.talks-column {
  flex: 1;
}


.recent-publications .pub-item,
.recent-talks .talk-item {
  margin-bottom: 1rem;
  padding-bottom: 0;
}

.pub-item h3,
.talk-item h3 {
  margin: 0;
  margin-bottom: 0.2rem;
  font-size: 1rem;
  line-height: 1.2;
}

.pub-item h3 a,
.talk-item h3 a {
  font-weight: 500;
  text-decoration: none;
  color: inherit;
}

.pub-item h3 a:hover,
.talk-item h3 a:hover {
  text-decoration: none;
  color: inherit;
}

.pub-meta,
.talk-meta {
  color: var(--muted-color, #6c757d);
  font-size: 0.85rem;
  margin: 0;
  line-height: 1.2;
}

.view-all {
  text-align: left;
  margin: 1rem 0 0 0;
}
.view-all-link {
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  color: #333;
}

.view-all-link:hover {
  text-decoration: none;
  color: #333;
}
.research-highlights {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem auto;
  max-width: 1400px;
}

.highlight-card {
  padding: 1.5rem;
  background: var(--card-background, #f8f9fa);
  border-radius: 8px;
}

.highlight-card h3 {
  margin-top: 0;
  margin-bottom: 0.75rem;
  color: var(--primary-color, #007bff);
}

.highlight-card p {
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.highlight-link {
  font-weight: 500;
  color: var(--primary-color, #007bff);
}

body.dark .highlight-card {
  background: rgba(255, 255, 255, 0.05);
}


body.dark .hero-name,
body.dark .hero-title,
body.dark .hero-degree,
body.dark .hero-institution {
  color: rgba(255, 255, 255, 0.9);
}

@media (max-width: 1200px) {
  #main {
    padding-left: 4rem !important;
    padding-right: 4rem !important;
  }
}

@media (max-width: 768px) {
  #main {
    padding-left: 1.5rem !important;
    padding-right: 1.5rem !important;
  }
  
  .hero-content {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }
  
  .hero-text {
    text-align: center;
  }
  
  .hero-profile-pic {
    width: 120px;
    height: auto;
  }
  
  .hero-name {
    font-size: 1.1rem;
  }
  
  .hero-title,
  .hero-degree,
  .hero-institution {
    font-size: 0.95rem;
  }
  
  .publications-talks-section {
    flex-direction: column;
    gap: 2rem;
  }
  
  .research-highlights {
    grid-template-columns: 1fr;
  }
}
</style>