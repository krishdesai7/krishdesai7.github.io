---
layout: publication
title: "Multidimensional Deconvolution with Profiling"
collection: publications
category: conferences
permalink: /publication/2024-12-15-multidimensional-deconvolution-profiling
date: 2024-12-15
venue: 'Thirty-Eighth Annual Conference on Neural Information Processing Systems (NeurIPS), ML4PS Track'
slidesurl: 'https://www.desai.ml/files/8-slides.pdf'
paperurl: 'https://www.desai.ml/files/8-paper.pdf'
bibtexurl: 'https://www.desai.ml/files/8-biblatex.bib'
citation: 'Zhu, H., Desai, K., Kuusela, M., Mikuni, V., Nachman, B., and Wasserman, L. Multidimensional Deconvolution with Profiling. <i>NeurIPS</i> ML4PS 150 (2024).'
authors: 'Huanbiao Zhu, <strong>Krish Desai</strong>, Mikael Kuusela, Vinicius Mikuni, Benjamin Nachman, and Larry Wasserman'
---
## Abstract

In many experimental contexts, it is necessary to statistically remove the impact of instrumental effects in order to physically interpret measurements. This task has been extensively studied in particle physics, where the deconvolution task is called unfolding. A number of recent methods have shown how to perform high-dimensional, unbinned unfolding using machine learning. However, one of the assumptions in all of these methods is that the detector response is correctly modeled in the Monte Carlo simulation. In practice, the detector response depends on a number of nuisance parameters that can be constrained with data. We propose a new algorithm called Profile OmniFold, which works in a similar iterative manner as the OmniFold algorithm while being able to simultaneously profile the nuisance parameters. We illustrate the method with a Gaussian example as a proof of concept highlighting its promising capabilities.