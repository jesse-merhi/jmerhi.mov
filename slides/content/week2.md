---
title: "02: identity"
layout: "bundle"
outputs: ["Reveal"]
---

## We'll get started at 5 past!

---

{{< slide class="center" >}}
# Week02
### COMP6443
### Thanks @melon for the slides


---
{{% section %}}
# What happened this Week?
---

## Challenges
* This week is not like last - it's pretty hard. But don't give up!
* All of the challenges from this week forward ARE REALLY VALUABLE

---

## Reports
* Reports are really cool! They tell you,
1. How you found a vulnerability.
2. How bad it is.
3. How to fix it.
* You will be doing this TWICE. 

* Keep track of how you are doing things - especially now that challenges are not one step.

---

## Some example reports
* [Darkage 6443 report](https://docs.google.com/document/d/1s12Off74DZ8RcELdqdeZSxJTMkbN6l4MHtolwTUrnrU/edit)
* [Actual Pentest Reports](https://github.com/juliocesarfort/public-pentesting-reports)

--- 

# MAKE THEM FUN

--- 

![test](/assets/img/week02/example_meme.png)

{{% /section %}}

---

{{% section %}}

## lecture content

--- 

## What happened in the lecture?

---

## Challenge Topic for this Week
* This week we are looking at AuthN and AuthZ... Anyone know what they are?


{{% /section %}}

---
{{% section %}}

Authentication: You are who you say you are.

Authorization: You are only allowed to do, what you should be allowed to do.

* What are some real world examples?


---

{{% fragment %}}Concert Tickets{{% /fragment %}}    
{{% fragment %}}Membership Card{{% /fragment %}}
{{% fragment %}}UNSW Id{{% /fragment %}}

{{% fragment %}}Authentication tells you that you are allowed in.{{% /fragment %}}
{{% fragment %}}Authorization tells you where you can go once you are in.{{% /fragment %}}

___

## How do we Authenticate in Websites?

.... username and passwords.

What are some common ones? 

* admin:admin
* admin:password
* For this course? Probs quocca related things.

* If you are working with a well known library, go look for default credentials!

___
{{% /section %}}


{{% section %}}
## So when we Authenticate... How do we keep people Authenticated? 

---

### Cookies!
* A big ol' string that stores some information (usually)
* Helps the website remember who you are. 
* Ever wondered how it knows who you are every time? Probably was a cookie.

---

### If Bad: Bad.
> Cookies store session information. So if they are *HACKED* then its bad.

Types of Cookies: 
* Session tokens (e.g. Flask/Express)
* [JWT (JSON Web Token)](https://jwt.io)

---

### How-to-hack: Cookies
* Modifying them (more on that soon)
* Stealing Cookies.. done though,
    * Cross-site scripting (XSS) [week7/8]
    * MITM attacks
    * Cross-site request forgery (CSRF) [week7/8]
* Forging cookies (called "baking")

---

## Securing Cookies (Options)
* HTTP-only (prevents XSS)
* secure (prevents MITM)
* same origin (prevents CSRF)
* expiry

---
{{% /section %}}
## Demo
* [Basic Cookies](http://mercury.picoctf.net:17781)

* Burp intruder (elite hackerman)

---

## A note on enumeration
{{% section %}}

* rate limit (or we'll do it for you)
> 429/429/429/429

---

## More recon
* [robots.txt](https://www.google.com/robots.txt)
* [sitemap.xml](https://www.google.com/sitemap.xml)
* javascript files
* html comments
* wappalyzer

---

ps

*N.B. Both sub-domain enumeration and sub-directory brute-forcing are discouraged and will not assist you in these challenges. However, you may be find it useful to enumerate IDs or passwords.*

*basically, do educated brute forcing*

{{% /section %}}

---

### Go do some challenges

---
