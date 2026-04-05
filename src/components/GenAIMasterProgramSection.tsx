import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";

// ─── TYPES ───────────────────────────────────────────────────────────────────
type TopicHtml = string; // may contain <strong> tags

interface HandsonData {
  label: string;
  topics?: TopicHtml[];
  groups?: Array<{ subLabel: string; topics: TopicHtml[] }>;
}

interface DemoData {
  label: string;
  topics?: TopicHtml[];
}

interface ModuleItem {
  label: string;
  isVariant?: boolean;
  topics?: TopicHtml[];
  handson?: HandsonData;
  demo?: DemoData;
}

interface SessionData {
  type: "forenoon" | "afternoon";
  modules?: ModuleItem[];
  trainerTasks?: string[];
  groupTasks?: string[];
}

interface DayData {
  day: number;
  weekend: string;
  title: string;
  isCapstone?: boolean;
  sessions: SessionData[];
}

interface PricingPlan {
  type: string;
  eyebrow: string;
  title: string;
  desc: string;
  amount: string;
  gst: string;
  badge: { label: string; text: string; original?: string };
  features: string[];
  gradient: string;
}

// ─── PROGRAM DATA ─────────────────────────────────────────────────────────────
const programDays: DayData[] = [
  // ══ DAY 1 ══
  {
    day: 1,
    weekend: "Weekend 1 · Saturday",
    title: "The AI Evolution Landscape · Data as Matrices · NLP Foundations & Word Embeddings",
    sessions: [
      {
        type: "forenoon",
        modules: [
          {
            label: "Session 1 — The AI Evolution Timeline",
            topics: [
              "<strong>A Brief History of AI</strong> — Tracing the journey from early computing to today's Generative & Agentic AI era",
              "<strong>Rule-Based / Expert Systems (1980s)</strong> — Hand-coded IF-THEN logic, knowledge bases & their fundamental limitations",
              "<strong>Machine Learning Era (1990s–2000s)</strong> — Statistical learning paradigms; supervised, unsupervised & reinforcement learning",
              "<strong>Deep Learning Revolution (2012+)</strong> — Neural networks at scale; the ImageNet moment; NLP breakthroughs",
              "<strong>The Transformer Era (2017+)</strong> — 'Attention is All You Need'; BERT, GPT and the new NLP paradigm shift",
              "<strong>Generative AI (2020+)</strong> — GPT-3, ChatGPT, Gemini, Claude — AI that creates text, images, code and more",
              "<strong>Agentic AI (2023+)</strong> — AI that autonomously plans, acts, uses tools and completes multi-step tasks",
            ],
          },
          {
            label: "Session 2 — ML vs DL: Architecture Landscape & the Data-as-Matrix Paradigm",
            topics: [
              "<strong>What is Machine Learning? What is Deep Learning?</strong> — Conceptual distinction & practical positioning in the AI stack",
              "<strong>Why Matrices?</strong> — Understanding why all ML/DL computation reduces to linear algebra; scalars, vectors, matrices & tensors",
              "Side-by-side architecture comparison: Classical ML algorithms vs Deep Neural Networks — where each shines",
            ],
            handson: {
              label: "💻 Theory + Hands-On — Multi-Modal Data → Matrix Conversion",
              topics: [
                "<strong>Tabular Data (CSV / XLSX)</strong> — Feature matrices, encoding categoricals, normalisation pipelines",
                "<strong>Image Data</strong> — Pixel grids as 2D/3D tensors; RGB channels, resizing & normalisation",
                "<strong>Audio Data</strong> — Waveform sampling, Mel spectrograms & MFCC matrices; visualising audio as a 2D matrix",
                "<strong>Text Data</strong> — Character, word & subword tensor representations — a preview before deep NLP coverage",
                "Practical: Load real samples of each modality and inspect their matrix shapes in NumPy / PyTorch",
              ],
            },
          },
        ],
      },
      {
        type: "afternoon",
        modules: [
          {
            label: "Session 3 — Introduction to Natural Language Processing",
            topics: [
              "<strong>What is NLP?</strong> — Scope, real-world applications & industry relevance across domains",
              "<strong>NLP vs NLU vs NLG</strong> — Where each fits in the language AI pipeline",
              "<strong>NLTK vs spaCy</strong> — Rule-based & research-oriented (NLTK) vs industrial-grade & production-ready (spaCy) — trade-offs & when to choose which",
            ],
            handson: {
              label: "💻 Theory + Hands-On — Text Preprocessing Pipeline",
              topics: [
                "<strong>Tokenisation</strong> — Word-level & sentence-level tokenisation; how tokenisers differ across libraries",
                "<strong>Stemming vs Lemmatisation</strong> — Algorithmic stemming (Porter, Snowball) vs dictionary-based lemmatisation",
                "<strong>Stopword Removal</strong> — Purpose, when to apply & domain-specific customisation",
                "<strong>POS Tagging & Dependency Parsing</strong> — Grammatical role labelling and its downstream use in information extraction",
                "Build a reusable NLP preprocessing utility class using both NLTK and spaCy",
              ],
            },
          },
          {
            label: "Session 4 — Word Representations & Neural Embeddings",
            topics: [
              "<strong>Why Embeddings?</strong> — The semantic gap in raw text representation; motivation from the matrix perspective",
              "<strong>Count / Frequency-Based Methods</strong> — One-Hot Encoding (OHE), Bag-of-Words (BoW), TF-IDF; strengths, weaknesses & the sparsity problem",
              "<strong>N-Grams</strong> — Capturing local context; bi-grams & tri-grams in language modelling",
            ],
            handson: {
              label: "💻 Theory + Hands-On — Neural Word Embeddings (Word2Vec)",
              topics: [
                "<strong>Word2Vec Architecture</strong> — Intuition: predicting context from words and words from context",
                "<strong>CBOW (Continuous Bag-of-Words)</strong> — Architecture walkthrough with visual illustration; training mechanics",
                "<strong>Skip-Gram</strong> — Architecture walkthrough with visual illustration; negative sampling & why it scales",
                "CBOW vs Skip-Gram — Empirical comparison on a small corpus; when to prefer each",
                "Practical: Train a Word2Vec model; visualise embeddings with t-SNE; explore semantic arithmetic (king − man + woman ≈ queen)",
              ],
            },
          },
        ],
      },
    ],
  },

  // ══ DAY 2 ══
  {
    day: 2,
    weekend: "Weekend 1 · Sunday",
    title: "Neural Networks, NLP Pipeline & Sequence Models",
    sessions: [
      {
        type: "forenoon",
        modules: [
          {
            label: "Session 1 — ML/DL Architecture & Neural Network Fundamentals",
            topics: [
              "<strong>Data Types in AI</strong> — Structured, unstructured (text, image, audio) & sequential data — mapping each to the appropriate ML paradigm",
              "<strong>Predictive AI vs Generative AI</strong> — Distinct objectives, output types & architectural differences",
              "<strong>Foundational Models</strong> — The shift from narrow to general-purpose AI",
              "<strong>What is a Neural Network?</strong> — Biological analogy; neurons, layers & models as the building blocks of deep learning",
              "<strong>Inside a Neuron</strong> — Weighted sum, bias & activation function; ReLU, Sigmoid, Tanh — purpose, shape & when to use each",
              "<strong>Dense (Fully Connected) Networks</strong> — Architecture walkthrough; calculating total trainable parameters from layer dimensions",
              "<strong>Visualising Decision Boundaries</strong> — How stacking layers enables non-linear separators",
              "<strong>Neural Network for Classification vs Regression</strong> — Output layer design, loss function choice & evaluation metrics",
            ],
          },
          {
            label: "Session 2 — Training Neural Networks: Optimisation & Model Lifecycle",
            topics: [
              "<strong>Parameters vs Hyper-parameters</strong> — What the model learns (weights & biases) vs what the practitioner sets",
              "<strong>Loss Functions</strong> — MSE for regression, cross-entropy for classification",
              "<strong>Gradient Descent</strong> — Intuition: navigating the loss landscape; learning rate & convergence; mini-batch SGD",
              "<strong>Iteration, Batch & Epoch</strong> — Three levels of training granularity",
              "<strong>Development–Testing Paradigm</strong> — Train / validation / test split; avoiding data leakage",
              "<strong>K-Fold Cross-Validation</strong> — Robust evaluation strategy; bias-variance tradeoff",
              "<strong>Hyper-parameter Tuning</strong> — Grid search vs random search",
              "<strong>Early Stopping & Overfitting Detection</strong> — Training vs validation loss curves; regularisation strategies",
            ],
            handson: {
              label: "💻 Hands-On Lab — Neural Networks using TensorFlow / Keras API",
              groups: [
                {
                  subLabel: "Experiment 1 — House Price Prediction (Regression)",
                  topics: [
                    "<strong>Problem:</strong> Predict house prices from house size (sq.ft) & distance from city center",
                    "<strong>Architecture:</strong> Input(2) → Dense(8, ReLU) → Dense(1, Linear activation)",
                    "<strong>Training:</strong> MSE loss, Adam optimiser, 1000 epochs, batch size 32",
                    "<strong>Outcome:</strong> Plot true vs predicted prices; interpret the training loss curve",
                  ],
                },
                {
                  subLabel: "Experiment 2 — Student Pass / Fail Prediction (Classification)",
                  topics: [
                    "<strong>Problem:</strong> Predict pass/fail outcome from hours studied & attendance percentage",
                    "<strong>Architecture:</strong> Input(2) → Dense(8, ReLU) → Dense(1, Sigmoid activation)",
                    "<strong>Training:</strong> Binary cross-entropy loss, Adam optimiser, 1000 epochs, batch size 12",
                    "<strong>Outcome:</strong> Plot predicted probability vs hours studied; observe sigmoid decision boundary at 0.5",
                  ],
                },
                {
                  subLabel: "Key Insight",
                  topics: [
                    "Regression vs classification differ only in the output layer & loss — the same neural network philosophy applies to both",
                  ],
                },
              ],
            },
          },
        ],
      },
      {
        type: "afternoon",
        modules: [
          {
            label: "Session 3 — NLP Foundations & Text Preprocessing Pipeline",
            topics: [
              "<strong>NLP vs NLU vs NLG</strong> — Where each fits in the language AI pipeline; practical examples in production systems",
              "<strong>Major Tasks in NLP</strong> — Text classification, NER, summarisation, translation, question answering, sentiment analysis",
              "<strong>Generic NLP Pipeline</strong> — Text cleaning → tokenisation → vectorisation → model → output",
              "<strong>Text Cleaning</strong> — Lowercasing, punctuation removal, handling HTML tags & special characters",
              "<strong>Data Pre-Processing for NLP</strong> — Stopword removal, stemming vs lemmatisation, POS tagging & dependency parsing",
            ],
          },
          {
            label: "Session 4 — Tokenisation, Vectorisation & Word Representations",
            topics: [
              "<strong>Tokenisation Deep Dive</strong> — Word-level, character-level & subword tokenisation; OOV handling trade-offs",
              "<strong>Byte Pair Encoding (BPE)</strong> — Step-by-step vocabulary generation; how GPT & BERT tokenisers are built",
              "<strong>Vocabulary Indexing & Text Vectorisation</strong> — Mapping tokens to integer indices; padding & truncation strategies",
              "<strong>Word Embeddings</strong> — Distributional hypothesis; dense vector representations capturing semantic meaning",
              "<strong>Embedding Layer</strong> — Learnable embedding matrix; pre-trained vs trained end-to-end embeddings",
              "<strong>Visualising Word Vectors</strong> — t-SNE projections; semantic clusters & relational geometry",
              "<strong>Sequence Models & Their Use Cases</strong> — RNNs, LSTMs, Bi-LSTMs; vanishing gradient limitations & the motivation for Transformers",
            ],
            demo: {
              label: "🎬 Live Demo — BPE Tokenisation in Action",
              topics: [
                "Live walkthrough of BPE vocabulary construction on a small corpus; compare word-level vs subword tokenisation on domain-specific text",
              ],
            },
            handson: {
              label: "💻 Hands-On Lab — TextVectorization & Embedding Layers (IMDb Sentiment)",
              groups: [
                {
                  subLabel: "Dataset — IMDb Movie Reviews (50K reviews)",
                  topics: [
                    "50,000 movie reviews labelled positive / negative; split into train (20K), validation (5K) & test (25K) sets",
                    "Raw text loaded from directory structure using text_dataset_from_directory",
                  ],
                },
                {
                  subLabel: "Part 1 — TextVectorization Layer",
                  topics: [
                    "Instantiate a TextVectorization layer (vocab size = 20,000; max sequence length = 600); adapt to training corpus",
                    "Explore standardisation → tokenisation → vocabulary indexing in one pipeline step",
                    "Encode a test sentence to integer indices and decode it back; observe OOV handling & padding behaviour",
                  ],
                },
                {
                  subLabel: "Part 2 — Embedding Layer & Full Model",
                  topics: [
                    "Add an Embedding layer (input_dim = 20,000, output_dim = 256) — maps each word index to a 256-dimensional dense vector",
                    "Full model: Raw Text → TextVec → Embedding → GlobalAvgPooling1D → Dense(64, ReLU) → Dense(32, ReLU) → Dropout(0.5) → Dense(1, Sigmoid)",
                    "Train for 20 epochs with binary cross-entropy; observe test accuracy on the held-out set",
                  ],
                },
                {
                  subLabel: "Part 3 — Visualising Word Embeddings (Before vs After Training)",
                  topics: [
                    "Extract embedding weights before training (random init); reduce to 2D with PCA; plot words like good, bad, nice, poor, terrible, terrific",
                    "Retrain; extract updated embedding weights; replot — observe semantically similar words clustering together",
                    "<strong>Key Insight:</strong> The embedding layer learns task-relevant geometry — words that behave similarly in sentiment contexts occupy nearby regions of vector space",
                  ],
                },
              ],
            },
          },
        ],
      },
    ],
  },

  // ══ DAY 3 ══
  {
    day: 3,
    weekend: "Weekend 2 · Saturday",
    title: "Prompt Engineering, AI Frameworks & Deep-Dive into Retrieval-Augmented Generation (RAG)",
    sessions: [
      {
        type: "forenoon",
        modules: [
          {
            label: "Session 1 — Navigating the LLM Ecosystem",
            topics: [
              "<strong>Choosing the Right Model for the Task</strong> — Matching capability, cost & latency to use-case requirements",
              "<strong>Model Providers Overview</strong> — OpenAI, Anthropic, Google DeepMind, Meta (Llama), Mistral AI, Cohere & open-source alternatives",
              "<strong>API Access & Key Procurement</strong> — Free tiers vs paid plans; obtaining & securing API keys from each provider",
              "<strong>Understanding Model Internals</strong> — Parameters & weights, context window size, temperature, top-p, max tokens, stop sequences",
              "Comparing models side-by-side: GPT-4o, Claude 3.5, Gemini 1.5 Pro, Llama 3 — benchmarks & real-world trade-offs",
            ],
          },
          {
            label: "Session 2 — Prompt Engineering: From Basics to Production",
            topics: [
              "<strong>Why Prompting Matters</strong> — The prompt as the primary interface to an LLM; its outsized impact on output quality",
              "<strong>Anatomy of a Prompt</strong> — System prompt, user message, assistant message & contextual memory",
              "<strong>Prompting Strategies</strong> — Zero-shot, few-shot, instruction prompting & prompt chaining",
              "<strong>Advanced Techniques</strong> — Chain-of-Thought (CoT), Tree-of-Thought (ToT), ReAct prompting, self-consistency",
              "<strong>Prompt Optimisation & Evaluation</strong> — Iterative refinement, evaluation rubrics, automated prompt testing",
            ],
            demo: {
              label: "🎬 Live Demo — Prompt Engineering in Action",
              topics: [
                "Build a live, working application powered purely by structured prompts — demonstrating the transformative power of well-crafted prompts on output quality",
              ],
            },
          },
          {
            label: "Session 3 — AI Application Frameworks",
            topics: [
              "<strong>Why Frameworks?</strong> — Moving beyond raw API calls to maintainable, composable & scalable AI applications",
              "<strong>Ecosystem Overview</strong> — LangChain, Anthropic Claude SDK, OpenAI SDK, Google Agent Development Kit (ADK)",
              "<strong>Deep Focus: LangChain</strong> — Core primitives: chains, prompts, output parsers, memory & integrations",
            ],
            demo: {
              label: "🎬 Live Demo — Framework vs Raw API",
              topics: [
                "Build the same application twice — once with raw API calls and once with LangChain — demonstrating developer experience, maintainability & why frameworks matter",
              ],
            },
          },
        ],
      },
      {
        type: "afternoon",
        modules: [
          {
            label: "Session 4 — What is RAG & Why it Matters",
            topics: [
              "<strong>The LLM Knowledge Gap</strong> — Static training data, hallucinations & the need for grounded, verifiable responses",
              "<strong>What is Retrieval-Augmented Generation?</strong> — Bridging LLMs with external, up-to-date knowledge sources",
              "<strong>Advantages of RAG</strong> — Reduced hallucination, domain specificity, no retraining cost, real-time knowledge freshness & source attribution",
            ],
          },
          {
            label: "Session 5 — RAG Architecture: Phase-by-Phase Deep Dive",
            topics: [
              "<strong>Phase 1 — Data Ingestion</strong> — Document loaders (PDF, DOCX, PPT, JSON, Images, CSV); chunking strategies (fixed-size, recursive, semantic, sentence-window); metadata tagging",
              "<strong>Phase 2 — Indexing</strong> — Embedding models (dense vs sparse); vector store options (FAISS, Chroma, Pinecone, Weaviate); indexing pipeline design & refresh strategies",
              "<strong>Phase 3 — Querying</strong> — Query transformation & expansion; similarity search (cosine, dot-product); Maximum Marginal Relevance (MMR); relevance re-ranking",
              "<strong>Phase 4 — Generation</strong> — Prompt construction with retrieved context; context window management; grounded response generation & streaming",
            ],
          },
          {
            label: "Advanced RAG Patterns",
            isVariant: true,
            topics: [
              "<strong>Agentic RAG</strong> — Dynamic retrieval decisions, self-querying retrievers, iterative refinement loops & tool-augmented retrieval",
              "<strong>Multimodal RAG</strong> — Ingesting and querying across text, images & structured data simultaneously",
            ],
            demo: {
              label: "🎬 Live Demo & 💻 Hands-On — End-to-End RAG Application",
              topics: [
                "Live construction of a production-grade RAG chatbot with multi-format document support (PDF, DOCX, PPT, JSON, CSV, Images) — incorporating Agentic retrieval features and source citations",
              ],
            },
          },
        ],
      },
    ],
  },

  // ══ DAY 4 ══
  {
    day: 4,
    weekend: "Weekend 2 · Sunday",
    title: "Transformers Architecture – Encoder, Decoder & GPT Models",
    sessions: [
      {
        type: "forenoon",
        modules: [
          {
            label: "Session 1 — Sequence Modelling & Language Modelling Foundations",
            topics: [
              "<strong>NLP as a Sequence Modelling Task</strong> — Representing input text as a sequence of integers; mapping to a vector space via embeddings",
              "<strong>What is a Language Model?</strong> — Any model that predicts the probability of the next token; LMs capture the latent statistical structure of language",
              "<strong>Large Language Models</strong> — Trained on trillions of tokens with billions of parameters; emergent abilities; instruction-following behaviour",
              "<strong>LLMs as Sophisticated Lookup Tables</strong> — Intuition behind why scale and training data breadth unlock generalisation",
            ],
          },
          {
            label: "Session 2 — Language Modelling Approaches: MLM vs Next-Token Prediction",
            topics: [
              "<strong>Masked Language Modeling (MLM)</strong> — Fill-in-the-blank pre-training; random token masking; model predicts masked token from full bidirectional context — the BERT training paradigm",
              "<strong>Sentence Completion / Next-Token Prediction</strong> — Autoregressive mode; (k+1)-st token predicted using prompt + k generated tokens — the GPT training paradigm",
              "<strong>Transformer Encoder vs Decoder</strong> — Encoder: bidirectional context → text understanding; Decoder: left-to-right causal context → text generation",
            ],
          },
          {
            label: "Session 3 — Transformer Encoder Architecture & Self-Attention Deep Dive",
            topics: [
              "<strong>Steps in a Transformer Encoder</strong> — Tokenise → encoded sequence + positional embedding → Multi-Head Attention → residual + layer norm → dense layers → [CLS] representation",
              "<strong>Self-Attention — Core Intuition</strong> — Vaswani et al. (2017), 'Attention is All You Need'; the word 'station' changes meaning based on context",
              "<strong>Query-Key-Value (QKV) Model</strong> — Query: what am I looking for? Key: what do I offer? Value: what do I contribute?",
              "<strong>Step-by-Step QKV Computation</strong> — Project to Q, K, V → pairwise dot-product scores → scale by √d_k → softmax → weighted sum of Value vectors",
              "<strong>QKV as Matrix Operations</strong> — Full sequence processed in parallel; no recurrence required; enables efficient GPU utilisation",
              "<strong>Multi-Head Attention (MHA)</strong> — Running h attention heads in parallel; each head focuses on different relational patterns (syntax, co-reference, semantics)",
              "<strong>Dense Layers in MHA</strong> — Position-wise feed-forward layers adding non-linearity for richer representations",
              "<strong>Residual Connections & Layer Normalisation</strong> — Skip connections preserve original signal; comparison with batch normalisation",
              "<strong>Positional Encoding</strong> — Attention is permutation-invariant; sine/cosine positional encodings inject token-order information",
            ],
            demo: {
              label: "🎬 Live Demo — Attention Weight Visualisation",
              topics: [
                "Visualise attention maps layer-by-layer; observe which tokens attend to which; see how multiple heads capture different linguistic relationships simultaneously",
              ],
            },
          },
        ],
      },
      {
        type: "afternoon",
        modules: [
          {
            label: "Session 4 — Transformer Decoder & Causal (Masked) Attention",
            topics: [
              "<strong>Steps in a Transformer Decoder</strong> — Tokenise prompt → encoded sequence + positional embedding → Masked Multi-Head Attention → dense layers → last-token representation → next-token generation",
              "<strong>Masked Multi-Head Attention</strong> — Causal masking: each token attends only to itself and tokens to its left; future positions masked with −∞ before softmax",
              "<strong>Autoregressive Generation</strong> — (k+1)-st token generated from probability distribution and appended; repeats until EOS; temperature & top-p sampling for output diversity",
            ],
          },
          {
            label: "Session 5 — BERT & GPT: Pre-trained Transformer Models",
            topics: [
              "<strong>BERT</strong> — Encoder-only architecture; trained with MLM + Next Sentence Prediction; fine-tuned for classification, NER & QA; uses [CLS] token representation",
              "<strong>GPT</strong> — Decoder-only architecture; trained with next-token prediction; the foundation of ChatGPT, GPT-4 & all modern autoregressive LLMs",
              "<strong>What GPT Does</strong> — Given a prompt, generate the most probable continuation token-by-token; the entire generative AI revolution stems from this mechanism at scale",
              "<strong>GPT-1 → GPT-2 → GPT-3: Scaling Laws</strong> — Parameter counts 117M → 1.5B → 175B; emergent few-shot & zero-shot generalisation abilities appear with scale",
              "<strong>GPT-2 Capabilities</strong> — Machine translation & summarisation without task-specific fine-tuning; powerful in-context learning",
              "<strong>GPT-3 Specifics</strong> — 175B parameters; 96 transformer layers; strong in-context learning across diverse domains",
              "<strong>Foundational Models</strong> — Pre-trained once on broad data, adapted for many downstream tasks via prompting or fine-tuning",
            ],
          },
          {
            label: "Session 6 — Generative AI Use Cases & GPT Training Data Preparation",
            isVariant: true,
            topics: [
              "<strong>Generative AI Use Cases</strong> — Code generation (GitHub Copilot), content creation, conversational AI, document summarisation, translation & multimodal generation",
              "<strong>LLM Research & Benchmarks</strong> — BIG-Bench (Beyond the Imitation Game); emergent abilities appear as scale increases",
              "<strong>Data Preparation for GPT Training</strong> — Raw text corpora → cleaning → tokenisation → BPE vocabulary → sequence packing into fixed-length chunks → training batches",
              "<strong>GPT Architecture Internals</strong> — Token embedding + positional encoding → stacked transformer (decoder) blocks → output projection to vocabulary logits → softmax next-token selection",
            ],
            handson: {
              label: "💻 Hands-On & Quiz — Transformer Visual Walkthrough",
              topics: [
                "Trace an input sentence step-by-step through the full Transformer Encoder: compute QKV projections, attention scores, softmax weights & context vectors on a minimal worked example",
                "Trace through the Transformer Decoder: apply causal mask, generate the first token, extend the sequence and repeat the autoregressive loop",
                "Quiz: identify encoder vs decoder components on an architecture diagram; predict attention mask patterns; match GPT generation steps to diagram",
              ],
            },
          },
        ],
      },
    ],
  },

  // ══ DAY 5 ══
  {
    day: 5,
    weekend: "Weekend 3 · Saturday",
    title: "Hugging Face Ecosystem, Multi-Modal Pipelines & LLM Fine-Tuning Foundations",
    sessions: [
      {
        type: "forenoon",
        modules: [
          {
            label: "Session 1 — The Hugging Face Ecosystem",
            topics: [
              "<strong>What is Hugging Face & Why it Matters</strong> — The de-facto hub for open-source AI; models, datasets, Spaces & the community",
              "<strong>Navigating the Hub</strong> — Model cards, dataset cards, leaderboards & community benchmarks",
              "<strong>Selecting the Right Model</strong> — Filtering by task, language, license, parameter count & evaluation metrics",
              "<strong>Access & Authentication</strong> — Creating a HF token; gated models vs public models; loading with and without authentication",
              "<strong>Datasets on Hugging Face</strong> — Browsing, loading & streaming large datasets with the datasets library",
            ],
          },
          {
            label: "Session 2 — Multi-Modal Pipelines Across Task Categories",
            topics: [
              "<strong>Natural Language Processing</strong> — Text classification, NER, summarisation, translation, question answering",
              "<strong>Computer Vision</strong> — Image classification, object detection, image segmentation, depth estimation",
              "<strong>Audio</strong> — Speech-to-text (ASR), text-to-speech (TTS), audio classification",
              "<strong>Multimodal</strong> — Visual question answering (VQA), image captioning, OCR + generation pipelines",
            ],
            handson: {
              label: "💻 Hands-On — Multi-Modal Task Exploration",
              topics: [
                "Zero-shot intent classification & sentiment analysis using the pipeline() API",
                "Text-to-image generation using diffusion models from the Hub",
                "Text-to-speech & speech-to-text round-trip pipeline",
                "OCR → LLM post-processing → structured JSON output pipeline",
                "Sentence-transformer embeddings for semantic search and retrieval tasks",
              ],
            },
          },
        ],
      },
      {
        type: "afternoon",
        modules: [
          {
            label: "Session 3 — Fine-Tuning Fundamentals",
            topics: [
              "<strong>Why Fine-Tune?</strong> — When prompting isn't enough; domain adaptation, style alignment & task specialisation",
              "<strong>Full Fine-Tuning vs PEFT</strong> — Compute cost, memory footprint & practical feasibility comparison",
              "<strong>Understanding Model Weights & Memory</strong> — Parameter counts; FP32 / FP16 / INT8 / INT4 precision; VRAM planning & hardware requirements",
              "<strong>Context Window & Sequence Length</strong> — Impact on training time, data formatting & inference behaviour",
              "<strong>Local Models vs API Models</strong> — When to run locally (Ollama, LM Studio) vs when to fine-tune via cloud training APIs",
            ],
          },
          {
            label: "Session 4 — PEFT, LoRA & QLoRA: Efficient Adaptation",
            isVariant: true,
            topics: [
              "<strong>PEFT Overview</strong> — Adapter layers, prefix tuning, prompt tuning & the LoRA family of methods",
              "<strong>LoRA (Low-Rank Adaptation)</strong> — Mathematical intuition: rank decomposition of weight updates; configuring rank (r), alpha & target modules",
              "<strong>QLoRA (Quantized LoRA)</strong> — 4-bit NormalFloat quantisation + double quantisation; enabling large-model fine-tuning on consumer-grade hardware",
              "<strong>Instruction Fine-Tuning</strong> — Instruction-following data formats (Alpaca, ShareGPT, ChatML); data curation best practices",
              "<strong>Dataset Selection & Quality</strong> — Quality over quantity; filtering, cleaning & formatting training data",
              "<strong>Model Selection by Scale</strong> — 1B / 3B / 7B / 13B / 70B+ — choosing based on task complexity & available compute",
            ],
            handson: {
              label: "💻 Theory + Demo — Fine-Tuning Pipeline Walkthrough",
              topics: [
                "Step-by-step walkthrough of the complete fine-tuning pipeline: data prep → tokenisation → training config → LoRA/QLoRA setup → training loop",
                "Full hands-on execution continues in Day 6 Forenoon",
              ],
            },
          },
        ],
      },
    ],
  },

  // ══ DAY 6 ══
  {
    day: 6,
    weekend: "Weekend 3 · Sunday",
    title: "Fine-Tuning Completion, Model Publishing & Production Backend with FastAPI + Streamlit",
    sessions: [
      {
        type: "forenoon",
        modules: [
          {
            label: "Session 1 — Hands-On Fine-Tuning: Training on Custom Data",
            topics: [],
            handson: {
              label: "💻 Full Hands-On Lab — Fine-Tune Your Own Model",
              topics: [
                "Prepare and format a custom domain dataset in instruction-following format",
                "Configure QLoRA fine-tuning parameters: rank, alpha, target modules, training arguments",
                "Execute fine-tuning run; monitor training loss, GPU utilisation & learning curves in real time",
                "Merge LoRA adapters back into the base model; export the final merged weights",
              ],
            },
          },
          {
            label: "Session 2 — Model Evaluation & Publishing to Hugging Face Hub",
            topics: [
              "<strong>Evaluating the Fine-Tuned Model</strong> — Qualitative prompting tests; perplexity scores; side-by-side comparison with the base model",
              "<strong>Benchmark Evaluation</strong> — Running standard NLP benchmarks to quantify improvement & identify regressions",
              "<strong>Publishing to Hugging Face Hub</strong> — Creating a model repository, writing a comprehensive model card, pushing weights & tokeniser",
              "Showcasing the published model in the Hugging Face Spaces inference widget",
            ],
          },
        ],
      },
      {
        type: "afternoon",
        modules: [
          {
            label: "Session 3 — FastAPI: Building Production-Grade AI Backends",
            topics: [
              "<strong>Why FastAPI?</strong> — Async-first, automatic OpenAPI docs, type safety with Pydantic & high-performance ASGI architecture",
              "Core concepts: path operations, request/response models, dependency injection, middleware & CORS configuration",
              "<strong>Request Validation</strong> — Pydantic models for JSON bodies, query parameters, form data & file uploads",
              "<strong>Async Route Handlers & Background Tasks</strong> — Non-blocking LLM inference calls; long-running task management",
              "<strong>Streaming Responses</strong> — Server-Sent Events (SSE) for real-time token-by-token LLM streaming to frontends",
              "<strong>API Security</strong> — API key authentication, rate limiting & environment variable management with Pydantic Settings",
              "Structuring a production FastAPI project: routers, services, schemas & config layers",
            ],
          },
          {
            label: "Session 4 — Streamlit: Rapid AI Frontend Development",
            topics: [
              "<strong>Why Streamlit?</strong> — From data prototype to shareable web app in minutes; the data-app philosophy",
              "Core widgets: text input, file uploader, chat message components, session state & caching decorators",
              "st.chat_input / st.chat_message — Building production chat UIs natively",
              "Consuming FastAPI streaming endpoints for real-time token display within Streamlit",
              "Multi-page apps, layout management, theming & deployment",
            ],
            demo: {
              label: "🎬 Live Build & 💻 Hands-On — Full-Stack RAG Application",
              topics: [
                "End-to-end live construction: FastAPI backend (document ingestion, vector store, LLM inference, streaming API endpoints) + Streamlit frontend (chat UI, file upload, source citations) — from blank project to running application",
              ],
            },
          },
        ],
      },
    ],
  },

  // ══ DAY 7 ══
  {
    day: 7,
    weekend: "Weekend 4 · Saturday",
    title: "AI Agents & Agentic Frameworks — LangChain Agents, LangGraph & Autonomous Workflows",
    sessions: [
      {
        type: "forenoon",
        modules: [
          {
            label: "Session 1 — Understanding AI Agents & Agentic AI",
            topics: [
              "<strong>What is an AI Agent?</strong> — The perceive–reason–act–observe loop; agents vs simple LLM calls",
              "<strong>Generative AI vs AI Agents vs Agentic AI</strong> — Precise distinctions grounded in Anthropic's published research & industry frameworks",
              "<strong>How Autonomous Agents Work</strong> — Planning, tool use, memory management, reflection & self-correction cycles",
              "<strong>Agent Design Patterns</strong> — ReAct (Reason + Act), Plan-and-Execute, Reflexion, multi-agent collaboration",
            ],
          },
          {
            label: "Session 2 — LangChain Agents: Core Concepts & Architecture",
            topics: [
              "<strong>LLM as the Brain</strong> — Static vs dynamic model invocation; when the LLM decides what to do next",
              "<strong>ReAct Loop</strong> — Thought → Action → Observation → Repeat; tracing an agent's reasoning steps live",
              "<strong>Memory Architecture</strong> — Short-term (in-context) vs long-term (vector store, external DB) memory; management strategies",
              "<strong>Tools & Tool Calling</strong> — Defining custom tools, built-in tool libraries, structured function calling with JSON schemas",
              "<strong>Structured Output</strong> — Enforcing output schemas with Pydantic; output parsers & retry logic",
              "<strong>Streaming & Batching</strong> — Real-time token streaming from agents; batch inference patterns",
              "<strong>Messages & Conversation History</strong> — HumanMessage, AIMessage, SystemMessage, ToolMessage — managing multi-turn context",
              "<strong>Middlewares & Callbacks</strong> — Logging, tracing (LangSmith), cost tracking & debugging hooks",
              "<strong>Human-in-the-Loop (HITL)</strong> — Approval gates, clarification requests & controlled autonomy patterns",
              "<strong>Context Engineering</strong> — Optimising the context window for sustained agent performance",
              "<strong>Multi-Agent Systems</strong> — Supervisor, worker & peer architectures; routing between specialised agents",
              "<strong>Retrieval in Agents</strong> — Integrating RAG as an agent tool; self-querying & iterative retrieval",
            ],
            handson: {
              label: "💻 Hands-On — Build a LangChain Agent from Scratch",
              topics: [
                "Design and implement a multi-tool ReAct agent with memory, structured output & HITL approval gates — connected to a real data source",
              ],
            },
          },
        ],
      },
      {
        type: "afternoon",
        modules: [
          {
            label: "Session 3 — LangGraph: Stateful, Graph-Based Agent Workflows",
            isVariant: true,
            topics: [
              "<strong>Why LangGraph?</strong> — Limitations of linear chains; the need for cycles, branching & persistent state in complex agents",
              "<strong>Core Abstractions</strong> — State schema, Nodes (agent/tool functions), Edges (deterministic transitions) & Conditional Edges (LLM-driven branching)",
              "<strong>Workflow + Agent Hybrid Architectures</strong> — Combining deterministic process flows with autonomous LLM decision-making",
              "<strong>Interrupts for Human-in-the-Loop</strong> — Pausing graph execution at defined breakpoints for human review & approval",
              "<strong>Sub-Agents & Supervisor Patterns</strong> — Orchestrating specialised sub-graphs from a top-level supervisor node",
              "<strong>Persistence & Checkpointing</strong> — Saving graph state to resume long-running, multi-session workflows",
              "<strong>Agent-Native UI Integration</strong> — Connecting LangGraph agents to streaming frontends",
            ],
            demo: {
              label: "🎬 Live Demo — Multi-Agent Research Workflow in LangGraph",
              topics: [
                "Live construction of a multi-agent research & summarisation workflow with conditional routing, HITL approval & state persistence",
              ],
            },
            handson: {
              label: "💻 Hands-On — LangGraph Agent Lab",
              topics: [
                "Build a stateful LangGraph workflow with at least three nodes, conditional edges & a human-interrupt checkpoint",
              ],
            },
          },
        ],
      },
    ],
  },

  // ══ DAY 8 ══
  {
    day: 8,
    weekend: "Weekend 4 · Sunday",
    title: "Model Context Protocol (MCP), GitHub Copilot Agents & Claude Desktop Integration",
    sessions: [
      {
        type: "forenoon",
        modules: [
          {
            label: "Session 1 — Model Context Protocol (MCP)",
            topics: [
              "<strong>What is MCP?</strong> — The open standard for connecting AI models to external tools, data & services",
              "<strong>MCP Ecosystem Architecture</strong> — MCP Host (LLM runtime), MCP Client (connector), MCP Server (capability provider)",
              "<strong>Communication Transport Layers</strong> — stdio (local processes), HTTP + SSE, HTTP Streamable — when and why to use each",
              "<strong>Core Primitives</strong> — Tools (executable functions), Resources (readable data), Prompts (reusable templates); distinctions & best practices",
              "MCP vs traditional REST API integration — comparing architectures & developer experience",
            ],
          },
          {
            label: "Session 2 — GitHub Copilot & AI-Assisted Development",
            topics: [
              "<strong>GitHub Copilot Overview & Setup</strong> — Copilot Chat, Copilot in the Editor, Copilot Agents & Extensions",
              "<strong>Agentic Coding Workflows</strong> — Using Copilot as an autonomous development agent; multi-file edits, test generation & refactoring",
              "<strong>Building MCP Servers with Copilot Assistance</strong> — Accelerating server scaffolding, tool definition & integration testing",
            ],
            demo: {
              label: "🎬 Live Demo — Project 1: Build a Custom MCP Server from Scratch",
              topics: [
                "Live construction of an MCP server exposing tools, resources & prompts — using GitHub Copilot as a development accelerator",
              ],
            },
            handson: {
              label: "💻 Lab — Individual MCP Server Setup",
              topics: [
                "Every participant sets up and runs the Project 1 MCP server on their local machine with trainer mentorship",
              ],
            },
          },
        ],
      },
      {
        type: "afternoon",
        modules: [
          {
            label: "Session 3 — Claude Desktop as an MCP Client",
            isVariant: true,
            topics: [
              "<strong>Claude Desktop Overview</strong> — Architecture, capabilities & its role as a powerful local MCP client",
              "<strong>Configuring Claude Desktop with MCP Servers</strong> — claude_desktop_config.json setup; connecting to local & remote servers",
              "Connect Project 1 MCP server: verify tool invocation, resource access & prompt usage from within Claude Desktop",
            ],
          },
          {
            label: "Session 4 — Project 2: PostgresMCP Server — Natural Language Database Interaction",
            isVariant: true,
            topics: [],
            demo: {
              label: "🎬 Live Demo — Project 2: PostgresMCP Server",
              topics: [
                "Build an MCP server that wraps a PostgreSQL database — enabling plain-English queries via Claude Desktop",
                "Architecture walkthrough: query parsing, SQL generation via LLM, result formatting & safety guardrails",
                "Connect Project 2 server to Claude Desktop; run live natural-language database queries end-to-end",
              ],
            },
            handson: {
              label: "💻 Lab — Project 2 Setup on All Machines",
              topics: [
                "Guided setup of the PostgresMCP server & Claude Desktop integration on every participant's local machine with mentorship",
              ],
            },
          },
        ],
      },
    ],
  },

  // ══ DAY 9 (CAPSTONE) ══
  {
    day: 9,
    weekend: "Weekend 5 · Saturday",
    title: "Capstone Project – Kickoff, Goal Alignment & Development Start · Group Activity",
    isCapstone: true,
    sessions: [
      {
        type: "forenoon",
        trainerTasks: ["Kickoff & Goal Alignment", "Review Guidance"],
        groupTasks: ["Present Projects", "Finalize Problem Statement"],
      },
      {
        type: "afternoon",
        trainerTasks: ["Define AI Approach", "Provide Mentoring"],
        groupTasks: ["Plan Tasks", "Start Development"],
      },
    ],
  },

  // ══ DAY 10 (CAPSTONE) ══
  {
    day: 10,
    weekend: "Weekend 5 · Sunday",
    title: "Capstone Project – Development, Demo & Final Presentation · Group Activity",
    isCapstone: true,
    sessions: [
      {
        type: "forenoon",
        trainerTasks: ["Progress Review", "Technical Support"],
        groupTasks: ["Continue Development", "Debug Issues"],
      },
      {
        type: "afternoon",
        trainerTasks: ["Evaluate & Give Feedback"],
        groupTasks: ["Prepare Demo", "Present Solution"],
      },
    ],
  },
];

const pricingPlans: PricingPlan[] = [
  {
    type: "institution",
    eyebrow: "For Institutions & Colleges",
    title: "Academic Training Package",
    desc: "Exclusively for educational institutions, colleges, and universities",
    amount: "₹2.5L",
    gst: "+ GST  |  per batch (up to 50 participants)",
    badge: { label: "50% OFF", text: "Special Offer", original: "₹5 Lakhs" },
    features: [
      "10 Full Days of Intensive Training",
      "2 Industrial Expert Trainers",
      "Hands-On Labs & Live Demos",
      "Capstone Project Mentoring",
      "Course Materials & Resources",
    ],
    gradient: "from-blue-900 via-blue-800 to-blue-700",
  },
  {
    type: "corporate",
    eyebrow: "For Corporate Organizations",
    title: "Corporate Training Package",
    desc: "Tailored for enterprises, startups, and professional teams",
    amount: "₹5L",
    gst: "+ GST  |  per batch (up to 50 participants)",
    badge: { label: "STANDARD", text: "Corporate Rate" },
    features: [
      "10 Full Days of Intensive Training",
      "2 Industrial Expert Trainers",
      "Hands-On Labs & Live Demos",
      "Capstone Project Mentoring",
      "Course Materials & Resources",
    ],
    gradient: "from-emerald-900 via-emerald-800 to-emerald-700",
  },
];

// ─── HELPER COMPONENTS ────────────────────────────────────────────────────────
const TopicList = ({ topics }: { topics: TopicHtml[] }) => (
  <ul className="space-y-2 mt-1">
    {topics.map((topic, i) => (
      <li
        key={i}
        className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-[7px] flex-shrink-0" />
        <span dangerouslySetInnerHTML={{ __html: topic }} />
      </li>
    ))}
  </ul>
);

const HandsonBlock = ({ block }: { block: HandsonData }) => (
  <div className="mt-3 rounded-lg border border-green-500/30 border-l-[3px] border-l-green-500 bg-green-500/5 dark:bg-green-500/[0.04] p-4">
    <p className="text-[10px] font-bold tracking-[1.4px] uppercase text-green-600 dark:text-green-400 mb-3">
      {block.label}
    </p>
    {block.groups ? (
      <div className="space-y-4">
        {block.groups.map((g, i) => (
          <div key={i}>
            <p className="text-[10px] font-bold uppercase tracking-wide text-green-600 dark:text-green-400 mb-2">
              {g.subLabel}
            </p>
            <TopicList topics={g.topics} />
          </div>
        ))}
      </div>
    ) : (
      block.topics && <TopicList topics={block.topics} />
    )}
  </div>
);

const DemoBlock = ({ block }: { block: DemoData }) => (
  <div className="mt-3 rounded-lg border border-orange-500/30 border-l-[3px] border-l-orange-500 bg-orange-500/5 dark:bg-orange-500/[0.04] p-4">
    <p className="text-[10px] font-bold tracking-[1.4px] uppercase text-orange-600 dark:text-orange-400 mb-3">
      {block.label}
    </p>
    {block.topics && <TopicList topics={block.topics} />}
  </div>
);

const ModuleLabel = ({
  label,
  isVariant,
}: {
  label: string;
  isVariant?: boolean;
}) => (
  <span
    className={`inline-block text-[10px] font-bold tracking-wide uppercase px-2.5 py-1 rounded mb-3 ${
      isVariant
        ? "bg-purple-600 dark:bg-purple-500 text-white"
        : "bg-primary text-primary-foreground dark:bg-neutral-700 dark:text-white"
    }`}
  >
    {label}
  </span>
);

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export const GenAIMasterProgramSection = () => {
  const [activeDay, setActiveDay] = useState(0);
  const currentDay = programDays[activeDay];

  return (
    <div className="space-y-10">
      {/* ── Program Header Card ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 p-8 md:p-12 text-white shadow-2xl"
      >
        {/* Decorative circles */}
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/[0.03] pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-44 h-44 rounded-full bg-white/[0.03] pointer-events-none" />

        <div className="relative z-10">
          <span className="inline-block bg-gradient-to-r from-amber-400 to-orange-400 text-slate-900 text-[10px] font-black tracking-[2px] uppercase px-4 py-1.5 rounded-full mb-5">
            Kogenix.AI · LearningHub
          </span>
          <h2 className="text-3xl md:text-4xl font-black leading-tight mb-2 tracking-tight">
            GenAI <span className="text-orange-400">Master</span> Training Program
          </h2>
          <p className="text-white/70 text-sm mb-8">
            Two Industrial Trainers · Comprehensive 10-Day Intensive
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: "Duration", value: "10 Days (5 Weekends)" },
              { label: "Daily Hours", value: "9:00 AM – 4:30 PM" },
              { label: "Trainers", value: "2 Industrial Trainers" },
              { label: "Max Audience", value: "50 Participants" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white/[0.08] border border-white/10 rounded-xl p-3 backdrop-blur-sm"
              >
                <p className="text-[10px] font-semibold uppercase tracking-wider text-orange-400 mb-1">
                  {item.label}
                </p>
                <p className="text-sm font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Day Selector + Content ── */}
      <div className="grid lg:grid-cols-[260px,1fr] gap-6 items-start">
        {/* Day tabs — sidebar on desktop, horizontal scroll on mobile */}
        <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 scrollbar-none lg:sticky lg:top-24">
          {programDays.map((day, index) => (
            <button
              key={day.day}
              onClick={() => setActiveDay(index)}
              className={`flex-shrink-0 flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all duration-200 ${
                activeDay === index
                  ? day.isCapstone
                    ? "bg-purple-500/15 border-2 border-purple-500"
                    : "bg-primary/10 border-2 border-primary"
                  : "bg-card border border-border hover:border-primary/50"
              }`}
            >
              <span
                className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0 transition-colors ${
                  activeDay === index
                    ? day.isCapstone
                      ? "bg-purple-500 text-white"
                      : "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {day.day}
              </span>
              <div className="min-w-0 hidden lg:block">
                <p
                  className={`text-[10px] font-bold uppercase tracking-wide ${
                    activeDay === index
                      ? day.isCapstone
                        ? "text-purple-400"
                        : "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {day.isCapstone ? "🏆 Capstone" : day.weekend.split("·")[0].trim()}
                </p>
                <p className="text-xs text-muted-foreground truncate max-w-[180px] leading-tight mt-0.5">
                  {day.title.split("–")[0].split("·")[0].split(",")[0].trim()}
                </p>
              </div>
              {/* Mobile: just show day number (already rendered in the span above) */}
              <span className="lg:hidden text-xs font-medium text-muted-foreground">
                D{day.day}
              </span>
            </button>
          ))}
        </div>

        {/* Day content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="space-y-5 min-w-0"
          >
            {/* Day header banner */}
            <div
              className={`rounded-xl px-5 py-4 border-l-4 ${
                currentDay.isCapstone
                  ? "bg-purple-500/10 border-l-purple-500"
                  : "bg-primary/5 border-l-primary"
              }`}
            >
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span
                  className={`text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                    currentDay.isCapstone
                      ? "bg-purple-500 text-white"
                      : "bg-primary text-primary-foreground"
                  }`}
                >
                  Day {currentDay.day}
                </span>
                <span className="text-xs text-muted-foreground">
                  {currentDay.weekend}
                </span>
              </div>
              <h3 className="font-bold text-foreground text-base leading-snug">
                {currentDay.title}
              </h3>
            </div>

            {/* Sessions */}
            {currentDay.sessions.map((session, sIdx) => (
              <div
                key={sIdx}
                className="bg-card rounded-xl border border-border overflow-hidden"
              >
                {/* Session badge header */}
                <div
                  className={`px-5 py-3 border-b border-border ${
                    session.type === "forenoon"
                      ? "bg-amber-500/5 dark:bg-amber-500/[0.12]"
                      : "bg-blue-500/5 dark:bg-blue-500/[0.12]"
                  }`}
                >
                  <span
                    className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full border ${
                      session.type === "forenoon"
                        ? "bg-amber-500/10 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300 border-amber-500/40"
                        : "bg-blue-500/10 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 border-blue-500/40"
                    }`}
                  >
                    {session.type === "forenoon" ? "☀ Forenoon" : "🌆 Afternoon"}
                  </span>
                </div>

                <div className="p-5">
                  {/* Capstone day layout */}
                  {currentDay.isCapstone && session.trainerTasks ? (
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="rounded-lg border border-blue-500/20 border-l-[3px] border-l-blue-500 bg-blue-500/5 p-4">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-blue-500 mb-3">
                          👨‍🏫 Trainer
                        </p>
                        <ul className="space-y-2">
                          {session.trainerTasks.map((t, i) => (
                            <li
                              key={i}
                              className="flex items-center gap-2 text-sm text-muted-foreground"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                              {t}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-lg border border-green-500/20 border-l-[3px] border-l-green-500 bg-green-500/5 p-4">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-green-500 mb-3">
                          👥 Groups
                        </p>
                        <ul className="space-y-2">
                          {(session.groupTasks ?? []).map((t, i) => (
                            <li
                              key={i}
                              className="flex items-center gap-2 text-sm text-muted-foreground"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                              {t}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    /* Regular session modules */
                    <div className="space-y-6">
                      {(session.modules ?? []).map((mod, mIdx) => (
                        <div
                          key={mIdx}
                          className={
                            mIdx > 0
                              ? "pt-5 border-t border-border/50"
                              : undefined
                          }
                        >
                          <ModuleLabel
                            label={mod.label}
                            isVariant={mod.isVariant}
                          />
                          {mod.topics && mod.topics.length > 0 && (
                            <TopicList topics={mod.topics} />
                          )}
                          {mod.demo && <DemoBlock block={mod.demo} />}
                          {mod.handson && <HandsonBlock block={mod.handson} />}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Mentorship Section ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-950 via-indigo-900 to-slate-900 p-8 md:p-10 text-white shadow-2xl"
      >
        {/* Decorative blobs */}
        <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-violet-500/10 pointer-events-none blur-2xl" />
        <div className="absolute -bottom-10 -left-10 w-44 h-44 rounded-full bg-indigo-500/10 pointer-events-none blur-2xl" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

        <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-start lg:items-center">
          {/* Left — heading & benefits */}
          <div className="flex-1">
            <span className="inline-block text-[10px] font-black tracking-[2px] uppercase px-3 py-1.5 rounded-full mb-5 border border-violet-400/30 bg-violet-500/20 text-violet-300">
              🎓 Personal Guidance
            </span>
            <h3 className="text-2xl md:text-3xl font-black mb-3 leading-tight">
              Need 1-on-1{" "}
              <span className="text-violet-400">Mentorship?</span>
            </h3>
            <p className="text-white/60 text-sm leading-relaxed max-w-md mb-6">
              Get direct access to our industry trainers for personalised career guidance, project reviews, and live doubt-clearing sessions.
            </p>
            <div className="grid grid-cols-2 gap-2.5">
              {[
                "Career Roadmap",
                "Project Reviews",
                "Interview Prep",
                "Live Doubt Sessions",
              ].map((b) => (
                <div key={b} className="flex items-center gap-2 text-xs text-white/70">
                  <span className="w-4 h-4 rounded-full bg-violet-500/40 flex items-center justify-center text-[9px] font-bold flex-shrink-0">
                    ✓
                  </span>
                  {b}
                </div>
              ))}
            </div>
          </div>

          {/* Right — contact cards */}
          <div className="flex flex-col gap-3 w-full lg:w-[280px] flex-shrink-0">
            {/* Phone 1 */}
            <a
              href="tel:+918438061354"
              className="group flex items-center gap-4 bg-white/[0.07] hover:bg-white/[0.13] border border-white/10 hover:border-violet-400/50 rounded-xl px-5 py-4 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-lg bg-violet-500/30 group-hover:bg-violet-500/50 flex items-center justify-center transition-colors flex-shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-wider text-white/50 mb-0.5">Call Us</p>
                <p className="text-sm font-bold truncate">+91 84380 61354</p>
              </div>
              <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0" />
            </a>

            {/* Phone 2 */}
            <a
              href="tel:+919003103146"
              className="group flex items-center gap-4 bg-white/[0.07] hover:bg-white/[0.13] border border-white/10 hover:border-indigo-400/50 rounded-xl px-5 py-4 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-lg bg-indigo-500/30 group-hover:bg-indigo-500/50 flex items-center justify-center transition-colors flex-shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-wider text-white/50 mb-0.5">Call Us</p>
                <p className="text-sm font-bold truncate">+91 90031 03146</p>
              </div>
              <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0" />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/918438061354"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-white/[0.07] hover:bg-white/[0.13] border border-white/10 hover:border-green-400/50 rounded-xl px-5 py-4 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-lg bg-green-500/30 group-hover:bg-green-500/50 flex items-center justify-center transition-colors flex-shrink-0">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-wider text-white/50 mb-0.5">WhatsApp</p>
                <p className="text-sm font-bold truncate">Chat with a Mentor</p>
              </div>
              <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* ── Pricing Section ── */}
      <div>
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <p className="text-xs font-bold uppercase tracking-[2px] text-muted-foreground whitespace-nowrap">
            Training Investment & Pricing
          </p>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.type}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${plan.gradient} p-7 text-white shadow-xl`}
            >
              {/* Decorative circle */}
              <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-white/[0.08] pointer-events-none" />

              <div className="relative z-10">
                <p className="text-[10px] font-bold uppercase tracking-[2px] opacity-70 mb-1.5">
                  {plan.eyebrow}
                </p>
                <h3 className="text-xl font-black mb-1">{plan.title}</h3>
                <p className="text-xs opacity-70 leading-relaxed mb-5">{plan.desc}</p>

                <div className="flex items-end gap-1 mb-1">
                  <span className="text-4xl font-black tracking-tight leading-none">
                    {plan.amount}
                  </span>
                </div>
                <p className="text-xs font-semibold opacity-75 mb-4">{plan.gst}</p>

                <span className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-4 py-1.5 text-xs font-bold">
                  <span className="bg-amber-400 text-slate-900 text-[9px] font-black px-2 py-0.5 rounded-full">
                    {plan.badge.label}
                  </span>
                  {plan.badge.text}
                  {plan.badge.original && (
                    <span className="opacity-60 line-through text-[11px]">
                      {plan.badge.original}
                    </span>
                  )}
                </span>

                <div className="h-px bg-white/15 my-5" />

                <p className="text-[10px] font-bold uppercase tracking-[1.5px] opacity-60 mb-3">
                  Includes
                </p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-xs opacity-90">
                      <span className="w-[18px] h-[18px] rounded-full bg-white/20 flex items-center justify-center text-[9px] font-bold flex-shrink-0">
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <NavLink
                  to="/contact"
                  className="block w-full py-3 bg-white/15 hover:bg-white/25 transition-all rounded-xl text-center text-sm font-bold border border-white/20"
                >
                  Enquire Now →
                </NavLink>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
