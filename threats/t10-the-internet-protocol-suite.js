/*
 *  Copyright 2026 Legendary Requirements
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

(function () {
    var threat = {
        id: "T10",
        name: "The Internet protocol suite (TCP/IP)",
        desc: "A secure Web relies on a large family of interrelated components, commonly referred to as the Internet Protocol Suite, plus web content standards. The specifications that affect usage discussed in this threat model include BGP, DHCP, DNS, HTTP, HTTPS, TLS, X.509 TCP, IP, ARP, PPP, MAC, HTML, CSS, ECMASCRIPT, CORS, Wi-Fi, and Ethernet.\n\nThis threat model is an intentionally simplified example, leaving a more thorough analysis to be addressed on a specification by specification basis.",
        response: [
            {
                id: "R11",
                name: "Threat Model Dependencies",
                type: "Transfer",
                desc: "Implementers should investigate the threat models of related technologies to fully understand the scope of potential threats to the Web. In particular, consider spoofing of credentials, tampered resources, surveillance on the network, and routing failures.",
            },
        ],
        elements: ["F2", "F4"],
    };

    window.ThreatModel.register(threat);
})();
