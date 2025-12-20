---
layout: publication
title: "Moment Unfolding: Moment extraction using an unfolding protocol without binning"
collection: publications
category: journals
permalink: /publication/2024-12-13-moment-unfolding
date: 2024-12-13
venue: 'Physical Review D'
paperurl: 'https://www.desai.ml/files/moment-unfolding-using-deep-learning-paper.pdf'
biblatexurl: 'https://www.desai.ml/files/moment-unfolding-using-deep-learning-biblatex.bib'
citation: 'Desai, K., Nachman, B., and Thaler, J. "Moment Unfolding: Moment extraction using an unfolding protocol without binning". <i>Physical Review D</i>, 110(11), 116013 (2024).'
authors: '<strong>Krish Desai</strong>, Benjamin Nachman, and Jesse Thaler'
code: 'https://github.com/HEP-GAN/MomentUnfolding'
doi: 10.1103/PhysRevD.110.116013
arxiv: 2407.11284
scix: 2024PhRvD.110k6013D
inspirehep: 2859282
researchgate: 387041727_Moment_extraction_using_an_unfolding_protocol_without_binning
---
## Abstract

Deconvolving (&lsquo;unfolding&rsquo;) detector distortions is a critical step in the comparison of cross section measurements with theoretical predictions in particle and nuclear physics. However, most existing approaches require histogram binning while many theoretical predictions are at the level of statistical moments. We develop a new approach to directly unfold distribution moments as a function of another observable without having to first discretize the data. Our Moment Unfolding technique uses machine learning and is inspired by Generative Adversarial Networks (GANs). We demonstrate the performance of this approach using jet substructure measurements in collider physics. With this illustrative example, we find that our Moment Unfolding protocol is more precise than bin-based approaches and is as or more precise than completely unbinned methods.