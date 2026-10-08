---
permalink: /about/
layout: about
author_profile: true
title: "About"
redirect_from:
  - /about.html
---

I am a data scientist in the Data and AI Group at Bank of America in New York, where I lead applied research for an agentic AI platform. Before joining the bank, I spent five years at Lawrence Berkeley National Lab developing machine learning methods for particle physics, and I hold a PhD in Physics from UC Berkeley (2025).

## Current Work

At Bank of America, I lead the applied research vertical of a team building an agentic AI platform. My work focuses on two questions: how to build AI systems that can plan, act, notice when something has gone wrong, and recover; and how to evaluate those systems rigorously, by what their outputs actually _do_ rather than by how plausible they look. Alongside the research, I build and ship the production retrieval and evaluation systems the platform runs on.

## Research

My research has always been about inference under uncertainty: recovering what is really there from data that has been distorted, smeared, or corrupted by the process of measuring it. In particle physics, that problem is called _unfolding_. Collider detectors blur every measurement, and turning those distorted observations back into statements about the underlying physics is one of the field's central statistical challenges.

At Berkeley (2020–2025), working with Professor Benjamin Nachman at Lawrence Berkeley National Lab, I designed machine learning methods to push the limits of the information that can be extracted from particle physics data. My dissertation, "Machine Learning Methods for Cross Section Measurements," develops a framework for applying modern generative and adversarial models to these measurements. Highlights of my researchinclude:

Moment Unfolding
: A GAN–inspired method that unfolds the moments of a distribution directly, without histogram binning, enabling more precise comparisons with theory (_Physical Review D_, 2024).

Reweighting Adversarial Networks
: Generalizes _Moment Unfolding_{:.sc} to full phase-space unfolding, using a particle–level reweighting function steered by a Wasserstein critic. RANs remain stable even when particle– and detector–level distributions barely overlap, and outperform state-of-the-art methods at lower computational cost (_Physical Review X_, in press).

Neural Posterior Unfolding
: Uses normalising flows and neural posterior estimation to perform unfolding, with implicit regularisation from the network and fast, amortised inference (_Journal of Instrumentation_, 2026).

Unbinned Inference with Correlated Events
: Shows that unbinned inference on unfolded data breaks a standard assumption, that events are statistically independent, and that ignoring the resulting correlations can significantly underestimate uncertainties (_European Physical Journal C_, 2025).

Unfolding in the Presence of Nuisance Parameters
: Extends the _OmniFold_{:.sc} algorithm so that machine learning–based unfolding can profile the nuisance parameters that encode an imperfectly known detector model (_Annals of Applied Statistics_, in press).

SymmetryGAN
: A deep learning method that automatically discovers the symmetries of a dataset, with applications from particle physics to broader data science (_Physical Review D_, 2022).

The same thread runs through my work on AI systems today. A measurement is only as trustworthy as your understanding of how it was distorted, and the uncertainty it carries is part of the result. Evaluating an agent by what its outputs actually _do_ asks the same thing of it that unfolding asks of a collider detector.

My physics research has appeared in venues including NeurIPS (2021, 2022, 2024), _Physical Review X_, _Physical Review D_, the _European Physical Journal C_, the _Journal of Instrumentation_, and the _Annals of Applied Statistics_, and I have given invited talks at CERN, the Korea Institute for Advanced Study, NeurIPS, and the American Physical Society. The full lists are on the [publications](/publications/) and [talks](/talks/) pages.

## Education

I completed my BS (Mathematics and Physics, with Distinction in both) and MS (Mathematics) at Yale University in 2020, and was awarded the Howard L. Schultz Prize for the most outstanding graduating senior in physics. At Yale I published research in pure mathematics (closed geodesics on flat surfaces) and theoretical physics (anharmonic oscillators via Padé approximants). I then completed my PhD in Physics at UC Berkeley in 2025.

## Industry Experience

Before Bank of America, I worked across several domains that share the same underlying problem of extracting reliable signal from noisy data:

Emissary AI (2025)
: Fine-tuned language and vision-language models for client applications, including a GRPO–based reinforcement learning pipeline for code completion and image–based IP violation detection, and multi-GPU distributed training.

Bridgewater Associates (2023)
: Built Bayesian hierarchical models to forecast liquidity and transaction costs for trade execution, using partial pooling to make reliable predictions from sparse data.

Microsoft Research (2022)
: Worked with Jaron Lanier on nonlocal field theory and matrix models, developing operator-theoretic and stochastic methods that bridge discrete and continuous optimisation.

## Service

I review for _Archives of Computational Methods in Engineering_, _Nature Scientific Reports_, the _Journal of High Energy Physics_, and NeurIPS, and served on the UC Berkeley Physics Faculty Search Committee (2021–2024). I am a member of the Sigma Xi Scientific Research Honor Society and Sigma Pi Sigma, the physics honor society.

## Outside Work

I'm drawn to thinking deeply about the logical structure of the world around us, and that curiosity doesn't stop at physics or machine learning. I'm happy to talk with anyone about anything from linguistics to molecular biology to computer architecture. Away from the desk, I play badminton and the piano, and enjoy running.

I'm always open to research collaborations. If you have an idea you'd like to work on together, please [get in touch](/contact/).
