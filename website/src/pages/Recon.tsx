import React from "react";

function Recon() {
  return (
    <div className="flex">
      <div className="m-10">
        <h1 className="mb-4 text-copy text-4xl font-extrabold leading-none tracking-tight   ">
          Passive
        </h1>
        <ul className="list-disc">
          <li>
            <a
              className="underline"
              href="https://phoenixnap.com/kb/linux-dig-command-examples"
            >
              dig
            </a>
          </li>
          <li>
            <a className="underline" href="https://www.nslookup.io/">
              nslookup
            </a>
          </li>
          <li>
            <a className="underline" href="https://www.google.com">
              site:???.com
            </a>
          </li>
          <li>
            <a className="underline" href="https://crt.sh/">
              crt.sh
            </a>
          </li>
          <li>
            <a className="underline" href="https://archive.org/web/">
              waybackmachine
            </a>
          </li>
          <li>
            <a className="underline" href="https://dnsdumpster.com/">
              DNS Dumpster
            </a>
          </li>
        </ul>
      </div>
      <div className="m-10">
        <h1 className="mb-4 text-copy text-4xl font-extrabold leading-none tracking-tight   ">
          Active
        </h1>
        <ul className="list-disc">
          <li>
            <a className="underline" href="https://nmap.org/">
              nmap
            </a>
          </li>
          <li>
            <a className="underline" href="https://github.com/TheRook/subbrute">
              subrute
            </a>
          </li>
          <li>
            <a
              className="underline"
              href="https://github.com/aboul3la/Sublist3r"
            >
              sublist3r
            </a>
          </li>
          <li>
            <a
              className="underline"
              href="https://github.com/darkoperator/dnsrecon"
            >
              dnsrecon
            </a>
          </li>
          <li>
            <a
              className="underline"
              href="https://github.com/infosec-au/altdns"
            >
              altdns
            </a>
          </li>
          <li>
            <a
              className="underline"
              href="https://github.com/danielmiessler/SecLists"
            >
              SecLists
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Recon;
