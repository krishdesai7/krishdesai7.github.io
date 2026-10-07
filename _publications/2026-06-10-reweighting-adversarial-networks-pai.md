---
layout: publication
title: "Reweighting Adversarial Networks for Unbinned Unfolding"
collection: publications
category: conferences
permalink: /publication/2026-06-10-reweighting-adversarial-networks-pai
date: 2026-06-10
venue: '2026 Conference on Physics and AI (PAI26), Stanford University'
paperurl: 'https://openreview.net/pdf?id=xbyOrwdZqn'
biblatexurl: 'https://www.desai.ml/files/reweighting-adversarial-networks-pai-biblatex.bib'
citation: 'Qureshi, U. S., Desai, K., Nachman, B., and Thaler, J. "Reweighting Adversarial Networks for Unbinned Unfolding". <i>Conference on Physics and AI (PAI26)</i>, Stanford University (2026).'
authors: 'Umar Sohail Qureshi, <strong>Krish Desai</strong>, Benjamin Nachman, and Jesse Thaler'
code: https://github.com/umarsqureshi/RAN
doi: 10.48550/arXiv.2606.06603
arxiv: "2606.06603"
scix: 2026arXiv260606603Q
inspirehep: 3165800
---
## Abstract

Differential cross sections are the currency of scientific exchange in particle and nuclear physics. Recently, machine learning methods have enabled unbinned and high-dimensional cross section measurements through new approaches to unfolding. A key challenge with unfolding is that it is a bi-level optimization problem where constraints are available at the detector level while the target is at the particle level, linked by a stochastic detector response. Further complications arise when the particle-level and detector-level distributions have non-overlapping or only partially overlapping support, which can destabilize training and degrade unfolding performance. In this paper, we introduce a new unbinned unfolding technique called the Reweighting Adversarial Network (RAN), which can be viewed as a generalization of the Moment Unfolding protocol to accommodate full phase-space unfolding. RANs address the bi-level optimization problem through a particle-level reweighting function steered by a Wasserstein critic at the detector level. RANs do not require overlapping support at the detector level, nor multiple iterations of training. We evaluate the performance of RANs with Gaussian data and jet substructure studies, including cases specifically designed to stress test the method under vanishing support overlap. We demonstrate that RANs outperform state-of-the-art methods in accuracy and have a lower computational overhead.
