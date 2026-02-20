export interface Post {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
  tags: string[];
}

const posts: Post[] = [
  {
    slug: "introduction-to-machine-learning",
    title: "Introduction to Machine Learning",
    date: "2025-11-15",
    author: "Eric H.",
    excerpt:
      "A beginner-friendly overview of machine learning concepts, covering supervised and unsupervised learning, common algorithms, and real-world applications.",
    tags: ["Machine Learning", "AI", "Data Science"],
    content: `
Machine learning (ML) is a subset of artificial intelligence that gives computers the ability to learn from data without being explicitly programmed. Over the past decade, it has transformed industries ranging from healthcare to finance.

## What Is Machine Learning?

At its core, machine learning involves training a model on a dataset so that it can make predictions or decisions on new, unseen data. There are three main paradigms:

- **Supervised Learning**: The model is trained on labeled examples (e.g., spam email detection).
- **Unsupervised Learning**: The model discovers patterns in unlabeled data (e.g., customer segmentation).
- **Reinforcement Learning**: An agent learns by interacting with an environment and receiving rewards (e.g., game-playing AI).

## Common Algorithms

Some widely used algorithms include:

1. **Linear Regression** – Predicts a continuous value based on input features.
2. **Decision Trees** – Splits data recursively based on feature thresholds.
3. **Neural Networks** – Layers of interconnected nodes inspired by the human brain.
4. **Support Vector Machines** – Finds the optimal hyperplane separating classes.

## Real-World Applications

Machine learning powers many products we use daily:

- Recommendation engines (Netflix, Spotify)
- Image recognition (Google Photos)
- Natural language processing (ChatGPT)
- Fraud detection in banking

As datasets grow and compute becomes cheaper, machine learning will continue to unlock new possibilities across every domain.
    `.trim(),
  },
  {
    slug: "the-future-of-quantum-computing",
    title: "The Future of Quantum Computing",
    date: "2025-12-03",
    author: "Eric H.",
    excerpt:
      "Exploring the promises and challenges of quantum computing, from qubit stability to potential breakthroughs in cryptography and drug discovery.",
    tags: ["Quantum Computing", "Technology", "Research"],
    content: `
Quantum computing is poised to revolutionize computation by exploiting the principles of quantum mechanics—superposition and entanglement—to process information in fundamentally new ways.

## How Quantum Computers Work

Unlike classical bits that represent either 0 or 1, **qubits** can exist in a superposition of both states simultaneously. When entangled, qubits can be correlated in ways that have no classical equivalent, enabling quantum algorithms to evaluate many possibilities at once.

## Key Milestones

- **2019**: Google claimed quantum supremacy by completing a computation in 200 seconds that would take a classical supercomputer 10,000 years.
- **2023**: IBM unveiled a 1,000+ qubit processor.
- **2025**: Error correction techniques advanced significantly, bringing fault-tolerant quantum computing closer to reality.

## Promising Applications

1. **Cryptography**: Quantum computers could break current RSA encryption, driving the development of post-quantum cryptography standards.
2. **Drug Discovery**: Simulating molecular interactions at the quantum level to accelerate pharmaceutical research.
3. **Optimization**: Solving complex logistics, supply chain, and financial portfolio problems far more efficiently.

## Challenges Ahead

Decoherence—the tendency of qubits to lose their quantum state—remains the biggest obstacle. Maintaining qubit stability requires temperatures near absolute zero and extremely precise control systems.

Despite these hurdles, investment from governments and technology giants signals that practical quantum computing is a matter of when, not if.
    `.trim(),
  },
  {
    slug: "solid-state-drives-explained",
    title: "Solid-State Drives Explained",
    date: "2026-01-10",
    author: "Eric H.",
    excerpt:
      "A deep dive into how SSDs work, comparing NAND flash types, controller architectures, and what makes modern SSDs dramatically faster than hard disk drives.",
    tags: ["Hardware", "Storage", "SSD"],
    content: `
Solid-State Drives (SSDs) have become the dominant storage medium for personal computers, laptops, and enterprise servers. Unlike traditional Hard Disk Drives (HDDs) that rely on spinning magnetic platters, SSDs store data in NAND flash memory chips—resulting in dramatically faster read/write speeds and greater durability.

## How NAND Flash Works

NAND flash memory stores data as electrical charges in floating-gate transistors. Each cell can store:

- **SLC (Single-Level Cell)**: 1 bit per cell — fastest and most durable.
- **MLC (Multi-Level Cell)**: 2 bits per cell — balanced performance and cost.
- **TLC (Triple-Level Cell)**: 3 bits per cell — most common in consumer SSDs.
- **QLC (Quad-Level Cell)**: 4 bits per cell — highest density, lowest endurance.

## The Role of the Controller

The SSD controller is the brain of the drive, responsible for:

- **Wear leveling**: Distributing writes evenly across cells to extend lifespan.
- **Error Correction (ECC)**: Detecting and correcting bit errors.
- **Garbage collection**: Reclaiming space from deleted data.
- **DRAM cache**: Buffering frequently accessed data for even faster lookups.

## NVMe vs. SATA

Modern SSDs connect via either SATA or NVMe (Non-Volatile Memory Express):

| Interface | Max Speed | Common Use |
|-----------|-----------|------------|
| SATA III  | ~550 MB/s | Budget laptops, older systems |
| NVMe PCIe 3.0 | ~3,500 MB/s | Mainstream desktops/laptops |
| NVMe PCIe 4.0 | ~7,000 MB/s | High-performance workstations |
| NVMe PCIe 5.0 | ~14,000 MB/s | Enthusiast and enterprise use |

## Why SSDs Matter

Beyond raw speed, SSDs offer silent operation, lower power consumption, and resistance to physical shock—making them ideal for mobile devices and always-on servers alike. As prices continue to fall, SSDs are replacing HDDs in virtually every segment of the market.
    `.trim(),
  },
  {
    slug: "understanding-large-language-models",
    title: "Understanding Large Language Models",
    date: "2026-02-05",
    author: "Eric H.",
    excerpt:
      "An accessible guide to how large language models like GPT work under the hood, covering transformers, tokenization, training, and alignment.",
    tags: ["AI", "NLP", "LLMs"],
    content: `
Large Language Models (LLMs) such as GPT-4, Claude, and Gemini have captured the world's imagination. But how do they actually work? This post unpacks the core ideas behind these systems.

## Transformers: The Foundation

Modern LLMs are built on the **Transformer** architecture, introduced in the 2017 paper *"Attention Is All You Need"*. The key innovation is the **self-attention mechanism**, which allows the model to weigh the relevance of every word in a sequence against every other word—capturing long-range dependencies that earlier models (like RNNs) struggled with.

## Tokenization

Text is first broken into **tokens**—chunks of characters that can be whole words, subwords, or individual characters. For example, "erichology" might be tokenized as ["eric", "hology"]. Models operate on token IDs, not raw text.

## Pre-training

During pre-training, the model is trained on vast corpora of text (billions of web pages, books, code) using a simple objective: **predict the next token**. This forces the model to internalize grammar, facts, reasoning patterns, and even common sense.

## Fine-tuning and RLHF

Raw pre-trained models can produce harmful or irrelevant outputs. **Instruction fine-tuning** teaches the model to follow instructions. **Reinforcement Learning from Human Feedback (RLHF)** further aligns the model by training a reward model on human preferences and using it to guide further training.

## Capabilities and Limitations

LLMs excel at:
- Text generation, summarization, translation
- Code completion and debugging
- Question answering and reasoning

But they can also **hallucinate**—confidently stating false information—and may reflect biases present in their training data. Ongoing research in interpretability and alignment aims to address these limitations.

The rapid progress in LLMs suggests we are still in the early chapters of the AI revolution.
    `.trim(),
  },
  {
    slug: "web-performance-optimization-techniques",
    title: "Web Performance Optimization Techniques",
    date: "2026-02-18",
    author: "Eric H.",
    excerpt:
      "Practical strategies to speed up your website, from image optimization and code splitting to caching strategies and Core Web Vitals.",
    tags: ["Web Development", "Performance", "Frontend"],
    content: `
A fast website isn't just a luxury—it's essential for user retention and SEO. Studies show that every 100ms of latency can reduce conversion rates by up to 1%. Here are key techniques to optimize web performance.

## Measure First

Before optimizing, measure your baseline using tools like:

- **Google PageSpeed Insights** – Gives a performance score and actionable recommendations.
- **Lighthouse** – Built into Chrome DevTools for in-depth audits.
- **WebPageTest** – Waterfall charts showing every network request.

The three Core Web Vitals Google tracks are:
- **LCP (Largest Contentful Paint)**: Loading performance — target < 2.5s.
- **INP (Interaction to Next Paint)**: Interactivity — target < 200ms.
- **CLS (Cumulative Layout Shift)**: Visual stability — target < 0.1.

## Image Optimization

Images typically account for 50–70% of a page's total bytes.

- Serve modern formats: **WebP** or **AVIF** instead of JPEG/PNG.
- Use responsive images with \`srcset\` so mobile devices download smaller files.
- Lazy-load below-the-fold images with \`loading="lazy"\`.
- Use a CDN with automatic image resizing.

## JavaScript Optimization

- **Code splitting**: Ship only the JavaScript needed for the current page.
- **Tree shaking**: Remove unused code during bundling.
- **Defer non-critical scripts** using \`defer\` or \`async\` attributes.
- Minimize third-party scripts—analytics, chat widgets, and ad networks are common culprits.

## Caching Strategies

- Set long \`Cache-Control\` headers for static assets with content-hashed filenames.
- Use a **Service Worker** to cache assets for offline support.
- Leverage **CDN edge caching** to serve content from servers geographically close to users.

## Other Quick Wins

- Enable **HTTP/2** or **HTTP/3** for multiplexed connections.
- Use **font subsetting** to only load the glyphs you need.
- Preconnect to critical third-party origins: \`<link rel="preconnect">\`.

With these techniques applied systematically, most sites can achieve a PageSpeed score above 90 and deliver a noticeably snappier experience.
    `.trim(),
  },
];

export function getAllPosts(): Post[] {
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
