---
title: "Neural Posterior Unfolding"
collection: publications
category: conferences
permalink: /publication/2024-11-01-neural-posterior-unfolding
date: 2024-11-01
venue: 'Conference on Neural Information Processing Systems (NeurIPS), ML4PS Track'
slidesurl: 'https://www.desai.ml/files/7-slides.pdf'
paperurl: 'https://www.desai.ml/files/7-paper.pdf'
bibtexurl: 'https://www.desai.ml/files/7-biblatex.bib'
citation: 'Acosta, F. T., Chan, J., Desai, K., Mikuni, V., Nachman, B., &amp; Pan, J. (2024) Neural Posterior Unfolding. <i>NeurIPS</i> ML4PS (177).'
---
## Abstract

    Differential cross section measurements are the currency of scientific exchange in particle and nuclear physics. The key challenge for these analyses is the correction for detector distortions known as deconvolution or <em>unfolding</em>. In the case of binned cross section measurements, there are many tools for regularized matrix inversion where the matrix governs the detector response going from pre- to post-detector observables. In this paper, we show how normalizing flows and neural posterior estimation can be used for unfolding. This approach has many potential advantages, including implicit regularization from the neural networks and fast inference from amortized training. We demonstrate this approach using simple Gaussian examples as well as a simulated jet substructure measurement at the Large Hadron Collider.