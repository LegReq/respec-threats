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
        id: "T4",
        name: "Fraudulent Certificate",
        desc: "The TLS certificate provided by a website could be faked.",
        response: [
            {
                id: "R4",
                name: "Signed Certificates",
                type: "Reduce",
                desc: "TLS system relies on cryptographic signatures to ensure that the TLS certificate is not manipulated in transit from the website to the web browser.\n\nIt is important to note that while the signature ensures the certificate has not been manipulated, the signature says nothing about the truthfulness of the contents of that certificate, which must be addressed at a different layer, e.g., with a hierarchy of certificate authorities with explicit trust relationships.",
            },
        ],
        elements: ["O1"],
        taxonomyName: "STRIDE",
        taxonomyClass: "Spoofing",
    };

    window.ThreatModel.register(threat);
})();
