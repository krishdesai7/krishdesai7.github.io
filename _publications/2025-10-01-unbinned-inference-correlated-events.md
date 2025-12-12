---
layout: publication
title: "Unbinned Inference with Correlated Events"
collection: publications
category: journals
permalink: /publication/2025-10-01-unbinned-inference-correlated-events
date: 2025-10-01
venue: 'European Physical Journal C'
paperurl: 'https://www.desai.ml/files/unbinned-inference-with-correlated-events-paper.pdf'
biblatexurl: 'https://www.desai.ml/files/unbinned-inference-with-correlated-events-biblatex.bib'
citation: 'Desai, K., Long, O., and Nachman, B. Unbinned Inference with Correlated Events. <i>European Physical Journal C</i> 85, 1089 (2025).'
authors: '<strong>Krish Desai</strong>, Owen Long, and Benjamin Nachman'
code: 'https://github.com/owen234/unbinned-inference-paper'
doi: 10.1140/epjc/s10052-025-14835-1 
---
## Abstract

Modern machine learning has enabled parameter inference from event-level data without the need to first summarize all events with a histogram. All of these unbinned inference methods make use of the fact that the events are statistically independent so that the log likelihood is a sum over events. However, this assumption is not valid for unbinned inference on unfolded data, where the deconvolution process induces a correlation between events. We explore the impact of event correlations on downstream inference tasks in the context of the OmniFold unbinned unfolding method. We find that uncertainties may be significantly underestimated when event correlations are excluded from uncertainty quantification.