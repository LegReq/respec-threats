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
        id: "T5",
        name: "Key Compromise",
        desc: "Any time a server relies on private keys for cryptographic operations, the security of those keys is a critical feature of the system. Compromising those keys would allow an attacker to perform cryptographic operations that are not authorized by the legitimate owner of the website. For HTTPS, that would allow malicious websites outside the owner\u2019s control to present a false TLS secured website that would appear to be legitimate.",
        response: [
            {
                id: "R5",
                name: "Hardware Security Modules (HSMs)",
                type: "Reduce and Transfer",
                desc: "Hardware Security Modules (HSM) allow for isolation of cryptographic keys from the processes that rely on them, by exposing a limited set of cryptographic functions operating on private keys that, by design, can never leave the HSM.\n\nIt\u2019s worth noting that while HSMs do reduce the attack surface for keys, they don\u2019t eliminate it. The chips, the device, and the platform software must all correctly and use the HSM such that different applications cannot inappropriately trigger cryptographic services using keys created for other purposes. This shifts the burden from the application developer to the platform provider, which is considered a healthy improvement given the natural alignment of incentives\u2014the platform provider wants their platform to be trusted\u2014and the shared value by providing that capability to all applications rather than requiring each application to secure its own keys.\n\nFrom a risk perspective, some of the threat is reduced (keys are not used in shared processes or memory) and some of it is transferred to the HSM.",
            },
            {
                id: "R6",
                name: "Hardware Wallets",
                type: "Reduce",
                desc: "Hardware wallets isolate keys to separate devices, often accessed via USB. This ensures that the application platform cannot access the private keys even if they wanted to. Typically such devices are significantly restricted in functionality, without the ability to perform risky operations like sending and receiving messages over the network or installing complex applications that run simultaneously.\n\nA key feature of hardware wallets is establishing that an appropriate human is in the loop for all cryptographic operations. While a user might be conned or coerced into authenticating into their device and authorizing erroneous signatures, it is not possible for the platform to trigger services without appropriate user involvement. Some platforms only check for a live human, e.g., FIDO 2FA, while others use PINs or biometrics to ensure the human is explicitly authorized to use that device.",
            },
        ],
        elements: ["C3"],
        taxonomyName: "STRIDE",
        taxonomyClass: "Elevation of Privilege",
    };

    window.ThreatModel.register(threat);
})();
