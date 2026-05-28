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
        id: "T7",
        name: "Quantum Cryptography Attacks",
        desc: "It is expected that it is only a matter of time until the current preferred cryptographic primitives are rendered irrelevant because quantum computers can solve cryptographic problems that are unfeasible on traditional Von Neumann architectures like those used in nearly all production computational platforms today.",
        response: [
            {
                id: "R7",
                name: "Quantum-secure Cryptography",
                type: "Reduce",
                desc: "Although not yet standardized (and perhaps not even proven), there exist algorithmic approaches that are believed to be resilient to quantum cryptography attacks. In the US, NIST already recommends using such algorithms where possible.",
            },
            {
                id: "R8",
                name: "Extensible Cryptography",
                type: "Transfer",
                desc: "For quantum threats, extensible cryptography allows systems to adopt new standards. For ineffective cryptosuites, extensible cryptography allows systems to swap out compromised technologies. This is done by providing an explicit mechanism for specifying and using cryptographic approaches not yet standardized with minimal retooling. If the API is flexible, implementers can move more quickly to adopt next-generation capabilities as they become available.\n\nBy transferring the threat to future extensions, developers can later address the threat through new technologies, when and if those technologies become available.",
            },
        ],
        elements: ["F4"],
        taxonomyName: "STRIDE",
        taxonomyClass: "Tampering",
    };

    window.ThreatModel.register(threat);
})();
