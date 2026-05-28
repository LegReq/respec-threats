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
        id: "T6",
        name: "Library Compromise",
        desc: "Whether developed internally or licensed from others, reusable code libraries might be compromised by an attacker. This includes both dynamically linked and statically linked components.",
        response: [
            {
                id: "R7",
                name: "Open Source Libraries",
                type: "Transfer",
                desc: '"Many eyes" is a cryptography principle that the more experts you have able to evaluate and test a system, the more likely it is to identify its flaws. Open source projects enable anyone to view the code for a given library, increasing the likelihood that any given flaw might be found and fixed.\n\nThis includes licensing internally developed code under an open source license to enable customers and collaborators to evaluate and report on potential compromises.',
            },
            {
                id: "R8",
                name: "Test Suites",
                type: "Reduce",
                desc: "Test suites let you verify the codebase works as intended for a particular set of test vectors. While no set of tests can guarantee the library is not compromised, libraries with good coverage in their tests are more likely to identify and fix compromises at the repo before any developers download the library.",
            },
        ],
        elements: ["P1", "P2", "P3"],
        taxonomyName: "STRIDE",
        taxonomyClass: "Tampering",
    };

    window.ThreatModel.register(threat);
})();
