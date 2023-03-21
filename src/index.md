---
title: About
layout: base.njk
tags: nav
---

{% include "about.md" %}

<style>
    .dog-pic, .dog-pic>img {
        width:350px;
        height: auto;
    }
</style>

{% image "src/assets/image.jpeg","dogs", "dog-pic" %}