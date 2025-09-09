---
permalink: /about/
title: "About"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about.html
---
<div class="about-title">About</div>

I am a machine learning researcher with a PhD in Physics from UC Berkeley (2025), specializing in the intersection of statistical inference and high energy physics. In my work at Lawrence Berkeley National Lab, I develop novel computational methods to extract fundamental physics insights from complex experimental data.

## Research Philosophy

Modern particle physics experiments generate petabytes of data, yet extracting meaningful signals from this data remains one of the field's greatest challenges. My work bridges theoretical physics and cutting-edge machine learning to create new tools for scientific discovery. I specialize in developing generative models, Bayesian inference techniques, and deconvolution algorithms to recover true distributions from distorted measurements.

## Academic Journey

My academic journey began at Yale University, where I completed both my BS and MS degrees in Mathematics and Physics with Distinction (2020) in three years, and was awarded the Howard L. Schultz prize for the outstanding graduating senior in physics at Yale. During this time, I conducted original research published in peer-reviewed journals in pure mathematics (studying closed geodesics on flat surfaces) and theoretical physics (analyzing anharmonic oscillators with Padé approximants).

At Berkeley (2020-2025), working with Professor Benjamin Nachman at Lawrence Berkeley National Lab, I focused on pushing the limits of the information that can be extracted from particle physics data by designing machine learning architectures to analyze it. My dissertation, "Machine Learning Methods for Cross Section Measurements," represents a comprehensive framework for applying modern ML techniques to high energy physics data analysis.

## Key Contributions

My research has resulted in several innovations that are advancing how we analyze particle collider data:

-  <span style="font-variant: small-caps;">Moment Unfolding:</span> Moment extraction using an unfolding protocol without binning. Developed a GAN-inspired approach to directly unfold distribution moments without histogram binning, enabling more precise theoretical comparisons.
- SymmetryGAN: Symmetry Discovery with Deep Learning. Created a deep learning method to automatically discover symmetries in datasets, with applications ranging from particle physics to broader data science
- Unbinned Inference with Correlated Events. Pioneered techniques for handling correlated events in machine learning inference, addressing a critical challenge in modern data analysis

These contributions have been recognized through publications in top venues including NeurIPS (2021, 2022, 2024) and Physical Review D, along with invited talks at CERN, KIAS, and other international institutions. I was also elected to the Sigma Xi Scientific Research Honor Society (2025), recognizing excellence in scientific research.

## Beyond Academia

My commitment to applying rigorous quantitative methods extends beyond particle physics. During my internship at Bridgewater Associates, I developed Bayesian hierarchical models for predicting market liquidity and optimizing trading strategies. At Microsoft Research, I collaborated with Jaron Lanier on exploring connections between discrete and continuous mathematical structures, contributing to fundamental questions in the use of machine learning to study the non-local impacts of local interactions.

## Teaching & Service

I remain committed to giving back to the academic community through peer review (Nature Scientific Reports, JHEP, NeurIPS) and institutional service (UC Berkeley Physics Faculty Search Committee, 2021-2024). I'm also passionate about mentoring the next generation of physicists, data scientists, and machine learning researchers.

## Looking Forward

<p>With my PhD completed in 2025, I'm excited about continuing to push the boundaries of what's possible at the intersection of physics and machine learning. Whether in academia or industry, my goal is to develop tools that enable new scientific discoveries and solve complex real-world problems.</p>

<style>
  .about-title {
    font-weight: 200;
    font-size: 2em;
  }
  
  /* Force the layout directly on this page */
  @media screen and (min-width: 925px) {
    #main {
      display: flex !important;
      flex-direction: row-reverse !important;
      gap: 2rem !important;
      max-width: 1200px !important;
      margin: 0 auto !important;
      padding: 0 2em !important;
      justify-content: center !important;
      align-items: flex-start !important;
    }
    
    #main .page {
      flex: 1 1 auto !important;
      max-width: 800px !important;
      padding: 0 !important;
      margin: 0 !important;
      width: auto !important;
    }
    
    #main .sidebar {
      flex: 0 0 280px !important;
      width: 280px !important;
      padding: 0 !important;
      padding-top: 8.5em !important;
      margin: 0 !important;
    }
    
    /* Kill any padding that gets applied */
    .page, .sidebar {
      padding-left: 0 !important;
      padding-right: 0 !important;
      margin-left: 0 !important;
      margin-right: 0 !important;
    }
  }
  
  /* Override CSS variables */
  :root {
    --content-margin-desktop: 0 !important;
    --content-margin-tablet: 0 !important;
  }
</style>

<script>
  // Force remove padding after page loads
  document.addEventListener('DOMContentLoaded', function() {
    const page = document.querySelector('.page');
    const sidebar = document.querySelector('.sidebar');
    const main = document.querySelector('#main');
    
    if (page) {
      page.style.padding = '0';
      page.style.paddingLeft = '0';
      page.style.paddingRight = '0';
      page.style.margin = '0';
    }
    
    if (sidebar) {
      sidebar.style.padding = '0';
      sidebar.style.paddingTop = '8.5em';
      sidebar.style.margin = '0';
    }
    
    if (main && window.innerWidth >= 925) {
      main.style.display = 'flex';
      main.style.flexDirection = 'row-reverse';
      main.style.gap = '2rem';
      main.style.padding = '0 2em';
    }
  });
  
  // Also do it after a delay in case styles are applied late
  setTimeout(function() {
    const page = document.querySelector('.page');
    if (page) {
      page.style.padding = '0';
      page.style.paddingLeft = '0';
      page.style.paddingRight = '0';
    }
  }, 100);
</script>