(function () {
  var threat = {
    "id": "T10",
    "name": "The Internet protocol suite (TCP/IP)",
    "desc": "A secure Web relies on a large family of interrelated components, commonly referred to as the Internet Protocol Suite, plus web content standards. The specifications that affect usage discussed in this threat model include BGP, DHCP, DNS, HTTP, HTTPS, TLS, X.509 TCP, IP, ARP, PPP, MAC, HTML, CSS, ECMASCRIPT, CORS, Wi-Fi, and Ethernet.\n\nThis threat model is an intentionally simplified example, leaving a more thorough analysis to be addressed on a specification by specification basis.",
    "response": [
        {
            "id": "R11",
            "name": "Threat Model Dependencies",
            "type": "Transfer",
            "desc": "Implementers should investigate the threat models of related technologies to fully understand the scope of potential threats to the Web. In particular, consider spoofing of credentials, tampered resources, surveillance on the network, and routing failures."
        }
    ],
    "elements": [
        "F2",
        "F4"
    ]
};

  window.ThreatModel.register(threat);
})();
