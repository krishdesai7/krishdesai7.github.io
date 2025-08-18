---
permalink: /
title: "About"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I am a machine learning researcher with a PhD in Physics from UC Berkeley (2025), specializing in the intersection of statistical inference and high energy physics. In my work at Lawrence Berkeley National Lab, I develop novel computational methods to extract fundamental physics insights from complex experimental data.

## Research Philosophy

Modern particle physics experiments generate petabytes of data, yet extracting meaningful signals from this data remains one of the field's greatest challenges. My work bridges theoretical physics and cutting-edge machine learning to create new tools for scientific discovery. I specialize in developing generative models, Bayesian inference techniques, and deconvolution algorithms to recover true distributions from distorted measurements.

## Academic Journey

My academic journey began at Yale University, where I completed both my BS and MS degrees in Mathematics and Physics with Distinction (2020) in three years, and was awarded the Howard L. Schultz prize for the outstanding graduating senior in physics at Yale. During this time, I conducted original research published in peer-reviewed journals in pure mathematics (studying closed geodesics on flat surfaces) and theoretical physics (analyzing anharmonic oscillators with Padé approximants).

At Berkeley (2020-2025), working with Professor Benjamin Nachman at Lawrence Berkeley National Lab, I focused on pushing the limits of the information that can be extracted from particle physics data by designing machine learning architectures to analyze it. My dissertation, "Machine Learning Methods for Cross Section Measurements," represents a comprehensive framework for applying modern ML techniques to high energy physics data analysis.

## Key Contributions

My research has resulted in several innovations that are advancing how we analyze particle collider data:

- **Moment Unfolding: Moment extraction using an unfolding protocol without binning**: Developed a GAN-inspired approach to directly unfold distribution moments without histogram binning, enabling more precise theoretical comparisons
- **SymmetryGAN: Symmetry Discovery with Deep Learning**: Created a deep learning method to automatically discover symmetries in datasets, with applications ranging from particle physics to broader data science
- **Unbinned Inference with Correlated Events**: Pioneered techniques for handling correlated events in machine learning inference, addressing a critical challenge in modern data analysis

These contributions have been recognized through publications in top venues including NeurIPS (2021, 2022, 2024) and Physical Review D, along with invited talks at CERN, KIAS, and other international institutions. I was also elected to the Sigma Xi Scientific Research Honor Society (2025), recognizing excellence in scientific research.

## Beyond Academia

My commitment to applying rigorous quantitative methods extends beyond particle physics. During my internship at Bridgewater Associates, I developed Bayesian hierarchical models for predicting market liquidity and optimizing trading strategies. At Microsoft Research, I collaborated with Jaron Lanier on exploring connections between discrete and continuous mathematical structures, contributing to fundamental questions in the use of machine learning to study the non-local impacts of local interactions.

## Teaching & Service

I remain committed to giving back to the academic community through peer review (Nature Scientific Reports, JHEP, NeurIPS) and institutional service (UC Berkeley Physics Faculty Search Committee, 2021-2024). I'm also passionate about mentoring the next generation of physicists, data scientists, and machine learning researchers.

## Looking Forward

With my PhD completed in 2025, I'm excited about continuing to push the boundaries of what's possible at the intersection of physics and machine learning. Whether in academia or industry, my goal is to develop tools that enable new scientific discoveries and solve complex real-world problems.

## Featured Publications

<div class="featured-publications">
  <div class="publication-highlight">
    <h4> Machine Learning Methods for Cross Section Measurements</h4>
    <p><em>PhD Dissertation, UC Berkeley (2025)</em></p>
    <p>Comprehensive framework for applying modern ML techniques to particle physics data analysis, introducing novel unfolding methods and symmetry discovery algorithms.</p>
    <p><a href="/files/10-paper.pdf" class="btn btn--primary btn--small">Download PDF</a></p>
  </div>

  <div class="publication-highlight">
    <h4> Moment Unfolding</h4>
    <p><em>Physical Review D 110(11), 116013 (2024)</em></p>
    <p>Revolutionary GAN-inspired approach to directly unfold distribution moments without histogram binning, enabling more precise theoretical comparisons in high-energy physics.</p>
    <p><a href="/files/6-paper.pdf" class="btn btn--primary btn--small">Paper</a> <a href="/files/6-biblatex.bib" class="btn btn--small">BibTeX</a></p>
  </div>

  <div class="publication-highlight">
    <h4> SymmetryGAN</h4>
    <p><em>Physical Review D 105(9), 096031 (2022)</em></p>
    <p>Deep learning method to automatically discover symmetries in datasets, with applications ranging from particle physics to broader data science domains.</p>
    <p><a href="/files/4-paper.pdf" class="btn btn--primary btn--small">Paper</a> <a href="/files/4-biblatex.bib" class="btn btn--small">BibTeX</a></p>
  </div>

  <div class="publication-highlight">
    <h4> Symmetry Discovery with Deep Learning</h4>
    <p><em>NeurIPS ML4PS (2021)</em></p>
    <p>Foundational work on using neural networks to identify hidden symmetries in complex datasets, opening new avenues for physics-informed machine learning.</p>
    <p><a href="/files/3-paper.pdf" class="btn btn--primary btn--small">Paper</a> <a href="/files/3-slides.pdf" class="btn btn--small">Slides</a> <a href="/files/3-biblatex.bib" class="btn btn--small">BibTeX</a></p>
  </div>
</div>

<style>
.featured-publications {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.publication-highlight {
  padding: 1.5rem;
  background: var(--background-color, #f8f9fa);
  border-left: 4px solid var(--primary-color, #007bff);
  border-radius: 4px;
}

.publication-highlight h4 {
  margin-top: 0;
  color: var(--text-color, #333);
}

.publication-highlight p {
  margin: 0.5rem 0;
  font-size: 0.95rem;
}

.publication-highlight em {
  color: var(--muted-color, #6c757d);
}

body.dark .publication-highlight {
  background: rgba(255, 255, 255, 0.05);
}

.btn--small {
  padding: 0.25rem 0.75rem;
  font-size: 0.875rem;
}
</style>

<p style="text-align: center; margin-top: 2rem;">
  <a href="/publications/" class="btn btn--primary">View All Publications →</a>
</p>

---