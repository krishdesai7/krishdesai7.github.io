---
layout: publication
title: "Deconvolving Detector Effects for Distribution Moments"
collection: publications
category: conferences
permalink: /publication/2022-12-03-deconvolving-detector-effects
date: 2022-12-03
venue: 'Thirty-Sixth Annual Conference on Neural Information Processing Systems (NeurIPS), ML4PS Track'
slidesurl: 'https://www.desai.ml/files/deconvolving-detector-effects-distribution-moments-slides.pdf'
paperurl: 'https://www.desai.ml/files/deconvolving-detector-effects-distribution-moments-paper.pdf'
biblatexurl: 'https://www.desai.ml/files/deconvolving-detector-effects-distribution-moments-biblatex.bib'
citation: 'Desai, K., Nachman, B., and Thaler, J. Deconvolving Detector Effects for Distribution Moments. <i>NeurIPS</i> ML4PS 43 (2022).'
authors: '<strong>Krish Desai</strong>, Benjamin Nachman, and Jesse Thaler'
code: 'https://github.com/HEP-GAN/MomentUnfolding'
doi: 10.5281/zenodo.17189987
arxiv: 2407.11284
scix: 2022APS..APRK08004D
inpsirehep: 2859282
---
## Abstract

Deconvolving (&lsquo;unfolding&rsquo;) detector distortions is a critical step in the comparison of cross section measurements with theoretical predictions in particle and nuclear physics. However, most extant unfolding approaches require histogram binning while many theoretical predictions are at the level of moments. We develop a new approach to directly unfold distribution moments as a function of other observables without having to first discretize the data. Our Moment Unfolding technique uses machine learning and is inspired by Generative Adversarial Networks (GANs). We demonstrate the performance of this approach using jet substructure measurements in collider physics.