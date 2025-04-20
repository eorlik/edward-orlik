---
title: Web Design
tags: 
---

I'm a fan of unusual and ingenious web design, sometimes a little disappointed by the prevalence of shortlived trends and corporate identities that make up much of the web. I've designed and coded this website more or less from scratch (I've used the JAMstack framework Eleventy to make things a little easier), as well as a website for my brilliant friend, the writer Amber Husain. [Take a look here.](https://www.amberhusain.com)

{% image "src/assets/amber-website.png", " screenshot of the website amberhusain.com" %}

Below is a snapshot of another project from a couple of years ago. I was working in an office with a load of specialists, and in the course of my own work, I often had to consult with them. The problem was that it wasn't always easy to identify the right person to talk to &mdash; finding then usually required having a daisy chain of conversations with other people until _eventually_ you tracked them down.

I made a cute app which turned a shared spreadsheet on out shared drive into a set of 'top trumps' style playing cards, one for each person in the department. Colleagues could upload a summary of their responsibilities, and a tiny bio. The cards were searchable, and you could create a list of multiple colleagues' email addresses by clicking on their card.

This kind of thing does exist in the software-as-a-service world, but given the sensitivity of the information, none of it was suitable, and I fancied making one myself anyway.

The app is in a single html file which contains a bit of html for the page structure,  all of the CSS for styling, and a JSON file with data for all the cards. A javascipt script dynamically creates the cards based on the data in the JSON file, and another one creates a pop-up organisation chart for each person, which shows where they sit in relation to their manager, workmates and junior colleagues.

{% image "src/assets/tech-trumps.png", "A screenshot of the Tech Trumps app" %}

It was pretty popular! I think people enjoyed the home-baked aesthetic, the fact that it was just for them, and the simple, intuitive tools.