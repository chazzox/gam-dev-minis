---
layout: ../../layouts/blog-post.astro
title: How it's made
description: A brief look into the technology behind this site
# yyyy-mm-dd
date:
author_text: Charlie
author_social: https://twitter.com/_chazzox_
hidden: false
---

# A brief look into the technology behind this site

Much of this is oversimplified, don't expect a full explanation of everything. I
can't be bothered :)

## Markdown - What is a markup language?

Imagine a normal word document, you have headers, hyperlinks, bold and italic text,
images and embedded sections of code. But in order to do all of this you need to use a
dedicated application ([word]()). And if you open a `.docx` file in a program like [notepad]()
it looks like a mess.

```docx
K�����rgUKUV�����=����_rels/.rels��������������������MKA���C��l+�Hw{�7���Lvwh�L���DхR=�͛�����慥�;
X5-�69���������#Ik�L>Sob�`Rͷ��N�4)s��!I �����hd\��5�O�3�ٹd�V`�o�����J���&�e�z-�T8��ځK�����T2�y�PK�����
rgU!���������docProps/core.xml������������������m�Mk�@D��
���n Y��SI`�C��a��;~&��K�E�z�y��Z~Sd�]�ںQ%9��qs�>ޟ�'5�C�>�k��2�wz����q!��΄�姏VK�q���g�S�<�%ѓ
��*FuWNx(�W\w��@+Yr���-��B�򿃽9ȍ�A�����s�Q����~�2�E;$C�PK�����rgU���/����������docProps/app.xml���������������������
�0�{�"�ަz)������lڀ�
�Z��|���0���
br��<T����å���R����5R����L�\�C�T�+�9U���X�~���Z�a$�􀬎u}R�3�S�(�b��!�����+dO��PK�����rgUU:�f�� �����word
/document.xml�������������������]�r�8}��@�a*��%�q�f�|KTq��l*�	��I�@���~�~�~�v$u�M�%�r!5c����@����U�>��
��Y٬�+�%��y�kV�]o�V>������/�Y�	THTC6+��i�VS^�b��"e	�B�Té��Dp��5k[��NM��jx�
y�*9�A:9_��G��@H?��cJ��C[XR���$��nLyR�٬7+�L9���{R(�
O�
```

Markdown is kinda like a word document file, but instead of using the specialized
software, you can write all of the previously mentioned features in a 'code'

```md
# This is a header

## This is a sub header

### This is a sub sub header

[This is a link](http://example.com/)
![This is an image](https://picsum.photos/400/300)

bullet points...

-   **Bold text**
-   _Italic text_
```

As you can see, its pretty self explanatory. Because of its ease and simplicity, we
use markdown to write all of our blog posts. Markdown isnt the only markup language
out there, others like [latex](), [restructured text]() and [asciidoc]() are also popular.

## Svelte - What is a virtual dom library?

Before we understand what Svelte is, its worth understanding a little bit about how
websites are made these days. Before the days of [react](), [vue](), [svelte]() and [solidjs](). Even
before the era of [jquery](). Websites were made using a combination of pure html, css
and some javascript. As the wants and needs of sites grew and expanded, so did the
complexity of the underling tools. After years of bickering over the best ways forward,
and evolution ontop of evelution of the best ways to dynamically load content into the 

### Further links

If you really want to get a better idea about the world of javascript frontend. These documentaries by [honeypot]() are really good
react = https://www.youtube.com/watch?v=8pDqJVdNa44
vue = https://www.youtube.com/watch?v=OrxmtDw4pVI

## Astro - What is a meta framework?

Astro is a frontend web framework that allows us to bundle multiple libaries/framework using one, consistent and easy to use system.
The reason i chose astro is cause it allows us to generate a site which at build time contains 0 bytes of javascript, and does not need server side rendering (although this can still be implelemented if needed at a later date. Even though the code base contains svelte.
I am to keep this site simple, a challenge i have set myself is to try and keep the javascript for a given site to 0bytes if i can.

## Conclusion
In short, the technology behind the site can be boiled down to.

- pnpm
- astro
- svelte
- tailwindcss
- markdown/remark


## Thats it... cya next time :))))

