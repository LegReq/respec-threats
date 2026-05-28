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
        id: "T3",
        name: "Network Corruption",
        desc: "It is possible for data to be corrupted in transit, either intentionally or accidentally.",
        response: [
            {
                id: "R3",
                name: "Integrity Check",
                type: "Reduce",
                desc: "All payload messages sent via TLS are signed with a message authentication code (MAC), ensuring the recipient can verify the MAC to ensure the integrity of the data.",
            },
        ],
        elements: ["F4"],
        taxonomyName: "STRIDE",
        taxonomyClass: "Tampering",
    };

    window.ThreatModel.register(threat);
})();
