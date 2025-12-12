---
layout: publication
title: "SymmetryGAN"
collection: publications
category: journals
permalink: /publication/2022-05-24-symmetrygan
date: 2022-05-24
venue: 'Physical Review D'
paperurl: 'https://www.desai.ml/files/symmetrygan-paper.pdf'
biblatexurl: 'https://www.desai.ml/files/symmetrygan-biblatex.bib'
citation: 'Desai, K., Nachman, B., and Thaler, J. SymmetryGAN. <i>Physical Review D</i>, 105(9), 096031 (2022).'
authors: '<strong>Krish Desai</strong>, Benjamin Nachman, and Jesse Thaler'
code: 'https://github.com/hep-lbdl/symmetrygan'
doi: 10.1103/PhysRevD.105.096031
---
## Abstract

What are the symmetries of a dataset? Whereas the symmetries of an individual data element can be characterized by its invariance under various transformations, the symmetries of an ensemble of data elements are ambiguous due to Jacobian factors introduced while changing coordinates. In this paper, we provide a rigorous statistical definition of the symmetries of a dataset, which involves inertial reference densities, in analogy to inertial frames in classical mechanics. We then propose SymmetryGAN as a novel and powerful approach to automatically discover symmetries using a deep learning method based on generative adversarial networks (GANs). When applied to Gaussian examples, SymmetryGAN shows excellent empirical performance, in agreement with expectations from the analytic loss landscape. SymmetryGAN is then applied to simulated dijet events from the Large Hadron Collider (LHC) to demonstrate the potential utility of this method in high energy collider physics applications. Going beyond symmetry discovery, we consider procedures to infer the underlying symmetry group from empirical data.