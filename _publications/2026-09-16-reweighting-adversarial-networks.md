---
layout: publication
title: "Reweighting Adversarial Networks for Unbinned Unfolding"
collection: publications
category: journals
status: In Press
permalink: /publication/2026-09-16-reweighting-adversarial-networks
date: 2026-09-16
venue: "Physical Review X"
paperurl: "https://www.desai.ml/files/reweighting-adversarial-networks-paper.pdf"
biblatexurl: "https://www.desai.ml/files/reweighting-adversarial-networks-biblatex.bib"
citation: 'Qureshi, U. S., Desai, K., Thaler, J., and Nachman, B. "Reweighting Adversarial Networks for Unbinned Unfolding". <i>Physical Review X</i>, in press (2026).'
authors: "Umar Sohail Qureshi, <strong>Krish Desai</strong>, Jesse Thaler, and Benjamin Nachman"
code: https://github.com/umarsqureshi/RAN
doi: 10.48550/arXiv.2606.06603
arxiv: "2606.06603"
scix: "2026arXiv260606603S"
inspirehep: 3165800
researchgate: 406351256_Reweighting_Adversarial_Networks_for_Unbinned_Unfolding
---

## Abstract

Differential cross sections are the currency of scientific exchange in particle and nuclear physics. Recently, machine learning methods have enabled unbinned and high-dimensional cross section measurements through new approaches to unfolding. A key challenge with unfolding is that it is a bi-level optimization problem where constraints are available at the detector level while the target is at the particle level, linked by a stochastic detector response. Further complications arise when the particle-level and detector-level distributions have non-overlapping or only partially overlapping support, which can destabilize training and degrade unfolding performance. In this paper, we introduce a new unbinned unfolding technique called the Reweighting Adversarial Network (RAN), which can be viewed as a generalization of the Moment Unfolding protocol to accommodate full phase-space unfolding. RANs address the bi-level optimization problem through a particle-level reweighting function steered by a Wasserstein critic at the detector level. RANs do not require overlapping support at the detector level, nor multiple iterations of training. We evaluate the performance of RANs with Gaussian data and jet substructure studies, including cases specifically designed to stress test the method under vanishing support overlap. We demonstrate that RANs outperform state-of-the-art methods in accuracy and have a lower computational overhead.
