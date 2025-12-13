---
layout: publication
title: "Neural Posterior Unfolding"
collection: publications
category: conferences
permalink: /publication/2024-12-15-neural-posterior-unfolding
date: 2024-12-15
venue: 'Thirty-Eighth Annual Conference on Neural Information Processing Systems (NeurIPS), ML4PS Track'
slidesurl: 'https://www.desai.ml/files/neural-posterior-unfolding-neurips-slides.pdf'
paperurl: 'https://www.desai.ml/files/neural-posterior-unfolding-neurips-paper.pdf'
biblatexurl: 'https://www.desai.ml/files/neural-posterior-unfolding-neurips-biblatex.bib'
citation: 'Acosta, F. T., Chan, J., Desai, K., Mikuni, V., Nachman, B., and Pan, J. Neural Posterior Unfolding. <i>NeurIPS</i> ML4PS 177 (2024).'
authors: 'Fernando Torales Acosta, Jay Chan, <strong>Krish Desai</strong>, Vinicius Mikuni, Benjamin Nachman, and Jingjing Pan'
code: 'https://github.com/jp2555/NPU'
doi: 10.48550/arXiv.2509.06370
arxiv: 2509.06370
scix: 2025arXiv250906370T
inspirehep: 2967396
---
## Abstract

Differential cross section measurements are the currency of scientific exchange in particle and nuclear physics. The key challenge for these analyses is the correction for detector distortions known as deconvolution or <em>unfolding</em>. In the case of binned cross section measurements, there are many tools for regularized matrix inversion where the matrix governs the detector response going from pre- to post-detector observables. In this paper, we show how normalizing flows and neural posterior estimation can be used for unfolding. This approach has many potential advantages, including implicit regularization from the neural networks and fast inference from amortized training. We demonstrate this approach using simple Gaussian examples as well as a simulated jet substructure measurement at the Large Hadron Collider.