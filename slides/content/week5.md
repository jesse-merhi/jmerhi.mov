---
title: "05: serverside"
layout: "bundle"
outputs: ["Reveal"]
---

## We'll get started at 18:05

---

{{< slide class="center" >}}
# Week05
### COMP6443 H18A 

---

# House cleaning 
{{% section %}}
## Midterm
> How'd you all find it (trivial enough?)
> Gonna do some of them challenges later

---

## This week

- Local File Inclusion
- Server Side Request Forgery
- Server Side Template Injection
- Reverse Shells

{{% /section %}}

---
{{% section %}}
### Local File Inclusion / Server Side Inclusion

- Is what it sounds like.
- Getting the server to include a file on a webpage
- Uses includes
---

Demo (Pico CTF) "Forbidden Paths" (Local File Disclosure)

---

Why is this bad? 

> ../../../../../../etc/passwd

```php
<?php
// Get the page to include from the URL parameter
$page = $_GET['page'];
// Include the requested page
include($page . '.html');
?>
```

> What if you can upload files and then have them executed? Whats that called?

---

How do we fix? 

> allowlist
> santise inputs for "../"
> dont do it?

--- 
{{% /section %}}

---

## SSRF
{{% section %}}

### Server-side request forgery
* Trick a server into doing stuff it doesn't intend to
* Consider `HAAS`, we can't access `KB`, but `HAAS` could, and we can send requests through `HAAS`
* What if we could access other internal services through `HAAS`, which aren't expecting it

---

### Exploitation
* Internal services might (often will) be less secure than externally facing ones
* What can we do?
  * Retrieve/disclose information (ssi/lfi)
  * Remote code execution / Reverse shells?
  * Other bad stuff

---

## [Demo](https://github.com/lachlan-waugh/6443/tree/main/demos/server-side-injection/ssrf)

---

### Remediation
* Don't assume local/internal services will be safe
* Monitor internal requests, block any suspicious activity
  * e.g. very long execution time could be someone fetchng information from a database
* A whitelist of IPs that can access internal services
* A *good* WAF

{{% /section %}}

---
## SSTI
{{% section %}}
### Server-side template injection
* Templating engines (eg. Jinja2, Pug) use templates to inject code and variables into static files

* Jinja2: `{{`\<CODE HERE\>`}}` e.g. `{{7*7}}` => `49`

* *what if we tricked the template rendering into thinking our user-supplied content was code?*

---

## [Demo](https://github.com/lachlan-waugh/6443/tree/main/demos/server-side-injection/ssti)

---

{{% /section %}}

---

## Basic PHP injection
{{% section %}}
* PHP is the worst language in the world

---

## [Demo](https://github.com/lachlan-waugh/6443/tree/main/demos/server-side-injection/php_webshell)

{{% /section %}}

---

{{% section %}}

## bash injection
* If you're ever using os.system() (or similar) to call shell functions containing user input
  * first of all, probably don't
  * second of all, it's kinda vulnerable

---

## [Demo](https://github.com/lachlan-waugh/6443/tree/main/demos/server-side-injection/shell_injection)

---

## reverse shells
* Sometimes you can get command injection, but it's really tedious
* wouldn't it be easier if you could just get send your commands directly via terminal?

> checkout [explainshell](https://www.explainshell.com/explain?cmd=nc+-lnvp+9999) and [revshells](https://revshells.com)

---

## No demo on work laptop :( THERE ARE PLENTY OF CHALLENGES THOUGH

---

{{% /section %}}


---

# Ok
> Midterm walkthrough? Yes or No?

---

## Now do some challenges
> What you all came for lol