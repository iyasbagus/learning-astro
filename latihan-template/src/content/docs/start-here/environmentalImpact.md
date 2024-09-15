---
title: Eco-friendly docs
description: A reference page in my new Starlight docs site.
---

Estimates for the climate impact of the web industry range from between <a href="">2%</a> and <a href="">4% of global carbon emissions</a>, roughly equivalent to the emissions of the airline industry. There are many complex factors in calculating the ecological impact of a website, but this guide includes a few tips for reducing the environmental footprint of your docs site.

The good news is, choosing Starlight is a great start. According to the Website Carbon Calculator, this site is <a href=''>cleaner than 99% of web pages tested,</a> producing 0.01g of CO₂ per page visit.

## Page weight

The more data a web page transfers, the more energy resources it requires. In April 2023, the median web page required a user to download more than 2,000 KB according to <a href="">data from the HTTP Archive.</a>

Starlight builds pages that are as lightweight as possible. For example, on a first visit, a user will download less than 50 KB of compressed data — just 2.5% of the HTTP archive median. With a good caching strategy, subsequent navigations can download as little as 10 KB.

## Images

While Starlight provides a good baseline, images you add to your docs pages can quickly increase your page weight. Starlight uses Astro’s <a href="">optimized asset support</a> to optimize local images in your Markdown and MDX files.

## UI components

Components built with UI frameworks like React or Vue can easily add large amounts of JavaScript to a page. Because Starlight is built on Astro, components like this load <b>zero client-side JavaScript by default</b> thanks to <a href="">Astro Islands.</a>

## Caching

Caching is used to control how long a browser stores and reuses data it already downloaded. A good caching strategy makes sure that a user gets new content as soon as possible when it changes, but also avoids pointlessly downloading the same content over and over when it hasn’t changed.

The most common way to configure caching is with the <a href=""><code>Cache-Control</code> HTTP header.</a> When using Starlight, you can set a long cache time for everything in the <code>/_astro/</code> directory. This directory contains CSS, JavaScript, and other bundled assets that can be safely cached forever, reducing unnecessary downloads:

