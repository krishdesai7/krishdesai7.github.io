---
layout: publication
title: "Neural Posterior Unfolding"
collection: publications
category: preprints
permalink: /publication/2025-09-08-neural-posterior-unfolding
date: 2025-09-08
venue: 'arXiv:2509.06370'
paperurl: 'https://www.desai.ml/files/neural-posterior-unfolding-preprint-paper.pdf'
bibtexurl: 'https://www.desai.ml/files/neural-posterior-unfolding-preprint-biblatex.bib'
citation: 'Desai, K. Neural Posterior Unfolding. <i>arXiv:2509.06370</i> (2025).'
authors: 'Fernando Torales Acosta, Jay Chan, <strong>Krish Desai</strong>, Vinicius Mikuni, Benjamin Nachman, Jingjing Pan, Francesco Rubbo'
code: 'https://github.com/jp2555/NPU'
---
## Abstract
Differential cross section measurements are the currency of scientific exchange in particle and nuclear physics. A key challenge for these analyses is the correction for detector distortions, known as deconvolution or unfolding. Binned unfolding of cross section measurements traditionally rely on the regularized inversion of the response matrix that represents the detector response, mapping pre-detector ('particle level') observables to post-detector ('detector level') observables. In this paper we introduce Neural Posterior Unfolding, a modern, Bayesian approach that leverages normalizing flows for unfolding. By using normalizing flows for neural posterior estimation, NPU offers several key advantages including implicit regularization through the neural network architecture, fast amortized inference that eliminates the need for repeated retraining, and direct access to the full uncertainty in the unfolded result. In addition to introducing NPU, we implement a classical Bayesian unfolding method called Fully Bayesian Unfolding (FBU) in modern Python so it can also be studied. These tools are validated on simple Gaussian examples and then tested on simulated jet substructure examples from the Large Hadron Collider (LHC). We find that the Bayesian methods are effective and worth additional development to be analysis ready for cross section measurements at the LHC and beyond.