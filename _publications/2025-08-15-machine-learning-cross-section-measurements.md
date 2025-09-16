---
title: "Machine Learning Methods for Cross Section Measurements"
collection: publications
category: theses
permalink: /publication/2025-08-15-machine-learning-cross-section-measurements
date: 2025-08-15
venue: 'University of California, Berkeley'
paperurl: 'https://www.desai.ml/files/10-paper.pdf'
bibtexurl: 'https://www.desai.ml/files/10-biblatex.bib'
citation: 'Desai, Krish. (2025). Machine Learning Methods for Cross Section Measurements. <i>University of California, Berkeley</i>. PhD Physics Dissertation.'
---
## Abstract

    Precise differential cross section measurements are indispensable for tests of Standard Model predictions at the energy frontier and for searches for new physics, yet their extraction from collider data is an ill posed inverse problem. Unfolding, also known as deconvolution, is the process of removing detector distortions to reconstruct particle level truth from detector level data. Conventional, histogram based, binned unfolding techniques introduce artifacts, impose arbitrary bin edges, and become computationally prohibitive in high dimensional phase spaces, potentially obscuring underlying physics.

    This dissertation develops a unified framework that leverages modern machine learning techniques to surmount these limitations. First, the <span style="font-variant-caps: small-caps;">Neural Posterior Unfolding (NPU)</span> method demonstrates how conditional normalising flows can serve as differentiable surrogates of detector response, enabling likelihood based unfolding through implicit regularisation. Building on this foundation, the <span style="font-variant-caps: small-caps;">Moment Unfolding</span> algorithm directly extracts distribution moments without binning, providing precise experimental predictions for effective field theories and phenomenological models. The framework is further advanced by development of <span style="font-variant-caps: small-caps;">Reweighting Adversarial Networks (RANs)</span>, which perform full spectral unfolding using adversarial training to implement particle level reweighting guided by a detector level classifier, offering theoretical and computational advantages over extant methods.

    A critical statistical analysis of event correlations in unfolded data reveals systematic misestimation of uncertainties when these correlations are ignored, leading to methodological recommendations that ensure correct coverage for all derived observables. The methods presented in this dissertation are validated using both idealised Gaussian distributions and proton–proton collision simulations of the CMS experiment as realistic particle physics examples, specifically simulations of Z+jets events, demonstrating significant improvements in precision, accuracy, and computational efficiency, reducing computational time by orders of magnitude while maintaining or exceeding the precision of existing methods for the unbiased recovery of spectral features.

    By marrying statistical rigour with powerful machine learning methods, this work establishes a scalable blueprint for precision measurements at current and future high energy physics experiments. The resulting open source software enables more reliable extraction of fundamental physics parameters from complex detector data, advancing the ability to test theoretical models and potentially discover new phenomena.
