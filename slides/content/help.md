---
title: "HELP!"
layout: "bundle"
outputs: ["Reveal"]
---

## We'll get started at 5 past the hour!

---

# HELP!
### Web application Security
### Jesse (Merhi)

---

# Agenda:
- Min-maxxing your Exam
- WatchMojo Top 10 Report Tips and Tricks
- What is JWTS (and other questions from) questions.quoccabank.com


---

Go ask questions now on 

> questions.quoccabank.com 

(or throughout), we will go through them if we got time.

---

Exam Strategy

{{% section %}}

---

The #1 Most important thing to do:
> Recon

---

- Exam can cover anything
- Exam is in order (kinda)

---

### A

Midterm Content -> Auth(N/Z), IDOR, Cookies, Basic Squilly

---


### B

Everything else... XSS, SQLI, SSTI, SSRF, CSRF, TGIF (<3 Katy)

---

### C

1. Extended: Harder Challenges Covering any Content!
2. Core: Potentially devsecops, some other challenges covering any of the content

---

# Have a checklist.

---

e.g.

- robots.txt
- sitemap.xml
- source code
- javascript files


---

- Go through each challenge one by one and do your recon
- First time round hack until you get slightly stuck - then go to the next challenge.
- Don't be discouraged!

---

- Probably don't do part A if you did the midterm...
    - You have guaranteed marks from the midterm -> dont spend time re-gaining those marks.

> UNLESS YOU ARE REALLY STRUGGLING

---

- We can test things that arent in the challenges... 

> So review previous content!

> jmerhi.mov or waugh.zip!

{{% /section %}}

---

## Reports

{{% section %}}

We mark reports under 4 main categories:
1. Presentation
2. Technicality
3. Explanation
4. Remedation

---
### Presentation

- Use a template please... 
- Order by <u>__severity__</u>
- You can create a section about all the vulns if that makes it easier
- Put severity and origin in the heading
- Read it out loud to yourself to confirm 

---

> The vuln the website is vunlerable to is SQlI 
- What website? 
- Vulnerability not vuln

---

> bigapp.quoccabank.com is vulnerable to a Critical level SQLI exploit that could cause severe PII data leaks.

In one concise sentence we are able to identify the 
- origin
- Severity level
- Vuln type
- Impact


---

### Technicality

- Risk Matrix -> Have an informational vulnerability class
- How many vulns did you list? 
- Steps to reproduce make sense!
- Steps are concise too!

---

### Explanation

> This one people got really really wrong.


---

Did your classification match the true severity of the vulnerability

> Is a recon subdomain really a medium level vulnerability? 

Should we prioritise admin.quoccabank.com over sciencetoday.quoccabank.com? 

---


- This occurred due to no informational level in a matrix.

> Use Common sense.

---

What is the business impact? 

---

>This is RCE which is bad

or

>The RCE is into a banking server, which could contain customer records, 
this is bad because the RCE could cause disclosure or loss of customer data

---

That being said - we need you to explain the vuln too, the technical impact.

> THINK PAST WHERE YOU GOT!

If you got RCE? What can you do now that you have RCE? 

---

### Remediation

Word of warning - dont ChatGPT it... we know its ChatGPT

e.g.

> Subdomain takeover for Recon? 

---

Give me lots of detail about the remediation - not just surface level.

Not just "use parametrized queries"

We identified that the target server is using flask and mysql, an example for the backend code we suspect is,

```python
query = ("SELECT * FROM users WHERE username='" + 
    username + "' and password ='" + password + "';")
cur.execute(query)

```

---

We suggest changing the code to use parametrised queries instead like so,

```python
cur.execute("SELECT * FROM users WHERE username=%s and password = %s",
    (username,password))
```

---

We might be more lenient on 6843 students in this regard - but if you want full marks then 6843 students should do this too.


---

Make the advice specific to the actual challenge - dont just use your general remediation

---

Do you fix the problem? 

> Use auth(N/Z) checks on blog.quoccabank.com

Its a blog... 


---

What about for something like lookup? 

> Perhaps recommend against the idea of lookup - if not then why not sandbox? 

```python
import os

if folder_name = ".":
    return os.listdir(".")
elif folder_name.startsWith("/") or folder_name.startsWith("~"):
    return "File not found."

for entity in os.listdir(folder_name):
    if entity == folder_name:
        return os.listdir(folder_name)
```

---

Finally!

Make sure to tell us about new stuff!

{{% /section %}}

---

Questions? .quoccabank.com

---
