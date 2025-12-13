---
layout: publication
title: "Machine Learning-based Unfolding for Cross Section Measurements in the Presence of Nuisance Parameters"
collection: publications
category: preprints
permalink: /publication/2025-12-08-ml-based-unfolding-and-profiling
date: 2025-12-08
venue: 'arXiv:2512.07074'
paperurl: 'https://www.desai.ml/files/ml-based-unfolding-and-profiling-paper.pdf'
biblatexurl: 'https://www.desai.ml/files/ml-based-unfolding-and-profiling-biblatex.bib'
citation: 'Zhu, H., Desai, K., Kuusela, M., Mikuni, V., Nachman, B., and Wasserman, L. "Machine Learning-based Unfolding for Cross Section Measurements in the Presence of Nuisance Parameters". <i>arXiv:2512.07074</i> (2025).'
authors: 'Huanbiao Zhu, <strong>Krish Desai</strong>, Mikael Kuusela, Vinicius Mikuni, Benjamin Nachman, and Larry Wasserman'
doi: 10.48550/arXiv.2512.07074
arxiv: 2512.07074
scix: 2025arXiv251207074Z
inspirehep: 3090314
researchgate: 398474962_Machine_Learning-based_Unfolding_for_Cross_Section_Measurements_in_the_Presence_of_Nuisance_Parameters
---
## Abstract

Statistically correcting measured cross sections for detector effects is an important step across many applications. In particle physics, this inverse problem is known as \textit{unfolding}. In cases with complex instruments, the distortions they introduce are often known only implicitly through simulations of the detector. Modern machine learning has enabled efficient simulation-based approaches for unfolding high-dimensional data. Among these, one of the first methods successfully deployed on experimental data is the \textsc{OmniFold} algorithm, a classifier-based Expectation-Maximization procedure. In practice, however, the forward model is only approximately specified, and the corresponding uncertainty is encoded through nuisance parameters. Building on the well-studied \textsc{OmniFold} algorithm, we show how to extend machine learning-based unfolding to incorporate nuisance parameters. Our new algorithm, called Profile \textsc{OmniFold}, is demonstrated using a Gaussian example as well as a particle physics case study using simulated data from the CMS Experiment at the Large Hadron Collider.