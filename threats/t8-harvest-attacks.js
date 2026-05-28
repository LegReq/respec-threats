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
        id: "T8",
        name: "Harvest Attacks",
        desc: 'Breaking cryptography is essentially a matter of time, either the time it takes traditional computers to guess the right key or the time it takes for quantum attacks to render current cryptography irrelevant. The result is a category of attacks described as "harvest now, crack later", which allow an attacker to gather encrypted network traffic now for decrypting later.',
        response: [
            {
                id: "R9",
                name: "Forward Secrecy",
                type: "Reduce",
                desc: 'Forward secrecy (sometimes called "perfect forward secrecy") assures that short-lived session keys cannot be compromised just because the long-term secrets used to create those keys are themselves compromised. Frequently changing the session keys in these systems means that each session is an independent cryptographic assurance that must be compromised independently. Compromising a root secret no longer gives the attacker access to the entire collection of harvested data.\n\nIn TLS, forward secrecy is realized by initiating a Diffie-Hellman key exchange to establish unique keys known only to the client and server and used just for that session. Even if one were to compromise the root key in the TLS certificate, the actual communications channel remains secure. Encrypted communications and sessions harvested in the past cannot be retrieved and decrypted if (when) the long-term secret keys are compromised in the future, even if the adversary actively interfered (e.g., via a man-in-the-middle attack).',
            },
        ],
        elements: ["F4"],
        taxonomyName: "STRIDE",
        taxonomyClass: "Information Disclosure",
    };

    window.ThreatModel.register(threat);
})();
