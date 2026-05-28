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
        id: "T9",
        name: "Flawed Cryptosuite",
        desc: "The suite of functions that implement cryptographic primitives can contain errors that enable an attacker to exploit idiosyncrasies at either the algorithmic or implementation layer.",
        response: [
            {
                id: "R10",
                name: "Open Source Cryptosuites",
                type: "Transfer",
                desc: '"Many eyes" is a cryptography principle that the more experts you have able to evaluate and test a system, the more likely it is to identify its flaws. Open source projects enable anyone to view the code for a given cryptosuite, increasing the likelihood that any given flaw might be found and fixed.',
            },
            {
                id: "R8",
                name: "Extensible Cryptography",
                type: "Reduce",
                desc: "For quantum threats, extensible cryptography allows systems to adopt new standards. For bad cryptosuites, extensible cryptography allows systems to swap out compromised technologies. This is done by providing an explicit mechanism for specifying and using cryptographic approaches not yet standardized with minimal retooling. If the API is flexible, implementers can move more quickly to adopt next-generation capabilities as they become available.",
            },
            {
                id: "R10",
                name: "Vetted Standards",
                type: "Reduce",
                desc: "Cryptosuites sometimes have flaws in the fundamental algorithms. One well-worn response to this problem is rigorous testing and evaluation performed by national standards bodies like NIST in the US and ENISA in the EU. To a lesser extent, voluntary standards bodies like ISO, IETF, and the W3C also publish vetted cryptographic standards. The standards endorsed by these organizations are more likely to be robust compared to software developed in-house or through informal collaboration and open-source licensing.",
            },
        ],
        elements: ["P1", "P3"],
        taxonomyName: "STRIDE",
        taxonomyClass: "Spoofing",
    };

    window.ThreatModel.register(threat);
})();
